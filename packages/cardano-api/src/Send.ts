import { MultiAsset, TransactionOutputs, TransactionUnspentOutput } from '@emurgo/cardano-serialization-lib-asmjs';
import { CardanoAPI } from './CardanoAPI';

type Delegate = {
    stakepoolId: string;
    metadata?: any;
    metadataLabel?: string;
};

type Utxo = {
    txHash: string;
    txId: number;
    amount: Asset[];
}

type Asset = {
    unit: string;
    quantity: string;
}

type Send = {
    address: string; 
    amount?: number; 
    assets?: Asset[];
    metadata?: any;
    metadataLabel?: string;
}

type SendMultiple = {
    recipients: {
        address: string; 
        amount?: number; 
        assets?: Asset[];
    }[];
    metadata?: any;
    metadataLabel?: string;
}

export class Spend{

    private Commands : any;
    private Blockfrost : any;
    private SelectCoin : any;
    private wasm : any;
    private buffer : any;

    constructor(Commands : any, Blockfrost : any, wasm : any, buffer : any, SelectCoin : any ){
        this.Commands = Commands;
        this.Blockfrost = Blockfrost;
        this.wasm = wasm;
        this.buffer = buffer;
        this.SelectCoin = SelectCoin;
    }


    send = async({address, amount = 0, assets = [], metadata = null, metadataLabel = '721'} : Send) : 
    Promise<string> => {
        const PaymentAddress = 
        await this.Commands.getChangeAddress(CardanoAPI.AddressReturnType.bech32);
        const protocolParameter = await this.getProtocolParameter();
        const utxos = (await this.Commands.getUtxos());
        const lovelace = Math.floor(amount * 1000000).toString();

        const ReceiveAddress = address;
        
        const multiAsset = this._makeMultiAsset(assets);

        const outputValue = this.wasm.Value.new(
            this.wasm.BigNum.from_str(lovelace)
        );

        const minAda = this.wasm.min_ada_required(
            outputValue, 
            this.wasm.BigNum.from_str(protocolParameter.minUtxo)
        );
        if(this.wasm.BigNum.from_str(lovelace).compare(minAda) < 0)outputValue.set_coin(minAda);

        if(assets.length > 0)outputValue.set_multiasset(multiAsset);

        const outputs = this.wasm.TransactionOutputs.new();
        outputs.add(
            this.wasm.TransactionOutput.new(
                this.wasm.Address.from_bech32(ReceiveAddress),
                outputValue
            )
        );
        
        const RawTransaction = this._txBuilder({
            PaymentAddress: PaymentAddress,
            Utxos: utxos,
            Outputs: outputs,
            ProtocolParameter: protocolParameter,
            Metadata: metadata,
            MetadataLabel: metadataLabel,
            Delegation: null
        });

        return await this._signSubmitTx(RawTransaction);
    }
    
    sendMultiple = async ({recipients = [], metadata = null, metadataLabel = '721'}: SendMultiple) : 
    Promise<string> => {
        const PaymentAddress = await this.Commands.getChangeAddress(CardanoAPI.AddressReturnType.bech32);

        const protocolParameter = await this.getProtocolParameter();
        const utxos = (await this.Commands.getUtxos());

        const outputs = this.wasm.TransactionOutputs.new();

        for (const recipient of recipients){
            const lovelace = Math.floor((recipient.amount || 0) * 1000000).toString();
            const ReceiveAddress = recipient.address;
            const multiAsset = this._makeMultiAsset(recipient.assets || []);

            const outputValue = this.wasm.Value.new(
                this.wasm.BigNum.from_str(lovelace)
            );
    
            const minAda = this.wasm.min_ada_required(
                outputValue, 
                this.wasm.BigNum.from_str(protocolParameter.minUtxo)
            );

            if(this.wasm.BigNum.from_str(lovelace).compare(minAda) < 0)outputValue.set_coin(minAda);
    
            if((recipient.assets || []).length > 0) outputValue.set_multiasset(multiAsset);

            outputs.add(
                this.wasm.TransactionOutput.new(
                    this.wasm.Address.from_bech32(ReceiveAddress),
                    outputValue
                )
            );
        }

        const RawTransaction = this._txBuilder({
            PaymentAddress: PaymentAddress,
            Utxos: utxos,
            Outputs: outputs,
            ProtocolParameter: protocolParameter,
            Metadata: metadata,
            MetadataLabel: metadataLabel,
            Delegation: null
        });

        return await this._signSubmitTx(RawTransaction);
    }

