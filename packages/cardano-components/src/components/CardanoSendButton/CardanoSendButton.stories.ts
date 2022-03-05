import { html } from 'lit';
import * as CardanoSendButton from './CardanoSendButton';
import * as Initalize from '../CardanoInitialize/CardanoInitialize';

export default {
  title: 'Cardano Send Button',
  component: 'cardano-send-button'
};

export const Send = () =>
html`
<cardano-initalize config={"blockfrost":{"testnet":""}}>
    <cardano-send-button recipients: [{"address": "addr_test1qqnwfdcyv4kxwrs87aaadgck4pygyhud9zwvlprtvp9lrxsx8zvtu8eyyh9e0x7ytf5jvrryf452q8ze6nsy2ks99egsh6ucvl", "amount": 5}]>Send</cardano-send-button>
  </cardano-initalize>
`;

CardanoSendButton // Forces webpack (storybook) not to treeshake module
Initalize // Forces webpack (storybook) not to treeshake module