import { send } from './Send';
import { sendMultiple } from './SendMultiple';
import { delegate } from './Delegate';

/**
 * Optional metadata, currently only allows objects { "test" : "testing" }
*/
export type Metadata = object | null;

/**
 * An asset, unit being the token (5230d16116431597796d250dcd7acf1e3afb717bf66c8108abdc83df.KnittieAstro031), and quantity being the amount.
*/
export type Asset = {
    unit: string;
    quantity: string;
}

/**
 * The parameters for the delegate function. Used to delegate to a stakepool.
*/
export type Delegate = {
        stakepoolId: string;
        metadata?: Metadata;
        metadataLabel?: string;
        rewardAddress?: string | null;
};

/**
 * The parameters for the sendMultiple function. Used to create a transaction with one address in which you want to send to.
*/
export type SendMultiple = {
    recipients: {
        address: string; 
        amount?: number; 
        assets?: Asset[];
    }[];
    metadata?: Metadata;
    metadataLabel?: string;
}

/**
 * The parameters for the send function. Used to create a transaction with one person.
*/
export type Send = {
    address: string; 
    amount?: number; 
    assets?: Asset[];
    metadata?: Metadata;
    metadataLabel?: string;
}


/**
 * This is a set of functions that makes it significantly easier to work with the blockchain.
*/
export const Spend = {
        send : send,
        sendMultiple : sendMultiple,
        delegate : delegate  
};




