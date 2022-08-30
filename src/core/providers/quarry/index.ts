import { Provider } from '@type/provider'
import { QuarryContextAdapter } from '@yasp/providers/quarry/context-adapter'
import { QuarryInstructions } from '@yasp/providers/quarry/instructions'
import { QuarryResolvers } from '@yasp/providers/quarry/resolvers'
import { Miner, Quarry } from '@type/providers'

export type QuarryProviderDeps = {
  contextAdapter: QuarryContextAdapter
  instructions: QuarryInstructions
  resolvers: QuarryResolvers
}

export class QuarryProvider implements Provider<unknown, Quarry, Miner> {
  providerName = 'Quarry'
  providerSlug = 'quarry'

  contextAdapter: QuarryContextAdapter
  instructions: QuarryInstructions
  resolvers: QuarryResolvers

  constructor(deps: QuarryProviderDeps) {
    this.contextAdapter = deps.contextAdapter
    this.instructions = deps.instructions
    this.resolvers = deps.resolvers
  }
}
