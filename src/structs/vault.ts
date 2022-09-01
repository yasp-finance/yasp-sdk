import { PublicKey } from '@solana/web3.js'
import {
    u64,
    i64,
    u8,
    BeetStruct,
    bignum,
    dataEnum,
    uniformFixedSizeArray,
    array,
    FixableBeetStruct,
    unit,
    BeetArgsStruct, fixedScalarEnum,
} from '@metaplex-foundation/beet'
import { blob, publicKey } from '@util/structs/beets'
import {Amount, Rsu, Vault, VaultCommand, VaultFeeDistributor, VaultOperation, VaultStrategy} from '@type/core'

export const VaultStruct = new BeetStruct<Vault>(
  [
    ['padding', blob(8)],
    ['bump', u8],
    ['mintBump', u8],
    ['executorBump', u8],
    ['underlyingMint', publicKey],
    ['authority', publicKey],
    ['depositLimit', u64],
    ['totalDeposit', u64],
    ['totalWithdraw', u64],
    ['totalGain', u64],
    ['lastReport', i64],
    ['createdAt', i64],
    ['performanceFeeMillibps', u64],
    ['stakeFeeMillibps', u64],
    ['unstakeFeeMillibps', u64],
  ],
  (args) => args as Vault,
  'Vault'
)

export const AmountStruct = dataEnum<Amount>([
  ['None', unit],
  ['All', unit],
  ['Quantity', new BeetArgsStruct([['amount', u64]])],
  [
    'Fraction',
    new BeetArgsStruct([
      ['numerator', u64],
      ['denominator', u64],
    ]),
  ],
])

export const VaultCommandStruct = fixedScalarEnum(VaultCommand)

export const VaultOperationStruct = new BeetStruct<VaultOperation>(
  [
    ['addressId', u8],
    ['mintId', u8],
    ['amount', AmountStruct],
    ['command', VaultCommandStruct],
  ],
  (args) => args as VaultOperation,
  'VaultOperation'
)

export const VaultStrategyStruct = new BeetStruct<VaultStrategy>(
  [
    ['bump', u8],
    ['version', u64],
    ['currentStep', u8],
    ['status', u8],
    ['steps', array(VaultOperationStruct)],
    ['addressBuffer', array(publicKey)],
    ['mintBuffer', array(publicKey)],
    ['crankers', array(publicKey)],
  ],
  (args) => args as VaultStrategy,
  'VaultStrategy'
)

export const VaultFeeDistributorStruct = new BeetStruct<VaultFeeDistributor>(
  [
    ['padding', blob(8)],
    ['bump', u8],
    ['amount', u64],
    ['totalCranks', u64],
    ['claimedCranks', u64],
    ['claimed', array(publicKey)],
    ['reportSnapshot', uniformFixedSizeArray(u8, 32)],
    ['vault', publicKey],
    ['payer', publicKey],
  ],
  (args) => args as VaultFeeDistributor,
  'VaultFeeDistributor'
)
