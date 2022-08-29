import { PublicKey } from '@solana/web3.js'
import { bignum, COption } from '@metaplex-foundation/beet'

export type SPLTokenAccount = {
  mint: PublicKey
  owner: PublicKey
  amount: bignum
  delegateOption: bignum
  delegate: COption<PublicKey>
  state: number
  isNativeOption: bignum
  isNative: COption<bignum>
  delegatedAmount: bignum
  closeAuthorityOption: bignum
  closeAuthority: COption<PublicKey>
}
