/** This is an abstract class used to get state information from the cardano blockchain. If you want to make a plugin, please install this package. */
export abstract class abstractOnchainData{
    /**
     * This function gets information about a stake address.
     *
     * @param rewardAddress - A BECH32 cardano address (stake...) representing the reward address we want ot use.
     *
     * @returns Promise<active : boolean; rewards : string; stakepoolId : string>
     * active - Wether the stakeAddress is currently staking somewhere or not.
     * rewards - The Sum of available rewards that haven't been withdrawn yet for the account in lovelace's.
     * stakepoolId - The bech32 stakepoolId.
     */
    abstract getDelegation(stakeAddress: string) : Promise<{active : boolean;rewards : string; stakepoolId : string }>
    /**
     * This function converts a stakepoolId in hex or BECH32 and converts it to BECH32.
     *
     * @param stakepoolId - A BECH32 or HEX stakepool Id.
     *
     * @returns Promise<string>
     * active - Returns the HEX version of the stakepool Id.
     */
    abstract getStakepoolHex(stakepoolId: string) : Promise<string>
    /**
     * This gets information about the current tip of the cardano blockchain.
     *
     * @returns Promise<{epoch : number, slot : number}>
     * epoch - The current epoch.
     * slot - The current slot number.
     */
    abstract getLatestBlock() : Promise<{epoch : number, slot : number}>
     /**
     * This function gets information about the cardano parameters for a given epoch.
     *
     * @param epoch - A number representing the epoch in question.
     *
     * @returns Promise<{minFeeA : number, minFeeB : number, poolDeposit : string, keyDeposit : string, maxTxSize : number}>
     * minFeeA
     * minFeeB
     * poolDeposit
     * keyDeposit
     * maxTxSize
     */
    abstract getParameters(epcoh : number) : Promise<{minFeeA : number, minFeeB : number, poolDeposit : string, keyDeposit : string, maxTxSize : number}>
}