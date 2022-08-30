import { Connection, PublicKey } from '@solana/web3.js'
import { forMultipleAccountsInfo } from './for-multiple-accounts-info'

import { MAX_ACCOUNT_BATCH_SIZE } from '@const/solana'
import { AccountWithPublicKey } from '@type/core'

export async function forMultipleAccountsInfoSafe(
  this: Connection,
  publicKeys: PublicKey[]
): Promise<AccountWithPublicKey[]> {
  if (publicKeys.length <= MAX_ACCOUNT_BATCH_SIZE) {
    return forMultipleAccountsInfo.call(this, publicKeys)
  }
  const accountsInfo = []
  const publicKeysToFetch = [...publicKeys]
  while (publicKeysToFetch.length !== 0) {
    const currPublicKeysToFetch = publicKeysToFetch.splice(
      0,
      MAX_ACCOUNT_BATCH_SIZE
    )
    const accountsInfoRes = await forMultipleAccountsInfo.call(
      this,
      currPublicKeysToFetch
    )
    accountsInfo.push(...accountsInfoRes)
  }
  return accountsInfo
}
