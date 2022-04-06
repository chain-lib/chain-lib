import type {
    Value, 
    TransactionUnspentOutput, 
    BaseAddress, 
    RewardAddress, 
    Transaction} from '@emurgo/cardano-serialization-lib-asmjs';
import { CardanoAPI, errorIfUndefined } from './CardanoAPI';

/**
 * This object wraps the cip-30 functions and adds some functionality on top of it to make it easier to work with.
*/
export const Commands = {

    /**
     * This determines if the wallet is enabled.
     * ```typescript
     * CardanoAPI.baseCommands.isEnabled()
     * ```
    */
    isEnabled : async() : Promise<Boolean> => {
        try {
            return await CardanoAPI.wallet.isEnabled();
        } 
        catch (e) {
            return false;
        }   
    },
    /**
     * This returns false if the wallet is not enabled, otherwise it returns the second wallet object.
     *
     * ```typescript
     * CardanoAPI.baseCommands.enable()
     * ```
    */
    enable : async() : Promise<Boolean | Object> => {
        try {
            const value = await CardanoAPI.wallet.enable();
            return value;
        } 
        catch (e) {
            return false;
        }   
    },
     /**
     * This returns an array of unused addresses.
     *
     * ```typescript
     * CardanoAPI.baseCommands.getUnusedAddresses(type : string)
     * ```
     * @param type - string. Currently 'hex' or 'bech32'. You can get them with ```cardanoAPI.addressReturnType```
     * @returns promise array string. Returns an array of unused addresses from the wallet. You can get them in hex, or bech32. Defaults to hex. Recommendation is to use bech32 in most of the time.
    */
    getUnusedAddresses : async (type? : string) : Promise<Array<string>> => {
        const addr = await CardanoAPI.wallet.getUnusedAddresses();
        if(type === CardanoAPI.addressReturnType.hex){
            return addr;
        }
        if(type === CardanoAPI.addressReturnType.bech32){
            const bechAddr : Array<string> = [];
            addr.forEach((address : string)=>bechAddr.push(bech32FromHex(address)));
            return bechAddr;
        }
        return addr;
    },
         /**
     * This returns an array of used addresses.
     *
     * ```typescript
     * CardanoAPI.baseCommands.getusedAddresses(type : string)
     * ```
     * @param type - string. Currently 'hex' or 'bech32'. You can get them with ```cardanoAPI.addressReturnType```
     * @returns promise array string. Returns an array of used addresses from the wallet. You can get them in hex, or bech32. Defaults to hex. Recommendation is to use bech32 in most of the time.
    */
    getUsedAddresses : async (type? : string) : Promise<Array<string>> => {
        const addr = await CardanoAPI.wallet.getUsedAddresses();
        if(type === CardanoAPI.addressReturnType.hex){
            return addr;
        }
        if(type === CardanoAPI.addressReturnType.bech32){
            const bechAddr : Array<string> = [];
            addr.forEach((address : string)=>bechAddr.push(bech32FromHex(address)));
            return bechAddr;
        }
        return addr;
    },
     /**
     * This returns a change address from the wallet.
     *
     * ```typescript
     * CardanoAPI.baseCommands.getChangeAddress(type : string)
     * ```
     * @param type - string. Currently 'hex' or 'bech32'. You can get them with ```cardanoAPI.addressReturnType```
     * @returns promise string. Returns a change address from the wallet. You can get them in hex, or bech32. Defaults to hex. Recommendation is to use bech32 in most of the time.
    */
    getChangeAddress : async (type? : string) : Promise<string> => {
        const addr = await CardanoAPI.wallet.getChangeAddress();
        if(type === CardanoAPI.addressReturnType.hex){
            return addr;
        }
        if(type === CardanoAPI.addressReturnType.bech32){
            return bech32FromHex(addr);
        }
        return addr;
    },
     /**
     * This returns an array of reward addresses.
     *
     * ```typescript
     * CardanoAPI.baseCommands.getRewardAddresses(type : string)
     * ```
     * @param type - string. Currently 'hex' or 'bech32'. You can get them with ```cardanoAPI.addressReturnType```
     * @returns promise array string. Returns an array of reward addresses from the wallet. You can get them in hex, or bech32. Defaults to hex. Recommendation is to use bech32 in most of the time.
    */
    getRewardAddresses : async (type? : string) : Promise<Array<string>> => {
        const addr = await CardanoAPI.wallet.getRewardAddresses();
        if(type === CardanoAPI.addressReturnType.hex){
            return addr;
        }
        if(type === CardanoAPI.addressReturnType.bech32){
            const bechAddr : Array<string> = [];
            addr.forEach((address : string)=>bechAddr.push(bech32FromHex(address)));
            return bechAddr;
        }
        return addr;
    },
    /**
     * What does this function or method do?
     *
     * @param amount - Value. Optional parameter that specifies a value to look for.
     * @param paginate - ```{page: number ; limit: number}```. Optional parameter that allows user to get utxos paganized. Useful if a wallet has a lot of utxos.
     *
     * @returns ```Promise<TransactionUnspentOutput[]>``` 
    */
    getUtxos : async(amount? : Value,  paginate?: {page: number ; limit: number} ) : 
    Promise<Array<TransactionUnspentOutput>> => {
        const utxos : Array<string> = errorIfUndefined(
            await CardanoAPI.wallet.getUtxos(amount,paginate));
        
        const fixedUtxos = utxos.map((utxo : string) =>
        CardanoAPI.serializationLib.TransactionUnspentOutput.from_bytes(
          CardanoAPI.buffer.from(utxo, 'hex')
        )
      );
        return fixedUtxos;
    },
    /**
     * Allows getting the utxo of the collateral for smart contracts.
     *
     * @returns ```Promise<TransactionUnspentOutput>``` - Allows the user to get the utxo of the collateral wallet for smart contracts.
    */
    getCollateral : async() : Promise<TransactionUnspentOutput> => {
        return await CardanoAPI.wallet.getCollateral();
    },
    /**
     * Allows you to get the balance as type Value, which is a hex encoded cbor string.
     * @returns ```Promise<Value>``` - Returns the wallets balance. 
     */
    getBalance : async() : Promise<Value> => {
        return await CardanoAPI.wallet.getBalance();
    },
    /**
     * Gets the network id.
     * @returns ```Promise<number>``` 0 for testnet. 1 for mainnet.
     */
    getNetworkId : async() : Promise<number> => {
        return await CardanoAPI.wallet.getNetworkId();
    },
    /**
     * Allows you to sign data in accordance with {@link https://github.com/cardano-foundation/CIPs/blob/master/CIP-0008/CIP-0008.md CIP-0008}
     * @param address - Base Address or Reward address. If address is the BaseAddress the signature is returned with the Payment Credential, otherwise if the address is the RewardAddress the signature is returned with the Stake Credential.
     * @param payload - Hex encoded utf8 string. 
     * @returns CoseSign1 ```Promise<string>``` CoseSign1 is a hex encoded bytes string with the following protected headers.
     * * key_id => PublicKey,
     * * address => BaseAddress | RewardAddress
     * * algorithm_id => EdDSA(0) (the algorithm used for Cardano addresses).
     */
    signData : async(address : BaseAddress | RewardAddress, payload : string) : Promise<string> => { 
        return await CardanoAPI.wallet.signData(address,payload);
    }, 
    /**
     * This allows you to sign or partially sign a transaction.
     *
     * @param tx - Transaction | hex encoded cbor string.
     * @param partialSign - boolean. Optional parameter defaults to false. If false, and you do not contain all the necessary signing keys, it will throw an error.
     *
     * @returns ```Promise<string>``` returns a hex encoded cbor string
    */
    signTx : async(tx: Transaction | string, partialSign?: boolean) : Promise<string> => {
        let transaction = tx;
        if(typeof tx !== 'string'){
            transaction = CardanoAPI.buffer.from(tx.to_bytes()).toString('hex');
        }
        return await CardanoAPI.wallet.signTx(transaction, partialSign);
    },
    /**
     * This lets you submit a signed transaction.
     *
     * @param tx - Transaction | hex encoded cbor string.
     *
     * @returns ```Promise<string>``` returns the transaction hash if it succeeds, otherwise it throws an error.
    */
    submitTx : async(tx : Transaction | string) : Promise<string> => {
        let transaction = tx;
        if(typeof tx !== 'string'){
            transaction = CardanoAPI.buffer.from(tx.to_bytes()).toString('hex');
        }
        const submit = await CardanoAPI.wallet.submitTx(transaction);
        return submit;
    },
  };
  
/**
 * Returns a bech32 string from a hex encoded cbor string
 *
 * @param address - hex encoded cbor string
 *
 * @returns bech32 string
*/
function bech32FromHex(address: string): string {
    const hex = CardanoAPI.buffer.from(address,'hex');
    const addr = CardanoAPI.serializationLib.Address.from_bytes(hex).to_bech32();
    return addr;
}

