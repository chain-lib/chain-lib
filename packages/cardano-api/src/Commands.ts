import type {
    Value, 
    TransactionUnspentOutput, 
    BaseAddress, 
    RewardAddress, 
    Transaction} from '@emurgo/cardano-serialization-lib-asmjs';
import { CardanoAPIObject, errorIfUndefined } from './CardanoAPI';

export const Commands = {

    isEnabled : async() : Promise<Boolean> => {
        try {
            return await CardanoAPIObject.wallet.isEnabled();
        } 
        catch (e) {
            return false;
        }   
    },
    enable : async() : Promise<Boolean | Object> => {
        try {
            const value = await CardanoAPIObject.wallet.enable();
            return value;
        } 
        catch (e) {
            return false;
        }   
    },
    getUnusedAddresses : async (type? : string) : Promise<Array<string>> => {
        const addr = await CardanoAPIObject.wallet.getUnusedAddresses();
        if(type === CardanoAPIObject.addressReturnType.hex){
            return addr;
        }
        if(type === CardanoAPIObject.addressReturnType.bech32){
            const bechAddr : Array<string> = [];
            addr.forEach((address : string)=>bechAddr.push(bech32FromHex(address)));
            return bechAddr;
        }
        return addr;
    },
    getUsedAddresses : async (type? : string) : Promise<Array<string>> => {
        const addr = await CardanoAPIObject.wallet.getUsedAddresses();
        if(type === CardanoAPIObject.addressReturnType.hex){
            return addr;
        }
        if(type === CardanoAPIObject.addressReturnType.bech32){
            const bechAddr : Array<string> = [];
            addr.forEach((address : string)=>bechAddr.push(bech32FromHex(address)));
            return bechAddr;
        }
        return addr;
    },
    getChangeAddress : async (type? : string) : Promise<string> => {
        const addr = await CardanoAPIObject.wallet.getChangeAddress();
        if(type === CardanoAPIObject.addressReturnType.hex){
            return addr;
        }
        if(type === CardanoAPIObject.addressReturnType.bech32){
            return bech32FromHex(addr);
        }
        return addr;
    },
    getRewardAddresses : async (type? : string) : Promise<Array<string>> => {
        const addr = await CardanoAPIObject.wallet.getRewardAddresses();
        if(type === CardanoAPIObject.addressReturnType.hex){
            return addr;
        }
        if(type === CardanoAPIObject.addressReturnType.bech32){
            const bechAddr : Array<string> = [];
            addr.forEach((address : string)=>bechAddr.push(bech32FromHex(address)));
            return bechAddr;
        }
        return addr;
    },
    getUtxos : async(amount? : Value,  paginate?: {page: number ; limit: number} ) : 
    Promise<Array<TransactionUnspentOutput>> => {
        const utxos : Array<string> = errorIfUndefined(
            await CardanoAPIObject.wallet.getUtxos(amount,paginate));
        
        const fixedUtxos = utxos.map((utxo : string) =>
        CardanoAPIObject.serializationLib.TransactionUnspentOutput.from_bytes(
          CardanoAPIObject.buffer.from(utxo, 'hex')
        )
      );
        return fixedUtxos;
    },
    getCollateral : async() : Promise<TransactionUnspentOutput> => {
        return await CardanoAPIObject.wallet.getCollateral();
    },
    getBalance : async() : Promise<Value> => {
        return await CardanoAPIObject.wallet.getBalance();
    },
    getNetworkId : async() : Promise<number> => {
        return await CardanoAPIObject.wallet.getNetworkId();
    },
    signData : async(address : BaseAddress | RewardAddress, payload : string) : Promise<any> => { 
        return await CardanoAPIObject.wallet.signData(address,payload);
    }, 
    signTx : async(tx: Transaction | string, partialSign?: boolean) : Promise<string> => {
        let transaction = tx;
        if(typeof tx !== 'string'){
            transaction = CardanoAPIObject.buffer.from(tx.to_bytes()).toString('hex');
        }
        return await CardanoAPIObject.wallet.signTx(transaction, partialSign);
    },
    submitTx : async(tx : Transaction | string) : Promise<any> => {
        let transaction = tx;
        if(typeof tx !== 'string'){
            transaction = CardanoAPIObject.buffer.from(tx.to_bytes()).toString('hex');
        }
        const submit = await CardanoAPIObject.wallet.submitTx(transaction);
        return submit;
    },
  };
  
function bech32FromHex(address: string): string {
    const hex = CardanoAPIObject.buffer.from(address,'hex');
    const addr = CardanoAPIObject.serializationLib.Address.from_bytes(hex).to_bech32();
    return addr;
}

