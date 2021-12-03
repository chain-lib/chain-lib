import React from 'react';
import { CardanoSendButton } from '../components';
export declare const ReactCardanoSendButton: React.ForwardRefExoticComponent<Partial<Omit<CardanoSendButton, "children">> & {
    connection?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
