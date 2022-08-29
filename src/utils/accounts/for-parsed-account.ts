import { Connection, PublicKey } from '@solana/web3.js'
import { BeetStruct } from '../../utils/structs/beets'
import { AccountWithPublicKey } from '../../types/core'

export async function forParsedAccount<T>(
  this: Connection,
  address: PublicKey,
  beetStruct: BeetStruct<T, Partial<T>>
): Promise<AccountWithPublicKey<T>> {
  const accountInfo = await this.getAccountInfo(address, 'confirmed')

  if (!accountInfo) {
    throw new Error(`Account ${address} doesn't exist.`)
  }

  const [structKeys] = beetStruct.deserialize(accountInfo.data)

  return {
    publicKey: address,
    ...structKeys,
  }
}