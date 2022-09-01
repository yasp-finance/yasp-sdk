import { PublicKey } from '@solana/web3.js'

export async function forFarmAuthority(
  farm: PublicKey,
  programId: PublicKey
): Promise<[PublicKey, number]> {
  return PublicKey.findProgramAddress([farm.toBuffer()], programId)
}
