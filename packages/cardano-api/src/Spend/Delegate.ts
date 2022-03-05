import { CardanoAPIObject, errorIfUndefined } from '../CardanoAPI';
import {getProtocolParameter, _makeMultiAsset, _txBuilder, _signSubmitTx} from './Helper';

type Delegate = {
    stakepoolId: string;
    metadata?: Metadata;
    metadataLabel?: string;
    rewardAddress?: string | null;
};

type Metadata = object | null;


export const delegate = async({stakepoolId, metadata = null, metadataLabel = '721', rewardAddress = null} : Delegate) : Promise<string> => {
    const protocolParameter = await getProtocolParameter();

    let stakeAddress = null;
    if(rewardAddress){
        stakeAddress = rewardAddress
    }
    else{
        const stakeAddresses = await CardanoAPIObject.baseCommands.getRewardAddresses(
        CardanoAPIObject.addressReturnType.bech32);
        stakeAddress = stakeAddresses[0]
    }

    if(!stakeAddress){
        throw new Error('Failed to set stake address.')
    }
    const stakeKeyHash = errorIfUndefined(errorIfUndefined(
        CardanoAPIObject.serializationLib.RewardAddress.from_address(
            errorIfUndefined(CardanoAPIObject.serializationLib.Address.from_bech32(
                String(stakeAddress)
            )
        ))
    ).payment_cred().to_keyhash()).to_bytes();

    const delegation = await CardanoAPIObject.onchainData.getDelegation(String(stakeAddress));
    const poolHex = await CardanoAPIObject.onchainData.getStakepoolHex(stakepoolId);

    const utxos = await CardanoAPIObject.baseCommands.getUtxos();
    
    const paymentAddress = await CardanoAPIObject.baseCommands.getChangeAddress(
        CardanoAPIObject.addressReturnType.bech32);

    const outputs = CardanoAPIObject.serializationLib.TransactionOutputs.new();

    const addr = CardanoAPIObject.serializationLib.Address.from_bech32((String(paymentAddress)));
    const value = CardanoAPIObject.serializationLib.Value.new(
        CardanoAPIObject.serializationLib.BigNum.from_str(protocolParameter.keyDeposit)
    );
    outputs.add(
        CardanoAPIObject.serializationLib.TransactionOutput.new(
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