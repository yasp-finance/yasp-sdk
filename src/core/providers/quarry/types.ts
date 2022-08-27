import { PublicKey } from '@solana/web3.js'
import { bignum } from '@metaplex-foundation/beet'
import BN from 'bn.js'

export type Miner = {
  padding: Buffer
  quarry: PublicKey
  authority: PublicKey
  bump: number
  tokenVaultKey: PublicKey
  rewardsEarned: bignum
  rewardsPerTokenPaid: BN
  balance: bignum
  index: bignum
}

export type Rewarder = {
  padding: Buffer
  base: PublicKey
  bump: number
  authority: PublicKey
  pendingAuthority: PublicKey
  numQuarries: bignum
  annualRewardsRate: bignum
  totalRewardsShares: bignum
  mintWrapper: PublicKey
  rewardsTokenMint: PublicKey
  claimFeeTokenAccount: PublicKey
  maxClaimFeeMillibps: bignum
  pauseAuthority: PublicKey
  isPaused: boolean
}

export type Quarry = {
  padding: Buffer
  rewarder: PublicKey
  tokenMintKey: PublicKey
  bump: number
  index: bignum
  tokenMintDecimals: number
  famineTs: bignum
  lastUpdateTs: bignum
  rewardsPerTokenStored: BN
  annualRewardsRate: bignum
  rewardsShare: bignum
  totalTokensDeposited: bignum
  numMiners: bignum
}

export type Minter = {
  padding: Buffer
  mintWrapper: PublicKey
  minterAuthority: PublicKey
  bump: number
  index: bignum
  allowance: bignum
  totalMinted: bignum
}

export type MintWrapper = {
  padding: Buffer
  base: PublicKey
  bump: number
  hardCap: bignum
  admin: PublicKey
  pendingAdmin: PublicKey
  tokenMint: PublicKey
  numMinters: bignum
  totalAllowance: bignum
  totalMinted: bignum
}
