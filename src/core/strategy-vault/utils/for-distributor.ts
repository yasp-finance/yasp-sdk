import { Connection, PublicKey } from '@solana/web3.js'
import { VAULT_PROGRAM_ID } from '@const/vault'

export async function forDistributor(hash: number[], vault: PublicKey) {
  return PublicKey.findProgramAddress(
    [Buffer.from('distributor'), Buffer.from(hash), vault.toBuffer()],
    VAULT_PROGRAM_ID
  )
}
