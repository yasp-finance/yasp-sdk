import { PublicKey } from '@solana/web3.js'
import { ORCA_FARM_ID } from '@const/providers'

export async function forFarmAuthority(
  publicKey: PublicKey,
  programId: PublicKey = ORCA_FARM_ID
): Promise<[PublicKey, number]> {
  return PublicKey.findProgramAddress([publicKey.toBuffer()], programId)
}
