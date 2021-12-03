import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import cardanoWallet from './cardanoWallet/reducer';
export const Store = createStore(cardanoWallet, applyMiddleware(thunkMiddleware));
