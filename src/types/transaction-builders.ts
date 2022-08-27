import { Signer, Transaction, TransactionSignature } from '@solana/web3.js'
import { Instruction } from './instructions'
import { Provider } from '@project-serum/anchor'

export type TransactionPayload = {
  transaction: Transaction
  signers: Signer[]
  execute: () => Promise<TransactionSignature>
}

export interface TransactionBuilder {
  // Chaining method
  addTransactionInstruction(instruction: Instruction): TransactionBuilder

  build(): Promise<TransactionPayload>
}

export type BulkExecuteBuildersFn = (
  provider: Provider,
  builders: TransactionBuilder[]
) => Promise<string[]>
