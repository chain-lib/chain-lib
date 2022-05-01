import { html } from 'lit';
// eslint-disable-next-line import/extensions
import * as CardanoStakeButton from './CardanoStakeButton';

export default {
  title: 'Cardano Stake Button',
  component: 'cardano-stake-button'
};

export const Stake = () =>
html`<cardano-stake-button>Stake</cardano-stake-button>`;

CardanoStakeButton // Forces webpack (storybook) not to treeshake module
