import { Connection } from '@solana/web3.js'
import {
  ProviderContextAdapter,
  ProviderFarmContext,
  ProviderPoolContext,
} from '@type/provider'
import { AccountWithPublicKey, Vault } from '@type/core'
import { forExecutor } from '@yasp/strategy-vault/utils/for-executor'
import { forAssociatedToken } from '@util/accounts/for-associated-token'
import { Quarry, Rewarder } from '@type/providers'
import { NoPoolsError } from '@yasp/errors/no-pools'
import { forMiner } from '@yasp/providers/quarry/utils/for-miner'
import { forParsedAccount } from '@util/accounts/for-parsed-account'
import { RewarderStruct } from '@structs/providers'

export type OrcaContextAdapterDeps = {
  solanaConnection: Connection
}

export class QuarryContextAdapter
  implements ProviderContextAdapter<unknown, Quarry>
{
  private readonly connection: Connection

  constructor(deps: OrcaContextAdapterDeps) {
    this.connection = deps.solanaConnection
  }

  async toProviderPoolContext(
    vault: Vault,
    pool: AccountWithPublicKey<unknown>
  ): Promise<ProviderPoolContext<unknown>> {
    throw new NoPoolsError()
  }

  async toProviderFarmContext(
    vault: Vault,
    farm: AccountWithPublicKey<Quarry>
  ): Promise<ProviderFarmContext<Quarry>> {
    const [executor] = await forExecutor(vault.vault)

    const [vaultBaseTokenAccount] = await forAssociatedToken(
      farm.tokenMintKey,
      executor
    )
    const rewarder = await forParsedAccount<Rewarder>.call(
      this.connection,
      farm.rewarder,
      RewarderStruct
    )
    const [vaultRewardTokenAccount] = await forAssociatedToken(
      rewarder.rewardsTokenMint,
      executor
    )

    const [farmAccount] = await forMiner(farm.publicKey, executor)
    const [minerVault] = await forAssociatedToken(
      farm.tokenMintKey,
      farmAccount
    )

    return {
      vaultBaseTokenAccount,
      vaultRewardTokenAccounts: [vaultRewardTokenAccount],
      vaultFarmTokenAccount: minerVault,
      farmAccount,
      farm,
    }
  }
}
