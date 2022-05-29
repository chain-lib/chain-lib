import { CARDANO_WALLET, API } from '.';
import { Blockfrost } from '@chain-lib/cardano-api';
import loader from './loader';

export const connectWallet = () => async(dispatch : any) => {
    const response : Boolean | Object | undefined = await API?.baseCommands.enable();
    const payload = await _getWalletResponse(isObject(response));
    dispatch({ type: CARDANO_WALLET.CONNECTED, payload: payload });
};

export const initializeWallet = () => async(dispatch : any) => {
    const response : Boolean | undefined = await API?.baseCommands.isEnabled();
    const payload = await _getWalletResponse(response);
    dispatch({ type: CARDANO_WALLET.CONNECTED, payload: payload });
};

export const getWalletInfo = () => (dispatch : any) => {
   dispatch({type: CARDANO_WALLET.GET_WALLET_INFO, payload : API.getWalletInfo()})
}

export const setWallet = (name : string) => async(dispatch : any) => {
    await API.setWallet(name)

    dispatch({type : CARDANO_WALLET.CHANGE_WALLET, payload : name})
}

export const update = (bech32 : boolean) => async(dispatch : any) => {
    const unusedAddresses = await API?.baseCommands.getUnusedAddresses(
        bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const usedAddresses = await API?.baseCommands.getUsedAddresses(
        bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const rewardAddress = await API?.baseCommands.getRewardAddresses(
        bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const changeAddress = await API?.baseCommands.getChangeAddress(
        bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const payload = {rewardAddress : rewardAddress, changeAddress : changeAddress, 
        unusedAddresses : unusedAddresses, usedAddresses : usedAddresses};
    dispatch({type : CARDANO_WALLET.ADDRESSES, payload : payload});
};

export const stake = (stakepoolId : string) => async(dispatch : any) => {
    //@ts-ignore
    const stake = await API.spend.delegate({stakepoolId : stakepoolId});
    dispatch({type : CARDANO_WALLET.STAKE, payload : {stake : stake}});
};

export const send = (recipients : object, metadata? : object, metadataLabel? : string) => async(dispatch : any) => {
    //@ts-ignore
    const send = await API.spend.sendMultiple({recipients : recipients, 
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
    const rewardAddresses = await API?.baseCommands.getRewardAddresses(
        bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const changeAddress = await API?.baseCommands.getChangeAddress(
        bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    return {walletActive : isConnected, rewardAddresses : rewardAddresses, 
        changeAddress : changeAddress, unusedAddresses : unusedAddresses, usedAddresses : usedAddresses};
};

export const initialize = (config : object) => async(dispatch : any) => {
    await loader.load();
    if(loader.Cardano){
        //@ts-ignore
        const blockfrostConfig : Object | undefined = config?.blockfrost
        if(blockfrostConfig){
           const blockfrost = Blockfrost(blockfrostConfig)
           await API.register({ onchainData : blockfrost, cardanoSerializationLibrary : loader.Cardano }); 
        }
        else{
            await API.register({cardanoSerializationLibrary : loader.Cardano })
        }
        
        dispatch({type : CARDANO_WALLET.INITALIZE, payload : {initialize : true}});
    }

};

export const isObject = (obj : any) => {
    return Object.prototype.toString.call(obj) === '[object Object]';
  };
