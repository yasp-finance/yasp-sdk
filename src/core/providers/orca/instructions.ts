import {
  Connection,
  Signer,
  SYSVAR_CLOCK_PUBKEY,
  TransactionInstruction,
} from '@solana/web3.js'

import {
  ProviderInstructions,
  ProviderFarmContextWithVault,
  ProviderPoolContextWithVault,
} from '@type/provider'
import { VaultProgram } from '../../../IDL/types/vault'
import { Program } from '@project-serum/anchor'
import { SYSTEM_PROGRAM_ID } from '@const/solana'
import { ORCA_FARM_ID, ORCA_POOL_ID } from '@const/providers'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { OrcaGlobalFarm, OrcaPool } from '@type/providers'
import { forPoolAuthority } from '@yasp/providers/orca/utils/for-pool-authority'
import { forFarmAuthority } from '@yasp/providers/orca/utils/for-farm-authority'
import BN from 'bn.js'

export type OrcaInstructionsDeps = {
  solanaConnection: Connection
  program: Program<VaultProgram>
}

export class OrcaInstructions implements ProviderInstructions {
  solanaConnection: Connection
  program: Program<VaultProgram>

  constructor({ solanaConnection, program }: OrcaInstructionsDeps) {
    this.solanaConnection = solanaConnection
    this.program = program
  }

