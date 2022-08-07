import { FromSchema } from 'json-schema-to-ts'
import { strategyVaultSpec } from '../schema/strategy-vault'
import { protocolProviderSpec } from '../schema/protocol-provider'

type StrategyVault = FromSchema<typeof strategyVaultSpec>
type ProtocolProvider = FromSchema<typeof protocolProviderSpec>
type Instruction = Record<string, unknown>

export interface ProtocolProviders {
  forProtocolProviders(): Promise<ProtocolProvider[]>

  forProtocolProvider(pubkey: string): Promise<ProtocolProvider>
}

export interface StrategyVaults {
  forStrategyVaults(): Promise<void>

  forStrategyVault(pubkey: string): Promise<StrategyVault>

  deposit(
    vault: StrategyVault,
    amount: string,
    ownerPubKey: string
  ): Promise<Instruction>

  withdraw(
    vault: StrategyVault,
    amount: string,
    ownerPubKey: string
  ): Promise<Instruction>

  crank(vault: StrategyVault): Promise<Instruction>
}
