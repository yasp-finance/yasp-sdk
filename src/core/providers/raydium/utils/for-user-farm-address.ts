import { PublicKey } from '@solana/web3.js'

export async function forUserFarmAddress(
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
