import { Provider } from '@type/provider'
import {
  RaydiumGlobalFarmV5,
  RaydiumPoolV4,
  RaydiumUserFarmV5,
} from '@type/providers'
import { RaydiumContextAdapter } from '@yasp/providers/raydium/context-adapter'
import { RaydiumInstructions } from '@yasp/providers/raydium/instructions'
import { RaydiumResolvers } from '@yasp/providers/raydium/resolvers'

export type RaydiumProviderDeps = {
  contextAdapter: RaydiumContextAdapter
  instructions: RaydiumInstructions
  resolvers: RaydiumResolvers
}

export class RaydiumProvider
  implements Provider<RaydiumPoolV4, RaydiumGlobalFarmV5, RaydiumUserFarmV5>
{
  providerName = 'Raydium'
  providerSlug = 'raydium'

  contextAdapter: RaydiumContextAdapter
  instructions: RaydiumInstructions
  resolvers: RaydiumResolvers

  constructor(deps: RaydiumProviderDeps) {
    this.contextAdapter = deps.contextAdapter
    this.instructions = deps.instructions
    this.resolvers = deps.resolvers
  }
}
