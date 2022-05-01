import { combineReducers } from 'redux';
import { CARDANO_WALLET } from '.';

const INITIAL_STATE = {
    walletActive : undefined,
    rewardAddresseses : undefined,
    changeAddress : undefined,
    unusedAddresses : undefined,
    usedAddresses : undefined,
    stake: undefined,
    send: undefined,
    initialized: false
};

function reducer(state=INITIAL_STATE,action : any){
    switch(action.type){
        case CARDANO_WALLET.CONNECTED:
            return {
                ...state,
                walletActive : action.payload?.walletActive,
                rewardAddresses : action.payload?.rewardAddresses,
                changeAddress : action.payload?.changeAddress,
                unusedAddresses : action.payload?.unusedAddresses,
                usedAddresses : action.payload?.usedAddresses,
            };
        case CARDANO_WALLET.ADDRESSES:
            return {
                ...state,
                rewardAddresses : action.payload?.rewardAddresses,
                changeAddress : action.payload?.changeAddress,
                unusedAddresses : action.payload?.unusedAddresses,
                usedAddresses : action.payload?.usedAddresses,
            };
        case CARDANO_WALLET.STAKE:
            return {
                ...state,
                stake : action.payload?.stake,
            };

        case CARDANO_WALLET.SEND:
            return {
                ...state,
                send : action.payload?.send,
            };
        case CARDANO_WALLET.INITALIZE:
            return {
                ...state,
                initialized: action.payload?.initialize
            };
        default:
            return state;
    }
}

export default combineReducers({
    reducer,
});
