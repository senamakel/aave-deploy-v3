import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITestnetERC20, ITestnetERC20Interface } from "../../../contracts/testnet-helpers/ITestnetERC20";
export declare class ITestnetERC20__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
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
    })[];
    static createInterface(): ITestnetERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITestnetERC20;
}
