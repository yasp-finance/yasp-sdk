import { PublicKey } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { RAYDIUM_V4_SWAP_ID } from './consts'

export class RaydiumGettersImpl {
  async getPoolAuthority(pool: PublicKey, programId = RAYDIUM_V4_SWAP_ID) {
    return PublicKey.findProgramAddress([pool.toBuffer()], programId)
  }

  async getFarmAuthority(
    farm: PublicKey,
    programId: PublicKey
  ): Promise<[PublicKey, number]> {
    return PublicKey.findProgramAddress([farm.toBuffer()], programId)
  }

  async getGlobalFarmAddress(
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

  async getUserFarmAddress(
    globalFarm: PublicKey,
    owner: PublicKey,
    farmProgramId: PublicKey
  ): Promise<[PublicKey, number]> {
    return PublicKey.findProgramAddress(
      [
        globalFarm.toBuffer(),
        owner.toBuffer(),
        Buffer.from('staker_info_v2_associated_seed', 'utf-8'),
      ],
      farmProgramId
    )
  }
}
