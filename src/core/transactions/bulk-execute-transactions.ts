import { BulkExecuteBuildersFn } from '../../types/transaction-builders'

export const bulkExecuteTransactions: BulkExecuteBuildersFn = async function (
  provider,
  builders
) {
  const transactionRequest = await Promise.all(
    builders.map(async (builder) => {
      const { transaction: tx, signers } = await builder.build()
      return { tx, signers }
    })
  )

  return provider.sendAll!(transactionRequest, { commitment: 'singleGossip' })
}
