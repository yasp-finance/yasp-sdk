import {Connection, TransactionInstruction} from "@solana/web3.js";

import { ProviderInstructions } from "@type/provider";

type OrcaInstructionsDeps = {
    solanaConnection: Connection
}

export class OrcaInstructions implements ProviderInstructions {
    solanaConnection: Connection

    constructor({ solanaConnection }: OrcaInstructionsDeps) {
        this.solanaConnection = solanaConnection
    }

    harvest(): Promise<TransactionInstruction[]> {
        return Promise.resolve([]);
    }

    init(): Promise<TransactionInstruction[]> {
        return Promise.resolve([]);
    }

    presetFarm(): Promise<TransactionInstruction[]> {
        return Promise.resolve([]);
    }

    presetPool(): Promise<TransactionInstruction[]> {
        return Promise.resolve([]);
    }

    redeemToLP(): Promise<TransactionInstruction[]> {
        return Promise.resolve([]);
    }

    redeemToStake(): Promise<TransactionInstruction[]> {
        return Promise.resolve([]);
    }

    redeemToToken(): Promise<TransactionInstruction[]> {
        return Promise.resolve([]);
    }

    reinvest(): Promise<TransactionInstruction[]> {
        return Promise.resolve([]);
    }

    stake(): Promise<TransactionInstruction[]> {
        return Promise.resolve([]);
    }

    unStake(): Promise<TransactionInstruction[]> {
        return Promise.resolve([]);
    }
}
