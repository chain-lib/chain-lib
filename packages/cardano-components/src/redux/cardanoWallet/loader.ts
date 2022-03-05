import CardanoSerializationLibrary from '@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js';

class Loader {
    _wasm : typeof CardanoSerializationLibrary | undefined
    constructor(){
    }
    async load() {
      if (this._wasm) return;
      this._wasm = await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js')
    }
  
    get Cardano() {
      return this._wasm;
    }
}

export default new Loader();