    delegate = async({stakepoolId, metadata = null, metadataLabel = '721'} : Delegate) : Promise<string> => {

        const protocolParameter = await this.getProtocolParameter();
        const stakeAddress = await this.Commands.getRewardAddress(CardanoAPI.AddressReturnType.bech32);
        const stakeKeyHash = this.wasm.RewardAddress.from_address(
            this.wasm.Address.from_bech32(
                stakeAddress
            )
        ).payment_cred().to_keyhash().to_bytes();
  
        const getDelegation = async(rewardAddr: string) : Promise<any> => {
            const stake = await this.Blockfrost.blockfrostRequest(`/accounts/${rewardAddr}`); 
            if(!stake || stake.data.error || !stake.data.pool_id) return {};

            return {
                active: stake.active,
                rewards: stake.withdrawable_amount,
                stakepoolId: stake.pool_id,
            };
        };

        const delegation = await getDelegation(stakeAddress);

        const pool = await this.Blockfrost.blockfrostRequest(`/pools/${stakepoolId}`);

        const poolHex = pool.data.hex;

        const utxos = await this.Commands.getUtxos();

        const PaymentAddress = await this.Commands.getChangeAddress(CardanoAPI.AddressReturnType.bech32);
    
        const outputs = this.wasm.TransactionOutputs.new();

        outputs.add(
            this.wasm.TransactionOutput.new(
              this.wasm.Address.from_bech32(PaymentAddress),
              this.wasm.Value.new(
                  this.wasm.BigNum.from_str(protocolParameter.keyDeposit)
              )
            )
        );

        const transaction = this._txBuilder({
            PaymentAddress,
            Utxos: utxos,
            ProtocolParameter: protocolParameter,
            Outputs: outputs,
            Delegation: {
                poolHex: poolHex,
                stakeKeyHash: stakeKeyHash,
                delegation: delegation
            },
            Metadata: metadata,
            MetadataLabel: metadataLabel
        });

        const txHash = await this._signSubmitTx(transaction);

        return txHash;
    }

    getUtxos = async() : Promise<Array<Utxo>> => {
        let Utxos = (await this.Commands.getUtxosHex()).map((utxo  : string) => 
        this.wasm.TransactionUnspentOutput.from_bytes(
                this.buffer.from(
                    utxo, 
                    'hex'
                )
            )
        );
        let UTXOS = [];
        for(let utxo of Utxos){
            let assets = this._utxoToAssets(utxo);

            UTXOS.push({
                txHash: this.buffer.from(
                    utxo.input().transaction_id().to_bytes(),
                    'hex'
                    ).toString('hex'),
                txId: utxo.input().index(),
                amount: assets
            });
        }
        return UTXOS;
    }
    

    _utxoToAssets = (utxo: TransactionUnspentOutput) : Asset[] => {
        const value : any = utxo.output().amount();
        const assets = [];
        assets.push({ unit: 'lovelace', quantity: value.coin().to_str() });
        if (value.multiasset()) {
            const multiAssets = value.multiasset().keys();
            for (var j = 0; j < multiAssets.len(); j++) {
            const policy = multiAssets.get(j);
            const policyAssets = value.multiasset().get(policy);
            const assetNames = policyAssets.keys();
            for (var k = 0; k < assetNames.len(); k++) {
                const policyAsset = assetNames.get(k);
                const quantity = policyAssets.get(policyAsset);
                const asset =
                    this.buffer.from(
                        policy.to_bytes()
                    ).toString('hex') + '.' +
                    this.buffer.from(
                        policyAsset.name()
                    ).toString('ascii');


                assets.push({
                    unit: asset,
                    quantity: quantity.to_str(),
                });
            }
            }
        }
        return assets;
    }

