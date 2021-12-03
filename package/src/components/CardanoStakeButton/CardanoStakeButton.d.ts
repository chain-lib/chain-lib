import { Button } from '@material/mwc-button';
declare const CardanoStakeButton_base: (new (...args: any[]) => {
    _storeUnsubscribe: import("redux").Unsubscribe;
    connectedCallback(): void;
    disconnectedCallback(): void;
    stateChanged(_state: import("redux").EmptyObject & {
        reducer: {
            walletActive: any;
            rewardAddress: any;
            changeAddress: any;
            unusedAddresses: any;
            usedAddresses: any;
            stake: undefined;
            send: undefined;
        } | {
            stake: any;
            walletActive: undefined;
            rewardAddress: undefined;
            changeAddress: undefined;
            unusedAddresses: undefined;
            usedAddresses: undefined;
            send: undefined;
        } | {
            send: any;
            walletActive: undefined;
            rewardAddress: undefined;
            changeAddress: undefined;
            unusedAddresses: undefined;
            usedAddresses: undefined;
            stake: undefined;
        };
    }): void;
    readonly isConnected: boolean;
}) & typeof Button;
export declare class CardanoStakeButton extends CardanoStakeButton_base {
    stakepoolId: string;
    initializeOnLoad: boolean;
    loading: boolean;
    constructor();
    stateChanged(state: any): void;
    firstUpdated(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    clickHandler: () => void;
}
export {};
