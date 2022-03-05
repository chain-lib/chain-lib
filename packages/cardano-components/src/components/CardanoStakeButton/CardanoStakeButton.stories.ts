import { html } from 'lit';
// eslint-disable-next-line import/extensions
import * as CardanoStakeButton from './CardanoStakeButton';
import * as Initalize from '../CardanoInitialize/CardanoInitialize';

export default {
  title: 'Cardano Stake Button',
  component: 'cardano-stake-button'
};

export const Stake = () =>
html`
  <cardano-initalize>
    <cardano-stake-button>Stake</cardano-stake-button>
  </cardano-initalize>
`;

CardanoStakeButton // Forces webpack (storybook) not to treeshake module
Initalize // Forces webpack (storybook) not to treeshake module
