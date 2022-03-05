import type {
    MultiAsset, 
    TransactionOutputs} from '@emurgo/cardano-serialization-lib-asmjs';
import { CardanoAPIObject, errorIfUndefined} from '../CardanoAPI';
import { setProtocolParameters, randomImprove, UTxOList } from './SelectCoin';

type Metadata = object | null;

type Asset = {
    unit: string;
    quantity: string;
}

type ProtocolParameter = { 
    linearFee: {
        minFeeA: string;
        minFeeB: string;
    };
    minUtxo: any;
    poolDeposit: string;
    keyDeposit: string;
    maxTxSize: number;
    slot: string; 
}

export const _txBuilder = ({
    PaymentAddress, 
    Utxos, 
    Outputs, 
    ProtocolParameter, 
    Metadata = null, 
    MetadataLabel = '721', 
    Delegation = null} : {
    PaymentAddress : string;
    Utxos : UTxOList;
    Outputs : TransactionOutputs;
    ProtocolParameter : ProtocolParameter;
    Metadata? : Metadata;
    MetadataLabel?: string;
    Delegation? : {
        stakeKeyHash: Uint8Array;
        poolHex: string;
        delegation: {
            active: boolean;
            rewards: string;
            stakepoolId: string;
        };
    } | null;
}) : Uint8Array => {
    const MULTIASSET_SIZE = 5000;
    const VALUE_SIZE = 5000;
    const totalAssets = 0;
    setProtocolParameters(
        ProtocolParameter.minUtxo.toString(),
        ProtocolParameter.linearFee.minFeeA.toString(),
        ProtocolParameter.linearFee.minFeeB.toString(),
        ProtocolParameter.maxTxSize.toString()
    );
    const selection = randomImprove(
        Utxos,
        Outputs,
        20 + totalAssets
    );

    const inputs = selection.input;

    const txBuilder = CardanoAPIObject.serializationLib.TransactionBuilder.new(
        CardanoAPIObject.serializationLib.LinearFee.new(
            CardanoAPIObject.serializationLib.BigNum.from_str(ProtocolParameter.linearFee.minFeeA),
            CardanoAPIObject.serializationLib.BigNum.from_str(ProtocolParameter.linearFee.minFeeB)
        ),
        CardanoAPIObject.serializationLib.BigNum.from_str(ProtocolParameter.minUtxo.toString()),
        CardanoAPIObject.serializationLib.BigNum.from_str(ProtocolParameter.poolDeposit.toString()),
        CardanoAPIObject.serializationLib.BigNum.from_str(ProtocolParameter.keyDeposit.toString()),
        MULTIASSET_SIZE,
        MULTIASSET_SIZE
    );

    for (var i = 0; i < inputs.length; i++) {
        const utxo = inputs[i];
        txBuilder.add_input(
          utxo.output().address(),
          utxo.input(),
          utxo.output().amount()
        );
    }

    if(Delegation){
        const certificates = CardanoAPIObject.serializationLib.Certificates.new();
        if (!Delegation.delegation.active){
            certificates.add(
                CardanoAPIObject.serializationLib.Certificate.new_stake_registration(
                    CardanoAPIObject.serializationLib.StakeRegistration.new(
                        CardanoAPIObject.serializationLib.StakeCredential.from_keyhash(
                            CardanoAPIObject.serializationLib.Ed25519KeyHash.from_bytes(
                                Delegation.stakeKeyHash
                            )
                        )
                    )
                )
            );
        }
        const poolKeyHash = Delegation.poolHex;
   
        certificates.add(
            CardanoAPIObject.serializationLib.Certificate.new_stake_delegation(
                CardanoAPIObject.serializationLib.StakeDelegation.new(
                    CardanoAPIObject.serializationLib.StakeCredential.from_keyhash(
                        CardanoAPIObject.serializationLib.Ed25519KeyHash.from_bytes(
                            Delegation.stakeKeyHash
                        )
                    ),
                    CardanoAPIObject.serializationLib.Ed25519KeyHash.from_bytes(
                        CardanoAPIObject.buffer.from(poolKeyHash, 'hex')
                    )
              )
            )
        );
        txBuilder.set_certs(certificates);
    }


    let AUXILIARY_DATA;

    if(Metadata){
        const METADATA = CardanoAPIObject.serializationLib.GeneralTransactionMetadata.new();
        METADATA.insert(
            CardanoAPIObject.serializationLib.BigNum.from_str(MetadataLabel),
            CardanoAPIObject.serializationLib.encode_json_str_to_metadatum(
                JSON.stringify(Metadata),
                0
            )
        );
        AUXILIARY_DATA = CardanoAPIObject.serializationLib.AuxiliaryData.new();
        AUXILIARY_DATA.set_metadata(METADATA);
        txBuilder.set_auxiliary_data(AUXILIARY_DATA);
    }

    for(var i=0; i<Outputs.len(); i++){
        txBuilder.add_output(Outputs.get(i));
    }
    
    const change = selection.change;
    const changeMultiAssets = change.multiasset();
    // check if change value is too big for single output
    if (changeMultiAssets && change.to_bytes().length * 2 > VALUE_SIZE) {
        const partialChange = CardanoAPIObject.serializationLib.Value.new(
            CardanoAPIObject.serializationLib.BigNum.from_str('0')
        );
        const partialMultiAssets = CardanoAPIObject.serializationLib.MultiAsset.new();
        const policies = changeMultiAssets.keys();
        const makeSplit = () => {
            for (var j = 0; j < changeMultiAssets.len(); j++) {
                const policy = policies.get(j);
                const policyAssets = errorIfUndefined(changeMultiAssets.get(policy));
                const assetNames = policyAssets.keys();
                const assets = CardanoAPIObject.serializationLib.Assets.new();
                for (var k = 0; k < assetNames.len(); k++) {
                    const policyAsset = assetNames.get(k);
                    const quantity = errorIfUndefined(policyAssets.get(policyAsset));
                    assets.insert(policyAsset, quantity);
                    //check size
                    const checkMultiAssets = CardanoAPIObject.serializationLib.MultiAsset.from_bytes(
                    partialMultiAssets.to_bytes()
                    );
                    checkMultiAssets.insert(policy, assets);
                    if (checkMultiAssets.to_bytes().length * 2 >= MULTIASSET_SIZE) {
                    partialMultiAssets.insert(policy, assets);
                    return;
                    }
                }
                partialMultiAssets.insert(policy, assets);
                }
            };

        makeSplit();
        partialChange.set_multiasset(partialMultiAssets);
        const minAda = CardanoAPIObject.serializationLib.min_ada_required(
            partialChange,
            ProtocolParameter.minUtxo
        );
        partialChange.set_coin(minAda);

        txBuilder.add_output(
            CardanoAPIObject.serializationLib.TransactionOutput.new(
            CardanoAPIObject.serializationLib.Address.from_bech32(PaymentAddress),
            partialChange
            )
        );
    }
    txBuilder.add_change_if_needed(
        CardanoAPIObject.serializationLib.Address.from_bech32(PaymentAddress)
    );
    const transaction = CardanoAPIObject.serializationLib.Transaction.new(
        txBuilder.build(),
        CardanoAPIObject.serializationLib.TransactionWitnessSet.new(),
        AUXILIARY_DATA
    );

    const size = transaction.to_bytes().length * 2;
    if (size > ProtocolParameter.maxTxSize){
        throw 'The transaction is to large';
    }

    return transaction.to_bytes();
};

