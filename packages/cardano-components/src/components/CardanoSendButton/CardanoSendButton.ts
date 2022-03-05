import { connect } from 'pwa-helpers';
import {customElement, property} from 'lit/decorators.js';
import {Button} from '@material/mwc-button';
import { html } from 'lit';
import { Store } from '../../redux';
import { send } from '../../redux/cardanoWallet/actions';
import { loadDefaultStylesheets } from '../helper/loadStyle';

@customElement('cardano-send-button')
export class CardanoSendButton extends connect(Store)(Button) {

  @property({type: Array})
  recipients : Array<Object> = [];

  @property({type: Object})
  metadata={};

  @property({type: String})
  metadataLabel='';

  loading = false;

  constructor(){
    super();
    loadDefaultStylesheets();
    super.onclick = this.clickHandler;
  }

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
    const metadata = this.metadata;
    const metadataLabel = this.metadataLabel === '' ? undefined : this.metadataLabel;
    Store.dispatch(send(this.recipients, metadata, metadataLabel));
  }
}