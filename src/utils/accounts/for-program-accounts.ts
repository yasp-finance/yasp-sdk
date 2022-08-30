import {
  Connection,
  GetProgramAccountsConfig,
  PublicKey,
} from '@solana/web3.js'
import { AccountWithPublicKey } from '@type/core'

export async function forProgramAccounts(
  this: Connection,
  programId: PublicKey,
  config: GetProgramAccountsConfig
): Promise<AccountWithPublicKey[]> {
  const response = await this.getProgramAccounts(programId, config)
  return response.map((account) => ({
    publicKey: account.pubkey,
    ...account.account,
  }))
}
