import { Provider } from '@type/provider'
import { OrcaInstructions } from '@yasp/providers/orca/instructions'
import { OrcaContextAdapter } from '@yasp/providers/orca/context-adapter'
import { OrcaGlobalFarm, OrcaPool, OrcaUserFarm } from '@type/providers'
import {OrcaResolvers} from "@yasp/providers/orca/resolvers";

export type OrcaProviderDeps = {
  contextAdapter: OrcaContextAdapter
  instructions: OrcaInstructions
  resolvers: OrcaResolvers
}

export class OrcaProvider
  implements Provider<OrcaPool, OrcaGlobalFarm, OrcaUserFarm>
{
  providerName = 'Orca'
  providerSlug = 'orca'

  contextAdapter: OrcaContextAdapter
  instructions: OrcaInstructions
  resolvers: OrcaResolvers

  constructor(deps: OrcaProviderDeps) {
    this.contextAdapter = deps.contextAdapter
    this.instructions = deps.instructions
    this.resolvers = deps.resolvers
  }
}
