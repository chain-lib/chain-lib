import {
  API,
  Blockfrost,
  CARDANO_WALLET,
  Spend,
  Store
} from "./chunk-6X75HALP.js";
import {
  __commonJS,
  __publicField,
  __spreadProps,
  __spreadValues,
  __toModule
} from "./chunk-QWVXNI2C.js";

// node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/tslib/tslib.js"(exports, module) {
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate6;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __createBinding2;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v2) {
          return exports2[id] = previous ? previous(id, v2) : v2;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p2))
            d2[p2] = b2[p2];
      };
      __extends2 = function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign2 = Object.assign || function(t5) {
        for (var s5, i7 = 1, n6 = arguments.length; i7 < n6; i7++) {
          s5 = arguments[i7];
          for (var p2 in s5)
            if (Object.prototype.hasOwnProperty.call(s5, p2))
              t5[p2] = s5[p2];
        }
        return t5;
      };
      __rest2 = function(s5, e8) {
        var t5 = {};
        for (var p2 in s5)
          if (Object.prototype.hasOwnProperty.call(s5, p2) && e8.indexOf(p2) < 0)
            t5[p2] = s5[p2];
        if (s5 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i7 = 0, p2 = Object.getOwnPropertySymbols(s5); i7 < p2.length; i7++) {
            if (e8.indexOf(p2[i7]) < 0 && Object.prototype.propertyIsEnumerable.call(s5, p2[i7]))
              t5[p2[i7]] = s5[p2[i7]];
          }
        return t5;
      };
      __decorate6 = function(decorators, target, key, desc) {
        var c2 = arguments.length, r4 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r4 = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i7 = decorators.length - 1; i7 >= 0; i7--)
            if (d2 = decorators[i7])
              r4 = (c2 < 3 ? d2(r4) : c2 > 3 ? d2(target, key, r4) : d2(target, key)) || r4;
        return c2 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e8) {
              reject(e8);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e8) {
              reject(e8);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _2 = { label: 0, sent: function() {
          if (t5[0] & 1)
            throw t5[1];
          return t5[1];
        }, trys: [], ops: [] }, f2, y2, t5, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n6) {
          return function(v2) {
            return step([n6, v2]);
          };
        }
        function step(op) {
          if (f2)
            throw new TypeError("Generator is already executing.");
          while (_2)
            try {
              if (f2 = 1, y2 && (t5 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t5 = y2["return"]) && t5.call(y2), 0) : y2.next) && !(t5 = t5.call(y2, op[1])).done)
                return t5;
              if (y2 = 0, t5)
                op = [op[0] & 2, t5.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t5 = op;
                  break;
                case 4:
                  _2.label++;
                  return { value: op[1], done: false };
                case 5:
                  _2.label++;
                  y2 = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _2.ops.pop();
                  _2.trys.pop();
                  continue;
                default:
                  if (!(t5 = _2.trys, t5 = t5.length > 0 && t5[t5.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _2 = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t5 || op[1] > t5[0] && op[1] < t5[3])) {
                    _2.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _2.label < t5[1]) {
                    _2.label = t5[1];
                    t5 = op;
                    break;
                  }
                  if (t5 && _2.label < t5[2]) {
                    _2.label = t5[2];
                    _2.ops.push(op);
                    break;
                  }
                  if (t5[2])
                    _2.ops.pop();
                  _2.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _2);
            } catch (e8) {
              op = [6, e8];
              y2 = 0;
            } finally {
              f2 = t5 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m2, o7) {
        for (var p2 in m2)
          if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(o7, p2))
            __createBinding2(o7, m2, p2);
      };
      __createBinding2 = Object.create ? function(o7, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        Object.defineProperty(o7, k22, { enumerable: true, get: function() {
          return m2[k2];
        } });
      } : function(o7, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o7[k22] = m2[k2];
      };
      __values2 = function(o7) {
        var s5 = typeof Symbol === "function" && Symbol.iterator, m2 = s5 && o7[s5], i7 = 0;
        if (m2)
          return m2.call(o7);
        if (o7 && typeof o7.length === "number")
          return {
            next: function() {
              if (o7 && i7 >= o7.length)
                o7 = void 0;
              return { value: o7 && o7[i7++], done: !o7 };
            }
          };
        throw new TypeError(s5 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o7, n6) {
        var m2 = typeof Symbol === "function" && o7[Symbol.iterator];
        if (!m2)
          return o7;
        var i7 = m2.call(o7), r4, ar = [], e8;
        try {
          while ((n6 === void 0 || n6-- > 0) && !(r4 = i7.next()).done)
            ar.push(r4.value);
        } catch (error) {
          e8 = { error };
        } finally {
          try {
            if (r4 && !r4.done && (m2 = i7["return"]))
              m2.call(i7);
          } finally {
            if (e8)
              throw e8.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i7 = 0; i7 < arguments.length; i7++)
          ar = ar.concat(__read2(arguments[i7]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s5 = 0, i7 = 0, il = arguments.length; i7 < il; i7++)
          s5 += arguments[i7].length;
        for (var r4 = Array(s5), k2 = 0, i7 = 0; i7 < il; i7++)
          for (var a3 = arguments[i7], j = 0, jl = a3.length; j < jl; j++, k2++)
            r4[k2] = a3[j];
        return r4;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i7 = 0, l5 = from.length, ar; i7 < l5; i7++) {
            if (ar || !(i7 in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i7);
              ar[i7] = from[i7];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await2 = function(v2) {
        return this instanceof __await2 ? (this.v = v2, this) : new __await2(v2);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g2 = generator.apply(thisArg, _arguments || []), i7, q = [];
        return i7 = {}, verb("next"), verb("throw"), verb("return"), i7[Symbol.asyncIterator] = function() {
          return this;
        }, i7;
        function verb(n6) {
          if (g2[n6])
            i7[n6] = function(v2) {
              return new Promise(function(a3, b2) {
                q.push([n6, v2, a3, b2]) > 1 || resume(n6, v2);
              });
            };
        }
        function resume(n6, v2) {
          try {
            step(g2[n6](v2));
          } catch (e8) {
            settle(q[0][3], e8);
          }
        }
        function step(r4) {
          r4.value instanceof __await2 ? Promise.resolve(r4.value.v).then(fulfill, reject) : settle(q[0][2], r4);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f2, v2) {
          if (f2(v2), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o7) {
        var i7, p2;
        return i7 = {}, verb("next"), verb("throw", function(e8) {
          throw e8;
        }), verb("return"), i7[Symbol.iterator] = function() {
          return this;
        }, i7;
        function verb(n6, f2) {
          i7[n6] = o7[n6] ? function(v2) {
            return (p2 = !p2) ? { value: __await2(o7[n6](v2)), done: n6 === "return" } : f2 ? f2(v2) : v2;
          } : f2;
        }
      };
      __asyncValues2 = function(o7) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m2 = o7[Symbol.asyncIterator], i7;
        return m2 ? m2.call(o7) : (o7 = typeof __values2 === "function" ? __values2(o7) : o7[Symbol.iterator](), i7 = {}, verb("next"), verb("throw"), verb("return"), i7[Symbol.asyncIterator] = function() {
          return this;
        }, i7);
        function verb(n6) {
          i7[n6] = o7[n6] && function(v2) {
            return new Promise(function(resolve, reject) {
              v2 = o7[n6](v2), settle(resolve, reject, v2.done, v2.value);
            });
          };
        }
        function settle(resolve, reject, d2, v2) {
          Promise.resolve(v2).then(function(v3) {
            resolve({ value: v3, done: d2 });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o7, v2) {
        Object.defineProperty(o7, "default", { enumerable: true, value: v2 });
      } : function(o7, v2) {
        o7["default"] = v2;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k2 in mod)
            if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
              __createBinding2(result, mod, k2);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f2) {
        if (kind === "a" && !f2)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f2) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f2)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate6);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
    });
  }
});

// node_modules/pwa-helpers/connect-mixin.js
var connect = (store) => (baseElement) => class extends baseElement {
  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    this._storeUnsubscribe = store.subscribe(() => this.stateChanged(store.getState()));
    this.stateChanged(store.getState());
  }
  disconnectedCallback() {
    this._storeUnsubscribe();
    if (super.disconnectedCallback) {
      super.disconnectedCallback();
    }
  }
  stateChanged(_state) {
  }
};

// node_modules/@lit/reactive-element/decorators/custom-element.js
var n = (n6) => (e8) => typeof e8 == "function" ? ((n7, e9) => (window.customElements.define(n7, e9), e9))(n6, e8) : ((n7, e9) => {
  const { kind: t5, elements: i7 } = e9;
  return { kind: t5, elements: i7, finisher(e10) {
    window.customElements.define(n7, e10);
  } };
})(n6, e8);

// node_modules/@lit/reactive-element/decorators/property.js
var i = (i7, e8) => e8.kind === "method" && e8.descriptor && !("value" in e8.descriptor) ? __spreadProps(__spreadValues({}, e8), { finisher(n6) {
  n6.createProperty(e8.key, i7);
} }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e8.key, initializer() {
  typeof e8.initializer == "function" && (this[e8.key] = e8.initializer.call(this));
}, finisher(n6) {
  n6.createProperty(e8.key, i7);
} };
function e(e8) {
  return (n6, t5) => t5 !== void 0 ? ((i7, e9, n7) => {
    e9.constructor.createProperty(n7, i7);
  })(e8, n6, t5) : i(e8, n6);
}

// node_modules/@lit/reactive-element/decorators/state.js
function t(t5) {
  return e(__spreadProps(__spreadValues({}, t5), { state: true }));
}

