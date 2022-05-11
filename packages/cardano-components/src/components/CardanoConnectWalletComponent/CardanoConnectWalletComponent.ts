import { connect } from 'pwa-helpers';
import {customElement, property} from 'lit/decorators.js';
import { Menu } from '@material/mwc-menu';
import '@material/mwc-list/mwc-list-item';
import type { ListItemBase } from "@material/mwc-list/mwc-list-item-base";
import { Store } from '../../redux';
import { update } from '../../redux/cardanoWallet/actions';
import { loadDefaultStylesheets} from '../helper/loadStyle';
import { html } from 'lit';
import { WalletInfo } from '@chain-lib/cardano-api';
import { setWallet } from "../../redux/cardanoWallet/actions";

/**
 * This component is used to allow users to connect to your website. It inherits all properties of [https://www.npmjs.com/package/@material/mwc-menu]. It will go ahead and configure the <mwc-list-item> components for you, so you can ignore that. Please reference this docuemntation for styling.
 * @remarks
 * |Variable|Description|
 * |--------|-----------|
 * |noWalletMessage|This is the string that displays when the user does not have any wallets downloaded. It defaults to "Please install a d-app wallet".|
 * |bech32|If true then the state event will display human readable bech32 addresses, otherwise it will display hex addresses.|
 * 
 * |Event|Description|
 * |-----|-----------|
 * |state|This will give the current redux state, any time the state is updated. What does this mean, the state will tell you if its connected or not, and if it is connected then it will tell you useful information like the wallet addresses.|
 * 
 * ```javascript
 *  <cardano-connect-wallet-button 
 *    noWalletMessage = "Please install a d-app wallet."
 *    bech32 = "true"
 *  />
 * ```
 *
 * @param noWalletMessage - String. The message to display if they do not have a wallet installed. Defaults to "Please install a d-app wallet."
 * @param bech32 - Boolean. This optional parameter defaults to true. It determines how the event shows addresses. Bech32 is human readable forms (addr...).
 *
 * @returns type and meaning of return value
 * 
 * @event state - There is an event named state that can be subscribed to. Any time a wallet is selected / updated the state will return an object as follows :
 * ```
 * {
 *    wallet : {name : "name", icon : "icon"},
 *    changeAddress : "changeAddress",
 *    rewardAddresses : ["rewardAddresses"],
 *    usedAddresses : ["usedAddresses"],
 *    unusedAddresses : ["unusedAddresses"],
 * }
 * ```
*/
@customElement('cardano-connect-wallet-component')
export class CardanoConnectWalletComponent extends connect(Store)(Menu) {

  firstInitialized : boolean = true;

  isWalletUpdated : boolean = false;

  walletInfo : WalletInfo[] = [];

  walletCache : string = ""

  cachedWalletInfo : Object = {}

  @property({type:Boolean})
  bech32 = true

  @property({type:String})
  noWalletMessage= "Please install a d-app wallet"

  constructor(){
    super();
    loadDefaultStylesheets();
    super.onclick = this.clickHandler
  }

  stateChanged(state : any) {
    if(typeof state.reducer.walletInfo !== "undefined" && this.firstInitialized == true){
      this.firstInitialized = false
      var slots = ''
      if(state.reducer.length != 0){
        state.reducer.walletInfo.forEach((walletInfo : any) => {
        slots = slots + `<mwc-list-item group="wallets" value=${walletInfo["windowName"]} graphic="icon"><image src="${walletInfo["icon"]}" style='height: 100%; width: 100%; object-fit: contain' slot='graphic'></image><span>${walletInfo["name"]}</span></mwc-list-item>`
      })
      }
      if(state.reducer.walletInfo.length === 0){
        slots = `<mwc-list-item disabled><span>${this.noWalletMessage}</span></mwc-list-item>`
      }
      super.innerHTML = super.innerHTML + slots
      super.render()
    }
    if(state.reducer.selectedWallet != this.walletCache && typeof state.reducer.selectedWallet != "undefined" && this.isWalletUpdated == true){
      this.walletCache = state.reducer.selectedWallet;
      this.cachedWalletInfo = state.reducer.walletInfo.find((s : any) => {
        if(s?.windowName == this.walletCache){
          return {
            ...s
          }
        }
      }
      ) ?? {};
      this._eventHandler({
        wallet : this.cachedWalletInfo ?? "", 
        changeAddress : state.reducer.changeAddress ?? [], 
        rewardAddresses : state.reducer.rewardAddresses ?? [],
        unusedAddresses : state.reducer.unusedAddresses ?? [],
        usedAddresses : state.reducer.usedAddresses ?? [],
      });
    }  
  }

  render(){
    return html`
      ${super.render()}
    `;
  }

  _eventHandler(state : any){
    const connection = new CustomEvent('state', {
      detail: state,
      bubbles : true,
      composed : true
    });
    this.dispatchEvent(connection);
  }
  
  clickHandler = () => {
      const setWalletValue = async() => {
        this.isWalletUpdated = false
        await Promise.resolve(Store.dispatch(setWallet(this.convertType(super.selected).value)))
        this.isWalletUpdated = true
        await Promise.resolve(Store.dispatch(update(this.bech32)))
      }
      setWalletValue()
  }

  convertType = (value : ListItemBase | ListItemBase[] | null) : ListItemBase => {
    if((value as ListItemBase).value !== 'undefined'){
      return (value as ListItemBase)
    }
    throw new Error('Cardano API does allow selecting more than one wallet. Please disable multi mode.')
  }
}
