import {
  Connection,
  PublicKey,
  Signer,
  SYSVAR_CLOCK_PUBKEY,
  SYSVAR_RENT_PUBKEY,
  TransactionInstruction,
} from '@solana/web3.js'
import {
  ProviderFarmContextWithVault,
  ProviderInstructions,
  ProviderPoolContextWithVault,
} from '@type/provider'
import { Program } from '@project-serum/anchor'
import { VaultProgram } from '../../../IDL/types/vault'
import { SYSTEM_PROGRAM_ID } from '@const/solana'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import {
  RaydiumGlobalFarmV5,
  RaydiumPoolV4,
  SerumMarket,
} from '@type/providers'
import {
  RAYDIUM_V4_SWAP_ID,
  RAYDIUM_V5_FARM_ID,
} from '@const/providers/raydium'
import { forFarmAuthority } from './utils/for-farm-authority'
import { forSerumVaultSigner } from './utils/for-serum-vault-signer'
import { forPoolAuthority } from './utils/for-pool-authority'
import { forParsedAccount } from '@util/accounts/for-parsed-account'
import { SerumMarketStruct } from '@structs/providers'
import { VaultOwnerOnly } from '@yasp/errors/vault-owner-only'
import BN from 'bn.js'
import { keccak_256 as keccak256 } from 'js-sha3'
import { buildSnapshot } from '@yasp/strategy-vault/utils/build-snapshot'

export type RaydiumInstructionsDeps = {
  solanaConnection: Connection
  program: Program<VaultProgram>
}

export class RaydiumInstructions implements ProviderInstructions {
  solanaConnection: Connection
  program: Program<VaultProgram>

  constructor({ solanaConnection, program }: RaydiumInstructionsDeps) {
    this.solanaConnection = solanaConnection
    this.program = program
  }

  async stake(
    amount: BN,
    signer: Signer,
    context: ProviderFarmContextWithVault<RaydiumGlobalFarmV5>
  ): Promise<TransactionInstruction[]> {
    return [
      await this.program.methods
        .raydiumStake(amount)
        .accounts({})
        .signers([signer])
        .instruction(),
    ]
  }

  async unStake(
    amount: BN,
    signer: Signer,
    context: ProviderFarmContextWithVault<RaydiumGlobalFarmV5>
  ): Promise<TransactionInstruction[]> {
    return [
      await this.program.methods
        .raydiumUnstake(amount)
        .accounts({})
        .signers([signer])
        .instruction(),
    ]
  }

  async init(
    signer: Signer,
    context: ProviderFarmContextWithVault<RaydiumGlobalFarmV5>
  ): Promise<TransactionInstruction[]> {
    if (!signer.publicKey.equals(context.vault.authority)) {
      throw new VaultOwnerOnly()
    }
    return [
      await this.program.methods
        .raydiumInitFarm()
        .accounts({
          vault: context.vault.publicKey,
          executor: context.executor,
          strategy: context.strategy,
          authority: signer.publicKey,
          userInfoAccount: context.farmAccount,
          farmId: context.farm.publicKey,
          farmProgramId: RAYDIUM_V5_FARM_ID,
          systemProgram: SYSTEM_PROGRAM_ID,
          rent: SYSVAR_RENT_PUBKEY,
        })
        .signers([signer])
        .instruction(),
    ]
  }

  async redeemToToken(
    signer: Signer,
    context: ProviderPoolContextWithVault<RaydiumPoolV4>
  ): Promise<TransactionInstruction[]> {
    const [poolAuthority] = await forPoolAuthority(context.pool.publicKey)
    const [vaultSigner] = await forSerumVaultSigner(context.pool.marketId)
    const market = await forParsedAccount<SerumMarket>.call(
      this.solanaConnection,
      context.pool.marketId,
      SerumMarketStruct
    )

    return [
      await this.program.methods
        .raydiumRedeemToToken()
        .accounts({
          vault: context.vault.publicKey,
          vaultTokenAAccount: context.vaultTokenAAccount,
          vaultTokenBAccount: context.vaultTokenBAccount,
          strategy: context.strategy,
          authority: signer.publicKey,
          executor: context.executor,
          ammId: context.pool.publicKey,
          ammAuthority: poolAuthority,
          ammOpenOrders: context.pool.openOrders,
          ammTarget: context.pool.targetOrders,
          serumMarket: context.pool.marketId,
          serumAsks: market.asks,
          serumBids: market.bids,
          serumEventQueue: market.eventQueue,
          serumTokenAAccount: market.tokenA,
          serumTokenBAccount: market.tokenB,
          serumVaultSigner: vaultSigner,
          poolTokenAAccount: context.pool.baseVault,
          poolTokenBAccount: context.pool.quoteVault,
          tokenProgram: TOKEN_PROGRAM_ID,
          poolProgramId: RAYDIUM_V4_SWAP_ID,
          serumProgramId: context.pool.marketProgramId,
        })
        .signers([signer])
        .instruction(),
    ]
  }

