var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { connect } from 'pwa-helpers';
import { customElement, property } from 'lit/decorators.js';
import { Button } from '@material/mwc-button';
import { html } from 'lit';
import { Store } from '../../redux';
import { initalizeWallet, stake } from '../../redux/cardanoWallet/actions';
import { loadDefaultStylesheets } from '../helper/loadStyle';
let CardanoStakeButton = class CardanoStakeButton extends connect(Store)(Button) {
    stakepoolId = '';
    initializeOnLoad = false;
    loading = false;
    constructor() {
        super();
        if (this.initializeOnLoad) {
            Store.dispatch(initalizeWallet);
        }
        loadDefaultStylesheets();
        super.onclick = this.clickHandler;
    }
    stateChanged(state) {
        if (this.loading && state) {
            this.loading = false;
        }
    }
    async firstUpdated() {
        if (this.initializeOnLoad) {
            await new Promise((r) => setTimeout(r, 0));
        }
    }
    render() {
        return html `
      ${super.render()}
    `;
    }
    clickHandler = () => {
        this.loading = true;
        this.requestUpdate();
        Store.dispatch(stake(this.stakepoolId));
    };
};
__decorate([
    property({ type: String })
], CardanoStakeButton.prototype, "stakepoolId", void 0);
__decorate([
    property({ type: Boolean })
], CardanoStakeButton.prototype, "initializeOnLoad", void 0);
CardanoStakeButton = __decorate([
    customElement('cardano-stake-button')
], CardanoStakeButton);
export { CardanoStakeButton };
