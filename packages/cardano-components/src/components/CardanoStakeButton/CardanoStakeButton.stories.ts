import { html } from 'lit-html';
// eslint-disable-next-line import/extensions
import './CardanoStakeButton';

export default {
  title: 'Cardano Stake Button',
  component: 'cardano-stake-button'
};

export const Primary = () =>
html`
  <cardano-stake-button></cardano-stake-button>
`;