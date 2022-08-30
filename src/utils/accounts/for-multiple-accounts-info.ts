import { Connection, PublicKey } from '@solana/web3.js'
import { AccountWithPublicKey } from '@type/core'

export async function forMultipleAccountsInfo(
  this: Connection,
  publicKeys: PublicKey[]
): Promise<AccountWithPublicKey[]> {
  const accounts = await this.getMultipleAccountsInfo(publicKeys)

  return accounts.map((account, i): AccountWithPublicKey => {
    if (!account) {
      throw new Error(`Account ${publicKeys[i]} doesn't exist`)
    }
    return { publicKey: publicKeys[i], ...account }
  })
}
