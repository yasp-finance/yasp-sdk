import { PublicKey } from '@solana/web3.js'
import { bignum } from '@metaplex-foundation/beet'
import BN from 'bn.js'

export type WhirlpoolRewardInfo = {
  mint: PublicKey
  vault: PublicKey
  authority: PublicKey
  emissionsPerSecondX64: bignum
  growthGlobalX64: bignum
}

export type Whirlpool = {
  padding: Buffer
  whirlpoolsConfig: PublicKey
  whirlpoolBump: number[]
  feeRate: number
  tickSpacing: number
  tickSpacingSeed: number[]
  protocolFeeRate: number
  liquidity: bignum
  sqrtPrice: bignum
  tickCurrentIndex: number
  protocolFeeOwedA: bignum
  protocolFeeOwedB: bignum
  tokenMintA: PublicKey
  tokenVaultA: PublicKey
  feeGrowthGlobalA: bignum
  tokenMintB: PublicKey
  tokenVaultB: PublicKey
  feeGrowthGlobalB: bignum
  rewardLastUpdatedTimestamp: bignum
  rewardInfos: WhirlpoolRewardInfo[]
}

export type PositionRewardInfo = {
  growthInsideCheckpoint: BN
  amountOwed: bignum
}

export type Position = {
  padding: Buffer
  whirlpool: PublicKey
  positionMint: PublicKey
  liquidity: BN
  tickLowerIndex: number
  tickUpperIndex: number
  feeGrowthCheckpointA: BN
  feeOwedA: bignum
  feeGrowthCheckpointB: BN
  feeOwedB: bignum
  rewardInfos: PositionRewardInfo[]
}
