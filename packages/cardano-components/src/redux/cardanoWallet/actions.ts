import { CARDANO_WALLET, API } from '.';

export const connectWallet = () => async(dispatch : any) => {
    const response : Boolean | undefined = await API?.baseCommands.enable();
    const payload = await _getWalletResponse(response);
    dispatch({ type: CARDANO_WALLET.CONNECTED, payload: payload });
};

export const initalizeWallet = () => async(dispatch : any) => {
    const response : Boolean | undefined = await API?.baseCommands.isEnabled();
    const payload = await _getWalletResponse(response);
    dispatch({ type: CARDANO_WALLET.CONNECTED, payload: payload });
};

export const update = () => async(dispatch : any) => {
    const bech32 = true; // TODO : Make a variable
    const unusedAddresses = await API?.baseCommands.getUnusedAddresses(
        bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const usedAddresses = await API?.baseCommands.getUsedAddresses(
        bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const rewardAddress = await API?.baseCommands.getRewardAddress(
        bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const changeAddress = await API?.baseCommands.getChangeAddress(
        bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const payload = {rewardAddress : rewardAddress, changeAddress : changeAddress, 
        unusedAddresses : unusedAddresses, usedAddresses : usedAddresses};
    dispatch({type : CARDANO_WALLET.ADDRESSES, payload : payload});
};

export const stake = (stakepoolId : string) => async(dispatch : any) => {
    
    //@ts-ignore
    const stake = await API?.plugins.send.delegate({stakepoolId : stakepoolId});
    dispatch({type : CARDANO_WALLET.STAKE, payload : {stake : stake}});
};

export const send = (recipients : object, metadata? : String, metadataLabel? : String) => async(dispatch : any) => {
    //@ts-ignore
    const send = await API?.plugins.send.sendMultiple({recipients : recipients, 
        metadata : metadata, metadataLabel : metadataLabel});
    dispatch({type : CARDANO_WALLET.SEND, payload : {send : send}});
};

const _getWalletResponse = async(isConnected : Boolean | undefined) => {
    if(!isConnected){
        return {walletActive : isConnected};
    }
    const bech32 = true; // TODO : Make a variable
    const unusedAddresses = await API?.baseCommands.getUnusedAddresses(
        bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const usedAddresses = await API?.baseCommands.getUsedAddresses(
        bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const rewardAddress = await API?.baseCommands.getRewardAddress(
        bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const changeAddress = await API?.baseCommands.getChangeAddress(
        bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    return {walletActive : isConnected, rewardAddress : rewardAddress, 
        changeAddress : changeAddress, unusedAddresses : unusedAddresses, usedAddresses : usedAddresses};
};


