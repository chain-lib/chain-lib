import {customElement, property} from 'lit/decorators.js';
import { LitElement, html } from 'lit';
import { Store } from '../../redux';
import { initialize } from '../../redux/cardanoWallet/actions'

type config = {blockfrost: Object}

@customElement('cardano-initialize')
export class CardanoInitialize extends LitElement {

  @property({type: Object})
  config : config | Object = {}

  constructor(){
    super();
    this.init()
  }

  async init() : Promise<void> {
    // Give the browser a chance to paint
    await new Promise((r) => setTimeout(r, 0));
    Store.dispatch(initialize(this.config));

  }

  render(){
    return html`<slot></slot>`;
  }
  

}
