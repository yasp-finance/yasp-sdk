import { Program } from "@project-serum/anchor";
import { VaultProgram } from "../IDL/types/vault";

export type AnchorVaultProgram = Program<VaultProgram>

export type VaultFetch = AnchorVaultProgram['account']['vault']['fetch']
export type VaultStrategyFetch = AnchorVaultProgram['account']['vaultStrategy']['fetch']
export type VaultFeeDistributorFetch = AnchorVaultProgram['account']['vaultFeeDistributor']['fetch']

export type Vault = Awaited<ReturnType<VaultFetch>>
export type VaultStrategy = Awaited<ReturnType<VaultStrategyFetch>>
export type VaultFeeDistributor = Awaited<ReturnType<VaultFeeDistributorFetch>>
