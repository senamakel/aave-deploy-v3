import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export declare namespace IUiIncentiveDataProviderV3 {
    type RewardInfoStruct = {
        rewardTokenSymbol: PromiseOrValue<string>;
        rewardTokenAddress: PromiseOrValue<string>;
        rewardOracleAddress: PromiseOrValue<string>;
        emissionPerSecond: PromiseOrValue<BigNumberish>;
        incentivesLastUpdateTimestamp: PromiseOrValue<BigNumberish>;
        tokenIncentivesIndex: PromiseOrValue<BigNumberish>;
        emissionEndTimestamp: PromiseOrValue<BigNumberish>;
        rewardPriceFeed: PromiseOrValue<BigNumberish>;
        rewardTokenDecimals: PromiseOrValue<BigNumberish>;
        precision: PromiseOrValue<BigNumberish>;
        priceFeedDecimals: PromiseOrValue<BigNumberish>;
    };
    type RewardInfoStructOutput = [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        number
    ] & {
        rewardTokenSymbol: string;
        rewardTokenAddress: string;
        rewardOracleAddress: string;
        emissionPerSecond: BigNumber;
        incentivesLastUpdateTimestamp: BigNumber;
        tokenIncentivesIndex: BigNumber;
        emissionEndTimestamp: BigNumber;
        rewardPriceFeed: BigNumber;
        rewardTokenDecimals: number;
        precision: number;
        priceFeedDecimals: number;
    };
    type IncentiveDataStruct = {
        tokenAddress: PromiseOrValue<string>;
        incentiveControllerAddress: PromiseOrValue<string>;
        rewardsTokenInformation: IUiIncentiveDataProviderV3.RewardInfoStruct[];
    };
    type IncentiveDataStructOutput = [
        string,
        string,
        IUiIncentiveDataProviderV3.RewardInfoStructOutput[]
    ] & {
        tokenAddress: string;
        incentiveControllerAddress: string;
        rewardsTokenInformation: IUiIncentiveDataProviderV3.RewardInfoStructOutput[];
    };
    type AggregatedReserveIncentiveDataStruct = {
        underlyingAsset: PromiseOrValue<string>;
        aIncentiveData: IUiIncentiveDataProviderV3.IncentiveDataStruct;
        vIncentiveData: IUiIncentiveDataProviderV3.IncentiveDataStruct;
        sIncentiveData: IUiIncentiveDataProviderV3.IncentiveDataStruct;
    };
    type AggregatedReserveIncentiveDataStructOutput = [
        string,
        IUiIncentiveDataProviderV3.IncentiveDataStructOutput,
        IUiIncentiveDataProviderV3.IncentiveDataStructOutput,
        IUiIncentiveDataProviderV3.IncentiveDataStructOutput
    ] & {
        underlyingAsset: string;
        aIncentiveData: IUiIncentiveDataProviderV3.IncentiveDataStructOutput;
        vIncentiveData: IUiIncentiveDataProviderV3.IncentiveDataStructOutput;
        sIncentiveData: IUiIncentiveDataProviderV3.IncentiveDataStructOutput;
    };
    type UserRewardInfoStruct = {
        rewardTokenSymbol: PromiseOrValue<string>;
        rewardOracleAddress: PromiseOrValue<string>;
        rewardTokenAddress: PromiseOrValue<string>;
        userUnclaimedRewards: PromiseOrValue<BigNumberish>;
        tokenIncentivesUserIndex: PromiseOrValue<BigNumberish>;
        rewardPriceFeed: PromiseOrValue<BigNumberish>;
        priceFeedDecimals: PromiseOrValue<BigNumberish>;
        rewardTokenDecimals: PromiseOrValue<BigNumberish>;
    };
    type UserRewardInfoStructOutput = [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number
    ] & {
        rewardTokenSymbol: string;
        rewardOracleAddress: string;
        rewardTokenAddress: string;
        userUnclaimedRewards: BigNumber;
        tokenIncentivesUserIndex: BigNumber;
        rewardPriceFeed: BigNumber;
        priceFeedDecimals: number;
        rewardTokenDecimals: number;
    };
    type UserIncentiveDataStruct = {
        tokenAddress: PromiseOrValue<string>;
        incentiveControllerAddress: PromiseOrValue<string>;
        userRewardsInformation: IUiIncentiveDataProviderV3.UserRewardInfoStruct[];
    };
    type UserIncentiveDataStructOutput = [
        string,
        string,
        IUiIncentiveDataProviderV3.UserRewardInfoStructOutput[]
    ] & {
        tokenAddress: string;
        incentiveControllerAddress: string;
        userRewardsInformation: IUiIncentiveDataProviderV3.UserRewardInfoStructOutput[];
    };
    type UserReserveIncentiveDataStruct = {
        underlyingAsset: PromiseOrValue<string>;
        aTokenIncentivesUserData: IUiIncentiveDataProviderV3.UserIncentiveDataStruct;
        vTokenIncentivesUserData: IUiIncentiveDataProviderV3.UserIncentiveDataStruct;
        sTokenIncentivesUserData: IUiIncentiveDataProviderV3.UserIncentiveDataStruct;
    };
    type UserReserveIncentiveDataStructOutput = [
        string,
        IUiIncentiveDataProviderV3.UserIncentiveDataStructOutput,
        IUiIncentiveDataProviderV3.UserIncentiveDataStructOutput,
        IUiIncentiveDataProviderV3.UserIncentiveDataStructOutput
    ] & {
        underlyingAsset: string;
        aTokenIncentivesUserData: IUiIncentiveDataProviderV3.UserIncentiveDataStructOutput;
        vTokenIncentivesUserData: IUiIncentiveDataProviderV3.UserIncentiveDataStructOutput;
        sTokenIncentivesUserData: IUiIncentiveDataProviderV3.UserIncentiveDataStructOutput;
    };
}
export interface UiIncentiveDataProviderV3Interface extends utils.Interface {
    functions: {
        "getFullReservesIncentiveData(address,address)": FunctionFragment;
        "getReservesIncentivesData(address)": FunctionFragment;
        "getUserReservesIncentivesData(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getFullReservesIncentiveData" | "getReservesIncentivesData" | "getUserReservesIncentivesData"): FunctionFragment;
    encodeFunctionData(functionFragment: "getFullReservesIncentiveData", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReservesIncentivesData", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserReservesIncentivesData", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "getFullReservesIncentiveData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReservesIncentivesData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserReservesIncentivesData", data: BytesLike): Result;
    events: {};
}
export interface UiIncentiveDataProviderV3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UiIncentiveDataProviderV3Interface;
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
        getFullReservesIncentiveData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IUiIncentiveDataProviderV3.AggregatedReserveIncentiveDataStructOutput[],
            IUiIncentiveDataProviderV3.UserReserveIncentiveDataStructOutput[]
        ]>;
        getReservesIncentivesData(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IUiIncentiveDataProviderV3.AggregatedReserveIncentiveDataStructOutput[]
        ]>;
        getUserReservesIncentivesData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IUiIncentiveDataProviderV3.UserReserveIncentiveDataStructOutput[]
        ]>;
    };
    getFullReservesIncentiveData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        IUiIncentiveDataProviderV3.AggregatedReserveIncentiveDataStructOutput[],
        IUiIncentiveDataProviderV3.UserReserveIncentiveDataStructOutput[]
    ]>;
    getReservesIncentivesData(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IUiIncentiveDataProviderV3.AggregatedReserveIncentiveDataStructOutput[]>;
    getUserReservesIncentivesData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IUiIncentiveDataProviderV3.UserReserveIncentiveDataStructOutput[]>;
    callStatic: {
        getFullReservesIncentiveData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IUiIncentiveDataProviderV3.AggregatedReserveIncentiveDataStructOutput[],
            IUiIncentiveDataProviderV3.UserReserveIncentiveDataStructOutput[]
        ]>;
        getReservesIncentivesData(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IUiIncentiveDataProviderV3.AggregatedReserveIncentiveDataStructOutput[]>;
        getUserReservesIncentivesData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IUiIncentiveDataProviderV3.UserReserveIncentiveDataStructOutput[]>;
    };
    filters: {};
    estimateGas: {
        getFullReservesIncentiveData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReservesIncentivesData(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserReservesIncentivesData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getFullReservesIncentiveData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReservesIncentivesData(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserReservesIncentivesData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
