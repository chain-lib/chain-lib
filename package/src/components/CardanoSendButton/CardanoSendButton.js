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
import { initalizeWallet, send } from '../../redux/cardanoWallet/actions';
import { loadDefaultStylesheets } from '../helper/loadStyle';
let CardanoSendButton = class CardanoSendButton extends connect(Store)(Button) {
    recipients = [];
    metadata = '';
    metadataLabel = '';
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
        const metadata = this.metadata === '' ? undefined : this.metadata;
        const metadataLabel = this.metadataLabel === '' ? undefined : this.metadataLabel;
        Store.dispatch(send(this.recipients, metadata, metadataLabel));
    };
};
__decorate([
    property({ type: Array })
], CardanoSendButton.prototype, "recipients", void 0);
__decorate([
    property({ type: String })
], CardanoSendButton.prototype, "metadata", void 0);
__decorate([
    property({ type: String })
], CardanoSendButton.prototype, "metadataLabel", void 0);
__decorate([
    property({ type: Boolean })
], CardanoSendButton.prototype, "initializeOnLoad", void 0);
CardanoSendButton = __decorate([
    customElement('cardano-send-button')
], CardanoSendButton);
export { CardanoSendButton };
