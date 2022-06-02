import React from 'react';
import { createComponent } from '@lit-labs/react';
import { CardanoConnectWalletButton } from '../components';

/**
 * React Version of the Cardano Connect Wallet Button.
 */
export const ReactCardanoConnectWalletButton = createComponent(React, 
    'cardano-connect-wallet-component',CardanoConnectWalletButton, {
    connection : 'connection'
});
