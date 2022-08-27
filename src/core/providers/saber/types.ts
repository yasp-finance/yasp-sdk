import { bignum } from '@metaplex-foundation/beet'
import { PublicKey } from '@solana/web3.js'

export type RawFees = {
  adminTradeFeeNumerator: bignum
  adminTradeFeeDenominator: bignum
  adminWithdrawFeeNumerator: bignum
  adminWithdrawFeeDenominator: bignum
  tradeFeeNumerator: bignum
  tradeFeeDenominator: bignum
  withdrawFeeNumerator: bignum
  withdrawFeeDenominator: bignum
}

export type StableSwap = {
  isInitialized: boolean
  isPaused: boolean
  nonce: number
  initialAmpFactor: bignum
  targetAmpFactor: bignum
  startRampTs: bignum
  stopRampTs: bignum
  futureAdminDeadline: bignum
  futureAdminAccount: PublicKey
  adminAccount: PublicKey
  tokenA: PublicKey
  tokenB: PublicKey
  tokenPool: PublicKey
  tokenAMint: PublicKey
  tokenBMint: PublicKey
  adminFeeAccountA: PublicKey
  adminFeeAccountB: PublicKey
  fees: RawFees
}