// node_modules/@lit/reactive-element/decorators/base.js
var o = ({ finisher: e8, descriptor: t5 }) => (o7, n6) => {
  var r4;
  if (n6 === void 0) {
    const n7 = (r4 = o7.originalKey) !== null && r4 !== void 0 ? r4 : o7.key, i7 = t5 != null ? { kind: "method", placement: "prototype", key: n7, descriptor: t5(o7.key) } : __spreadProps(__spreadValues({}, o7), { key: n7 });
    return e8 != null && (i7.finisher = function(t6) {
      e8(t6, n7);
    }), i7;
  }
  {
    const r5 = o7.constructor;
    t5 !== void 0 && Object.defineProperty(o7, n6, t5(n6)), e8 == null || e8(r5, n6);
  }
};

// node_modules/@lit/reactive-element/decorators/event-options.js
function e2(e8) {
  return o({ finisher: (r4, t5) => {
    Object.assign(r4.prototype[t5], e8);
  } });
}

// node_modules/@lit/reactive-element/decorators/query.js
function i2(i7, n6) {
  return o({ descriptor: (o7) => {
    const t5 = { get() {
      var o8, n7;
      return (n7 = (o8 = this.renderRoot) === null || o8 === void 0 ? void 0 : o8.querySelector(i7)) !== null && n7 !== void 0 ? n7 : null;
    }, enumerable: true, configurable: true };
    if (n6) {
      const n7 = typeof o7 == "symbol" ? Symbol() : "__" + o7;
      t5.get = function() {
        var o8, t6;
        return this[n7] === void 0 && (this[n7] = (t6 = (o8 = this.renderRoot) === null || o8 === void 0 ? void 0 : o8.querySelector(i7)) !== null && t6 !== void 0 ? t6 : null), this[n7];
      };
    }
    return t5;
  } });
}

// node_modules/@lit/reactive-element/decorators/query-async.js
function e3(e8) {
  return o({ descriptor: (r4) => ({ async get() {
    var r5;
    return await this.updateComplete, (r5 = this.renderRoot) === null || r5 === void 0 ? void 0 : r5.querySelector(e8);
  }, enumerable: true, configurable: true }) });
}

// node_modules/tslib/modules/index.js
var import_tslib = __toModule(require_tslib());
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet
} = import_tslib.default;

// node_modules/@lit/reactive-element/css-tag.js
var t2 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var e4 = Symbol();
var n2 = new Map();
var s = class {
  constructor(t5, n6) {
    if (this._$cssResult$ = true, n6 !== e4)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t5;
  }
  get styleSheet() {
    let e8 = n2.get(this.cssText);
    return t2 && e8 === void 0 && (n2.set(this.cssText, e8 = new CSSStyleSheet()), e8.replaceSync(this.cssText)), e8;
  }
  toString() {
    return this.cssText;
  }
};
var o2 = (t5) => new s(typeof t5 == "string" ? t5 : t5 + "", e4);
var r = (t5, ...n6) => {
  const o7 = t5.length === 1 ? t5[0] : n6.reduce((e8, n7, s5) => e8 + ((t6) => {
    if (t6._$cssResult$ === true)
      return t6.cssText;
    if (typeof t6 == "number")
      return t6;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t6 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n7) + t5[s5 + 1], t5[0]);
  return new s(o7, e4);
};
var i3 = (e8, n6) => {
  t2 ? e8.adoptedStyleSheets = n6.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet) : n6.forEach((t5) => {
    const n7 = document.createElement("style"), s5 = window.litNonce;
    s5 !== void 0 && n7.setAttribute("nonce", s5), n7.textContent = t5.cssText, e8.appendChild(n7);
  });
};
var S = t2 ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
  let e8 = "";
  for (const n6 of t6.cssRules)
    e8 += n6.cssText;
  return o2(e8);
})(t5) : t5;

