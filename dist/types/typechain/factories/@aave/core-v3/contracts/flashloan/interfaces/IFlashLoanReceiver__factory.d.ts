import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFlashLoanReceiver, IFlashLoanReceiverInterface } from "../../../../../../@aave/core-v3/contracts/flashloan/interfaces/IFlashLoanReceiver";
export declare class IFlashLoanReceiver__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): IFlashLoanReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFlashLoanReceiver;
}
