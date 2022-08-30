import { PublicKey } from '@solana/web3.js'
import { VAULT_PROGRAM_ID } from '@const/vault'

async function forVault(underlyingMint: PublicKey, authority: PublicKey) {
  return PublicKey.findProgramAddress(
    [Buffer.from('vault'), underlyingMint.toBuffer(), authority.toBuffer()],
    VAULT_PROGRAM_ID
  )
}
