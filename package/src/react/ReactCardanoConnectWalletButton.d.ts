import React from 'react';
import { CardanoConnectWalletButton } from '../components';
export declare const ReactCardanoConnectWalletButton: React.ForwardRefExoticComponent<Partial<Omit<CardanoConnectWalletButton, "children">> & {
    connection?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
