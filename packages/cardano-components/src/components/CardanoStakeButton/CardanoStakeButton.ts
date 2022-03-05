import { connect } from 'pwa-helpers';
import {customElement, property} from 'lit/decorators.js';
import {Button} from '@material/mwc-button';
import { html } from 'lit';
import { Store } from '../../redux';
import { stake } from '../../redux/cardanoWallet/actions';
import { loadDefaultStylesheets } from '../helper/loadStyle';

@customElement('cardano-stake-button')
export class CardanoStakeButton extends connect(Store)(Button) {

  @property({type: String})
  stakepoolId = '';

  loading = false;

  constructor(){
    super();
    loadDefaultStylesheets();
    super.onclick = this.clickHandler;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  stateChanged(state : any) {
    if(this.loading && state){
      this.loading = false;
    }
  }

  render(){
    return html`
      ${super.render()}
    `;
  }

  clickHandler = () => {
    this.loading=true;
    this.requestUpdate();
    Store.dispatch(stake(this.stakepoolId));
  }
}