export const _makeMultiAsset = (assets : Asset[]) : MultiAsset =>{
    const AssetsMap : any = {};
    for(const asset of assets){
        const [policy, assetName] = asset.unit.split('.');
        const quantity = asset.quantity;
        if(!Array.isArray(AssetsMap[policy])){
            AssetsMap[policy] = [];
        }
        AssetsMap[policy].push({
            unit: CardanoAPIObject.buffer.from(assetName, 'ascii').toString('hex'), 
            quantity: quantity
        });
        
    }
    const multiAsset = CardanoAPIObject.serializationLib.MultiAsset.new();
    for(const policy in AssetsMap){
        const ScriptHash = CardanoAPIObject.serializationLib.ScriptHash.from_bytes(
            CardanoAPIObject.buffer.from(policy,'hex')
        );
        const Assets = CardanoAPIObject.serializationLib.Assets.new();
        
        const _assets = AssetsMap[policy];

        for(const asset of _assets){
            const AssetName = CardanoAPIObject.serializationLib.AssetName.new(
                CardanoAPIObject.buffer.from(asset.unit,'hex'));
            const BigNum = CardanoAPIObject.serializationLib.BigNum.from_str(String(asset.quantity));
            Assets.insert(AssetName, BigNum);  
        }
        multiAsset.insert(ScriptHash, Assets);
    }
    return multiAsset;
};

export const _signSubmitTx = async(transactionRaw : Uint8Array) : Promise<string> => {
    const transaction = CardanoAPIObject.serializationLib.Transaction.from_bytes(transactionRaw);
    const witneses = await CardanoAPIObject.baseCommands.signTx(
            transaction
    );
    const TransactionWitness = CardanoAPIObject.serializationLib.TransactionWitnessSet.from_bytes(
        CardanoAPIObject.buffer.from(
            witneses,
            'hex'
        )
    );
    const signedTx = CardanoAPIObject.serializationLib.Transaction.new(
        transaction.body(), 
        TransactionWitness,
        transaction.auxiliary_data()
    );
    if(typeof signedTx === 'string'){
        throw new Error('signedTx can not be a hex string');
    }
    
    return await CardanoAPIObject.baseCommands.submitTx(
        signedTx
    );
};

export const getProtocolParameter = async() : Promise<ProtocolParameter>=> {
    const latestBlock = await CardanoAPIObject.onchainData.getLatestBlock()
    if(!latestBlock) throw 'invalid protocal parameters';
    const p = await CardanoAPIObject.onchainData.getParameters(latestBlock.epoch)
    if(!p) throw 'invalid protocal parameters';

    const parameters = {
        linearFee: {
          minFeeA: p.minFeeA.toString(),
          minFeeB: p.minFeeB.toString(),
        },
        minUtxo: '1000000',
        poolDeposit: p.poolDeposit,
        keyDeposit: p.keyDeposit,
        maxTxSize: p.maxTxSize, 
        slot: String(latestBlock.slot),
      };
    return parameters;    
};