// node_modules/@lit/reactive-element/reactive-element.js
var s2;
var e5 = window.trustedTypes;
var r2 = e5 ? e5.emptyScript : "";
var h = window.reactiveElementPolyfillSupport;
var o3 = { toAttribute(t5, i7) {
  switch (i7) {
    case Boolean:
      t5 = t5 ? r2 : null;
      break;
    case Object:
    case Array:
      t5 = t5 == null ? t5 : JSON.stringify(t5);
  }
  return t5;
}, fromAttribute(t5, i7) {
  let s5 = t5;
  switch (i7) {
    case Boolean:
      s5 = t5 !== null;
      break;
    case Number:
      s5 = t5 === null ? null : Number(t5);
      break;
    case Object:
    case Array:
      try {
        s5 = JSON.parse(t5);
      } catch (t6) {
        s5 = null;
      }
  }
  return s5;
} };
var n3 = (t5, i7) => i7 !== t5 && (i7 == i7 || t5 == t5);
var l = { attribute: true, type: String, converter: o3, reflect: false, hasChanged: n3 };
var a = class extends HTMLElement {
  constructor() {
    super(), this._$Et = new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t5) {
    var i7;
    (i7 = this.l) !== null && i7 !== void 0 || (this.l = []), this.l.push(t5);
  }
  static get observedAttributes() {
    this.finalize();
    const t5 = [];
    return this.elementProperties.forEach((i7, s5) => {
      const e8 = this._$Eh(s5, i7);
      e8 !== void 0 && (this._$Eu.set(e8, s5), t5.push(e8));
    }), t5;
  }
  static createProperty(t5, i7 = l) {
    if (i7.state && (i7.attribute = false), this.finalize(), this.elementProperties.set(t5, i7), !i7.noAccessor && !this.prototype.hasOwnProperty(t5)) {
      const s5 = typeof t5 == "symbol" ? Symbol() : "__" + t5, e8 = this.getPropertyDescriptor(t5, s5, i7);
      e8 !== void 0 && Object.defineProperty(this.prototype, t5, e8);
    }
  }
  static getPropertyDescriptor(t5, i7, s5) {
    return { get() {
      return this[i7];
    }, set(e8) {
      const r4 = this[t5];
      this[i7] = e8, this.requestUpdate(t5, r4, s5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t5) {
    return this.elementProperties.get(t5) || l;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t5 = Object.getPrototypeOf(this);
    if (t5.finalize(), this.elementProperties = new Map(t5.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
      const t6 = this.properties, i7 = [...Object.getOwnPropertyNames(t6), ...Object.getOwnPropertySymbols(t6)];
      for (const s5 of i7)
        this.createProperty(s5, t6[s5]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i7) {
    const s5 = [];
    if (Array.isArray(i7)) {
      const e8 = new Set(i7.flat(1 / 0).reverse());
      for (const i8 of e8)
        s5.unshift(S(i8));
    } else
      i7 !== void 0 && s5.push(S(i7));
    return s5;
  }
  static _$Eh(t5, i7) {
    const s5 = i7.attribute;
    return s5 === false ? void 0 : typeof s5 == "string" ? s5 : typeof t5 == "string" ? t5.toLowerCase() : void 0;
  }
  o() {
    var t5;
    this._$Ep = new Promise((t6) => this.enableUpdating = t6), this._$AL = new Map(), this._$Em(), this.requestUpdate(), (t5 = this.constructor.l) === null || t5 === void 0 || t5.forEach((t6) => t6(this));
  }
  addController(t5) {
    var i7, s5;
    ((i7 = this._$Eg) !== null && i7 !== void 0 ? i7 : this._$Eg = []).push(t5), this.renderRoot !== void 0 && this.isConnected && ((s5 = t5.hostConnected) === null || s5 === void 0 || s5.call(t5));
  }
  removeController(t5) {
    var i7;
    (i7 = this._$Eg) === null || i7 === void 0 || i7.splice(this._$Eg.indexOf(t5) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t5, i7) => {
      this.hasOwnProperty(i7) && (this._$Et.set(i7, this[i7]), delete this[i7]);
    });
  }
  createRenderRoot() {
    var t5;
    const s5 = (t5 = this.shadowRoot) !== null && t5 !== void 0 ? t5 : this.attachShadow(this.constructor.shadowRootOptions);
    return i3(s5, this.constructor.elementStyles), s5;
  }
  connectedCallback() {
    var t5;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t5 = this._$Eg) === null || t5 === void 0 || t5.forEach((t6) => {
      var i7;
      return (i7 = t6.hostConnected) === null || i7 === void 0 ? void 0 : i7.call(t6);
    });
  }
  enableUpdating(t5) {
  }
  disconnectedCallback() {
    var t5;
    (t5 = this._$Eg) === null || t5 === void 0 || t5.forEach((t6) => {
      var i7;
      return (i7 = t6.hostDisconnected) === null || i7 === void 0 ? void 0 : i7.call(t6);
    });
  }
  attributeChangedCallback(t5, i7, s5) {
    this._$AK(t5, s5);
  }
  _$ES(t5, i7, s5 = l) {
    var e8, r4;
    const h3 = this.constructor._$Eh(t5, s5);
    if (h3 !== void 0 && s5.reflect === true) {
      const n6 = ((r4 = (e8 = s5.converter) === null || e8 === void 0 ? void 0 : e8.toAttribute) !== null && r4 !== void 0 ? r4 : o3.toAttribute)(i7, s5.type);
      this._$Ei = t5, n6 == null ? this.removeAttribute(h3) : this.setAttribute(h3, n6), this._$Ei = null;
    }
  }
  _$AK(t5, i7) {
    var s5, e8, r4;
    const h3 = this.constructor, n6 = h3._$Eu.get(t5);
    if (n6 !== void 0 && this._$Ei !== n6) {
      const t6 = h3.getPropertyOptions(n6), l5 = t6.converter, a3 = (r4 = (e8 = (s5 = l5) === null || s5 === void 0 ? void 0 : s5.fromAttribute) !== null && e8 !== void 0 ? e8 : typeof l5 == "function" ? l5 : null) !== null && r4 !== void 0 ? r4 : o3.fromAttribute;
      this._$Ei = n6, this[n6] = a3(i7, t6.type), this._$Ei = null;
    }
  }
  requestUpdate(t5, i7, s5) {
    let e8 = true;
    t5 !== void 0 && (((s5 = s5 || this.constructor.getPropertyOptions(t5)).hasChanged || n3)(this[t5], i7) ? (this._$AL.has(t5) || this._$AL.set(t5, i7), s5.reflect === true && this._$Ei !== t5 && (this._$E_ === void 0 && (this._$E_ = new Map()), this._$E_.set(t5, s5))) : e8 = false), !this.isUpdatePending && e8 && (this._$Ep = this._$EC());
  }
  async _$EC() {
    this.isUpdatePending = true;
    try {
      await this._$Ep;
    } catch (t6) {
      Promise.reject(t6);
    }
    const t5 = this.scheduleUpdate();
    return t5 != null && await t5, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t5;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t6, i8) => this[i8] = t6), this._$Et = void 0);
    let i7 = false;
    const s5 = this._$AL;
    try {
      i7 = this.shouldUpdate(s5), i7 ? (this.willUpdate(s5), (t5 = this._$Eg) === null || t5 === void 0 || t5.forEach((t6) => {
        var i8;
        return (i8 = t6.hostUpdate) === null || i8 === void 0 ? void 0 : i8.call(t6);
      }), this.update(s5)) : this._$EU();
    } catch (t6) {
      throw i7 = false, this._$EU(), t6;
    }
    i7 && this._$AE(s5);
  }
  willUpdate(t5) {
  }
  _$AE(t5) {
    var i7;
    (i7 = this._$Eg) === null || i7 === void 0 || i7.forEach((t6) => {
      var i8;
      return (i8 = t6.hostUpdated) === null || i8 === void 0 ? void 0 : i8.call(t6);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
  }
  _$EU() {
    this._$AL = new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t5) {
    return true;
  }
  update(t5) {
    this._$E_ !== void 0 && (this._$E_.forEach((t6, i7) => this._$ES(i7, this[i7], t6)), this._$E_ = void 0), this._$EU();
  }
  updated(t5) {
  }
  firstUpdated(t5) {
  }
};
a.finalized = true, a.elementProperties = new Map(), a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, h == null || h({ ReactiveElement: a }), ((s2 = globalThis.reactiveElementVersions) !== null && s2 !== void 0 ? s2 : globalThis.reactiveElementVersions = []).push("1.0.2");

// node_modules/lit-html/lit-html.js
var t3;
var i4 = globalThis.trustedTypes;
var s3 = i4 ? i4.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
var e6 = `lit$${(Math.random() + "").slice(9)}$`;
var o4 = "?" + e6;
var n4 = `<${o4}>`;
var l2 = document;
var h2 = (t5 = "") => l2.createComment(t5);
var r3 = (t5) => t5 === null || typeof t5 != "object" && typeof t5 != "function";
var d = Array.isArray;
var u = (t5) => {
  var i7;
  return d(t5) || typeof ((i7 = t5) === null || i7 === void 0 ? void 0 : i7[Symbol.iterator]) == "function";
};
var c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v = /-->/g;
var a2 = />/g;
var f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
var _ = /'/g;
var m = /"/g;
var g = /^(?:script|style|textarea)$/i;
var $ = (t5) => (i7, ...s5) => ({ _$litType$: t5, strings: i7, values: s5 });
var p = $(1);
var y = $(2);
var b = Symbol.for("lit-noChange");
var T = Symbol.for("lit-nothing");
var x = new WeakMap();
var w = (t5, i7, s5) => {
  var e8, o7;
  const n6 = (e8 = s5 == null ? void 0 : s5.renderBefore) !== null && e8 !== void 0 ? e8 : i7;
  let l5 = n6._$litPart$;
  if (l5 === void 0) {
    const t6 = (o7 = s5 == null ? void 0 : s5.renderBefore) !== null && o7 !== void 0 ? o7 : null;
    n6._$litPart$ = l5 = new N(i7.insertBefore(h2(), t6), t6, void 0, s5 != null ? s5 : {});
  }
  return l5._$AI(t5), l5;
};
var A = l2.createTreeWalker(l2, 129, null, false);
var C = (t5, i7) => {
  const o7 = t5.length - 1, l5 = [];
  let h3, r4 = i7 === 2 ? "<svg>" : "", d2 = c;
  for (let i8 = 0; i8 < o7; i8++) {
    const s5 = t5[i8];
    let o8, u3, $2 = -1, p2 = 0;
    for (; p2 < s5.length && (d2.lastIndex = p2, u3 = d2.exec(s5), u3 !== null); )
      p2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a2 : u3[2] !== void 0 ? (g.test(u3[2]) && (h3 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h3 != null ? h3 : c, $2 = -1) : u3[1] === void 0 ? $2 = -2 : ($2 = d2.lastIndex - u3[2].length, o8 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d2 === m || d2 === _ ? d2 = f : d2 === v || d2 === a2 ? d2 = c : (d2 = f, h3 = void 0);
    const y2 = d2 === f && t5[i8 + 1].startsWith("/>") ? " " : "";
    r4 += d2 === c ? s5 + n4 : $2 >= 0 ? (l5.push(o8), s5.slice(0, $2) + "$lit$" + s5.slice($2) + e6 + y2) : s5 + e6 + ($2 === -2 ? (l5.push(void 0), i8) : y2);
  }
  const u2 = r4 + (t5[o7] || "<?>") + (i7 === 2 ? "</svg>" : "");
  return [s3 !== void 0 ? s3.createHTML(u2) : u2, l5];
};
var P = class {
  constructor({ strings: t5, _$litType$: s5 }, n6) {
    let l5;
    this.parts = [];
    let r4 = 0, d2 = 0;
    const u2 = t5.length - 1, c2 = this.parts, [v2, a3] = C(t5, s5);
    if (this.el = P.createElement(v2, n6), A.currentNode = this.el.content, s5 === 2) {
      const t6 = this.el.content, i7 = t6.firstChild;
      i7.remove(), t6.append(...i7.childNodes);
    }
    for (; (l5 = A.nextNode()) !== null && c2.length < u2; ) {
      if (l5.nodeType === 1) {
        if (l5.hasAttributes()) {
          const t6 = [];
          for (const i7 of l5.getAttributeNames())
            if (i7.endsWith("$lit$") || i7.startsWith(e6)) {
              const s6 = a3[d2++];
              if (t6.push(i7), s6 !== void 0) {
                const t7 = l5.getAttribute(s6.toLowerCase() + "$lit$").split(e6), i8 = /([.?@])?(.*)/.exec(s6);
                c2.push({ type: 1, index: r4, name: i8[2], strings: t7, ctor: i8[1] === "." ? M : i8[1] === "?" ? H : i8[1] === "@" ? I : S2 });
              } else
                c2.push({ type: 6, index: r4 });
            }
          for (const i7 of t6)
            l5.removeAttribute(i7);
        }
        if (g.test(l5.tagName)) {
          const t6 = l5.textContent.split(e6), s6 = t6.length - 1;
          if (s6 > 0) {
            l5.textContent = i4 ? i4.emptyScript : "";
            for (let i7 = 0; i7 < s6; i7++)
              l5.append(t6[i7], h2()), A.nextNode(), c2.push({ type: 2, index: ++r4 });
            l5.append(t6[s6], h2());
          }
        }
      } else if (l5.nodeType === 8)
        if (l5.data === o4)
          c2.push({ type: 2, index: r4 });
        else {
          let t6 = -1;
          for (; (t6 = l5.data.indexOf(e6, t6 + 1)) !== -1; )
            c2.push({ type: 7, index: r4 }), t6 += e6.length - 1;
        }
      r4++;
    }
  }
  static createElement(t5, i7) {
    const s5 = l2.createElement("template");
    return s5.innerHTML = t5, s5;
  }
};
function V(t5, i7, s5 = t5, e8) {
  var o7, n6, l5, h3;
  if (i7 === b)
    return i7;
  let d2 = e8 !== void 0 ? (o7 = s5._$Cl) === null || o7 === void 0 ? void 0 : o7[e8] : s5._$Cu;
  const u2 = r3(i7) ? void 0 : i7._$litDirective$;
  return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n6 = d2 == null ? void 0 : d2._$AO) === null || n6 === void 0 || n6.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t5), d2._$AT(t5, s5, e8)), e8 !== void 0 ? ((l5 = (h3 = s5)._$Cl) !== null && l5 !== void 0 ? l5 : h3._$Cl = [])[e8] = d2 : s5._$Cu = d2), d2 !== void 0 && (i7 = V(t5, d2._$AS(t5, i7.values), d2, e8)), i7;
}
var E = class {
  constructor(t5, i7) {
    this.v = [], this._$AN = void 0, this._$AD = t5, this._$AM = i7;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t5) {
    var i7;
    const { el: { content: s5 }, parts: e8 } = this._$AD, o7 = ((i7 = t5 == null ? void 0 : t5.creationScope) !== null && i7 !== void 0 ? i7 : l2).importNode(s5, true);
    A.currentNode = o7;
    let n6 = A.nextNode(), h3 = 0, r4 = 0, d2 = e8[0];
    for (; d2 !== void 0; ) {
      if (h3 === d2.index) {
        let i8;
        d2.type === 2 ? i8 = new N(n6, n6.nextSibling, this, t5) : d2.type === 1 ? i8 = new d2.ctor(n6, d2.name, d2.strings, this, t5) : d2.type === 6 && (i8 = new L(n6, this, t5)), this.v.push(i8), d2 = e8[++r4];
      }
      h3 !== (d2 == null ? void 0 : d2.index) && (n6 = A.nextNode(), h3++);
    }
    return o7;
  }
  m(t5) {
    let i7 = 0;
    for (const s5 of this.v)
      s5 !== void 0 && (s5.strings !== void 0 ? (s5._$AI(t5, s5, i7), i7 += s5.strings.length - 2) : s5._$AI(t5[i7])), i7++;
  }
};
var N = class {
  constructor(t5, i7, s5, e8) {
    var o7;
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t5, this._$AB = i7, this._$AM = s5, this.options = e8, this._$Cg = (o7 = e8 == null ? void 0 : e8.isConnected) === null || o7 === void 0 || o7;
  }
  get _$AU() {
    var t5, i7;
    return (i7 = (t5 = this._$AM) === null || t5 === void 0 ? void 0 : t5._$AU) !== null && i7 !== void 0 ? i7 : this._$Cg;
  }
  get parentNode() {
    let t5 = this._$AA.parentNode;
    const i7 = this._$AM;
    return i7 !== void 0 && t5.nodeType === 11 && (t5 = i7.parentNode), t5;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t5, i7 = this) {
    t5 = V(this, t5, i7), r3(t5) ? t5 === T || t5 == null || t5 === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t5 !== this._$AH && t5 !== b && this.$(t5) : t5._$litType$ !== void 0 ? this.T(t5) : t5.nodeType !== void 0 ? this.S(t5) : u(t5) ? this.M(t5) : this.$(t5);
  }
  A(t5, i7 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t5, i7);
  }
  S(t5) {
    this._$AH !== t5 && (this._$AR(), this._$AH = this.A(t5));
  }
  $(t5) {
    this._$AH !== T && r3(this._$AH) ? this._$AA.nextSibling.data = t5 : this.S(l2.createTextNode(t5)), this._$AH = t5;
  }
  T(t5) {
    var i7;
    const { values: s5, _$litType$: e8 } = t5, o7 = typeof e8 == "number" ? this._$AC(t5) : (e8.el === void 0 && (e8.el = P.createElement(e8.h, this.options)), e8);
    if (((i7 = this._$AH) === null || i7 === void 0 ? void 0 : i7._$AD) === o7)
      this._$AH.m(s5);
    else {
      const t6 = new E(o7, this), i8 = t6.p(this.options);
      t6.m(s5), this.S(i8), this._$AH = t6;
    }
  }
  _$AC(t5) {
    let i7 = x.get(t5.strings);
    return i7 === void 0 && x.set(t5.strings, i7 = new P(t5)), i7;
  }
  M(t5) {
    d(this._$AH) || (this._$AH = [], this._$AR());
    const i7 = this._$AH;
    let s5, e8 = 0;
    for (const o7 of t5)
      e8 === i7.length ? i7.push(s5 = new N(this.A(h2()), this.A(h2()), this, this.options)) : s5 = i7[e8], s5._$AI(o7), e8++;
    e8 < i7.length && (this._$AR(s5 && s5._$AB.nextSibling, e8), i7.length = e8);
  }
  _$AR(t5 = this._$AA.nextSibling, i7) {
    var s5;
    for ((s5 = this._$AP) === null || s5 === void 0 || s5.call(this, false, true, i7); t5 && t5 !== this._$AB; ) {
      const i8 = t5.nextSibling;
      t5.remove(), t5 = i8;
    }
  }
  setConnected(t5) {
    var i7;
    this._$AM === void 0 && (this._$Cg = t5, (i7 = this._$AP) === null || i7 === void 0 || i7.call(this, t5));
  }
};
var S2 = class {
  constructor(t5, i7, s5, e8, o7) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t5, this.name = i7, this._$AM = e8, this.options = o7, s5.length > 2 || s5[0] !== "" || s5[1] !== "" ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = T;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t5, i7 = this, s5, e8) {
    const o7 = this.strings;
    let n6 = false;
    if (o7 === void 0)
      t5 = V(this, t5, i7, 0), n6 = !r3(t5) || t5 !== this._$AH && t5 !== b, n6 && (this._$AH = t5);
    else {
      const e9 = t5;
      let l5, h3;
      for (t5 = o7[0], l5 = 0; l5 < o7.length - 1; l5++)
        h3 = V(this, e9[s5 + l5], i7, l5), h3 === b && (h3 = this._$AH[l5]), n6 || (n6 = !r3(h3) || h3 !== this._$AH[l5]), h3 === T ? t5 = T : t5 !== T && (t5 += (h3 != null ? h3 : "") + o7[l5 + 1]), this._$AH[l5] = h3;
    }
    n6 && !e8 && this.k(t5);
  }
  k(t5) {
    t5 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t5 != null ? t5 : "");
  }
};
var M = class extends S2 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  k(t5) {
    this.element[this.name] = t5 === T ? void 0 : t5;
  }
};
var k = i4 ? i4.emptyScript : "";
var H = class extends S2 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  k(t5) {
    t5 && t5 !== T ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
  }
};
var I = class extends S2 {
  constructor(t5, i7, s5, e8, o7) {
    super(t5, i7, s5, e8, o7), this.type = 5;
  }
  _$AI(t5, i7 = this) {
    var s5;
    if ((t5 = (s5 = V(this, t5, i7, 0)) !== null && s5 !== void 0 ? s5 : T) === b)
      return;
    const e8 = this._$AH, o7 = t5 === T && e8 !== T || t5.capture !== e8.capture || t5.once !== e8.once || t5.passive !== e8.passive, n6 = t5 !== T && (e8 === T || o7);
    o7 && this.element.removeEventListener(this.name, this, e8), n6 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
  }
  handleEvent(t5) {
    var i7, s5;
    typeof this._$AH == "function" ? this._$AH.call((s5 = (i7 = this.options) === null || i7 === void 0 ? void 0 : i7.host) !== null && s5 !== void 0 ? s5 : this.element, t5) : this._$AH.handleEvent(t5);
  }
};
var L = class {
  constructor(t5, i7, s5) {
    this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i7, this.options = s5;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t5) {
    V(this, t5);
  }
};
var z = window.litHtmlPolyfillSupport;
z == null || z(P, N), ((t3 = globalThis.litHtmlVersions) !== null && t3 !== void 0 ? t3 : globalThis.litHtmlVersions = []).push("2.0.2");

