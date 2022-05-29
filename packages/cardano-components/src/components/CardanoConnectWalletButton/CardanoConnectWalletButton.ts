import "@material/mwc-button";
import { connect } from 'pwa-helpers';
import { Store } from "../../redux";
import "../CardanoConnectWalletComponent/CardanoConnectWalletComponent";
import { html, LitElement } from "lit";
import { customElement, property } from 'lit/decorators.js';

/**
 * This component is used to allow users to connect to your website.
 * @remarks
 * |Variable|Description|
 * |--------|-----------|
 * |noWalletMessage|This is the string that displays when the user does not have any wallets downloaded. It defaults to "Please install a d-app wallet".|
 * |bech32|If true then the state event will display human readable bech32 addresses, otherwise it will display hex addresses.|
 * |defaultConnect|This is the default message your component will display in your button.|
 * |buttonArgs|Args you can use to effect the button. It is an object like {"underlined" : true}|
 * |menuArgs|Args you can use to effect the menu. It works like buttonArgs|
 * 
 * |Event|Description|
 * |-----|-----------|
 * |state|This will give the current redux state, any time the state is updated. What does this mean, the state will tell you if its connected or not, and if it is connected then it will tell you useful information like the wallet addresses.|
 * 
 * ```javascript
 *  <cardano-connect-wallet-button 
 *    noWalletMessage = "Please install a d-app wallet."
 *    defaultConnect = "Connect"
 *    buttonArgs = "{"underlined":true}"
 *    menuArgs = "{}"
 *    bech32 = "true"
 *  />
 * ```
 *
*/

@customElement('cardano-connect-wallet-button')
export class CardanoConnectWalletButton extends connect(Store)(LitElement) {
  open : boolean = false;

  @property({type:String})
  noWalletMessage = "Please install a d-app wallet";

  @property({type:String})
  defaultConnect = "Connect";

  @property({type:Boolean})
  bech32 = true

  @property({type:Object})
  buttonArgs = {}

  @property({type:Object})
  menuArgs = {}

  firstUpdated(){
      const menu : any = this.renderRoot.querySelector('#menu');
      const button = this.renderRoot.querySelector('#loader');
      for(const [key,value] of Object.entries(this.buttonArgs)){
        button?.setAttribute(key,String(value))
      }
      for (const [key,value] of Object.entries(this.menuArgs)){
        menu?.setAttribute(key,value)
      }
      menu.anchor = button;
  }

  updateMenu = () => {
      const menu : any = this.renderRoot.querySelector('#menu');
      menu.open = true;
  }

  render() {
    return html`
    <div style="position : relative!important;">
        <mwc-button @click=${this.updateMenu} id="loader" ${{...this.buttonArgs}}>${this.defaultConnect}</mwc-button>
        <cardano-connect-wallet-component 
          activatable 
          corner="BOTTOM_START" 
          id="menu" 
          noWalletMessage=${this.noWalletMessage} 
          bech32=${this.bech32}
        >
        </cardano-connect-wallet-component>
    </div>`;
  }
}