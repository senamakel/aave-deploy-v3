import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { NativeWrapperMock, NativeWrapperMockInterface } from "../../contracts/NativeWrapperMock";
type NativeWrapperMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NativeWrapperMock__factory extends ContractFactory {
    constructor(...args: NativeWrapperMockConstructorParams);
    deploy(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<NativeWrapperMock>;
    getDeployTransaction(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): NativeWrapperMock;
    connect(signer: Signer): NativeWrapperMock__factory;
    static readonly bytecode = "0x60c0604052600d60808190526c2bb930b83832b21022ba3432b960991b60a0908152620000309160009190620000d0565b50604080518082019091526004808252630ae8aa8960e31b60209092019182526200005e91600191620000d0565b506002805460ff191660121790553480156200007957600080fd5b5060405162000d2838038062000d288339810160408190526200009c9162000243565b8151620000b1906000906020850190620000d0565b508051620000c7906001906020840190620000d0565b505050620002ea565b828054620000de90620002ad565b90600052602060002090601f0160209004810192826200010257600085556200014d565b82601f106200011d57805160ff19168380011785556200014d565b828001600101855582156200014d579182015b828111156200014d57825182559160200191906001019062000130565b506200015b9291506200015f565b5090565b5b808211156200015b576000815560010162000160565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200019e57600080fd5b81516001600160401b0380821115620001bb57620001bb62000176565b604051601f8301601f19908116603f01168101908282118183101715620001e657620001e662000176565b816040528381526020925086838588010111156200020357600080fd5b600091505b8382101562000227578582018301518183018401529082019062000208565b83821115620002395760008385830101525b9695505050505050565b600080604083850312156200025757600080fd5b82516001600160401b03808211156200026f57600080fd5b6200027d868387016200018c565b935060208501519150808211156200029457600080fd5b50620002a3858286016200018c565b9150509250929050565b600181811c90821680620002c257607f821691505b60208210811415620002e457634e487b7160e01b600052602260045260246000fd5b50919050565b610a2e80620002fa6000396000f3fe6080604052600436106100d65760003560e01c806340c10f191161007f578063a0712d6811610059578063a0712d6814610230578063a9059cbb14610250578063d0e30db014610270578063dd62ed3e1461027857600080fd5b806340c10f19146101ce57806370a08231146101ee57806395d89b411461021b57600080fd5b806323b872dd116100b057806323b872dd146101625780632e1a7d4d14610182578063313ce567146101a257600080fd5b806306fdde03146100ea578063095ea7b31461011557806318160ddd1461014557600080fd5b366100e5576100e36102b0565b005b600080fd5b3480156100f657600080fd5b506100ff61030b565b60405161010c91906107dd565b60405180910390f35b34801561012157600080fd5b50610135610130366004610879565b610399565b604051901515815260200161010c565b34801561015157600080fd5b50475b60405190815260200161010c565b34801561016e57600080fd5b5061013561017d3660046108a3565b610412565b34801561018e57600080fd5b506100e361019d3660046108df565b610629565b3480156101ae57600080fd5b506002546101bc9060ff1681565b60405160ff909116815260200161010c565b3480156101da57600080fd5b506101356101e9366004610879565b6106cf565b3480156101fa57600080fd5b506101546102093660046108f8565b60036020526000908152604090205481565b34801561022757600080fd5b506100ff610756565b34801561023c57600080fd5b5061013561024b3660046108df565b610763565b34801561025c57600080fd5b5061013561026b366004610879565b6107c9565b6100e36102b0565b34801561028457600080fd5b50610154610293366004610913565b600460209081526000928352604080842090915290825290205481565b33600090815260036020526040812080543492906102cf908490610975565b909155505060405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b600080546103189061098d565b80601f01602080910402602001604051908101604052809291908181526020018280546103449061098d565b80156103915780601f1061036657610100808354040283529160200191610391565b820191906000526020600020905b81548152906001019060200180831161037457829003601f168201915b505050505081565b33600081815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104019086815260200190565b60405180910390a350600192915050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526003602052604081205482111561044457600080fd5b73ffffffffffffffffffffffffffffffffffffffff841633148015906104ba575073ffffffffffffffffffffffffffffffffffffffff841660009081526004602090815260408083203384529091529020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff14155b156105425773ffffffffffffffffffffffffffffffffffffffff841660009081526004602090815260408083203384529091529020548211156104fc57600080fd5b73ffffffffffffffffffffffffffffffffffffffff841660009081526004602090815260408083203384529091528120805484929061053c9084906109e1565b90915550505b73ffffffffffffffffffffffffffffffffffffffff8416600090815260036020526040812080548492906105779084906109e1565b909155505073ffffffffffffffffffffffffffffffffffffffff8316600090815260036020526040812080548492906105b1908490610975565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161061791815260200190565b60405180910390a35060019392505050565b3360009081526003602052604090205481111561064557600080fd5b33600090815260036020526040812080548392906106649084906109e1565b9091555050604051339082156108fc029083906000818181858888f19350505050158015610696573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260036020526040812080548391908390610706908490610975565b909155505060405182815273ffffffffffffffffffffffffffffffffffffffff8416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610401565b600180546103189061098d565b33600090815260036020526040812080548391908390610784908490610975565b909155505060405182815233906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3506001919050565b60006107d6338484610412565b9392505050565b600060208083528351808285015260005b8181101561080a578581018301518582016040015282016107ee565b8181111561081c576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461087457600080fd5b919050565b6000806040838503121561088c57600080fd5b61089583610850565b946020939093013593505050565b6000806000606084860312156108b857600080fd5b6108c184610850565b92506108cf60208501610850565b9150604084013590509250925092565b6000602082840312156108f157600080fd5b5035919050565b60006020828403121561090a57600080fd5b6107d682610850565b6000806040838503121561092657600080fd5b61092f83610850565b915061093d60208401610850565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561098857610988610946565b500190565b600181811c908216806109a157607f821691505b602082108114156109db577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6000828210156109f3576109f3610946565b50039056fea2646970667358221220237a93b0ae07c388a77d132e34984ee719f7db02a0973eb1c7e1a657ed3a0c7564736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): NativeWrapperMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NativeWrapperMock;
}
export {};