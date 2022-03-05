import { CardanoAPIObject } from '../CardanoAPI';
import {getProtocolParameter, _makeMultiAsset, _txBuilder, _signSubmitTx} from './Helper';

type Metadata = object | null;

type Asset = {
    unit: string;
    quantity: string;
}

type Send = {
    address: string; 
    amount?: number; 
    assets?: Asset[];
    metadata?: Metadata;
    metadataLabel?: string;
}

export const send = async({address, amount = 0, assets = [], metadata = null, metadataLabel = '721'} : Send) : 
Promise<string> => {
    const paymentAddress = 
    await CardanoAPIObject.baseCommands.getChangeAddress(CardanoAPIObject.addressReturnType.bech32);
    const protocolParameter = await getProtocolParameter();
    const utxos = (await CardanoAPIObject.baseCommands.getUtxos());
    const lovelace = Math.floor((amount || 0) * 1000000).toString();
    const receiveAddress = address;
    const multiAsset = _makeMultiAsset(assets);
    const outputValue = CardanoAPIObject.serializationLib.Value.new(
        CardanoAPIObject.serializationLib.BigNum.from_str(lovelace)
    );
    if((assets || []).length > 0){
        outputValue.set_multiasset(multiAsset);
    }
    const minAda = CardanoAPIObject.serializationLib.min_ada_required(
        outputValue, 
        CardanoAPIObject.serializationLib.BigNum.from_str(protocolParameter.minUtxo || '1000000')
    );
    if(CardanoAPIObject.serializationLib.BigNum.from_str(lovelace).compare(minAda) < 0){
            outputValue.set_coin(minAda);
    }
    const outputs = CardanoAPIObject.serializationLib.TransactionOutputs.new();
    outputs.add(
        CardanoAPIObject.serializationLib.TransactionOutput.new(
            CardanoAPIObject.serializationLib.Address.from_bech32(receiveAddress),
            outputValue
        )
    );
    const rawTransaction = _txBuilder({
        PaymentAddress: String(paymentAddress),
        Utxos: utxos,
        Outputs: outputs,
        ProtocolParameter: protocolParameter,
        Metadata: metadata,
        MetadataLabel: metadataLabel,
        Delegation: null
    });
    return await _signSubmitTx(rawTransaction);
};