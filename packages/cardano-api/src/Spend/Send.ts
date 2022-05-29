import { CardanoAPI } from '../CardanoAPI';
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

/**
 * This allows sending a transaction to a single wallet.
 *
 * @param address - BECH32 address (addr...).
 * @param amount - Number. Amount to send in ADA.
 * @param assets - [{unit : "policyId.assetName", quantity : number}].
 * @param metadata - Object. Allows user to send optional metadata with the transaction.
 * @param metadataLabel - String. Defaults to '721'. Used to give the metadata a label.
 * ```
 *
 * @returns Promise string. Returns the transaction hash.
*/
export const send = async({address, amount = 0, assets = [], metadata = null, metadataLabel = '721'} : Send) : 
Promise<string> => {
    const paymentAddress = 
    await CardanoAPI.baseCommands.getChangeAddress(CardanoAPI.addressReturnType.bech32);
    const protocolParameter = await getProtocolParameter();
    const utxos = (await CardanoAPI.baseCommands.getUtxos());
    const lovelace = Math.floor((amount || 0) * 1000000).toString();
    const receiveAddress = address;
    const multiAsset = _makeMultiAsset(assets);
    const outputValue = CardanoAPI.serializationLib.Value.new(
        CardanoAPI.serializationLib.BigNum.from_str(lovelace)
    );
    if((assets || []).length > 0){
        outputValue.set_multiasset(multiAsset);
    }
    const minAda = CardanoAPI.serializationLib.min_ada_required(
        outputValue,
        false,
        CardanoAPI.serializationLib.BigNum.from_str(protocolParameter.minUtxo || '1000000')
    );
    if(CardanoAPI.serializationLib.BigNum.from_str(lovelace).compare(minAda) < 0){
            outputValue.set_coin(minAda);
    }
    const outputs = CardanoAPI.serializationLib.TransactionOutputs.new();
    outputs.add(
        CardanoAPI.serializationLib.TransactionOutput.new(
            CardanoAPI.serializationLib.Address.from_bech32(receiveAddress),
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