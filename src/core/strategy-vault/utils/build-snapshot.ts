import { Connection, PublicKey } from '@solana/web3.js'
import { forParsedAccount } from '@util/accounts/for-parsed-account'
import {Vault, VaultStrategy} from '@type/core'
import { keccak_256 as keccak256 } from 'js-sha3'
import {VaultStrategyStruct, VaultStruct} from '@structs/vault'
import BN from "bn.js";

export async function buildSnapshot(
  this: Connection,
  lastSigner: PublicKey,
  vaultKey: PublicKey
) {
  const vault = await forParsedAccount<Vault>.call(this, vaultKey, VaultStruct)
  const strategy = await forParsedAccount<VaultStrategy>.call(
    this,
    vaultKey,
    VaultStrategyStruct
  )
  return keccak256
    .update(
      Buffer.concat([
        ...strategy.crankers.map((cranker) => cranker.toBuffer()),
        lastSigner.toBuffer(),
        new BN(vault.totalReports).toBuffer('le', 8),
      ])
    )
    .digest()
}
