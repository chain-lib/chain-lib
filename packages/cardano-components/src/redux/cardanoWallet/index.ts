import { CardanoAPI } from '@chain-lib/cardano-api';

export const CARDANO_WALLET = { 
    CONNECTED: 'cardanoWallet/CONNECTED',
    ADDRESSES: 'cardanoWallet/ADDRESSES',
    STAKE: 'cardanoWallet/STAKE',
    SEND: 'cardanoWallet/SEND',
};

export let API = CardanoAPI;

