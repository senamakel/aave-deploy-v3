"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRewardsDistributor__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "reward",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "assetIndex",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "userIndex",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "rewardsAccrued",
                type: "uint256",
            },
        ],
        name: "Accrued",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "reward",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "oldEmission",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newEmission",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "oldDistributionEnd",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newDistributionEnd",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "assetIndex",
                type: "uint256",
            },
        ],
        name: "AssetConfigUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "oldEmissionManager",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newEmissionManager",
                type: "address",
            },
        ],
        name: "EmissionManagerUpdated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "assets",
                type: "address[]",
            },
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "getAllUserRewards",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
        ],
        name: "getAssetDecimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                internalType: "address",
                name: "reward",
                type: "address",
            },
        ],
        name: "getAssetIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                internalType: "address",
                name: "reward",
                type: "address",
            },
        ],
        name: "getDistributionEnd",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getEmissionManager",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
        ],
        name: "getRewardsByAsset",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                internalType: "address",
                name: "reward",
                type: "address",
            },
        ],
        name: "getRewardsData",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getRewardsList",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "address",
                name: "reward",
                type: "address",
            },
        ],
        name: "getUserAccruedRewards",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                internalType: "address",
                name: "reward",
                type: "address",
            },
        ],
        name: "getUserAssetIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "assets",
                type: "address[]",
            },
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "address",
                name: "reward",
                type: "address",
            },
        ],
        name: "getUserRewards",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                internalType: "address",
                name: "reward",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "newDistributionEnd",
                type: "uint32",
            },
        ],
        name: "setDistributionEnd",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "emissionManager",
                type: "address",
            },
        ],
        name: "setEmissionManager",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                internalType: "address[]",
                name: "rewards",
                type: "address[]",
            },
            {
                internalType: "uint88[]",
                name: "newEmissionsPerSecond",
                type: "uint88[]",
            },
        ],
        name: "setEmissionPerSecond",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IRewardsDistributor__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IRewardsDistributor__factory = IRewardsDistributor__factory;
IRewardsDistributor__factory.abi = _abi;
