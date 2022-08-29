import {Connection, PublicKey} from "@solana/web3.js";

import {forAssociatedToken} from "@util/accounts/for-associated-token";
import {forTokenAccount} from "@util/accounts/for-token-account";
import {forCreateTokenAccountInstruction} from "@util/accounts/for-create-token-account-instruction";


export async function forGetOrCreateTokenAccountInstruction(
    this: Connection,
    mint: PublicKey,
    owner: PublicKey,
    funder: PublicKey
) {
    try {
        const [tokenAccount] = await forAssociatedToken.call(this, mint, owner);
        const account = await forTokenAccount.call(this, tokenAccount);
        return { account, instruction: undefined };
    } catch (e) {
        const instruction = await forCreateTokenAccountInstruction.call(this, mint, owner, funder);
        return { account: undefined, instruction };
    }
}
