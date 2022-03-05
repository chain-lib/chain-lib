import { Commands } from './Commands';
import type * as CardanoSerializationLibrary from '@emurgo/cardano-serialization-lib-asmjs';
import * as buffer from 'buffer';
import { detectCardanoLoad } from './DetectCardanoLoad';
import { Spend } from './Spend/Spend';
//type Plugin = { name : string; exec : object};
import { abstractOnchainData } from './OnchainData/AbstractOnchainData';
export type Configure = { 
  //plugins : Plugin[]; 
  onchainData? : abstractOnchainData,
  cardanoSerializationLibrary : typeof CardanoSerializationLibrary; 
};
export type WalletInfo = {
  apiVersion: String,
  enable: typeof Function,
  experimental: Object,
  icon: String,
  isEnabled: Function,
  name: String,
  windowName: String
}

declare global {
  interface Window { cardano: any; }
}

window.cardano = window.cardano || {};

export const CardanoAPIExperimental = async(configure : Configure) => {
  const API = CardanoAPIObject;
  await API.register(configure);
  return API;
};

export const CardanoAPIObject = {
  _loaded : false,
  get loaded(){
    return this._loaded
  },

  load(){
    this._loaded = true
  },

  _wallet : undefined as undefined | any,
  get wallet(){
    if(this._wallet && this._loaded === true){
      return this._wallet;
    }
    throw new Error('Please wait for the api to register before doing anything');
  },

  async setWallet (wallet : string)  {
      this._wallet = window.cardano[wallet]
      const secondWallet = await this.baseCommands.enable()
      if(isObject(secondWallet)){
        this._wallet = {...this._wallet, ...secondWallet}
      }
  },

  _wallets : [] as string[],

  set wallets(wallets : string[]){
    this._wallets = wallets
  },

  get wallets(){
    return this._wallets
  },

  _serializationLib : undefined as undefined | typeof CardanoSerializationLibrary,
  get serializationLib() : typeof CardanoSerializationLibrary{
    if(this._serializationLib){
      return this._serializationLib;  
    }
    throw new Error('You must initialize one of @emurgo/cardano-serialization-library');
  },
  set serializationLib(serializationLib : typeof CardanoSerializationLibrary){
    if(serializationLib){
      this._serializationLib = serializationLib;
      return;
    }
    throw new Error(`cardanoSerializationLib is invalid. Please initalize 
    one of @emurgo/cardano-serialization-library`);
  },

  _onchainData: undefined as undefined | abstractOnchainData,
  get onchainData() : abstractOnchainData{
    if(this._onchainData){
      return this._onchainData;  
    }
    throw new Error('You must initialize a plugin following the abstractOnchainData class type');
  },
  set onchainData(onchainData : abstractOnchainData){
      this._onchainData = onchainData;
  },

  buffer : buffer.Buffer,

  plugins : {},
  _addressReturnType: {
    hex: 'hex',
    bech32: 'bech32'
  },

  get addressReturnType() : {hex : 'string'; bech32 : 'string'} {
    return this._addressReturnType;
  },

  baseCommands : Commands,

  spend : Spend,
  getWalletInfo () : WalletInfo[] {
    const walletInfo : WalletInfo[] = []
    this._wallets.forEach((wallet : string) => {
      walletInfo.push({...window.cardano[wallet], windowName : wallet})
    })
    return walletInfo
  },

  setWallets () : void {
    const value : string[] = Object.keys(window.cardano)
    const bannedProperties = [
      "enable",
      "isEnabled",
      "getBalance",
      "signData",
      "signTx",
      "submitTx",
      "getUtxos",
      "getCollateral",
      "getUsedAddresses",
      "getUnusedAddresses",
      "getChangeAddress",
      "getRewardAddress",
      "getNetworkId",
      "onAccountChange",
      "onNetworkChange",
      "off",
      "_events",
  ]
  this.wallets = value.filter( ( el ) => !bannedProperties.includes( el ) );
  this.load()
  },
  async register(configuration : Configure): Promise<void> {
    // Checks for a valid config file
    /*if(!Array.isArray(configuration.plugins)){
      throw new Error('Registered plugins must be an array.');
    }*/
    if(!configuration.cardanoSerializationLibrary){
      throw new Error('You must include one of the @emurgo/cardano-serialization-library');
    }

    // Sets serialization Library
    this.serializationLib = configuration.cardanoSerializationLibrary

    // Sets onchainData
    if(configuration.onchainData){
      this.onchainData = configuration.onchainData
    }
    
    // Sets intialization of wallet options
    await detectCardanoLoad({silent: true, timeout: 3000, waitAfterNamespaceResolved : 200})
    this.setWallets()
  
  }
};

export const errorIfUndefined = <T>(item : T | undefined) : T => {
  if(!item){
      throw new Error('Value is undefined');
  }
  return item;
};


export const isObject = (obj : any) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
