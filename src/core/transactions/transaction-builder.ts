import {
  Connection,
  PublicKey,
  sendAndConfirmTransaction,
  Signer,
  Transaction,
  TransactionCtorFields,
  TransactionInstruction,
} from '@solana/web3.js'

import {
  TransactionBuilder,
  TransactionPayload,
} from '../../types/transaction-builders'
import { Instruction } from '../../types/instructions'

import { OwnerAccount } from '../../utils/accounts/owner'
import { NoKeypairError } from '../errors/no-keypair'

export class TransactionBuilderImpl implements TransactionBuilder {
  instructions: Instruction[]

  constructor(
    private readonly connection: Connection,
    private readonly feePayer: PublicKey,
    private readonly ownerAccount: OwnerAccount
  ) {
    this.instructions = []
  }

  addTransactionInstruction(instruction: Instruction): TransactionBuilder {
    this.instructions.push(instruction)
    return this
  }

  async build(): Promise<TransactionPayload> {
    const recentBlockHash = (
      await this.connection.getRecentBlockhash('singleGossip')
    ).blockhash
    const txFields: TransactionCtorFields = {
      recentBlockhash: recentBlockHash,
      feePayer: this.feePayer,
    }

    let instructions: TransactionInstruction[] = []
    let cleanupInstructions: TransactionInstruction[] = []
    let signers: Signer[] = []
    this.instructions.forEach((curr) => {
      instructions = instructions.concat(curr.instructions)
      cleanupInstructions = curr.purgeInstructions.concat(cleanupInstructions)
      signers = signers.concat(curr.signers)
    })

    const transaction = new Transaction(txFields)
    transaction.add(...instructions.concat(cleanupInstructions))
    transaction.feePayer = this.feePayer

    const execute = this.ownerAccount.isKeyPair
      ? async () => {
          return sendAndConfirmTransaction(
            this.connection,
            transaction,
            signers
          )
        }
      : () => {
          throw new NoKeypairError()
        }

    return {
      transaction,
      signers,
      execute,
    }
  }

  reset(): void {}
}
