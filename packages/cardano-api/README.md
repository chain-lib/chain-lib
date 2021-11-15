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
These commands follow the basic CIP[https://github.com/cardano-foundation/CIPs/pull/88] standard. All functions are promises. 

```javascript
CardanoAPI.Commands.enable: () => Promise<Boolean>;
```
If the user has one of the wallets references when constructing CardanoAPI this will ask the user to connect to the website for the first time, and retruns true. Otherwise it will throw an error. If they already have permision it will return true.

```javascript
CardanoAPI.Commands.isEnabled: () => Promise<Boolean>;
```
This returns true if the user has access to request the website, false otherwise.
```javascript
CardanoAPI.Commands.getBalance: () => Promise<Value>;
```
Value is a hex encoded cbor string.
```javascript
getUtxos: (amount?: Value | undefined, paginate?: {page: number; limit: number;} | undefined) => Promise<Array<TransactionUnspentOutput>>;
```
TransactionUnspentOutput is a hex encoded bytes string. Amount and paginate are optional parameters. They are meant to filter the utxos of the wallet.
```javascript
CardanoAPI.Commands.getCollateral: () => Promise<TransactionUnspentOutput>;
```
This will get the users smart contract collateral.
```javascript
CardanoAPI.Commands.getUnusedAddresses: (type?: string | undefined) => Promise<Array<BaseAddress>>;
CardanoAPI.Commands.getUsedAddresses: (type?: string | undefined) => Promise<Array<BaseAddress>>;
CardanoAPI.Commands.getChangeAddress: (type?: string | undefined) => Promise<BaseAddress>;
CardanoAPI.Commands.getRewardAddress: (type?: string | undefined) => Promise<RewardAddress>;
```
By default BaseAddress and RewardAddress will return by default a hex encoded bytes string. You have the option to return a bech32 (human readable) address with the type field. The accepted types are 'hex' or 'bech32'. You can also get theses types by using CardanoAPI.AddressReturnType.hex or CardanoAPI.AddressReturnType.bech32.
```javascript
CardanoAPI.Commands.getNetworkId: () => Promise<number>;
```
Returns 0 if on testnet, otherwise 1 if on mainnet.

```javascript
CardanoAPI.Commands.signData: (address: BaseAddress | RewardAddress, payload: string) => Promise<CoseSign1>;
```
Payload is a hex encoded utf8 string. CoseSign1 is a hex encoded bytes string.

If address is the BaseAddress the signature is returned with the Payment Credential, otherwise if the address is the RewardAddress the signature is returned with the Stake Credential.

The returned CoseSign1 object contains the payload, signature and the following protected headers:

key_id => PublicKey,
address => BaseAddress | RewardAddress
algorithm_id => EdDSA(0) (the algorithm used for Cardano addresses).
```javascript
CardanoAPI.Commands.signTx: (tx: Transaction, partialSign?: boolean | undefined) => Promise<TransactionWitnessSet>;
```
Transaction is a hex encoded cbor string. TransactionWitnessSet is a hex encoded cbor string.

partialSign is by default false and optional. The wallet needs to provide all required signatures. If it can't an error is thrown, otherwise the TransactionWitnessSet is returned.

If partialSign is true, the wallet doesn't need to provide all required signatures.
```javascript
CardanoAPI.Commands.submitTx: (tx: Transaction) => Promise<hash32>;
```
Returns the transaction hash, if transaction was submitted successfully, otherwise throws an error.

### API.Send
```javascript
CardanoAPI.Send.send: ({ address, amount, assets, metadata, metadataLabel }: Send) => Promise<string>;
```
This allows you to send items from the users address to another address. Some examples are below. Adderess is a human readable bech32 address. Amount is a number which is in ADA. The value is not in lovelace, the value is in **ADA**. Metadatalabel is a number, with a default to 721. 
```javascript
await CardanoAPI.Send.send({
        address: "addr1qyzu9rqav3su8duqwz8eadj60 5ldx3qcpfm0e4epc3rffmw09arg9qq Hqd7hlrg64xp5uwmqry3h24np7xqfcXy09gtqh228zy",
        amount: 40
      })
    

await CardanoAPI.Send.send({
    address: "addr1qyzu9rqav3su8duqwz8eadj60 5ldx3qcpfm0e4epc3rffmw09arg9qq Hqd7hlrg64xp5uwmqry3h24np7xqfcXy09gtqh228zy",
    amount: 20,
    assets: [
        {
            "unit": "5230d16116431597796d250dcd7acf1e3afb717bf66c8108abdc83df.KnittieAstro031",
            "quantity": "1"
        }
    ],
    metadata: {
        "RandomData": "My random metadata"
    }
})
```
```javascript
CardanoAPI.Send.sendMultiple: ({ recipients, metadata, metadataLabel }: SendMultiple) => Promise<string>;
```
You can also send to multiple users with one command. See an example below.
```javascript
await CardanoAPI.Send.sendMultiple({
    recipients: [
        {
            address: "",
            amount: 5,
            assets: [
                {
                    "unit": "",
                    "quantity": "1"
                }
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
    ],
})
```
```javascript
CardanoAPI.Send.delegate: ({ stakepoolId, metadata, metadataLabel }: Delegate) => Promise<string>;
```
This allows you to let the user stake with any stakepool. Currently due to some errors not related to this API, there is a chance this never resolves if the user cancels the transaction. Otherwise it will return the transaction hash. You can ignore the metadata and metadataLabel tag. StakepooId can either be the hex32 or bech stakepool address.
