import { bignum } from '@metaplex-foundation/beet'
import { PublicKey } from '@solana/web3.js'

export type Decimal = bignum[]

export type LastUpdate = {
  slot: bignum
  stale: boolean
}

export type LendingMarket = {
  version: number
  bumpSeed: number
  owner: PublicKey
  quoteCurrency: number[]
  tokenProgramId: PublicKey
  oracleProgramId: PublicKey
  switchboardOracleProgramId: PublicKey
}

export type ReserveFees = {
  borrowFeeWad: bignum
  flashLoanFeeWad: bignum
  hostFeePercentage: number
}

export type ReserveConfig = {
  optimalUtilizationRate: number
  loanToValueRatio: number
  liquidationBonus: number
  liquidationThreshold: number
  minBorrowRate: number
  optimalBorrowRate: number
  maxBorrowRate: number
  fees: ReserveFees
  depositLimit: bignum
  borrowLimit: bignum
  feeReceiver: PublicKey
  protocolLiquidationFee: number
  protocolTakeRate: number
}

export type ReserveCollateral = {
  mint: PublicKey
  mintTotalSupply: bignum
  supplyReserve: PublicKey
}

export type ReserveLiquidity = {
  mint: PublicKey
  mintDecimals: number
  supplyReserve: PublicKey
  pythOracle: PublicKey
  switchboardOracle: PublicKey
  availableAmount: bignum
  borrowedAmountWads: Decimal
  cumulativeBorrowRateWads: Decimal
  accumulatedProtocolFeesWads: Decimal
  marketPrice: Decimal
}

export type Reserve = {
  version: number
  lastUpdate: LastUpdate
  lendingMarket: PublicKey
  liquidity: ReserveLiquidity
  collateral: ReserveCollateral
  config: ReserveConfig
}

export type ObligationCollateral = {
  depositReserve: PublicKey
  depositedAmount: bignum
  marketValue: Decimal
}

export type ObligationLiquidity = {
  borrowReserve: PublicKey
  cumulativeBorrowRateWads: Decimal
  borrowedAmountWads: Decimal
  marketValue: Decimal
}

export type Obligation = {
  version: number
  lastUpdate: LastUpdate
  lendingMarket: PublicKey
  owner: PublicKey
  deposits: ObligationCollateral[]
  borrows: ObligationLiquidity[]
  depositedValue: Decimal
  borrowedValue: Decimal
  allowedBorrowValue: Decimal
  unhealthyBorrowValue: Decimal
}
