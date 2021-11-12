import { TransactionOutputs, TransactionUnspentOutput, Value } from '@emurgo/cardano-serialization-lib-browser'

type AmountList = Value[];
type UTxOList = TransactionUnspentOutput[];
type OutputList = any; // todo : this is wrong, There should be a different output type

type UtxOSelection = {
  selection : UTxOList,
  remaining : UTxOList,
  subset : UTxOList,
  amount : Value,
};

type ImproveRange = {
  ideal : Value,
  maximum : Value
};

type SelectionResult = {
  input : UTxOList,
  output : OutputList,
  remaining : UTxOList,
  amount : Value,
  change : Value,
};

type ProtocolParameters = {
  minUtxO : number,
  minFeeA : number,
  minFeeB : number,
  maxTxSize : number
};

export default class SelectCoin{
    Wasm : any;
    private ProtocolParameters : ProtocolParameters | undefined;

    constructor(Wasm : any){
        this.Wasm = Wasm;
    }

    abs = (big : bigint) => {
      return big < 0 ? big * BigInt(-1) : big;
    }
    
    isQtyFulfilled = (outputAmount: Value, cumulatedAmount: Value, minUTxOValue: number, nbFreeUTxO: number) : Boolean => {
      let amount : Value = outputAmount;
    
      if (minUTxOValue && BigInt(outputAmount.coin().to_str()) > 0) {
        const minAmount : Value = this.Wasm.Value.new(this.Wasm.min_ada_required(cumulatedAmount, this.Wasm.BigNum.from_str(minUTxOValue.toString())));
        
        // Lovelace min amount to cover assets and number of output need to be met
        const cumulatedAmountCompare = cumulatedAmount.compare(minAmount)
        if (cumulatedAmountCompare ? cumulatedAmountCompare < 0 : false) return false;
    
        // If requested Lovelace lower than minAmount, plan for change
        const outputAmountCompare = outputAmount.compare(minAmount)
        if (outputAmountCompare ? outputAmountCompare < 0 : false) {
          if(this.ProtocolParameters){
            amount = minAmount.checked_add(this.Wasm.Value.new(this.Wasm.BigNum.from_str(this.ProtocolParameters.minUtxO.toString())));
          }
        }
    
        // Try covering the max fees
        if (nbFreeUTxO > 0 && this.ProtocolParameters) {
          let maxFee : any = BigInt(this.ProtocolParameters.minFeeA) * BigInt(this.ProtocolParameters.maxTxSize) + BigInt(this.ProtocolParameters.minFeeB);
    
          maxFee = this.Wasm.Value.new(this.Wasm.BigNum.from_str(maxFee.toString()));
    
          amount = amount.checked_add(maxFee);
        }
      }
      const compareCumulatedAmount = cumulatedAmount.compare(amount)
      return compareCumulatedAmount ? compareCumulatedAmount >= 0 : false;
    }
      addAmounts = (amounts : Value, compiledAmounts : Value) : Value => {
        return compiledAmounts.checked_add(amounts);
      }
    
      getAmountValue = (amount : any) : bigint => {
        let val = BigInt(0);
        const lovelace = BigInt(amount.coin().to_str());
      
        if (lovelace > 0) {
          val = lovelace;
        } else if (amount.multiasset() && amount.multiasset().len() > 0) {
          const scriptHash = amount.multiasset().keys().get(0);
          const assetName = amount.multiasset().get(scriptHash).keys().get(0);
          val = BigInt(amount.multiasset().get(scriptHash).get(assetName).to_str());
        }
      
        return val;
      }
    
