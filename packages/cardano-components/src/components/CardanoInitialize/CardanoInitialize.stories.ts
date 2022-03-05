import { html } from 'lit';
import * as Initalize from './CardanoInitialize';

export default {
  title: 'Invisible Initialization component',
  component: 'cardano-initialize'
};

export const Primary = () =>
html`
<cardano-initalize config={"blockfrost":{"testnet":""}}></cardano-initialize>
`;

Initalize // Forces webpack (storybook) not to treeshake module