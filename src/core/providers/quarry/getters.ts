import { PublicKey } from '@solana/web3.js'
import { QUARRY_MINE, QUARRY_REDEEMER } from './consts'

export class QuarryGettersImpl {
  async getMiner(authority: PublicKey, quarry: PublicKey) {
    return PublicKey.findProgramAddress(
      [Buffer.from('Miner', 'utf-8'), quarry.toBuffer(), authority.toBuffer()],
      QUARRY_MINE
    )
  }

  async getQuarry(rewarder: PublicKey, baseMint: PublicKey) {
    return PublicKey.findProgramAddress(
      [
        Buffer.from('Quarry', 'utf-8'),
        rewarder.toBuffer(),
        baseMint.toBuffer(),
      ],
      QUARRY_MINE
    )
  }

  async getRewarder(baseKey: PublicKey) {
    return PublicKey.findProgramAddress(
      [Buffer.from('Rewarder', 'utf-8'), baseKey.toBuffer()],
      QUARRY_MINE
    )
  }

  async getRedeemer(iouMint: PublicKey, redemptionMint: PublicKey) {
    return PublicKey.findProgramAddress(
      [
        Buffer.from('Redeemer', 'utf-8'),
        iouMint.toBuffer(),
        redemptionMint.toBuffer(),
      ],
      QUARRY_REDEEMER
    )
  }
}
