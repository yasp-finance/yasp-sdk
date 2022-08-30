import { Connection } from '@solana/web3.js'
import {
  ProviderContextAdapter,
  ProviderFarmContext,
  ProviderPoolContext,
} from '@type/provider'
import { OrcaGlobalFarm, OrcaPool } from '@type/providers/orca'
import { AccountWithPublicKey, Vault } from '@type/core'
import { forExecutor } from '@yasp/strategy-vault/utils/for-executor'
import { forAssociatedToken } from '@util/accounts/for-associated-token'
import { forUserFarmAddress } from '@yasp/providers/orca/utils/for-user-farm-address'
import { forTokenAccount } from '@util/accounts/for-token-account'

export type OrcaContextAdapterDeps = {
  solanaConnection: Connection
}

export class OrcaContextAdapter
  implements ProviderContextAdapter<OrcaPool, OrcaGlobalFarm>
{
  private readonly connection: Connection

  constructor(deps: OrcaContextAdapterDeps) {
    this.connection = deps.solanaConnection
  }

  async toProviderPoolContext(
    vault: Vault,
    pool: AccountWithPublicKey<OrcaPool>
  ): Promise<ProviderPoolContext<OrcaPool>> {
    const [executor] = await forExecutor(vault.vault)

    const [vaultTokenAAccount] = await forAssociatedToken(
      pool.tokenAMint,
      executor
    )

    const [vaultTokenBAccount] = await forAssociatedToken(
      pool.tokenBMint,
      executor
    )

    const [vaultLpTokenAccount] = await forAssociatedToken(
      pool.poolMint,
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
    vault: Vault,
    farm: AccountWithPublicKey<OrcaGlobalFarm>
  ): Promise<ProviderFarmContext<OrcaGlobalFarm>> {
    const [executor] = await forExecutor(vault.vault)

    const [vaultBaseTokenAccount] = await forAssociatedToken(
      farm.baseTokenMint,
      executor
    )
    const { mint: farmRewardMint } = await forTokenAccount.call(
      this.connection,
      farm.rewardTokenVault
    )

    const [vaultRewardTokenAccount] = await forAssociatedToken(
      farmRewardMint,
      executor
    )

    const [vaultFarmTokenAccount] = await forAssociatedToken(
      farm.farmTokenMint,
      executor
    )

    const [farmAccount] = await forUserFarmAddress(farm.publicKey, executor)

    return {
      vaultBaseTokenAccount,
      vaultRewardTokenAccounts: [vaultRewardTokenAccount],
      vaultFarmTokenAccount,
      farmAccount,
      farm,
    }
  }
}
