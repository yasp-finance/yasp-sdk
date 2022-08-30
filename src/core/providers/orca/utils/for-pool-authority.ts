import { PublicKey } from '@solana/web3.js'
import { ORCA_POOL_ID } from '@const/providers'

export async function forPoolAuthority(
  pool: PublicKey,
  programId = ORCA_POOL_ID
) {
  return PublicKey.findProgramAddress([pool.toBuffer()], programId)
}
