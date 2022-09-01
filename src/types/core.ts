import { Program } from '@project-serum/anchor'
import { AccountInfo, PublicKey } from '@solana/web3.js'
import { Buffer } from 'buffer'

import { VaultProgram } from '../IDL/types/vault'
import { bignum } from '@metaplex-foundation/beet'

export type AccountWithPublicKey<T = AccountInfo<Buffer>> = {
  publicKey: PublicKey
} & T
export type AccountMap<T = unknown> = Map<PublicKey, AccountWithPublicKey<T>>
export type AnchorVaultProgram = Program<VaultProgram>

export type VaultFetch = AnchorVaultProgram['account']['vault']['fetch']
export type VaultStrategyFetch =
  AnchorVaultProgram['account']['vaultStrategy']['fetch']
export type VaultFeeDistributorFetch =
  AnchorVaultProgram['account']['vaultFeeDistributor']['fetch']

export type Vault = {
  padding: Buffer
  bump: number
  mintBump: number
  strategyBump: number
  executorBump: number
  underlyingMint: PublicKey
  authority: PublicKey
  depositLimit: bignum
  totalDeposit: bignum
  totalWithdraw: bignum
  totalGain: bignum

  lastReport: bignum
  lastCrank: bignum
  pauseInterval: bignum
  totalReports: bignum
  createdAt: bignum
  performanceFeeMillibps: bignum
  stakeFeeMillibps: bignum
  unstakeFeeMillibps: bignum
}

export type Amount = {
  None: void
  All: void
  Quantity: { amount: bignum }
  Fraction: { numerator: bignum; denominator: bignum }
}

export enum VaultCommand {
  Harvest,
  RedeemToToken,
  RedeemToLP,
  // RedeemFromLP,
  RedeemToStake,
  // RedeemFromStake,
  ReinvestStake,
  // ReinvestLP,
}

export type VaultOperation = {
  addressId: number
  mintId: number
  amount: Amount
  command: VaultCommand
}

export type VaultStrategy = {
  padding: Buffer
  bump: number
  version: bignum
  currentStep: number
  status: number
  steps: VaultOperation[]
  addressBuffer: PublicKey[]
  mintBuffer: PublicKey[]
  crankers: PublicKey[]
}
export type VaultFeeDistributor = {
  padding: Buffer
  bump: number
  amount: bignum
  totalCranks: bignum
  claimedCranks: bignum
  claimed: PublicKey[]
  reportSnapshot: number[]
  vault: PublicKey
  payer: PublicKey // someone who will receive fee
}

export type Rsu = Record<string, unknown>
export type AwaitedReturnType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>

export interface IVaultAccounts {
  vault(vaultMint: PublicKey): Promise<Vault>
  vaultStrategy(vaultMint: PublicKey): Promise<VaultStrategy>
  vaultFeeDistributor(vaultMint: PublicKey): Promise<VaultFeeDistributor>
}
