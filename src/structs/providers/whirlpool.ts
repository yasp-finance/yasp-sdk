import {
  i32,
  u128,
  u16,
  uniformFixedSizeArray,
  u64,
  u8,
  BeetStruct,
} from '@metaplex-foundation/beet'
import { blob, publicKey } from '@util/structs/beets'
import {
  Position,
  PositionRewardInfo,
  Whirlpool,
  WhirlpoolRewardInfo,
} from '@type/providers/whirlpool'

export const WhirlpoolRewardInfoStruct = new BeetStruct<WhirlpoolRewardInfo>(
  [
    ['mint', publicKey],
    ['vault', publicKey],
    ['authority', publicKey],
    ['emissionsPerSecondX64', u128],
    ['growthGlobalX64', u128],
  ],
  (args) => args as WhirlpoolRewardInfo,
  'WhirlpoolRewardInfo'
)

export const WhirlpoolStruct = new BeetStruct<Whirlpool>(
  [
    ['padding', blob(8)],
    ['whirlpoolsConfig', publicKey],
    ['whirlpoolBump', uniformFixedSizeArray(u8, 1)],
    ['tickSpacing', u16],
    ['tickSpacingSeed', uniformFixedSizeArray(u8, 2)],
    ['feeRate', u16],
    ['protocolFeeRate', u16],
    ['liquidity', u128],
    ['sqrtPrice', u128],
    ['tickCurrentIndex', i32],
    ['protocolFeeOwedA', u64],
    ['protocolFeeOwedB', u64],
    ['tokenMintA', publicKey],
    ['tokenVaultA', publicKey],
    ['feeGrowthGlobalA', u128],
    ['tokenMintB', publicKey],
    ['tokenVaultB', publicKey],
    ['feeGrowthGlobalB', u128],
    ['rewardLastUpdatedTimestamp', u64],
    ['rewardInfos', uniformFixedSizeArray(WhirlpoolRewardInfoStruct, 3)],
  ],
  (args) => args as Whirlpool,
  'Whirlpool'
)

export const PositionRewardInfoStruct = new BeetStruct<PositionRewardInfo>(
  [
    ['growthInsideCheckpoint', u128],
    ['amountOwed', u64],
  ],
  (args) => args as PositionRewardInfo,
  'PositionRewardInfo'
)

export const PositionStruct = new BeetStruct<Position>(
  [
    ['padding', blob(8)],
    ['whirlpool', publicKey],
    ['positionMint', publicKey],
    ['liquidity', u128],
    ['tickLowerIndex', i32],
    ['tickUpperIndex', i32],
    ['feeGrowthCheckpointA', u128],
    ['feeOwedA', u64],
    ['feeGrowthCheckpointB', u128],
    ['feeOwedB', u64],
    ['rewardInfos', uniformFixedSizeArray(PositionRewardInfoStruct, 3)],
  ],
  (args) => args as Position,
  'Position'
)
