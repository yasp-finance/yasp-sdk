import { PublicKey } from '@solana/web3.js'
import { QUARRY_REDEEMER } from '@const/providers/quarry'

export async function forRedeemer(
  iouMint: PublicKey,
  redemptionMint: PublicKey
) {
  return PublicKey.findProgramAddress(
    [
      Buffer.from('Redeemer', 'utf-8'),
      iouMint.toBuffer(),
      redemptionMint.toBuffer(),
    ],
    QUARRY_REDEEMER
  )
}
