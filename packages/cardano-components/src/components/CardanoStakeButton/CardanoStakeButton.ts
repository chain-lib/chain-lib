import { connect } from 'pwa-helpers';
import {customElement, property} from 'lit/decorators.js';
import {Button} from '@material/mwc-button';
import { html } from 'lit';
import { Store } from '../../redux';
import { stake } from '../../redux/cardanoWallet/actions';
import { loadDefaultStylesheets } from '../helper/loadStyle';
/**
 * This components allows you to let people stake with your stakepool.
 * @remarks
 * ### CardanoStakeButton
 * This component is a button that allows you to stake with any stakepool it is set up with. It inherits all properties of [https://www.npmjs.com/package/@material/mwc-button], so please follow that for styling. It accepts both hex and bech32 stakepool id as an input. If the user is using a testnet wallet, and you give it a mainnet id, then the user will not have anything happen due to the mismatch of environments. 
 * |Variable|Description|
 * |--------|-----------|
 * |stakepoolId|The hex or bech32 stakepool id you want the user to stake with.|
 * ```javascript
 * <cardano-stake-button stakepoolId="stakepoolId"></cardano-stake-button>
 * ```
 *
 * @param stakepoolId - String, either a bech32 string, or a hex encoded string. These can easily be found on websites like pooltool.io
 *
*/
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

