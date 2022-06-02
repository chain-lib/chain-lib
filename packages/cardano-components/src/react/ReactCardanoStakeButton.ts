import { createComponent } from '@lit-labs/react';
import { CardanoStakeButton } from '../components';
import React from 'react';

/**
 * React Version of the Cardano Connect Stake Button.
 */
export const ReactCardanoStakeButton = createComponent(React, 'cardano-stake-button',CardanoStakeButton, {
    connection : 'connection'
});
