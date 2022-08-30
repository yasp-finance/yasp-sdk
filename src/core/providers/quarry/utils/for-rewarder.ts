import { PublicKey } from '@solana/web3.js'
import { QUARRY_MINE } from '@const/providers/quarry'

export async function forRewarder(baseKey: PublicKey) {
  return PublicKey.findProgramAddress(
    [Buffer.from('Rewarder', 'utf-8'), baseKey.toBuffer()],
    QUARRY_MINE
  )
}
