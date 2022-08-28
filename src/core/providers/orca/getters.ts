import { PublicKey } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { ORCA_FARM_ID, ORCA_POOL_ID } from './consts'

export class OrcaGettersImpl {
  async getPoolAuthority(pool: PublicKey, programId = ORCA_POOL_ID) {
    return PublicKey.findProgramAddress([pool.toBuffer()], programId)
  }

  async getFarmAuthority(
    publicKey: PublicKey,
    programId: PublicKey = ORCA_FARM_ID
  ): Promise<[PublicKey, number]> {
    return PublicKey.findProgramAddress([publicKey.toBuffer()], programId)
  }

  async getGlobalFarmAddress(
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

  async getUserFarmAddress(
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
}