      randomSelect = (utxoSelection : UtxOSelection, outputAmount : Value, limit : number, minUTxOValue : number) : UtxOSelection => {
        const nbFreeUTxO = utxoSelection.subset.length;
        // If quantity is met, return subset into remaining list and exit
        if (
          this.isQtyFulfilled(outputAmount, utxoSelection.amount, minUTxOValue, nbFreeUTxO)
        ) {
          // eslint-disable-next-line no-param-reassign
          utxoSelection.remaining = [
            ...utxoSelection.remaining,
            ...utxoSelection.subset,
          ];
          // eslint-disable-next-line no-param-reassign
          utxoSelection.subset = [];
          return utxoSelection;
        }
      
        if (limit <= 0) {
          throw new Error('INPUT_LIMIT_EXCEEDED');
        }
      
        if (nbFreeUTxO <= 0) {
          if (this.isQtyFulfilled(outputAmount, utxoSelection.amount, 0, 0)) {
            throw new Error('MIN_UTXO_ERROR');
          }
          throw new Error('INPUTS_EXHAUSTED');
        }
      
        const utxo : TransactionUnspentOutput | undefined = utxoSelection.subset
          .splice(Math.floor(Math.random() * nbFreeUTxO), 1)
          .pop();
      
        if(utxo){
          utxoSelection.selection.push(utxo);
          // eslint-disable-next-line no-param-reassign
          utxoSelection.amount = this.addAmounts(
            utxo.output().amount(),
            utxoSelection.amount
          );
        }
      
        // todo : do something if undefined
      
        return this.randomSelect(utxoSelection, outputAmount, limit - 1, minUTxOValue);
      }
    
      sortAmountList = (amountList : AmountList, sortOrder : string = 'ASC') : AmountList => {
        return amountList.sort((a, b) => {
          const sortInt = sortOrder === 'DESC' ? BigInt(-1) : BigInt(1);
          return Number((this.getAmountValue(a) - this.getAmountValue(b)) * sortInt);
        });
      }
    
      descSelect = (utxoSelection : UtxOSelection, outputAmount : Value, limit : number, minUTxOValue : number):UtxOSelection=>{
        // eslint-disable-next-line no-param-reassign
        utxoSelection.subset = utxoSelection.subset.sort(
          (utxoA, utxoB) => utxoB.output().amount().compare(utxoA.output().amount()) || 0
        ) || undefined;
    
      do{
          if (limit <= 0) {
            throw new Error('INPUT_LIMIT_EXCEEDED');
          }
      
          if (utxoSelection.subset.length <= 0) {
            if (this.isQtyFulfilled(outputAmount, utxoSelection.amount, 0, 0)) {
              throw new Error('MIN_UTXO_ERROR');
            }
            throw new Error('INPUTS_EXHAUSTED');
          }
      
          const utxo : TransactionUnspentOutput = utxoSelection.subset.splice(0, 1).pop() as TransactionUnspentOutput;
      
          utxoSelection.selection.push(utxo);
          // eslint-disable-next-line no-param-reassign
          utxoSelection.amount = this.addAmounts(
            utxo.output().amount(),
            utxoSelection.amount
          );
          // eslint-disable-next-line no-param-reassign
          limit -=1;
        } while (
          !this.isQtyFulfilled(
            outputAmount,
            utxoSelection.amount,
            minUTxOValue,
            utxoSelection.subset.length - 1
          )
        );
      
        // Quantity is met, return subset into remaining list and return selection
        // eslint-disable-next-line no-param-reassign
        utxoSelection.remaining = [
          ...utxoSelection.remaining,
          ...utxoSelection.subset,
        ];
        // eslint-disable-next-line no-param-reassign
        utxoSelection.subset = [];
      
        return utxoSelection;
      }
      
