/* eslint-disable import/extensions */
import { connect } from 'pwa-helpers';
import {customElement, property} from 'lit/decorators.js';
import {Button} from '@material/mwc-button';
import { Store } from '../../redux';
import { connectWallet, initalizeWallet, update } from '../../redux/cardanoWallet/actions';
import { loadDefaultStylesheets} from '../helper/loadStyle';

@customElement('cardano-wallet-button')
export class CardanoWalletButton extends connect(Store)(Button) {

  wallet : boolean = false;

  @property({type: String})
  connectedValue = 'Connected';

  @property({type: String})
  disconnectedValue = 'Please Connect Wallet';

  @property({type:Boolean})
  bech32 = true

  constructor(){
    super();
    loadDefaultStylesheets();
    Store.dispatch(initalizeWallet());
    Store.dispatch(update());
    super.onclick = this.clickHandler;
  }

  stateChanged(state : any) {
    if(typeof state.reducer.walletActive !== 'undefined'){
      this.wallet = state.reducer.walletActive;
      this._eventHandler(state);
      super.label = this.wallet? this.connectedValue : this.disconnectedValue;

    }
  }

  async firstUpdated() {
    // Give the browser a chance to paint
    await new Promise((r) => setTimeout(r, 0));
    this.addEventListener('getWalletUpdates', this._update);
  }


  _update = () => {
    Store.dispatch(update());
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
    Store.dispatch(connectWallet());
    Store.dispatch(update());
  }
}
