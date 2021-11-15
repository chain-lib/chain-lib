# @chain-lib/cardano-components

This is a repository full of reusable web components for working with the cardano blockchain. 

What is a web-components? It is a way to write code that can be used with any framework, that means you can use it with React, Angular, Vue, base html and any other framework you might use. 

## How to use

### Base HTML
```html
<script type="module">
    import { CardanoConnectWallet } from "@chain-lib/cardano-components";
</script>
<cardano-connect-wallet />
```

### React

Wrappers for react are provided for all components instead of CardanoConnectWallet you can import ReactCardanoConnectWallet.
```javascript
import { ReactCardanoConnectWallet } from "@chain-lib/cardano-components";
const Component = (props) => {
    return <ReactCardanoConnectWallet />
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
    import { CardanoConnectWallet } from "@chain-lib/cardano-components';
    ```
3. Use the components in your template

    `demo.compoennt.html`
    ```html
    <cardano-connect-wallet />
    ```

### Vue

1. Add to your vue.config.js file the following.

```
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
<cardano-connect-wallet />
</template>
<script>
import { CardanoConnectWallet } from "@chain-lib/cardano-components";
</script>
```

## Elements