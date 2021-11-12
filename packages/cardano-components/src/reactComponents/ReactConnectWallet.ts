import React from 'react';
import { createComponent } from '@lit-labs/react';
import { CardanoWalletButton } from '../components/';

export const ReactConnectWallet = createComponent(React, 'cardano-wallet-button',CardanoWalletButton, {
    connection : 'connection'
});