      improve = (utxoSelection : UtxOSelection, outputAmount : Value, limit : number, range : ImproveRange) : void => {
        const nbFreeUTxO = utxoSelection.subset.length;
        const utxoCompareSelection = utxoSelection.amount.compare(range.ideal);
      
        if (
          utxoCompareSelection ? utxoCompareSelection >= 0 : false ||
          nbFreeUTxO <= 0 ||
          limit <= 0
        ) {
          // Return subset in remaining
          // eslint-disable-next-line no-param-reassign
          utxoSelection.remaining = [
            ...utxoSelection.remaining,
            ...utxoSelection.subset,
          ];
          // eslint-disable-next-line no-param-reassign
          utxoSelection.subset = [];
      
          return;
        }
    
        const utxo : TransactionUnspentOutput | undefined = utxoSelection.subset
          .splice(Math.floor(Math.random() * nbFreeUTxO), 1)
          .pop();
    
        if(!utxo){
          throw new Error('UTXO_UNDEFINED');
        }
        
        const newAmount = this.Wasm.Value.new(this.Wasm.BigNum.from_str('0'))
          .checked_add(utxo ? utxo.output().amount() : new Value())
          .checked_add(outputAmount);
      
        if(!newAmount){
          throw new Error('NEW_AMOUNT_UNDEFINED');
        }
        const newAmountCompare = newAmount.compare(range.maximum);
        if (
          this.abs(this.getAmountValue(range.ideal) - this.getAmountValue(newAmount)) <
            this.abs(this.getAmountValue(range.ideal) - this.getAmountValue(outputAmount)) &&
          newAmountCompare ? newAmountCompare <= 0 : false
        ) {
          utxoSelection.selection.push(utxo);
          // eslint-disable-next-line no-param-reassign
          utxoSelection.amount = this.addAmounts(
            utxo.output().amount(),
            utxoSelection.amount
          );
          // eslint-disable-next-line no-param-reassign
          limit -= 1;
        } else {
          utxoSelection.remaining.push(utxo);
        }
      
        // eslint-disable-next-line consistent-return
        return this.improve(utxoSelection, outputAmount, limit, range);
      }
      
      mergeOutputsAmounts = (outputs : TransactionOutputs ) : Value => {
        let compiledAmountList = this.Wasm.Value.new(this.Wasm.BigNum.from_str('0'));
      
        for (let i = 0; i < outputs.len(); i+=1) {
          compiledAmountList = this.addAmounts(
            outputs.get(i).amount(),
            compiledAmountList
          );
        }
      
        return compiledAmountList;
      }
      
      splitAmounts = (amounts : Value) : AmountList => {
        let splitAmount = [];
        // todo : redue this its 2*O(n)
        if (amounts.multiasset()) {
          const mA = amounts.multiasset();
          if(!mA) throw new Error('MA_UNDEFINED');
          if(mA !== undefined){
            for (let i = 0; i < mA.keys().len(); i+=1) {
              const scriptHash = mA.keys().get(i);
              const maGetScriptHash = mA.get(scriptHash);
              if(!mA) throw new Error('MA_GET_SCRIPT_HASH_UNDEFINED');
              if(maGetScriptHash !== undefined){
                for (let j = 0; j < maGetScriptHash.keys().len(); j+=1) {
                  const _assets = this.Wasm.Assets.new();
                  const assetName = maGetScriptHash.keys().get(j);
                  const maGetScriptHashGetAssetName = maGetScriptHash.get(assetName);
                  if(!mA) throw new Error('MA_GET_SCRIPT_HASH_GET_ASSET_NAME_UNDEFINED');
                  if(maGetScriptHashGetAssetName !== undefined){
                    _assets.insert(
                      this.Wasm.AssetName.from_bytes(assetName.to_bytes()),
                      this.Wasm.BigNum.from_bytes(
                        maGetScriptHashGetAssetName.to_bytes()
                      )
                    );
                  }
          
                  const _multiasset = this.Wasm.MultiAsset.new();
                  _multiasset.insert(
                    this.Wasm.ScriptHash.from_bytes(scriptHash.to_bytes()),
                    _assets
                  );
                  const _value = this.Wasm.Value.new(this.Wasm.BigNum.from_str('0'));
                  _value.set_multiasset(_multiasset);
          
                  splitAmount.push(_value);
                }
              }
            }
          }
        }
      
        // Order assets by qty DESC
        splitAmount = this.sortAmountList(splitAmount, 'DESC');
      
        // Insure lovelace is last to account for min ada requirement
        splitAmount.push(
            this.Wasm.Value.new(this.Wasm.BigNum.from_bytes(amounts.coin().to_bytes()))
        );
      
        return splitAmount;
      }
    
