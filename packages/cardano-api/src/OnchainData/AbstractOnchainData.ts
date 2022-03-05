export abstract class abstractOnchainData{
    abstract getDelegation(rewardAddress: string) : Promise<{active : boolean;rewards : string; stakepoolId : string }>
    abstract getStakepoolHex(stakepoolId: string) : Promise<string>
    abstract getLatestBlock() : Promise<{epoch : number, slot : number}>
    abstract getParameters(epcoh : number) : Promise<{minFeeA : number, minFeeB : number, poolDeposit : string, keyDeposit : string, maxTxSize  : number}>
}