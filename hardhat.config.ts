import path from 'path';
import { HardhatUserConfig } from 'hardhat/types';
import { accounts } from './test-wallets';
import {
  eEthereumNetwork,
  eNetwork,
} from './src/helpers/types';
import { BUIDLEREVM_CHAINID, COVERAGE_CHAINID } from './src/helpers/buidler-constants';
import {
  NETWORKS_RPC_URL,
  BLOCK_TO_FORK,
  buildForkConfig,
} from './helper-hardhat-config';

require('dotenv').config();
require('hardhat-deploy');
require("hardhat-deploy-ethers");

import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import "@nomiclabs/hardhat-etherscan";
import 'hardhat-gas-reporter';
import 'hardhat-typechain';
import '@tenderly/hardhat-tenderly';
import 'solidity-coverage';
import { fork } from 'child_process';

const SKIP_LOAD = process.env.SKIP_LOAD === 'true';
const DEFAULT_BLOCK_GAS_LIMIT = 8000000;
const DEFAULT_GAS_MUL = 5;
const HARDFORK = 'istanbul';
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY || '';
const MNEMONIC_PATH = "m/44'/60'/0'/0";
const MNEMONIC = process.env.MNEMONIC || '';
const UNLIMITED_BYTECODE_SIZE = process.env.UNLIMITED_BYTECODE_SIZE === 'true';

const getCommonNetworkConfig = (networkName: eNetwork, networkId: number) => ({
  url: NETWORKS_RPC_URL[networkName],
  hardfork: HARDFORK,
  blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
  gasMultiplier: DEFAULT_GAS_MUL,
  gasPrice: 300 * 1000 * 1000 * 1000,
  chainId: networkId,
  accounts: {
    mnemonic: MNEMONIC,
    path: MNEMONIC_PATH,
    initialIndex: 0,
    count: 20,
  },
});

let forkMode;

const buidlerConfig: HardhatUserConfig & any = {
  solidity: {
    version: '0.8.10',
    settings: {
      optimizer: { enabled: true, runs: 100000, },
      evmVersion: 'london',
    },
  },
  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
  mocha: {
    timeout: 0,
  },
  tenderly: {
    project: process.env.TENDERLY_PROJECT || '',
    username: process.env.TENDERLY_USERNAME || '',
    forkNetwork: '1', //Network id of the network we want to fork
  },
  namedAccounts: {
    deployer: {
      default: 0, // Here this will by default take the first account as deployer
    },
    treasuryProxyAdmin: {
      default: 0
    },
    incentivesProxyAdmin: {
      default: 0
    },
    addressesProviderRegistryOwner: {
      default: 0
    },
    poolAdmin: {
      default: 0
    },
    aclAdmin: {
      default: 0
    },
    emergencyAdmin: {
      default: 0
    },
    incentivesEmissionManager: {
      default: 0
    },
    incentivesRewardsVault: {
      default: 0
    }
  },
  external: {
    contracts: [
      {
        artifacts: "./src/helpers/external-artifacts/core-artifacts",
      },
      {
        artifacts: "./src/helpers/external-artifacts/periphery-artifacts",
      }
    ],
  },
  networks: {
    coverage: {
      url: 'http://localhost:8555',
      chainId: COVERAGE_CHAINID,
    },
    kovan: getCommonNetworkConfig(eEthereumNetwork.kovan, 42),
    ropsten: getCommonNetworkConfig(eEthereumNetwork.ropsten, 3),
    main: {
      ...getCommonNetworkConfig(eEthereumNetwork.main, 1),
      deploy: ['./src/deploy/']
    },
    tenderly: getCommonNetworkConfig(eEthereumNetwork.tenderlyMain, 3030),
    // matic: {
    //   ...getCommonNetworkConfig(ePolygonNetwork.matic, 137),
    //   accounts: [process.env.PRIVATE_KEY || '',],
    // },
    // mumbai: getCommonNetworkConfig(ePolygonNetwork.mumbai, 80001),
    // xdai: getCommonNetworkConfig(eXDaiNetwork.xdai, 100),
    // avalanche: getCommonNetworkConfig(eAvalancheNetwork.avalanche, 43114),
    // fuji: getCommonNetworkConfig(eAvalancheNetwork.fuji, 43113),
    hardhat: {
      hardfork: 'london',
      blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
      gas: DEFAULT_BLOCK_GAS_LIMIT,
      gasPrice: 8000000000,
      allowUnlimitedContractSize: UNLIMITED_BYTECODE_SIZE,
      chainId: BUIDLEREVM_CHAINID,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      accounts: accounts.map(({ secretKey, balance }: { secretKey: string; balance: string }) => ({
        privateKey: secretKey,
        balance,
      })),
      forking: buildForkConfig(),
      deploy: ['src/deploy/'],
    },
    buidlerevm_docker: {
      hardfork: 'berlin',
      blockGasLimit: 9500000,
      gas: 9500000,
      gasPrice: 8000000000,
      chainId: BUIDLEREVM_CHAINID,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      url: 'http://localhost:8545',
    },
    ganache: {
      url: 'http://ganache:8545',
      accounts: {
        mnemonic: 'fox sight canyon orphan hotel grow hedgehog build bless august weather swarm',
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
      },
    },
  },
};

export default buidlerConfig;
