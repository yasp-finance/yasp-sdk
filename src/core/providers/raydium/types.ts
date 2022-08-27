import { PublicKey } from '@solana/web3.js'
import { bignum } from '@metaplex-foundation/beet'
import BN from 'bn.js'

export type RaydiumUserFarmV3 = {
  state: bignum
  id: PublicKey
  owner: PublicKey
  deposited: bignum
  rewardDebts: bignum[]
}

export type RaydiumUserFarmV5 = {
  state: bignum
  id: PublicKey
  owner: PublicKey
  deposited: bignum
  rewardDebts: bignum[]
}

export type RaydiumGlobalFarmV3 = {
  state: bignum
  nonce: bignum
  farmBaseVault: PublicKey
  farmRewardVaults: PublicKey[]
  totalRewards: bignum[]
  perShareRewards: BN[]
  lastSlot: bignum
  perSlotRewards: bignum[]
}

export type RaydiumGlobalFarmV5 = {
  state: bignum
  nonce: bignum
  farmBaseVault: PublicKey
  farmRewardVaultA: PublicKey
  totalRewardA: bignum
  perShareRewardA: BN
  perSlotRewardA: bignum
  option: number
  farmRewardVaultB: PublicKey
  totalRewardB: bignum
  perShareRewardB: BN
  perSlotRewardB: bignum
  lastSlot: bignum
  _: PublicKey
}

export type RaydiumPoolV4 = {
  status: bignum
  nonce: bignum
  maxOrder: bignum
  depth: bignum
  baseDecimal: bignum
  quoteDecimal: bignum
  state: bignum
  resetFlag: bignum
  minSize: bignum
  volMaxCutRatio: bignum
  amountWaveRatio: bignum
  baseLotSize: bignum
  quoteLotSize: bignum
  minPriceMultiplier: bignum
  maxPriceMultiplier: bignum
  systemDecimalValue: bignum
  minSeparateNumerator: bignum
  minSeparateDenominator: bignum
  tradeFeeNumerator: bignum
  tradeFeeDenominator: bignum
  pnlNumerator: bignum
  pnlDenominator: bignum
  swapFeeNumerator: bignum
  swapFeeDenominator: bignum
  baseNeedTakePnl: bignum
  quoteNeedTakePnl: bignum
  quoteTotalPnl: bignum
  baseTotalPnl: bignum
  quoteTotalDeposited: bignum
  baseTotalDeposited: bignum
  swapBaseInAmount: bignum
  swapQuoteOutAmount: bignum
  swapBase2QuoteFee: bignum
  swapQuoteInAmount: bignum
  swapBaseOutAmount: bignum
  swapQuote2BaseFee: bignum
  // amm vault
  baseVault: PublicKey
  quoteVault: PublicKey
  // mint
  baseMint: PublicKey
  quoteMint: PublicKey
  lpMint: PublicKey
  // market
  openOrders: PublicKey
  marketId: PublicKey
  marketProgramId: PublicKey
  targetOrders: PublicKey
  withdrawQueue: PublicKey
  lpVault: PublicKey
  owner: PublicKey
  pnlOwner: PublicKey
}

export type RaydiumPoolV5 = {
  accountType: bignum
  status: bignum
  nonce: bignum
  maxOrder: bignum
  depth: bignum
  baseDecimal: bignum
  quoteDecimal: bignum
  state: bignum
  resetFlag: bignum
  minSize: bignum
  volMaxCutRatio: bignum
  amountWaveRatio: bignum
  baseLotSize: bignum
  quoteLotSize: bignum
  minPriceMultiplier: bignum
  maxPriceMultiplier: bignum
  systemDecimalsValue: bignum
  abortTradeFactor: bignum
  priceTickMultiplier: bignum
  priceTick: bignum

  minSeparateNumerator: bignum
  minSeparateDenominator: bignum
  tradeFeeNumerator: bignum
  tradeFeeDenominator: bignum
  pnlNumerator: bignum
  pnlDenominator: bignum
  swapFeeNumerator: bignum
  swapFeeDenominator: bignum

  baseNeedTakePnl: bignum
  quoteNeedTakePnl: bignum
  quoteTotalPnl: bignum
  baseTotalPnl: bignum
  poolOpenTime: bignum
  punishPcAmount: bignum
  punishCoinAmount: bignum
  orderbookToInitTime: bignum
  swapBaseInAmount: bignum
  swapQuoteOutAmount: bignum
  swapQuoteInAmount: bignum
  swapBaseOutAmount: bignum
  swapQuote2BaseFee: bignum
  swapBase2QuoteFee: bignum

  baseVault: PublicKey
  quoteVault: PublicKey
  baseMint: PublicKey
  quoteMint: PublicKey
  lpMint: PublicKey

  modelDataAccount: PublicKey
  openOrders: PublicKey
  marketId: PublicKey
  marketProgramId: PublicKey
  targetOrders: PublicKey
  owner: PublicKey
  padding: Buffer
}

export type SerumMarket = {
  padding: Buffer
  accountFlags: Buffer
  owner: PublicKey
  signerBump: bignum
  tokenAMint: PublicKey
  tokenBMint: PublicKey

  tokenA: PublicKey
  tokenADepositsTotal: bignum
  tokenAFees: bignum

  tokenB: PublicKey
  tokenBDepositsTotal: bignum
  tokenBFees: bignum
  tokenBDustThreshold: bignum

  requestQueue: PublicKey
  eventQueue: PublicKey
  bids: PublicKey
  asks: PublicKey

  tokenALotSize: bignum
  tokenBLotSize: bignum
  feeRateBps: bignum
  referrerRebatesAccrued: bignum
}

export type RaydiumPool = RaydiumPoolV5 | RaydiumPoolV4
export type RaydiumUserFarm = RaydiumUserFarmV3 | RaydiumUserFarmV5
export type RaydiumGlobalFarm = RaydiumGlobalFarmV3 | RaydiumGlobalFarmV5
