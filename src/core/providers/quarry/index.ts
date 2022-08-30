import { Provider } from '@type/provider'
import { QuarryContextAdapter } from '@yasp/providers/quarry/context-adapter'
import { QuarryInstructions } from '@yasp/providers/quarry/instructions'
import { Miner, Quarry } from '@type/providers'
import { Connection, PublicKey } from '@solana/web3.js'
import { Program } from '@project-serum/anchor'
import { VaultProgram } from '../../../IDL/types/vault'
import { AccountMap } from '@type/core'
import { forParsedMultipleAccounts } from '@util/accounts/for-parsed-multiple-accounts'
import { MinerStruct, QuarryStruct } from '@structs/providers'
import { toAccountMap } from '@util/accounts/to-account-map'
import { NoPoolsError } from '@yasp/errors/no-pools'

export type QuarryProviderDeps = {
  solanaConnection: Connection
  program: Program<VaultProgram>
}

export class QuarryProvider implements Provider<unknown, Quarry, Miner> {
  providerName = 'Quarry'
  providerSlug = 'quarry'

  solanaConnection: Connection
  contextAdapter: QuarryContextAdapter
  instructions: QuarryInstructions

  constructor(deps: QuarryProviderDeps) {
    this.solanaConnection = deps.solanaConnection

    this.contextAdapter = new QuarryContextAdapter({
      solanaConnection: deps.solanaConnection,
    })
    this.instructions = new QuarryInstructions({
      solanaConnection: deps.solanaConnection,
      program: deps.program,
    })
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
}
