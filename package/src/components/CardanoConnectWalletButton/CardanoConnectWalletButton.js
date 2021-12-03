var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { connect } from 'pwa-helpers';
import { customElement, property } from 'lit/decorators.js';
import { Button } from '@material/mwc-button';
import { Store } from '../../redux';
import { connectWallet, initalizeWallet, update } from '../../redux/cardanoWallet/actions';
import { loadDefaultStylesheets } from '../helper/loadStyle';
let CardanoConnectWalletButton = class CardanoConnectWalletButton extends connect(Store)(Button) {
    wallet = false;
    connectedValue = 'Connected';
    disconnectedValue = 'Please Connect Wallet';
    bech32 = true;
    constructor() {
        super();
        loadDefaultStylesheets();
        Store.dispatch(initalizeWallet());
        Store.dispatch(update());
        super.onclick = this.clickHandler;
    }
    stateChanged(state) {
        if (typeof state.reducer.walletActive !== 'undefined') {
            this.wallet = state.reducer.walletActive;
            this._eventHandler(state);
            super.label = this.wallet ? this.connectedValue : this.disconnectedValue;
        }
    }
    async firstUpdated() {
        await new Promise((r) => setTimeout(r, 0));
        this.addEventListener('getWalletUpdates', this._update);
    }
    _update = () => {
        Store.dispatch(update());
    };
    _eventHandler(state) {
        const connection = new CustomEvent('state', {
            detail: state,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(connection);
    }
    clickHandler = () => {
        Store.dispatch(connectWallet());
        Store.dispatch(update());
    };
};
__decorate([
    property({ type: String })
], CardanoConnectWalletButton.prototype, "connectedValue", void 0);
__decorate([
    property({ type: String })
], CardanoConnectWalletButton.prototype, "disconnectedValue", void 0);
__decorate([
    property({ type: Boolean })
], CardanoConnectWalletButton.prototype, "bech32", void 0);
CardanoConnectWalletButton = __decorate([
    customElement('cardano-connect-wallet-button')
], CardanoConnectWalletButton);
export { CardanoConnectWalletButton };
