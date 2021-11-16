import { CardanoAPI } from '@chain-lib/cardano-api';
import {customElement, property} from 'lit/decorators.js';
import { LitElement, html, css } from 'lit';

@customElement('cardano-initialize')
export class CardanoInitialize extends LitElement {

  @property({type: Object})
  config : any = {};

  constructor(){
    super();
    this.initialize();
  }

  async initialize() : Promise<void> {
    console.log("initial");
    new CardanoAPI(
      CardanoAPI.WalletId(CardanoAPI.Wallet.nami),
      CardanoAPI.BlockfrostAPIKey(this.config?.blockfrost ? this.config.blockfrost : {}),
      await CardanoAPI.CardanoSerializationLibrary(
          await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js'))
      );
  }

  static styles = css`
  div {
    display : contents;
    visibility : hidden;
  }
`;

  render(){
    return html`<div></div>`;
  }
  

}
