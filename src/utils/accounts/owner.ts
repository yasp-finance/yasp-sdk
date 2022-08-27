import { Keypair, PublicKey, Signer } from '@solana/web3.js'

type TOwner = Keypair | PublicKey

export class OwnerAccount {
  constructor(private readonly owner: TOwner) {}

  get publicKey(): PublicKey {
    if (isKeyPair(this.owner)) {
      return this.owner.publicKey
    }

    return this.owner
  }

  get signer(): Signer | undefined {
    return isKeyPair(this.owner) ? this.owner : undefined
  }

  get isKeyPair(): boolean {
    return isKeyPair(this.owner)
  }

  get isPublicKey(): boolean {
    return isPublicKey(this.owner)
  }
}

function isKeyPair(owner: TOwner): owner is Keypair {
  return owner && 'secretKey' in owner && owner.secretKey !== undefined
}

function isPublicKey(owner: TOwner): owner is PublicKey {
  return owner && !isKeyPair(owner)
}
