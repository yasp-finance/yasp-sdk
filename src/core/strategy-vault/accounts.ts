import {
    IVaultAccounts,
    Vault,
    VaultFeeDistributor,
    VaultFeeDistributorFetch,
    VaultFetch,
    VaultStrategy,
    VaultStrategyFetch
} from "../../types/core";
import {PublicKey} from "@solana/web3.js";
import {Program} from "@project-serum/anchor";
import {VaultProgram} from "../../IDL/types/vault";


export class VaultAccounts implements IVaultAccounts {
    constructor(
        public strategyVaultProgram: Program<VaultProgram>,
    ) {}

    vault(vaultMintAddress: PublicKey): Promise<Vault> {
        const fetch: VaultFetch = this.strategyVaultProgram.account.vault.fetch
        return fetch(vaultMintAddress)
    }

    vaultStrategy(strategyMintAddress: PublicKey): Promise<VaultStrategy> {
        const fetch: VaultStrategyFetch = this.strategyVaultProgram.account.vaultStrategy.fetch
        return fetch(strategyMintAddress)
    }

    vaultFeeDistributor(feeDistributorAddress: PublicKey): Promise<VaultFeeDistributor> {
        const fetch: VaultFeeDistributorFetch = this.strategyVaultProgram.account.vaultFeeDistributor.fetch
        return fetch(feeDistributorAddress)
    }
}

