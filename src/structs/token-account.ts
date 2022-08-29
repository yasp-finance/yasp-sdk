import { BeetStruct, u32, u64, u8 } from '@metaplex-foundation/beet'
import { SPLTokenAccount } from '../types/accounts'
import { publicKey } from '../utils/structs/beets'

export const TokenAccountStruct = new BeetStruct<SPLTokenAccount>(
  [
    ['mint', publicKey],
    ['owner', publicKey],
    ['amount', u64],
    ['delegateOption', u32],
    ['delegate', publicKey],
    ['state', u8],
    ['isNativeOption', u32],
    ['isNative', u64],
    ['delegatedAmount', u64],
    ['closeAuthorityOption', u32],
    ['closeAuthority', publicKey],
  ],
  (args) => args as SPLTokenAccount,
  'SPLTokenAccount'
)
