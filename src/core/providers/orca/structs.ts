import {
  u256,
  BeetStruct,
  blob,
  u64,
  bool,
  publicKey,
  u8,
} from '../../../utils/structs/beets'
import { OrcaGlobalFarm, OrcaPool, OrcaUserFarm } from './types'

export const OrcaGlobalFarmStruct = new BeetStruct<OrcaGlobalFarm>(
  [
    ['isInitialized', bool],
    ['accountType', u8],
    ['nonce', u8],
    ['tokenProgramId', publicKey],
    ['emissionsAuthority', publicKey],
    ['removeRewardsAuthority', publicKey],
    ['baseTokenMint', publicKey],
    ['baseTokenVault', publicKey],
    ['rewardTokenVault', publicKey],
    ['farmTokenMint', publicKey],
    ['emissionsPerSecondNumerator', u64],
    ['emissionsPerSecondDenominator', u64],
    ['lastUpdatedTimestamp', u64],
    ['cumulativeEmissionsPerFarmToken', u256],
  ],
  (args) => args as OrcaGlobalFarm,
  'OrcaGlobalFarm'
)

export const OrcaUserFarmStruct = new BeetStruct<OrcaUserFarm>(
  [
    ['isInitialized', bool],
    ['accountType', u8],
    ['globalFarm', publicKey],
    ['owner', publicKey],
    ['baseTokensConverted', u64],
    ['cumulativeEmissionsCheckpoint', u256],
  ],
  (args) => args as OrcaUserFarm,
  'OrcaUserFarm'
)

export const OrcaPoolStruct = new BeetStruct<OrcaPool>(
  [
    ['version', u8],
    ['isInitialized', bool],
    ['nonce', u8],
    ['tokenProgramId', publicKey],
    ['tokenA', publicKey],
    ['tokenB', publicKey],
    ['poolMint', publicKey],
    ['tokenAMint', publicKey],
    ['tokenBMint', publicKey],
    ['feeAccount', publicKey],
    ['tradeFeeNumerator', u64],
    ['tradeFeeDenominator', u64],
    ['ownerTradeFeeNumerator', u64],
    ['ownerTradeFeeDenominator', u64],
    ['ownerWithdrawFeeNumerator', u64],
    ['ownerWithdrawFeeDenominator', u64],
    ['hostFeeNumerator', u64],
    ['hostFeeDenominator', u64],
    ['curveType', u8],
    ['curveParameters', blob(32)],
  ],
  (args) => args as OrcaPool,
  'OrcaPool'
)
