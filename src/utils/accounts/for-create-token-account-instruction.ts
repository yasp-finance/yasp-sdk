import {
  Connection,
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  TransactionInstruction,
} from '@solana/web3.js'
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token'

import { forAssociatedToken } from './for-associated-token'
import { SYSTEM_PROGRAM_ID } from '@const/solana'

export async function forCreateTokenAccountInstruction(
  this: Connection,
  mint: PublicKey,
  owner: PublicKey,
  funder: PublicKey
): Promise<TransactionInstruction> {
  const [tokenAccount] = await forAssociatedToken.call(this, mint, owner)

  return new TransactionInstruction({
    data: Buffer.alloc(0),
    keys: [
      { isWritable: true, pubkey: funder, isSigner: true },
      { isWritable: true, pubkey: tokenAccount, isSigner: false },
      { isWritable: false, pubkey: owner, isSigner: false },
      { isWritable: false, pubkey: mint, isSigner: false },
      { isWritable: false, pubkey: SYSTEM_PROGRAM_ID, isSigner: false },
      { isWritable: false, pubkey: TOKEN_PROGRAM_ID, isSigner: false },
      { isWritable: false, pubkey: SYSVAR_RENT_PUBKEY, isSigner: false },
    ],
    programId: ASSOCIATED_TOKEN_PROGRAM_ID,
  })
}
