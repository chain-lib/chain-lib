import { Commands } from './Commands';
import { SelectCoin } from './SelectCoin';
import { Blockfrost } from './Blockfrost';
import { Spend } from './Send';
export {CardanoAPI};

type CardanoAPIOption = (f: CardanoAPI) => void;

declare let window : any;

class CardanoAPI{
    public Commands : any;

    public Send : any;

    private SelectCoin : any;

    private Blockfrost : any;

    private Cardano : any;

    private Buffer : any;

    private Wasm : any;

    private Axios : any;

    private BlockfrostAPIKey : any;

    private static Instance : any;

    public static Wallet = {
      nami : window.cardano,
    }

    public static AddressReturnType = {
      hex : 'hex',
      bech32 : 'bech32',
      hexString : 'hexString',
      bech32String : 'bech32String'
    }

    constructor(...options: Array<CardanoAPIOption>) {
        if (CardanoAPI.Instance) {
          return CardanoAPI.Instance;
        }
        CardanoAPI.Instance = this;
        if(options){
          for (const option of options) {
            option(this);
          }
        }

        this.Commands = new Commands(this.Cardano,this.Buffer,this.Wasm);
        this.Blockfrost = new Blockfrost(this.Axios,this.Cardano,this.BlockfrostAPIKey);
        this.SelectCoin = new SelectCoin(this.Wasm);
        this.Send = new Spend(this.Commands, this.Blockfrost, this.Wasm, this.Buffer, this.SelectCoin );
      }

      public static WalletId(walletId : any) : CardanoAPIOption {
        //TODO : Upgrade this to allow an array of walletId or if ignored then incldue all wallet ids
        return (f: CardanoAPI): void => {
          f.Cardano = walletId;
        };
      }

      public static BlockfrostAPIKey(BlockfrostAPIKey : string) : CardanoAPIOption {
        return (f: CardanoAPI): void => {
          f.BlockfrostAPIKey = BlockfrostAPIKey;
        };
      }

      public static async CardanoSerializationLibrary(serialization : any) : Promise<CardanoAPIOption> {
        const Buffer = (await import('Buffer')).Buffer;
        const Axios = (await import('Axios')).default;
        return (f: CardanoAPI): void => {
          f.Buffer = Buffer;
          f.Axios = Axios;
          f.Wasm = serialization;
        };
      }
}
