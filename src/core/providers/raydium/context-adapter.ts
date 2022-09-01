import { Connection } from '@solana/web3.js'
import {
  ProviderContextAdapter,
  ProviderFarmContext,
  ProviderPoolContext,
} from '@type/provider'
import { RaydiumGlobalFarmV5, RaydiumPoolV4 } from '@type/providers/raydium'
import { AccountWithPublicKey, Vault } from '@type/core'
import { forExecutor } from '@yasp/strategy-vault/utils/for-executor'
import { forAssociatedToken } from '@util/accounts/for-associated-token'
import { forUserFarmAddress } from '@yasp/providers/orca/utils/for-user-farm-address'
import { forParsedMultipleAccounts } from '@util/accounts/for-parsed-multiple-accounts'
import { TokenAccountStruct } from '@structs/token-account'
import {SPLTokenAccount} from "@type/accounts";

export type RaydiumContextAdapterDeps = {
  solanaConnection: Connection
}

export class RaydiumContextAdapter
  implements ProviderContextAdapter<RaydiumPoolV4, RaydiumGlobalFarmV5>
{
  private readonly connection: Connection

  constructor(deps: RaydiumContextAdapterDeps) {
    this.connection = deps.solanaConnection
  }

  async toProviderPoolContext(
    vault: AccountWithPublicKey<Vault>,
    pool: AccountWithPublicKey<RaydiumPoolV4>
  ): Promise<ProviderPoolContext<RaydiumPoolV4>> {
    const [executor] = await forExecutor(vault.publicKey)

    const [vaultTokenAAccount] = await forAssociatedToken(
      pool.baseMint,
      executor
    )

    const [vaultTokenBAccount] = await forAssociatedToken(
      pool.quoteMint,
      executor
    )

    const [vaultLpTokenAccount] = await forAssociatedToken(
      pool.lpMint,
      executor
    )

    return {
      vaultTokenAAccount,
      vaultTokenBAccount,
      vaultLpTokenAccount,
      pool,
    }
  }

  async toProviderFarmContext(
    vault: AccountWithPublicKey<Vault>,
    farm: AccountWithPublicKey<RaydiumGlobalFarmV5>
  ): Promise<ProviderFarmContext<RaydiumGlobalFarmV5>> {
    const [executor] = await forExecutor(vault.publicKey)
    const [
      { mint: baseMint },
      { mint: farmRewardMintA },
      { mint: farmRewardMintB },
    ] = await forParsedMultipleAccounts<SPLTokenAccount>.call(
      this.connection,
      [farm.farmBaseVault, farm.farmRewardVaultA, farm.farmRewardVaultB],
      TokenAccountStruct
    )
    const [vaultBaseTokenAccount] = await forAssociatedToken(baseMint, executor)
    const [vaultRewardTokenAccountA] = await forAssociatedToken(
      farmRewardMintA,
      executor
    )

    const [vaultRewardTokenAccountB] = await forAssociatedToken(
      farmRewardMintB,
      executor
    )

    const [farmAccount] = await forUserFarmAddress(farm.publicKey, executor)

    return {
      vaultBaseTokenAccount,
      vaultRewardTokenAccounts: [
        vaultRewardTokenAccountA,
        vaultRewardTokenAccountB,
      ],
      vaultFarmTokenAccount: farm.farmBaseVault,
      farmAccount,
      farm,
    }
  }
}
