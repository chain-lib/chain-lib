import { connect } from 'pwa-helpers';
import {customElement, property} from 'lit/decorators.js';
import {Button} from '@material/mwc-button';
import { html } from 'lit';
import { Store } from '../../redux';
import { send } from '../../redux/cardanoWallet/actions';
import { loadDefaultStylesheets } from '../helper/loadStyle';

/**
 * This component is used send ada and nfts from the users wallet to another user. It can include or not include metadata.  It inherits all properties of [https://www.npmjs.com/package/@material/mwc-button], so please follow that for styling.
 * 
 * @remarks
 * ### CardanoSendButton
 * |Variable|Description|
 * |--------|-----------|
 * |recipients|This is an array of recipients |
 * |metadata|This is any metadata that the user wants to include with the transaction.|
 * |metadataLabel|This is a number, which is metadata label for the attached metadata.|
 * ```javascript
 * <cardano-send-button
 *     recipients=[
 *         {
 *             address: "",
 *             amount: 5,
 *             assets: [
 *                 {
 *                     "unit": "",
 *                     "quantity": "1"
 *                 },
 *             ]
 *         },
 *         {
 *             address: "",
 *             amount: 47
 *         },
 *         {
 *             address: "",
 *             amount: 22
 *         }
 *     ]
 *     metadata={'Test' : 'Test Message'}
 *     metadataLabel="721"
 * />
```
 *
 * @param name - description
 *
*/
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