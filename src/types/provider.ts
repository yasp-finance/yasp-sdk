import { Connection, PublicKey, TransactionInstruction } from '@solana/web3.js'
import { AccountWithPublicKey, Vault } from '@type/core'

export type VaultContext = {
  vault: Vault
  shares: PublicKey
  executor: PublicKey
  strategy: PublicKey
}

export type ProviderPoolContext<P> = {
  pool: AccountWithPublicKey<P>
  vaultTokenAAccount: PublicKey
  vaultTokenBAccount: PublicKey
  vaultLpTokenAccount: PublicKey
}

export type ProviderFarmContext<F> = {
  farm: AccountWithPublicKey<F>
  vaultBaseTokenAccount: PublicKey
  vaultFarmTokenAccount: PublicKey
  vaultRewardTokenAccounts: PublicKey[]
  farmAccount: PublicKey
}

export type ProviderFarmContextWithVault<F> = VaultContext &
  ProviderFarmContext<F>
export type ProviderPoolContextWithVault<F> = VaultContext &
  ProviderPoolContext<F>

export type ProviderContext<P = unknown, F = unknown> =
  | ProviderPoolContext<P>
  | ProviderFarmContext<F>

export interface ProviderContextAdapter<P = unknown, F = unknown> {
  toProviderPoolContext(
    vault: Vault,
    pool: AccountWithPublicKey<P>
  ): Promise<ProviderPoolContext<P>>

  toProviderFarmContext(
    vault: Vault,
    farm: AccountWithPublicKey<F>
  ): Promise<ProviderFarmContext<F>>
}

export interface ProviderInstructions<C = ProviderContext> {
  // unStake(context: C): Promise<TransactionInstruction[]>

  // stake(context: C): Promise<TransactionInstruction[]>

  harvest(context: C): Promise<TransactionInstruction[]>

  reinvest(context: C): Promise<TransactionInstruction[]>

  redeemToStake(context: C): Promise<TransactionInstruction[]>

  redeemToLP(context: C): Promise<TransactionInstruction[]>

  redeemToToken(context: C): Promise<TransactionInstruction[]>

  init(context: C): Promise<TransactionInstruction[]>
}

export interface Provider<P, F, U> {
  providerName: string

  providerSlug: string

  solanaConnection: Connection

  contextAdapter: ProviderContextAdapter<P, F>

  instructions: ProviderInstructions<ProviderContext<P, F>>

  resolvePools(
    addresses: PublicKey[]
  ): Promise<Map<PublicKey, AccountWithPublicKey<P>>>

  resolveFarms(
    addresses: PublicKey[]
  ): Promise<Map<PublicKey, AccountWithPublicKey<F>>>

  resolveUserFarms(
    addresses: PublicKey[]
  ): Promise<Map<PublicKey, AccountWithPublicKey<U>>>
}
