import { Connection, PublicKey } from '@solana/web3.js'
import { AccountMap } from '@type/core'
import { forParsedMultipleAccounts } from '@util/accounts/for-parsed-multiple-accounts'
import { toAccountMap } from '@util/accounts/to-account-map'
import { ProviderResolvers } from '@type/provider'
import {
  RaydiumGlobalFarmV5,
  RaydiumPoolV4,
  RaydiumUserFarmV5,
} from '@type/providers'
import {
  RaydiumGlobalFarmV5Struct,
  RaydiumPoolV4Struct,
  RaydiumUserFarmV5Struct,
} from '@structs/providers'

export type OrcaResolversDeps = {
  solanaConnection: Connection
}

export class RaydiumResolvers
  implements
    ProviderResolvers<RaydiumPoolV4, RaydiumGlobalFarmV5, RaydiumUserFarmV5>
{
  solanaConnection: Connection

  constructor(deps: OrcaResolversDeps) {
    this.solanaConnection = deps.solanaConnection
  }

  async resolveUserFarms(
    addresses: PublicKey[]
  ): Promise<AccountMap<RaydiumUserFarmV5>> {
    const accounts = await forParsedMultipleAccounts<RaydiumUserFarmV5>.call(
      this.solanaConnection,
      addresses,
      RaydiumUserFarmV5Struct
    )
    return toAccountMap(accounts)
  }

  async resolveFarms(
    addresses: PublicKey[]
  ): Promise<AccountMap<RaydiumGlobalFarmV5>> {
    const accounts = await forParsedMultipleAccounts<RaydiumGlobalFarmV5>.call(
      this.solanaConnection,
      addresses,
      RaydiumGlobalFarmV5Struct
    )
    return toAccountMap(accounts)
  }

  async resolvePools(
    addresses: PublicKey[]
  ): Promise<AccountMap<RaydiumPoolV4>> {
    const accounts = await forParsedMultipleAccounts<RaydiumPoolV4>.call(
      this.solanaConnection,
      addresses,
      RaydiumPoolV4Struct
    )
    return toAccountMap(accounts)
  }
}
