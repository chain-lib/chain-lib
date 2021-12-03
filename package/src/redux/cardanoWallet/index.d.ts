export declare const CARDANO_WALLET: {
    CONNECTED: string;
    ADDRESSES: string;
    STAKE: string;
    SEND: string;
};
export declare let API: {
    _wallet: any;
    readonly wallet: any;
    _serializationLib: typeof import("@emurgo/cardano-serialization-lib-asmjs") | undefined;
    serializationLib: typeof import("@emurgo/cardano-serialization-lib-asmjs");
    buffer: typeof import("buffer").Buffer;
    plugins: {};
    _addressReturnType: {
        hex: string;
        bech32: string;
    };
    readonly addressReturnType: {
        hex: "string";
        bech32: "string";
    };
    baseCommands: {
        isEnabled: () => Promise<Boolean>;
        enable: () => Promise<Boolean>;
        getUnusedAddresses: (type?: string | undefined) => Promise<string[]>;
        getUsedAddresses: (type?: string | undefined) => Promise<string[]>;
        getChangeAddress: (type?: string | undefined) => Promise<string>;
        getRewardAddress: (type?: string | undefined) => Promise<string>;
        getUtxos: (amount?: import("@emurgo/cardano-serialization-lib-asmjs").Value | undefined, paginate?: {
            page: number;
            limit: number;
        } | undefined) => Promise<import("@emurgo/cardano-serialization-lib-asmjs").TransactionUnspentOutput[]>;
        getCollateral: () => Promise<import("@emurgo/cardano-serialization-lib-asmjs").TransactionUnspentOutput>;
        getBalance: () => Promise<import("@emurgo/cardano-serialization-lib-asmjs").Value>;
        getNetworkId: () => Promise<number>;
        signData: (address: import("@emurgo/cardano-serialization-lib-asmjs").BaseAddress | import("@emurgo/cardano-serialization-lib-asmjs").RewardAddress, payload: string) => Promise<any>;
        signTx: (tx: string | import("@emurgo/cardano-serialization-lib-asmjs").Transaction, partialSign?: boolean | undefined) => Promise<string>;
        submitTx: (tx: string | import("@emurgo/cardano-serialization-lib-asmjs").Transaction) => Promise<any>;
    };
    register(configuration: import("bazel-out/darwin-fastbuild/bin/packages/cardano-api/src/CardanoAPI").Configure): Promise<void>;
};
