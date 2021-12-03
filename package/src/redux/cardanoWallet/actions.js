import { CARDANO_WALLET, API } from '.';
export const connectWallet = () => async (dispatch) => {
    const response = await API?.baseCommands.enable();
    const payload = await _getWalletResponse(response);
    dispatch({ type: CARDANO_WALLET.CONNECTED, payload: payload });
};
export const initalizeWallet = () => async (dispatch) => {
    const response = await API?.baseCommands.isEnabled();
    const payload = await _getWalletResponse(response);
    dispatch({ type: CARDANO_WALLET.CONNECTED, payload: payload });
};
export const update = () => async (dispatch) => {
    const bech32 = true;
    const unusedAddresses = await API?.baseCommands.getUnusedAddresses(bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const usedAddresses = await API?.baseCommands.getUsedAddresses(bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const rewardAddress = await API?.baseCommands.getRewardAddress(bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const changeAddress = await API?.baseCommands.getChangeAddress(bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const payload = { rewardAddress: rewardAddress, changeAddress: changeAddress,
        unusedAddresses: unusedAddresses, usedAddresses: usedAddresses };
    dispatch({ type: CARDANO_WALLET.ADDRESSES, payload: payload });
};
export const stake = (stakepoolId) => async (dispatch) => {
    const stake = await API?.plugins.send.delegate({ stakepoolId: stakepoolId });
    dispatch({ type: CARDANO_WALLET.STAKE, payload: { stake: stake } });
};
export const send = (recipients, metadata, metadataLabel) => async (dispatch) => {
    const send = await API?.plugins.send.sendMultiple({ recipients: recipients,
        metadata: metadata, metadataLabel: metadataLabel });
    dispatch({ type: CARDANO_WALLET.SEND, payload: { send: send } });
};
const _getWalletResponse = async (isConnected) => {
    if (!isConnected) {
        return { walletActive: isConnected };
    }
    const bech32 = true;
    const unusedAddresses = await API?.baseCommands.getUnusedAddresses(bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const usedAddresses = await API?.baseCommands.getUsedAddresses(bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const rewardAddress = await API?.baseCommands.getRewardAddress(bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    const changeAddress = await API?.baseCommands.getChangeAddress(bech32 ? API?.addressReturnType.bech32 : API?.addressReturnType.hex);
    return { walletActive: isConnected, rewardAddress: rewardAddress,
        changeAddress: changeAddress, unusedAddresses: unusedAddresses, usedAddresses: usedAddresses };
};
