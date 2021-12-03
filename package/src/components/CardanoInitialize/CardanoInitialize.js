var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Blockfrost, Spend } from '@chain-lib/cardano-api';
import { API } from '../../redux/cardanoWallet';
import { customElement, property } from 'lit/decorators.js';
import { LitElement, html, css } from 'lit';
let CardanoInitialize = class CardanoInitialize extends LitElement {
    config = {};
    constructor() {
        super();
        this.initialize();
    }
    async initialize() {
        const serializationLib = await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js');
        await API.register({
            plugins: [Blockfrost(this.config?.blockfrost ? this.config.blockfrost : {}), Spend()],
            cardanoSerializationLibrary: serializationLib,
        });
    }
    static styles = css `
  div {
    display : contents;
    visibility : hidden;
  }
`;
    render() {
        return html `<div></div>`;
    }
};
__decorate([
    property({ type: Object })
], CardanoInitialize.prototype, "config", void 0);
CardanoInitialize = __decorate([
    customElement('cardano-initialize')
], CardanoInitialize);
export { CardanoInitialize };
