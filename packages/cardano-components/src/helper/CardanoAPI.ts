import Commands from "./Commands";
import SelectCoin from "./SelectCoin";
import Blockfrost from "./Blockfrost";
import Send from "./Send";

type CardanoAPIOption = (f: CardanoAPI) => void;

declare let window : any;

export default class CardanoAPI{
    public Commands : any;

    public Send : any;

    private SelectCoin : any;

    private Blockfrost : any;

    private Cardano : any;

    private Buffer : any;

    private Wasm : any;

    private Axios : any;

    private BlockfrostId : any;

    private static Instance : any;

    public static Wallet = {
      nami : window.cardano,
    }

    public static AddressReturnType = {
      hex : "hex",
      bech32 : "bech32",
      hexString : "hexString",
      bech32String : "bech32String"
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

        this.Commands = new Commands(this.Cardano,this.Buffer,this.Wasm,CardanoAPI.AddressReturnType);
        this.Blockfrost = new Blockfrost(this.Axios,this.Cardano,this.BlockfrostId);
        this.SelectCoin = new SelectCoin(this.Wasm);
        this.Send = new Send(this.Commands, this.Blockfrost, this.Wasm, this.Buffer, this.SelectCoin );
        // help this is not loading correctly, commadns
      }

      public static WalletId(walletId : any) : CardanoAPIOption {
        //TODO : Upgrade this to allow an array of walletId or if ignored then incldue all wallet ids
        return (f: CardanoAPI): void => {
          f.Cardano = walletId;
        }
      }

      public static BlockfrostId(BlockfrostId : string) : CardanoAPIOption {
        return (f: CardanoAPI): void => {
          f.BlockfrostId = BlockfrostId;
        }
      }

      public static async CardanoSerializationLibrary(serialization : any) : Promise<CardanoAPIOption> {
        const Buffer = (await import("Buffer")).Buffer;
        const Axios = (await import("Axios")).default;
        return (f: CardanoAPI): void => {
          f.Buffer = Buffer;
          f.Axios = Axios;
          f.Wasm = serialization;
        }
      }
}





