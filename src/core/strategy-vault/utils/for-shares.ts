import {PublicKey} from "@solana/web3.js";
import {VAULT_PROGRAM_ID} from "@const/vault";

export async function forShares(vault: PublicKey) {
    return await PublicKey.findProgramAddress(
        [Buffer.from('shares'), vault.toBuffer()],
        VAULT_PROGRAM_ID
    )
}
