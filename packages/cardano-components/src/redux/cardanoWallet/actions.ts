// eslint-disable-next-line import/extensions
import {CARDANO_WALLET} from '.';
import { CardanoAPIRef, CardanoCommand as CardanoAPI } from '../../helper';


export const connectWallet = () => async(dispatch : any) => {
    const response : Boolean = await CardanoAPI.Commands.enable();
    const payload = await _getWalletResponse(response);
    dispatch({ type: CARDANO_WALLET.CONNECTED, payload: payload });
}

export const initalizeWallet = () => async(dispatch : any) => {
    const response : Boolean = await CardanoAPI.Commands.isEnabled();
    const payload = await _getWalletResponse(response);
    dispatch({ type: CARDANO_WALLET.CONNECTED, payload: payload });
}

export const update = () => async(dispatch : any) => {
    const bech32 = true; // TODO : Make a variable
    const unusedAddresses = await CardanoAPI.Commands.getUnusedAddresses(bech32 ? CardanoAPIRef.AddressReturnType.bech32 : CardanoAPIRef.AddressReturnType.hex);
    const usedAddresses = await CardanoAPI.Commands.getUsedAddresses(bech32 ? CardanoAPIRef.AddressReturnType.bech32 : CardanoAPIRef.AddressReturnType.hex);
    const rewardAddress = await CardanoAPI.Commands.getRewardAddress(bech32 ? CardanoAPIRef.AddressReturnType.bech32 : CardanoAPIRef.AddressReturnType.hex);
    const changeAddress = await CardanoAPI.Commands.getChangeAddress(bech32 ? CardanoAPIRef.AddressReturnType.bech32 : CardanoAPIRef.AddressReturnType.hex);
    const payload = {rewardAddress : rewardAddress, changeAddress : changeAddress, unusedAddresses : unusedAddresses, usedAddresses : usedAddresses};
    dispatch({type : CARDANO_WALLET.ADDRESSES, payload : payload});
}

export const stake = (stakepoolId : string) => async(dispatch : any) => {
    const stake = await CardanoAPI.Send.delegate({stakepoolId : stakepoolId});
    dispatch({type : CARDANO_WALLET.STAKE, payload : {stake : stake}})
}

export const send = (recipients : object, metadata? : String, metadataLabel? : String) => async(dispatch : any) => {
    //const send = await CardanoAPI.Send.sendMultiple({recipients : recipients, metadata : metadata, metadataLabel : metadataLabel});
    const send = await CardanoAPI.Send.send({address : 'addr_test1qp6hvfnyh98tfkvkwt05makkrq8pgk44yyyendvnx97qmkj88xalyhy8ftlmgvvceyv3geglxp5vgwnlq76p9k4v9lfq4eat67', amount: 50});
    dispatch({type : CARDANO_WALLET.SEND, payload : {send : send}})
}

const _getWalletResponse = async(isConnected : Boolean) => {
    if(!isConnected){
        return {walletActive : isConnected};
    }
    const bech32 = true; // TODO : Make a variable
    const unusedAddresses = await CardanoAPI.Commands.getUnusedAddresses(bech32 ? CardanoAPIRef.AddressReturnType.bech32 : CardanoAPIRef.AddressReturnType.hex);
    const usedAddresses = await CardanoAPI.Commands.getUsedAddresses(bech32 ? CardanoAPIRef.AddressReturnType.bech32 : CardanoAPIRef.AddressReturnType.hex);
    const rewardAddress = await CardanoAPI.Commands.getRewardAddress(bech32 ? CardanoAPIRef.AddressReturnType.bech32 : CardanoAPIRef.AddressReturnType.hex);
    const changeAddress = await CardanoAPI.Commands.getChangeAddress(bech32 ? CardanoAPIRef.AddressReturnType.bech32 : CardanoAPIRef.AddressReturnType.hex);
    return {walletActive : isConnected, rewardAddress : rewardAddress, changeAddress : changeAddress, unusedAddresses : unusedAddresses, usedAddresses : usedAddresses};
}


