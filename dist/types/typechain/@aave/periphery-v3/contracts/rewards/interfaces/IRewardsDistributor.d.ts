import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export interface IRewardsDistributorInterface extends utils.Interface {
    functions: {
        "getAllUserRewards(address[],address)": FunctionFragment;
        "getAssetDecimals(address)": FunctionFragment;
        "getAssetIndex(address,address)": FunctionFragment;
        "getDistributionEnd(address,address)": FunctionFragment;
        "getEmissionManager()": FunctionFragment;
        "getRewardsByAsset(address)": FunctionFragment;
        "getRewardsData(address,address)": FunctionFragment;
        "getRewardsList()": FunctionFragment;
        "getUserAccruedRewards(address,address)": FunctionFragment;
        "getUserAssetIndex(address,address,address)": FunctionFragment;
        "getUserRewards(address[],address,address)": FunctionFragment;
        "setDistributionEnd(address,address,uint32)": FunctionFragment;
        "setEmissionManager(address)": FunctionFragment;
        "setEmissionPerSecond(address,address[],uint88[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAllUserRewards" | "getAssetDecimals" | "getAssetIndex" | "getDistributionEnd" | "getEmissionManager" | "getRewardsByAsset" | "getRewardsData" | "getRewardsList" | "getUserAccruedRewards" | "getUserAssetIndex" | "getUserRewards" | "setDistributionEnd" | "setEmissionManager" | "setEmissionPerSecond"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAllUserRewards", values: [PromiseOrValue<string>[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAssetDecimals", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAssetIndex", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getDistributionEnd", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getEmissionManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRewardsByAsset", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRewardsData", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRewardsList", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUserAccruedRewards", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserAssetIndex", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getUserRewards", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "setDistributionEnd", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setEmissionManager", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setEmissionPerSecond", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    decodeFunctionResult(functionFragment: "getAllUserRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDistributionEnd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEmissionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsByAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserAccruedRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserAssetIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDistributionEnd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEmissionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEmissionPerSecond", data: BytesLike): Result;
    events: {
        "Accrued(address,address,address,uint256,uint256,uint256)": EventFragment;
        "AssetConfigUpdated(address,address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "EmissionManagerUpdated(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Accrued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AssetConfigUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmissionManagerUpdated"): EventFragment;
}
export interface AccruedEventObject {
    asset: string;
    reward: string;
    user: string;
    assetIndex: BigNumber;
    userIndex: BigNumber;
    rewardsAccrued: BigNumber;
}
export type AccruedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], AccruedEventObject>;
export type AccruedEventFilter = TypedEventFilter<AccruedEvent>;
export interface AssetConfigUpdatedEventObject {
    asset: string;
    reward: string;
    oldEmission: BigNumber;
    newEmission: BigNumber;
    oldDistributionEnd: BigNumber;
    newDistributionEnd: BigNumber;
    assetIndex: BigNumber;
}
export type AssetConfigUpdatedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], AssetConfigUpdatedEventObject>;
export type AssetConfigUpdatedEventFilter = TypedEventFilter<AssetConfigUpdatedEvent>;
export interface EmissionManagerUpdatedEventObject {
    oldEmissionManager: string;
    newEmissionManager: string;
}
export type EmissionManagerUpdatedEvent = TypedEvent<[
    string,
    string
], EmissionManagerUpdatedEventObject>;
export type EmissionManagerUpdatedEventFilter = TypedEventFilter<EmissionManagerUpdatedEvent>;
export interface IRewardsDistributor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRewardsDistributorInterface;
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
        getAllUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;
        getAssetDecimals(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number]>;
        getAssetIndex(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getEmissionManager(overrides?: CallOverrides): Promise<[string]>;
        getRewardsByAsset(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;
        getRewardsData(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getRewardsList(overrides?: CallOverrides): Promise<[string[]]>;
        getUserAccruedRewards(user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserAssetIndex(user: PromiseOrValue<string>, asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        setDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, newDistributionEnd: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEmissionManager(emissionManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEmissionPerSecond(asset: PromiseOrValue<string>, rewards: PromiseOrValue<string>[], newEmissionsPerSecond: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getAllUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;
    getAssetDecimals(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    getAssetIndex(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    getDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getEmissionManager(overrides?: CallOverrides): Promise<string>;
    getRewardsByAsset(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    getRewardsData(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    getRewardsList(overrides?: CallOverrides): Promise<string[]>;
    getUserAccruedRewards(user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getUserAssetIndex(user: PromiseOrValue<string>, asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    setDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, newDistributionEnd: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEmissionManager(emissionManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEmissionPerSecond(asset: PromiseOrValue<string>, rewards: PromiseOrValue<string>[], newEmissionsPerSecond: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAllUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;
        getAssetDecimals(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        getAssetIndex(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getEmissionManager(overrides?: CallOverrides): Promise<string>;
        getRewardsByAsset(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        getRewardsData(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getRewardsList(overrides?: CallOverrides): Promise<string[]>;
        getUserAccruedRewards(user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserAssetIndex(user: PromiseOrValue<string>, asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, newDistributionEnd: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setEmissionManager(emissionManager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setEmissionPerSecond(asset: PromiseOrValue<string>, rewards: PromiseOrValue<string>[], newEmissionsPerSecond: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Accrued(address,address,address,uint256,uint256,uint256)"(asset?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, assetIndex?: null, userIndex?: null, rewardsAccrued?: null): AccruedEventFilter;
        Accrued(asset?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, assetIndex?: null, userIndex?: null, rewardsAccrued?: null): AccruedEventFilter;
        "AssetConfigUpdated(address,address,uint256,uint256,uint256,uint256,uint256)"(asset?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, oldEmission?: null, newEmission?: null, oldDistributionEnd?: null, newDistributionEnd?: null, assetIndex?: null): AssetConfigUpdatedEventFilter;
        AssetConfigUpdated(asset?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, oldEmission?: null, newEmission?: null, oldDistributionEnd?: null, newDistributionEnd?: null, assetIndex?: null): AssetConfigUpdatedEventFilter;
        "EmissionManagerUpdated(address,address)"(oldEmissionManager?: PromiseOrValue<string> | null, newEmissionManager?: PromiseOrValue<string> | null): EmissionManagerUpdatedEventFilter;
        EmissionManagerUpdated(oldEmissionManager?: PromiseOrValue<string> | null, newEmissionManager?: PromiseOrValue<string> | null): EmissionManagerUpdatedEventFilter;
    };
    estimateGas: {
        getAllUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetDecimals(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetIndex(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getEmissionManager(overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsByAsset(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsData(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsList(overrides?: CallOverrides): Promise<BigNumber>;
        getUserAccruedRewards(user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserAssetIndex(user: PromiseOrValue<string>, asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, newDistributionEnd: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEmissionManager(emissionManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEmissionPerSecond(asset: PromiseOrValue<string>, rewards: PromiseOrValue<string>[], newEmissionsPerSecond: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAllUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetDecimals(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetIndex(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEmissionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardsByAsset(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardsData(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardsList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserAccruedRewards(user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserAssetIndex(user: PromiseOrValue<string>, asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, newDistributionEnd: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEmissionManager(emissionManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEmissionPerSecond(asset: PromiseOrValue<string>, rewards: PromiseOrValue<string>[], newEmissionsPerSecond: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
