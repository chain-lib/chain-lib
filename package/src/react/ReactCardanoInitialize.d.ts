import React from 'react';
import { CardanoInitialize } from '../components';
export declare const ReactCardanoInitialize: React.ForwardRefExoticComponent<Partial<Omit<CardanoInitialize, "children">> & {
    connection?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
