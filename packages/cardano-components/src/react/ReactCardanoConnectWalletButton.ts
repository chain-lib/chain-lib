import React from 'react';
import { createComponent } from '@lit-labs/react';
import { CardanoConnectWalletButton } from '../components';

export const ReactCardanoConnectWalletButton = createComponent(React, 
    'cardano-connect-wallet-component',CardanoConnectWalletButton, {
    connection : 'connection'
});