  async redeemToLP(
    signer: Signer,
    context: ProviderPoolContextWithVault<RaydiumPoolV4>
  ): Promise<TransactionInstruction[]> {
    const [poolAuthority] = await forPoolAuthority(context.pool.publicKey)

    return [
      await this.program.methods
        .raydiumRedeemToLp()
        .accounts({
          vault: context.vault.publicKey,
          vaultTokenAAccount: context.vaultTokenAAccount,
          vaultTokenBAccount: context.vaultTokenBAccount,
          vaultLpTokenAccount: context.vaultLpTokenAccount,
          executor: context.executor,
          strategy: context.strategy,
          authority: signer.publicKey,
          ammId: context.pool.publicKey,
          ammAuthority: poolAuthority,
          ammOpenOrders: context.pool.openOrders,
          ammTarget: context.pool.targetOrders,
          serumMarket: context.pool.marketId,
          poolTokenAAccount: context.pool.baseVault,
          poolTokenBAccount: context.pool.quoteVault,
          lpTokenMint: context.pool.lpMint,
          tokenProgram: TOKEN_PROGRAM_ID,
          poolProgramId: RAYDIUM_V4_SWAP_ID,
        })
        .signers([signer])
        .instruction(),
    ]
  }

  async harvest(
    signer: Signer,
    context: ProviderFarmContextWithVault<RaydiumGlobalFarmV5>
  ): Promise<TransactionInstruction[]> {
    const [farmAuthority] = await forFarmAuthority(
      context.farm.publicKey,
      RAYDIUM_V5_FARM_ID
    )

    return [
      await this.program.methods
        .raydiumHarvest()
        .accounts({
          vaultRewardTokenBAccount: context.vaultRewardTokenAccounts[1],
          vaultRewardTokenAAccount: context.vaultRewardTokenAccounts[0],
          vaultBaseTokenAccount: context.vaultBaseTokenAccount,
          farmRewardBVault: context.farm.farmRewardVaultB,
          farmRewardAVault: context.farm.farmRewardVaultA,
          vault: context.vault.publicKey,
          executor: context.executor,
          strategy: context.strategy,
          authority: signer.publicKey,
          farmAccount: context.farmAccount,
          farmId: context.farm.publicKey,
          farmAuthority,
          farmBaseVault: context.farm.farmBaseVault,
          farmProgramId: RAYDIUM_V5_FARM_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
          clock: SYSVAR_CLOCK_PUBKEY,
        })
        .signers([signer])
        .instruction(),
    ]
  }

  async redeemToStake(
    signer: Signer,
    context: ProviderFarmContextWithVault<RaydiumGlobalFarmV5>
  ): Promise<TransactionInstruction[]> {
    const [farmAuthority] = await forFarmAuthority(
      context.farm.publicKey,
      RAYDIUM_V5_FARM_ID
    )
    return [
      await this.program.methods
        .raydiumRedeemToStake()
        .accounts({
          vaultRewardTokenBAccount: context.vaultRewardTokenAccounts[1],
          vaultRewardTokenAAccount: context.vaultRewardTokenAccounts[0],
          vaultBaseTokenAccount: context.vaultBaseTokenAccount,
          farmRewardBVault: context.farm.farmRewardVaultB,
          farmRewardAVault: context.farm.farmRewardVaultA,
          vault: context.vault.publicKey,
          executor: context.executor,
          strategy: context.strategy,
          authority: signer.publicKey,
          farmAccount: context.farmAccount,
          farmId: context.farm.publicKey,
          farmAuthority,
          farmBaseVault: context.farm.farmBaseVault,
          farmProgramId: RAYDIUM_V5_FARM_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
          clock: SYSVAR_CLOCK_PUBKEY,
        })
        .signers([signer])
        .instruction(),
    ]
  }

  async reinvest(
    signer: Signer,
    context: ProviderFarmContextWithVault<RaydiumGlobalFarmV5>
  ): Promise<TransactionInstruction[]> {
    const [farmAuthority] = await forFarmAuthority(
      context.farm.publicKey,
      RAYDIUM_V5_FARM_ID
    )
    const hash = await buildSnapshot.call(
      this.solanaConnection,
      signer.publicKey,
      context.vault.publicKey
    )
    return [
      await this.program.methods
        .raydiumReinvest(hash)
        .accounts({
          vaultRewardTokenBAccount: context.vaultRewardTokenAccounts[1],
          vaultRewardTokenAAccount: context.vaultRewardTokenAccounts[0],
          vaultBaseTokenAccount: context.vaultBaseTokenAccount,
          farmRewardBVault: context.farm.farmRewardVaultB,
          farmRewardAVault: context.farm.farmRewardVaultA,
          vault: context.vault.publicKey,
          executor: context.executor,
          strategy: context.strategy,
          authority: signer.publicKey,
          farmAccount: context.farmAccount,
          farmId: context.farm.publicKey,
          farmAuthority,
          farmBaseVault: context.farm.farmBaseVault,
          farmProgramId: RAYDIUM_V5_FARM_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SYSTEM_PROGRAM_ID,
          clock: SYSVAR_CLOCK_PUBKEY,
        })
        .signers([signer])
        .instruction(),
    ]
  }
}
