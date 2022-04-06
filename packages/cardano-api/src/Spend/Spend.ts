import { send } from './Send';
import { sendMultiple } from './SendMultiple';
import { delegate } from './Delegate';

/**
 * This is a function of objects that allow you to interact with the cardano blockchain.
 * - send : Allows you to send to one recipient
 * - sendMultiple : Allows you to send to multiple recipients.
 * - delegate : Allows you to delegate to a stakepool.
*/
export const Spend = {
        send : send,
        sendMultiple : sendMultiple,
        delegate : delegate  
};




