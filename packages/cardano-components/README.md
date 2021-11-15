# @chain-lib/cardano-components

This is a repository full of reusable web components for working with the cardano blockchain. 

What is a web-components? It is a way to write code that can be used with any framework, that means you can use it with React, Angular, Vue, base html and any other framework you might use. 

## Elements

## CardanoInitialize
This is used to initialize your deployment with custom variables. Eventually this will support all features of the Cardano-API spec. Right now it accepts just the blockfrost config which will be shown below. Also you currently only need one of these. Components will read from the first CardanoInitialize component rendered, meaning all others will be ignored. Keep this in mind for now, this will eventually change.
```javascript
// Not all values are necessary for the blockfrost config. Ipfs is not currently used in any component, mainnet is necessary to interact with mainnet wallets, while testnet is necessary for testnet wallets.
<cardano-initialize config={
    blockfrost : {
        ipfs : "",
        mainnet: "",
        testnet: "",
    }
}>
</cardano-initialize>
```
### CardanoStakeButton
This component is a button that allows you to stake with any stakepool it is set up with. It accepts both hex and bech32 stakepool id as an input. If the user is using a testnet wallet, and you give it a mainnet id, then the user will not have anything happen due to the mismatch of environments. 
|Variable|Description|
|--------|-----------|
|initializeOnLoad|This value is optional and defaults to false. If true it will ask the user to connect their wallet to the website, if it has not been connected before.|
|stakepoolId|The hex or bech32 stakepool id you want the user to stake with.|
```javascript
<cardano-stake-button 
initializeOnLoad="false"
stakepoolId="" />
```

### CardanoConnectWalletButton

### CardanoSendButton

## How to use

### Base HTML
```html
<script type="module">
    import { CardanoConnectWallet } from "@chain-lib/cardano-components";
</script>
<cardano-connect-wallet-button />
```

### React

Wrappers for react are provided for all components instead of CardanoConnectWallet you can import ReactCardanoConnectWallet.
```javascript
import { ReactCardanoConnectWalletButton } from "@chain-lib/cardano-components";
const Component = (props) => {
    return <ReactCardanoConnectWalletButton />
}
```

### Angular

1. Add `CUSTOM_ELEMENTS_SCHEMA` to your root module.

    `main.module.js`
    ```javascript
    import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

    @NgModule({
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
    export class AnalysisToolModule {}
    ```
2. Import a component into your component file.
    `demo.component.ts`
    ```javascript
    import { CardanoConnectWalletButton } from "@chain-lib/cardano-components';
    ```
3. Use the components in your template

    `demo.compoennt.html`
    ```html
    <cardano-connect-wallet-button />
    ```

### Vue

1. Add to your vue.config.js file the following.

```javascript
module.exports = {
    chainWebpack: config => {
        config.module
          .rule('vue')
          .use('vue-loader')
          .tap(options => ({
            ...options,
            compilerOptions: {
              isCustomElement: tag => tag.startsWith('@chain-lib')
            }
        }))
    },
}
```
2. You can now use any of the chain libs inside your component as a normal component.
```javascript
<template>
<cardano-connect-wallet-button />
</template>
<script>
import { CardanoConnectWalletButton } from "@chain-lib/cardano-components";
</script>
```
