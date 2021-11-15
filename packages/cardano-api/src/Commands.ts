import type {
    Value, 
    TransactionUnspentOutput, 
    BaseAddress, 
    RewardAddress, 
    Transaction, 
    TransactionWitnessSet 
} from '@emurgo/cardano-serialization-lib-asmjs';
import { CardanoAPI } from './CardanoAPI';

export class Commands {

    private Cardano : any;

    private Buffer : any;

    private Wasm : any;

    constructor(Cardano : any, Buffer : any, Wasm : any){
        this.Cardano = Cardano;
        this.Buffer = Buffer;
        this.Wasm = Wasm;
    }

    isEnabled = async() : Promise<Boolean> => {
        try {
            return await this.Cardano.isEnabled();
        } 
        catch (e) {
            return false;
        }   
    }

    enable = async() : Promise<Boolean> => {
        try {
            return await this.Cardano.enable();
        } 
        catch (e) {
            return false;
        }   
    }

    getUnusedAddresses = async (type? : string) : Promise<Array<BaseAddress>> => {
        const addr = await this.Cardano.getUnusedAddresses();
        if(type === CardanoAPI.AddressReturnType.hex){
            return addr;
        }
        if(type === CardanoAPI.AddressReturnType.bech32){
            const bechAddr : Array<BaseAddress> = [];
            addr.forEach((address : any)=>bechAddr.push(this.getBech32FromHex(address)));
            return bechAddr;
        }
        return addr;
    }

    getUsedAddresses = async (type? : string) : Promise<Array<BaseAddress>> => {
        const addr = await this.Cardano.getUsedAddresses();
        if(type === CardanoAPI.AddressReturnType.hex){
            return addr;
        }
        if(type === CardanoAPI.AddressReturnType.bech32){
            const bechAddr : Array<BaseAddress> = [];
            addr.forEach((address : any)=>bechAddr.push(this.getBech32FromHex(address)));
            return bechAddr;
        }
        return addr;
    }

    getChangeAddress = async (type? : string) : Promise<BaseAddress> => {
        const addr = await this.Cardano.getChangeAddress();
        if(type === CardanoAPI.AddressReturnType.hex){
            return addr;
        }
        if(type === CardanoAPI.AddressReturnType.bech32){
            return this.getBech32FromHex(addr);
        }
        return addr;
    }

    getRewardAddress = async (type? : string) : Promise<RewardAddress> => {
        const addr = await this.Cardano.getRewardAddress();
        if(type === CardanoAPI.AddressReturnType.hex){
            return addr;
        }
        if(type === CardanoAPI.AddressReturnType.bech32){
            return this.getBech32FromHex(addr);
        }
        return addr;
    }

    private getBech32FromHex = (stringHex : any) : any => {
        // todo : Individual Types
        const hex = this.Buffer.from(stringHex,'hex');
        const addr = this.Wasm.Address.from_bytes(hex);
        return addr.to_bech32();
    }

    getUtxos = async(amount? : Value,  paginate?: {page: number ; limit: number} ) : 
    Promise<Array<TransactionUnspentOutput>> => {   
        const utxos : Array<TransactionUnspentOutput> = await this.Cardano.getUtxos(amount,paginate);
        return (utxos).map(u => this.Wasm.TransactionUnspentOutput.from_bytes(
            this.Buffer.from(
                u, 
                'hex'
            )
        )
        );
    }

    getCollateral = async() : Promise<TransactionUnspentOutput> => {
        return await this.Cardano.getCollateral();
    }

    getBalance = async() : Promise<Value> => {
        return await this.Cardano.getBalance();
    }

    getNetworkId = async() : Promise<number> => {
        return await this.Cardano.getNetworkId();
    }

    // @return CoseSign1
    signData = async(address : BaseAddress | RewardAddress, payload : string) : Promise<any> => { 
        return await this.Cardano.signData(address,payload);
    }
    
    signTx = async(tx: Transaction, partialSign?: boolean) : Promise<TransactionWitnessSet> => {
        return await this.Cardano.signTx(tx, partialSign);
    }

    // @return hash32
    submitTx = async(tx : Transaction) : Promise<any> => {
        const submit = this.Cardano.submitTx(tx).catch((e : any)=>console.log(e));
        return submit;
    }

  }
