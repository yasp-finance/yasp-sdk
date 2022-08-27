import { Program } from "@project-serum/anchor";
import {PublicKey} from "@solana/web3.js";

import { VaultProgram } from "../IDL/types/vault";

export type AnchorVaultProgram = Program<VaultProgram>

export type VaultFetch = AnchorVaultProgram['account']['vault']['fetch']
export type VaultStrategyFetch = AnchorVaultProgram['account']['vaultStrategy']['fetch']
export type VaultFeeDistributorFetch = AnchorVaultProgram['account']['vaultFeeDistributor']['fetch']

export type Vault = AwaitedReturnType<VaultFetch>
export type VaultStrategy = AwaitedReturnType<VaultStrategyFetch>
export type VaultFeeDistributor = AwaitedReturnType<VaultFeeDistributorFetch>

export type Rsu = Record<string, unknown>
export type AwaitedReturnType<T extends (...args: any) => any> = Awaited<ReturnType<T>>


type Instruction = Record<string, unknown>

export interface IVaultAccounts {
  vault(vaultMint: PublicKey): Promise<Vault>
  vaultStrategy(vaultMint: PublicKey): Promise<VaultStrategy>
  vaultFeeDistributor(vaultMint: PublicKey): Promise<VaultFeeDistributor>
}

/*
export interface ProtocolProviders {
  forProtocolProviders(): Promise<[]>

  forProtocolProvider(pubkey: string): Promise<[]>
}

export interface StrategyVaults {
  forStrategyVaults(): Promise<void>

  forStrategyVault(pubkey: string): Promise<[]>

  deposit(
    vault: [],
    amount: string,
    ownerPubKey: string
  ): Promise<Instruction>

  withdraw(
    vault: [],
    amount: string,
    ownerPubKey: string
  ): Promise<Instruction>

  crank(vault: []): Promise<Instruction>
}
*/
