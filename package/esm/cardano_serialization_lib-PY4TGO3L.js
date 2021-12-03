import {
  __require,
  __toBinary
} from "./chunk-QWVXNI2C.js";

// node_modules/@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib_bg.js
var heap = new Array(32).fill(void 0);
heap.push(void 0, null, true, false);
function getObject(idx) {
  return heap[idx];
}
var heap_next = heap.length;
function dropObject(idx) {
  if (idx < 36)
    return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
var cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
var cachegetUint8Memory0 = null;
function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== (void 0).buffer) {
    cachegetUint8Memory0 = new Uint8Array((void 0).buffer);
  }
  return cachegetUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
function addHeapObject(obj) {
  if (heap_next === heap.length)
    heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
var WASM_VECTOR_LEN = 0;
var cachedTextEncoder = new TextEncoder("utf-8");
var encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function(arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length);
    getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len);
  const mem = getUint8Memory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127)
      break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
var cachegetInt32Memory0 = null;
function getInt32Memory0() {
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== (void 0).buffer) {
    cachegetInt32Memory0 = new Int32Array((void 0).buffer);
  }
  return cachegetInt32Memory0;
}
function debugString(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return `${val}`;
  }
  if (type == "string") {
    return `"${val}"`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return `Symbol(${description})`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return `Function(${name})`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return `${val.name}: ${val.message}
${val.stack}`;
  }
  return className;
}
function getArrayU8FromWasm0(ptr, len) {
  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1);
  getUint8Memory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(`expected instance of ${klass.name}`);
  }
  return instance.ptr;
}
var cachegetUint32Memory0 = null;
function getUint32Memory0() {
  if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== (void 0).buffer) {
    cachegetUint32Memory0 = new Uint32Array((void 0).buffer);
  }
  return cachegetUint32Memory0;
}
function getArrayU32FromWasm0(ptr, len) {
  return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
function passArray32ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 4);
  getUint32Memory0().set(arg, ptr / 4);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function encode_arbitrary_bytes_as_metadatum2(bytes) {
  var ptr0 = passArray8ToWasm0(bytes, void 0);
  var len0 = WASM_VECTOR_LEN;
  var ret = (void 0)(ptr0, len0);
  return TransactionMetadatum.__wrap(ret);
}
function decode_arbitrary_bytes_from_metadatum2(metadata) {
  try {
    const retptr = (void 0)(-16);
    _assertClass(metadata, TransactionMetadatum);
    (void 0)(retptr, metadata.ptr);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU8FromWasm0(r0, r1).slice();
    (void 0)(r0, r1 * 1);
    return v0;
  } finally {
    (void 0)(16);
  }
}
function encode_json_str_to_metadatum2(json, schema) {
  var ptr0 = passStringToWasm0(json, void 0, void 0);
  var len0 = WASM_VECTOR_LEN;
  var ret = (void 0)(ptr0, len0, schema);
  return TransactionMetadatum.__wrap(ret);
}
function decode_metadatum_to_json_str2(metadatum, schema) {
  try {
    const retptr = (void 0)(-16);
    _assertClass(metadatum, TransactionMetadatum);
    (void 0)(retptr, metadatum.ptr, schema);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    (void 0)(16);
    (void 0)(r0, r1);
  }
}
function encrypt_with_password2(password, salt, nonce, data) {
  try {
    const retptr = (void 0)(-16);
    var ptr0 = passStringToWasm0(password, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(salt, void 0, void 0);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(nonce, void 0, void 0);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(data, void 0, void 0);
    var len3 = WASM_VECTOR_LEN;
    (void 0)(retptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    (void 0)(16);
    (void 0)(r0, r1);
  }
}
function decrypt_with_password2(password, data) {
  try {
    const retptr = (void 0)(-16);
    var ptr0 = passStringToWasm0(password, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(data, void 0, void 0);
    var len1 = WASM_VECTOR_LEN;
    (void 0)(retptr, ptr0, len0, ptr1, len1);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    (void 0)(16);
    (void 0)(r0, r1);
  }
}
function min_fee2(tx, linear_fee) {
  _assertClass(tx, Transaction);
  _assertClass(linear_fee, LinearFee);
  var ret = (void 0)(tx.ptr, linear_fee.ptr);
  return BigNum.__wrap(ret);
}
function make_daedalus_bootstrap_witness2(tx_body_hash, addr, key) {
  _assertClass(tx_body_hash, TransactionHash);
  _assertClass(addr, ByronAddress);
  _assertClass(key, LegacyDaedalusPrivateKey);
  var ret = (void 0)(tx_body_hash.ptr, addr.ptr, key.ptr);
  return BootstrapWitness.__wrap(ret);
}
function make_icarus_bootstrap_witness2(tx_body_hash, addr, key) {
  _assertClass(tx_body_hash, TransactionHash);
  _assertClass(addr, ByronAddress);
  _assertClass(key, Bip32PrivateKey);
  var ret = (void 0)(tx_body_hash.ptr, addr.ptr, key.ptr);
  return BootstrapWitness.__wrap(ret);
}
function make_vkey_witness2(tx_body_hash, sk) {
  _assertClass(tx_body_hash, TransactionHash);
  _assertClass(sk, PrivateKey);
  var ret = (void 0)(tx_body_hash.ptr, sk.ptr);
  return Vkeywitness.__wrap(ret);
}
function hash_auxiliary_data2(auxiliary_data) {
  _assertClass(auxiliary_data, AuxiliaryData);
  var ret = (void 0)(auxiliary_data.ptr);
  return AuxiliaryDataHash.__wrap(ret);
}
function hash_transaction2(tx_body) {
  _assertClass(tx_body, TransactionBody);
  var ret = (void 0)(tx_body.ptr);
  return TransactionHash.__wrap(ret);
}
function hash_plutus_data2(plutus_data) {
  _assertClass(plutus_data, PlutusData);
  var ret = (void 0)(plutus_data.ptr);
  return DataHash.__wrap(ret);
}
function hash_script_data2(redeemers, cost_models, datums) {
  _assertClass(redeemers, Redeemers);
  _assertClass(cost_models, Costmdls);
  let ptr0 = 0;
  if (!isLikeNone(datums)) {
    _assertClass(datums, PlutusList);
    ptr0 = datums.ptr;
    datums.ptr = 0;
  }
  var ret = (void 0)(redeemers.ptr, cost_models.ptr, ptr0);
  return ScriptDataHash.__wrap(ret);
}
function get_implicit_input2(txbody, pool_deposit, key_deposit) {
  _assertClass(txbody, TransactionBody);
  _assertClass(pool_deposit, BigNum);
  _assertClass(key_deposit, BigNum);
  var ret = (void 0)(txbody.ptr, pool_deposit.ptr, key_deposit.ptr);
  return Value.__wrap(ret);
}
function get_deposit2(txbody, pool_deposit, key_deposit) {
  _assertClass(txbody, TransactionBody);
  _assertClass(pool_deposit, BigNum);
  _assertClass(key_deposit, BigNum);
  var ret = (void 0)(txbody.ptr, pool_deposit.ptr, key_deposit.ptr);
  return BigNum.__wrap(ret);
}
function min_ada_required2(assets, minimum_utxo_val) {
  _assertClass(assets, Value);
  _assertClass(minimum_utxo_val, BigNum);
  var ret = (void 0)(assets.ptr, minimum_utxo_val.ptr);
  return BigNum.__wrap(ret);
}
var CertificateKind = Object.freeze({ StakeRegistration: 0, "0": "StakeRegistration", StakeDeregistration: 1, "1": "StakeDeregistration", StakeDelegation: 2, "2": "StakeDelegation", PoolRegistration: 3, "3": "PoolRegistration", PoolRetirement: 4, "4": "PoolRetirement", GenesisKeyDelegation: 5, "5": "GenesisKeyDelegation", MoveInstantaneousRewardsCert: 6, "6": "MoveInstantaneousRewardsCert" });
var MIRPot = Object.freeze({ Reserves: 0, "0": "Reserves", Treasury: 1, "1": "Treasury" });
var MIRKind = Object.freeze({ ToOtherPot: 0, "0": "ToOtherPot", ToStakeCredentials: 1, "1": "ToStakeCredentials" });
var RelayKind = Object.freeze({ SingleHostAddr: 0, "0": "SingleHostAddr", SingleHostName: 1, "1": "SingleHostName", MultiHostName: 2, "2": "MultiHostName" });
var NativeScriptKind = Object.freeze({ ScriptPubkey: 0, "0": "ScriptPubkey", ScriptAll: 1, "1": "ScriptAll", ScriptAny: 2, "2": "ScriptAny", ScriptNOfK: 3, "3": "ScriptNOfK", TimelockStart: 4, "4": "TimelockStart", TimelockExpiry: 5, "5": "TimelockExpiry" });
var ScriptHashNamespace = Object.freeze({ NativeScript: 0, "0": "NativeScript" });
var NetworkIdKind = Object.freeze({ Testnet: 0, "0": "Testnet", Mainnet: 1, "1": "Mainnet" });
var TransactionMetadatumKind = Object.freeze({ MetadataMap: 0, "0": "MetadataMap", MetadataList: 1, "1": "MetadataList", Int: 2, "2": "Int", Bytes: 3, "3": "Bytes", Text: 4, "4": "Text" });
var MetadataJsonSchema = Object.freeze({ NoConversions: 0, "0": "NoConversions", BasicConversions: 1, "1": "BasicConversions", DetailedSchema: 2, "2": "DetailedSchema" });
var LanguageKind = Object.freeze({ PlutusV1: 0, "0": "PlutusV1" });
var PlutusDataKind = Object.freeze({ ConstrPlutusData: 0, "0": "ConstrPlutusData", Map: 1, "1": "Map", List: 2, "2": "List", Integer: 3, "3": "Integer", Bytes: 4, "4": "Bytes" });
var RedeemerTagKind = Object.freeze({ Spend: 0, "0": "Spend", Mint: 1, "1": "Mint", Cert: 2, "2": "Cert", Reward: 3, "3": "Reward" });
var Address = class {
  static __wrap(ptr) {
    const obj = Object.create(Address.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static from_bytes(data) {
    var ptr0 = passArray8ToWasm0(data, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Address.__wrap(ret);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  to_bech32(prefix) {
    try {
      const retptr = (void 0)(-16);
      var ptr0 = isLikeNone(prefix) ? 0 : passStringToWasm0(prefix, void 0, void 0);
      var len0 = WASM_VECTOR_LEN;
      (void 0)(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bech32(bech_str) {
    var ptr0 = passStringToWasm0(bech_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Address.__wrap(ret);
  }
  network_id() {
    var ret = (void 0)(this.ptr);
    return ret;
  }
};
var AssetName = class {
  static __wrap(ptr) {
    const obj = Object.create(AssetName.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return AssetName.__wrap(ret);
  }
  static new(name) {
    var ptr0 = passArray8ToWasm0(name, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return AssetName.__wrap(ret);
  }
  name() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
};
var AssetNames = class {
  static __wrap(ptr) {
    const obj = Object.create(AssetNames.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return AssetNames.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return AssetNames.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return AssetName.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, AssetName);
    (void 0)(this.ptr, elem.ptr);
  }
};
var Assets = class {
  static __wrap(ptr) {
    const obj = Object.create(Assets.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Assets.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return Assets.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  insert(key, value) {
    _assertClass(key, AssetName);
    _assertClass(value, BigNum);
    var ret = (void 0)(this.ptr, key.ptr, value.ptr);
    return ret === 0 ? void 0 : BigNum.__wrap(ret);
  }
  get(key) {
    _assertClass(key, AssetName);
    var ret = (void 0)(this.ptr, key.ptr);
    return ret === 0 ? void 0 : BigNum.__wrap(ret);
  }
  keys() {
    var ret = (void 0)(this.ptr);
    return AssetNames.__wrap(ret);
  }
};
var AuxiliaryData = class {
  static __wrap(ptr) {
    const obj = Object.create(AuxiliaryData.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return AuxiliaryData.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return AuxiliaryData.__wrap(ret);
  }
  metadata() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : GeneralTransactionMetadata.__wrap(ret);
  }
  set_metadata(metadata) {
    _assertClass(metadata, GeneralTransactionMetadata);
    (void 0)(this.ptr, metadata.ptr);
  }
  native_scripts() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : NativeScripts.__wrap(ret);
  }
  set_native_scripts(native_scripts) {
    _assertClass(native_scripts, NativeScripts);
    (void 0)(this.ptr, native_scripts.ptr);
  }
  plutus_scripts() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : PlutusScripts.__wrap(ret);
  }
  set_plutus_scripts(plutus_scripts) {
    _assertClass(plutus_scripts, PlutusScripts);
    (void 0)(this.ptr, plutus_scripts.ptr);
  }
};
var AuxiliaryDataHash = class {
  static __wrap(ptr) {
    const obj = Object.create(AuxiliaryDataHash.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  to_bech32(prefix) {
    try {
      const retptr = (void 0)(-16);
      var ptr0 = passStringToWasm0(prefix, void 0, void 0);
      var len0 = WASM_VECTOR_LEN;
      (void 0)(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bech32(bech_str) {
    var ptr0 = passStringToWasm0(bech_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return AuxiliaryDataHash.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return AuxiliaryDataHash.__wrap(ret);
  }
};
var AuxiliaryDataSet = class {
  static __wrap(ptr) {
    const obj = Object.create(AuxiliaryDataSet.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static new() {
    var ret = (void 0)();
    return AuxiliaryDataSet.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  insert(tx_index, data) {
    _assertClass(data, AuxiliaryData);
    var ret = (void 0)(this.ptr, tx_index, data.ptr);
    return ret === 0 ? void 0 : AuxiliaryData.__wrap(ret);
  }
  get(tx_index) {
    var ret = (void 0)(this.ptr, tx_index);
    return ret === 0 ? void 0 : AuxiliaryData.__wrap(ret);
  }
  indices() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU32FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 4);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
};
var BaseAddress = class {
  static __wrap(ptr) {
    const obj = Object.create(BaseAddress.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static new(network, payment, stake) {
    _assertClass(payment, StakeCredential);
    _assertClass(stake, StakeCredential);
    var ret = (void 0)(network, payment.ptr, stake.ptr);
    return BaseAddress.__wrap(ret);
  }
  payment_cred() {
    var ret = (void 0)(this.ptr);
    return StakeCredential.__wrap(ret);
  }
  stake_cred() {
    var ret = (void 0)(this.ptr);
    return StakeCredential.__wrap(ret);
  }
  to_address() {
    var ret = (void 0)(this.ptr);
    return Address.__wrap(ret);
  }
  static from_address(addr) {
    _assertClass(addr, Address);
    var ret = (void 0)(addr.ptr);
    return ret === 0 ? void 0 : BaseAddress.__wrap(ret);
  }
};
var BigInt = class {
  static __wrap(ptr) {
    const obj = Object.create(BigInt.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return BigInt.__wrap(ret);
  }
  as_u64() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : BigNum.__wrap(ret);
  }
  static from_str(text) {
    var ptr0 = passStringToWasm0(text, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return BigInt.__wrap(ret);
  }
  to_str() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
};
var BigNum = class {
  static __wrap(ptr) {
    const obj = Object.create(BigNum.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return BigNum.__wrap(ret);
  }
  static from_str(string) {
    var ptr0 = passStringToWasm0(string, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return BigNum.__wrap(ret);
  }
  to_str() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static zero() {
    var ret = (void 0)();
    return BigNum.__wrap(ret);
  }
  checked_mul(other) {
    _assertClass(other, BigNum);
    var ret = (void 0)(this.ptr, other.ptr);
    return BigNum.__wrap(ret);
  }
  checked_add(other) {
    _assertClass(other, BigNum);
    var ret = (void 0)(this.ptr, other.ptr);
    return BigNum.__wrap(ret);
  }
  checked_sub(other) {
    _assertClass(other, BigNum);
    var ret = (void 0)(this.ptr, other.ptr);
    return BigNum.__wrap(ret);
  }
  clamped_sub(other) {
    _assertClass(other, BigNum);
    var ret = (void 0)(this.ptr, other.ptr);
    return BigNum.__wrap(ret);
  }
  compare(rhs_value) {
    _assertClass(rhs_value, BigNum);
    var ret = (void 0)(this.ptr, rhs_value.ptr);
    return ret;
  }
};
var Bip32PrivateKey = class {
  static __wrap(ptr) {
    const obj = Object.create(Bip32PrivateKey.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  derive(index) {
    var ret = (void 0)(this.ptr, index);
    return Bip32PrivateKey.__wrap(ret);
  }
  static from_128_xprv(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Bip32PrivateKey.__wrap(ret);
  }
  to_128_xprv() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static generate_ed25519_bip32() {
    var ret = (void 0)();
    return Bip32PrivateKey.__wrap(ret);
  }
  to_raw_key() {
    var ret = (void 0)(this.ptr);
    return PrivateKey.__wrap(ret);
  }
  to_public() {
    var ret = (void 0)(this.ptr);
    return Bip32PublicKey.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Bip32PrivateKey.__wrap(ret);
  }
  as_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bech32(bech32_str) {
    var ptr0 = passStringToWasm0(bech32_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Bip32PrivateKey.__wrap(ret);
  }
  to_bech32() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bip39_entropy(entropy, password) {
    var ptr0 = passArray8ToWasm0(entropy, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passArray8ToWasm0(password, void 0);
    var len1 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0, ptr1, len1);
    return Bip32PrivateKey.__wrap(ret);
  }
  chaincode() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
};
var Bip32PublicKey = class {
  static __wrap(ptr) {
    const obj = Object.create(Bip32PublicKey.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  derive(index) {
    var ret = (void 0)(this.ptr, index);
    return Bip32PublicKey.__wrap(ret);
  }
  to_raw_key() {
    var ret = (void 0)(this.ptr);
    return PublicKey.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Bip32PublicKey.__wrap(ret);
  }
  as_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bech32(bech32_str) {
    var ptr0 = passStringToWasm0(bech32_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Bip32PublicKey.__wrap(ret);
  }
  to_bech32() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  chaincode() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
};
var Block = class {
  static __wrap(ptr) {
    const obj = Object.create(Block.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Block.__wrap(ret);
  }
  header() {
    var ret = (void 0)(this.ptr);
    return Header.__wrap(ret);
  }
  transaction_bodies() {
    var ret = (void 0)(this.ptr);
    return TransactionBodies.__wrap(ret);
  }
  transaction_witness_sets() {
    var ret = (void 0)(this.ptr);
    return TransactionWitnessSets.__wrap(ret);
  }
  auxiliary_data_set() {
    var ret = (void 0)(this.ptr);
    return AuxiliaryDataSet.__wrap(ret);
  }
  invalid_transactions() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU32FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 4);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static new(header, transaction_bodies, transaction_witness_sets, auxiliary_data_set, invalid_transactions) {
    _assertClass(header, Header);
    _assertClass(transaction_bodies, TransactionBodies);
    _assertClass(transaction_witness_sets, TransactionWitnessSets);
    _assertClass(auxiliary_data_set, AuxiliaryDataSet);
    var ptr0 = passArray32ToWasm0(invalid_transactions, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(header.ptr, transaction_bodies.ptr, transaction_witness_sets.ptr, auxiliary_data_set.ptr, ptr0, len0);
    return Block.__wrap(ret);
  }
};
var BlockHash = class {
  static __wrap(ptr) {
    const obj = Object.create(BlockHash.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  to_bech32(prefix) {
    try {
      const retptr = (void 0)(-16);
      var ptr0 = passStringToWasm0(prefix, void 0, void 0);
      var len0 = WASM_VECTOR_LEN;
      (void 0)(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bech32(bech_str) {
    var ptr0 = passStringToWasm0(bech_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return BlockHash.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return BlockHash.__wrap(ret);
  }
};
var BootstrapWitness = class {
  static __wrap(ptr) {
    const obj = Object.create(BootstrapWitness.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return BootstrapWitness.__wrap(ret);
  }
  vkey() {
    var ret = (void 0)(this.ptr);
    return Vkey.__wrap(ret);
  }
  signature() {
    var ret = (void 0)(this.ptr);
    return Ed25519Signature.__wrap(ret);
  }
  chain_code() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  attributes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static new(vkey, signature, chain_code, attributes) {
    _assertClass(vkey, Vkey);
    _assertClass(signature, Ed25519Signature);
    var ptr0 = passArray8ToWasm0(chain_code, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passArray8ToWasm0(attributes, void 0);
    var len1 = WASM_VECTOR_LEN;
    var ret = (void 0)(vkey.ptr, signature.ptr, ptr0, len0, ptr1, len1);
    return BootstrapWitness.__wrap(ret);
  }
};
var BootstrapWitnesses = class {
  static __wrap(ptr) {
    const obj = Object.create(BootstrapWitnesses.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static new() {
    var ret = (void 0)();
    return BootstrapWitnesses.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return BootstrapWitness.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, BootstrapWitness);
    (void 0)(this.ptr, elem.ptr);
  }
};
var ByronAddress = class {
  static __wrap(ptr) {
    const obj = Object.create(ByronAddress.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_base58() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ByronAddress.__wrap(ret);
  }
  byron_protocol_magic() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  attributes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  network_id() {
    var ret = (void 0)(this.ptr);
    return ret;
  }
  static from_base58(s) {
    var ptr0 = passStringToWasm0(s, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ByronAddress.__wrap(ret);
  }
  static icarus_from_key(key, protocol_magic) {
    _assertClass(key, Bip32PublicKey);
    var ret = (void 0)(key.ptr, protocol_magic);
    return ByronAddress.__wrap(ret);
  }
  static is_valid(s) {
    var ptr0 = passStringToWasm0(s, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ret !== 0;
  }
  to_address() {
    var ret = (void 0)(this.ptr);
    return Address.__wrap(ret);
  }
  static from_address(addr) {
    _assertClass(addr, Address);
    var ret = (void 0)(addr.ptr);
    return ret === 0 ? void 0 : ByronAddress.__wrap(ret);
  }
};
var Certificate = class {
  static __wrap(ptr) {
    const obj = Object.create(Certificate.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Certificate.__wrap(ret);
  }
  static new_stake_registration(stake_registration) {
    _assertClass(stake_registration, StakeRegistration);
    var ret = (void 0)(stake_registration.ptr);
    return Certificate.__wrap(ret);
  }
  static new_stake_deregistration(stake_deregistration) {
    _assertClass(stake_deregistration, StakeDeregistration);
    var ret = (void 0)(stake_deregistration.ptr);
    return Certificate.__wrap(ret);
  }
  static new_stake_delegation(stake_delegation) {
    _assertClass(stake_delegation, StakeDelegation);
    var ret = (void 0)(stake_delegation.ptr);
    return Certificate.__wrap(ret);
  }
  static new_pool_registration(pool_registration) {
    _assertClass(pool_registration, PoolRegistration);
    var ret = (void 0)(pool_registration.ptr);
    return Certificate.__wrap(ret);
  }
  static new_pool_retirement(pool_retirement) {
    _assertClass(pool_retirement, PoolRetirement);
    var ret = (void 0)(pool_retirement.ptr);
    return Certificate.__wrap(ret);
  }
  static new_genesis_key_delegation(genesis_key_delegation) {
    _assertClass(genesis_key_delegation, GenesisKeyDelegation);
    var ret = (void 0)(genesis_key_delegation.ptr);
    return Certificate.__wrap(ret);
  }
  static new_move_instantaneous_rewards_cert(move_instantaneous_rewards_cert) {
    _assertClass(move_instantaneous_rewards_cert, MoveInstantaneousRewardsCert);
    var ret = (void 0)(move_instantaneous_rewards_cert.ptr);
    return Certificate.__wrap(ret);
  }
  kind() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  as_stake_registration() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : StakeRegistration.__wrap(ret);
  }
  as_stake_deregistration() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : StakeDeregistration.__wrap(ret);
  }
  as_stake_delegation() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : StakeDelegation.__wrap(ret);
  }
  as_pool_registration() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : PoolRegistration.__wrap(ret);
  }
  as_pool_retirement() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : PoolRetirement.__wrap(ret);
  }
  as_genesis_key_delegation() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : GenesisKeyDelegation.__wrap(ret);
  }
  as_move_instantaneous_rewards_cert() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : MoveInstantaneousRewardsCert.__wrap(ret);
  }
};
var Certificates = class {
  static __wrap(ptr) {
    const obj = Object.create(Certificates.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Certificates.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return Certificates.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return Certificate.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, Certificate);
    (void 0)(this.ptr, elem.ptr);
  }
};
var ConstrPlutusData = class {
  static __wrap(ptr) {
    const obj = Object.create(ConstrPlutusData.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ConstrPlutusData.__wrap(ret);
  }
  tag() {
    var ret = (void 0)(this.ptr);
    return Int.__wrap(ret);
  }
  data() {
    var ret = (void 0)(this.ptr);
    return PlutusList.__wrap(ret);
  }
  static new(tag, data) {
    _assertClass(tag, Int);
    var ptr0 = tag.ptr;
    tag.ptr = 0;
    _assertClass(data, PlutusList);
    var ret = (void 0)(ptr0, data.ptr);
    return ConstrPlutusData.__wrap(ret);
  }
};
var CostModel = class {
  static __wrap(ptr) {
    const obj = Object.create(CostModel.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return CostModel.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return CostModel.__wrap(ret);
  }
  set(operation, cost) {
    _assertClass(cost, Int);
    var ret = (void 0)(this.ptr, operation, cost.ptr);
    return Int.__wrap(ret);
  }
  get(operation) {
    var ret = (void 0)(this.ptr, operation);
    return Int.__wrap(ret);
  }
};
var Costmdls = class {
  static __wrap(ptr) {
    const obj = Object.create(Costmdls.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Costmdls.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return Costmdls.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  insert(key, value) {
    _assertClass(key, Language);
    _assertClass(value, CostModel);
    var ret = (void 0)(this.ptr, key.ptr, value.ptr);
    return ret === 0 ? void 0 : CostModel.__wrap(ret);
  }
  get(key) {
    _assertClass(key, Language);
    var ret = (void 0)(this.ptr, key.ptr);
    return ret === 0 ? void 0 : CostModel.__wrap(ret);
  }
  keys() {
    var ret = (void 0)(this.ptr);
    return Languages.__wrap(ret);
  }
};
var DNSRecordAorAAAA = class {
  static __wrap(ptr) {
    const obj = Object.create(DNSRecordAorAAAA.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return DNSRecordAorAAAA.__wrap(ret);
  }
  static new(dns_name) {
    var ptr0 = passStringToWasm0(dns_name, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return DNSRecordAorAAAA.__wrap(ret);
  }
  record() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
};
var DNSRecordSRV = class {
  static __wrap(ptr) {
    const obj = Object.create(DNSRecordSRV.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return DNSRecordSRV.__wrap(ret);
  }
  static new(dns_name) {
    var ptr0 = passStringToWasm0(dns_name, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return DNSRecordSRV.__wrap(ret);
  }
  record() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
};
var DataHash = class {
  static __wrap(ptr) {
    const obj = Object.create(DataHash.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  to_bech32(prefix) {
    try {
      const retptr = (void 0)(-16);
      var ptr0 = passStringToWasm0(prefix, void 0, void 0);
      var len0 = WASM_VECTOR_LEN;
      (void 0)(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bech32(bech_str) {
    var ptr0 = passStringToWasm0(bech_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return DataHash.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return DataHash.__wrap(ret);
  }
};
var Ed25519KeyHash = class {
  static __wrap(ptr) {
    const obj = Object.create(Ed25519KeyHash.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  to_bech32(prefix) {
    try {
      const retptr = (void 0)(-16);
      var ptr0 = passStringToWasm0(prefix, void 0, void 0);
      var len0 = WASM_VECTOR_LEN;
      (void 0)(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bech32(bech_str) {
    var ptr0 = passStringToWasm0(bech_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Ed25519KeyHash.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Ed25519KeyHash.__wrap(ret);
  }
};
var Ed25519KeyHashes = class {
  static __wrap(ptr) {
    const obj = Object.create(Ed25519KeyHashes.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Ed25519KeyHashes.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return Ed25519KeyHashes.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return Ed25519KeyHash.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, Ed25519KeyHash);
    (void 0)(this.ptr, elem.ptr);
  }
};
var Ed25519Signature = class {
  static __wrap(ptr) {
    const obj = Object.create(Ed25519Signature.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  to_bech32() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  to_hex() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bech32(bech32_str) {
    var ptr0 = passStringToWasm0(bech32_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Ed25519Signature.__wrap(ret);
  }
  static from_hex(input) {
    var ptr0 = passStringToWasm0(input, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Ed25519Signature.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Ed25519Signature.__wrap(ret);
  }
};
var EnterpriseAddress = class {
  static __wrap(ptr) {
    const obj = Object.create(EnterpriseAddress.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static new(network, payment) {
    _assertClass(payment, StakeCredential);
    var ret = (void 0)(network, payment.ptr);
    return EnterpriseAddress.__wrap(ret);
  }
  payment_cred() {
    var ret = (void 0)(this.ptr);
    return StakeCredential.__wrap(ret);
  }
  to_address() {
    var ret = (void 0)(this.ptr);
    return Address.__wrap(ret);
  }
  static from_address(addr) {
    _assertClass(addr, Address);
    var ret = (void 0)(addr.ptr);
    return ret === 0 ? void 0 : EnterpriseAddress.__wrap(ret);
  }
};
var ExUnitPrices = class {
  static __wrap(ptr) {
    const obj = Object.create(ExUnitPrices.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ExUnitPrices.__wrap(ret);
  }
  mem_price() {
    var ret = (void 0)(this.ptr);
    return UnitInterval.__wrap(ret);
  }
  step_price() {
    var ret = (void 0)(this.ptr);
    return UnitInterval.__wrap(ret);
  }
  static new(mem_price, step_price) {
    _assertClass(mem_price, UnitInterval);
    _assertClass(step_price, UnitInterval);
    var ret = (void 0)(mem_price.ptr, step_price.ptr);
    return ExUnitPrices.__wrap(ret);
  }
};
var ExUnits = class {
  static __wrap(ptr) {
    const obj = Object.create(ExUnits.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ExUnits.__wrap(ret);
  }
  mem() {
    var ret = (void 0)(this.ptr);
    return BigNum.__wrap(ret);
  }
  steps() {
    var ret = (void 0)(this.ptr);
    return BigNum.__wrap(ret);
  }
  static new(mem, steps) {
    _assertClass(mem, BigNum);
    _assertClass(steps, BigNum);
    var ret = (void 0)(mem.ptr, steps.ptr);
    return ExUnits.__wrap(ret);
  }
};
var GeneralTransactionMetadata = class {
  static __wrap(ptr) {
    const obj = Object.create(GeneralTransactionMetadata.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return GeneralTransactionMetadata.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return GeneralTransactionMetadata.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  insert(key, value) {
    _assertClass(key, BigNum);
    _assertClass(value, TransactionMetadatum);
    var ret = (void 0)(this.ptr, key.ptr, value.ptr);
    return ret === 0 ? void 0 : TransactionMetadatum.__wrap(ret);
  }
  get(key) {
    _assertClass(key, BigNum);
    var ret = (void 0)(this.ptr, key.ptr);
    return ret === 0 ? void 0 : TransactionMetadatum.__wrap(ret);
  }
  keys() {
    var ret = (void 0)(this.ptr);
    return TransactionMetadatumLabels.__wrap(ret);
  }
};
var GenesisDelegateHash = class {
  static __wrap(ptr) {
    const obj = Object.create(GenesisDelegateHash.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  to_bech32(prefix) {
    try {
      const retptr = (void 0)(-16);
      var ptr0 = passStringToWasm0(prefix, void 0, void 0);
      var len0 = WASM_VECTOR_LEN;
      (void 0)(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bech32(bech_str) {
    var ptr0 = passStringToWasm0(bech_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return GenesisDelegateHash.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return GenesisDelegateHash.__wrap(ret);
  }
};
var GenesisHash = class {
  static __wrap(ptr) {
    const obj = Object.create(GenesisHash.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  to_bech32(prefix) {
    try {
      const retptr = (void 0)(-16);
      var ptr0 = passStringToWasm0(prefix, void 0, void 0);
      var len0 = WASM_VECTOR_LEN;
      (void 0)(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bech32(bech_str) {
    var ptr0 = passStringToWasm0(bech_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return GenesisHash.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return GenesisHash.__wrap(ret);
  }
};
var GenesisHashes = class {
  static __wrap(ptr) {
    const obj = Object.create(GenesisHashes.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return GenesisHashes.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return GenesisHashes.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return GenesisHash.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, GenesisHash);
    (void 0)(this.ptr, elem.ptr);
  }
};
var GenesisKeyDelegation = class {
  static __wrap(ptr) {
    const obj = Object.create(GenesisKeyDelegation.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return GenesisKeyDelegation.__wrap(ret);
  }
  genesishash() {
    var ret = (void 0)(this.ptr);
    return GenesisHash.__wrap(ret);
  }
  genesis_delegate_hash() {
    var ret = (void 0)(this.ptr);
    return GenesisDelegateHash.__wrap(ret);
  }
  vrf_keyhash() {
    var ret = (void 0)(this.ptr);
    return VRFKeyHash.__wrap(ret);
  }
  static new(genesishash, genesis_delegate_hash, vrf_keyhash) {
    _assertClass(genesishash, GenesisHash);
    _assertClass(genesis_delegate_hash, GenesisDelegateHash);
    _assertClass(vrf_keyhash, VRFKeyHash);
    var ret = (void 0)(genesishash.ptr, genesis_delegate_hash.ptr, vrf_keyhash.ptr);
    return GenesisKeyDelegation.__wrap(ret);
  }
};
var Header = class {
  static __wrap(ptr) {
    const obj = Object.create(Header.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Header.__wrap(ret);
  }
  header_body() {
    var ret = (void 0)(this.ptr);
    return HeaderBody.__wrap(ret);
  }
  body_signature() {
    var ret = (void 0)(this.ptr);
    return KESSignature.__wrap(ret);
  }
  static new(header_body, body_signature) {
    _assertClass(header_body, HeaderBody);
    _assertClass(body_signature, KESSignature);
    var ret = (void 0)(header_body.ptr, body_signature.ptr);
    return Header.__wrap(ret);
  }
};
var HeaderBody = class {
  static __wrap(ptr) {
    const obj = Object.create(HeaderBody.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return HeaderBody.__wrap(ret);
  }
  block_number() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  slot() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  prev_hash() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : BlockHash.__wrap(ret);
  }
  issuer_vkey() {
    var ret = (void 0)(this.ptr);
    return Vkey.__wrap(ret);
  }
  vrf_vkey() {
    var ret = (void 0)(this.ptr);
    return VRFVKey.__wrap(ret);
  }
  nonce_vrf() {
    var ret = (void 0)(this.ptr);
    return VRFCert.__wrap(ret);
  }
  leader_vrf() {
    var ret = (void 0)(this.ptr);
    return VRFCert.__wrap(ret);
  }
  block_body_size() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  block_body_hash() {
    var ret = (void 0)(this.ptr);
    return BlockHash.__wrap(ret);
  }
  operational_cert() {
    var ret = (void 0)(this.ptr);
    return OperationalCert.__wrap(ret);
  }
  protocol_version() {
    var ret = (void 0)(this.ptr);
    return ProtocolVersion.__wrap(ret);
  }
  static new(block_number, slot, prev_hash, issuer_vkey, vrf_vkey, nonce_vrf, leader_vrf, block_body_size, block_body_hash, operational_cert, protocol_version) {
    let ptr0 = 0;
    if (!isLikeNone(prev_hash)) {
      _assertClass(prev_hash, BlockHash);
      ptr0 = prev_hash.ptr;
      prev_hash.ptr = 0;
    }
    _assertClass(issuer_vkey, Vkey);
    _assertClass(vrf_vkey, VRFVKey);
    _assertClass(nonce_vrf, VRFCert);
    _assertClass(leader_vrf, VRFCert);
    _assertClass(block_body_hash, BlockHash);
    _assertClass(operational_cert, OperationalCert);
    _assertClass(protocol_version, ProtocolVersion);
    var ret = (void 0)(block_number, slot, ptr0, issuer_vkey.ptr, vrf_vkey.ptr, nonce_vrf.ptr, leader_vrf.ptr, block_body_size, block_body_hash.ptr, operational_cert.ptr, protocol_version.ptr);
    return HeaderBody.__wrap(ret);
  }
};
var Int = class {
  static __wrap(ptr) {
    const obj = Object.create(Int.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static new(x) {
    _assertClass(x, BigNum);
    var ret = (void 0)(x.ptr);
    return Int.__wrap(ret);
  }
  static new_negative(x) {
    _assertClass(x, BigNum);
    var ret = (void 0)(x.ptr);
    return Int.__wrap(ret);
  }
  static new_i32(x) {
    var ret = (void 0)(x);
    return Int.__wrap(ret);
  }
  is_positive() {
    var ret = (void 0)(this.ptr);
    return ret !== 0;
  }
  as_positive() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : BigNum.__wrap(ret);
  }
  as_negative() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : BigNum.__wrap(ret);
  }
  as_i32() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      (void 0)(16);
    }
  }
};
var Ipv4 = class {
  static __wrap(ptr) {
    const obj = Object.create(Ipv4.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Ipv4.__wrap(ret);
  }
  static new(data) {
    var ptr0 = passArray8ToWasm0(data, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Ipv4.__wrap(ret);
  }
  ip() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
};
var Ipv6 = class {
  static __wrap(ptr) {
    const obj = Object.create(Ipv6.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Ipv6.__wrap(ret);
  }
  static new(data) {
    var ptr0 = passArray8ToWasm0(data, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Ipv6.__wrap(ret);
  }
  ip() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
};
var KESSignature = class {
  static __wrap(ptr) {
    const obj = Object.create(KESSignature.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return KESSignature.__wrap(ret);
  }
};
var KESVKey = class {
  static __wrap(ptr) {
    const obj = Object.create(KESVKey.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  to_bech32(prefix) {
    try {
      const retptr = (void 0)(-16);
      var ptr0 = passStringToWasm0(prefix, void 0, void 0);
      var len0 = WASM_VECTOR_LEN;
      (void 0)(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bech32(bech_str) {
    var ptr0 = passStringToWasm0(bech_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return KESVKey.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return KESVKey.__wrap(ret);
  }
};
var Language = class {
  static __wrap(ptr) {
    const obj = Object.create(Language.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Language.__wrap(ret);
  }
  static new_plutus_v1() {
    var ret = (void 0)();
    return Language.__wrap(ret);
  }
  kind() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
};
var Languages = class {
  static __wrap(ptr) {
    const obj = Object.create(Languages.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static new() {
    var ret = (void 0)();
    return Languages.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return Language.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, Language);
    var ptr0 = elem.ptr;
    elem.ptr = 0;
    (void 0)(this.ptr, ptr0);
  }
};
var LegacyDaedalusPrivateKey = class {
  static __wrap(ptr) {
    const obj = Object.create(LegacyDaedalusPrivateKey.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return LegacyDaedalusPrivateKey.__wrap(ret);
  }
  as_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  chaincode() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
};
var LinearFee = class {
  static __wrap(ptr) {
    const obj = Object.create(LinearFee.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  constant() {
    var ret = (void 0)(this.ptr);
    return BigNum.__wrap(ret);
  }
  coefficient() {
    var ret = (void 0)(this.ptr);
    return BigNum.__wrap(ret);
  }
  static new(coefficient, constant) {
    _assertClass(coefficient, BigNum);
    _assertClass(constant, BigNum);
    var ret = (void 0)(coefficient.ptr, constant.ptr);
    return LinearFee.__wrap(ret);
  }
};
var MIRToStakeCredentials = class {
  static __wrap(ptr) {
    const obj = Object.create(MIRToStakeCredentials.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return MIRToStakeCredentials.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return MIRToStakeCredentials.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  insert(cred, delta) {
    _assertClass(cred, StakeCredential);
    _assertClass(delta, Int);
    var ret = (void 0)(this.ptr, cred.ptr, delta.ptr);
    return ret === 0 ? void 0 : Int.__wrap(ret);
  }
  get(cred) {
    _assertClass(cred, StakeCredential);
    var ret = (void 0)(this.ptr, cred.ptr);
    return ret === 0 ? void 0 : Int.__wrap(ret);
  }
  keys() {
    var ret = (void 0)(this.ptr);
    return StakeCredentials.__wrap(ret);
  }
};
var MetadataList = class {
  static __wrap(ptr) {
    const obj = Object.create(MetadataList.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return MetadataList.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return MetadataList.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return TransactionMetadatum.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, TransactionMetadatum);
    (void 0)(this.ptr, elem.ptr);
  }
};
var MetadataMap = class {
  static __wrap(ptr) {
    const obj = Object.create(MetadataMap.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return MetadataMap.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return MetadataMap.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  insert(key, value) {
    _assertClass(key, TransactionMetadatum);
    _assertClass(value, TransactionMetadatum);
    var ret = (void 0)(this.ptr, key.ptr, value.ptr);
    return ret === 0 ? void 0 : TransactionMetadatum.__wrap(ret);
  }
  insert_str(key, value) {
    var ptr0 = passStringToWasm0(key, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    _assertClass(value, TransactionMetadatum);
    var ret = (void 0)(this.ptr, ptr0, len0, value.ptr);
    return ret === 0 ? void 0 : TransactionMetadatum.__wrap(ret);
  }
  insert_i32(key, value) {
    _assertClass(value, TransactionMetadatum);
    var ret = (void 0)(this.ptr, key, value.ptr);
    return ret === 0 ? void 0 : TransactionMetadatum.__wrap(ret);
  }
  get(key) {
    _assertClass(key, TransactionMetadatum);
    var ret = (void 0)(this.ptr, key.ptr);
    return TransactionMetadatum.__wrap(ret);
  }
  get_str(key) {
    var ptr0 = passStringToWasm0(key, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(this.ptr, ptr0, len0);
    return TransactionMetadatum.__wrap(ret);
  }
  get_i32(key) {
    var ret = (void 0)(this.ptr, key);
    return TransactionMetadatum.__wrap(ret);
  }
  has(key) {
    _assertClass(key, TransactionMetadatum);
    var ret = (void 0)(this.ptr, key.ptr);
    return ret !== 0;
  }
  keys() {
    var ret = (void 0)(this.ptr);
    return MetadataList.__wrap(ret);
  }
};
var Mint = class {
  static __wrap(ptr) {
    const obj = Object.create(Mint.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Mint.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return Mint.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  insert(key, value) {
    _assertClass(key, ScriptHash);
    _assertClass(value, MintAssets);
    var ret = (void 0)(this.ptr, key.ptr, value.ptr);
    return ret === 0 ? void 0 : MintAssets.__wrap(ret);
  }
  get(key) {
    _assertClass(key, ScriptHash);
    var ret = (void 0)(this.ptr, key.ptr);
    return ret === 0 ? void 0 : MintAssets.__wrap(ret);
  }
  keys() {
    var ret = (void 0)(this.ptr);
    return ScriptHashes.__wrap(ret);
  }
};
var MintAssets = class {
  static __wrap(ptr) {
    const obj = Object.create(MintAssets.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static new() {
    var ret = (void 0)();
    return MintAssets.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  insert(key, value) {
    _assertClass(key, AssetName);
    _assertClass(value, Int);
    var ptr0 = value.ptr;
    value.ptr = 0;
    var ret = (void 0)(this.ptr, key.ptr, ptr0);
    return ret === 0 ? void 0 : Int.__wrap(ret);
  }
  get(key) {
    _assertClass(key, AssetName);
    var ret = (void 0)(this.ptr, key.ptr);
    return ret === 0 ? void 0 : Int.__wrap(ret);
  }
  keys() {
    var ret = (void 0)(this.ptr);
    return AssetNames.__wrap(ret);
  }
};
var MoveInstantaneousReward = class {
  static __wrap(ptr) {
    const obj = Object.create(MoveInstantaneousReward.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return MoveInstantaneousReward.__wrap(ret);
  }
  static new_to_other_pot(pot, amount) {
    _assertClass(amount, BigNum);
    var ret = (void 0)(pot, amount.ptr);
    return MoveInstantaneousReward.__wrap(ret);
  }
  static new_to_stake_creds(pot, amounts) {
    _assertClass(amounts, MIRToStakeCredentials);
    var ret = (void 0)(pot, amounts.ptr);
    return MoveInstantaneousReward.__wrap(ret);
  }
  pot() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  kind() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  as_to_other_pot() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : BigNum.__wrap(ret);
  }
  as_to_stake_creds() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : MIRToStakeCredentials.__wrap(ret);
  }
};
var MoveInstantaneousRewardsCert = class {
  static __wrap(ptr) {
    const obj = Object.create(MoveInstantaneousRewardsCert.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return MoveInstantaneousRewardsCert.__wrap(ret);
  }
  move_instantaneous_reward() {
    var ret = (void 0)(this.ptr);
    return MoveInstantaneousReward.__wrap(ret);
  }
  static new(move_instantaneous_reward) {
    _assertClass(move_instantaneous_reward, MoveInstantaneousReward);
    var ret = (void 0)(move_instantaneous_reward.ptr);
    return MoveInstantaneousRewardsCert.__wrap(ret);
  }
};
var MultiAsset = class {
  static __wrap(ptr) {
    const obj = Object.create(MultiAsset.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return MultiAsset.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return MultiAsset.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  insert(key, value) {
    _assertClass(key, ScriptHash);
    _assertClass(value, Assets);
    var ret = (void 0)(this.ptr, key.ptr, value.ptr);
    return ret === 0 ? void 0 : Assets.__wrap(ret);
  }
  get(key) {
    _assertClass(key, ScriptHash);
    var ret = (void 0)(this.ptr, key.ptr);
    return ret === 0 ? void 0 : Assets.__wrap(ret);
  }
  keys() {
    var ret = (void 0)(this.ptr);
    return ScriptHashes.__wrap(ret);
  }
  sub(rhs_ma) {
    _assertClass(rhs_ma, MultiAsset);
    var ret = (void 0)(this.ptr, rhs_ma.ptr);
    return MultiAsset.__wrap(ret);
  }
};
var MultiHostName = class {
  static __wrap(ptr) {
    const obj = Object.create(MultiHostName.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return MultiHostName.__wrap(ret);
  }
  dns_name() {
    var ret = (void 0)(this.ptr);
    return DNSRecordSRV.__wrap(ret);
  }
  static new(dns_name) {
    _assertClass(dns_name, DNSRecordSRV);
    var ret = (void 0)(dns_name.ptr);
    return MultiHostName.__wrap(ret);
  }
};
var NativeScript = class {
  static __wrap(ptr) {
    const obj = Object.create(NativeScript.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return NativeScript.__wrap(ret);
  }
  hash(namespace) {
    var ret = (void 0)(this.ptr, namespace);
    return Ed25519KeyHash.__wrap(ret);
  }
  static new_script_pubkey(script_pubkey) {
    _assertClass(script_pubkey, ScriptPubkey);
    var ret = (void 0)(script_pubkey.ptr);
    return NativeScript.__wrap(ret);
  }
  static new_script_all(script_all) {
    _assertClass(script_all, ScriptAll);
    var ret = (void 0)(script_all.ptr);
    return NativeScript.__wrap(ret);
  }
  static new_script_any(script_any) {
    _assertClass(script_any, ScriptAny);
    var ret = (void 0)(script_any.ptr);
    return NativeScript.__wrap(ret);
  }
  static new_script_n_of_k(script_n_of_k) {
    _assertClass(script_n_of_k, ScriptNOfK);
    var ret = (void 0)(script_n_of_k.ptr);
    return NativeScript.__wrap(ret);
  }
  static new_timelock_start(timelock_start) {
    _assertClass(timelock_start, TimelockStart);
    var ret = (void 0)(timelock_start.ptr);
    return NativeScript.__wrap(ret);
  }
  static new_timelock_expiry(timelock_expiry) {
    _assertClass(timelock_expiry, TimelockExpiry);
    var ret = (void 0)(timelock_expiry.ptr);
    return NativeScript.__wrap(ret);
  }
  kind() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  as_script_pubkey() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : ScriptPubkey.__wrap(ret);
  }
  as_script_all() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : ScriptAll.__wrap(ret);
  }
  as_script_any() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : ScriptAny.__wrap(ret);
  }
  as_script_n_of_k() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : ScriptNOfK.__wrap(ret);
  }
  as_timelock_start() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : TimelockStart.__wrap(ret);
  }
  as_timelock_expiry() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : TimelockExpiry.__wrap(ret);
  }
};
var NativeScripts = class {
  static __wrap(ptr) {
    const obj = Object.create(NativeScripts.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static new() {
    var ret = (void 0)();
    return NativeScripts.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return NativeScript.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, NativeScript);
    (void 0)(this.ptr, elem.ptr);
  }
};
var NetworkId = class {
  static __wrap(ptr) {
    const obj = Object.create(NetworkId.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return NetworkId.__wrap(ret);
  }
  static testnet() {
    var ret = (void 0)();
    return NetworkId.__wrap(ret);
  }
  static mainnet() {
    var ret = (void 0)();
    return NetworkId.__wrap(ret);
  }
  kind() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
};
var NetworkInfo = class {
  static __wrap(ptr) {
    const obj = Object.create(NetworkInfo.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static new(network_id, protocol_magic) {
    var ret = (void 0)(network_id, protocol_magic);
    return NetworkInfo.__wrap(ret);
  }
  network_id() {
    var ret = (void 0)(this.ptr);
    return ret;
  }
  protocol_magic() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  static testnet() {
    var ret = (void 0)();
    return NetworkInfo.__wrap(ret);
  }
  static mainnet() {
    var ret = (void 0)();
    return NetworkInfo.__wrap(ret);
  }
};
var Nonce = class {
  static __wrap(ptr) {
    const obj = Object.create(Nonce.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Nonce.__wrap(ret);
  }
  static new_identity() {
    var ret = (void 0)();
    return Nonce.__wrap(ret);
  }
  static new_from_hash(hash) {
    var ptr0 = passArray8ToWasm0(hash, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Nonce.__wrap(ret);
  }
  get_hash() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      let v0;
      if (r0 !== 0) {
        v0 = getArrayU8FromWasm0(r0, r1).slice();
        (void 0)(r0, r1 * 1);
      }
      return v0;
    } finally {
      (void 0)(16);
    }
  }
};
var OperationalCert = class {
  static __wrap(ptr) {
    const obj = Object.create(OperationalCert.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return OperationalCert.__wrap(ret);
  }
  hot_vkey() {
    var ret = (void 0)(this.ptr);
    return KESVKey.__wrap(ret);
  }
  sequence_number() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  kes_period() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  sigma() {
    var ret = (void 0)(this.ptr);
    return Ed25519Signature.__wrap(ret);
  }
  static new(hot_vkey, sequence_number, kes_period, sigma) {
    _assertClass(hot_vkey, KESVKey);
    _assertClass(sigma, Ed25519Signature);
    var ret = (void 0)(hot_vkey.ptr, sequence_number, kes_period, sigma.ptr);
    return OperationalCert.__wrap(ret);
  }
};
var PlutusData = class {
  static __wrap(ptr) {
    const obj = Object.create(PlutusData.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PlutusData.__wrap(ret);
  }
  static new_constr_plutus_data(constr_plutus_data) {
    _assertClass(constr_plutus_data, ConstrPlutusData);
    var ret = (void 0)(constr_plutus_data.ptr);
    return PlutusData.__wrap(ret);
  }
  static new_map(map) {
    _assertClass(map, PlutusMap);
    var ret = (void 0)(map.ptr);
    return PlutusData.__wrap(ret);
  }
  static new_list(list) {
    _assertClass(list, PlutusList);
    var ret = (void 0)(list.ptr);
    return PlutusData.__wrap(ret);
  }
  static new_integer(integer) {
    _assertClass(integer, BigInt);
    var ret = (void 0)(integer.ptr);
    return PlutusData.__wrap(ret);
  }
  static new_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PlutusData.__wrap(ret);
  }
  kind() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  as_constr_plutus_data() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : ConstrPlutusData.__wrap(ret);
  }
  as_map() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : PlutusMap.__wrap(ret);
  }
  as_list() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : PlutusList.__wrap(ret);
  }
  as_integer() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : BigInt.__wrap(ret);
  }
  as_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      let v0;
      if (r0 !== 0) {
        v0 = getArrayU8FromWasm0(r0, r1).slice();
        (void 0)(r0, r1 * 1);
      }
      return v0;
    } finally {
      (void 0)(16);
    }
  }
};
var PlutusList = class {
  static __wrap(ptr) {
    const obj = Object.create(PlutusList.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PlutusList.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return PlutusList.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return PlutusData.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, PlutusData);
    (void 0)(this.ptr, elem.ptr);
  }
};
var PlutusMap = class {
  static __wrap(ptr) {
    const obj = Object.create(PlutusMap.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PlutusMap.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return PlutusMap.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  insert(key, value) {
    _assertClass(key, PlutusData);
    _assertClass(value, PlutusData);
    var ret = (void 0)(this.ptr, key.ptr, value.ptr);
    return ret === 0 ? void 0 : PlutusData.__wrap(ret);
  }
  get(key) {
    _assertClass(key, PlutusData);
    var ret = (void 0)(this.ptr, key.ptr);
    return ret === 0 ? void 0 : PlutusData.__wrap(ret);
  }
  keys() {
    var ret = (void 0)(this.ptr);
    return PlutusList.__wrap(ret);
  }
};
var PlutusScript = class {
  static __wrap(ptr) {
    const obj = Object.create(PlutusScript.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PlutusScript.__wrap(ret);
  }
  static new(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PlutusScript.__wrap(ret);
  }
  bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
};
var PlutusScripts = class {
  static __wrap(ptr) {
    const obj = Object.create(PlutusScripts.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PlutusScripts.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return PlutusScripts.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return PlutusScript.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, PlutusScript);
    (void 0)(this.ptr, elem.ptr);
  }
};
var Pointer = class {
  static __wrap(ptr) {
    const obj = Object.create(Pointer.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static new(slot, tx_index, cert_index) {
    var ret = (void 0)(slot, tx_index, cert_index);
    return Pointer.__wrap(ret);
  }
  slot() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  tx_index() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  cert_index() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
};
var PointerAddress = class {
  static __wrap(ptr) {
    const obj = Object.create(PointerAddress.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static new(network, payment, stake) {
    _assertClass(payment, StakeCredential);
    _assertClass(stake, Pointer);
    var ret = (void 0)(network, payment.ptr, stake.ptr);
    return PointerAddress.__wrap(ret);
  }
  payment_cred() {
    var ret = (void 0)(this.ptr);
    return StakeCredential.__wrap(ret);
  }
  stake_pointer() {
    var ret = (void 0)(this.ptr);
    return Pointer.__wrap(ret);
  }
  to_address() {
    var ret = (void 0)(this.ptr);
    return Address.__wrap(ret);
  }
  static from_address(addr) {
    _assertClass(addr, Address);
    var ret = (void 0)(addr.ptr);
    return ret === 0 ? void 0 : PointerAddress.__wrap(ret);
  }
};
var PoolMetadata = class {
  static __wrap(ptr) {
    const obj = Object.create(PoolMetadata.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PoolMetadata.__wrap(ret);
  }
  url() {
    var ret = (void 0)(this.ptr);
    return URL.__wrap(ret);
  }
  pool_metadata_hash() {
    var ret = (void 0)(this.ptr);
    return PoolMetadataHash.__wrap(ret);
  }
  static new(url, pool_metadata_hash) {
    _assertClass(url, URL);
    _assertClass(pool_metadata_hash, PoolMetadataHash);
    var ret = (void 0)(url.ptr, pool_metadata_hash.ptr);
    return PoolMetadata.__wrap(ret);
  }
};
var PoolMetadataHash = class {
  static __wrap(ptr) {
    const obj = Object.create(PoolMetadataHash.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  to_bech32(prefix) {
    try {
      const retptr = (void 0)(-16);
      var ptr0 = passStringToWasm0(prefix, void 0, void 0);
      var len0 = WASM_VECTOR_LEN;
      (void 0)(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bech32(bech_str) {
    var ptr0 = passStringToWasm0(bech_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PoolMetadataHash.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PoolMetadataHash.__wrap(ret);
  }
};
var PoolParams = class {
  static __wrap(ptr) {
    const obj = Object.create(PoolParams.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PoolParams.__wrap(ret);
  }
  operator() {
    var ret = (void 0)(this.ptr);
    return Ed25519KeyHash.__wrap(ret);
  }
  vrf_keyhash() {
    var ret = (void 0)(this.ptr);
    return VRFKeyHash.__wrap(ret);
  }
  pledge() {
    var ret = (void 0)(this.ptr);
    return BigNum.__wrap(ret);
  }
  cost() {
    var ret = (void 0)(this.ptr);
    return BigNum.__wrap(ret);
  }
  margin() {
    var ret = (void 0)(this.ptr);
    return UnitInterval.__wrap(ret);
  }
  reward_account() {
    var ret = (void 0)(this.ptr);
    return RewardAddress.__wrap(ret);
  }
  pool_owners() {
    var ret = (void 0)(this.ptr);
    return Ed25519KeyHashes.__wrap(ret);
  }
  relays() {
    var ret = (void 0)(this.ptr);
    return Relays.__wrap(ret);
  }
  pool_metadata() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : PoolMetadata.__wrap(ret);
  }
  static new(operator, vrf_keyhash, pledge, cost, margin, reward_account, pool_owners, relays, pool_metadata) {
    _assertClass(operator, Ed25519KeyHash);
    _assertClass(vrf_keyhash, VRFKeyHash);
    _assertClass(pledge, BigNum);
    _assertClass(cost, BigNum);
    _assertClass(margin, UnitInterval);
    _assertClass(reward_account, RewardAddress);
    _assertClass(pool_owners, Ed25519KeyHashes);
    _assertClass(relays, Relays);
    let ptr0 = 0;
    if (!isLikeNone(pool_metadata)) {
      _assertClass(pool_metadata, PoolMetadata);
      ptr0 = pool_metadata.ptr;
      pool_metadata.ptr = 0;
    }
    var ret = (void 0)(operator.ptr, vrf_keyhash.ptr, pledge.ptr, cost.ptr, margin.ptr, reward_account.ptr, pool_owners.ptr, relays.ptr, ptr0);
    return PoolParams.__wrap(ret);
  }
};
var PoolRegistration = class {
  static __wrap(ptr) {
    const obj = Object.create(PoolRegistration.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PoolRegistration.__wrap(ret);
  }
  pool_params() {
    var ret = (void 0)(this.ptr);
    return PoolParams.__wrap(ret);
  }
  static new(pool_params) {
    _assertClass(pool_params, PoolParams);
    var ret = (void 0)(pool_params.ptr);
    return PoolRegistration.__wrap(ret);
  }
};
var PoolRetirement = class {
  static __wrap(ptr) {
    const obj = Object.create(PoolRetirement.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PoolRetirement.__wrap(ret);
  }
  pool_keyhash() {
    var ret = (void 0)(this.ptr);
    return Ed25519KeyHash.__wrap(ret);
  }
  epoch() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  static new(pool_keyhash, epoch) {
    _assertClass(pool_keyhash, Ed25519KeyHash);
    var ret = (void 0)(pool_keyhash.ptr, epoch);
    return PoolRetirement.__wrap(ret);
  }
};
var PrivateKey = class {
  static __wrap(ptr) {
    const obj = Object.create(PrivateKey.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_public() {
    var ret = (void 0)(this.ptr);
    return PublicKey.__wrap(ret);
  }
  static generate_ed25519() {
    var ret = (void 0)();
    return PrivateKey.__wrap(ret);
  }
  static generate_ed25519extended() {
    var ret = (void 0)();
    return PrivateKey.__wrap(ret);
  }
  to_bech32() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  as_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_extended_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PrivateKey.__wrap(ret);
  }
  static from_normal_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PrivateKey.__wrap(ret);
  }
  sign(message) {
    var ptr0 = passArray8ToWasm0(message, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(this.ptr, ptr0, len0);
    return Ed25519Signature.__wrap(ret);
  }
};
var ProposedProtocolParameterUpdates = class {
  static __wrap(ptr) {
    const obj = Object.create(ProposedProtocolParameterUpdates.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ProposedProtocolParameterUpdates.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return ProposedProtocolParameterUpdates.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  insert(key, value) {
    _assertClass(key, GenesisHash);
    _assertClass(value, ProtocolParamUpdate);
    var ret = (void 0)(this.ptr, key.ptr, value.ptr);
    return ret === 0 ? void 0 : ProtocolParamUpdate.__wrap(ret);
  }
  get(key) {
    _assertClass(key, GenesisHash);
    var ret = (void 0)(this.ptr, key.ptr);
    return ret === 0 ? void 0 : ProtocolParamUpdate.__wrap(ret);
  }
  keys() {
    var ret = (void 0)(this.ptr);
    return GenesisHashes.__wrap(ret);
  }
};
var ProtocolParamUpdate = class {
  static __wrap(ptr) {
    const obj = Object.create(ProtocolParamUpdate.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ProtocolParamUpdate.__wrap(ret);
  }
  set_minfee_a(minfee_a) {
    _assertClass(minfee_a, BigNum);
    (void 0)(this.ptr, minfee_a.ptr);
  }
  minfee_a() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : BigNum.__wrap(ret);
  }
  set_minfee_b(minfee_b) {
    _assertClass(minfee_b, BigNum);
    (void 0)(this.ptr, minfee_b.ptr);
  }
  minfee_b() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : BigNum.__wrap(ret);
  }
  set_max_block_body_size(max_block_body_size) {
    (void 0)(this.ptr, max_block_body_size);
  }
  max_block_body_size() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      (void 0)(16);
    }
  }
  set_max_tx_size(max_tx_size) {
    (void 0)(this.ptr, max_tx_size);
  }
  max_tx_size() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      (void 0)(16);
    }
  }
  set_max_block_header_size(max_block_header_size) {
    (void 0)(this.ptr, max_block_header_size);
  }
  max_block_header_size() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      (void 0)(16);
    }
  }
  set_key_deposit(key_deposit) {
    _assertClass(key_deposit, BigNum);
    (void 0)(this.ptr, key_deposit.ptr);
  }
  key_deposit() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : BigNum.__wrap(ret);
  }
  set_pool_deposit(pool_deposit) {
    _assertClass(pool_deposit, BigNum);
    (void 0)(this.ptr, pool_deposit.ptr);
  }
  pool_deposit() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : BigNum.__wrap(ret);
  }
  set_max_epoch(max_epoch) {
    (void 0)(this.ptr, max_epoch);
  }
  max_epoch() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      (void 0)(16);
    }
  }
  set_n_opt(n_opt) {
    (void 0)(this.ptr, n_opt);
  }
  n_opt() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      (void 0)(16);
    }
  }
  set_pool_pledge_influence(pool_pledge_influence) {
    _assertClass(pool_pledge_influence, UnitInterval);
    (void 0)(this.ptr, pool_pledge_influence.ptr);
  }
  pool_pledge_influence() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : UnitInterval.__wrap(ret);
  }
  set_expansion_rate(expansion_rate) {
    _assertClass(expansion_rate, UnitInterval);
    (void 0)(this.ptr, expansion_rate.ptr);
  }
  expansion_rate() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : UnitInterval.__wrap(ret);
  }
  set_treasury_growth_rate(treasury_growth_rate) {
    _assertClass(treasury_growth_rate, UnitInterval);
    (void 0)(this.ptr, treasury_growth_rate.ptr);
  }
  treasury_growth_rate() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : UnitInterval.__wrap(ret);
  }
  set_d(d) {
    _assertClass(d, UnitInterval);
    (void 0)(this.ptr, d.ptr);
  }
  d() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : UnitInterval.__wrap(ret);
  }
  set_extra_entropy(extra_entropy) {
    _assertClass(extra_entropy, Nonce);
    (void 0)(this.ptr, extra_entropy.ptr);
  }
  extra_entropy() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : Nonce.__wrap(ret);
  }
  set_protocol_version(protocol_version) {
    _assertClass(protocol_version, ProtocolVersions);
    (void 0)(this.ptr, protocol_version.ptr);
  }
  protocol_version() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : ProtocolVersions.__wrap(ret);
  }
  set_min_pool_cost(min_pool_cost) {
    _assertClass(min_pool_cost, BigNum);
    (void 0)(this.ptr, min_pool_cost.ptr);
  }
  min_pool_cost() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : BigNum.__wrap(ret);
  }
  set_ada_per_utxo_byte(ada_per_utxo_byte) {
    _assertClass(ada_per_utxo_byte, BigNum);
    (void 0)(this.ptr, ada_per_utxo_byte.ptr);
  }
  ada_per_utxo_byte() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : BigNum.__wrap(ret);
  }
  set_cost_models(cost_models) {
    _assertClass(cost_models, Costmdls);
    (void 0)(this.ptr, cost_models.ptr);
  }
  cost_models() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : Costmdls.__wrap(ret);
  }
  set_execution_costs(execution_costs) {
    _assertClass(execution_costs, ExUnitPrices);
    (void 0)(this.ptr, execution_costs.ptr);
  }
  execution_costs() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : ExUnitPrices.__wrap(ret);
  }
  set_max_tx_ex_units(max_tx_ex_units) {
    _assertClass(max_tx_ex_units, ExUnits);
    (void 0)(this.ptr, max_tx_ex_units.ptr);
  }
  max_tx_ex_units() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : ExUnits.__wrap(ret);
  }
  set_max_block_ex_units(max_block_ex_units) {
    _assertClass(max_block_ex_units, ExUnits);
    (void 0)(this.ptr, max_block_ex_units.ptr);
  }
  max_block_ex_units() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : ExUnits.__wrap(ret);
  }
  set_max_value_size(max_value_size) {
    (void 0)(this.ptr, max_value_size);
  }
  max_value_size() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      (void 0)(16);
    }
  }
  static new() {
    var ret = (void 0)();
    return ProtocolParamUpdate.__wrap(ret);
  }
};
var ProtocolVersion = class {
  static __wrap(ptr) {
    const obj = Object.create(ProtocolVersion.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ProtocolVersion.__wrap(ret);
  }
  major() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  minor() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  static new(major, minor) {
    var ret = (void 0)(major, minor);
    return ProtocolVersion.__wrap(ret);
  }
};
var ProtocolVersions = class {
  static __wrap(ptr) {
    const obj = Object.create(ProtocolVersions.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ProtocolVersions.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return ProtocolVersions.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return ProtocolVersion.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, ProtocolVersion);
    (void 0)(this.ptr, elem.ptr);
  }
};
var PublicKey = class {
  static __wrap(ptr) {
    const obj = Object.create(PublicKey.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static from_bech32(bech32_str) {
    var ptr0 = passStringToWasm0(bech32_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PublicKey.__wrap(ret);
  }
  to_bech32() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  as_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return PublicKey.__wrap(ret);
  }
  verify(data, signature) {
    var ptr0 = passArray8ToWasm0(data, void 0);
    var len0 = WASM_VECTOR_LEN;
    _assertClass(signature, Ed25519Signature);
    var ret = (void 0)(this.ptr, ptr0, len0, signature.ptr);
    return ret !== 0;
  }
  hash() {
    var ret = (void 0)(this.ptr);
    return Ed25519KeyHash.__wrap(ret);
  }
};
var PublicKeys = class {
  static __wrap(ptr) {
    const obj = Object.create(PublicKeys.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  constructor() {
    var ret = (void 0)();
    return PublicKeys.__wrap(ret);
  }
  size() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return PublicKey.__wrap(ret);
  }
  add(key) {
    _assertClass(key, PublicKey);
    (void 0)(this.ptr, key.ptr);
  }
};
var Redeemer = class {
  static __wrap(ptr) {
    const obj = Object.create(Redeemer.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Redeemer.__wrap(ret);
  }
  tag() {
    var ret = (void 0)(this.ptr);
    return RedeemerTag.__wrap(ret);
  }
  index() {
    var ret = (void 0)(this.ptr);
    return BigNum.__wrap(ret);
  }
  data() {
    var ret = (void 0)(this.ptr);
    return PlutusData.__wrap(ret);
  }
  ex_units() {
    var ret = (void 0)(this.ptr);
    return ExUnits.__wrap(ret);
  }
  static new(tag, index, data, ex_units) {
    _assertClass(tag, RedeemerTag);
    _assertClass(index, BigNum);
    _assertClass(data, PlutusData);
    _assertClass(ex_units, ExUnits);
    var ret = (void 0)(tag.ptr, index.ptr, data.ptr, ex_units.ptr);
    return Redeemer.__wrap(ret);
  }
};
var RedeemerTag = class {
  static __wrap(ptr) {
    const obj = Object.create(RedeemerTag.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return RedeemerTag.__wrap(ret);
  }
  static new_spend() {
    var ret = (void 0)();
    return RedeemerTag.__wrap(ret);
  }
  static new_mint() {
    var ret = (void 0)();
    return RedeemerTag.__wrap(ret);
  }
  static new_cert() {
    var ret = (void 0)();
    return RedeemerTag.__wrap(ret);
  }
  static new_reward() {
    var ret = (void 0)();
    return RedeemerTag.__wrap(ret);
  }
  kind() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
};
var Redeemers = class {
  static __wrap(ptr) {
    const obj = Object.create(Redeemers.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Redeemers.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return Redeemers.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return Redeemer.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, Redeemer);
    (void 0)(this.ptr, elem.ptr);
  }
};
var Relay = class {
  static __wrap(ptr) {
    const obj = Object.create(Relay.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Relay.__wrap(ret);
  }
  static new_single_host_addr(single_host_addr) {
    _assertClass(single_host_addr, SingleHostAddr);
    var ret = (void 0)(single_host_addr.ptr);
    return Relay.__wrap(ret);
  }
  static new_single_host_name(single_host_name) {
    _assertClass(single_host_name, SingleHostName);
    var ret = (void 0)(single_host_name.ptr);
    return Relay.__wrap(ret);
  }
  static new_multi_host_name(multi_host_name) {
    _assertClass(multi_host_name, MultiHostName);
    var ret = (void 0)(multi_host_name.ptr);
    return Relay.__wrap(ret);
  }
  kind() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  as_single_host_addr() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : SingleHostAddr.__wrap(ret);
  }
  as_single_host_name() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : SingleHostName.__wrap(ret);
  }
  as_multi_host_name() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : MultiHostName.__wrap(ret);
  }
};
var Relays = class {
  static __wrap(ptr) {
    const obj = Object.create(Relays.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Relays.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return Relays.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return Relay.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, Relay);
    (void 0)(this.ptr, elem.ptr);
  }
};
var RewardAddress = class {
  static __wrap(ptr) {
    const obj = Object.create(RewardAddress.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static new(network, payment) {
    _assertClass(payment, StakeCredential);
    var ret = (void 0)(network, payment.ptr);
    return RewardAddress.__wrap(ret);
  }
  payment_cred() {
    var ret = (void 0)(this.ptr);
    return StakeCredential.__wrap(ret);
  }
  to_address() {
    var ret = (void 0)(this.ptr);
    return Address.__wrap(ret);
  }
  static from_address(addr) {
    _assertClass(addr, Address);
    var ret = (void 0)(addr.ptr);
    return ret === 0 ? void 0 : RewardAddress.__wrap(ret);
  }
};
var RewardAddresses = class {
  static __wrap(ptr) {
    const obj = Object.create(RewardAddresses.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return RewardAddresses.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return RewardAddresses.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return RewardAddress.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, RewardAddress);
    (void 0)(this.ptr, elem.ptr);
  }
};
var ScriptAll = class {
  static __wrap(ptr) {
    const obj = Object.create(ScriptAll.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ScriptAll.__wrap(ret);
  }
  native_scripts() {
    var ret = (void 0)(this.ptr);
    return NativeScripts.__wrap(ret);
  }
  static new(native_scripts) {
    _assertClass(native_scripts, NativeScripts);
    var ret = (void 0)(native_scripts.ptr);
    return ScriptAll.__wrap(ret);
  }
};
var ScriptAny = class {
  static __wrap(ptr) {
    const obj = Object.create(ScriptAny.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ScriptAny.__wrap(ret);
  }
  native_scripts() {
    var ret = (void 0)(this.ptr);
    return NativeScripts.__wrap(ret);
  }
  static new(native_scripts) {
    _assertClass(native_scripts, NativeScripts);
    var ret = (void 0)(native_scripts.ptr);
    return ScriptAny.__wrap(ret);
  }
};
var ScriptDataHash = class {
  static __wrap(ptr) {
    const obj = Object.create(ScriptDataHash.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  to_bech32(prefix) {
    try {
      const retptr = (void 0)(-16);
      var ptr0 = passStringToWasm0(prefix, void 0, void 0);
      var len0 = WASM_VECTOR_LEN;
      (void 0)(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bech32(bech_str) {
    var ptr0 = passStringToWasm0(bech_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ScriptDataHash.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ScriptDataHash.__wrap(ret);
  }
};
var ScriptHash = class {
  static __wrap(ptr) {
    const obj = Object.create(ScriptHash.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  to_bech32(prefix) {
    try {
      const retptr = (void 0)(-16);
      var ptr0 = passStringToWasm0(prefix, void 0, void 0);
      var len0 = WASM_VECTOR_LEN;
      (void 0)(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bech32(bech_str) {
    var ptr0 = passStringToWasm0(bech_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ScriptHash.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ScriptHash.__wrap(ret);
  }
};
var ScriptHashes = class {
  static __wrap(ptr) {
    const obj = Object.create(ScriptHashes.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ScriptHashes.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return ScriptHashes.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return ScriptHash.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, ScriptHash);
    (void 0)(this.ptr, elem.ptr);
  }
};
var ScriptNOfK = class {
  static __wrap(ptr) {
    const obj = Object.create(ScriptNOfK.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ScriptNOfK.__wrap(ret);
  }
  n() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  native_scripts() {
    var ret = (void 0)(this.ptr);
    return NativeScripts.__wrap(ret);
  }
  static new(n, native_scripts) {
    _assertClass(native_scripts, NativeScripts);
    var ret = (void 0)(n, native_scripts.ptr);
    return ScriptNOfK.__wrap(ret);
  }
};
var ScriptPubkey = class {
  static __wrap(ptr) {
    const obj = Object.create(ScriptPubkey.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return ScriptPubkey.__wrap(ret);
  }
  addr_keyhash() {
    var ret = (void 0)(this.ptr);
    return Ed25519KeyHash.__wrap(ret);
  }
  static new(addr_keyhash) {
    _assertClass(addr_keyhash, Ed25519KeyHash);
    var ret = (void 0)(addr_keyhash.ptr);
    return ScriptPubkey.__wrap(ret);
  }
};
var SingleHostAddr = class {
  static __wrap(ptr) {
    const obj = Object.create(SingleHostAddr.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return SingleHostAddr.__wrap(ret);
  }
  port() {
    var ret = (void 0)(this.ptr);
    return ret === 16777215 ? void 0 : ret;
  }
  ipv4() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : Ipv4.__wrap(ret);
  }
  ipv6() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : Ipv6.__wrap(ret);
  }
  static new(port, ipv4, ipv6) {
    let ptr0 = 0;
    if (!isLikeNone(ipv4)) {
      _assertClass(ipv4, Ipv4);
      ptr0 = ipv4.ptr;
      ipv4.ptr = 0;
    }
    let ptr1 = 0;
    if (!isLikeNone(ipv6)) {
      _assertClass(ipv6, Ipv6);
      ptr1 = ipv6.ptr;
      ipv6.ptr = 0;
    }
    var ret = (void 0)(isLikeNone(port) ? 16777215 : port, ptr0, ptr1);
    return SingleHostAddr.__wrap(ret);
  }
};
var SingleHostName = class {
  static __wrap(ptr) {
    const obj = Object.create(SingleHostName.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return SingleHostName.__wrap(ret);
  }
  port() {
    var ret = (void 0)(this.ptr);
    return ret === 16777215 ? void 0 : ret;
  }
  dns_name() {
    var ret = (void 0)(this.ptr);
    return DNSRecordAorAAAA.__wrap(ret);
  }
  static new(port, dns_name) {
    _assertClass(dns_name, DNSRecordAorAAAA);
    var ret = (void 0)(isLikeNone(port) ? 16777215 : port, dns_name.ptr);
    return SingleHostName.__wrap(ret);
  }
};
var StakeCredential = class {
  static __wrap(ptr) {
    const obj = Object.create(StakeCredential.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static from_keyhash(hash) {
    _assertClass(hash, Ed25519KeyHash);
    var ret = (void 0)(hash.ptr);
    return StakeCredential.__wrap(ret);
  }
  static from_scripthash(hash) {
    _assertClass(hash, ScriptHash);
    var ret = (void 0)(hash.ptr);
    return StakeCredential.__wrap(ret);
  }
  to_keyhash() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : Ed25519KeyHash.__wrap(ret);
  }
  to_scripthash() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : ScriptHash.__wrap(ret);
  }
  kind() {
    var ret = (void 0)(this.ptr);
    return ret;
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return StakeCredential.__wrap(ret);
  }
};
var StakeCredentials = class {
  static __wrap(ptr) {
    const obj = Object.create(StakeCredentials.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return StakeCredentials.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return StakeCredentials.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return StakeCredential.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, StakeCredential);
    (void 0)(this.ptr, elem.ptr);
  }
};
var StakeDelegation = class {
  static __wrap(ptr) {
    const obj = Object.create(StakeDelegation.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return StakeDelegation.__wrap(ret);
  }
  stake_credential() {
    var ret = (void 0)(this.ptr);
    return StakeCredential.__wrap(ret);
  }
  pool_keyhash() {
    var ret = (void 0)(this.ptr);
    return Ed25519KeyHash.__wrap(ret);
  }
  static new(stake_credential, pool_keyhash) {
    _assertClass(stake_credential, StakeCredential);
    _assertClass(pool_keyhash, Ed25519KeyHash);
    var ret = (void 0)(stake_credential.ptr, pool_keyhash.ptr);
    return StakeDelegation.__wrap(ret);
  }
};
var StakeDeregistration = class {
  static __wrap(ptr) {
    const obj = Object.create(StakeDeregistration.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return StakeDeregistration.__wrap(ret);
  }
  stake_credential() {
    var ret = (void 0)(this.ptr);
    return StakeCredential.__wrap(ret);
  }
  static new(stake_credential) {
    _assertClass(stake_credential, StakeCredential);
    var ret = (void 0)(stake_credential.ptr);
    return StakeDeregistration.__wrap(ret);
  }
};
var StakeRegistration = class {
  static __wrap(ptr) {
    const obj = Object.create(StakeRegistration.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return StakeRegistration.__wrap(ret);
  }
  stake_credential() {
    var ret = (void 0)(this.ptr);
    return StakeCredential.__wrap(ret);
  }
  static new(stake_credential) {
    _assertClass(stake_credential, StakeCredential);
    var ret = (void 0)(stake_credential.ptr);
    return StakeRegistration.__wrap(ret);
  }
};
var Strings = class {
  static __wrap(ptr) {
    const obj = Object.create(Strings.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static new() {
    var ret = (void 0)();
    return Strings.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr, index);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  add(elem) {
    var ptr0 = passStringToWasm0(elem, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    (void 0)(this.ptr, ptr0, len0);
  }
};
var TimelockExpiry = class {
  static __wrap(ptr) {
    const obj = Object.create(TimelockExpiry.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TimelockExpiry.__wrap(ret);
  }
  slot() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  static new(slot) {
    var ret = (void 0)(slot);
    return TimelockExpiry.__wrap(ret);
  }
};
var TimelockStart = class {
  static __wrap(ptr) {
    const obj = Object.create(TimelockStart.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TimelockStart.__wrap(ret);
  }
  slot() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  static new(slot) {
    var ret = (void 0)(slot);
    return TimelockStart.__wrap(ret);
  }
};
var Transaction = class {
  static __wrap(ptr) {
    const obj = Object.create(Transaction.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Transaction.__wrap(ret);
  }
  body() {
    var ret = (void 0)(this.ptr);
    return TransactionBody.__wrap(ret);
  }
  witness_set() {
    var ret = (void 0)(this.ptr);
    return TransactionWitnessSet.__wrap(ret);
  }
  is_valid() {
    var ret = (void 0)(this.ptr);
    return ret !== 0;
  }
  auxiliary_data() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : AuxiliaryData.__wrap(ret);
  }
  set_is_valid(valid) {
    (void 0)(this.ptr, valid);
  }
  static new(body, witness_set, auxiliary_data) {
    _assertClass(body, TransactionBody);
    _assertClass(witness_set, TransactionWitnessSet);
    let ptr0 = 0;
    if (!isLikeNone(auxiliary_data)) {
      _assertClass(auxiliary_data, AuxiliaryData);
      ptr0 = auxiliary_data.ptr;
      auxiliary_data.ptr = 0;
    }
    var ret = (void 0)(body.ptr, witness_set.ptr, ptr0);
    return Transaction.__wrap(ret);
  }
};
var TransactionBodies = class {
  static __wrap(ptr) {
    const obj = Object.create(TransactionBodies.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TransactionBodies.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return TransactionBodies.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return TransactionBody.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, TransactionBody);
    (void 0)(this.ptr, elem.ptr);
  }
};
var TransactionBody = class {
  static __wrap(ptr) {
    const obj = Object.create(TransactionBody.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TransactionBody.__wrap(ret);
  }
  inputs() {
    var ret = (void 0)(this.ptr);
    return TransactionInputs.__wrap(ret);
  }
  outputs() {
    var ret = (void 0)(this.ptr);
    return TransactionOutputs.__wrap(ret);
  }
  fee() {
    var ret = (void 0)(this.ptr);
    return BigNum.__wrap(ret);
  }
  ttl() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      (void 0)(16);
    }
  }
  set_certs(certs) {
    _assertClass(certs, Certificates);
    (void 0)(this.ptr, certs.ptr);
  }
  certs() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : Certificates.__wrap(ret);
  }
  set_withdrawals(withdrawals) {
    _assertClass(withdrawals, Withdrawals);
    (void 0)(this.ptr, withdrawals.ptr);
  }
  withdrawals() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : Withdrawals.__wrap(ret);
  }
  set_update(update) {
    _assertClass(update, Update);
    (void 0)(this.ptr, update.ptr);
  }
  update() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : Update.__wrap(ret);
  }
  set_auxiliary_data_hash(auxiliary_data_hash) {
    _assertClass(auxiliary_data_hash, AuxiliaryDataHash);
    (void 0)(this.ptr, auxiliary_data_hash.ptr);
  }
  auxiliary_data_hash() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : AuxiliaryDataHash.__wrap(ret);
  }
  set_validity_start_interval(validity_start_interval) {
    (void 0)(this.ptr, validity_start_interval);
  }
  validity_start_interval() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      (void 0)(16);
    }
  }
  set_mint(mint) {
    _assertClass(mint, Mint);
    (void 0)(this.ptr, mint.ptr);
  }
  multiassets() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : Mint.__wrap(ret);
  }
  set_script_data_hash(script_data_hash) {
    _assertClass(script_data_hash, ScriptDataHash);
    (void 0)(this.ptr, script_data_hash.ptr);
  }
  script_data_hash() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : ScriptDataHash.__wrap(ret);
  }
  set_collateral(collateral) {
    _assertClass(collateral, TransactionInputs);
    (void 0)(this.ptr, collateral.ptr);
  }
  collateral() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : TransactionInputs.__wrap(ret);
  }
  set_required_signers(required_signers) {
    _assertClass(required_signers, Ed25519KeyHashes);
    (void 0)(this.ptr, required_signers.ptr);
  }
  required_signers() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : Ed25519KeyHashes.__wrap(ret);
  }
  set_network_id(network_id) {
    _assertClass(network_id, NetworkId);
    (void 0)(this.ptr, network_id.ptr);
  }
  network_id() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : NetworkId.__wrap(ret);
  }
  static new(inputs, outputs, fee, ttl) {
    _assertClass(inputs, TransactionInputs);
    _assertClass(outputs, TransactionOutputs);
    _assertClass(fee, BigNum);
    var ret = (void 0)(inputs.ptr, outputs.ptr, fee.ptr, !isLikeNone(ttl), isLikeNone(ttl) ? 0 : ttl);
    return TransactionBody.__wrap(ret);
  }
};
var TransactionBuilder = class {
  static __wrap(ptr) {
    const obj = Object.create(TransactionBuilder.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  add_key_input(hash, input, amount) {
    _assertClass(hash, Ed25519KeyHash);
    _assertClass(input, TransactionInput);
    _assertClass(amount, Value);
    (void 0)(this.ptr, hash.ptr, input.ptr, amount.ptr);
  }
  add_script_input(hash, input, amount) {
    _assertClass(hash, ScriptHash);
    _assertClass(input, TransactionInput);
    _assertClass(amount, Value);
    (void 0)(this.ptr, hash.ptr, input.ptr, amount.ptr);
  }
  add_bootstrap_input(hash, input, amount) {
    _assertClass(hash, ByronAddress);
    _assertClass(input, TransactionInput);
    _assertClass(amount, Value);
    (void 0)(this.ptr, hash.ptr, input.ptr, amount.ptr);
  }
  add_input(address, input, amount) {
    _assertClass(address, Address);
    _assertClass(input, TransactionInput);
    _assertClass(amount, Value);
    (void 0)(this.ptr, address.ptr, input.ptr, amount.ptr);
  }
  fee_for_input(address, input, amount) {
    _assertClass(address, Address);
    _assertClass(input, TransactionInput);
    _assertClass(amount, Value);
    var ret = (void 0)(this.ptr, address.ptr, input.ptr, amount.ptr);
    return BigNum.__wrap(ret);
  }
  add_output(output) {
    _assertClass(output, TransactionOutput);
    (void 0)(this.ptr, output.ptr);
  }
  fee_for_output(output) {
    _assertClass(output, TransactionOutput);
    var ret = (void 0)(this.ptr, output.ptr);
    return BigNum.__wrap(ret);
  }
  set_fee(fee) {
    _assertClass(fee, BigNum);
    (void 0)(this.ptr, fee.ptr);
  }
  set_ttl(ttl) {
    (void 0)(this.ptr, ttl);
  }
  set_validity_start_interval(validity_start_interval) {
    (void 0)(this.ptr, validity_start_interval);
  }
  set_certs(certs) {
    _assertClass(certs, Certificates);
    (void 0)(this.ptr, certs.ptr);
  }
  set_withdrawals(withdrawals) {
    _assertClass(withdrawals, Withdrawals);
    (void 0)(this.ptr, withdrawals.ptr);
  }
  set_auxiliary_data(auxiliary_data) {
    _assertClass(auxiliary_data, AuxiliaryData);
    (void 0)(this.ptr, auxiliary_data.ptr);
  }
  static new(linear_fee, minimum_utxo_val, pool_deposit, key_deposit, max_value_size, max_tx_size) {
    _assertClass(linear_fee, LinearFee);
    _assertClass(minimum_utxo_val, BigNum);
    _assertClass(pool_deposit, BigNum);
    _assertClass(key_deposit, BigNum);
    var ret = (void 0)(linear_fee.ptr, minimum_utxo_val.ptr, pool_deposit.ptr, key_deposit.ptr, max_value_size, max_tx_size);
    return TransactionBuilder.__wrap(ret);
  }
  get_explicit_input() {
    var ret = (void 0)(this.ptr);
    return Value.__wrap(ret);
  }
  get_implicit_input() {
    var ret = (void 0)(this.ptr);
    return Value.__wrap(ret);
  }
  get_explicit_output() {
    var ret = (void 0)(this.ptr);
    return Value.__wrap(ret);
  }
  get_deposit() {
    var ret = (void 0)(this.ptr);
    return BigNum.__wrap(ret);
  }
  get_fee_if_set() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : BigNum.__wrap(ret);
  }
  add_change_if_needed(address) {
    _assertClass(address, Address);
    var ret = (void 0)(this.ptr, address.ptr);
    return ret !== 0;
  }
  full_size() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  output_sizes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU32FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 4);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  build() {
    var ret = (void 0)(this.ptr);
    return TransactionBody.__wrap(ret);
  }
  min_fee() {
    var ret = (void 0)(this.ptr);
    return BigNum.__wrap(ret);
  }
};
var TransactionHash = class {
  static __wrap(ptr) {
    const obj = Object.create(TransactionHash.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  to_bech32(prefix) {
    try {
      const retptr = (void 0)(-16);
      var ptr0 = passStringToWasm0(prefix, void 0, void 0);
      var len0 = WASM_VECTOR_LEN;
      (void 0)(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bech32(bech_str) {
    var ptr0 = passStringToWasm0(bech_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TransactionHash.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TransactionHash.__wrap(ret);
  }
};
var TransactionInput = class {
  static __wrap(ptr) {
    const obj = Object.create(TransactionInput.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TransactionInput.__wrap(ret);
  }
  transaction_id() {
    var ret = (void 0)(this.ptr);
    return TransactionHash.__wrap(ret);
  }
  index() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  static new(transaction_id, index) {
    _assertClass(transaction_id, TransactionHash);
    var ret = (void 0)(transaction_id.ptr, index);
    return TransactionInput.__wrap(ret);
  }
};
var TransactionInputs = class {
  static __wrap(ptr) {
    const obj = Object.create(TransactionInputs.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TransactionInputs.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return TransactionInputs.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return TransactionInput.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, TransactionInput);
    (void 0)(this.ptr, elem.ptr);
  }
};
var TransactionMetadatum = class {
  static __wrap(ptr) {
    const obj = Object.create(TransactionMetadatum.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TransactionMetadatum.__wrap(ret);
  }
  static new_map(map) {
    _assertClass(map, MetadataMap);
    var ret = (void 0)(map.ptr);
    return TransactionMetadatum.__wrap(ret);
  }
  static new_list(list) {
    _assertClass(list, MetadataList);
    var ret = (void 0)(list.ptr);
    return TransactionMetadatum.__wrap(ret);
  }
  static new_int(int) {
    _assertClass(int, Int);
    var ret = (void 0)(int.ptr);
    return TransactionMetadatum.__wrap(ret);
  }
  static new_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TransactionMetadatum.__wrap(ret);
  }
  static new_text(text) {
    var ptr0 = passStringToWasm0(text, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TransactionMetadatum.__wrap(ret);
  }
  kind() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  as_map() {
    var ret = (void 0)(this.ptr);
    return MetadataMap.__wrap(ret);
  }
  as_list() {
    var ret = (void 0)(this.ptr);
    return MetadataList.__wrap(ret);
  }
  as_int() {
    var ret = (void 0)(this.ptr);
    return Int.__wrap(ret);
  }
  as_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  as_text() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
};
var TransactionMetadatumLabels = class {
  static __wrap(ptr) {
    const obj = Object.create(TransactionMetadatumLabels.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TransactionMetadatumLabels.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return TransactionMetadatumLabels.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return BigNum.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, BigNum);
    (void 0)(this.ptr, elem.ptr);
  }
};
var TransactionOutput = class {
  static __wrap(ptr) {
    const obj = Object.create(TransactionOutput.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TransactionOutput.__wrap(ret);
  }
  address() {
    var ret = (void 0)(this.ptr);
    return Address.__wrap(ret);
  }
  amount() {
    var ret = (void 0)(this.ptr);
    return Value.__wrap(ret);
  }
  data_hash() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : DataHash.__wrap(ret);
  }
  set_data_hash(data_hash) {
    _assertClass(data_hash, DataHash);
    (void 0)(this.ptr, data_hash.ptr);
  }
  static new(address, amount) {
    _assertClass(address, Address);
    _assertClass(amount, Value);
    var ret = (void 0)(address.ptr, amount.ptr);
    return TransactionOutput.__wrap(ret);
  }
};
var TransactionOutputs = class {
  static __wrap(ptr) {
    const obj = Object.create(TransactionOutputs.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TransactionOutputs.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return TransactionOutputs.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return TransactionOutput.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, TransactionOutput);
    (void 0)(this.ptr, elem.ptr);
  }
};
var TransactionUnspentOutput = class {
  static __wrap(ptr) {
    const obj = Object.create(TransactionUnspentOutput.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TransactionUnspentOutput.__wrap(ret);
  }
  static new(input, output) {
    _assertClass(input, TransactionInput);
    _assertClass(output, TransactionOutput);
    var ret = (void 0)(input.ptr, output.ptr);
    return TransactionUnspentOutput.__wrap(ret);
  }
  input() {
    var ret = (void 0)(this.ptr);
    return TransactionInput.__wrap(ret);
  }
  output() {
    var ret = (void 0)(this.ptr);
    return TransactionOutput.__wrap(ret);
  }
};
var TransactionWitnessSet = class {
  static __wrap(ptr) {
    const obj = Object.create(TransactionWitnessSet.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TransactionWitnessSet.__wrap(ret);
  }
  set_vkeys(vkeys) {
    _assertClass(vkeys, Vkeywitnesses);
    (void 0)(this.ptr, vkeys.ptr);
  }
  vkeys() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : Vkeywitnesses.__wrap(ret);
  }
  set_native_scripts(native_scripts) {
    _assertClass(native_scripts, NativeScripts);
    (void 0)(this.ptr, native_scripts.ptr);
  }
  native_scripts() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : NativeScripts.__wrap(ret);
  }
  set_bootstraps(bootstraps) {
    _assertClass(bootstraps, BootstrapWitnesses);
    (void 0)(this.ptr, bootstraps.ptr);
  }
  bootstraps() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : BootstrapWitnesses.__wrap(ret);
  }
  set_plutus_scripts(plutus_scripts) {
    _assertClass(plutus_scripts, PlutusScripts);
    (void 0)(this.ptr, plutus_scripts.ptr);
  }
  plutus_scripts() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : PlutusScripts.__wrap(ret);
  }
  set_plutus_data(plutus_data) {
    _assertClass(plutus_data, PlutusList);
    (void 0)(this.ptr, plutus_data.ptr);
  }
  plutus_data() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : PlutusList.__wrap(ret);
  }
  set_redeemers(redeemers) {
    _assertClass(redeemers, Redeemers);
    (void 0)(this.ptr, redeemers.ptr);
  }
  redeemers() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : Redeemers.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return TransactionWitnessSet.__wrap(ret);
  }
};
var TransactionWitnessSets = class {
  static __wrap(ptr) {
    const obj = Object.create(TransactionWitnessSets.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return TransactionWitnessSets.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return TransactionWitnessSets.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return TransactionWitnessSet.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, TransactionWitnessSet);
    (void 0)(this.ptr, elem.ptr);
  }
};
var URL = class {
  static __wrap(ptr) {
    const obj = Object.create(URL.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return URL.__wrap(ret);
  }
  static new(url) {
    var ptr0 = passStringToWasm0(url, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return URL.__wrap(ret);
  }
  url() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
};
var UnitInterval = class {
  static __wrap(ptr) {
    const obj = Object.create(UnitInterval.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return UnitInterval.__wrap(ret);
  }
  numerator() {
    var ret = (void 0)(this.ptr);
    return BigNum.__wrap(ret);
  }
  denominator() {
    var ret = (void 0)(this.ptr);
    return BigNum.__wrap(ret);
  }
  static new(numerator, denominator) {
    _assertClass(numerator, BigNum);
    _assertClass(denominator, BigNum);
    var ret = (void 0)(numerator.ptr, denominator.ptr);
    return UnitInterval.__wrap(ret);
  }
};
var Update = class {
  static __wrap(ptr) {
    const obj = Object.create(Update.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Update.__wrap(ret);
  }
  proposed_protocol_parameter_updates() {
    var ret = (void 0)(this.ptr);
    return ProposedProtocolParameterUpdates.__wrap(ret);
  }
  epoch() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  static new(proposed_protocol_parameter_updates, epoch) {
    _assertClass(proposed_protocol_parameter_updates, ProposedProtocolParameterUpdates);
    var ret = (void 0)(proposed_protocol_parameter_updates.ptr, epoch);
    return Update.__wrap(ret);
  }
};
var VRFCert = class {
  static __wrap(ptr) {
    const obj = Object.create(VRFCert.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return VRFCert.__wrap(ret);
  }
  output() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  proof() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static new(output, proof) {
    var ptr0 = passArray8ToWasm0(output, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passArray8ToWasm0(proof, void 0);
    var len1 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0, ptr1, len1);
    return VRFCert.__wrap(ret);
  }
};
var VRFKeyHash = class {
  static __wrap(ptr) {
    const obj = Object.create(VRFKeyHash.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  to_bech32(prefix) {
    try {
      const retptr = (void 0)(-16);
      var ptr0 = passStringToWasm0(prefix, void 0, void 0);
      var len0 = WASM_VECTOR_LEN;
      (void 0)(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bech32(bech_str) {
    var ptr0 = passStringToWasm0(bech_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return VRFKeyHash.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return VRFKeyHash.__wrap(ret);
  }
};
var VRFVKey = class {
  static __wrap(ptr) {
    const obj = Object.create(VRFVKey.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  to_bech32(prefix) {
    try {
      const retptr = (void 0)(-16);
      var ptr0 = passStringToWasm0(prefix, void 0, void 0);
      var len0 = WASM_VECTOR_LEN;
      (void 0)(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      (void 0)(16);
      (void 0)(r0, r1);
    }
  }
  static from_bech32(bech_str) {
    var ptr0 = passStringToWasm0(bech_str, void 0, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return VRFVKey.__wrap(ret);
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return VRFVKey.__wrap(ret);
  }
};
var Value = class {
  static __wrap(ptr) {
    const obj = Object.create(Value.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Value.__wrap(ret);
  }
  static new(coin) {
    _assertClass(coin, BigNum);
    var ret = (void 0)(coin.ptr);
    return Value.__wrap(ret);
  }
  coin() {
    var ret = (void 0)(this.ptr);
    return BigNum.__wrap(ret);
  }
  set_coin(coin) {
    _assertClass(coin, BigNum);
    (void 0)(this.ptr, coin.ptr);
  }
  multiasset() {
    var ret = (void 0)(this.ptr);
    return ret === 0 ? void 0 : MultiAsset.__wrap(ret);
  }
  set_multiasset(multiasset) {
    _assertClass(multiasset, MultiAsset);
    (void 0)(this.ptr, multiasset.ptr);
  }
  checked_add(rhs) {
    _assertClass(rhs, Value);
    var ret = (void 0)(this.ptr, rhs.ptr);
    return Value.__wrap(ret);
  }
  checked_sub(rhs_value) {
    _assertClass(rhs_value, Value);
    var ret = (void 0)(this.ptr, rhs_value.ptr);
    return Value.__wrap(ret);
  }
  clamped_sub(rhs_value) {
    _assertClass(rhs_value, Value);
    var ret = (void 0)(this.ptr, rhs_value.ptr);
    return Value.__wrap(ret);
  }
  compare(rhs_value) {
    _assertClass(rhs_value, Value);
    var ret = (void 0)(this.ptr, rhs_value.ptr);
    return ret === 16777215 ? void 0 : ret;
  }
};
var Vkey = class {
  static __wrap(ptr) {
    const obj = Object.create(Vkey.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Vkey.__wrap(ret);
  }
  static new(pk) {
    _assertClass(pk, PublicKey);
    var ret = (void 0)(pk.ptr);
    return Vkey.__wrap(ret);
  }
  public_key() {
    var ret = (void 0)(this.ptr);
    return PublicKey.__wrap(ret);
  }
};
var Vkeys = class {
  static __wrap(ptr) {
    const obj = Object.create(Vkeys.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static new() {
    var ret = (void 0)();
    return Vkeys.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return Vkey.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, Vkey);
    (void 0)(this.ptr, elem.ptr);
  }
};
var Vkeywitness = class {
  static __wrap(ptr) {
    const obj = Object.create(Vkeywitness.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Vkeywitness.__wrap(ret);
  }
  static new(vkey, signature) {
    _assertClass(vkey, Vkey);
    _assertClass(signature, Ed25519Signature);
    var ret = (void 0)(vkey.ptr, signature.ptr);
    return Vkeywitness.__wrap(ret);
  }
  vkey() {
    var ret = (void 0)(this.ptr);
    return Vkey.__wrap(ret);
  }
  signature() {
    var ret = (void 0)(this.ptr);
    return Ed25519Signature.__wrap(ret);
  }
};
var Vkeywitnesses = class {
  static __wrap(ptr) {
    const obj = Object.create(Vkeywitnesses.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  static new() {
    var ret = (void 0)();
    return Vkeywitnesses.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  get(index) {
    var ret = (void 0)(this.ptr, index);
    return Vkeywitness.__wrap(ret);
  }
  add(elem) {
    _assertClass(elem, Vkeywitness);
    (void 0)(this.ptr, elem.ptr);
  }
};
var Withdrawals = class {
  static __wrap(ptr) {
    const obj = Object.create(Withdrawals.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    (void 0)(ptr);
  }
  to_bytes() {
    try {
      const retptr = (void 0)(-16);
      (void 0)(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v0 = getArrayU8FromWasm0(r0, r1).slice();
      (void 0)(r0, r1 * 1);
      return v0;
    } finally {
      (void 0)(16);
    }
  }
  static from_bytes(bytes) {
    var ptr0 = passArray8ToWasm0(bytes, void 0);
    var len0 = WASM_VECTOR_LEN;
    var ret = (void 0)(ptr0, len0);
    return Withdrawals.__wrap(ret);
  }
  static new() {
    var ret = (void 0)();
    return Withdrawals.__wrap(ret);
  }
  len() {
    var ret = (void 0)(this.ptr);
    return ret >>> 0;
  }
  insert(key, value) {
    _assertClass(key, RewardAddress);
    _assertClass(value, BigNum);
    var ret = (void 0)(this.ptr, key.ptr, value.ptr);
    return ret === 0 ? void 0 : BigNum.__wrap(ret);
  }
  get(key) {
    _assertClass(key, RewardAddress);
    var ret = (void 0)(this.ptr, key.ptr);
    return ret === 0 ? void 0 : BigNum.__wrap(ret);
  }
  keys() {
    var ret = (void 0)(this.ptr);
    return RewardAddresses.__wrap(ret);
  }
};
function __wbindgen_object_drop_ref(arg0) {
  takeObject(arg0);
}
function __wbindgen_string_new(arg0, arg1) {
  var ret = getStringFromWasm0(arg0, arg1);
  return addHeapObject(ret);
}
function __wbg_new_3a746f2619705add(arg0, arg1) {
  var ret = new Function(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
}
function __wbg_call_f54d3a6dadb199ca(arg0, arg1) {
  var ret = getObject(arg0).call(getObject(arg1));
  return addHeapObject(ret);
}
function __wbindgen_jsval_eq(arg0, arg1) {
  var ret = getObject(arg0) === getObject(arg1);
  return ret;
}
function __wbg_self_ac379e780a0d8b94(arg0) {
  var ret = getObject(arg0).self;
  return addHeapObject(ret);
}
function __wbg_crypto_1e4302b85d4f64a2(arg0) {
  var ret = getObject(arg0).crypto;
  return addHeapObject(ret);
}
function __wbindgen_is_undefined(arg0) {
  var ret = getObject(arg0) === void 0;
  return ret;
}
function __wbg_getRandomValues_1b4ba144162a5c9e(arg0) {
  var ret = getObject(arg0).getRandomValues;
  return addHeapObject(ret);
}
function __wbg_require_6461b1e9a0d7c34a(arg0, arg1) {
  var ret = __require(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
}
function __wbg_randomFillSync_1b52c8482374c55b(arg0, arg1, arg2) {
  getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
}
function __wbg_getRandomValues_1ef11e888e5228e9(arg0, arg1, arg2) {
  getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));
}
function __wbindgen_string_get(arg0, arg1) {
  const obj = getObject(arg1);
  var ret = typeof obj === "string" ? obj : void 0;
  var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, void 0, void 0);
  var len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}
function __wbindgen_debug_string(arg0, arg1) {
  var ret = debugString(getObject(arg1));
  var ptr0 = passStringToWasm0(ret, void 0, void 0);
  var len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}
function __wbindgen_throw(arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
}
function __wbindgen_rethrow(arg0) {
  throw takeObject(arg0);
}
export {
  Address,
  AssetName,
  AssetNames,
  Assets,
  AuxiliaryData,
  AuxiliaryDataHash,
  AuxiliaryDataSet,
  BaseAddress,
  BigInt,
  BigNum,
  Bip32PrivateKey,
  Bip32PublicKey,
  Block,
  BlockHash,
  BootstrapWitness,
  BootstrapWitnesses,
  ByronAddress,
  Certificate,
  CertificateKind,
  Certificates,
  ConstrPlutusData,
  CostModel,
  Costmdls,
  DNSRecordAorAAAA,
  DNSRecordSRV,
  DataHash,
  Ed25519KeyHash,
  Ed25519KeyHashes,
  Ed25519Signature,
  EnterpriseAddress,
  ExUnitPrices,
  ExUnits,
  GeneralTransactionMetadata,
  GenesisDelegateHash,
  GenesisHash,
  GenesisHashes,
  GenesisKeyDelegation,
  Header,
  HeaderBody,
  Int,
  Ipv4,
  Ipv6,
  KESSignature,
  KESVKey,
  Language,
  LanguageKind,
  Languages,
  LegacyDaedalusPrivateKey,
  LinearFee,
  MIRKind,
  MIRPot,
  MIRToStakeCredentials,
  MetadataJsonSchema,
  MetadataList,
  MetadataMap,
  Mint,
  MintAssets,
  MoveInstantaneousReward,
  MoveInstantaneousRewardsCert,
  MultiAsset,
  MultiHostName,
  NativeScript,
  NativeScriptKind,
  NativeScripts,
  NetworkId,
  NetworkIdKind,
  NetworkInfo,
  Nonce,
  OperationalCert,
  PlutusData,
  PlutusDataKind,
  PlutusList,
  PlutusMap,
  PlutusScript,
  PlutusScripts,
  Pointer,
  PointerAddress,
  PoolMetadata,
  PoolMetadataHash,
  PoolParams,
  PoolRegistration,
  PoolRetirement,
  PrivateKey,
  ProposedProtocolParameterUpdates,
  ProtocolParamUpdate,
  ProtocolVersion,
  ProtocolVersions,
  PublicKey,
  PublicKeys,
  Redeemer,
  RedeemerTag,
  RedeemerTagKind,
  Redeemers,
  Relay,
  RelayKind,
  Relays,
  RewardAddress,
  RewardAddresses,
  ScriptAll,
  ScriptAny,
  ScriptDataHash,
  ScriptHash,
  ScriptHashNamespace,
  ScriptHashes,
  ScriptNOfK,
  ScriptPubkey,
  SingleHostAddr,
  SingleHostName,
  StakeCredential,
  StakeCredentials,
  StakeDelegation,
  StakeDeregistration,
  StakeRegistration,
  Strings,
  TimelockExpiry,
  TimelockStart,
  Transaction,
  TransactionBodies,
  TransactionBody,
  TransactionBuilder,
  TransactionHash,
  TransactionInput,
  TransactionInputs,
  TransactionMetadatum,
  TransactionMetadatumKind,
  TransactionMetadatumLabels,
  TransactionOutput,
  TransactionOutputs,
  TransactionUnspentOutput,
  TransactionWitnessSet,
  TransactionWitnessSets,
  URL,
  UnitInterval,
  Update,
  VRFCert,
  VRFKeyHash,
  VRFVKey,
  Value,
  Vkey,
  Vkeys,
  Vkeywitness,
  Vkeywitnesses,
  Withdrawals,
  __wbg_call_f54d3a6dadb199ca,
  __wbg_crypto_1e4302b85d4f64a2,
  __wbg_getRandomValues_1b4ba144162a5c9e,
  __wbg_getRandomValues_1ef11e888e5228e9,
  __wbg_new_3a746f2619705add,
  __wbg_randomFillSync_1b52c8482374c55b,
  __wbg_require_6461b1e9a0d7c34a,
  __wbg_self_ac379e780a0d8b94,
  __wbindgen_debug_string,
  __wbindgen_is_undefined,
  __wbindgen_jsval_eq,
  __wbindgen_object_drop_ref,
  __wbindgen_rethrow,
  __wbindgen_string_get,
  __wbindgen_string_new,
  __wbindgen_throw,
  decode_arbitrary_bytes_from_metadatum2 as decode_arbitrary_bytes_from_metadatum,
  decode_metadatum_to_json_str2 as decode_metadatum_to_json_str,
  decrypt_with_password2 as decrypt_with_password,
  encode_arbitrary_bytes_as_metadatum2 as encode_arbitrary_bytes_as_metadatum,
  encode_json_str_to_metadatum2 as encode_json_str_to_metadatum,
  encrypt_with_password2 as encrypt_with_password,
  get_deposit2 as get_deposit,
  get_implicit_input2 as get_implicit_input,
  hash_auxiliary_data2 as hash_auxiliary_data,
  hash_plutus_data2 as hash_plutus_data,
  hash_script_data2 as hash_script_data,
  hash_transaction2 as hash_transaction,
  make_daedalus_bootstrap_witness2 as make_daedalus_bootstrap_witness,
  make_icarus_bootstrap_witness2 as make_icarus_bootstrap_witness,
  make_vkey_witness2 as make_vkey_witness,
  min_ada_required2 as min_ada_required,
  min_fee2 as min_fee
};
//# sourceMappingURL=cardano_serialization_lib-PY4TGO3L.js.map
