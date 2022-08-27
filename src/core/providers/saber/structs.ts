import {
  BeetStruct,
  bool,
  publicKey,
  u64,
  u8,
} from '../../../utils/structs/beets'
import { RawFees, StableSwap } from './types'

export const RawFeesStruct = new BeetStruct<RawFees>(
  [
    ['adminTradeFeeNumerator', u64],
    ['adminTradeFeeDenominator', u64],
    ['adminWithdrawFeeNumerator', u64],
    ['adminWithdrawFeeDenominator', u64],
    ['tradeFeeNumerator', u64],
    ['tradeFeeDenominator', u64],
    ['withdrawFeeNumerator', u64],
    ['withdrawFeeDenominator', u64],
  ],
  (args) => args as RawFees,
  'StableSwap'
)

export const StableSwapStruct = new BeetStruct<StableSwap>(
  [
    ['isInitialized', bool],
    ['isPaused', bool],
    ['nonce', u8],
    ['initialAmpFactor', u64],
    ['targetAmpFactor', u64],
    ['startRampTs', u64],
    ['stopRampTs', u64],
    ['futureAdminDeadline', u64],
    ['futureAdminAccount', publicKey],
    ['adminAccount', publicKey],
    ['tokenA', publicKey],
    ['tokenB', publicKey],
    ['tokenPool', publicKey],
    ['tokenAMint', publicKey],
    ['tokenBMint', publicKey],
    ['adminFeeAccountA', publicKey],
    ['adminFeeAccountB', publicKey],
    ['fees', RawFeesStruct],
  ],
  (args) => args as StableSwap,
  'StableSwap'
)
