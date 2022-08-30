import { Connection, PublicKey } from '@solana/web3.js'
import { BeetStruct } from '@metaplex-foundation/beet'
import { forMultipleAccountsInfoSafe } from '@util/accounts/for-multiple-accounts-info-safe'
import { AccountWithPublicKey } from '@type/core'

export async function forParsedMultipleAccounts<T>(
  this: Connection,
  publicKeys: PublicKey[],
  beetStruct: BeetStruct<T, Partial<T>>
): Promise<AccountWithPublicKey<T>[]> {
  const accountsInfo = await forMultipleAccountsInfoSafe.call(this, publicKeys)
  return accountsInfo.map((accountInfo, i) => ({
    publicKey: publicKeys[i],
    ...beetStruct.deserialize(accountInfo.data)[0],
  }))
}
