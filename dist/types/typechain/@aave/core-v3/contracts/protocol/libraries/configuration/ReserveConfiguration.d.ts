import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../../common";
export interface ReserveConfigurationInterface extends utils.Interface {
    functions: {
        "DEBT_CEILING_DECIMALS()": FunctionFragment;
        "MAX_RESERVES_COUNT()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEBT_CEILING_DECIMALS" | "MAX_RESERVES_COUNT"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEBT_CEILING_DECIMALS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_RESERVES_COUNT", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEBT_CEILING_DECIMALS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_RESERVES_COUNT", data: BytesLike): Result;
    events: {};
}
export interface ReserveConfiguration extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReserveConfigurationInterface;
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
        DEBT_CEILING_DECIMALS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_RESERVES_COUNT(overrides?: CallOverrides): Promise<[number]>;
    };
    DEBT_CEILING_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_RESERVES_COUNT(overrides?: CallOverrides): Promise<number>;
    callStatic: {
        DEBT_CEILING_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_RESERVES_COUNT(overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        DEBT_CEILING_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_RESERVES_COUNT(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEBT_CEILING_DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_RESERVES_COUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
