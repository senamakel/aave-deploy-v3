import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface IPriceOracleInterface extends utils.Interface {
    functions: {
        "getAssetPrice(address)": FunctionFragment;
        "setAssetPrice(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAssetPrice" | "setAssetPrice"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setAssetPrice", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAssetPrice", data: BytesLike): Result;
    events: {};
}
export interface IPriceOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPriceOracleInterface;
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
        getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        setAssetPrice(asset: PromiseOrValue<string>, price: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    setAssetPrice(asset: PromiseOrValue<string>, price: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setAssetPrice(asset: PromiseOrValue<string>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setAssetPrice(asset: PromiseOrValue<string>, price: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAssetPrice(asset: PromiseOrValue<string>, price: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
