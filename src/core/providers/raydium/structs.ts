import {
  RaydiumGlobalFarmV3,
  RaydiumGlobalFarmV5,
  RaydiumPoolV4,
  RaydiumPoolV5,
  RaydiumUserFarmV3,
  RaydiumUserFarmV5,
  SerumMarket,
} from './types'
import {
  BeetStruct,
  blob,
  publicKey,
  u128,
  u64,
  u8,
  uniformFixedSizeArray,
} from '../../../utils/structs/beets'

export const RaydiumPoolV4Struct = new BeetStruct<RaydiumPoolV4>(
  [
    ['status', u64],
    ['nonce', u64],
    ['maxOrder', u64],
    ['depth', u64],
    ['baseDecimal', u64],
    ['quoteDecimal', u64],
    ['state', u64],
    ['resetFlag', u64],
    ['minSize', u64],
    ['volMaxCutRatio', u64],
    ['amountWaveRatio', u64],
    ['baseLotSize', u64],
    ['quoteLotSize', u64],
    ['minPriceMultiplier', u64],
    ['maxPriceMultiplier', u64],
    ['systemDecimalValue', u64],
    ['minSeparateNumerator', u64],
    ['minSeparateDenominator', u64],
    ['tradeFeeNumerator', u64],
    ['tradeFeeDenominator', u64],
    ['pnlNumerator', u64],
    ['pnlDenominator', u64],
    ['swapFeeNumerator', u64],
    ['swapFeeDenominator', u64],
    ['baseNeedTakePnl', u64],
    ['quoteNeedTakePnl', u64],
    ['quoteTotalPnl', u64],
    ['baseTotalPnl', u64],
    ['quoteTotalDeposited', u128],
    ['baseTotalDeposited', u128],
    ['swapBaseInAmount', u128],
    ['swapQuoteOutAmount', u128],
    ['swapBase2QuoteFee', u64],
    ['swapQuoteInAmount', u128],
    ['swapBaseOutAmount', u128],
    ['swapQuote2BaseFee', u64],
    // amm vault
    ['baseVault', publicKey],
    ['quoteVault', publicKey],
    ['baseMint', publicKey],
    ['quoteMint', publicKey],
    ['lpMint', publicKey],
    ['openOrders', publicKey],
    ['marketId', publicKey],
    ['marketProgramId', publicKey],
    ['targetOrders', publicKey],
    ['withdrawQueue', publicKey],
    ['lpVault', publicKey],
    ['owner', publicKey],
    ['pnlOwner', publicKey],
  ],
  (args) => args as RaydiumPoolV4,
  'RaydiumPoolV4'
)

export const RaydiumPoolV5Struct = new BeetStruct<RaydiumPoolV5>(
  [
    ['accountType', u64],
    ['status', u64],
    ['nonce', u64],
    ['maxOrder', u64],
    ['depth', u64],
    ['baseDecimal', u64],
    ['quoteDecimal', u64],
    ['state', u64],
    ['resetFlag', u64],
    ['minSize', u64],
    ['volMaxCutRatio', u64],
    ['amountWaveRatio', u64],
    ['baseLotSize', u64],
    ['quoteLotSize', u64],
    ['minPriceMultiplier', u64],
    ['maxPriceMultiplier', u64],
    ['systemDecimalsValue', u64],
    ['abortTradeFactor', u64],
    ['priceTickMultiplier', u64],
    ['priceTick', u64],
    ['minSeparateNumerator', u64],
    ['minSeparateDenominator', u64],
    ['tradeFeeNumerator', u64],
    ['tradeFeeDenominator', u64],
    ['pnlNumerator', u64],
    ['pnlDenominator', u64],
    ['swapFeeNumerator', u64],
    ['swapFeeDenominator', u64],
    ['baseNeedTakePnl', u64],
    ['quoteNeedTakePnl', u64],
    ['quoteTotalPnl', u64],
    ['baseTotalPnl', u64],
    ['poolOpenTime', u64],
    ['punishPcAmount', u64],
    ['punishCoinAmount', u64],
    ['orderbookToInitTime', u64],

    ['swapBaseInAmount', u128],
    ['swapQuoteOutAmount', u128],
    ['swapQuoteInAmount', u128],
    ['swapBaseOutAmount', u128],
    ['swapQuote2BaseFee', u64],
    ['swapBase2QuoteFee', u64],

    ['baseVault', publicKey],
    ['quoteVault', publicKey],
    ['baseMint', publicKey],
    ['quoteMint', publicKey],
    ['lpMint', publicKey],

    ['modelDataAccount', publicKey],
    ['openOrders', publicKey],
    ['marketId', publicKey],
    ['marketProgramId', publicKey],
    ['targetOrders', publicKey],
    ['owner', publicKey],
    ['padding', blob(512)],
  ],
  (args) => args as RaydiumPoolV5,
  'RaydiumPoolV5'
)

