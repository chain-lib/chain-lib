import { CardanoInitialize, CardanoConnectWalletButton } from "../src/components";

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
CardanoConnectWalletButton;
