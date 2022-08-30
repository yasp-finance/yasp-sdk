import { Connection, PublicKey } from '@solana/web3.js'
import { AccountMap } from '@type/core'
import { OrcaGlobalFarm, OrcaPool, OrcaUserFarm } from '@type/providers'
import { forParsedMultipleAccounts } from '@util/accounts/for-parsed-multiple-accounts'
import {
  OrcaGlobalFarmStruct,
  OrcaPoolStruct,
  OrcaUserFarmStruct,
} from '@structs/providers'
import { toAccountMap } from '@util/accounts/to-account-map'
import { ProviderResolvers } from '@type/provider'

export type OrcaResolversDeps = {
  solanaConnection: Connection
}

export class OrcaResolvers
  implements ProviderResolvers<OrcaPool, OrcaGlobalFarm, OrcaUserFarm>
{
  solanaConnection: Connection

  constructor(deps: OrcaResolversDeps) {
    this.solanaConnection = deps.solanaConnection
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
