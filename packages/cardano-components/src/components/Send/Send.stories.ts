import { html } from 'lit-html';
// eslint-disable-next-line import/extensions
import './Send';

export default {
  title: 'Cardano Send Button',
  component: 'cardano-send-button'
};

export const Primary = () =>
html`
  <cardano-send-button></cardano-send-button>
`;