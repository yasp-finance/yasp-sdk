import { Connection, PublicKey } from '@solana/web3.js'
import { AccountMap } from '@type/core'
import {
  Miner,
  Minter,
  MintWrapper,
  Quarry,
  Rewarder,
} from '@type/providers/quarry'
import { forParsedMultipleAccounts } from '@util/accounts/for-parsed-multiple-accounts'
import {
  MinerStruct,
  MinterStruct,
  MintWrapperStruct,
  QuarryStruct,
  RewarderStruct,
} from '@structs/providers'
import { toAccountMap } from '@util/accounts/to-account-map'
import { ProviderResolvers } from '@type/provider'
import { NoPoolsError } from '@yasp/errors/no-pools'

export type OrcaResolversDeps = {
  solanaConnection: Connection
}

export class QuarryResolvers
  implements ProviderResolvers<unknown, Quarry, Miner>
{
  solanaConnection: Connection

  constructor(deps: OrcaResolversDeps) {
    this.solanaConnection = deps.solanaConnection
  }

  async resolveUserFarms(addresses: PublicKey[]): Promise<AccountMap<Miner>> {
    const accounts = await forParsedMultipleAccounts<Miner>.call(
      this.solanaConnection,
      addresses,
      MinerStruct
    )
    return toAccountMap(accounts)
  }

  async resolveFarms(addresses: PublicKey[]): Promise<AccountMap<Quarry>> {
    const accounts = await forParsedMultipleAccounts<Quarry>.call(
      this.solanaConnection,
      addresses,
      QuarryStruct
    )
    return toAccountMap(accounts)
  }

  async resolvePools(addresses: PublicKey[]): Promise<AccountMap> {
    throw new NoPoolsError()
    // return new Map()
  }

  async resolveRewarders(
    addresses: PublicKey[]
  ): Promise<AccountMap<Rewarder>> {
    const accounts = await forParsedMultipleAccounts<Rewarder>.call(
      this.solanaConnection,
      addresses,
      RewarderStruct
    )
    return toAccountMap(accounts)
  }

  async resolveMinters(addresses: PublicKey[]): Promise<AccountMap<Minter>> {
    const accounts = await forParsedMultipleAccounts<Minter>.call(
      this.solanaConnection,
      addresses,
      MinterStruct
    )
    return toAccountMap(accounts)
  }

  async resolveMintWrappers(
    addresses: PublicKey[]
  ): Promise<AccountMap<MintWrapper>> {
    const accounts = await forParsedMultipleAccounts<MintWrapper>.call(
      this.solanaConnection,
      addresses,
      MintWrapperStruct
    )
    return toAccountMap(accounts)
  }
}
