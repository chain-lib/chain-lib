# Cardano API
This is the Cardano API package inside the chain-lib monorepo. 

## Installation
To install run:
### yarn
```bash
yarn install @chain-lib/cardano-api
```
### npm
```bash
npm install @chain-lib/cardano-api
```
## Usage
Right now you can only initalize the package once, and then you can use your initial settings anywhere in your code. Below is an example using nami wallet api.
```
import { CardanoAPI } from @chain-lib/cardano-api

const API = new CardanoAPI(
    CardanoAPI.WalletId(CardanoAPI.Wallet.nami),
    CardanoAPI.BlockfrostAPIKey({
        mainnet: #mainnet api key,
        testnet: #testnet api key,
        ipfs: #currently unused key
    }),
    await CardanoAPI.CardanoSerializationLibrary(
        await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js'))
    );
```
You must have three imports for this command to work. 

CardanoAPI.WalletId() accepts as an input the window key for the wallet you want to use. Right now only avaliable one for cardano is nami. There are some predefined inputs, specifically nami is CardanoAPI.Wallet.nami. You could also import window.cardano and this will do the same thing. Eventually this will be refactored to accept a list or a single input. For now it only accepts a single input.

CardanoAPI.BlockfrostAPIKey accepts an object containing your api keys. Please import this as an enviromental variable. Putting your api key as code is insecure and unsafe. The object it accepts is defined above. You do not need every key. If you try to use a command on the testnet it must contain a testnet id, and vice versa for mainnet.

CardanoAPI.CardanoSerializationLibrary must have the await statement before it. This accepts one of emurgos serialization libraries as an input. You can find them attached [here](https://www.npmjs.com/package/@emurgo/cardano-serialization-lib-browser). You can accept any of these as your input, just make sure you use the right ones for your use case.

## Development
Due to how the serization libraries work, you currently need to compile your code to esnext, and you need a few special rules. Specifically you need topLevelAwait by default. If you use emurgos WASM library you need asyncWebAssembly. Their libraries only seem to work well natively and with webpack. There are some issues with rollup, if you are using any of their packages that use WASM.

## Usage
These commands are organized as follows. Remember API is the initalized object from earlier.
### API.Commands
```

```
### API.Send
```

```
