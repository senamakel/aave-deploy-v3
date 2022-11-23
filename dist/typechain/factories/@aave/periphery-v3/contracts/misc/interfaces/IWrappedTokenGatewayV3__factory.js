"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IWrappedTokenGatewayV3__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "interestRateMode",
                type: "uint256",
            },
            {
                internalType: "uint16",
                name: "referralCode",
                type: "uint16",
            },
        ],
        name: "borrowETH",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                internalType: "address",
                name: "onBehalfOf",
                type: "address",
            },
            {
                internalType: "uint16",
                name: "referralCode",
                type: "uint16",
            },
        ],
        name: "depositETH",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "rateMode",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "onBehalfOf",
                type: "address",
            },
        ],
        name: "repayETH",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "onBehalfOf",
                type: "address",
            },
        ],
        name: "withdrawETH",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "permitV",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "permitR",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "permitS",
                type: "bytes32",
            },
        ],
        name: "withdrawETHWithPermit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IWrappedTokenGatewayV3__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IWrappedTokenGatewayV3__factory = IWrappedTokenGatewayV3__factory;
IWrappedTokenGatewayV3__factory.abi = _abi;
