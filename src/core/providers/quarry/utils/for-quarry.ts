import { PublicKey } from '@solana/web3.js'
import { QUARRY_MINE } from '@const/providers/quarry'

export async function forQuarry(rewarder: PublicKey, baseMint: PublicKey) {
  return PublicKey.findProgramAddress(
    [Buffer.from('Quarry', 'utf-8'), rewarder.toBuffer(), baseMint.toBuffer()],
    QUARRY_MINE
  )
}
