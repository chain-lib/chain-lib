import React from 'react';
import { createComponent } from '@lit-labs/react';
import { CardanoConnectWalletComponent } from '../components';

export const ReactCardanoConnectWalletComponent = createComponent(React, 
    'cardano-connect-wallet-component',CardanoConnectWalletComponent, {
    connection : 'connection'
});
