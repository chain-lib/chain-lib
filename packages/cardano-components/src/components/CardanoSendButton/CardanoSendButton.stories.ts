import { html } from 'lit';
import * as CardanoSendButton from './CardanoSendButton';

export default {
  title: 'Cardano Send Button',
  component: 'cardano-send-button'
};

export const Send = () =>{
  return html`
      <cardano-send-button recipients: [{"address": "${process.env.STORYBOOK_CARDANO_ADDRESS ?? ""}", "amount": 5}]>Send</cardano-send-button>
  `;
}

CardanoSendButton // Forces webpack (storybook) not to treeshake module
