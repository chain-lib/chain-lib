import "@material/mwc-button";
import "./CardanoConnectWalletComponent";
import {html, LitElement} from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('cardano-connect-wallet-button')
export class CardanoConnectWalletButton extends LitElement {
  open = false;

  firstUpdated(){
      const menu : any = this.renderRoot.querySelector('#menu');
      const button = this.renderRoot.querySelector('#loader');
      menu.anchor = button;
  }

  updateMenu = () => {
      const menu : any = this.renderRoot.querySelector('#menu');
      menu.open = true;
  }

  render() {
    return html`
    <div style="position : relative; min-width:350px;">
        <mwc-button @click=${this.updateMenu} id="loader" outlined>Connect</mwc-button>
        <cardano-connect-wallet-component activatable corner="BOTTOM_START" id="menu"></cardano-connect-wallet-component>
    </div>`;
  }
}