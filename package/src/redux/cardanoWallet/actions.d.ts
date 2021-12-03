export declare const connectWallet: () => (dispatch: any) => Promise<void>;
export declare const initalizeWallet: () => (dispatch: any) => Promise<void>;
export declare const update: () => (dispatch: any) => Promise<void>;
export declare const stake: (stakepoolId: string) => (dispatch: any) => Promise<void>;
export declare const send: (recipients: object, metadata?: String | undefined, metadataLabel?: String | undefined) => (dispatch: any) => Promise<void>;
