import { Commands } from './Commands';
import type * as CardanoSerializationLibrary from '@emurgo/cardano-serialization-lib-asmjs';
import * as buffer from 'buffer';
import { detectCardanoLoad } from './DetectCardanoLoad';
import { Spend } from './Spend/Spend';

import { abstractOnchainData } from './OnchainData/AbstractOnchainData';
export type Configure = {
  onchainData?: abstractOnchainData,
  cardanoSerializationLibrary: typeof CardanoSerializationLibrary;
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

/**
 * Cardano-api is an easy way to work with the cardano blockchain in the front end. It allows you to use cip-30 compatible wallets (nami, ccvault, etc) in your front end, and make easy functions for you to use.
 * ## Installation
 * To install run:
 * ### yarn
 * ```bash
 * yarn install @chain-lib/cardano-api
 * ```
 * ### npm
 * ```bash
 * npm install @chain-lib/cardano-api
 * ```
 * ## Usage
 * ```javascript
 * import { CardanoAPI, Blockfrost } from @chain-lib/cardano-api
 * const emurgoSerializationLib = await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js');
 * const API = CardanoAPI;
 * await API.register({
 * cardanoSerializationLibrary : emurgoSerializationLib,
 * onchainData : Blockfrost({mainnet : "mainnet-key"})
 * }),
 * ```
 * 
*/
export const CardanoAPI = {
  _loaded: false,
  get loaded() {
    return this._loaded
  },
  /**
   * This function sets the _loaded value to true.
  */
  load() {
    this._loaded = true
  },

  _wallet: undefined as undefined | any,
  get wallet() {
    if (this._wallet && this._loaded === true) {
      return this._wallet;
    }
    throw new Error('Please wait for the api to register before doing anything');
  },

  /**
   * This allows you to set the wallet based on a string, it then enabled the wallet, and concats both object into one master object _wallet.
   *
   * @param wallet - string. Get appropriate values with CardanoAPI.wallets
   *
   * @returns promise void - returns nothing, but sets the _wallet variable which other functions use. You can get the object with CardanoAPI.wallet
  */
  async setWallet(wallet: string) {
    this._wallet = window.cardano[wallet]
    const secondWallet = await this.baseCommands.enable()
    if (isObject(secondWallet)) {
      this._wallet = { ...this._wallet, ...secondWallet }
    }
  },

  _wallets: [] as string[],

  set wallets(wallets: string[]) {
    this._wallets = wallets
  },

  get wallets() {
    return this._wallets
  },

  _serializationLib: undefined as undefined | typeof CardanoSerializationLibrary,
  get serializationLib(): typeof CardanoSerializationLibrary {
    if (this._serializationLib) {
      return this._serializationLib;
    }
    throw new Error('You must initialize one of @emurgo/cardano-serialization-library');
  },
  set serializationLib(serializationLib: typeof CardanoSerializationLibrary) {
    if (serializationLib) {
      this._serializationLib = serializationLib;
      return;
    }
    throw new Error(`cardanoSerializationLib is invalid. Please initialize 
    one of @emurgo/cardano-serialization-library`);
  },

  _onchainData: undefined as undefined | abstractOnchainData,
  get onchainData(): abstractOnchainData {
    if (this._onchainData) {
      return this._onchainData;
    }
    throw new Error('You must initialize a plugin following the abstractOnchainData class type');
  },
  set onchainData(onchainData: abstractOnchainData) {
    this._onchainData = onchainData;
  },

  buffer: buffer.Buffer,

  _addressReturnType: {
    hex: 'hex',
    bech32: 'bech32'
  },

  get addressReturnType(): { hex: 'string'; bech32: 'string' } {
    return this._addressReturnType;
  },

  baseCommands: Commands,

  spend: Spend,

  /**
   * This allows you to get an array of all available raw wallet objects (before being initialized). 
   *
   * @returns Array of wallet objects. Useful to get the images associated with the wallets.
  */
  getWalletInfo(): WalletInfo[] {
    const walletInfo: WalletInfo[] = []
    this._wallets.forEach((wallet: string) => {
      walletInfo.push({ ...window.cardano[wallet], windowName: wallet })
    })
    return walletInfo
  },

  /**
   * An internal function to get a list of wallet objects from window.cardano
   *
   * @returns void
  */
  setWallets(): void {
    const value: string[] = Object.keys(window.cardano)
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
    this.wallets = value.filter((el) => !bannedProperties.includes(el));
    this.load()
  },

  /**
   * This function allows you to initialize the object. Its important to do this once.
   *
   * @param configuration - Your configuration object.
   *
   * @returns Promise void
  */
  async register(configuration: Configure): Promise<void> {
    // Checks for a valid config file
    if (!configuration.cardanoSerializationLibrary) {
      throw new Error('You must include one of the @emurgo/cardano-serialization-library');
    }

    // Sets serialization Library
    this.serializationLib = configuration.cardanoSerializationLibrary

    // Sets onchainData
    if (configuration.onchainData) {
      this.onchainData = configuration.onchainData
    }

    // Sets initialization of wallet options
    await detectCardanoLoad({ silent: true, timeout: 3000, waitAfterNamespaceResolved: 200 })
    this.setWallets()

  }
};

/**
 * An internal function that takes a type of value or undefined and returns value, or throws an error.
*/
export const errorIfUndefined = <T>(item: T | undefined): T => {
  if (!item) {
    throw new Error('Value is undefined');
  }
  return item;
};

/**
 * Determines if the given value is an object.
*/
export const isObject = (obj: any) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
