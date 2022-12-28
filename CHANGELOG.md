# Changelog

## [1.53.0](https://github.com/aave/aave-v3-deploy/compare/v1.52.0...v1.53.0) (2022-12-22)


### Features

* add ownable task script, add support to view roles for 3.0.0 ([bf1b142](https://github.com/aave/aave-v3-deploy/commit/bf1b1428535e3976610d5512ccf62aff4ddacbfc))
* add tests to ethereum test suite check list ([4952bed](https://github.com/aave/aave-v3-deploy/commit/4952bedecefb7888bc2a6eb14c5d9a1e0bdcbcdd))
* bump core package, fix testnet setup if reserves are set, remove unused imports ([f672dff](https://github.com/aave/aave-v3-deploy/commit/f672dff6c9957bbc6b98c65cb4330a2c658b6202))
* paraswap adapters check ([82fc441](https://github.com/aave/aave-v3-deploy/commit/82fc4418915804ea144888c31bbcb88de93475ef))
* remove deployment of fallback oracle ([0bdc554](https://github.com/aave/aave-v3-deploy/commit/0bdc55421f2c725d35fb262693e759c1f856fad6))
* split ethereum tests by categories: gov, impls, periphery, roles and config ([25de08a](https://github.com/aave/aave-v3-deploy/commit/25de08a5d8908fa099a4f66152115b9d68b9a80f))
* support using treasury from config and adapt tests to new scenario ([a99f705](https://github.com/aave/aave-v3-deploy/commit/a99f7054ba3cb5482accf757193166964d8c900d))
* use pool admin if treasury is not set at config, use deployer if is a testnet market ([5075bfe](https://github.com/aave/aave-v3-deploy/commit/5075bfe29844988cc36b5360e98ead85c5c96dcd))
* use short executor in namedAccounts, remove the transfer of eth before deploy, fix constants.ts declaration ([a5fd516](https://github.com/aave/aave-v3-deploy/commit/a5fd51675ac2695102614fa5446f6129e1609e35))


### Bug Fixes

* renove unused transfer ([ef44a90](https://github.com/aave/aave-v3-deploy/commit/ef44a90741f841a2be713de6aebc16893e4855df))
* reset localhost config ([39f15f7](https://github.com/aave/aave-v3-deploy/commit/39f15f7e5bc0af52a2bf306fc16b1e89239d5478))
* ts error at test config ([b32bdd7](https://github.com/aave/aave-v3-deploy/commit/b32bdd730edd183bcaeb3b0706f45c54e90f3742))
* typechain err ([e8fad89](https://github.com/aave/aave-v3-deploy/commit/e8fad89d250bbccb56b7cc70bfcd4ee09329e733))
* use of === ([c0abbd1](https://github.com/aave/aave-v3-deploy/commit/c0abbd1d93db9b92a6254ec2a2567368c309d3b6))
* use pool admin as owner of paraswap adapters ([02314ad](https://github.com/aave/aave-v3-deploy/commit/02314add6ccb0bf4f12463d599eddb4556058acc))

## [1.52.0](https://github.com/aave/aave-v3-deploy/compare/v1.51.0...v1.52.0) (2022-12-09)


### Features

* permissioned mode for Faucet ([5ef1cb4](https://github.com/aave/aave-v3-deploy/commit/5ef1cb426c6e0ccc8ed595e164ec2a6c0440dc4a))


### Bug Fixes

* keep old deploy tag ([32fdfb5](https://github.com/aave/aave-v3-deploy/commit/32fdfb51241b2387ffd52362aed33d1db180ac47))

## [1.51.0](https://github.com/aave/aave-v3-deploy/compare/v1.50.1...v1.51.0) (2022-11-28)


### Features

* add emission manager transfer of ownership ([36b028f](https://github.com/aave/aave-v3-deploy/commit/36b028f5370e650bdb8d426a5275e338729f9b12))

## 1.50.1 (2022-11-28)


### Bug Fixes

* Bump version of periphery package to 1.21 ([201d939](https://github.com/aave/aave-v3-deploy/commit/201d93998cd364ae3dd07fa36d28a70ed1ccb658))
* Fix rewards imple constructor ([654d586](https://github.com/aave/aave-v3-deploy/commit/654d58633aed630935927db655b657844dc25a9a))
* Use PoolAddressesProvider for Incentives deployment ([1875f2a](https://github.com/aave/aave-v3-deploy/commit/1875f2abb1c2cba322c6dd83f0a672efbff6aa09))


### Miscellaneous Chores

* release 1.50.1 ([cf80147](https://github.com/aave/aave-v3-deploy/commit/cf80147ffe2e326d7bc1f398a8bcfe7232bc7c73))