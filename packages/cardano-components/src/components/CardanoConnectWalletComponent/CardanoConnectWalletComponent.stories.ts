import { html } from 'lit';
import * as CardanoConnectWalletComponent from './CardanoConnectWalletComponent';
import * as Initalize from '../CardanoInitialize/CardanoInitialize';

export default {
  title: 'Cardano Connect Wallet Component',
  component: 'cardano-connect-wallet-component'
};

export const Send = () =>
html`
<cardano-initalize config={"blockfrost":{"testnet":""}}>
    <cardano-connect-wallet-component open></cardano-connect-wallet-component>
  </cardano-initalize>
`;

CardanoConnectWalletComponent// Forces webpack (storybook) not to treeshake module
Initalize // Forces webpack (storybook) not to treeshake module