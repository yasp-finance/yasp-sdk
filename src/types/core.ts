import { Program } from '@project-serum/anchor'
import { AccountInfo, PublicKey } from '@solana/web3.js'
import { Buffer } from 'buffer'

import { VaultProgram } from '../IDL/types/vault'

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

export type Vault = AwaitedReturnType<VaultFetch>
export type VaultStrategy = AwaitedReturnType<VaultStrategyFetch>
export type VaultFeeDistributor = AwaitedReturnType<VaultFeeDistributorFetch>

export type Rsu = Record<string, unknown>
export type AwaitedReturnType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>

export interface IVaultAccounts {
  vault(vaultMint: PublicKey): Promise<Vault>
  vaultStrategy(vaultMint: PublicKey): Promise<VaultStrategy>
  vaultFeeDistributor(vaultMint: PublicKey): Promise<VaultFeeDistributor>
}
