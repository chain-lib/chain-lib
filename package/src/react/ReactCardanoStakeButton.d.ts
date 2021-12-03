import { CardanoStakeButton } from '../components';
import React from 'react';
export declare const ReactCardanoStakeButton: React.ForwardRefExoticComponent<Partial<Omit<CardanoStakeButton, "children">> & {
    connection?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
