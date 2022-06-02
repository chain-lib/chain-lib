import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import cardanoWallet from './cardanoWallet/reducer';

/** 
 * Redux store that the components utilize.
*/
export const Store = createStore(
  cardanoWallet,applyMiddleware(thunkMiddleware)
);
