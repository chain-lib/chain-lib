import { connect } from 'pwa-helpers';
import {customElement, property} from 'lit/decorators.js';
import { Menu } from '@material/mwc-menu';
import '@material/mwc-list/mwc-list-item';
import type { ListItemBase } from "@material/mwc-list/mwc-list-item-base";
import { Store } from '../../redux';
import { update } from '../../redux/cardanoWallet/actions';
import { loadDefaultStylesheets} from '../helper/loadStyle';
import { API } from '../../redux/cardanoWallet';
import { html } from 'lit';
import { WalletInfo } from '@chain-lib/cardano-api';

@customElement('cardano-connect-wallet-component')
export class CardanoConnectWalletComponent extends connect(Store)(Menu) {

  firstInitalized : boolean = true;

  isWalletUpdated : boolean = false;

  walletInfo : WalletInfo[] = [];

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
    if(state.reducer.initalized === true && this.firstInitalized === true){
      this.firstInitalized = false
      this.walletInfo = API.getWalletInfo()
      var slots = ''
      if(this.walletInfo.length != 0){
        this.walletInfo.forEach((walletInfo) => {
        slots = slots + `<mwc-list-item group="wallets" value=${walletInfo["windowName"]} graphic="icon"><image src="${walletInfo["icon"]}" style='height: 100%; width: 100%; object-fit: contain' slot='graphic'></image><span>${walletInfo["name"]}</span></mwc-list-item>`
      })
      }
      if(this.walletInfo.length === 0){
        slots = `<mwc-list-item disabled><span>${this.noWalletMessage}</span></mwc-list-item>`
      }
      super.innerHTML = super.innerHTML + slots
      super.render()
    }
    if(this.isWalletUpdated){
      this.isWalletUpdated = false
      this._eventHandler(state);
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
      const setWallet = async() => {
        await API.setWallet(this.convertType(super.selected).value);
        this.isWalletUpdated = true
        Store.dispatch(update(this.bech32))
      }
      setWallet()
  }

  convertType = (value : ListItemBase | ListItemBase[] | null) : ListItemBase => {
    if((value as ListItemBase).value !== 'undefined'){
      return (value as ListItemBase)
    }
    throw new Error('Cardano API does allow selecting more than one wallet. Please disable multi mode.')
  }
}
