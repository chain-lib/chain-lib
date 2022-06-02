import React from 'react';
import { createComponent } from '@lit-labs/react';
import { CardanoSendButton } from '../components';

/**
 * React Version of the Cardano Send Button.
 */
export const ReactCardanoSendButton = createComponent(React, 'cardano-send-button', CardanoSendButton, {
    connection : 'connection'
});
