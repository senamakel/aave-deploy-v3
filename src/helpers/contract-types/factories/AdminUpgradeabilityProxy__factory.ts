/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AdminUpgradeabilityProxy,
  AdminUpgradeabilityProxyInterface,
} from "../AdminUpgradeabilityProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260405162000cd738038062000cd78339810160408190526200002691620002ab565b82816200005560017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd6200038b565b60008051602062000cb783398151915214620000755762000075620003b1565b620000808262000168565b805115620000f7576000826001600160a01b031682604051620000a49190620003c7565b600060405180830381855af49150503d8060008114620000e1576040519150601f19603f3d011682016040523d82523d6000602084013e620000e6565b606091505b5050905080620000f557600080fd5b505b5062000127905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61046200038b565b60008051602062000c9783398151915214620001475762000147620003b1565b6200015f8260008051602062000c9783398151915255565b505050620003e5565b6200017e816200020860201b620005431760201c565b620001f55760405162461bcd60e51b815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e747261637420616464726573730000000000606482015260840160405180910390fd5b60008051602062000cb783398151915255565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906200023d57508115155b949350505050565b80516001600160a01b03811681146200025d57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620002955781810151838201526020016200027b565b83811115620002a5576000848401525b50505050565b600080600060608486031215620002c157600080fd5b620002cc8462000245565b9250620002dc6020850162000245565b60408501519092506001600160401b0380821115620002fa57600080fd5b818601915086601f8301126200030f57600080fd5b81518181111562000324576200032462000262565b604051601f8201601f19908116603f011681019083821181831017156200034f576200034f62000262565b816040528281528960208487010111156200036957600080fd5b6200037c83602083016020880162000278565b80955050505050509250925092565b600082821015620003ac57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b60008251620003db81846020870162000278565b9190910192915050565b6108a280620003f56000396000f3fe60806040526004361061005a5760003560e01c80635c60da1b116100435780635c60da1b146100975780638f283970146100d5578063f851a440146100f55761005a565b80633659cfe6146100645780634f1ef28614610084575b61006261010a565b005b34801561007057600080fd5b5061006261007f3660046107b7565b610144565b6100626100923660046107d9565b6101ad565b3480156100a357600080fd5b506100ac610295565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100e157600080fd5b506100626100f03660046107b7565b610323565b34801561010157600080fd5b506100ac6104c0565b61011261057f565b61014261013d7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b610587565b565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156101a5576101a2816105ab565b50565b6101a261010a565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102885761020b836105ab565b60008373ffffffffffffffffffffffffffffffffffffffff16838360405161023492919061085c565b600060405180830381855af49150503d806000811461026f576040519150601f19603f3d011682016040523d82523d6000602084013e610274565b606091505b505090508061028257600080fd5b50505050565b61029061010a565b505050565b60006102bf7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561031857507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b61032061010a565b90565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156101a55773ffffffffffffffffffffffffffffffffffffffff8116610420576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f60448201527f787920746f20746865207a65726f20616464726573730000000000000000000060648201526084015b60405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6104697fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6040805173ffffffffffffffffffffffffffffffffffffffff928316815291841660208301520160405180910390a16101a2817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b60006104ea7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561031857507fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061057757508115155b949350505050565b6101426105f8565b3660008037600080366000845af43d6000803e8080156105a6573d6000f35b3d6000fd5b6105b4816106d5565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610142576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e20667260448201527f6f6d207468652070726f78792061646d696e00000000000000000000000000006064820152608401610417565b6106de81610543565b61076a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e7472616374206164647265737300000000006064820152608401610417565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b803573ffffffffffffffffffffffffffffffffffffffff811681146107b257600080fd5b919050565b6000602082840312156107c957600080fd5b6107d28261078e565b9392505050565b6000806000604084860312156107ee57600080fd5b6107f78461078e565b9250602084013567ffffffffffffffff8082111561081457600080fd5b818601915086601f83011261082857600080fd5b81358181111561083757600080fd5b87602082850101111561084957600080fd5b6020830194508093505050509250925092565b818382376000910190815291905056fea2646970667358221220a3634bf28ce73c16dff7045e061894af665d7349b1661c59541ff1ace5cadfe264736f6c634300080a0033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";

export class AdminUpgradeabilityProxy__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _logic: string,
    _admin: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<AdminUpgradeabilityProxy> {
    return super.deploy(
      _logic,
      _admin,
      _data,
      overrides || {}
    ) as Promise<AdminUpgradeabilityProxy>;
  }
  getDeployTransaction(
    _logic: string,
    _admin: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _admin, _data, overrides || {});
  }
  attach(address: string): AdminUpgradeabilityProxy {
    return super.attach(address) as AdminUpgradeabilityProxy;
  }
  connect(signer: Signer): AdminUpgradeabilityProxy__factory {
    return super.connect(signer) as AdminUpgradeabilityProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdminUpgradeabilityProxyInterface {
    return new utils.Interface(_abi) as AdminUpgradeabilityProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdminUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AdminUpgradeabilityProxy;
  }
}