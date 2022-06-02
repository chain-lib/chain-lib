import { CardanoAPI, errorIfUndefined } from '../CardanoAPI';
import {getProtocolParameter, _makeMultiAsset, _txBuilder, _signSubmitTx} from './Helper';
import { Delegate } from './Spend';
/**
 * This function allows a user to delegate to a stakepool.
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