// node_modules/lit-element/lit-element.js
var l3;
var o5;
var s4 = class extends a {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var t5, e8;
    const i7 = super.createRenderRoot();
    return (t5 = (e8 = this.renderOptions).renderBefore) !== null && t5 !== void 0 || (e8.renderBefore = i7.firstChild), i7;
  }
  update(t5) {
    const i7 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this._$Dt = w(i7, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t5;
    super.connectedCallback(), (t5 = this._$Dt) === null || t5 === void 0 || t5.setConnected(true);
  }
  disconnectedCallback() {
    var t5;
    super.disconnectedCallback(), (t5 = this._$Dt) === null || t5 === void 0 || t5.setConnected(false);
  }
  render() {
    return b;
  }
};
s4.finalized = true, s4._$litElement$ = true, (l3 = globalThis.litElementHydrateSupport) === null || l3 === void 0 || l3.call(globalThis, { LitElement: s4 });
var n5 = globalThis.litElementPolyfillSupport;
n5 == null || n5({ LitElement: s4 });
((o5 = globalThis.litElementVersions) !== null && o5 !== void 0 ? o5 : globalThis.litElementVersions = []).push("3.0.2");

// node_modules/@material/mwc-icon/mwc-icon-host.css.js
var styles = r`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;

// node_modules/@material/mwc-icon/mwc-icon.js
var Icon = class Icon2 extends s4 {
  render() {
    return p`<span><slot></slot></span>`;
  }
};
Icon.styles = [styles];
Icon = __decorate([
  n("mwc-icon")
], Icon);

// node_modules/@material/dom/ponyfill.js
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}

// node_modules/@material/mwc-base/utils.js
var supportsPassive = false;
var fn = () => {
};
var optionsBlock = {
  get passive() {
    supportsPassive = true;
    return false;
  }
};
document.addEventListener("x", fn, optionsBlock);
document.removeEventListener("x", fn);

// node_modules/@material/mwc-base/base-element.js
var BaseElement = class extends s4 {
  click() {
    if (this.mdcRoot) {
      this.mdcRoot.focus();
      this.mdcRoot.click();
      return;
    }
    super.click();
  }
  createFoundation() {
    if (this.mdcFoundation !== void 0) {
      this.mdcFoundation.destroy();
    }
    if (this.mdcFoundationClass) {
      this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
      this.mdcFoundation.init();
    }
  }
  firstUpdated() {
    this.createFoundation();
  }
};

// node_modules/@material/base/foundation.js
var MDCFoundation = function() {
  function MDCFoundation2(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }
    this.adapter = adapter;
  }
  Object.defineProperty(MDCFoundation2, "cssClasses", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "strings", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "numbers", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "defaultAdapter", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  MDCFoundation2.prototype.init = function() {
  };
  MDCFoundation2.prototype.destroy = function() {
  };
  return MDCFoundation2;
}();

// node_modules/@material/ripple/constants.js
var cssClasses = {
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
};
var strings = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};

// node_modules/@material/ripple/util.js
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return { x: 0, y: 0 };
  }
  var x2 = pageOffset.x, y2 = pageOffset.y;
  var documentX = x2 + clientRect.left;
  var documentY = y2 + clientRect.top;
  var normalizedX;
  var normalizedY;
  if (evt.type === "touchstart") {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }
  return { x: normalizedX, y: normalizedY };
}

// node_modules/@material/ripple/foundation.js
var ACTIVATION_EVENT_TYPES = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
];
var POINTER_DEACTIVATION_EVENT_TYPES = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];
var activatedTargets = [];
var MDCRippleFoundation = function(_super) {
  __extends(MDCRippleFoundation2, _super);
  function MDCRippleFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation2.defaultAdapter), adapter)) || this;
    _this.activationAnimationHasEnded = false;
    _this.activationTimer = 0;
    _this.fgDeactivationRemovalTimer = 0;
    _this.fgScale = "0";
    _this.frame = { width: 0, height: 0 };
    _this.initialSize = 0;
    _this.layoutFrame = 0;
    _this.maxRadius = 0;
    _this.unboundedCoords = { left: 0, top: 0 };
    _this.activationState = _this.defaultActivationState();
    _this.activationTimerCallback = function() {
      _this.activationAnimationHasEnded = true;
      _this.runDeactivationUXLogicIfReady();
    };
    _this.activateHandler = function(e8) {
      _this.activateImpl(e8);
    };
    _this.deactivateHandler = function() {
      _this.deactivateImpl();
    };
    _this.focusHandler = function() {
      _this.handleFocus();
    };
    _this.blurHandler = function() {
      _this.handleBlur();
    };
    _this.resizeHandler = function() {
      _this.layout();
    };
    return _this;
  }
  Object.defineProperty(MDCRippleFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        browserSupportsCssVars: function() {
          return true;
        },
        computeBoundingRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        containsEventTarget: function() {
          return true;
        },
        deregisterDocumentInteractionHandler: function() {
          return void 0;
        },
        deregisterInteractionHandler: function() {
          return void 0;
        },
        deregisterResizeHandler: function() {
          return void 0;
        },
        getWindowPageOffset: function() {
          return { x: 0, y: 0 };
        },
        isSurfaceActive: function() {
          return true;
        },
        isSurfaceDisabled: function() {
          return true;
        },
        isUnbounded: function() {
          return true;
        },
        registerDocumentInteractionHandler: function() {
          return void 0;
        },
        registerInteractionHandler: function() {
          return void 0;
        },
        registerResizeHandler: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        updateCssVariable: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCRippleFoundation2.prototype.init = function() {
    var _this = this;
    var supportsPressRipple = this.supportsPressRipple();
    this.registerRootHandlers(supportsPressRipple);
    if (supportsPressRipple) {
      var _a2 = MDCRippleFoundation2.cssClasses, ROOT_1 = _a2.ROOT, UNBOUNDED_1 = _a2.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.addClass(ROOT_1);
        if (_this.adapter.isUnbounded()) {
          _this.adapter.addClass(UNBOUNDED_1);
          _this.layoutInternal();
        }
      });
    }
  };
  MDCRippleFoundation2.prototype.destroy = function() {
    var _this = this;
    if (this.supportsPressRipple()) {
      if (this.activationTimer) {
        clearTimeout(this.activationTimer);
        this.activationTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
      }
      if (this.fgDeactivationRemovalTimer) {
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.fgDeactivationRemovalTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
      }
      var _a2 = MDCRippleFoundation2.cssClasses, ROOT_2 = _a2.ROOT, UNBOUNDED_2 = _a2.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.removeClass(ROOT_2);
        _this.adapter.removeClass(UNBOUNDED_2);
        _this.removeCssVars();
      });
    }
    this.deregisterRootHandlers();
    this.deregisterDeactivationHandlers();
  };
  MDCRippleFoundation2.prototype.activate = function(evt) {
    this.activateImpl(evt);
  };
  MDCRippleFoundation2.prototype.deactivate = function() {
    this.deactivateImpl();
  };
  MDCRippleFoundation2.prototype.layout = function() {
    var _this = this;
    if (this.layoutFrame) {
      cancelAnimationFrame(this.layoutFrame);
    }
    this.layoutFrame = requestAnimationFrame(function() {
      _this.layoutInternal();
      _this.layoutFrame = 0;
    });
  };
  MDCRippleFoundation2.prototype.setUnbounded = function(unbounded) {
    var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
    if (unbounded) {
      this.adapter.addClass(UNBOUNDED);
    } else {
      this.adapter.removeClass(UNBOUNDED);
    }
  };
  MDCRippleFoundation2.prototype.handleFocus = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.handleBlur = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.supportsPressRipple = function() {
    return this.adapter.browserSupportsCssVars();
  };
  MDCRippleFoundation2.prototype.defaultActivationState = function() {
    return {
      activationEvent: void 0,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  MDCRippleFoundation2.prototype.registerRootHandlers = function(supportsPressRipple) {
    var e_1, _a2;
    if (supportsPressRipple) {
      try {
        for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerInteractionHandler(evtType, this.activateHandler);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a2 = ACTIVATION_EVENT_TYPES_1.return))
            _a2.call(ACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (this.adapter.isUnbounded()) {
        this.adapter.registerResizeHandler(this.resizeHandler);
      }
    }
    this.adapter.registerInteractionHandler("focus", this.focusHandler);
    this.adapter.registerInteractionHandler("blur", this.blurHandler);
  };
  MDCRippleFoundation2.prototype.registerDeactivationHandlers = function(evt) {
    var e_2, _a2;
    if (evt.type === "keydown") {
      this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
    } else {
      try {
        for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a2 = POINTER_DEACTIVATION_EVENT_TYPES_1.return))
            _a2.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }
  };
  MDCRippleFoundation2.prototype.deregisterRootHandlers = function() {
    var e_3, _a2;
    try {
      for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a2 = ACTIVATION_EVENT_TYPES_2.return))
          _a2.call(ACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
    this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
    if (this.adapter.isUnbounded()) {
      this.adapter.deregisterResizeHandler(this.resizeHandler);
    }
  };
  MDCRippleFoundation2.prototype.deregisterDeactivationHandlers = function() {
    var e_4, _a2;
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
    try {
      for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a2 = POINTER_DEACTIVATION_EVENT_TYPES_2.return))
          _a2.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
  };
  MDCRippleFoundation2.prototype.removeCssVars = function() {
    var _this = this;
    var rippleStrings = MDCRippleFoundation2.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function(key) {
      if (key.indexOf("VAR_") === 0) {
        _this.adapter.updateCssVariable(rippleStrings[key], null);
      }
    });
  };
  MDCRippleFoundation2.prototype.activateImpl = function(evt) {
    var _this = this;
    if (this.adapter.isSurfaceDisabled()) {
      return;
    }
    var activationState = this.activationState;
    if (activationState.isActivated) {
      return;
    }
    var previousActivationEvent = this.previousActivationEvent;
    var isSameInteraction = previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
    if (isSameInteraction) {
      return;
    }
    activationState.isActivated = true;
    activationState.isProgrammatic = evt === void 0;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== void 0 && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
    var hasActivatedChild = evt !== void 0 && activatedTargets.length > 0 && activatedTargets.some(function(target) {
      return _this.adapter.containsEventTarget(target);
    });
    if (hasActivatedChild) {
      this.resetActivationState();
      return;
    }
    if (evt !== void 0) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers(evt);
    }
    activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
    if (activationState.wasElementMadeActive) {
      this.animateActivation();
    }
    requestAnimationFrame(function() {
      activatedTargets = [];
      if (!activationState.wasElementMadeActive && evt !== void 0 && (evt.key === " " || evt.keyCode === 32)) {
        activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
          _this.animateActivation();
        }
      }
      if (!activationState.wasElementMadeActive) {
        _this.activationState = _this.defaultActivationState();
      }
    });
  };
  MDCRippleFoundation2.prototype.checkElementMadeActive = function(evt) {
    return evt !== void 0 && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
  };
  MDCRippleFoundation2.prototype.animateActivation = function() {
    var _this = this;
    var _a2 = MDCRippleFoundation2.strings, VAR_FG_TRANSLATE_START = _a2.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a2.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation2.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal();
    var translateStart = "";
    var translateEnd = "";
    if (!this.adapter.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    clearTimeout(this.activationTimer);
    clearTimeout(this.fgDeactivationRemovalTimer);
    this.rmBoundedActivationClasses();
    this.adapter.removeClass(FG_DEACTIVATION);
    this.adapter.computeBoundingRect();
    this.adapter.addClass(FG_ACTIVATION);
    this.activationTimer = setTimeout(function() {
      _this.activationTimerCallback();
    }, DEACTIVATION_TIMEOUT_MS);
  };
  MDCRippleFoundation2.prototype.getFgTranslationCoordinates = function() {
    var _a2 = this.activationState, activationEvent = _a2.activationEvent, wasActivatedByPointer = _a2.wasActivatedByPointer;
    var startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      };
    }
    startPoint = {
      x: startPoint.x - this.initialSize / 2,
      y: startPoint.y - this.initialSize / 2
    };
    var endPoint = {
      x: this.frame.width / 2 - this.initialSize / 2,
      y: this.frame.height / 2 - this.initialSize / 2
    };
    return { startPoint, endPoint };
  };
  MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady = function() {
    var _this = this;
    var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
    var _a2 = this.activationState, hasDeactivationUXRun = _a2.hasDeactivationUXRun, isActivated = _a2.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded) {
      this.rmBoundedActivationClasses();
      this.adapter.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer = setTimeout(function() {
        _this.adapter.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  };
  MDCRippleFoundation2.prototype.rmBoundedActivationClasses = function() {
    var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded = false;
    this.adapter.computeBoundingRect();
  };
  MDCRippleFoundation2.prototype.resetActivationState = function() {
    var _this = this;
    this.previousActivationEvent = this.activationState.activationEvent;
    this.activationState = this.defaultActivationState();
    setTimeout(function() {
      return _this.previousActivationEvent = void 0;
    }, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
  };
  MDCRippleFoundation2.prototype.deactivateImpl = function() {
    var _this = this;
    var activationState = this.activationState;
    if (!activationState.isActivated) {
      return;
    }
    var state = __assign({}, activationState);
    if (activationState.isProgrammatic) {
      requestAnimationFrame(function() {
        _this.animateDeactivation(state);
      });
      this.resetActivationState();
    } else {
      this.deregisterDeactivationHandlers();
      requestAnimationFrame(function() {
        _this.activationState.hasDeactivationUXRun = true;
        _this.animateDeactivation(state);
        _this.resetActivationState();
      });
    }
  };
  MDCRippleFoundation2.prototype.animateDeactivation = function(_a2) {
    var wasActivatedByPointer = _a2.wasActivatedByPointer, wasElementMadeActive = _a2.wasElementMadeActive;
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady();
    }
  };
  MDCRippleFoundation2.prototype.layoutInternal = function() {
    var _this = this;
    this.frame = this.adapter.computeBoundingRect();
    var maxDim = Math.max(this.frame.height, this.frame.width);
    var getBoundedRadius = function() {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
      return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
    };
    this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
    var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
    if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize = initialSize - 1;
    } else {
      this.initialSize = initialSize;
    }
    this.fgScale = "" + this.maxRadius / this.initialSize;
    this.updateLayoutCssVars();
  };
  MDCRippleFoundation2.prototype.updateLayoutCssVars = function() {
    var _a2 = MDCRippleFoundation2.strings, VAR_FG_SIZE = _a2.VAR_FG_SIZE, VAR_LEFT = _a2.VAR_LEFT, VAR_TOP = _a2.VAR_TOP, VAR_FG_SCALE = _a2.VAR_FG_SCALE;
    this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
    this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
    if (this.adapter.isUnbounded()) {
      this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      };
      this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
      this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
    }
  };
  return MDCRippleFoundation2;
}(MDCFoundation);
var foundation_default = MDCRippleFoundation;

// node_modules/lit-html/directive.js
var t4 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e7 = (t5) => (...e8) => ({ _$litDirective$: t5, values: e8 });
var i5 = class {
  constructor(t5) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t5, e8, i7) {
    this._$Ct = t5, this._$AM = e8, this._$Ci = i7;
  }
  _$AS(t5, e8) {
    return this.update(t5, e8);
  }
  update(t5, e8) {
    return this.render(...e8);
  }
};

// node_modules/lit-html/directives/class-map.js
var o6 = e7(class extends i5 {
  constructor(t5) {
    var i7;
    if (super(t5), t5.type !== t4.ATTRIBUTE || t5.name !== "class" || ((i7 = t5.strings) === null || i7 === void 0 ? void 0 : i7.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t5) {
    return " " + Object.keys(t5).filter((i7) => t5[i7]).join(" ") + " ";
  }
  update(i7, [s5]) {
    var r4, o7;
    if (this.st === void 0) {
      this.st = new Set(), i7.strings !== void 0 && (this.et = new Set(i7.strings.join(" ").split(/\s/).filter((t5) => t5 !== "")));
      for (const t5 in s5)
        s5[t5] && !((r4 = this.et) === null || r4 === void 0 ? void 0 : r4.has(t5)) && this.st.add(t5);
      return this.render(s5);
    }
    const e8 = i7.element.classList;
    this.st.forEach((t5) => {
      t5 in s5 || (e8.remove(t5), this.st.delete(t5));
    });
    for (const t5 in s5) {
      const i8 = !!s5[t5];
      i8 === this.st.has(t5) || ((o7 = this.et) === null || o7 === void 0 ? void 0 : o7.has(t5)) || (i8 ? (e8.add(t5), this.st.add(t5)) : (e8.remove(t5), this.st.delete(t5)));
    }
    return b;
  }
});

// node_modules/lit-html/directives/style-map.js
var i6 = e7(class extends i5 {
  constructor(t5) {
    var e8;
    if (super(t5), t5.type !== t4.ATTRIBUTE || t5.name !== "style" || ((e8 = t5.strings) === null || e8 === void 0 ? void 0 : e8.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t5) {
    return Object.keys(t5).reduce((e8, r4) => {
      const s5 = t5[r4];
      return s5 == null ? e8 : e8 + `${r4 = r4.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s5};`;
    }, "");
  }
  update(e8, [r4]) {
    const { style: s5 } = e8.element;
    if (this.ut === void 0) {
      this.ut = new Set();
      for (const t5 in r4)
        this.ut.add(t5);
      return this.render(r4);
    }
    this.ut.forEach((t5) => {
      r4[t5] == null && (this.ut.delete(t5), t5.includes("-") ? s5.removeProperty(t5) : s5[t5] = "");
    });
    for (const t5 in r4) {
      const e9 = r4[t5];
      e9 != null && (this.ut.add(t5), t5.includes("-") ? s5.setProperty(t5, e9) : s5[t5] = e9);
    }
    return b;
  }
});

// node_modules/@material/mwc-ripple/mwc-ripple-base.js
var RippleBase = class extends BaseElement {
  constructor() {
    super(...arguments);
    this.primary = false;
    this.accent = false;
    this.unbounded = false;
    this.disabled = false;
    this.activated = false;
    this.selected = false;
    this.internalUseStateLayerCustomProperties = false;
    this.hovering = false;
    this.bgFocused = false;
    this.fgActivation = false;
    this.fgDeactivation = false;
    this.fgScale = "";
    this.fgSize = "";
    this.translateStart = "";
    this.translateEnd = "";
    this.leftPos = "";
    this.topPos = "";
    this.mdcFoundationClass = foundation_default;
  }
  get isActive() {
    return matches(this.parentElement || this, ":active");
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => true,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (className) => {
        switch (className) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = true;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = true;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = true;
            break;
          default:
            break;
        }
      },
      removeClass: (className) => {
        switch (className) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = false;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = false;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = false;
            break;
          default:
            break;
        }
      },
      containsEventTarget: () => true,
      registerInteractionHandler: () => void 0,
      deregisterInteractionHandler: () => void 0,
      registerDocumentInteractionHandler: () => void 0,
      deregisterDocumentInteractionHandler: () => void 0,
      registerResizeHandler: () => void 0,
      deregisterResizeHandler: () => void 0,
      updateCssVariable: (varName, value) => {
        switch (varName) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = value;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = value;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = value;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = value;
            break;
          case "--mdc-ripple-left":
            this.leftPos = value;
            break;
          case "--mdc-ripple-top":
            this.topPos = value;
            break;
          default:
            break;
        }
      },
      computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset })
    };
  }
  startPress(ev) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(ev);
    });
  }
  endPress() {
    this.waitForFoundation(() => {
      this.mdcFoundation.deactivate();
    });
  }
  startFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleFocus();
    });
  }
  endFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleBlur();
    });
  }
  startHover() {
    this.hovering = true;
  }
  endHover() {
    this.hovering = false;
  }
  waitForFoundation(fn2) {
    if (this.mdcFoundation) {
      fn2();
    } else {
      this.updateComplete.then(fn2);
    }
  }
  update(changedProperties) {
    if (changedProperties.has("disabled")) {
      if (this.disabled) {
        this.endHover();
      }
    }
    super.update(changedProperties);
  }
  render() {
    const shouldActivateInPrimary = this.activated && (this.primary || !this.accent);
    const shouldSelectInPrimary = this.selected && (this.primary || !this.accent);
    const classes = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": shouldActivateInPrimary,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": shouldSelectInPrimary,
      "mdc-ripple-surface--accent--selected": this.accent && this.selected,
      "mdc-ripple-surface--disabled": this.disabled,
      "mdc-ripple-surface--hover": this.hovering,
      "mdc-ripple-surface--primary": this.primary,
      "mdc-ripple-surface--selected": this.selected,
      "mdc-ripple-upgraded--background-focused": this.bgFocused,
      "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
      "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
      "mdc-ripple-upgraded--unbounded": this.unbounded,
      "mdc-ripple-surface--internal-use-state-layer-custom-properties": this.internalUseStateLayerCustomProperties
    };
    return p`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${o6(classes)}"
          style="${i6({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
};
__decorate([
  i2(".mdc-ripple-surface")
], RippleBase.prototype, "mdcRoot", void 0);
__decorate([
  e({ type: Boolean })
], RippleBase.prototype, "primary", void 0);
__decorate([
  e({ type: Boolean })
], RippleBase.prototype, "accent", void 0);
__decorate([
  e({ type: Boolean })
], RippleBase.prototype, "unbounded", void 0);
__decorate([
  e({ type: Boolean })
], RippleBase.prototype, "disabled", void 0);
__decorate([
  e({ type: Boolean })
], RippleBase.prototype, "activated", void 0);
__decorate([
  e({ type: Boolean })
], RippleBase.prototype, "selected", void 0);
__decorate([
  e({ type: Boolean })
], RippleBase.prototype, "internalUseStateLayerCustomProperties", void 0);
__decorate([
  t()
], RippleBase.prototype, "hovering", void 0);
__decorate([
  t()
], RippleBase.prototype, "bgFocused", void 0);
__decorate([
  t()
], RippleBase.prototype, "fgActivation", void 0);
__decorate([
  t()
], RippleBase.prototype, "fgDeactivation", void 0);
__decorate([
  t()
], RippleBase.prototype, "fgScale", void 0);
__decorate([
  t()
], RippleBase.prototype, "fgSize", void 0);
__decorate([
  t()
], RippleBase.prototype, "translateStart", void 0);
__decorate([
  t()
], RippleBase.prototype, "translateEnd", void 0);
__decorate([
  t()
], RippleBase.prototype, "leftPos", void 0);
__decorate([
  t()
], RippleBase.prototype, "topPos", void 0);

