import { combineReducers } from "redux";
import { CARDANO_WALLET } from ".";

const INITIAL_STATE = {
    walletActive : undefined,
    rewardAddress : undefined,
    changeAddress : undefined,
    unusedAddresses : undefined,
    usedAddresses : undefined,
    stake: undefined,
    send: undefined,
}

function reducer(state=INITIAL_STATE,action : any){
    switch(action.type){
        case CARDANO_WALLET.CONNECTED:
            return {
                ...state,
                walletActive : action.payload?.walletActive,
                rewardAddress : action.payload?.rewardAddress,
                changeAddress : action.payload?.changeAddress,
                unusedAddresses : action.payload?.unusedAddresses,
                usedAddresses : action.payload?.usedAddresses,
            }
        case CARDANO_WALLET.ADDRESSES:
            return {
                ...state,
                rewardAddress : action.payload?.rewardAddress,
                changeAddress : action.payload?.changeAddress,
                unusedAddresses : action.payload?.unusedAddresses,
                usedAddresses : action.payload?.usedAddresses,
            }
        case CARDANO_WALLET.STAKE:
            return {
                ...state,
                stake : action.payload?.stake,
            }

        case CARDANO_WALLET.SEND:
            return {
                ...state,
                send : action.payload?.send,
            }

        default:
            return state;
    }
}

export default combineReducers({
    reducer,
});