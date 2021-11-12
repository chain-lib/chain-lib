import { createStore,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// eslint-disable-next-line import/extensions
import cardanoWallet from './cardanoWallet/reducer';

export const Store = createStore(
  cardanoWallet,applyMiddleware(thunkMiddleware)
);