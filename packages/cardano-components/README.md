# @chain-lib/cardano-components

This is a repository full of reusable web components for working with the cardano blockchain. 

What is a web-components? It is a way to write code that can be used with any framework, that means you can use it with React, Angular, Vue, base html and any other framework you might use. 

# Install and setup
To install run:
### yarn
```bash
yarn install @chain-lib/cardano-components
```
### npm
```bash
npm install @chain-lib/cardano-compoents
```
This module requires that asyncWebAssembly be enabled (because of @emurgo/cardano-serializaiton-library), and webcomponents require you compile your module with at least es2019. I reccomend using esnext.

The easiest way to enable async web assembly is by including the following inside your webpack config (or vue config).
```javascript
    experiments : {
        asyncWebAssembly : true
    },
```
## Elements

## CardanoInitialize
This is used to initialize your deployment with custom variables. Eventually this will support all features of the Cardano-API spec. Right now it accepts just the blockfrost config which will be shown below. Also you currently only need one of these. Components will read from the first CardanoInitialize component rendered, meaning all others will be ignored.
|Variable|Description|
|--------|-----------|
|config|This value loads all config values for Cardano-API. Right now the only necessary one is BlofrostAPIKey. Not all values are necessary for the blockfrost config. Ipfs is not currently used in any component, mainnet is necessary to interact with mainnet wallets, while testnet is necessary for testnet wallets.|
```javascript
<cardano-initialize config={
    blockfrost : {
        mainnet: "",
        testnet: "",
    }
}>
</cardano-initialize>
```

### CardanoConnectWalletButton
 This component is used to allow users to connect to your website. It is the easiest way to get started.
 |Variable|Description|
 |--------|-----------|
 |noWalletMessage|This is the string that displays when the user does not have any wallets downloaded. It defaults to "Please install a d-app wallet".|
 |bech32|If true then the state event will display human readable bech32 addresses, otherwise it will display hex addresses.|
 |defaultConnect|This is the default message your component will display in your button.|
 |buttonArgs|Args you can use to effect the button. It is an object like {"underlined" : true}|
 |menuArgs|Args you can use to effect the menu. It works like buttonArgs|

 |Event|Description|
 |-----|-----------|
 |state|This will give the current redux state, any time the state is updated. What does this mean, the state will tell you if its connected or not, and if it is connected then it will tell you useful information like the wallet addresses.|
 
 ```javascript
   <cardano-connect-wallet-button 
     noWalletMessage = "Please install a d-app wallet."
     defaultConnect = "Connect"
     buttonArgs = "{"underlined":true}"
     menuArgs = "{}"
     bech32 = "true"
   />
```

### CardanoConnectWalletComponent
This component is used to allow users to connect to your website. It inherits all properties of [https://www.npmjs.com/package/@material/mwc-menu]. It will go ahead and configure the <mwc-list-item> components for you, so you can ignore that. Please reference this docuemntation for styling.

|Variable|Description|
|--------|-----------|
|noWalletMessage|This is the string that displays when the user does not have any wallets downloaded. It defaults to "Please install a d-app wallet".|
|bech32|If true then the state event will display human readable bech32 addresses, otherwise it will display hex addresses.|

|Event|Description|
|-----|-----------|
|state|This will give the current redux state, any time the state is updated. What does this mean, the state will tell you if its connected or not, and if it is connected then it will tell you useful information like the wallet addresses.|

```javascript
  <cardano-connect-wallet-button 
    noWalletMessage = "Please install a d-app wallet."
    bech32 = "true"
  />
```
### CardanoStakeButton
This component is a button that allows you to stake with any stakepool it is set up with. It inherits all properties of [https://www.npmjs.com/package/@material/mwc-button], so please follow that for styling. It accepts both hex and bech32 stakepool id as an input. If the user is using a testnet wallet, and you give it a mainnet id, then the user will not have anything happen due to the mismatch of environments. 
|Variable|Description|
|--------|-----------|
|stakepoolId|The hex or bech32 stakepool id you want the user to stake with.|
```javascript
<cardano-stake-button 
initializeOnLoad="false"
stakepoolId="" />
```

### CardanoSendButton
This component is used send ada and nfts from the users wallet to another user. It can include or not include metadata.  It inherits all properties of [https://www.npmjs.com/package/@material/mwc-button], so please follow that for styling.

|Variable|Description|
|--------|-----------|
|recipients|This is an array of recipients |
|metadata|This is any metadata that the user wants to include with the transaction.|
|metadataLabel|This is a number, which is metadata label for the attached metadata.|

```javascript
<cardano-send-button
    recipients=[
        {
            address: "",
            amount: 5,
            assets: [
                {
                    "unit": "",
                    "quantity": "1"
                },
            ]
        },
        {
            address: "",
            amount: 47
        },
        {
            address: "",
            amount: 22
        }
    ]
    metadata={'Test' : 'Test Message'}
    metadataLabel="721"
    initializeOnLoad="false"
/>
```
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
