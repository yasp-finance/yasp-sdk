import {
  Connection,
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
    context: ProviderFarmContextWithVault<OrcaGlobalFarm>
  ): Promise<TransactionInstruction[]> {
    return [
      await this.program.methods
        .orcaInitFarm()
        .accounts({
          vault: context.vault.vault,
          authority: context.vault.authority,
          strategy: context.strategy,
          executor: context.executor,
          farmId: context.farm.publicKey,
          userInfoAccount: context.farmAccount,
          systemProgram: SYSTEM_PROGRAM_ID,
          farmProgramId: ORCA_FARM_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .instruction(),
    ]
  }

  async harvest(
    context: ProviderFarmContextWithVault<OrcaGlobalFarm>
  ): Promise<TransactionInstruction[]> {
    return [
      await this.program.methods
        .orcaHarvest()
        .accounts({
          vault: context.vault.vault,
          farmBaseVault: context.farm.baseTokenVault,
          farmRewardVault: context.farm.rewardTokenVault,
          farmAuthority: context.farm.emissionsAuthority,
          vaultRewardTokenAccount: context.vaultRewardTokenAccounts[0],
          authority: context.vault.authority,
          strategy: context.strategy,
          executor: context.executor,
          farmId: context.farm.publicKey,
          farmAccount: context.farmAccount,
          farmProgramId: ORCA_FARM_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
          clock: SYSVAR_CLOCK_PUBKEY,
        })
        .instruction(),
    ]
  }

  async redeemToLP(
    context: ProviderPoolContextWithVault<OrcaPool>
  ): Promise<TransactionInstruction[]> {
    const [ammAuthority] = await forPoolAuthority(context.pool.publicKey)
    return [
      await this.program.methods
        .orcaRedeemToLp()
        .accounts({
          vault: context.vault.vault,
          authority: context.vault.authority,
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
        .instruction(),
    ]
  }

  async redeemToStake(
    context: ProviderFarmContextWithVault<OrcaGlobalFarm>
  ): Promise<TransactionInstruction[]> {
    const [farmAuthority] = await forFarmAuthority(context.farm.publicKey)
    return [
      await this.program.methods
        .orcaRedeemToStake()
        .accounts({
          vault: context.vault.vault,
          authority: context.vault.authority,
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
        .instruction(),
    ]
  }

  async redeemToToken(
    context: ProviderPoolContextWithVault<OrcaPool>
  ): Promise<TransactionInstruction[]> {
    const [ammAuthority] = await forPoolAuthority(context.pool.publicKey)
    return [
      await this.program.methods
        .orcaRedeemToToken()
        .accounts({
          vault: context.vault.vault,
          authority: context.vault.authority,
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
        .instruction(),
    ]
  }

  async reinvest(
    context: ProviderFarmContextWithVault<OrcaGlobalFarm>
  ): Promise<TransactionInstruction[]> {
      // TODO: add vault reward distribution logic
    const [farmAuthority] = await forFarmAuthority(context.farm.publicKey)

    return [
      await this.program.methods
        .orcaReinvest([])
        .accounts({
          vault: context.vault.vault,
          authority: context.vault.authority,
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
        .instruction(),
    ]
  }

  // stake(
  //     context: ProviderContext<OrcaPool, OrcaGlobalFarm>
  // ): Promise<TransactionInstruction[]> {
  //   return [await this.program.methods.orcaStake().accounts({}).instruction()]
  // }
  //
  // unStake(
  //     context: ProviderContext<OrcaPool, OrcaGlobalFarm>
  // ): Promise<TransactionInstruction[]> {
  //   return [await this.program.methods.orcaUnstake().accounts({}).instruction()]
  // }
}
