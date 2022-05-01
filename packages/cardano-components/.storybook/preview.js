import { CardanoInitialize } from "../src/components";
import * as DefaultButton from "../src/components/CardanoConnectWalletComponent/DefaultButton";
import { html } from 'lit';

const initialize = (Story) => {
    const config = {
        blockfrost : {
            testnet : process.env.STORYBOOK_CARDANO_BLOCKFROST_TESTNET ?? ""
        }
    };

    const configString = JSON.stringify(config)

    return html`
    <cardano-initialize config=${configString}>
        <cardano-connect-wallet-button></cardano-connect-wallet-button>
        ${Story()}
    </cardano-initialize>
    `
}
export const decorators = [
    initialize,
  ];
  
CardanoInitialize;
DefaultButton;
