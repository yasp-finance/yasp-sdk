import { PublicKey } from '@solana/web3.js'
import { VAULT_PROGRAM_ID } from '@const/vault'

async function forStrategy(vault: PublicKey) {
  return PublicKey.findProgramAddress(
    [Buffer.from('strategy'), vault.toBuffer()],
    VAULT_PROGRAM_ID
  )
}
