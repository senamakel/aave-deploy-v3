"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguratorLogic__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
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
                name: "proxy",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "ATokenUpgraded",
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
                name: "aToken",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "stableDebtToken",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "variableDebtToken",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "interestRateStrategyAddress",
                type: "address",
            },
        ],
        name: "ReserveInitialized",
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
                name: "proxy",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "StableDebtTokenUpgraded",
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
                name: "proxy",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "VariableDebtTokenUpgraded",
        type: "event",
    },
];
const _bytecode = "0x61225f61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c8063b0f093551461005b578063b13c96a81461007d578063df59b8b21461009d578063f5b50e70146100bd575b600080fd5b81801561006757600080fd5b5061007b61007636600461117d565b6100dd565b005b81801561008957600080fd5b5061007b6100983660046111d4565b610439565b8180156100a957600080fd5b5061007b6100b8366004611220565b6106c6565b8180156100c957600080fd5b5061007b6100d836600461117d565b610bd3565b600073ffffffffffffffffffffffffffffffffffffffff83166335ea6a75610108602085018561126d565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff90911660048201526024016101e060405180830381865afa158015610172573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019691906113a2565b9050600061028573ffffffffffffffffffffffffffffffffffffffff851663c44b11f76101c6602087018761126d565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602401602060405180830381865afa15801561022f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025391906114c5565b5161ffff80821692601083901c821692602081901c83169260ff603083901c811693604084901c9092169260a81c1690565b50909450600093507fc222ec8a0000000000000000000000000000000000000000000000000000000092508791506102c29050602087018761126d565b6102d2604088016020890161126d565b856102e060408a018a6114e1565b6102ed60608c018c6114e1565b6102fa60a08e018e6114e1565b6040516024016103139a99989796959493929190611596565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526101408401519091506103b3906103ad60a087016080880161126d565b83610e6a565b6103c360a085016080860161126d565b61014084015173ffffffffffffffffffffffffffffffffffffffff91821691166103f0602087018761126d565b73ffffffffffffffffffffffffffffffffffffffff167f9439658a562a5c46b1173589df89cf001483d685bad28aedaff4a88656292d8160405160405180910390a45050505050565b600073ffffffffffffffffffffffffffffffffffffffff83166335ea6a75610464602085018561126d565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff90911660048201526024016101e060405180830381865afa1580156104ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f291906113a2565b9050600061052273ffffffffffffffffffffffffffffffffffffffff851663c44b11f76101c6602087018761126d565b50509350505050600063183fb41360e01b85856020016020810190610547919061126d565b610554602088018861126d565b6105646060890160408a0161126d565b8661057260608b018b6114e1565b61057f60808d018d6114e1565b61058c60c08f018f6114e1565b6040516024016105a69b9a99989796959493929190611617565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610100840151909150610640906103ad60c0870160a0880161126d565b61065060c0850160a0860161126d565b61010084015173ffffffffffffffffffffffffffffffffffffffff918216911661067d602087018761126d565b73ffffffffffffffffffffffffffffffffffffffff167fa76f65411ec66a7fb6bc467432eb14767900449ae4469fa295e4441fe5e1cb7360405160405180910390a45050505050565b60006108016106d8602084018461126d565b7f183fb413000000000000000000000000000000000000000000000000000000008561070a60e0870160c0880161126d565b61071a60c0880160a0890161126d565b61072b610100890160e08a0161126d565b61073b60808a0160608b016116a4565b6107496101008b018b6114e1565b6107576101208d018d6114e1565b6107656101c08f018f6114e1565b60405160240161077f9b9a999897969594939291906116c7565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610ef8565b905060006108ae610818604085016020860161126d565b7fc222ec8a000000000000000000000000000000000000000000000000000000008661084a60c0880160a0890161126d565b61085b610100890160e08a0161126d565b61086b60808a0160608b016116a4565b6108796101808b018b6114e1565b6108876101a08d018d6114e1565b6108956101c08f018f6114e1565b60405160240161077f9a9998979695949392919061171b565b905060006109456108c5606086016040870161126d565b7fc222ec8a00000000000000000000000000000000000000000000000000000000876108f760c0890160a08a0161126d565b6109086101008a0160e08b0161126d565b61091860808b0160608c016116a4565b6109266101408c018c6114e1565b6109346101608e018e6114e1565b8e806101c0019061089591906114e1565b905073ffffffffffffffffffffffffffffffffffffffff8516637a708e9261097360c0870160a0880161126d565b85858561098660a08b0160808c0161126d565b60405160e087901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff95861660048201529385166024850152918416604484015283166064830152909116608482015260a401600060405180830381600087803b158015610a0b57600080fd5b505af1158015610a1f573d6000803e3d6000fd5b50506040805160208101909152600081529150610a519050610a4760808701606088016116a4565b829060ff16610fd3565b610a5c81600161107c565b610a678160006110c1565b610a72816000611106565b73ffffffffffffffffffffffffffffffffffffffff861663f51e435b610a9e60c0880160a0890161126d565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff909116600482015283516024820152604401600060405180830381600087803b158015610b0b57600080fd5b505af1158015610b1f573d6000803e3d6000fd5b50505073ffffffffffffffffffffffffffffffffffffffff85169050610b4b60c0870160a0880161126d565b73ffffffffffffffffffffffffffffffffffffffff167f3a0ca721fc364424566385a1aa271ed508cc2c0949c2272575fb3013a163a45f8585610b9460a08b0160808c0161126d565b6040805173ffffffffffffffffffffffffffffffffffffffff9485168152928416602084015292168183015290519081900360600190a3505050505050565b600073ffffffffffffffffffffffffffffffffffffffff83166335ea6a75610bfe602085018561126d565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff90911660048201526024016101e060405180830381865afa158015610c68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8c91906113a2565b90506000610cbc73ffffffffffffffffffffffffffffffffffffffff851663c44b11f76101c6602087018761126d565b50909450600093507fc222ec8a000000000000000000000000000000000000000000000000000000009250879150610cf99050602087018761126d565b610d09604088016020890161126d565b85610d1760408a018a6114e1565b610d2460608c018c6114e1565b610d3160a08e018e6114e1565b604051602401610d4a9a99989796959493929190611596565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610120840151909150610de4906103ad60a087016080880161126d565b610df460a085016080860161126d565b61012084015173ffffffffffffffffffffffffffffffffffffffff9182169116610e21602087018761126d565b73ffffffffffffffffffffffffffffffffffffffff167f7a943a5b6c214bf7726c069a878b1e2a8e7371981d516048b84e03743e67bc2860405160405180910390a45050505050565b6040517f4f1ef286000000000000000000000000000000000000000000000000000000008152839073ffffffffffffffffffffffffffffffffffffffff821690634f1ef28690610ec090869086906004016117d1565b600060405180830381600087803b158015610eda57600080fd5b505af1158015610eee573d6000803e3d6000fd5b5050505050505050565b60008030604051610f089061114b565b73ffffffffffffffffffffffffffffffffffffffff9091168152602001604051809103906000f080158015610f41573d6000803e3d6000fd5b506040517fd1f5789400000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff82169063d1f5789490610f9990879087906004016117d1565b600060405180830381600087803b158015610fb357600080fd5b505af1158015610fc7573d6000803e3d6000fd5b50929695505050505050565b60408051808201909152600281527f3636000000000000000000000000000000000000000000000000000000000000602082015260ff82111561104c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110439190611808565b60405180910390fd5b5081517fffffffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffff1660309190911b179052565b60388161108a57600061108d565b60015b83517ffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffff1660ff9190911690911b1790915250565b603c816110cf5760006110d2565b60015b83517fffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffff1660ff9190911690911b1790915250565b603981611114576000611117565b60015b83517ffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffff1660ff9190911690911b1790915250565b610a0e8061181c83390190565b73ffffffffffffffffffffffffffffffffffffffff8116811461117a57600080fd5b50565b6000806040838503121561119057600080fd5b823561119b81611158565b9150602083013567ffffffffffffffff8111156111b757600080fd5b830160c081860312156111c957600080fd5b809150509250929050565b600080604083850312156111e757600080fd5b82356111f281611158565b9150602083013567ffffffffffffffff81111561120e57600080fd5b830160e081860312156111c957600080fd5b6000806040838503121561123357600080fd5b823561123e81611158565b9150602083013567ffffffffffffffff81111561125a57600080fd5b83016101e081860312156111c957600080fd5b60006020828403121561127f57600080fd5b813561128a81611158565b9392505050565b6040516101e0810167ffffffffffffffff811182821017156112dc577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b6000602082840312156112f457600080fd5b6040516020810181811067ffffffffffffffff8211171561133e577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040529151825250919050565b80516fffffffffffffffffffffffffffffffff8116811461136b57600080fd5b919050565b805164ffffffffff8116811461136b57600080fd5b805161ffff8116811461136b57600080fd5b805161136b81611158565b60006101e082840312156113b557600080fd5b6113bd611291565b6113c784846112e2565b81526113d56020840161134b565b60208201526113e66040840161134b565b60408201526113f76060840161134b565b60608201526114086080840161134b565b608082015261141960a0840161134b565b60a082015261142a60c08401611370565b60c082015261143b60e08401611385565b60e082015261010061144e818501611397565b90820152610120611460848201611397565b90820152610140611472848201611397565b90820152610160611484848201611397565b9082015261018061149684820161134b565b908201526101a06114a884820161134b565b908201526101c06114ba84820161134b565b908201529392505050565b6000602082840312156114d757600080fd5b61128a83836112e2565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261151657600080fd5b83018035915067ffffffffffffffff82111561153157600080fd5b60200191503681900382131561154657600080fd5b9250929050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600073ffffffffffffffffffffffffffffffffffffffff808d168352808c166020840152808b1660408401525088606083015260e060808301526115de60e08301888a61154d565b82810360a08401526115f181878961154d565b905082810360c084015261160681858761154d565b9d9c50505050505050505050505050565b600061010073ffffffffffffffffffffffffffffffffffffffff808f168452808e166020850152808d166040850152808c166060850152508960808401528060a0840152611668818401898b61154d565b905082810360c084015261167d81878961154d565b905082810360e084015261169281858761154d565b9e9d5050505050505050505050505050565b6000602082840312156116b657600080fd5b813560ff8116811461128a57600080fd5b600061010073ffffffffffffffffffffffffffffffffffffffff808f168452808e166020850152808d166040850152808c1660608501525060ff8a1660808401528060a0840152611668818401898b61154d565b600073ffffffffffffffffffffffffffffffffffffffff808d168352808c166020840152808b1660408401525060ff8916606083015260e060808301526115de60e08301888a61154d565b6000815180845260005b8181101561178c57602081850181015186830182015201611770565b8181111561179e576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006118006040830184611766565b949350505050565b60208152600061128a602083018461176656fe60a060405234801561001057600080fd5b50604051610a0e380380610a0e83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516109606100ae6000396000818161014f015281816101a101528181610274015281816104110152818161043a01526105ab01526109606000f3fe60806040526004361061005a5760003560e01c80635c60da1b116100435780635c60da1b14610097578063d1f57894146100d5578063f851a440146100e85761005a565b80633659cfe6146100645780634f1ef28614610084575b6100626100fd565b005b34801561007057600080fd5b5061006261007f3660046106be565b610137565b6100626100923660046106e0565b610189565b3480156100a357600080fd5b506100ac61025a565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100626100e3366004610792565b6102cb565b3480156100f457600080fd5b506100ac6103f7565b61010561045c565b6101356101307f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b610464565b565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156101815761017e81610488565b50565b61017e6100fd565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016141561024d576101d083610488565b60008373ffffffffffffffffffffffffffffffffffffffff1683836040516101f9929190610872565b600060405180830381855af49150503d8060008114610234576040519150601f19603f3d011682016040523d82523d6000602084013e610239565b606091505b505090508061024757600080fd5b50505050565b6102556100fd565b505050565b60003373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156102c057507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6102c86100fd565b90565b60006102f57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b73ffffffffffffffffffffffffffffffffffffffff161461031557600080fd5b61034060017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd610882565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc1461036e5761036e6108c0565b610377826104d5565b8051156103f35760008273ffffffffffffffffffffffffffffffffffffffff16826040516103a591906108ef565b600060405180830381855af49150503d80600081146103e0576040519150601f19603f3d011682016040523d82523d6000602084013e6103e5565b606091505b505090508061025557600080fd5b5050565b60003373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156102c057507f000000000000000000000000000000000000000000000000000000000000000090565b610135610593565b3660008037600080366000845af43d6000803e808015610483573d6000f35b3d6000fd5b610491816104d5565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6104de81610659565b61056f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e74726163742061646472657373000000000060648201526084015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161415610135576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e20667260448201527f6f6d207468652070726f78792061646d696e00000000000000000000000000006064820152608401610566565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061068d57508115155b949350505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146106b957600080fd5b919050565b6000602082840312156106d057600080fd5b6106d982610695565b9392505050565b6000806000604084860312156106f557600080fd5b6106fe84610695565b9250602084013567ffffffffffffffff8082111561071b57600080fd5b818601915086601f83011261072f57600080fd5b81358181111561073e57600080fd5b87602082850101111561075057600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156107a557600080fd5b6107ae83610695565b9150602083013567ffffffffffffffff808211156107cb57600080fd5b818501915085601f8301126107df57600080fd5b8135818111156107f1576107f1610763565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561083757610837610763565b8160405282815288602084870101111561085057600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b8183823760009101908152919050565b6000828210156108bb577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b6000825160005b8181101561091057602081860181015185830152016108f6565b8181111561091f576000828501525b50919091019291505056fea26469706673582212207698a80201d2f92a3290973c99527c6e810eaf731191e18abe2c96acab47dca764736f6c634300080a0033a2646970667358221220beb412bf4891c52e806190eca65f487cf9f92319d5184df3e6327e3fcb4793fb64736f6c634300080a0033";
const isSuperArgs = (xs) => xs.length > 1;
class ConfiguratorLogic__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ConfiguratorLogic__factory = ConfiguratorLogic__factory;
ConfiguratorLogic__factory.bytecode = _bytecode;
ConfiguratorLogic__factory.abi = _abi;