export const RaydiumGlobalFarmV3Struct = new BeetStruct<RaydiumGlobalFarmV3>(
  [
    ['state', u64],
    ['nonce', u64],
    ['farmBaseVault', publicKey],
    ['farmRewardVaults', uniformFixedSizeArray(publicKey, 2)],
    ['totalRewards', uniformFixedSizeArray(u64, 2)],
    ['perShareRewards', uniformFixedSizeArray(u128, 2)],
    ['lastSlot', u64],
    ['perSlotRewards', uniformFixedSizeArray(u128, 2)],
  ],
  (args) => args as RaydiumGlobalFarmV3,
  'RaydiumGlobalFarmV3'
)

export const RaydiumGlobalFarmV5Struct = new BeetStruct<RaydiumGlobalFarmV5>(
  [
    ['state', u64],
    ['nonce', u64],
    ['farmBaseVault', publicKey],
    ['farmRewardVaultA', publicKey],
    ['totalRewardA', u64],
    ['perShareRewardA', u128],
    ['perSlotRewardA', u64],
    ['option', u8],
    ['farmRewardVaultB', publicKey],
    ['totalRewardB', u64],
    ['perShareRewardB', u128],
    ['perSlotRewardB', u64],
    ['lastSlot', u64],
    ['_', publicKey],
  ],
  (args) => args as RaydiumGlobalFarmV5,
  'RaydiumGlobalFarmV5'
)

export const RaydiumUserFarmV3Struct = new BeetStruct<RaydiumUserFarmV3>(
  [
    ['state', u64],
    ['id', publicKey],
    ['owner', publicKey],
    ['deposited', u64],
    ['rewardDebts', uniformFixedSizeArray(u128, 1)],
  ],
  (args) => args as RaydiumUserFarmV3,
  'RaydiumUserFarmV3'
)

export const RaydiumUserFarmV5Struct = new BeetStruct<RaydiumUserFarmV5>(
  [
    ['state', u64],
    ['id', publicKey],
    ['owner', publicKey],
    ['deposited', u64],
    ['rewardDebts', uniformFixedSizeArray(u128, 2)],
  ],
  (args) => args as RaydiumUserFarmV5,
  'RaydiumUserFarmV5'
)

export const SerumMarketStruct = new BeetStruct<SerumMarket>(
  [
    ['padding', blob(5)],
    ['accountFlags', blob(8)],
    ['owner', publicKey],
    ['signerBump', u64],
    ['tokenAMint', publicKey],
    ['tokenBMint', publicKey],

    ['tokenA', publicKey],
    ['tokenADepositsTotal', u64],
    ['tokenAFees', u64],

    ['tokenB', publicKey],
    ['tokenBDepositsTotal', u64],
    ['tokenBFees', u64],
    ['tokenBDustThreshold', u64],
    ['requestQueue', publicKey],
    ['eventQueue', publicKey],
    ['bids', publicKey],
    ['asks', publicKey],
    ['tokenALotSize', u64],
    ['tokenBLotSize', u64],
    ['feeRateBps', u64],
    ['referrerRebatesAccrued', u64],
  ],
  (args) => args as SerumMarket,
  'SerumMarket'
)
