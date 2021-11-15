import { html } from 'lit-html';
import './CardanoConnectWalletButton';

export default {
  title: 'Cardano Connect Wallet Button',
  component: 'cardano-connect-wallet-button'
};

export const Primary = () =>
html`
  <cardano-wallet-button></cardano-wallet-button>
`;
