import {
  Connection,
  PublicKey,
  Signer,
  TransactionInstruction,
} from '@solana/web3.js'
import { AccountWithPublicKey, Vault } from '@type/core'
import BN from 'bn.js'

export type VaultContext = {
  vault: AccountWithPublicKey<Vault>
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

export interface ProviderResolvers<P, F, U> {
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
  unStake(
    amount: BN,
    signer: Signer,
    context: C
  ): Promise<TransactionInstruction[]>

  stake(
    amount: BN,
    signer: Signer,
    context: C
  ): Promise<TransactionInstruction[]>

  harvest(signer: Signer, context: C): Promise<TransactionInstruction[]>

  reinvest(signer: Signer, context: C): Promise<TransactionInstruction[]>

  redeemToStake(signer: Signer, context: C): Promise<TransactionInstruction[]>

  redeemToLP(signer: Signer, context: C): Promise<TransactionInstruction[]>

  redeemToToken(signer: Signer, context: C): Promise<TransactionInstruction[]>

  init(signer: Signer, context: C): Promise<TransactionInstruction[]>
}

export interface Provider<P, F, U> {
  providerName: string

  providerSlug: string

  contextAdapter: ProviderContextAdapter<P, F>

  instructions: ProviderInstructions<ProviderContext<P, F>>

  resolvers: ProviderResolvers<P, F, U>
}
