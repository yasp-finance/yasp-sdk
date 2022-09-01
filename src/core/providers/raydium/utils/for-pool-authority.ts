import { PublicKey } from '@solana/web3.js'
import { RAYDIUM_V4_SWAP_ID } from '@const/providers/raydium'

export async function forPoolAuthority(
  pool: PublicKey,
  programId = RAYDIUM_V4_SWAP_ID
) {
  return PublicKey.findProgramAddress([pool.toBuffer()], programId)
}
