import { html } from 'lit';
import * as CardanoConnectWalletComponent from './CardanoConnectWalletComponent';


export default {
  title: 'Cardano Connect Wallet Component',
  component: 'cardano-connect-wallet-component'
};

export const ConnectWallet = () =>
html`<cardano-connect-wallet-component open></cardano-connect-wallet-component>`;

CardanoConnectWalletComponent // Forces webpack (storybook) not to treeshake module
