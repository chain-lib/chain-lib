import { Blockfrost, Spend } from '@chain-lib/cardano-api';
import { API } from '../../redux/cardanoWallet';
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
    const serializationLib = await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js');
    await API.register({
      plugins : [Blockfrost(this.config?.blockfrost ? this.config.blockfrost : {}), Spend()],
      cardanoSerializationLibrary : serializationLib,
    });
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