// node_modules/@material/mwc-ripple/mwc-ripple.css.js
var styles2 = r`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;

// node_modules/@material/mwc-ripple/mwc-ripple.js
var Ripple = class Ripple2 extends RippleBase {
};
Ripple.styles = [styles2];
Ripple = __decorate([
  n("mwc-ripple")
], Ripple);

// node_modules/@material/mwc-base/aria-property.js
function tsDecorator(prototype, name, descriptor) {
  const constructor = prototype.constructor;
  if (!descriptor) {
    const litInternalPropertyKey = `__${name}`;
    descriptor = constructor.getPropertyDescriptor(name, litInternalPropertyKey);
    if (!descriptor) {
      throw new Error("@ariaProperty must be used after a @property decorator");
    }
  }
  const propDescriptor = descriptor;
  let attribute = "";
  if (!propDescriptor.set) {
    throw new Error(`@ariaProperty requires a setter for ${name}`);
  }
  if (prototype.dispatchWizEvent) {
    return descriptor;
  }
  const wrappedDescriptor = {
    configurable: true,
    enumerable: true,
    set(value) {
      if (attribute === "") {
        const options = constructor.getPropertyOptions(name);
        attribute = typeof options.attribute === "string" ? options.attribute : name;
      }
      if (this.hasAttribute(attribute)) {
        this.removeAttribute(attribute);
      }
      propDescriptor.set.call(this, value);
    }
  };
  if (propDescriptor.get) {
    wrappedDescriptor.get = function() {
      return propDescriptor.get.call(this);
    };
  }
  return wrappedDescriptor;
}
function ariaProperty(protoOrDescriptor, name, descriptor) {
  if (name !== void 0) {
    return tsDecorator(protoOrDescriptor, name, descriptor);
  } else {
    throw new Error("@ariaProperty only supports TypeScript Decorators");
  }
}

// node_modules/@material/mwc-ripple/ripple-handlers.js
var RippleHandlers = class {
  constructor(rippleFn) {
    this.startPress = (ev) => {
      rippleFn().then((r4) => {
        r4 && r4.startPress(ev);
      });
    };
    this.endPress = () => {
      rippleFn().then((r4) => {
        r4 && r4.endPress();
      });
    };
    this.startFocus = () => {
      rippleFn().then((r4) => {
        r4 && r4.startFocus();
      });
    };
    this.endFocus = () => {
      rippleFn().then((r4) => {
        r4 && r4.endFocus();
      });
    };
    this.startHover = () => {
      rippleFn().then((r4) => {
        r4 && r4.startHover();
      });
    };
    this.endHover = () => {
      rippleFn().then((r4) => {
        r4 && r4.endHover();
      });
    };
  }
};

// node_modules/lit-html/directives/if-defined.js
var l4 = (l5) => l5 != null ? l5 : T;

// node_modules/@material/mwc-button/mwc-button-base.js
var ButtonBase = class extends s4 {
  constructor() {
    super(...arguments);
    this.raised = false;
    this.unelevated = false;
    this.outlined = false;
    this.dense = false;
    this.disabled = false;
    this.trailingIcon = false;
    this.fullwidth = false;
    this.icon = "";
    this.label = "";
    this.expandContent = false;
    this.shouldRenderRipple = false;
    this.rippleHandlers = new RippleHandlers(() => {
      this.shouldRenderRipple = true;
      return this.ripple;
    });
  }
  renderOverlay() {
    return p``;
  }
  renderRipple() {
    const filled = this.raised || this.unelevated;
    return this.shouldRenderRipple ? p`<mwc-ripple class="ripple" .primary="${!filled}" .disabled="${this.disabled}"></mwc-ripple>` : "";
  }
  focus() {
    const buttonElement = this.buttonElement;
    if (buttonElement) {
      this.rippleHandlers.startFocus();
      buttonElement.focus();
    }
  }
  blur() {
    const buttonElement = this.buttonElement;
    if (buttonElement) {
      this.rippleHandlers.endFocus();
      buttonElement.blur();
    }
  }
  getRenderClasses() {
    return {
      "mdc-button--raised": this.raised,
      "mdc-button--unelevated": this.unelevated,
      "mdc-button--outlined": this.outlined,
      "mdc-button--dense": this.dense
    };
  }
  render() {
    return p`
      <button
          id="button"
          class="mdc-button ${o6(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          aria-haspopup="${l4(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon && !this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${o6({
      flex: this.expandContent
    })}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon && this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
      </button>`;
  }
  renderIcon() {
    return p`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
  }
  handleRippleActivate(evt) {
    const onUp = () => {
      window.removeEventListener("mouseup", onUp);
      this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", onUp);
    this.rippleHandlers.startPress(evt);
  }
  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }
  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }
  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }
  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }
  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
};
ButtonBase.shadowRootOptions = { mode: "open", delegatesFocus: true };
__decorate([
  ariaProperty,
  e({ type: String, attribute: "aria-haspopup" })
], ButtonBase.prototype, "ariaHasPopup", void 0);
__decorate([
  e({ type: Boolean, reflect: true })
], ButtonBase.prototype, "raised", void 0);
__decorate([
  e({ type: Boolean, reflect: true })
], ButtonBase.prototype, "unelevated", void 0);
__decorate([
  e({ type: Boolean, reflect: true })
], ButtonBase.prototype, "outlined", void 0);
__decorate([
  e({ type: Boolean })
], ButtonBase.prototype, "dense", void 0);
__decorate([
  e({ type: Boolean, reflect: true })
], ButtonBase.prototype, "disabled", void 0);
__decorate([
  e({ type: Boolean, attribute: "trailingicon" })
], ButtonBase.prototype, "trailingIcon", void 0);
__decorate([
  e({ type: Boolean, reflect: true })
], ButtonBase.prototype, "fullwidth", void 0);
__decorate([
  e({ type: String })
], ButtonBase.prototype, "icon", void 0);
__decorate([
  e({ type: String })
], ButtonBase.prototype, "label", void 0);
__decorate([
  e({ type: Boolean })
], ButtonBase.prototype, "expandContent", void 0);
__decorate([
  i2("#button")
], ButtonBase.prototype, "buttonElement", void 0);
__decorate([
  e3("mwc-ripple")
], ButtonBase.prototype, "ripple", void 0);
__decorate([
  t()
], ButtonBase.prototype, "shouldRenderRipple", void 0);
__decorate([
  e2({ passive: true })
], ButtonBase.prototype, "handleRippleActivate", null);

