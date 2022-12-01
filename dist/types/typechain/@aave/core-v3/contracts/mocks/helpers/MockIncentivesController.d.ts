import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export interface MockIncentivesControllerInterface extends utils.Interface {
    functions: {
        "DISTRIBUTION_END()": FunctionFragment;
        "PRECISION()": FunctionFragment;
        "REWARD_TOKEN()": FunctionFragment;
        "assets(address)": FunctionFragment;
        "claimRewards(address[],uint256,address)": FunctionFragment;
        "claimRewardsOnBehalf(address[],uint256,address,address)": FunctionFragment;
        "configureAssets(address[],uint256[])": FunctionFragment;
        "getAssetData(address)": FunctionFragment;
        "getClaimer(address)": FunctionFragment;
        "getRewardsBalance(address[],address)": FunctionFragment;
        "getUserAssetData(address,address)": FunctionFragment;
        "getUserUnclaimedRewards(address)": FunctionFragment;
        "handleAction(address,uint256,uint256)": FunctionFragment;
        "setClaimer(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DISTRIBUTION_END" | "PRECISION" | "REWARD_TOKEN" | "assets" | "claimRewards" | "claimRewardsOnBehalf" | "configureAssets" | "getAssetData" | "getClaimer" | "getRewardsBalance" | "getUserAssetData" | "getUserUnclaimedRewards" | "handleAction" | "setClaimer"): FunctionFragment;
    encodeFunctionData(functionFragment: "DISTRIBUTION_END", values?: undefined): string;
    encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "REWARD_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "assets", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "claimRewardsOnBehalf", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "configureAssets", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getAssetData", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getClaimer", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRewardsBalance", values: [PromiseOrValue<string>[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserAssetData", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserUnclaimedRewards", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "handleAction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setClaimer", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "DISTRIBUTION_END", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REWARD_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewardsOnBehalf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "configureAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserAssetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserUnclaimedRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimer", data: BytesLike): Result;
    events: {
        "ClaimerSet(address,address)": EventFragment;
        "RewardsAccrued(address,uint256)": EventFragment;
        "RewardsClaimed(address,address,uint256)": EventFragment;
        "RewardsClaimed(address,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimerSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsAccrued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsClaimed(address,address,uint256)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsClaimed(address,address,address,uint256)"): EventFragment;
}
export interface ClaimerSetEventObject {
    user: string;
    claimer: string;
}
export type ClaimerSetEvent = TypedEvent<[
    string,
    string
], ClaimerSetEventObject>;
export type ClaimerSetEventFilter = TypedEventFilter<ClaimerSetEvent>;
export interface RewardsAccruedEventObject {
    user: string;
    amount: BigNumber;
}
export type RewardsAccruedEvent = TypedEvent<[
    string,
    BigNumber
], RewardsAccruedEventObject>;
export type RewardsAccruedEventFilter = TypedEventFilter<RewardsAccruedEvent>;
export interface RewardsClaimed_address_address_uint256_EventObject {
    user: string;
    to: string;
    amount: BigNumber;
}
export type RewardsClaimed_address_address_uint256_Event = TypedEvent<[
    string,
    string,
    BigNumber
], RewardsClaimed_address_address_uint256_EventObject>;
export type RewardsClaimed_address_address_uint256_EventFilter = TypedEventFilter<RewardsClaimed_address_address_uint256_Event>;
export interface RewardsClaimed_address_address_address_uint256_EventObject {
    user: string;
    to: string;
    claimer: string;
    amount: BigNumber;
}
export type RewardsClaimed_address_address_address_uint256_Event = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], RewardsClaimed_address_address_address_uint256_EventObject>;
export type RewardsClaimed_address_address_address_uint256_EventFilter = TypedEventFilter<RewardsClaimed_address_address_address_uint256_Event>;
export interface MockIncentivesController extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockIncentivesControllerInterface;
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
        DISTRIBUTION_END(overrides?: CallOverrides): Promise<[BigNumber]>;
        PRECISION(overrides?: CallOverrides): Promise<[number]>;
        REWARD_TOKEN(overrides?: CallOverrides): Promise<[string]>;
        assets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        claimRewards(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimRewardsOnBehalf(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        configureAssets(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAssetData(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getClaimer(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getRewardsBalance(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserAssetData(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserUnclaimedRewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        handleAction(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setClaimer(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;
    PRECISION(overrides?: CallOverrides): Promise<number>;
    REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;
    assets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    claimRewards(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    claimRewardsOnBehalf(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    configureAssets(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAssetData(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    getClaimer(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getRewardsBalance(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getUserAssetData(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getUserUnclaimedRewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    handleAction(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setClaimer(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;
        PRECISION(overrides?: CallOverrides): Promise<number>;
        REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;
        assets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        claimRewards(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewardsOnBehalf(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        configureAssets(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        getAssetData(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getClaimer(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getRewardsBalance(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserAssetData(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserUnclaimedRewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        handleAction(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setClaimer(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ClaimerSet(address,address)"(user?: PromiseOrValue<string> | null, claimer?: PromiseOrValue<string> | null): ClaimerSetEventFilter;
        ClaimerSet(user?: PromiseOrValue<string> | null, claimer?: PromiseOrValue<string> | null): ClaimerSetEventFilter;
        "RewardsAccrued(address,uint256)"(user?: PromiseOrValue<string> | null, amount?: null): RewardsAccruedEventFilter;
        RewardsAccrued(user?: PromiseOrValue<string> | null, amount?: null): RewardsAccruedEventFilter;
        "RewardsClaimed(address,address,uint256)"(user?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): RewardsClaimed_address_address_uint256_EventFilter;
        "RewardsClaimed(address,address,address,uint256)"(user?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, claimer?: PromiseOrValue<string> | null, amount?: null): RewardsClaimed_address_address_address_uint256_EventFilter;
    };
    estimateGas: {
        DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;
        PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
        REWARD_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        assets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewardsOnBehalf(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        configureAssets(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAssetData(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getClaimer(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsBalance(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserAssetData(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserUnclaimedRewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        handleAction(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setClaimer(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DISTRIBUTION_END(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REWARD_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimRewards(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimRewardsOnBehalf(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        configureAssets(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAssetData(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getClaimer(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardsBalance(arg0: PromiseOrValue<string>[], arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserAssetData(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserUnclaimedRewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handleAction(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setClaimer(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}