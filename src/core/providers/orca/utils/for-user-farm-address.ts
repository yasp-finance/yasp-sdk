import { PublicKey } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { ORCA_FARM_ID } from '@const/providers'

export async function forUserFarmAddress(
  globalFarm: PublicKey,
  owner: PublicKey,
  tokenProgramId: PublicKey = TOKEN_PROGRAM_ID,
  aquafarmProgramId: PublicKey = ORCA_FARM_ID
): Promise<[PublicKey, number]> {
  return PublicKey.findProgramAddress(
    [globalFarm.toBuffer(), owner.toBuffer(), tokenProgramId.toBuffer()],
    aquafarmProgramId
  )
}