// node_modules/@material/mwc-button/styles.css.js
var styles3 = r`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:calc(-1 * 1px);left:calc(-1 * 1px);border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;

// node_modules/@material/mwc-button/mwc-button.js
var Button = class Button2 extends ButtonBase {
};
Button.styles = [styles3];
Button = __decorate([
  n("mwc-button")
], Button);

// bazel-out/darwin-fastbuild/bin/packages/cardano-components/src/redux/cardanoWallet/actions.js
var connectWallet = () => async (dispatch) => {
  var _a2;
  const response = await ((_a2 = API) == null ? void 0 : _a2.baseCommands.enable());
  const payload = await _getWalletResponse(response);
  dispatch({ type: CARDANO_WALLET.CONNECTED, payload });
};
var initalizeWallet = () => async (dispatch) => {
  var _a2;
  const response = await ((_a2 = API) == null ? void 0 : _a2.baseCommands.isEnabled());
  const payload = await _getWalletResponse(response);
  dispatch({ type: CARDANO_WALLET.CONNECTED, payload });
};
var update = () => async (dispatch) => {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const bech32 = true;
  const unusedAddresses = await ((_c = API) == null ? void 0 : _c.baseCommands.getUnusedAddresses(bech32 ? (_a2 = API) == null ? void 0 : _a2.addressReturnType.bech32 : (_b = API) == null ? void 0 : _b.addressReturnType.hex));
  const usedAddresses = await ((_f = API) == null ? void 0 : _f.baseCommands.getUsedAddresses(bech32 ? (_d = API) == null ? void 0 : _d.addressReturnType.bech32 : (_e = API) == null ? void 0 : _e.addressReturnType.hex));
  const rewardAddress = await ((_i = API) == null ? void 0 : _i.baseCommands.getRewardAddress(bech32 ? (_g = API) == null ? void 0 : _g.addressReturnType.bech32 : (_h = API) == null ? void 0 : _h.addressReturnType.hex));
  const changeAddress = await ((_l = API) == null ? void 0 : _l.baseCommands.getChangeAddress(bech32 ? (_j = API) == null ? void 0 : _j.addressReturnType.bech32 : (_k = API) == null ? void 0 : _k.addressReturnType.hex));
  const payload = {
    rewardAddress,
    changeAddress,
    unusedAddresses,
    usedAddresses
  };
  dispatch({ type: CARDANO_WALLET.ADDRESSES, payload });
};
var stake = (stakepoolId) => async (dispatch) => {
  var _a2;
  const stake2 = await ((_a2 = API) == null ? void 0 : _a2.plugins.send.delegate({ stakepoolId }));
  dispatch({ type: CARDANO_WALLET.STAKE, payload: { stake: stake2 } });
};
var send = (recipients, metadata, metadataLabel) => async (dispatch) => {
  var _a2;
  const send2 = await ((_a2 = API) == null ? void 0 : _a2.plugins.send.sendMultiple({
    recipients,
    metadata,
    metadataLabel
  }));
  dispatch({ type: CARDANO_WALLET.SEND, payload: { send: send2 } });
};
var _getWalletResponse = async (isConnected) => {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  if (!isConnected) {
    return { walletActive: isConnected };
  }
  const bech32 = true;
  const unusedAddresses = await ((_c = API) == null ? void 0 : _c.baseCommands.getUnusedAddresses(bech32 ? (_a2 = API) == null ? void 0 : _a2.addressReturnType.bech32 : (_b = API) == null ? void 0 : _b.addressReturnType.hex));
  const usedAddresses = await ((_f = API) == null ? void 0 : _f.baseCommands.getUsedAddresses(bech32 ? (_d = API) == null ? void 0 : _d.addressReturnType.bech32 : (_e = API) == null ? void 0 : _e.addressReturnType.hex));
  const rewardAddress = await ((_i = API) == null ? void 0 : _i.baseCommands.getRewardAddress(bech32 ? (_g = API) == null ? void 0 : _g.addressReturnType.bech32 : (_h = API) == null ? void 0 : _h.addressReturnType.hex));
  const changeAddress = await ((_l = API) == null ? void 0 : _l.baseCommands.getChangeAddress(bech32 ? (_j = API) == null ? void 0 : _j.addressReturnType.bech32 : (_k = API) == null ? void 0 : _k.addressReturnType.hex));
  return {
    walletActive: isConnected,
    rewardAddress,
    changeAddress,
    unusedAddresses,
    usedAddresses
  };
};

// bazel-out/darwin-fastbuild/bin/packages/cardano-components/src/components/helper/loadStyle.js
var loadStyle = (src) => {
  return new Promise(function(resolve, reject) {
    let link = document.createElement("link");
    link.href = src;
    link.rel = "stylesheet";
    link.onload = () => resolve(link);
    link.onerror = () => reject(new Error(`Style load error for ${src}`));
    document.head.append(link);
  });
};
var loadDefaultStylesheets = () => {
  loadStyle("https://fonts.googleapis.com/css?family=Roboto:300,400,500").then(() => loadStyle("https://fonts.googleapis.com/css?family=Material+Icons&display=block")).catch((err) => alert(err));
};

// bazel-out/darwin-fastbuild/bin/packages/cardano-components/src/components/CardanoStakeButton/CardanoStakeButton.js
var __decorate2 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r4 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i7 = decorators.length - 1; i7 >= 0; i7--)
      if (d2 = decorators[i7])
        r4 = (c2 < 3 ? d2(r4) : c2 > 3 ? d2(target, key, r4) : d2(target, key)) || r4;
  return c2 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var CardanoStakeButton = class CardanoStakeButton2 extends connect(Store)(Button) {
  constructor() {
    super();
    __publicField(this, "stakepoolId", "");
    __publicField(this, "initializeOnLoad", false);
    __publicField(this, "loading", false);
    __publicField(this, "clickHandler", () => {
      this.loading = true;
      this.requestUpdate();
      Store.dispatch(stake(this.stakepoolId));
    });
    if (this.initializeOnLoad) {
      Store.dispatch(initalizeWallet);
    }
    loadDefaultStylesheets();
    super.onclick = this.clickHandler;
  }
  stateChanged(state) {
    if (this.loading && state) {
      this.loading = false;
    }
  }
  async firstUpdated() {
    if (this.initializeOnLoad) {
      await new Promise((r4) => setTimeout(r4, 0));
    }
  }
  render() {
    return p`
      ${super.render()}
    `;
  }
};
__decorate2([
  e({ type: String })
], CardanoStakeButton.prototype, "stakepoolId", void 0);
__decorate2([
  e({ type: Boolean })
], CardanoStakeButton.prototype, "initializeOnLoad", void 0);
CardanoStakeButton = __decorate2([
  n("cardano-stake-button")
], CardanoStakeButton);

// bazel-out/darwin-fastbuild/bin/packages/cardano-components/src/components/CardanoConnectWalletButton/CardanoConnectWalletButton.js
var __decorate3 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r4 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i7 = decorators.length - 1; i7 >= 0; i7--)
      if (d2 = decorators[i7])
        r4 = (c2 < 3 ? d2(r4) : c2 > 3 ? d2(target, key, r4) : d2(target, key)) || r4;
  return c2 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var CardanoConnectWalletButton = class CardanoConnectWalletButton2 extends connect(Store)(Button) {
  constructor() {
    super();
    __publicField(this, "wallet", false);
    __publicField(this, "connectedValue", "Connected");
    __publicField(this, "disconnectedValue", "Please Connect Wallet");
    __publicField(this, "bech32", true);
    __publicField(this, "_update", () => {
      Store.dispatch(update());
    });
    __publicField(this, "clickHandler", () => {
      Store.dispatch(connectWallet());
      Store.dispatch(update());
    });
    loadDefaultStylesheets();
    Store.dispatch(initalizeWallet());
    Store.dispatch(update());
    super.onclick = this.clickHandler;
  }
  stateChanged(state) {
    if (typeof state.reducer.walletActive !== "undefined") {
      this.wallet = state.reducer.walletActive;
      this._eventHandler(state);
      super.label = this.wallet ? this.connectedValue : this.disconnectedValue;
    }
  }
  async firstUpdated() {
    await new Promise((r4) => setTimeout(r4, 0));
    this.addEventListener("getWalletUpdates", this._update);
  }
  _eventHandler(state) {
    const connection = new CustomEvent("state", {
      detail: state,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(connection);
  }
};
__decorate3([
  e({ type: String })
], CardanoConnectWalletButton.prototype, "connectedValue", void 0);
__decorate3([
  e({ type: String })
], CardanoConnectWalletButton.prototype, "disconnectedValue", void 0);
__decorate3([
  e({ type: Boolean })
], CardanoConnectWalletButton.prototype, "bech32", void 0);
CardanoConnectWalletButton = __decorate3([
  n("cardano-connect-wallet-button")
], CardanoConnectWalletButton);

// bazel-out/darwin-fastbuild/bin/packages/cardano-components/src/components/CardanoSendButton/CardanoSendButton.js
var __decorate4 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r4 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i7 = decorators.length - 1; i7 >= 0; i7--)
      if (d2 = decorators[i7])
        r4 = (c2 < 3 ? d2(r4) : c2 > 3 ? d2(target, key, r4) : d2(target, key)) || r4;
  return c2 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var CardanoSendButton = class CardanoSendButton2 extends connect(Store)(Button) {
  constructor() {
    super();
    __publicField(this, "recipients", []);
    __publicField(this, "metadata", "");
    __publicField(this, "metadataLabel", "");
    __publicField(this, "initializeOnLoad", false);
    __publicField(this, "loading", false);
    __publicField(this, "clickHandler", () => {
      this.loading = true;
      this.requestUpdate();
      const metadata = this.metadata === "" ? void 0 : this.metadata;
      const metadataLabel = this.metadataLabel === "" ? void 0 : this.metadataLabel;
      Store.dispatch(send(this.recipients, metadata, metadataLabel));
    });
    if (this.initializeOnLoad) {
      Store.dispatch(initalizeWallet);
    }
    loadDefaultStylesheets();
    super.onclick = this.clickHandler;
  }
  stateChanged(state) {
    if (this.loading && state) {
      this.loading = false;
    }
  }
  async firstUpdated() {
    if (this.initializeOnLoad) {
      await new Promise((r4) => setTimeout(r4, 0));
    }
  }
  render() {
    return p`
      ${super.render()}
    `;
  }
};
__decorate4([
  e({ type: Array })
], CardanoSendButton.prototype, "recipients", void 0);
__decorate4([
  e({ type: String })
], CardanoSendButton.prototype, "metadata", void 0);
__decorate4([
  e({ type: String })
], CardanoSendButton.prototype, "metadataLabel", void 0);
__decorate4([
  e({ type: Boolean })
], CardanoSendButton.prototype, "initializeOnLoad", void 0);
CardanoSendButton = __decorate4([
  n("cardano-send-button")
], CardanoSendButton);

// bazel-out/darwin-fastbuild/bin/packages/cardano-components/src/components/CardanoInitialize/CardanoInitialize.js
var __decorate5 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r4 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i7 = decorators.length - 1; i7 >= 0; i7--)
      if (d2 = decorators[i7])
        r4 = (c2 < 3 ? d2(r4) : c2 > 3 ? d2(target, key, r4) : d2(target, key)) || r4;
  return c2 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var _a;
var CardanoInitialize = (_a = class extends s4 {
  constructor() {
    super();
    __publicField(this, "config", {});
    this.initialize();
  }
  async initialize() {
    var _a2;
    const serializationLib = await import("./cardano_serialization_lib-PY4TGO3L.js");
    await API.register({
      plugins: [Blockfrost(((_a2 = this.config) == null ? void 0 : _a2.blockfrost) ? this.config.blockfrost : {}), Spend()],
      cardanoSerializationLibrary: serializationLib
    });
  }
  render() {
    return p`<div></div>`;
  }
}, __publicField(_a, "styles", r`
  div {
    display : contents;
    visibility : hidden;
  }
`), _a);
__decorate5([
  e({ type: Object })
], CardanoInitialize.prototype, "config", void 0);
CardanoInitialize = __decorate5([
  n("cardano-initialize")
], CardanoInitialize);

export {
  CardanoStakeButton,
  CardanoConnectWalletButton,
  CardanoSendButton,
  CardanoInitialize
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
//# sourceMappingURL=chunk-PBV6MUOV.js.map
