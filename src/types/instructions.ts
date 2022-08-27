import { Signer, TransactionInstruction } from '@solana/web3.js'

export type Instruction = {
  instructions: TransactionInstruction[]
  purgeInstructions: TransactionInstruction[]
  signers: Signer[]
}
