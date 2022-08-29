import { PublicKey } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { ORCA_FARM_ID } from '@const/providers'

export async function forGlobalFarmAddress(
  baseTokenMint: PublicKey,
  rewardTokenMint: PublicKey,
  funder: PublicKey,
  tokenProgramId: PublicKey = TOKEN_PROGRAM_ID,
  programId: PublicKey = ORCA_FARM_ID
): Promise<[PublicKey, number]> {
  return PublicKey.findProgramAddress(
    [
      baseTokenMint.toBuffer(),
      rewardTokenMint.toBuffer(),
      funder.toBuffer(),
      tokenProgramId.toBuffer(),
    ],
    programId
  )
}
