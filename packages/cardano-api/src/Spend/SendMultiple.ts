import { CardanoAPIObject } from '../CardanoAPI';
import {getProtocolParameter, _makeMultiAsset, _txBuilder, _signSubmitTx} from './Helper';

type Metadata = object | null;

type Asset = {
    unit: string;
    quantity: string;
}

type SendMultiple = {
    recipients: {
        address: string; 
        amount?: number; 
        assets?: Asset[];
    }[];
    metadata?: Metadata;
    metadataLabel?: string;
}

export const sendMultiple = async ({recipients = [], metadata = null, metadataLabel = '721'}: SendMultiple) : 
Promise<string> => {
    const paymentAddress = await CardanoAPIObject.baseCommands.getChangeAddress(
        CardanoAPIObject.addressReturnType.bech32);

    const protocolParameter = await getProtocolParameter();
    const utxos = (await CardanoAPIObject.baseCommands.getUtxos());
    const outputs = CardanoAPIObject.serializationLib.TransactionOutputs.new();
    for (const recipient of recipients){
        const lovelace = Math.floor((recipient.amount || 0) * 1000000).toString();
        const receiveAddress = recipient.address;
        const multiAsset = _makeMultiAsset(recipient.assets || []);
        const outputValue = CardanoAPIObject.serializationLib.Value.new(
            CardanoAPIObject.serializationLib.BigNum.from_str(lovelace)
        );
        if((recipient.assets || []).length > 0){
            outputValue.set_multiasset(multiAsset);
        } 
        const minAda = CardanoAPIObject.serializationLib.min_ada_required(
            outputValue, 
            CardanoAPIObject.serializationLib.BigNum.from_str(protocolParameter.minUtxo || '1000000')
        );
        if(CardanoAPIObject.serializationLib.BigNum.from_str(lovelace).compare(minAda) < 0){
                outputValue.set_coin(minAda);
        }
        outputs.add(
            CardanoAPIObject.serializationLib.TransactionOutput.new(
                CardanoAPIObject.serializationLib.Address.from_bech32(receiveAddress),
                outputValue
            )
        );
    }
 
    const RawTransaction = _txBuilder({
        PaymentAddress: String(paymentAddress),
        Utxos: utxos,
        Outputs: outputs,
        ProtocolParameter: protocolParameter,
        Metadata: metadata,
        MetadataLabel: metadataLabel,
        Delegation: null
    });

    return await _signSubmitTx(RawTransaction);
};