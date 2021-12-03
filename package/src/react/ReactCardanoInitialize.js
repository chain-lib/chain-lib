import React from 'react';
import { createComponent } from '@lit-labs/react';
import { CardanoInitialize } from '../components';
export const ReactCardanoInitialize = createComponent(React, 'cardano-initialize', CardanoInitialize, {
    connection: 'connection'
});
