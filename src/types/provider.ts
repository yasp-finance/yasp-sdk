import {TransactionInstruction} from "@solana/web3.js";

export type ProviderPoolContext = {
  vaultTokenAAccount: any
  vaultTokenBAccount: any
  vaultLpTokenAccount: any
  executor: any
}

export type ProviderFarmContext = {
  vaultBaseTokenAccount: any
  vaultRewardTokenAccount: any
  vaultFarmTokenAccount: any
  farmAccount: any
  executor: any
}

export interface ProviderContextAdapter {
  toProviderPoolContext(...arg: any[]): Promise<ProviderPoolContext>
  toProviderFarmContext(...arg: any[]): Promise<ProviderFarmContext>
}

export interface ProviderInstructions {
  unStake(): Promise<TransactionInstruction[]>
  stake(): Promise<TransactionInstruction[]>
  harvest(): Promise<TransactionInstruction[]>
  reinvest(): Promise<TransactionInstruction[]>

  redeemToStake(): Promise<TransactionInstruction[]>
  redeemToLP(): Promise<TransactionInstruction[]>
  redeemToToken(): Promise<TransactionInstruction[]>

  presetFarm(): Promise<TransactionInstruction[]>
  presetPool(): Promise<TransactionInstruction[]>

  init(): Promise<TransactionInstruction[]>
}

export interface Provider {
  providerName: string

  providerSlug: string

  contextAdapter: ProviderContextAdapter

  instructions: ProviderInstructions
}
