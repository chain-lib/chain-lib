
export default class Blockfrost {

    private Axios : any;
    private Cardano : any;
    private BlockfrostApiKey : any;

    constructor(Axios : any, Cardano : any, BlockfrostApiKey : any){
        this.Axios = Axios;
        this.Cardano = Cardano;
        this.BlockfrostApiKey = BlockfrostApiKey;
    }

    blockfrostRequest = async(endpoint : string, method? : string, ipfs? : boolean) : Promise<any> => {

        if(!method){
            method = 'get';
        }
        const networkEndpoint = ipfs ? 'https://ipfs.blockfrost.io/api/v0' :
        await this.Cardano.getNetworkId() == 0 ? 'https://Cardano-testnet.blockfrost.io/api/v0' : 'https://Cardano-mainnet.blockfrost.io/api/v0';

        const address = `${networkEndpoint}${endpoint}`;
       
        const options = {
            url: address,
            method: method,
            headers: {'Content-Type': 'application/json', 'project_id': this.BlockfrostApiKey},
            validateStatus : false
        }

        const response = await this.Axios(options).
        catch((e : any)=>Promise.reject(e))

        // Note this doesnt ever throw errors, you must handle error situations in your code

        return response;
    }
}
