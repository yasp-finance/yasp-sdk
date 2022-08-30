import { PublicKey } from '@solana/web3.js'
import { QUARRY_MINE } from '@const/providers/quarry'

export async function forMiner(authority: PublicKey, quarry: PublicKey) {
  return PublicKey.findProgramAddress(
    [Buffer.from('Miner', 'utf-8'), quarry.toBuffer(), authority.toBuffer()],
    QUARRY_MINE
  )
}