    _txBuilder = ({PaymentAddress, Utxos, Outputs, ProtocolParameter, 
        Metadata = null, MetadataLabel = '721', Delegation = null} : {
        PaymentAddress : string;
        Utxos : any;
        Outputs : TransactionOutputs;
        ProtocolParameter : any;
        Metadata? : any;
        MetadataLabel?: string;
        Delegation? : {
            stakeKeyHash: string;
            poolHex: string;
            delegation: {
                active: boolean;
                rewards: string;
                stakepoolId: string;
            };
        } | null;
    }) : Uint8Array => {
        const MULTIASSET_SIZE = 5848;
        const VALUE_SIZE = 5860;
        const totalAssets = 0;
        this.SelectCoin.setProtocolParameters(
            ProtocolParameter.minUtxo.toString(),
            ProtocolParameter.linearFee.minFeeA.toString(),
            ProtocolParameter.linearFee.minFeeB.toString(),
            ProtocolParameter.maxTxSize.toString()
        );
        const selection = this.SelectCoin.randomImprove(
            Utxos,
            Outputs,
            20 + totalAssets
        );
        const inputs = selection.input;

        const txBuilder = this.wasm.TransactionBuilder.new(
            this.wasm.LinearFee.new(
                this.wasm.BigNum.from_str(ProtocolParameter.linearFee.minFeeA),
                this.wasm.BigNum.from_str(ProtocolParameter.linearFee.minFeeB)
            ),
            this.wasm.BigNum.from_str(ProtocolParameter.minUtxo.toString()),
            this.wasm.BigNum.from_str(ProtocolParameter.poolDeposit.toString()),
            this.wasm.BigNum.from_str(ProtocolParameter.keyDeposit.toString()),
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
            const certificates = this.wasm.Certificates.new();
            if (!Delegation.delegation.active){
                certificates.add(
                    this.wasm.Certificate.new_stake_registration(
                        this.wasm.StakeRegistration.new(
                            this.wasm.StakeCredential.from_keyhash(
                                this.wasm.Ed25519KeyHash.from_bytes(
                                    this.buffer.from(Delegation.stakeKeyHash, 'hex')
                                )
                            )
                        )
                    )
                );
            }
            
            const poolKeyHash = Delegation.poolHex;
            certificates.add(
                this.wasm.Certificate.new_stake_delegation(
                  this.wasm.StakeDelegation.new(
                    this.wasm.StakeCredential.from_keyhash(
                      this.wasm.Ed25519KeyHash.from_bytes(
                        this.buffer.from(Delegation.stakeKeyHash, 'hex')
                      )
                    ),
                    this.wasm.Ed25519KeyHash.from_bytes(
                      this.buffer.from(poolKeyHash, 'hex')
                    )
                  )
                )
            );
            txBuilder.set_certs(certificates);
        }


        var AUXILIARY_DATA;

        if(Metadata){
            const METADATA = this.wasm.GeneralTransactionMetadata.new();
            METADATA.insert(
                this.wasm.BigNum.from_str(MetadataLabel),
                this.wasm.encode_json_str_to_metadatum(
                    JSON.stringify(Metadata),
                    0
                )
            );
            AUXILIARY_DATA = this.wasm.AuxiliaryData.new();
            AUXILIARY_DATA.set_metadata(METADATA);
            //const auxiliaryDataHash = this.wasm.hash_auxiliary_data(AUXILIARY_DATA)
            txBuilder.set_auxiliary_data(AUXILIARY_DATA);
        }

        for(var i=0; i<Outputs.len(); i++){
            txBuilder.add_output(Outputs.get(i));
        }
        
        const change = selection.change;
        const changeMultiAssets = change.multiasset();
        // check if change value is too big for single output

        if (changeMultiAssets && change.to_bytes().length * 2 > VALUE_SIZE) {
            const partialChange = this.wasm.Value.new(
                this.wasm.BigNum.from_str('0')
            );
        
            const partialMultiAssets = this.wasm.MultiAsset.new();
            const policies = changeMultiAssets.keys();
            const makeSplit = () => {
                for (var j = 0; j < changeMultiAssets.len(); j++) {
                    const policy = policies.get(j);
                    const policyAssets = changeMultiAssets.get(policy);
                    const assetNames = policyAssets.keys();
                    const assets = this.wasm.Assets.new();
                    for (var k = 0; k < assetNames.len(); k++) {
                        const policyAsset = assetNames.get(k);
                        const quantity = policyAssets.get(policyAsset);
                        assets.insert(policyAsset, quantity);
                        //check size
                        const checkMultiAssets = this.wasm.MultiAsset.from_bytes(
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

            const minAda = this.wasm.min_ada_required(
                partialChange,
                ProtocolParameter.minUtxo
            );
            partialChange.set_coin(minAda);

            txBuilder.add_output(
                this.wasm.TransactionOutput.new(
                this.wasm.Address.from_bech32(PaymentAddress),
                partialChange
                )
            );
        }

        txBuilder.add_change_if_needed(
            this.wasm.Address.from_bech32(PaymentAddress)
        );

        const transaction = this.wasm.Transaction.new(
            txBuilder.build(),
            this.wasm.TransactionWitnessSet.new(),
            AUXILIARY_DATA
        );

        const size = transaction.to_bytes().length * 2;
        if (size > ProtocolParameter.maxTxSize) throw 'The transaction is to large';

        return transaction.to_bytes();
    }

    _makeMultiAsset = (assets : Asset[]) : MultiAsset =>{
        const AssetsMap : any = {};
        for(const asset of assets){
            const [policy, assetName] = asset.unit.split('.');
            const quantity = asset.quantity;
            if(!Array.isArray(AssetsMap[policy])){
                AssetsMap[policy] = [];
            }
            AssetsMap[policy].push({
                'unit': this.buffer.from(assetName, 'ascii').toString('hex'), 
                'quantity': quantity
            });
            
        }
        const multiAsset = this.wasm.MultiAsset.new();
        for(const policy in AssetsMap){

            const ScriptHash = this.wasm.ScriptHash.from_bytes(
                this.buffer.from(policy,'hex')
            );
            const Assets = this.wasm.Assets.new();
            
            const _assets = AssetsMap[policy];

            for(const asset of _assets){
                const AssetName = this.wasm.AssetName.new(this.buffer.from(asset.unit,'hex'));
                const BigNum = this.wasm.BigNum.from_str(asset.quantity);
                
                Assets.insert(AssetName, BigNum);  
            }
            multiAsset.insert(ScriptHash, Assets);
        }
        return multiAsset;
    }

    _signSubmitTx = async(transactionRaw : Uint8Array) : Promise<string> => {
        const transaction = this.wasm.Transaction.from_bytes(transactionRaw);
        const witneses = await this.Commands.signTx(
            this.buffer.from(
                transaction.to_bytes()
            ).toString('hex')
        );

        const signedTx = this.wasm.Transaction.new(
            transaction.body(), 
            this.wasm.TransactionWitnessSet.from_bytes(
                this.buffer.from(
                    witneses,
                    'hex'
                )
            ),
            transaction.auxiliary_data()
        );

        const txhash = await this.Commands.submitTx(
            this.buffer.from(
                signedTx.to_bytes()
            ).toString('hex')
        );
        return txhash;

    }
    getProtocolParameter = async() => {

        const latestBlock = await this.Blockfrost.blockfrostRequest('/blocks/latest');
        if(!latestBlock) throw 'invalid protocal parameters';
        const p = await this.Blockfrost.blockfrostRequest(`/epochs/${latestBlock.data.epoch}/parameters`); //
        if(!p) throw 'invalid protocal parameters';

        const parameters = {
            linearFee: {
              minFeeA: p.data.min_fee_a.toString(),
              minFeeB: p.data.min_fee_b.toString(),
            },
            minUtxo: '1000000',
            poolDeposit: p.data.pool_deposit,
            keyDeposit: p.data.key_deposit,
            maxTxSize: p.data.max_tx_size, 
            slot: latestBlock.data.slot,
          };
        return parameters;    
    }
}
