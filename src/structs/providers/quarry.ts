import { Miner, Rewarder, Quarry, Minter, MintWrapper } from '@type/providers/quarry'
import { blob, publicKey } from '@util/structs/beets'
import { BeetStruct, bool, u128, u16, u64, u8 } from '@metaplex-foundation/beet'

export const MinerStruct = new BeetStruct<Miner>(
  [
    ['padding', blob(8)],
    ['quarry', publicKey],
    ['authority', publicKey],
    ['bump', u8],
    ['tokenVaultKey', publicKey],
    ['rewardsEarned', u64],
    ['rewardsPerTokenPaid', u128],
    ['balance', u64],
    ['index', u64],
  ],
  (args) => args as Miner,
  'Miner'
)

export const RewarderStruct = new BeetStruct<Rewarder>(
  [
    ['padding', blob(8)],
    ['base', publicKey],
    ['bump', u8],
    ['authority', publicKey],
    ['pendingAuthority', publicKey],
    ['numQuarries', u16],
    ['annualRewardsRate', u64],
    ['totalRewardsShares', u64],
    ['mintWrapper', publicKey],
    ['rewardsTokenMint', publicKey],
    ['claimFeeTokenAccount', publicKey],
    ['maxClaimFeeMillibps', u64],
    ['pauseAuthority', publicKey],
    ['isPaused', bool],
  ],
  (args) => args as Rewarder,
  'Rewarder'
)

export const QuarryStruct = new BeetStruct<Quarry>(
  [
    ['padding', blob(8)],
    ['rewarder', publicKey],
    ['tokenMintKey', publicKey],
    ['bump', u8],
    ['index', u16],
    ['tokenMintDecimals', u8],
    ['famineTs', i64],
    ['lastUpdateTs', i64],
    ['rewardsPerTokenStored', u128],
    ['annualRewardsRate', u64],
    ['rewardsShare', u64],
    ['totalTokensDeposited', u64],
    ['numMiners', u64],
  ],
  (args) => args as Quarry,
  'Quarry'
)

export const MinterStruct = new BeetStruct<Minter>(
  [
    ['padding', blob(8)],
    ['mintWrapper', publicKey],
    ['minterAuthority', publicKey],
    ['bump', u8],
    ['index', u64],
    ['allowance', u64],
    ['totalMinted', u64],
  ],
  (args) => args as Minter,
  'Minter'
)

export const MintWrapperStruct = new BeetStruct<MintWrapper>(
  [
    ['padding', blob(8)],
    ['base', publicKey],
    ['bump', u8],
    ['hardCap', u64],
    ['admin', publicKey],
    ['pendingAdmin', publicKey],
    ['tokenMint', publicKey],
    ['numMinters', u64],
    ['totalAllowance', u64],
    ['totalMinted', u64],
  ],
  (args) => args as MintWrapper,
  'Minter'
)
