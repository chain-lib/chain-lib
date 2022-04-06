import { abstractOnchainData } from "./AbstractOnchainData";
import { CardanoAPI } from "../CardanoAPI";
import axios from 'axios';

type BlockfrostConfig = {
    mainnet? : string,
    testnet? : string
}

/**
 * This function takes a config file and returns an extension of the abstractOnchainData class
 *
 * @param config - {mainnet? : string, testnet? : string}
 * This requires either a mainnet or a testnet (or both) config file. It is not safe to store api keys not encrypted in the front end. 
 * Please do your due diligence and do not store secretes insecurely.
 * 
 * @example
 * ```typescript
 * Blockfrost({
 *  mainnet : "key",
 *  testnet : "key"
 * })
 * ```
 *
 * @returns abstractOnchainData class
 *
*/
export const Blockfrost = (config : BlockfrostConfig) : abstractOnchainData => {
    if(!config){
        throw new Error('You must have a config file with either mainnet or testnet for this to work');
    } 
    if(config.mainnet || config.testnet ){
        return new blockfrost(config)
    }

    throw new Error('Your blockfrost config must include mainnet or testnet.')
}

/**
 * This is an abstractOnchainData class, utilizing blockfrost to get its onchain data.
 * @remarks
 *
 *
 * @example
 * ```typescript
 *    blockfrost({mainnet : "key", testnet : "key"})
 * ```
 */
class blockfrost implements abstractOnchainData{
    mainnet : BlockFrostAPI | undefined
    testnet : BlockFrostAPI | undefined
    constructor(config : BlockfrostConfig){
        if(config.mainnet){
            this.mainnet = new BlockFrostAPI(
                config.mainnet, 'cardano-mainnet'
            )
        }
        if(config.testnet){
            this.testnet = new BlockFrostAPI(config.testnet, 'cardano-testnet')
        }
        
    }
    async getDelegation(stakeAddress: string): Promise<{ active: boolean; rewards: string; stakepoolId: string; }> {
        const api = await this.getCorrectBlockfrostAPI()
        const stake = await api.accounts(stakeAddress)
        if(!stake) throw new Error('Blockfrost data retreived is incorrect');
        return {
            active: stake.active,
            rewards: stake.withdrawable_amount,
            stakepoolId: String(stake.pool_id),
        };
    }
    async getLatestBlock(): Promise<{ epoch: number; slot: number; }> {
        const api = await this.getCorrectBlockfrostAPI()
        const latestBlock = await api.blocksLatest()
        const epoch = Number(latestBlock.epoch)
        const slot = Number(latestBlock.slot)
        if(epoch && slot){
            return { epoch : epoch, slot : slot}
        }
        throw new Error('Latest block returned an error.')
    }
    async getParameters(epoch : number): Promise<{ minFeeA: number; minFeeB: number; poolDeposit : string; keyDeposit : string; maxTxSize : number}> {
        const api = await this.getCorrectBlockfrostAPI()
        const parameters = await api.epochsParameters(epoch)
        const minFeeA = parameters.min_fee_a
        const minFeeB = parameters.min_fee_b
        const poolDeposit = parameters.pool_deposit
        const keyDeposit = parameters.key_deposit
        const maxTxSize = parameters.max_tx_size
        return { minFeeA, minFeeB, poolDeposit, keyDeposit, maxTxSize}

    }
    async getStakepoolHex(stakepoolId: string): Promise<string> {
        const api = await this.getCorrectBlockfrostAPI();
        const pool = await api.poolsById(stakepoolId)
        return pool.hex;
    }

    private async getCorrectBlockfrostAPI(): Promise<BlockFrostAPI> {
        const networkId = await CardanoAPI.baseCommands.getNetworkId()
        if(networkId === 0 && this.testnet){
            return this.testnet
        }
        if(networkId === 1 && this.mainnet){
            return this.mainnet
        }
        throw new Error('Blockfrost does not have an appropriate token for the current network.')
    }
}


export interface BlockLatest {
    time:           number;
    height:         number;
    hash:           string;
    slot:           number;
    epoch:          number;
    epoch_slot:     number;
    slot_leader:    string;
    size:           number;
    tx_count:       number;
    output:         string;
    fees:           string;
    block_vrf:      string;
    previous_block: string;
    next_block:     string;
    confirmations:  number;
}

