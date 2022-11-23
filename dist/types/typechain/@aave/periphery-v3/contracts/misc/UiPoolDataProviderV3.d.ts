import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export declare namespace IUiPoolDataProviderV3 {
    type AggregatedReserveDataStruct = {
        underlyingAsset: PromiseOrValue<string>;
        name: PromiseOrValue<string>;
        symbol: PromiseOrValue<string>;
        decimals: PromiseOrValue<BigNumberish>;
        baseLTVasCollateral: PromiseOrValue<BigNumberish>;
        reserveLiquidationThreshold: PromiseOrValue<BigNumberish>;
        reserveLiquidationBonus: PromiseOrValue<BigNumberish>;
        reserveFactor: PromiseOrValue<BigNumberish>;
        usageAsCollateralEnabled: PromiseOrValue<boolean>;
        borrowingEnabled: PromiseOrValue<boolean>;
        stableBorrowRateEnabled: PromiseOrValue<boolean>;
        isActive: PromiseOrValue<boolean>;
        isFrozen: PromiseOrValue<boolean>;
        liquidityIndex: PromiseOrValue<BigNumberish>;
        variableBorrowIndex: PromiseOrValue<BigNumberish>;
        liquidityRate: PromiseOrValue<BigNumberish>;
        variableBorrowRate: PromiseOrValue<BigNumberish>;
        stableBorrowRate: PromiseOrValue<BigNumberish>;
        lastUpdateTimestamp: PromiseOrValue<BigNumberish>;
        aTokenAddress: PromiseOrValue<string>;
        stableDebtTokenAddress: PromiseOrValue<string>;
        variableDebtTokenAddress: PromiseOrValue<string>;
        interestRateStrategyAddress: PromiseOrValue<string>;
        availableLiquidity: PromiseOrValue<BigNumberish>;
        totalPrincipalStableDebt: PromiseOrValue<BigNumberish>;
        averageStableRate: PromiseOrValue<BigNumberish>;
        stableDebtLastUpdateTimestamp: PromiseOrValue<BigNumberish>;
        totalScaledVariableDebt: PromiseOrValue<BigNumberish>;
        priceInMarketReferenceCurrency: PromiseOrValue<BigNumberish>;
        priceOracle: PromiseOrValue<string>;
        variableRateSlope1: PromiseOrValue<BigNumberish>;
        variableRateSlope2: PromiseOrValue<BigNumberish>;
        stableRateSlope1: PromiseOrValue<BigNumberish>;
        stableRateSlope2: PromiseOrValue<BigNumberish>;
        baseStableBorrowRate: PromiseOrValue<BigNumberish>;
        baseVariableBorrowRate: PromiseOrValue<BigNumberish>;
        optimalUsageRatio: PromiseOrValue<BigNumberish>;
        isPaused: PromiseOrValue<boolean>;
        isSiloedBorrowing: PromiseOrValue<boolean>;
        accruedToTreasury: PromiseOrValue<BigNumberish>;
        unbacked: PromiseOrValue<BigNumberish>;
        isolationModeTotalDebt: PromiseOrValue<BigNumberish>;
        debtCeiling: PromiseOrValue<BigNumberish>;
        debtCeilingDecimals: PromiseOrValue<BigNumberish>;
        eModeCategoryId: PromiseOrValue<BigNumberish>;
        borrowCap: PromiseOrValue<BigNumberish>;
        supplyCap: PromiseOrValue<BigNumberish>;
        eModeLtv: PromiseOrValue<BigNumberish>;
        eModeLiquidationThreshold: PromiseOrValue<BigNumberish>;
        eModeLiquidationBonus: PromiseOrValue<BigNumberish>;
        eModePriceSource: PromiseOrValue<string>;
        eModeLabel: PromiseOrValue<string>;
        borrowableInIsolation: PromiseOrValue<boolean>;
    };
    type AggregatedReserveDataStructOutput = [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        string,
        string,
        boolean
    ] & {
        underlyingAsset: string;
        name: string;
        symbol: string;
        decimals: BigNumber;
        baseLTVasCollateral: BigNumber;
        reserveLiquidationThreshold: BigNumber;
        reserveLiquidationBonus: BigNumber;
        reserveFactor: BigNumber;
        usageAsCollateralEnabled: boolean;
        borrowingEnabled: boolean;
        stableBorrowRateEnabled: boolean;
        isActive: boolean;
        isFrozen: boolean;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        liquidityRate: BigNumber;
        variableBorrowRate: BigNumber;
        stableBorrowRate: BigNumber;
        lastUpdateTimestamp: number;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        availableLiquidity: BigNumber;
        totalPrincipalStableDebt: BigNumber;
        averageStableRate: BigNumber;
        stableDebtLastUpdateTimestamp: BigNumber;
        totalScaledVariableDebt: BigNumber;
        priceInMarketReferenceCurrency: BigNumber;
        priceOracle: string;
        variableRateSlope1: BigNumber;
        variableRateSlope2: BigNumber;
        stableRateSlope1: BigNumber;
        stableRateSlope2: BigNumber;
        baseStableBorrowRate: BigNumber;
        baseVariableBorrowRate: BigNumber;
        optimalUsageRatio: BigNumber;
        isPaused: boolean;
        isSiloedBorrowing: boolean;
        accruedToTreasury: BigNumber;
        unbacked: BigNumber;
        isolationModeTotalDebt: BigNumber;
        debtCeiling: BigNumber;
        debtCeilingDecimals: BigNumber;
        eModeCategoryId: number;
        borrowCap: BigNumber;
        supplyCap: BigNumber;
        eModeLtv: number;
        eModeLiquidationThreshold: number;
        eModeLiquidationBonus: number;
        eModePriceSource: string;
        eModeLabel: string;
        borrowableInIsolation: boolean;
    };
    type BaseCurrencyInfoStruct = {
        marketReferenceCurrencyUnit: PromiseOrValue<BigNumberish>;
        marketReferenceCurrencyPriceInUsd: PromiseOrValue<BigNumberish>;
        networkBaseTokenPriceInUsd: PromiseOrValue<BigNumberish>;
        networkBaseTokenPriceDecimals: PromiseOrValue<BigNumberish>;
    };
    type BaseCurrencyInfoStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        number
    ] & {
        marketReferenceCurrencyUnit: BigNumber;
        marketReferenceCurrencyPriceInUsd: BigNumber;
        networkBaseTokenPriceInUsd: BigNumber;
        networkBaseTokenPriceDecimals: number;
    };
    type UserReserveDataStruct = {
        underlyingAsset: PromiseOrValue<string>;
        scaledATokenBalance: PromiseOrValue<BigNumberish>;
        usageAsCollateralEnabledOnUser: PromiseOrValue<boolean>;
        stableBorrowRate: PromiseOrValue<BigNumberish>;
        scaledVariableDebt: PromiseOrValue<BigNumberish>;
        principalStableDebt: PromiseOrValue<BigNumberish>;
        stableBorrowLastUpdateTimestamp: PromiseOrValue<BigNumberish>;
    };
    type UserReserveDataStructOutput = [
        string,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        underlyingAsset: string;
        scaledATokenBalance: BigNumber;
        usageAsCollateralEnabledOnUser: boolean;
        stableBorrowRate: BigNumber;
        scaledVariableDebt: BigNumber;
        principalStableDebt: BigNumber;
        stableBorrowLastUpdateTimestamp: BigNumber;
    };
}
export interface UiPoolDataProviderV3Interface extends utils.Interface {
    functions: {
        "ETH_CURRENCY_UNIT()": FunctionFragment;
        "MKR_ADDRESS()": FunctionFragment;
        "bytes32ToString(bytes32)": FunctionFragment;
        "getReservesData(address)": FunctionFragment;
        "getReservesList(address)": FunctionFragment;
        "getUserReservesData(address,address)": FunctionFragment;
        "marketReferenceCurrencyPriceInUsdProxyAggregator()": FunctionFragment;
        "networkBaseTokenPriceInUsdProxyAggregator()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ETH_CURRENCY_UNIT" | "MKR_ADDRESS" | "bytes32ToString" | "getReservesData" | "getReservesList" | "getUserReservesData" | "marketReferenceCurrencyPriceInUsdProxyAggregator" | "networkBaseTokenPriceInUsdProxyAggregator"): FunctionFragment;
    encodeFunctionData(functionFragment: "ETH_CURRENCY_UNIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "MKR_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "bytes32ToString", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getReservesData", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReservesList", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserReservesData", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "marketReferenceCurrencyPriceInUsdProxyAggregator", values?: undefined): string;
    encodeFunctionData(functionFragment: "networkBaseTokenPriceInUsdProxyAggregator", values?: undefined): string;
    decodeFunctionResult(functionFragment: "ETH_CURRENCY_UNIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MKR_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bytes32ToString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReservesData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReservesList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserReservesData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketReferenceCurrencyPriceInUsdProxyAggregator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "networkBaseTokenPriceInUsdProxyAggregator", data: BytesLike): Result;
    events: {};
}
export interface UiPoolDataProviderV3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UiPoolDataProviderV3Interface;
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
        ETH_CURRENCY_UNIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        MKR_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        bytes32ToString(_bytes32: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getReservesData(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IUiPoolDataProviderV3.AggregatedReserveDataStructOutput[],
            IUiPoolDataProviderV3.BaseCurrencyInfoStructOutput
        ]>;
        getReservesList(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;
        getUserReservesData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[IUiPoolDataProviderV3.UserReserveDataStructOutput[], number]>;
        marketReferenceCurrencyPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<[string]>;
        networkBaseTokenPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<[string]>;
    };
    ETH_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
    MKR_ADDRESS(overrides?: CallOverrides): Promise<string>;
    bytes32ToString(_bytes32: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getReservesData(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        IUiPoolDataProviderV3.AggregatedReserveDataStructOutput[],
        IUiPoolDataProviderV3.BaseCurrencyInfoStructOutput
    ]>;
    getReservesList(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    getUserReservesData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[IUiPoolDataProviderV3.UserReserveDataStructOutput[], number]>;
    marketReferenceCurrencyPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<string>;
    networkBaseTokenPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        ETH_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
        MKR_ADDRESS(overrides?: CallOverrides): Promise<string>;
        bytes32ToString(_bytes32: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getReservesData(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IUiPoolDataProviderV3.AggregatedReserveDataStructOutput[],
            IUiPoolDataProviderV3.BaseCurrencyInfoStructOutput
        ]>;
        getReservesList(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        getUserReservesData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[IUiPoolDataProviderV3.UserReserveDataStructOutput[], number]>;
        marketReferenceCurrencyPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<string>;
        networkBaseTokenPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        ETH_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
        MKR_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        bytes32ToString(_bytes32: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getReservesData(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReservesList(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserReservesData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        marketReferenceCurrencyPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<BigNumber>;
        networkBaseTokenPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ETH_CURRENCY_UNIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MKR_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bytes32ToString(_bytes32: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReservesData(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReservesList(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserReservesData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketReferenceCurrencyPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        networkBaseTokenPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
