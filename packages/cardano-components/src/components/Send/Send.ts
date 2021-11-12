import { connect } from 'pwa-helpers';
import {customElement, property} from 'lit/decorators.js';
import {Button} from '@material/mwc-button';
import { html } from 'lit';
import { Store } from '../../redux';
import { initalizeWallet, send } from '../../redux/cardanoWallet/actions';
import { loadDefaultStylesheets } from '../helper/loadStyle';

@customElement('cardano-send-button')
export class Send extends connect(Store)(Button) {

  @property({type: Array})
  recipients : Array<Object> = [];

  @property({type: String})
  metadata='';

  @property({type: String})
  metadataLabel='';

  @property({type: Boolean})
  initializeOnLoad = false;

  loading = false;

  constructor(){
    super();
    if(this.initializeOnLoad){
      Store.dispatch(initalizeWallet);
    }
    loadDefaultStylesheets();
    super.onclick = this.clickHandler;
  }

  stateChanged(state : any) {
    if(this.loading){
      this.loading = false;
    }
  }

  async firstUpdated() {
    // Give the browser a chance to paint
    if(this.initializeOnLoad){
        await new Promise((r) => setTimeout(r, 0));
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
    const metadata = this.metadata === '' ? undefined : this.metadata;
    const metadataLabel = this.metadataLabel === '' ? undefined : this.metadataLabel;
    Store.dispatch(send(this.recipients, metadata, metadataLabel));
  }
}
