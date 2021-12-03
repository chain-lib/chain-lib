export declare const Store: import("redux").Store<import("redux").EmptyObject & {
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
}, any> & {
    dispatch: unknown;
};