export interface EpochParameters {
    epoch:                  number;
    min_fee_a:              number;
    min_fee_b:              number;
    max_block_size:         number;
    max_tx_size:            number;
    max_block_header_size:  number;
    key_deposit:            string;
    pool_deposit:           string;
    e_max:                  number;
    n_opt:                  number;
    a0:                     number;
    rho:                    number;
    tau:                    number;
    decentralisation_param: number;
    extra_entropy:          null;
    protocol_major_ver:     number;
    protocol_minor_ver:     number;
    min_utxo:               string;
    min_pool_cost:          string;
    nonce:                  string;
    price_mem:              number;
    price_step:             number;
    max_tx_ex_mem:          string;
    max_tx_ex_steps:        string;
    max_block_ex_mem:       string;
    max_block_ex_steps:     string;
    max_val_size:           string;
    collateral_percent:     number;
    max_collateral_inputs:  number;
    coins_per_utxo_word:    string;
}

export interface PoolsById {
    pool_id:         string;
    hex:             string;
    vrf_key:         string;
    blocks_minted:   number;
    blocks_epoch:    number;
    live_stake:      string;
    live_size:       number;
    live_saturation: number;
    live_delegators: number;
    active_stake:    string;
    active_size:     number;
    declared_pledge: string;
    live_pledge:     string;
    margin_cost:     number;
    fixed_cost:      string;
    reward_account:  string;
    owners:          string[];
    registration:    string[];
    retirement:      string[];
}

export interface StakeAccount {
    stake_address:       string;
    active:              boolean;
    active_epoch:        number;
    controlled_amount:   string;
    rewards_sum:         string;
    withdrawals_sum:     string;
    reserves_sum:        string;
    treasury_sum:        string;
    withdrawable_amount: string;
    pool_id:             string;
}

/**
 * This is an internal class that is responsible for querying the blockfrost api.
 *
 * @example
 * ```typescript
 *    BlockfrostAPI(apiKey : 'key', network : 'cardano-mainnet')
 * ```
 */
class BlockFrostAPI{
    apiKey : string
    network : string
    constructor(apiKey : string, network : string){
        this.apiKey = apiKey
        this.network = network
    }
    /**
     * This function get information about a stakepool by its HEX or BECH32 ID from the blockfrost endpoint.
     *
     * @param poolId - HEX/BECH32 stakepool id.
     *
     * @returns https://docs.blockfrost.io/#tag/Cardano-Pools/paths/~1pools~1{pool_id}/get
    */
    async poolsById(poolId : string) : Promise<PoolsById>{
        return await this.blockfrostCommand(`pools/${poolId}`, 'get')
    }
    /**
     * This gets information about the parameters in a specific epoch from blockfrost.
     *
     * @param epoch - Number representing the wanted epoch
     *
     * @returns https://docs.blockfrost.io/#tag/Cardano-Epochs/paths/~1epochs~1{number}~1parameters/get
    */
    async epochsParameters(epoch : number) : Promise<EpochParameters>{
        return await this.blockfrostCommand(`epochs/${epoch}/parameters`, 'get')
    }
    /**
     * This method gets the latest block from blockfrost and returns information about it
     *
     * @returns https://docs.blockfrost.io/#tag/Cardano-Blocks/paths/~1blocks~1latest/get
    */
    async blocksLatest() : Promise<BlockLatest>{
        return await this.blockfrostCommand(`blocks/latest`, 'get')
    }
    /**
     * This gets information about a specific cardano account, specified by a stakepool address.
     *
     * @param stakeAddress - BECH32 stakepool address string (stake...)
     *
     * @returns https://docs.blockfrost.io/#tag/Cardano-Accounts/paths/~1accounts~1{stake_address}/get
    */
    async accounts(stakeAddress : string): Promise<StakeAccount>{
        return await this.blockfrostCommand(`accounts/${stakeAddress}`, 'get')
    }

    private async blockfrostCommand(command : string, method : string){
        const url = `https://${this.network}.blockfrost.io/api/v0/${command}`
        const response = await axios.request({
            url : url,
            headers : {'Content-Type': 'application/json', 'project_id': this.apiKey},
            //@ts-ignore
            method : method,       
        }).catch((e : any)=>Promise.reject(e));

        return response.data

    }
}