import { PublicKey } from '@solana/web3.js'
import { VAULT_PROGRAM_ID } from '@const/vault'


export async function forExecutor(vault: PublicKey) {
  return await PublicKey.findProgramAddress(
    [Buffer.from('executor'), vault.toBuffer()],
    VAULT_PROGRAM_ID
  )
}

