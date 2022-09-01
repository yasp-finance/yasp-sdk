import { PublicKey } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'

export async function forGlobalFarmAddress(
  baseTokenMint: PublicKey,
  rewardTokenMint: PublicKey,
  funder: PublicKey,
  farmProgramId: PublicKey,
  tokenProgramId: PublicKey = TOKEN_PROGRAM_ID
): Promise<[PublicKey, number]> {
  return PublicKey.findProgramAddress(
    [
      baseTokenMint.toBuffer(),
      rewardTokenMint.toBuffer(),
      funder.toBuffer(),
      tokenProgramId.toBuffer(),
    ],
    farmProgramId
  )
}
