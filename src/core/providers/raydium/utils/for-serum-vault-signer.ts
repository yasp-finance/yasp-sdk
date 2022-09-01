import { PublicKey } from '@solana/web3.js'
import { SERUM_PROGRAM_ID } from '@const/providers/raydium'
import BN from 'bn.js'

export async function forSerumVaultSigner(
  marketPublicKey: PublicKey,
  dexProgramId: PublicKey = SERUM_PROGRAM_ID
): Promise<[PublicKey, number]> {
  const nonce = new BN(0)
  while (nonce.toNumber() < 255) {
    try {
      const vaultOwner = await PublicKey.createProgramAddress(
        [marketPublicKey.toBuffer(), nonce.toArrayLike(Buffer, 'le', 8)],
        dexProgramId
      )
      return [vaultOwner, nonce.toNumber()]
    } catch (e) {
      nonce.iaddn(1)
    }
  }
  throw new Error('Unable to find nonce')
}
