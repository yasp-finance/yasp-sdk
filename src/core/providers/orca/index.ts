import { Provider } from '@type/provider'
import { OrcaInstructions } from '@yasp/providers/orca/instructions'
import { OrcaContextAdapter } from '@yasp/providers/orca/context-adapter'
import { OrcaGlobalFarm, OrcaPool, OrcaUserFarm } from '@type/providers'
import { Connection, PublicKey } from '@solana/web3.js'
import { VaultProgram } from '../../../IDL/types/vault'
import { Program } from '@project-serum/anchor'
import { AccountMap, AccountWithPublicKey } from '@type/core'
import { forParsedMultipleAccounts } from '@util/accounts/for-parsed-multiple-accounts'
import {
  OrcaGlobalFarmStruct,
  OrcaPoolStruct,
  OrcaUserFarmStruct,
} from '@structs/providers'
import { toAccountMap } from '@util/accounts/to-account-map'

export type OrcaProviderDeps = {
  solanaConnection: Connection
  program: Program<VaultProgram>
}

export class OrcaProvider
  implements Provider<OrcaPool, OrcaGlobalFarm, OrcaUserFarm>
{
  providerName = 'Orca'
  providerSlug = 'orca'

  solanaConnection: Connection

  contextAdapter: OrcaContextAdapter
  instructions: OrcaInstructions

  constructor(deps: OrcaProviderDeps) {
    this.solanaConnection = deps.solanaConnection

    this.contextAdapter = new OrcaContextAdapter({
      solanaConnection: deps.solanaConnection,
    })
    this.instructions = new OrcaInstructions({
      solanaConnection: deps.solanaConnection,
      program: deps.program,
    })
  }

  async resolveUserFarms(
    addresses: PublicKey[]
  ): Promise<AccountMap<OrcaUserFarm>> {
    const accounts = await forParsedMultipleAccounts<OrcaUserFarm>.call(
      this.solanaConnection,
      addresses,
      OrcaUserFarmStruct
    )
    return toAccountMap(accounts)
  }

  async resolveFarms(
    addresses: PublicKey[]
  ): Promise<AccountMap<OrcaGlobalFarm>> {
    const accounts = await forParsedMultipleAccounts<OrcaGlobalFarm>.call(
      this.solanaConnection,
      addresses,
      OrcaGlobalFarmStruct
    )
    return toAccountMap(accounts)
  }

  async resolvePools(addresses: PublicKey[]): Promise<AccountMap<OrcaPool>> {
    const accounts = await forParsedMultipleAccounts<OrcaPool>.call(
      this.solanaConnection,
      addresses,
      OrcaPoolStruct
    )
    return toAccountMap(accounts)
  }
}