  async init(
    signer: Signer,
    context: ProviderFarmContextWithVault<OrcaGlobalFarm>
  ): Promise<TransactionInstruction[]> {
    return [
      await this.program.methods
        .orcaInitFarm()
        .accounts({
          vault: context.vault.publicKey,
          authority: signer.publicKey,
          strategy: context.strategy,
          executor: context.executor,
          farmId: context.farm.publicKey,
          userInfoAccount: context.farmAccount,
          systemProgram: SYSTEM_PROGRAM_ID,
          farmProgramId: ORCA_FARM_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .signers([signer])
        .instruction(),
    ]
  }

  async harvest(
    signer: Signer,
    context: ProviderFarmContextWithVault<OrcaGlobalFarm>
  ): Promise<TransactionInstruction[]> {
    return [
      await this.program.methods
        .orcaHarvest()
        .accounts({
          vault: context.vault.publicKey,
          farmBaseVault: context.farm.baseTokenVault,
          farmRewardVault: context.farm.rewardTokenVault,
          farmAuthority: context.farm.emissionsAuthority,
          vaultRewardTokenAccount: context.vaultRewardTokenAccounts[0],
          authority: signer.publicKey,
          strategy: context.strategy,
          executor: context.executor,
          farmId: context.farm.publicKey,
          farmAccount: context.farmAccount,
          farmProgramId: ORCA_FARM_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
          clock: SYSVAR_CLOCK_PUBKEY,
        })
        .signers([signer])
        .instruction(),
    ]
  }

  async redeemToLP(
    signer: Signer,
    context: ProviderPoolContextWithVault<OrcaPool>
  ): Promise<TransactionInstruction[]> {
    const [ammAuthority] = await forPoolAuthority(context.pool.publicKey)
    return [
      await this.program.methods
        .orcaRedeemToLp()
        .accounts({
          vault: context.vault.publicKey,
          authority: signer.publicKey,
          strategy: context.strategy,
          executor: context.executor,
          lpTokenMint: context.pool.poolMint,
          feesAccount: context.pool.feeAccount,
          clock: SYSVAR_CLOCK_PUBKEY,
          ammId: context.pool.publicKey,
          poolTokenAAccount: context.pool.tokenA,
          poolTokenBAccount: context.pool.tokenB,
          vaultLpTokenAccount: context.vaultLpTokenAccount,
          vaultTokenAccount: context.vaultTokenAAccount,
          ammAuthority,
          poolProgramId: ORCA_POOL_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .signers([signer])
        .instruction(),
    ]
  }

  async redeemToStake(
    signer: Signer,
    context: ProviderFarmContextWithVault<OrcaGlobalFarm>
  ): Promise<TransactionInstruction[]> {
    const [farmAuthority] = await forFarmAuthority(context.farm.publicKey)
    return [
      await this.program.methods
        .orcaRedeemToStake()
        .accounts({
          vault: context.vault.publicKey,
          authority: signer.publicKey,
          strategy: context.strategy,
          executor: context.executor,
          farmId: context.farm.publicKey,
          farmAccount: context.farmAccount,
          farmAuthority,
          farmBaseVault: context.farm.baseTokenVault,
          farmRewardVault: context.farm.rewardTokenVault,
          farmTokenMint: context.farm.farmTokenMint,
          vaultRewardTokenAccount: context.vaultFarmTokenAccount,
          vaultFarmTokenAccount: context.vaultFarmTokenAccount,
          vaultBaseTokenAccount: context.vaultBaseTokenAccount,
          clock: SYSVAR_CLOCK_PUBKEY,
          farmProgramId: ORCA_FARM_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .signers([signer])
        .instruction(),
    ]
  }

  async redeemToToken(
    signer: Signer,
    context: ProviderPoolContextWithVault<OrcaPool>
  ): Promise<TransactionInstruction[]> {
    const [ammAuthority] = await forPoolAuthority(context.pool.publicKey)
    return [
      await this.program.methods
        .orcaRedeemToToken()
        .accounts({
          vault: context.vault.publicKey,
          authority: signer.publicKey,
          strategy: context.strategy,
          executor: context.executor,
          lpTokenMint: context.pool.poolMint,
          feesAccount: context.pool.feeAccount,
          ammId: context.pool.publicKey,
          poolTokenAAccount: context.pool.tokenA,
          poolTokenBAccount: context.pool.tokenB,
          vaultTokenAAccount: context.vaultTokenAAccount,
          vaultTokenBAccount: context.vaultTokenBAccount,
          ammAuthority,
          clock: SYSVAR_CLOCK_PUBKEY,
          poolProgramId: ORCA_POOL_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .signers([signer])
        .instruction(),
    ]
  }

  async reinvest(
    signer: Signer,
    context: ProviderFarmContextWithVault<OrcaGlobalFarm>
  ): Promise<TransactionInstruction[]> {
    // TODO: add vault reward distribution logic
    const [farmAuthority] = await forFarmAuthority(context.farm.publicKey)

    return [
      await this.program.methods
        .orcaReinvest([])
        .accounts({
          vault: context.vault.publicKey,
          authority: signer.publicKey,
          strategy: context.strategy,
          executor: context.executor,
          farmId: context.farm.publicKey,
          farmAccount: context.farmAccount,
          farmAuthority,
          farmBaseVault: context.farm.baseTokenVault,
          farmRewardVault: context.farm.rewardTokenVault,
          farmTokenMint: context.farm.farmTokenMint,
          vaultRewardTokenAccount: context.vaultFarmTokenAccount,
          vaultFarmTokenAccount: context.vaultFarmTokenAccount,
          vaultBaseTokenAccount: context.vaultBaseTokenAccount,
          clock: SYSVAR_CLOCK_PUBKEY,
          farmProgramId: ORCA_FARM_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .signers([signer])
        .instruction(),
    ]
  }

  async stake(
    amount: BN,
    signer: Signer,
    context: ProviderFarmContextWithVault<OrcaGlobalFarm>
  ): Promise<TransactionInstruction[]> {
    return [
      await this.program.methods.orcaStake(amount).accounts({}).instruction(),
    ]
  }

  async unStake(
    amount: BN,
    signer: Signer,
    context: ProviderFarmContextWithVault<OrcaGlobalFarm>
  ): Promise<TransactionInstruction[]> {
    return [
      await this.program.methods.orcaUnstake(amount).accounts({}).instruction(),
    ]
  }
}