      createSubSet = (utxoSelection : UtxOSelection , output : Value) => {
        if (BigInt(output.coin().to_str()) < BigInt(1)) {
          utxoSelection.remaining.forEach((utxo, index) => {
            if (output.compare(utxo.output().amount()) !== undefined) {
              const utxoSelectionRemaining = utxoSelection.remaining.splice(index, 1).pop();
              if(utxoSelectionRemaining){
                utxoSelection.subset.push(
                  utxoSelectionRemaining
                );
              }
            }
          });
        } else {
          // eslint-disable-next-line no-param-reassign
          utxoSelection.subset = utxoSelection.remaining.splice(
            0,
            utxoSelection.remaining.length
          );
        }
      }
      
          cloneUTxOList = (utxoList : UTxOList) : UTxOList =>
          utxoList.map((utxo : TransactionUnspentOutput) =>
            {
              return this.Wasm.TransactionUnspentOutput.from_bytes(utxo.to_bytes())
            }
            
          );
    
      cloneValue = (value : Value) : Value => this.Wasm.Value.from_bytes(value.to_bytes());
      
      cloneUTxOSelection = (utxoSelection : UtxOSelection) : UtxOSelection => {
        return {
          selection: this.cloneUTxOList(utxoSelection.selection),
          remaining: this.cloneUTxOList(utxoSelection.remaining),
          subset: this.cloneUTxOList(utxoSelection.subset),
          amount: this.cloneValue(utxoSelection.amount),
        };
      }


    setProtocolParameters = (minUTxO : string, minFeeA : string, minFeeB : string, maxTxSize : string) => {
      this.ProtocolParameters = {
        minUtxO: parseInt(minUTxO,10),
        minFeeA: parseInt(minFeeA,10),
        minFeeB: parseInt(minFeeB,10),
        maxTxSize: parseInt(maxTxSize,10),
      };
    }

    randomImprove = (inputs : UTxOList, outputs : TransactionOutputs, limit : number) : SelectionResult => {
      if (!this.ProtocolParameters){
        throw new Error(
          'Protocol parameters not set. Use setProtocolParameters().'
        );
      }
  
      const _minUTxOValue : any = BigInt(outputs.len()) * BigInt(this.ProtocolParameters.minUtxO);
  
      let utxoSelection : UtxOSelection = {
        selection: [],
        remaining: [...inputs], // Shallow copy
        subset: [],
        amount: this.Wasm.Value.new(this.Wasm.BigNum.from_str('0')),
      };
  
      const mergedOutputsAmounts = this.mergeOutputsAmounts(outputs);
  
      // Explode amount in an array of unique asset amount for comparison's sake
      let splitOutputsAmounts = this.splitAmounts(mergedOutputsAmounts);
  
      // Phase 1: RandomSelect
      splitOutputsAmounts.forEach((output) => {

        this.createSubSet(utxoSelection, output); // Narrow down for NatToken UTxO
  
        try {
          utxoSelection = this.randomSelect(
            this.cloneUTxOSelection(utxoSelection), // Deep copy in case of fallback needed
            output,
            limit - utxoSelection.selection.length,
            _minUTxOValue
          );
        } catch (e : any) {
          if (e.message === 'INPUT_LIMIT_EXCEEDED') {
            // Limit reached : Fallback on DescOrdAlgo
            utxoSelection = this.descSelect(
              utxoSelection,
              output,
              limit - utxoSelection.selection.length,
              _minUTxOValue
            );
          } else {
            throw e;
          }
        }
      });
  
      // Phase 2: Improve
      splitOutputsAmounts = this.sortAmountList(splitOutputsAmounts);
  
      splitOutputsAmounts.forEach((output) => {
        this.createSubSet(utxoSelection, output); // Narrow down for NatToken UTxO
        
        const ideal : Value = this.Wasm.Value.new(this.Wasm.BigNum.from_str('0')).checked_add(output).checked_add(output);
        const maximum : Value = this.Wasm.Value.new(this.Wasm.BigNum.from_str('0')).checked_add(ideal).checked_add(output);
        const range : ImproveRange = {ideal, maximum};

        this.improve(
          utxoSelection,
          output,
          limit - utxoSelection.selection.length,
          range
        );
      });
  
      return {
        input: utxoSelection.selection,
        output: outputs,
        remaining: utxoSelection.remaining,
        amount: utxoSelection.amount,
        change: utxoSelection.amount.checked_sub(mergedOutputsAmounts),
      };
    }
}