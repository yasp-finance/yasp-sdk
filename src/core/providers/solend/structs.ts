import {
  array,
  BeetStruct,
  bool,
  u64,
  u8,
  uniformFixedSizeArray,
} from '@metaplex-foundation/beet'
import {
  LastUpdate,
  LendingMarket,
  Obligation,
  ObligationCollateral,
  ObligationLiquidity,
  Reserve,
  ReserveCollateral,
  ReserveConfig,
  ReserveFees,
  ReserveLiquidity,
} from './types'
import { publicKey } from '../../../utils/structs/beets'

export const LastUpdateStruct = new BeetStruct<LastUpdate>(
  [
    ['slot', u64],
    ['stale', bool],
  ],
  (args) => args as LastUpdate,
  'LastUpdate'
)

export const LendingMarketStruct = new BeetStruct<LendingMarket>(
  [
    ['version', u8],
    ['bumpSeed', u8],
    ['owner', publicKey],
    ['quoteCurrency', uniformFixedSizeArray(u8, 32)],
    ['tokenProgramId', publicKey],
    ['oracleProgramId', publicKey],
    ['switchboardOracleProgramId', publicKey],
  ],
  (args) => args as LendingMarket,
  'LendingMarket'
)

export const ReserveFeesStruct = new BeetStruct<ReserveFees>(
  [
    ['borrowFeeWad', u64],
    ['flashLoanFeeWad', u64],
    ['hostFeePercentage', u8],
  ],
  (args) => args as ReserveFees,
  'ReserveFees'
)

export const ReserveConfigStruct = new BeetStruct<ReserveConfig>(
  [
    ['optimalUtilizationRate', u8],
    ['loanToValueRatio', u8],
    ['liquidationBonus', u8],
    ['liquidationThreshold', u8],
    ['minBorrowRate', u8],
    ['optimalBorrowRate', u8],
    ['maxBorrowRate', u8],
    ['fees', ReserveFeesStruct],
    ['depositLimit', u64],
    ['borrowLimit', u64],
    ['feeReceiver', publicKey],
    ['protocolLiquidationFee', u8],
    ['protocolTakeRate', u8],
  ],
  (args) => args as ReserveConfig,
  'ReserveConfig'
)

export const ReserveCollateralStruct = new BeetStruct<ReserveCollateral>(
  [
    ['mint', publicKey],
    ['mintTotalSupply', u64],
    ['supplyReserve', publicKey],
  ],
  (args) => args as ReserveCollateral,
  'ReserveCollateral'
)

export const ReserveLiquidityStruct = new BeetStruct<ReserveLiquidity>(
  [
    ['mint', publicKey],
    ['mintDecimals', u8],
    ['supplyReserve', publicKey],
    ['pythOracle', publicKey],
    ['switchboardOracle', publicKey],
    ['availableAmount', u64],
    ['borrowedAmountWads', u64],
    ['cumulativeBorrowRateWads', uniformFixedSizeArray(u64, 3)],
    ['accumulatedProtocolFeesWads', uniformFixedSizeArray(u64, 3)],
    ['marketPrice', uniformFixedSizeArray(u64, 3)],
  ],
  (args) => args as ReserveLiquidity,
  'ReserveLiquidity'
)

export const ReserveStruct = new BeetStruct<Reserve>(
  [
    ['version', u8],
    ['lastUpdate', LastUpdateStruct],
    ['lendingMarket', publicKey],
    ['liquidity', ReserveLiquidityStruct],
    ['collateral', ReserveCollateralStruct],
    ['config', ReserveConfigStruct],
  ],
  (args) => args as Reserve,
  'Reserve'
)

export const ObligationCollateralStruct = new BeetStruct<ObligationCollateral>(
  [
    ['depositReserve', publicKey],
    ['depositedAmount', u64],
    ['marketValue', uniformFixedSizeArray(u64, 3)],
  ],
  (args) => args as ObligationCollateral,
  'ObligationCollateral'
)

export const ObligationLiquidityStruct = new BeetStruct<ObligationLiquidity>(
  [
    ['borrowReserve', publicKey],
    ['cumulativeBorrowRateWads', uniformFixedSizeArray(u64, 3)],
    ['borrowedAmountWads', uniformFixedSizeArray(u64, 3)],
    ['marketValue', uniformFixedSizeArray(u64, 3)],
  ],
  (args) => args as ObligationLiquidity,
  'ObligationLiquidity'
)

/// pub struct Obligationa {
//     /// Version of the struct
//     pub version: u8,
//     /// Last update to collateral, liquidity, or their market values
//     pub last_update: LastUpdate,
//     /// Lending market address
//     pub lending_market: Pubkey,
//     /// Owner authority which can borrow liquidity
//     pub owner: Pubkey,
//     /// Deposited collateral for the obligation, unique by deposit reserve address
//     pub deposits: Vec<ObligationCollateral>,
//     /// Borrowed liquidity for the obligation, unique by borrow reserve address
//     pub borrows: Vec<ObligationLiquidity>,
//     /// Market value of deposits
//     pub deposited_value: Decimal,
//     /// Market value of borrows
//     pub borrowed_value: Decimal,
//     /// The maximum borrow value at the weighted average loan to value ratio
//     pub allowed_borrow_value: Decimal,
//     /// The dangerous borrow value at the weighted average liquidation threshold
//     pub unhealthy_borrow_value: Decimal,
// }

export const ObligationStruct = new BeetStruct<Obligation>(
  [
    ['version', u8],
    ['lastUpdate', LastUpdateStruct],
    ['lendingMarket', publicKey],
    ['owner', publicKey],
    ['deposits', array(ObligationCollateralStruct)],
    ['borrows', array(ObligationLiquidityStruct)],
    ['depositedValue', uniformFixedSizeArray(u64, 3)],
    ['borrowedValue', uniformFixedSizeArray(u64, 3)],
    ['allowedBorrowValue', uniformFixedSizeArray(u64, 3)],
    ['unhealthyBorrowValue', uniformFixedSizeArray(u64, 3)],
  ],
  (args) => args as Obligation,
  'Obligation'
)
