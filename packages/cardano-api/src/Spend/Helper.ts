import type {
    MultiAsset, 
    TransactionOutputs
} from '@emurgo/cardano-serialization-lib-asmjs';
import { CardanoAPI, errorIfUndefined} from '../CardanoAPI';
import { setProtocolParameters, randomImprove, UTxOList } from './SelectCoin';

type Metadata = object | null;

type txBuilder = {
    PaymentAddress : string;
    Utxos : UTxOList;
    Outputs : TransactionOutputs;
    ProtocolParameter : ProtocolParameter;
    Metadata? : Metadata;
    MetadataLabel?: string;
    Delegation? : Delegation | null;
}

type Delegation = {
    stakeKeyHash: Uint8Array;
    poolHex: string;
    delegation: {
        active: boolean;
        rewards: string;
        stakepoolId: string;
    };
}

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

/**
 * This is a huge internal function that needs to be refactored, which takes inputs, and returns a transaction (Uint8Array)
 *
 * @param txBuilder All the information used to create a transaction.
 * ```typescript
 * {
 *      PaymentAddress : String. BECH32 payment address,
 *      Utxos : List of UTXOs in the serialization library type,
 *      Outputs : Transaction Outputs,
 *      ProtocolParameters : ProtocolParameters from getProtocolParameters(),
 *      Metadata : Optional Object if you want to include metadata in your transaction,
 *      MetadataLabel : Optional string label for the Metadata. Defaults to 721.
 *      Delegation : Delegation | null. Used if you plan on delegating from the transaction.
 * }
 * 
 * Delegation : {
 *      stakeKeyHash: Uint8Array repsersentation of a wallets stake key.
 *      poolHex: string. HEX repersentation of a stakepool
 *      delegation: {
 *          active: boolean. Wether the key is currently staking.
 *          rewards: string. Current value in rewards.
 *          stakepoolId: string. HEX or BECH32 stakepool ID.
 *      }
 * }
 * ```
 *
 * @returns A Uint8Array transaction
*/
export const _txBuilder = ({PaymentAddress, Utxos, Outputs, ProtocolParameter, Metadata = null, MetadataLabel = '721', Delegation = null} : txBuilder) : Uint8Array => {
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

    const txConfig = CardanoAPI.serializationLib.TransactionBuilderConfigBuilder.new()
    txConfig.max_tx_size(MULTIASSET_SIZE)
    txConfig.max_value_size(MULTIASSET_SIZE)
    txConfig.key_deposit(CardanoAPI.serializationLib.BigNum.from_str(ProtocolParameter.keyDeposit.toString()))
    txConfig.pool_deposit(CardanoAPI.serializationLib.BigNum.from_str(ProtocolParameter.poolDeposit.toString()))
    txConfig.coins_per_utxo_word(CardanoAPI.serializationLib.BigNum.from_str(ProtocolParameter.minUtxo.toString()))
    txConfig.fee_algo(
            CardanoAPI.serializationLib.LinearFee.new(
            CardanoAPI.serializationLib.BigNum.from_str(ProtocolParameter.linearFee.minFeeA),
            CardanoAPI.serializationLib.BigNum.from_str(ProtocolParameter.linearFee.minFeeB)
        )
    )
    
    const txBuilder = CardanoAPI.serializationLib.TransactionBuilder.new(txConfig);

    for (var i = 0; i < inputs.length; i++) {
        const utxo = inputs[i];
        txBuilder.add_input(
          utxo.output().address(),
          utxo.input(),
          utxo.output().amount()
        );
    }

    if(Delegation){
        const certificates = CardanoAPI.serializationLib.Certificates.new();
        if (!Delegation.delegation.active){
            certificates.add(
                CardanoAPI.serializationLib.Certificate.new_stake_registration(
                    CardanoAPI.serializationLib.StakeRegistration.new(
                        CardanoAPI.serializationLib.StakeCredential.from_keyhash(
                            CardanoAPI.serializationLib.Ed25519KeyHash.from_bytes(
                                Delegation.stakeKeyHash
                            )
                        )
                    )
                )
            );
        }
        const poolKeyHash = Delegation.poolHex;
   
        certificates.add(
            CardanoAPI.serializationLib.Certificate.new_stake_delegation(
                CardanoAPI.serializationLib.StakeDelegation.new(
                    CardanoAPI.serializationLib.StakeCredential.from_keyhash(
                        CardanoAPI.serializationLib.Ed25519KeyHash.from_bytes(
                            Delegation.stakeKeyHash
                        )
                    ),
                    CardanoAPI.serializationLib.Ed25519KeyHash.from_bytes(
                        CardanoAPI.buffer.from(poolKeyHash, 'hex')
                    )
              )
            )
        );
        txBuilder.set_certs(certificates);
    }


    let AUXILIARY_DATA;

    if(Metadata){
        const METADATA = CardanoAPI.serializationLib.GeneralTransactionMetadata.new();
        METADATA.insert(
            CardanoAPI.serializationLib.BigNum.from_str(MetadataLabel),
            CardanoAPI.serializationLib.encode_json_str_to_metadatum(
                JSON.stringify(Metadata),
                0
            )
        );
        AUXILIARY_DATA = CardanoAPI.serializationLib.AuxiliaryData.new();
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
        const partialChange = CardanoAPI.serializationLib.Value.new(
            CardanoAPI.serializationLib.BigNum.from_str('0')
        );
        const partialMultiAssets = CardanoAPI.serializationLib.MultiAsset.new();
        const policies = changeMultiAssets.keys();
        const makeSplit = () => {
            for (var j = 0; j < changeMultiAssets.len(); j++) {
                const policy = policies.get(j);
                const policyAssets = errorIfUndefined(changeMultiAssets.get(policy));
                const assetNames = policyAssets.keys();
                const assets = CardanoAPI.serializationLib.Assets.new();
                for (var k = 0; k < assetNames.len(); k++) {
                    const policyAsset = assetNames.get(k);
                    const quantity = errorIfUndefined(policyAssets.get(policyAsset));
                    assets.insert(policyAsset, quantity);
                    //check size
                    const checkMultiAssets = CardanoAPI.serializationLib.MultiAsset.from_bytes(
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
        const minAda = CardanoAPI.serializationLib.min_ada_required(
            partialChange,
            false,
            ProtocolParameter.minUtxo
        );
        partialChange.set_coin(minAda);

        txBuilder.add_output(
            CardanoAPI.serializationLib.TransactionOutput.new(
            CardanoAPI.serializationLib.Address.from_bech32(PaymentAddress),
            partialChange
            )
        );
    }
    txBuilder.add_change_if_needed(
        CardanoAPI.serializationLib.Address.from_bech32(PaymentAddress)
    );
    const transaction = CardanoAPI.serializationLib.Transaction.new(
        txBuilder.build(),
        CardanoAPI.serializationLib.TransactionWitnessSet.new(),
        AUXILIARY_DATA
    );

    const size = transaction.to_bytes().length * 2;
    if (size > ProtocolParameter.maxTxSize){
        throw 'The transaction is to large';
    }

    return transaction.to_bytes();
};

/**
 * Internal helper function that takes a human readable asset[] and returns a MultiAsset type.
 *
 * @param assets Asset[{unit : "policyId.assetName", quantity : number}] 
 *
 * @returns MultiAsset. This is an internal asset type used for creating transactions.
*/
export const _makeMultiAsset = (assets : Asset[]) : MultiAsset =>{
    const AssetsMap : any = {};
    for(const asset of assets){
        const [policy, assetName] = asset.unit.split('.');
        const quantity = asset.quantity;
        if(!Array.isArray(AssetsMap[policy])){
            AssetsMap[policy] = [];
        }
        AssetsMap[policy].push({
            unit: CardanoAPI.buffer.from(assetName, 'ascii').toString('hex'), 
            quantity: quantity
        });
        
    }
    const multiAsset = CardanoAPI.serializationLib.MultiAsset.new();
    for(const policy in AssetsMap){
        const ScriptHash = CardanoAPI.serializationLib.ScriptHash.from_bytes(
            CardanoAPI.buffer.from(policy,'hex')
        );
        const Assets = CardanoAPI.serializationLib.Assets.new();
        
        const _assets = AssetsMap[policy];

        for(const asset of _assets){
            const AssetName = CardanoAPI.serializationLib.AssetName.new(
                CardanoAPI.buffer.from(asset.unit,'hex'));
            const BigNum = CardanoAPI.serializationLib.BigNum.from_str(String(asset.quantity));
            Assets.insert(AssetName, BigNum);  
        }
        multiAsset.insert(ScriptHash, Assets);
    }
    return multiAsset;
};

/**
 * Internal helper function that takes a Uint8Array raw transaction, signs it, and submits it to the cardano blockchain.
 *
 * @param transactionRaw Uint8Array. This takes a raw transaction that has been built.
 *
 * @returns Promise<string> Returns the transaction hex.
*/
export const _signSubmitTx = async(transactionRaw : Uint8Array) : Promise<string> => {
    const transaction = CardanoAPI.serializationLib.Transaction.from_bytes(transactionRaw);
    const witneses = await CardanoAPI.baseCommands.signTx(
            transaction
    );
    const TransactionWitness = CardanoAPI.serializationLib.TransactionWitnessSet.from_bytes(
        CardanoAPI.buffer.from(
            witneses,
            'hex'
        )
    );
    const signedTx = CardanoAPI.serializationLib.Transaction.new(
        transaction.body(), 
        TransactionWitness,
        transaction.auxiliary_data()
    );
    if(typeof signedTx === 'string'){
        throw new Error('signedTx can not be a hex string');
    }
    
    return await CardanoAPI.baseCommands.submitTx(
        signedTx
    );
};

/**
 * Internal helper function that gets the current protocol parameters.
 *
 * @returns Promise<ProtocolParameter>. Returns a subset of the protocol parameters, necessary to calculate fees.
*/
export const getProtocolParameter = async() : Promise<ProtocolParameter>=> {
    const latestBlock = await CardanoAPI.onchainData.getLatestBlock()
    if(!latestBlock) throw 'invalid protocal parameters';
    const p = await CardanoAPI.onchainData.getParameters(latestBlock.epoch)
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