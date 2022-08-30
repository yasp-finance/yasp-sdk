import {
  Connection,
  SYSVAR_CLOCK_PUBKEY,
  TransactionInstruction,
} from '@solana/web3.js'
import {
  ProviderFarmContextWithVault,
  ProviderInstructions,
} from '@type/provider'
import { Program } from '@project-serum/anchor'
import { VaultProgram } from '../../../IDL/types/vault'
import { NoPoolsError } from '@yasp/errors/no-pools'
import { Quarry, Rewarder } from '@type/providers'
import { SYSTEM_PROGRAM_ID } from '@const/solana'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { QUARRY_MINE, QUARRY_MINT_WRAPPER } from '@const/providers/quarry'
import { forParsedAccount } from '@util/accounts/for-parsed-account'
import { RewarderStruct } from '@structs/providers'

export type QuarryInstructionsDeps = {
  solanaConnection: Connection
  program: Program<VaultProgram>
}

export class QuarryInstructions implements ProviderInstructions {
  solanaConnection: Connection
  program: Program<VaultProgram>

  constructor({ solanaConnection, program }: QuarryInstructionsDeps) {
    this.solanaConnection = solanaConnection
    this.program = program
  }

  async init(
    context: ProviderFarmContextWithVault<Quarry>
  ): Promise<TransactionInstruction[]> {
    return [
      await this.program.methods
        .quarryInitFarm()
        .accounts({
          vault: context.vault.vault,
          authority: context.vault.authority,
          strategy: context.strategy,
          executor: context.executor,
          quarry: context.farm.publicKey,
          rewarder: context.farm.rewarder,
          payer: context.vault.authority,
          tokenMint: context.farm.tokenMintKey,
          miner: context.farmAccount,
          minerVault: context.vaultFarmTokenAccount,
          systemProgram: SYSTEM_PROGRAM_ID,
          farmProgramId: QUARRY_MINE,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .instruction(),
    ]
  }

  async harvest(
    context: ProviderFarmContextWithVault<Quarry>
  ): Promise<TransactionInstruction[]> {
    const rewarder = await forParsedAccount<Rewarder>.call(
      this.solanaConnection,
      context.farm.rewarder,
      RewarderStruct
    )
    // const minter = await forParsedAccount<Minter>.call(
    //     this.solanaConnection,
    // )
    return [
      await this.program.methods
        .quarryHarvest()
        .accounts({
          vault: context.vault.vault,
          authority: context.vault.authority,
          strategy: context.strategy,
          executor: context.executor,
          quarry: context.farm.publicKey,
          rewarder: context.farm.rewarder,
          vaultIouTokenAccount: context.vaultRewardTokenAccounts[0],
          miner: context.farmAccount,
          mintWrapper: rewarder.mintWrapper,
          iouTokenMint: rewarder.rewardsTokenMint,
          iouFeesAccount: rewarder.claimFeeTokenAccount,
          // TODO: this is incorrect https://github.com/QuarryProtocol/quarry/blob/master/programs/quarry-mint-wrapper/src/instructions/new_wrapper.rs
          minter: rewarder.authority,
          farmProgramId: QUARRY_MINE,
          mintWrapperProgram: QUARRY_MINT_WRAPPER,
          tokenProgram: TOKEN_PROGRAM_ID,
          clock: SYSVAR_CLOCK_PUBKEY,
        })
        .instruction(),
    ]
  }

  async redeemToStake(
    context: ProviderFarmContextWithVault<Quarry>
  ): Promise<TransactionInstruction[]> {
    return [
      await this.program.methods
        .quarryRedeemToStake()
        .accounts({
          vault: context.vault.vault,
          authority: context.vault.authority,
          strategy: context.strategy,
          executor: context.executor,
          quarry: context.farm.publicKey,
          rewarder: context.farm.rewarder,
          vaultBaseTokenAccount: context.vaultBaseTokenAccount,
          minerVault: context.vaultFarmTokenAccount,
          miner: context.farmAccount,
          farmProgramId: QUARRY_MINE,
          tokenProgram: TOKEN_PROGRAM_ID,
          clock: SYSVAR_CLOCK_PUBKEY,
        })
        .instruction(),
    ]
  }

  async reinvest(
    context: ProviderFarmContextWithVault<Quarry>
  ): Promise<TransactionInstruction[]> {
    // TODO: add vault reward distribution logic
    return [
      await this.program.methods.quarryReinvest([]).accounts({}).instruction(),
    ]
  }

  presetPool(): Promise<TransactionInstruction[]> {
    throw new NoPoolsError()
  }

  redeemToLP(): Promise<TransactionInstruction[]> {
    throw new NoPoolsError()
  }

  redeemToToken(): Promise<TransactionInstruction[]> {
    throw new NoPoolsError()
  }
}
