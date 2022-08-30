import { AccountMap, AccountWithPublicKey } from '@type/core'
import { PublicKey } from '@solana/web3.js'

export function toAccountMap<T = unknown>(
  accounts: AccountWithPublicKey<T>[]
): AccountMap<T> {
  const kv = accounts.map((account) => {
    return [account.publicKey, account] as [PublicKey, AccountWithPublicKey<T>]
  })
  return new Map(kv)
}
