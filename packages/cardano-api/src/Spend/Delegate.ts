import { CardanoAPI, errorIfUndefined } from '../CardanoAPI';
import {getProtocolParameter, _makeMultiAsset, _txBuilder, _signSubmitTx} from './Helper';

type Delegate = {
    stakepoolId: string;
    metadata?: Metadata;
    metadataLabel?: string;
    rewardAddress?: string | null;
};

type Metadata = object | null;

/**
 * This function allows a user to delegate to a stakepool.
 *
 * @param stakepoolId - String. It is the only required parameter, taking a stakepoolId in HEX or BECH32.
 * @param metadata - Object. This optional parameter allows you to include metadata with the transaction.
 * @param metadataLabel - String. This optional parameter is a label for the metadata. If you are using an nft, than 721 is standard.
 * @param rewardAddress - String. This optional parameter is a optional stakeAddress (stake...). If it is not included it defaults to the first stakeAddress in a wallet.
 * 
 * @returns Promise string. Returns the transaction hash.
*/
export const delegate = async({stakepoolId, metadata = null, metadataLabel = '721', rewardAddress = null} : Delegate) : Promise<string> => {
    const protocolParameter = await getProtocolParameter();

    let stakeAddress = null;
    if(rewardAddress){
        stakeAddress = rewardAddress
    }
    else{
        const stakeAddresses = await CardanoAPI.baseCommands.getRewardAddresses(
        CardanoAPI.addressReturnType.bech32);
        stakeAddress = stakeAddresses[0]
    }

    if(!stakeAddress){
        throw new Error('Failed to set stake address.')
    }
    const stakeKeyHash = errorIfUndefined(errorIfUndefined(
        CardanoAPI.serializationLib.RewardAddress.from_address(
            errorIfUndefined(CardanoAPI.serializationLib.Address.from_bech32(
                String(stakeAddress)
            )
        ))
    ).payment_cred().to_keyhash()).to_bytes();

    const delegation = await CardanoAPI.onchainData.getDelegation(String(stakeAddress));
    const poolHex = await CardanoAPI.onchainData.getStakepoolHex(stakepoolId);

    const utxos = await CardanoAPI.baseCommands.getUtxos();
    
    const paymentAddress = await CardanoAPI.baseCommands.getChangeAddress(
        CardanoAPI.addressReturnType.bech32);

    const outputs = CardanoAPI.serializationLib.TransactionOutputs.new();

    const addr = CardanoAPI.serializationLib.Address.from_bech32((String(paymentAddress)));
    const value = CardanoAPI.serializationLib.Value.new(
        CardanoAPI.serializationLib.BigNum.from_str(protocolParameter.keyDeposit)
    );
    outputs.add(
        CardanoAPI.serializationLib.TransactionOutput.new(
          addr,
          value
        )
    );

    const RawTransaction = _txBuilder({
        PaymentAddress: String(paymentAddress),
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

    return await _signSubmitTx(RawTransaction);
};