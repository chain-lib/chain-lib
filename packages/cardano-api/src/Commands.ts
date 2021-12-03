import type {
    Value, 
    TransactionUnspentOutput, 
    BaseAddress, 
    RewardAddress, 
    Transaction} from '@emurgo/Cardano-serialization-lib-asmjs';
import { CardanoAPIObject, errorIfUndefined } from './CardanoAPI';

export const Commands = {

    isEnabled : async() : Promise<Boolean> => {
        try {
            const wallet = await CardanoAPIObject.wallet;
            return await wallet.isEnabled();
        } 
        catch (e) {
            return false;
        }   
    },
    enable : async() : Promise<Boolean> => {
        try {
            const wallet = await CardanoAPIObject.wallet;
            console.log(wallet);
            return await wallet.enable();
        } 
        catch (e) {
            console.log(CardanoAPIObject.wallet);
            console.error(e);
            return false;
        }   
    },
    getUnusedAddresses : async (type? : string) : Promise<Array<string>> => {
        const wallet = await CardanoAPIObject.wallet;
        const addr = await wallet.getUnusedAddresses();
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
        const wallet = await CardanoAPIObject.wallet;
        const addr = await wallet.getUsedAddresses();
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
        const wallet = await CardanoAPIObject.wallet;
        const addr = await wallet.getChangeAddress();
        if(type === CardanoAPIObject.addressReturnType.hex){
            return addr;
        }
        if(type === CardanoAPIObject.addressReturnType.bech32){
            return bech32FromHex(addr);
        }
        return addr;
    },
    getRewardAddress : async (type? : string) : Promise<string> => {
        const wallet = await CardanoAPIObject.wallet;
        const addr = await wallet.getRewardAddress();
        if(type === CardanoAPIObject.addressReturnType.hex){
            return addr;
        }
        if(type === CardanoAPIObject.addressReturnType.bech32){
            return bech32FromHex(addr);
        }
        return addr;
    },
    getUtxos : async(amount? : Value,  paginate?: {page: number ; limit: number} ) : 
    Promise<Array<TransactionUnspentOutput>> => {
        const wallet = await CardanoAPIObject.wallet;
        const utxos : Array<string> = errorIfUndefined(
            await wallet.getUtxos(amount,paginate));
        
        const fixedUtxos = utxos.map((utxo : string) =>
        CardanoAPIObject.serializationLib.TransactionUnspentOutput.from_bytes(
          CardanoAPIObject.buffer.from(utxo, 'hex')
        )
      );
        return fixedUtxos;
    },
    getCollateral : async() : Promise<TransactionUnspentOutput> => {
        const wallet = await CardanoAPIObject.wallet;
        return await wallet.getCollateral();
    },
    getBalance : async() : Promise<Value> => {
        const wallet = await CardanoAPIObject.wallet;
        return await wallet.getBalance();
    },
    getNetworkId : async() : Promise<number> => {
        const wallet = await CardanoAPIObject.wallet;
        return await wallet.getNetworkId();
    },
    signData : async(address : BaseAddress | RewardAddress, payload : string) : Promise<any> => { 
        const wallet = await CardanoAPIObject.wallet;
        return wallet.signData(address,payload);
    }, 
    signTx : async(tx: Transaction | string, partialSign?: boolean) : Promise<string> => {
        const wallet = await CardanoAPIObject.wallet;
        let transaction = tx;
        if(typeof tx !== 'string'){
            transaction = CardanoAPIObject.buffer.from(tx.to_bytes()).toString('hex');
        }
        return await wallet.signTx(transaction, partialSign);
    },
    submitTx : async(tx : Transaction | string) : Promise<any> => {
        const wallet = await CardanoAPIObject.wallet;
        let transaction = tx;
        if(typeof tx !== 'string'){
            transaction = CardanoAPIObject.buffer.from(tx.to_bytes()).toString('hex');
        }
        const submit = await wallet.submitTx(transaction);
        return submit;
    },
  };
  
function bech32FromHex(address: string): string {
    const hex = CardanoAPIObject.buffer.from(address,'hex');
    const addr = CardanoAPIObject.serializationLib.Address.from_bytes(hex).to_bech32();
    return addr;
}

