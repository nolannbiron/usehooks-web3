'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Web3 = require('web3');
var core = require('@web3-react/core');
var random = require('lodash/random');
var BigNumber = require('bignumber.js');
var usehooks = require('@nolannb/usehooks');
var jsxRuntime = require('react/jsx-runtime');
var injectedConnector = require('@web3-react/injected-connector');
var walletconnectConnector = require('@web3-react/walletconnect-connector');
var bscConnector$1 = require('@binance-chain/bsc-connector');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Web3__default = /*#__PURE__*/_interopDefaultLegacy(Web3);
var random__default = /*#__PURE__*/_interopDefaultLegacy(random);
var BigNumber__default = /*#__PURE__*/_interopDefaultLegacy(BigNumber);

// Array of available nodes to connect to
var nodes = ['https://bsc-dataseed1.ninicoin.io/', "https://bsc-dataseed1.defibit.io/", 'https://bsc-dataseed.binance.org/'];
var getNodeUrl = function () {
    var randomIndex = random__default["default"](0, nodes.length - 1);
    return nodes[randomIndex];
};

var RPC_URL = getNodeUrl();
var httpProvider = new Web3__default["default"].providers.HttpProvider(RPC_URL, { timeout: 10000 });
var web3NoAccount = new Web3__default["default"](httpProvider);
var getWeb3NoAccount = function () {
    return web3NoAccount;
};

/**
 * Provides a web3 instance using the provider provided by useWallet
 * with a fallback of an httpProver
 * Recreate web3 instance only if the provider change
 */
var useWeb3 = function () {
    var library = core.useWeb3React().library;
    var refEth = React.useRef(library);
    var _a = React.useState(library ? new Web3__default["default"](library) : getWeb3NoAccount()), web3 = _a[0], setweb3 = _a[1];
    React.useEffect(function () {
        if (library !== refEth.current) {
            setweb3(library ? new Web3__default["default"](library) : getWeb3NoAccount());
            refEth.current = library;
        }
    }, [library]);
    return web3;
};

var getContract = function (abi, address, web3) {
    var _web3 = web3 !== null && web3 !== void 0 ? web3 : web3NoAccount;
    return new _web3.eth.Contract(abi, address);
};

var useContract = function (abi, address) {
    var web3 = useWeb3();
    return React.useMemo(function () { return getContract(abi, address, web3); }, [address, web3]);
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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var BIG_ZERO = new BigNumber__default["default"](0);
new BigNumber__default["default"](10);

var ERC20_ABI = [
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_spender",
                type: "address",
            },
            {
                name: "_value",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_from",
                type: "address",
            },
            {
                name: "_to",
                type: "address",
            },
            {
                name: "_value",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
            {
                name: "",
                type: "uint8",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "_owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                name: "balance",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_to",
                type: "address",
            },
            {
                name: "_value",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "_owner",
                type: "address",
            },
            {
                name: "_spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        payable: true,
        stateMutability: "payable",
        type: "fallback",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
];

var useERC20 = function (address) {
    var web3 = useWeb3();
    return React.useMemo(function () { return getContract(ERC20_ABI, address, web3); }, [address, web3]);
};

var useBalance = function (tokenAddress) {
    var contract = useERC20(tokenAddress);
    var _a = React.useState(BIG_ZERO), balance = _a[0], setBalance = _a[1];
    var account = core.useWeb3React().account;
    var web3 = useWeb3();
    var fastRefresh = usehooks.useRefresh().fastRefresh;
    React.useEffect(function () {
        var fetchBalance = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contract.methods.balanceOf(account).call()];
                    case 1:
                        res = _a.sent();
                        setBalance(new BigNumber__default["default"](res));
                        return [2 /*return*/];
                }
            });
        }); };
        if (account) {
            fetchBalance();
        }
    }, [account, tokenAddress, web3, fastRefresh, contract]);
    return balance;
};

var useBurnedBalance = function (tokenAddress) {
    var contract = useERC20(tokenAddress);
    var _a = React.useState(BIG_ZERO), balance = _a[0], setBalance = _a[1];
    var slowRefresh = usehooks.useRefresh().slowRefresh;
    var web3 = useWeb3();
    React.useEffect(function () {
        var fetchBalance = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contract.methods.balanceOf('0x000000000000000000000000000000000000dEaD').call()];
                    case 1:
                        res = _a.sent();
                        setBalance(new BigNumber__default["default"](res));
                        return [2 /*return*/];
                }
            });
        }); };
        fetchBalance();
    }, [web3, tokenAddress, slowRefresh, contract]);
    return balance;
};

var useChainBalance = function () {
    var _a = React.useState(BIG_ZERO), balance = _a[0], setBalance = _a[1];
    var account = core.useWeb3React().account;
    var _b = usehooks.useLastUpdated(), lastUpdated = _b.lastUpdated, setLastUpdated = _b.setLastUpdated;
    var web3 = useWeb3();
    React.useEffect(function () {
        var fetchBalance = function () { return __awaiter(void 0, void 0, void 0, function () {
            var walletBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, web3.eth.getBalance(account)];
                    case 1:
                        walletBalance = _a.sent();
                        setBalance(new BigNumber__default["default"](walletBalance));
                        return [2 /*return*/];
                }
            });
        }); };
        if (account) {
            fetchBalance();
        }
    }, [account, web3, lastUpdated, setBalance]);
    return { balance: balance, refresh: setLastUpdated };
};

/**
 * A hook to check if a wallet's balance is at least the amount passed in
 */
var useHasMinimumBalance = function (tokenAddress, minimumBalance) {
    var balance = useBalance(tokenAddress);
    return balance.gte(minimumBalance);
};

var _a, _b;
var rpcUrl = getNodeUrl();
var chainId = parseInt("56", 10);
var injected = new injectedConnector.InjectedConnector({ supportedChainIds: [chainId] });
var walletconnect = new walletconnectConnector.WalletConnectConnector({
    rpc: (_a = {}, _a[chainId] = rpcUrl, _a),
    qrcode: true,
});
var bscConnector = new bscConnector$1.BscConnector({ supportedChainIds: [chainId] });
(_b = {},
    _b["injected"] = injected,
    _b["walletconnect"] = walletconnect,
    _b["bsc"] = bscConnector,
    _b);
var getLibrary = function (provider) {
    return provider;
};

var UseHooksWeb3Context = React__default["default"].createContext({});
var UseHooksWeb3Provider = function (_a) {
    var children = _a.children;
    return (jsxRuntime.jsx(UseHooksWeb3Context.Provider, __assign({ value: {} }, { children: jsxRuntime.jsx(core.Web3ReactProvider, __assign({ getLibrary: getLibrary }, { children: jsxRuntime.jsx(usehooks.UseHooksProvider, { children: children }) })) })));
};

exports.UseHooksWeb3Context = UseHooksWeb3Context;
exports.UseHooksWeb3Provider = UseHooksWeb3Provider;
exports.useBalance = useBalance;
exports.useBurnedBalance = useBurnedBalance;
exports.useChainBalance = useChainBalance;
exports.useContract = useContract;
exports.useERC20 = useERC20;
exports.useHasMinimumBalance = useHasMinimumBalance;
