import { html } from 'lit-html';
// eslint-disable-next-line import/extensions
import './ConnectWallet';

export default {
  title: 'Cardano Connect Wallet Button',
  component: 'cardano-wallet-button'
};

export const Primary = () =>
html`
  <cardano-wallet-button></cardano-wallet-button>
`;
