import {
  Connection,
  GetProgramAccountsConfig,
  GetProgramAccountsFilter,
  PublicKey,
} from '@solana/web3.js'
import { BeetStruct, FixableBeetStruct } from '../../utils/structs/beets'
import { AccountWithPublicKey } from '../../types/core'
import { forProgramAccounts } from './for-program-accounts'

export async function forParsedProgramAccounts<T>(
  this: Connection,
  programId: PublicKey,
  beetStruct: BeetStruct<T, Partial<T>> | FixableBeetStruct<T, Partial<T>>,
  filters?: GetProgramAccountsFilter[]
): Promise<AccountWithPublicKey<T>[]> {
  const config: GetProgramAccountsConfig = {
    filters,
    commitment: 'confirmed',
    encoding: 'base64',
  }
  const accounts = await forProgramAccounts.call(this, programId, config)

  return accounts.map(
    (account): AccountWithPublicKey<T> => ({
      publicKey: account.publicKey,
      ...beetStruct.deserialize(account.data)[0],
    })
  )
}
