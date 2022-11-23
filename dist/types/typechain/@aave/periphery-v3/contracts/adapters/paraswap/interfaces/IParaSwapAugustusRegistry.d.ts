import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../../common";
export interface IParaSwapAugustusRegistryInterface extends utils.Interface {
    functions: {
        "isValidAugustus(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "isValidAugustus"): FunctionFragment;
    encodeFunctionData(functionFragment: "isValidAugustus", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "isValidAugustus", data: BytesLike): Result;
    events: {};
}
export interface IParaSwapAugustusRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IParaSwapAugustusRegistryInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        isValidAugustus(augustus: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    isValidAugustus(augustus: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        isValidAugustus(augustus: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        isValidAugustus(augustus: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        isValidAugustus(augustus: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
