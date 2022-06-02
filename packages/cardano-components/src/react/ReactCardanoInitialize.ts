import React from 'react';
import { createComponent } from '@lit-labs/react';
import { CardanoInitialize } from '../components';

/**
 * React Version of the Cardano Initialize Component.
 */
export const ReactCardanoInitialize = createComponent(React, 'cardano-initialize',CardanoInitialize, {
    connection : 'connection'
});
