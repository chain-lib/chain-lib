import {customElement, property} from 'lit/decorators.js';
import { LitElement, html } from 'lit';
import { Store } from '../../redux';
import { initialize, getWalletInfo } from '../../redux/cardanoWallet/actions';

type config = {blockfrost: Object}

/**
 * This is used to initialize your deployment with custom variables. Eventually this will support all features of the Cardano-API spec. Right now it accepts just the blockfrost config which will be shown below. Also you currently only need one of these. Components will read from the first CardanoInitialize component rendered, meaning all others will be ignored.
 * @remarks
 * |Variable|Description|
 * |--------|-----------|
 * |config|This value loads all config values for Cardano-API. Right now the only necessary one is BlofrostAPIKey. Not all values are necessary for the blockfrost config. Mainnet is necessary to interact with mainnet wallets, while testnet is necessary for testnet wallets.|
 * ```javascript
 *<cardano-initialize config={
 *    blockfrost : {
 *        mainnet: "",
 *        testnet: "",
 *    }
 *}>
 *</cardano-initialize>
 *```
 *
 * @param config - A config option. The only current option is blockfrost, since its the only created plugin for cardano-api currently.
 *
*/
@customElement('cardano-initialize')
export class CardanoInitialize extends LitElement {

  @property({type: Object})
  config : config | Object = {};

  constructor(){
    super();
    this.init()
  }

  async init() : Promise<void> {
    // Give the browser a chance to paint
    await new Promise((r) => setTimeout(r, 0));
    await Promise.resolve(Store.dispatch(initialize(this.config)))
    await Promise.resolve(Store.dispatch(getWalletInfo()))
  }

  render(){
    return html`<slot></slot>`;
  }
  
}
