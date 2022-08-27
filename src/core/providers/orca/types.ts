import { PublicKey } from '@solana/web3.js'
import BN from 'bn.js'
import { bignum } from '@metaplex-foundation/beet'

export type OrcaGlobalFarm = {
  isInitialized: boolean
  accountType: number
  nonce: number
  tokenProgramId: PublicKey
  emissionsAuthority: PublicKey
  removeRewardsAuthority: PublicKey
  baseTokenMint: PublicKey
  baseTokenVault: PublicKey
  rewardTokenVault: PublicKey
  farmTokenMint: PublicKey
  emissionsPerSecondNumerator: BN
  emissionsPerSecondDenominator: BN
  lastUpdatedTimestamp: BN
  cumulativeEmissionsPerFarmToken: BN
}

export type OrcaUserFarm = {
  isInitialized: boolean
  accountType: number
  globalFarm: PublicKey
  owner: PublicKey
  baseTokensConverted: bignum
  cumulativeEmissionsCheckpoint: BN
}

export type OrcaPool = {
  isInitialized: boolean
  version: number
  nonce: number
  tokenProgramId: PublicKey
  tokenA: PublicKey
  tokenB: PublicKey
  poolMint: PublicKey
  tokenAMint: PublicKey
  tokenBMint: PublicKey
  feeAccount: PublicKey
  tradeFeeNumerator: BN
  tradeFeeDenominator: BN
  ownerTradeFeeNumerator: BN
  ownerTradeFeeDenominator: BN
  ownerWithdrawFeeNumerator: BN
  ownerWithdrawFeeDenominator: BN
  hostFeeNumerator: BN
  hostFeeDenominator: BN
  curveType: number
  curveParameters: Buffer
}
