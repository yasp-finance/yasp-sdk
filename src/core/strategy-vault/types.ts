import {PublicKey} from "@solana/web3.js";
import {TransactionPayload} from "../../types/transaction-builders";

export type GettersVaultType = "vault-pool" | "vault-farm"

export interface StrategyVaultGetters {
    forVault(underlyingMint: PublicKey, authority: PublicKey): Promise<[PublicKey, number]>
    forVaultExecutor(vault: PublicKey): Promise<[PublicKey, number]>
    forVaultStrategy(vault: PublicKey): Promise<[PublicKey, number]>
    forVaultSharesMint(vault: PublicKey): Promise<[PublicKey, number]>
    forVaultATA(mint: PublicKey, vault: PublicKey): Promise<[PublicKey, number]>
}

export interface StrategyVaultProvider {}

export interface StrategyVaultResolvers {
    vault(publicKey: PublicKey)
}

export interface StrategyVault {
    getters: StrategyVaultGetters

    (): Promise<TransactionPayload>
}
