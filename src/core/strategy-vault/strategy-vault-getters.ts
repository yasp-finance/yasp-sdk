import {Connection, PublicKey} from "@solana/web3.js";
import {Program} from "@project-serum/anchor";

import {GettersVaultType, StrategyVaultGetters} from "./types";
import {VaultProgram} from "../../IDL/types/vault";

type StrategyVaultGettersDeps = {
    connection: Connection
    strategyVaultProgram: Program<VaultProgram>
}

export class StrategyVaultGettersImpl implements StrategyVaultGetters {
    connection: Connection
    strategyVaultProgram: Program<VaultProgram>

    constructor({
        connection,
        strategyVaultProgram,
    }: StrategyVaultGettersDeps) {
        this.connection = connection
        this.strategyVaultProgram = strategyVaultProgram
    }

    async forVault(underlyingMint: PublicKey, authority: PublicKey): Promise<[PublicKey, number]> {
         return  PublicKey.findProgramAddress(
            [
                Buffer.from("vault"),
                underlyingMint.toBuffer(),
                authority.toBuffer(),
            ],
            this.strategyVaultProgram.programId,
        );.
    }

    async forVaultStrategy(vault: PublicKey): Promise<[PublicKey, number]> {
        return PublicKey.findProgramAddress(
            [Buffer.from("strategy"), vault.toBuffer()],
            this.strategyVaultProgram.programId,
        )
    }

    async forVaultATA(mint: PublicKey, vault: PublicKey): Promise<[PublicKey, number]> {
        const [executor] = await this.forVaultExecutor(vault);
        return [{} as PublicKey, 9]
    }

    async forVaultExecutor(vault: PublicKey): Promise<[PublicKey, number]> {
        return PublicKey.findProgramAddress(
            [Buffer.from("executor"), vault.toBuffer()],
            this.strategyVaultProgram.programId,
        )
    }


    async forVaultSharesMint(vault: PublicKey): Promise<[PublicKey, number]> {
        return PublicKey.findProgramAddress(
            [Buffer.from("shares"), vault.toBuffer()],
            this.strategyVaultProgram.programId,
        )
    }

}
