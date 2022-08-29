import { Connection, PublicKey } from '@solana/web3.js'
import { TokenAccountStruct } from '../../structs/token-account'

export async function forTokenAccount(
  this: Connection,
  tokenAccount: PublicKey
) {
  const accountInfo = await this.getAccountInfo(tokenAccount)
  if (!accountInfo) {
    throw new Error("Token account doesn't exists")
  }

  const [account] = TokenAccountStruct.deserialize(accountInfo.data)
  return account
}
