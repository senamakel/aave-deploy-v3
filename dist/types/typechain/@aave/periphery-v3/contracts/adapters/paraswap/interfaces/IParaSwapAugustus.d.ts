import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../../common";
export interface IParaSwapAugustusInterface extends utils.Interface {
    functions: {
        "getTokenTransferProxy()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getTokenTransferProxy"): FunctionFragment;
    encodeFunctionData(functionFragment: "getTokenTransferProxy", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getTokenTransferProxy", data: BytesLike): Result;
    events: {};
}
export interface IParaSwapAugustus extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IParaSwapAugustusInterface;
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
        getTokenTransferProxy(overrides?: CallOverrides): Promise<[string]>;
    };
    getTokenTransferProxy(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getTokenTransferProxy(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getTokenTransferProxy(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getTokenTransferProxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
