export type VaultProgram = {
  version: '0.1.0'
  name: 'vault'
  instructions: [
    {
      name: 'initializeNoFees'
      accounts: [
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'underlyingMint'
          isMut: false
          isSigner: false
        },
        {
          name: 'sharesMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'authority'
          isMut: true
          isSigner: true
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'depositLimit'
          type: 'u64'
        }
      ]
    },
    {
      name: 'initialize'
      accounts: [
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'underlyingMint'
          isMut: false
          isSigner: false
        },
        {
          name: 'sharesMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'authority'
          isMut: true
          isSigner: true
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'depositLimit'
          type: 'u64'
        },
        {
          name: 'performanceFeeMillibps'
          type: 'u64'
        },
        {
          name: 'stakeFeeMillibps'
          type: 'u64'
        },
        {
          name: 'unstakeFeeMillibps'
          type: 'u64'
        }
      ]
    },
    {
      name: 'setStrategy'
      accounts: [
        {
          name: 'vault'
          isMut: false
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'authority'
          isMut: true
          isSigner: true
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'steps'
          type: {
            vec: {
              defined: 'VaultOperation'
            }
          }
        },
        {
          name: 'addresses'
          type: {
            vec: 'publicKey'
          }
        },
        {
          name: 'mints'
          type: {
            vec: 'publicKey'
          }
        }
      ]
    },
    {
      name: 'claimFee'
      accounts: [
        {
          name: 'vault'
          isMut: false
          isSigner: false
        },
        {
          name: 'distributionAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultPerformanceFee'
          isMut: true
          isSigner: false
        },
        {
          name: 'feeDestination'
          isMut: true
          isSigner: false
        },
        {
          name: 'payer'
          isMut: false
          isSigner: true
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'owner'
          type: 'publicKey'
        },
        {
          name: 'id'
          type: 'u64'
        },
        {
          name: 'proof'
          type: {
            vec: 'publicKey'
          }
        }
      ]
    },
    {
      name: 'closeFee'
      accounts: [
        {
          name: 'vault'
          isMut: false
          isSigner: false
        },
        {
          name: 'distributionAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'payer'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'orcaInitFarm'
      accounts: [
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: true
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'userInfoAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmId'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'orcaStake'
      accounts: [
        {
          name: 'userShares'
          isMut: true
          isSigner: false
        },
        {
          name: 'userUnderlying'
          isMut: true
          isSigner: false
        },
        {
          name: 'userAccount'
          isMut: true
          isSigner: true
        },
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultFarmTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultRewardTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'sharesMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmId'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmRewardVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmBaseVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'amount'
          type: 'u64'
        }
      ]
    },
    {
      name: 'orcaUnstake'
      accounts: [
        {
          name: 'userShares'
          isMut: true
          isSigner: false
        },
        {
          name: 'userUnderlying'
          isMut: true
          isSigner: false
        },
        {
          name: 'userAccount'
          isMut: true
          isSigner: true
        },
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultFarmTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultRewardTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'sharesMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmId'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmRewardVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmBaseVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'amount'
          type: 'u64'
        }
      ]
    },
    {
      name: 'orcaHarvest'
      accounts: [
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'farmAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultRewardTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmRewardVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmBaseVault'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmId'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'orcaRedeemToToken'
      accounts: [
        {
          name: 'vaultTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault'
          isMut: false
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'poolTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'lpTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'feesAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'ammId'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'orcaRedeemToLp'
      accounts: [
        {
          name: 'vaultTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultLpTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault'
          isMut: false
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'poolTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'lpTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'feesAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'ammId'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'orcaRedeemToStake'
      accounts: [
        {
          name: 'vault'
          isMut: false
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'vaultBaseTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultFarmTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultRewardTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmBaseVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmRewardVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmId'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'orcaReinvest'
      accounts: [
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'distributionAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultAuthorityFee'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultProtocolFee'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultPerformanceFee'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'authority'
          isMut: true
          isSigner: true
        },
        {
          name: 'vaultBaseTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultFarmTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultRewardTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmId'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmRewardVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmBaseVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'base'
          type: {
            array: ['u8', 32]
          }
        }
      ]
    },
    {
      name: 'raydiumInitFarm'
      accounts: [
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: true
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'userInfoAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmId'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'raydiumStake'
      accounts: [
        {
          name: 'userShares'
          isMut: true
          isSigner: false
        },
        {
          name: 'userUnderlying'
          isMut: true
          isSigner: false
        },
        {
          name: 'userAccount'
          isMut: true
          isSigner: true
        },
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultRewardTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultRewardTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'sharesMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmId'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmRewardAVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmRewardBVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmBaseVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'amount'
          type: 'u64'
        }
      ]
    },
    {
      name: 'raydiumUnstake'
      accounts: [
        {
          name: 'userShares'
          isMut: true
          isSigner: false
        },
        {
          name: 'userUnderlying'
          isMut: true
          isSigner: false
        },
        {
          name: 'userAccount'
          isMut: true
          isSigner: true
        },
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultRewardTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultRewardTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'sharesMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmId'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmRewardAVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmRewardBVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmBaseVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'amount'
          type: 'u64'
        }
      ]
    },
    {
      name: 'raydiumHarvest'
      accounts: [
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'farmAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultRewardTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultRewardTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultBaseTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmRewardAVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmRewardBVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmBaseVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmId'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'raydiumRedeemToToken'
      accounts: [
        {
          name: 'vaultTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault'
          isMut: false
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'serumTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'serumTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammId'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammOpenOrders'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammTarget'
          isMut: true
          isSigner: false
        },
        {
          name: 'serumMarket'
          isMut: true
          isSigner: false
        },
        {
          name: 'serumEventQueue'
          isMut: true
          isSigner: false
        },
        {
          name: 'serumBids'
          isMut: true
          isSigner: false
        },
        {
          name: 'serumAsks'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'serumVaultSigner'
          isMut: false
          isSigner: false
        },
        {
          name: 'serumProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'poolProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'raydiumRedeemToLp'
      accounts: [
        {
          name: 'vaultTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultLpTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault'
          isMut: false
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'poolTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'lpTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'serumMarket'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammOpenOrders'
          isMut: false
          isSigner: false
        },
        {
          name: 'ammTarget'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammId'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'raydiumRedeemToStake'
      accounts: [
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'farmAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultRewardTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultRewardTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultBaseTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmRewardAVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmRewardBVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmBaseVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmId'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'raydiumReinvest'
      accounts: [
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'distributionAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultAuthorityFee'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultProtocolFee'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultPerformanceFee'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'authority'
          isMut: true
          isSigner: true
        },
        {
          name: 'farmAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultRewardTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultRewardTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultBaseTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmRewardAVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmRewardBVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmBaseVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmId'
          isMut: true
          isSigner: false
        },
        {
          name: 'farmAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'base'
          type: {
            array: ['u8', 32]
          }
        }
      ]
    },
    {
      name: 'quarryInitFarm'
      accounts: [
        {
          name: 'vault'
          isMut: false
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'tokenMint'
          isMut: false
          isSigner: false
        },
        {
          name: 'payer'
          isMut: true
          isSigner: true
          docs: ['Payer of [Miner] creation.']
        },
        {
          name: 'miner'
          isMut: true
          isSigner: false
        },
        {
          name: 'minerVault'
          isMut: false
          isSigner: false
        },
        {
          name: 'quarry'
          isMut: true
          isSigner: false
        },
        {
          name: 'rewarder'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'quarryStake'
      accounts: [
        {
          name: 'userShares'
          isMut: true
          isSigner: false
        },
        {
          name: 'userUnderlying'
          isMut: true
          isSigner: false
        },
        {
          name: 'userAccount'
          isMut: false
          isSigner: true
        },
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'sharesMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'miner'
          isMut: false
          isSigner: false
        },
        {
          name: 'minerVault'
          isMut: false
          isSigner: false
        },
        {
          name: 'quarry'
          isMut: false
          isSigner: false
        },
        {
          name: 'rewarder'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'amountIn'
          type: 'u64'
        }
      ]
    },
    {
      name: 'quarryUnstake'
      accounts: [
        {
          name: 'userShares'
          isMut: true
          isSigner: false
        },
        {
          name: 'userUnderlying'
          isMut: true
          isSigner: false
        },
        {
          name: 'userAccount'
          isMut: false
          isSigner: true
        },
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'sharesMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'miner'
          isMut: false
          isSigner: false
        },
        {
          name: 'minerVault'
          isMut: false
          isSigner: false
        },
        {
          name: 'quarry'
          isMut: false
          isSigner: false
        },
        {
          name: 'rewarder'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'amountIn'
          type: 'u64'
        }
      ]
    },
    {
      name: 'quarryHarvest'
      accounts: [
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'vaultIouTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'miner'
          isMut: true
          isSigner: false
        },
        {
          name: 'rewarder'
          isMut: true
          isSigner: false
        },
        {
          name: 'minter'
          isMut: true
          isSigner: false
        },
        {
          name: 'mintWrapper'
          isMut: true
          isSigner: false
        },
        {
          name: 'iouTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'iouFeesAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'quarry'
          isMut: true
          isSigner: false
        },
        {
          name: 'mintWrapperProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'quarryRedeemToToken'
      accounts: [
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: true
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'redemptionVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'iouSource'
          isMut: true
          isSigner: false
        },
        {
          name: 'redemptionDestination'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'redeemer'
          isMut: false
          isSigner: false
          docs: ['Redeemer PDA.']
        },
        {
          name: 'iouMint'
          isMut: true
          isSigner: false
          docs: ['Mint of the IOU token.']
        },
        {
          name: 'redemptionMint'
          isMut: true
          isSigner: false
          docs: ['Mint of the redemption token.']
        },
        {
          name: 'mintProxyState'
          isMut: false
          isSigner: false
        },
        {
          name: 'proxyMintAuthority'
          isMut: false
          isSigner: false
          docs: ['Proxy mint authority.', 'Owned by the mint proxy.']
        },
        {
          name: 'mintProxyProgram'
          isMut: false
          isSigner: false
          docs: ['Mint proxy program.']
        },
        {
          name: 'minterInfo'
          isMut: true
          isSigner: false
          docs: ['Minter information.']
        },
        {
          name: 'redeemerProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'quarryRedeemToStake'
      accounts: [
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'miner'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultBaseTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'minerVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'quarry'
          isMut: true
          isSigner: false
        },
        {
          name: 'rewarder'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'quarryReinvest'
      accounts: [
        {
          name: 'vault'
          isMut: true
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'distributionAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultAuthorityFee'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultProtocolFee'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultPerformanceFee'
          isMut: true
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'authority'
          isMut: true
          isSigner: true
        },
        {
          name: 'miner'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultBaseTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'minerVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'quarry'
          isMut: true
          isSigner: false
        },
        {
          name: 'rewarder'
          isMut: false
          isSigner: false
        },
        {
          name: 'farmProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'base'
          type: {
            array: ['u8', 32]
          }
        }
      ]
    },
    {
      name: 'saberRedeemToToken'
      accounts: [
        {
          name: 'vaultTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault'
          isMut: false
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'poolTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolId'
          isMut: true
          isSigner: false
        },
        {
          name: 'feesAccountA'
          isMut: true
          isSigner: false
        },
        {
          name: 'feesAccountB'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'poolProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'saberRedeemToLp'
      accounts: [
        {
          name: 'vaultTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultLpTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault'
          isMut: false
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: true
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'poolTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolId'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'lpTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolProgramId'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'solendRedeemToToken'
      accounts: [
        {
          name: 'vaultTokenAAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultTokenBAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault'
          isMut: false
          isSigner: false
        },
        {
          name: 'executor'
          isMut: false
          isSigner: false
        },
        {
          name: 'strategy'
          isMut: false
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        },
        {
          name: 'reserve'
          isMut: true
          isSigner: false
        },
        {
          name: 'reserveLiquiditySupply'
          isMut: true
          isSigner: false
        },
        {
          name: 'reserveCollateralMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'lendingMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'lendingMarketAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'lendingProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    }
  ]
  accounts: [
    {
      name: 'vaultFeeDistributor'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          },
          {
            name: 'amount'
            type: 'u64'
          },
          {
            name: 'totalCranks'
            type: 'u64'
          },
          {
            name: 'claimedCranks'
            type: 'u64'
          },
          {
            name: 'claimed'
            type: {
              vec: 'publicKey'
            }
          },
          {
            name: 'reportSnapshot'
            type: {
              array: ['u8', 32]
            }
          },
          {
            name: 'vault'
            type: 'publicKey'
          },
          {
            name: 'payer'
            type: 'publicKey'
          }
        ]
      }
    },
    {
      name: 'vaultStrategy'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          },
          {
            name: 'version'
            type: 'u64'
          },
          {
            name: 'currentStep'
            type: 'u8'
          },
          {
            name: 'status'
            type: {
              defined: 'StrategyStatus'
            }
          },
          {
            name: 'steps'
            type: {
              vec: {
                defined: 'VaultOperation'
              }
            }
          },
          {
            name: 'addressBuf'
            type: {
              vec: 'publicKey'
            }
          },
          {
            name: 'mintBuf'
            type: {
              vec: 'publicKey'
            }
          },
          {
            name: 'crankers'
            type: {
              vec: 'publicKey'
            }
          }
        ]
      }
    },
    {
      name: 'vault'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          },
          {
            name: 'mintBump'
            type: 'u8'
          },
          {
            name: 'strategyBump'
            type: 'u8'
          },
          {
            name: 'executorBump'
            type: 'u8'
          },
          {
            name: 'underlyingMint'
            type: 'publicKey'
          },
          {
            name: 'authority'
            type: 'publicKey'
          },
          {
            name: 'depositLimit'
            type: 'u64'
          },
          {
            name: 'totalDeposit'
            type: 'u64'
          },
          {
            name: 'totalWithdraw'
            type: 'u64'
          },
          {
            name: 'totalGain'
            type: 'u64'
          },
          {
            name: 'lastReport'
            type: 'i64'
          },
          {
            name: 'lastCrank'
            type: 'i64'
          },
          {
            name: 'pauseInterval'
            type: 'u64'
          },
          {
            name: 'totalReports'
            type: 'u64'
          },
          {
            name: 'createdAt'
            type: 'i64'
          },
          {
            name: 'performanceFeeMillibps'
            type: 'u64'
          },
          {
            name: 'stakeFeeMillibps'
            type: 'u64'
          },
          {
            name: 'unstakeFeeMillibps'
            type: 'u64'
          }
        ]
      }
    }
  ]
  types: [
    {
      name: 'Claimer'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'totalCranks'
            type: 'u64'
          },
          {
            name: 'user'
            type: 'publicKey'
          }
        ]
      }
    },
    {
      name: 'VaultOperation'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'addressId'
            type: 'u8'
          },
          {
            name: 'mintId'
            type: 'u8'
          },
          {
            name: 'amount'
            type: {
              defined: 'Amount'
            }
          },
          {
            name: 'command'
            type: {
              defined: 'VaultCommand'
            }
          }
        ]
      }
    },
    {
      name: 'VaultOperationInfo'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'address'
            type: 'publicKey'
          },
          {
            name: 'mint'
            type: 'publicKey'
          },
          {
            name: 'amount'
            type: {
              defined: 'Amount'
            }
          },
          {
            name: 'command'
            type: {
              defined: 'VaultCommand'
            }
          }
        ]
      }
    },
    {
      name: 'VaultReport'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'NewReport'
            fields: [
              {
                name: 'snapshot'
                type: {
                  vec: 'publicKey'
                }
              }
            ]
          },
          {
            name: 'NewCrank'
            fields: [
              {
                name: 'authority'
                type: 'publicKey'
              }
            ]
          }
        ]
      }
    },
    {
      name: 'Amount'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'None'
          },
          {
            name: 'All'
          },
          {
            name: 'Quantity'
            fields: [
              {
                name: 'amount'
                type: 'u64'
              }
            ]
          },
          {
            name: 'Fraction'
            fields: [
              {
                name: 'numerator'
                type: 'u64'
              },
              {
                name: 'denominator'
                type: 'u64'
              }
            ]
          }
        ]
      }
    },
    {
      name: 'StrategyStatus'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Halted'
          },
          {
            name: 'Initializing'
          },
          {
            name: 'Running'
          }
        ]
      }
    },
    {
      name: 'VaultCommand'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Harvest'
          },
          {
            name: 'RedeemToToken'
          },
          {
            name: 'RedeemToLP'
          },
          {
            name: 'RedeemToStake'
          },
          {
            name: 'ReinvestStake'
          }
        ]
      }
    }
  ]
  events: [
    {
      name: 'VaultInitialize'
      fields: [
        {
          name: 'underlyingMint'
          type: 'publicKey'
          index: false
        },
        {
          name: 'creator'
          type: 'publicKey'
          index: false
        },
        {
          name: 'depositLimit'
          type: 'u64'
          index: false
        },
        {
          name: 'performanceFeeMillibps'
          type: 'u64'
          index: false
        },
        {
          name: 'stakeFeeMillibps'
          type: 'u64'
          index: false
        },
        {
          name: 'unstakeFeeMillibps'
          type: 'u64'
          index: false
        }
      ]
    },
    {
      name: 'VaultSetStrategy'
      fields: [
        {
          name: 'creator'
          type: 'publicKey'
          index: false
        },
        {
          name: 'steps'
          type: {
            vec: {
              defined: 'VaultOperation'
            }
          }
          index: false
        },
        {
          name: 'addresses'
          type: {
            vec: 'publicKey'
          }
          index: false
        }
      ]
    },
    {
      name: 'VaultFeeClaimed'
      fields: [
        {
          name: 'id'
          type: 'u64'
          index: false
        },
        {
          name: 'amount'
          type: 'u64'
          index: false
        },
        {
          name: 'owner'
          type: 'publicKey'
          index: false
        },
        {
          name: 'proof'
          type: {
            vec: 'publicKey'
          }
          index: false
        }
      ]
    },
    {
      name: 'VaultDistributionClosed'
      fields: []
    },
    {
      name: 'VaultTokenSwapped'
      fields: [
        {
          name: 'vault'
          type: 'publicKey'
          index: false
        },
        {
          name: 'pool'
          type: 'publicKey'
          index: false
        },
        {
          name: 'amountIn'
          type: 'u64'
          index: false
        },
        {
          name: 'amountOut'
          type: 'u64'
          index: false
        },
        {
          name: 'mintIn'
          type: 'publicKey'
          index: false
        },
        {
          name: 'mintOut'
          type: 'publicKey'
          index: false
        }
      ]
    },
    {
      name: 'VaultLiquidityProvided'
      fields: [
        {
          name: 'vault'
          type: 'publicKey'
          index: false
        },
        {
          name: 'pool'
          type: 'publicKey'
          index: false
        },
        {
          name: 'amountA'
          type: 'u64'
          index: false
        },
        {
          name: 'amountB'
          type: 'u64'
          index: false
        },
        {
          name: 'amountOut'
          type: 'u64'
          index: false
        },
        {
          name: 'mintA'
          type: 'publicKey'
          index: false
        },
        {
          name: 'mintB'
          type: 'publicKey'
          index: false
        },
        {
          name: 'mintPool'
          type: 'publicKey'
          index: false
        }
      ]
    },
    {
      name: 'VaultStakeProvided'
      fields: [
        {
          name: 'vault'
          type: 'publicKey'
          index: false
        },
        {
          name: 'farm'
          type: 'publicKey'
          index: false
        },
        {
          name: 'amountBase'
          type: 'u64'
          index: false
        },
        {
          name: 'amountFarm'
          type: 'u64'
          index: false
        },
        {
          name: 'baseMint'
          type: 'publicKey'
          index: false
        },
        {
          name: 'farmMint'
          type: 'publicKey'
          index: false
        }
      ]
    },
    {
      name: 'VaultStakeReinvested'
      fields: [
        {
          name: 'vault'
          type: 'publicKey'
          index: false
        },
        {
          name: 'farm'
          type: 'publicKey'
          index: false
        },
        {
          name: 'amountBase'
          type: 'u64'
          index: false
        },
        {
          name: 'amountFarm'
          type: 'u64'
          index: false
        },
        {
          name: 'fee'
          type: 'u64'
          index: false
        },
        {
          name: 'baseMint'
          type: 'publicKey'
          index: false
        },
        {
          name: 'farmMint'
          type: 'publicKey'
          index: false
        }
      ]
    },
    {
      name: 'VaultHarvested'
      fields: [
        {
          name: 'vault'
          type: 'publicKey'
          index: false
        },
        {
          name: 'farm'
          type: 'publicKey'
          index: false
        },
        {
          name: 'amountReward'
          type: 'u64'
          index: false
        },
        {
          name: 'rewardMint'
          type: 'publicKey'
          index: false
        }
      ]
    },
    {
      name: 'NewVault'
      fields: [
        {
          name: 'underlyingMint'
          type: 'publicKey'
          index: false
        },
        {
          name: 'creator'
          type: 'publicKey'
          index: false
        },
        {
          name: 'depositLimit'
          type: 'u64'
          index: false
        },
        {
          name: 'performanceFeeMillibps'
          type: 'u64'
          index: false
        },
        {
          name: 'stakeFeeMillibps'
          type: 'u64'
          index: false
        },
        {
          name: 'unstakeFeeMillibps'
          type: 'u64'
          index: false
        }
      ]
    }
  ]
  errors: [
    {
      code: 6000
      name: 'LossOverflow'
      msg: 'The losses exceed the total debt, did you lose all our money?'
    },
    {
      code: 6001
      name: 'InvalidOpcode'
      msg: 'Incorrect opcode'
    },
    {
      code: 6002
      name: 'CrankDenied'
      msg: 'Crank denied'
    },
    {
      code: 6003
      name: 'UnexpectedStep'
      msg: 'Unexpectedly created hash snapshot'
    },
    {
      code: 6004
      name: 'VaultIsFull'
      msg: 'Vault have reached his deposit limit'
    },
    {
      code: 6005
      name: 'ZeroDeposit'
      msg: 'Please use non-zero deposit amount'
    }
  ]
}

export const IDL: VaultProgram = {
  version: '0.1.0',
  name: 'vault',
  instructions: [
    {
      name: 'initializeNoFees',
      accounts: [
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'sharesMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'depositLimit',
          type: 'u64',
        },
      ],
    },
    {
      name: 'initialize',
      accounts: [
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'sharesMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'depositLimit',
          type: 'u64',
        },
        {
          name: 'performanceFeeMillibps',
          type: 'u64',
        },
        {
          name: 'stakeFeeMillibps',
          type: 'u64',
        },
        {
          name: 'unstakeFeeMillibps',
          type: 'u64',
        },
      ],
    },
    {
      name: 'setStrategy',
      accounts: [
        {
          name: 'vault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'steps',
          type: {
            vec: {
              defined: 'VaultOperation',
            },
          },
        },
        {
          name: 'addresses',
          type: {
            vec: 'publicKey',
          },
        },
        {
          name: 'mints',
          type: {
            vec: 'publicKey',
          },
        },
      ],
    },
    {
      name: 'claimFee',
      accounts: [
        {
          name: 'vault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'distributionAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultPerformanceFee',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feeDestination',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'owner',
          type: 'publicKey',
        },
        {
          name: 'id',
          type: 'u64',
        },
        {
          name: 'proof',
          type: {
            vec: 'publicKey',
          },
        },
      ],
    },
    {
      name: 'closeFee',
      accounts: [
        {
          name: 'vault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'distributionAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'orcaInitFarm',
      accounts: [
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'userInfoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'orcaStake',
      accounts: [
        {
          name: 'userShares',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userUnderlying',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userAccount',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultFarmTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultRewardTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'sharesMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmRewardVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmBaseVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'orcaUnstake',
      accounts: [
        {
          name: 'userShares',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userUnderlying',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userAccount',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultFarmTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultRewardTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'sharesMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmRewardVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmBaseVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'orcaHarvest',
      accounts: [
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'farmAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultRewardTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmRewardVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmBaseVault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'orcaRedeemToToken',
      accounts: [
        {
          name: 'vaultTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'poolTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lpTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feesAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'ammId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'orcaRedeemToLp',
      accounts: [
        {
          name: 'vaultTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultLpTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'poolTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lpTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feesAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'ammId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'orcaRedeemToStake',
      accounts: [
        {
          name: 'vault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'vaultBaseTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultFarmTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultRewardTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmBaseVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmRewardVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'orcaReinvest',
      accounts: [
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'distributionAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultAuthorityFee',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultProtocolFee',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultPerformanceFee',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'vaultBaseTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultFarmTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultRewardTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmRewardVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmBaseVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'base',
          type: {
            array: ['u8', 32],
          },
        },
      ],
    },
    {
      name: 'raydiumInitFarm',
      accounts: [
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'userInfoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'raydiumStake',
      accounts: [
        {
          name: 'userShares',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userUnderlying',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userAccount',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultRewardTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultRewardTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'sharesMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmRewardAVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmRewardBVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmBaseVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'raydiumUnstake',
      accounts: [
        {
          name: 'userShares',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userUnderlying',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userAccount',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultRewardTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultRewardTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'sharesMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmRewardAVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmRewardBVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmBaseVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'raydiumHarvest',
      accounts: [
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'farmAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultRewardTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultRewardTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultBaseTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmRewardAVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmRewardBVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmBaseVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'raydiumRedeemToToken',
      accounts: [
        {
          name: 'vaultTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'serumTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'serumTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammOpenOrders',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammTarget',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'serumMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'serumEventQueue',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'serumBids',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'serumAsks',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'serumVaultSigner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'serumProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'poolProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'raydiumRedeemToLp',
      accounts: [
        {
          name: 'vaultTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultLpTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'poolTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lpTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'serumMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammOpenOrders',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'ammTarget',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'raydiumRedeemToStake',
      accounts: [
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'farmAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultRewardTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultRewardTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultBaseTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmRewardAVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmRewardBVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmBaseVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'raydiumReinvest',
      accounts: [
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'distributionAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultAuthorityFee',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultProtocolFee',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultPerformanceFee',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'farmAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultRewardTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultRewardTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultBaseTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmRewardAVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmRewardBVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmBaseVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'farmAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'base',
          type: {
            array: ['u8', 32],
          },
        },
      ],
    },
    {
      name: 'quarryInitFarm',
      accounts: [
        {
          name: 'vault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'tokenMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['Payer of [Miner] creation.'],
        },
        {
          name: 'miner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'minerVault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'quarry',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'rewarder',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'quarryStake',
      accounts: [
        {
          name: 'userShares',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userUnderlying',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userAccount',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'sharesMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'miner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'minerVault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'quarry',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rewarder',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountIn',
          type: 'u64',
        },
      ],
    },
    {
      name: 'quarryUnstake',
      accounts: [
        {
          name: 'userShares',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userUnderlying',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userAccount',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'sharesMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'miner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'minerVault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'quarry',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rewarder',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountIn',
          type: 'u64',
        },
      ],
    },
    {
      name: 'quarryHarvest',
      accounts: [
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'vaultIouTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'miner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'rewarder',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'minter',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintWrapper',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'iouTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'iouFeesAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'quarry',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintWrapperProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'quarryRedeemToToken',
      accounts: [
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'redemptionVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'iouSource',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'redemptionDestination',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'redeemer',
          isMut: false,
          isSigner: false,
          docs: ['Redeemer PDA.'],
        },
        {
          name: 'iouMint',
          isMut: true,
          isSigner: false,
          docs: ['Mint of the IOU token.'],
        },
        {
          name: 'redemptionMint',
          isMut: true,
          isSigner: false,
          docs: ['Mint of the redemption token.'],
        },
        {
          name: 'mintProxyState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'proxyMintAuthority',
          isMut: false,
          isSigner: false,
          docs: ['Proxy mint authority.', 'Owned by the mint proxy.'],
        },
        {
          name: 'mintProxyProgram',
          isMut: false,
          isSigner: false,
          docs: ['Mint proxy program.'],
        },
        {
          name: 'minterInfo',
          isMut: true,
          isSigner: false,
          docs: ['Minter information.'],
        },
        {
          name: 'redeemerProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'quarryRedeemToStake',
      accounts: [
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'miner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultBaseTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'minerVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'quarry',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'rewarder',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'quarryReinvest',
      accounts: [
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'distributionAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultAuthorityFee',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultProtocolFee',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultPerformanceFee',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'miner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultBaseTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'minerVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'quarry',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'rewarder',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'farmProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'base',
          type: {
            array: ['u8', 32],
          },
        },
      ],
    },
    {
      name: 'saberRedeemToToken',
      accounts: [
        {
          name: 'vaultTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'poolTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feesAccountA',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feesAccountB',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'poolProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'saberRedeemToLp',
      accounts: [
        {
          name: 'vaultTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultLpTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'poolTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolId',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'lpTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolProgramId',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'solendRedeemToToken',
      accounts: [
        {
          name: 'vaultTokenAAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultTokenBAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'executor',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'strategy',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'reserve',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'reserveLiquiditySupply',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'reserveCollateralMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lendingMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'lendingMarketAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'lendingProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: 'vaultFeeDistributor',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'amount',
            type: 'u64',
          },
          {
            name: 'totalCranks',
            type: 'u64',
          },
          {
            name: 'claimedCranks',
            type: 'u64',
          },
          {
            name: 'claimed',
            type: {
              vec: 'publicKey',
            },
          },
          {
            name: 'reportSnapshot',
            type: {
              array: ['u8', 32],
            },
          },
          {
            name: 'vault',
            type: 'publicKey',
          },
          {
            name: 'payer',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'vaultStrategy',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'version',
            type: 'u64',
          },
          {
            name: 'currentStep',
            type: 'u8',
          },
          {
            name: 'status',
            type: {
              defined: 'StrategyStatus',
            },
          },
          {
            name: 'steps',
            type: {
              vec: {
                defined: 'VaultOperation',
              },
            },
          },
          {
            name: 'addressBuf',
            type: {
              vec: 'publicKey',
            },
          },
          {
            name: 'mintBuf',
            type: {
              vec: 'publicKey',
            },
          },
          {
            name: 'crankers',
            type: {
              vec: 'publicKey',
            },
          },
        ],
      },
    },
    {
      name: 'vault',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'mintBump',
            type: 'u8',
          },
          {
            name: 'strategyBump',
            type: 'u8',
          },
          {
            name: 'executorBump',
            type: 'u8',
          },
          {
            name: 'underlyingMint',
            type: 'publicKey',
          },
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'depositLimit',
            type: 'u64',
          },
          {
            name: 'totalDeposit',
            type: 'u64',
          },
          {
            name: 'totalWithdraw',
            type: 'u64',
          },
          {
            name: 'totalGain',
            type: 'u64',
          },
          {
            name: 'lastReport',
            type: 'i64',
          },
          {
            name: 'lastCrank',
            type: 'i64',
          },
          {
            name: 'pauseInterval',
            type: 'u64',
          },
          {
            name: 'totalReports',
            type: 'u64',
          },
          {
            name: 'createdAt',
            type: 'i64',
          },
          {
            name: 'performanceFeeMillibps',
            type: 'u64',
          },
          {
            name: 'stakeFeeMillibps',
            type: 'u64',
          },
          {
            name: 'unstakeFeeMillibps',
            type: 'u64',
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'Claimer',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'totalCranks',
            type: 'u64',
          },
          {
            name: 'user',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'VaultOperation',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'addressId',
            type: 'u8',
          },
          {
            name: 'mintId',
            type: 'u8',
          },
          {
            name: 'amount',
            type: {
              defined: 'Amount',
            },
          },
          {
            name: 'command',
            type: {
              defined: 'VaultCommand',
            },
          },
        ],
      },
    },
    {
      name: 'VaultOperationInfo',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'address',
            type: 'publicKey',
          },
          {
            name: 'mint',
            type: 'publicKey',
          },
          {
            name: 'amount',
            type: {
              defined: 'Amount',
            },
          },
          {
            name: 'command',
            type: {
              defined: 'VaultCommand',
            },
          },
        ],
      },
    },
    {
      name: 'VaultReport',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'NewReport',
            fields: [
              {
                name: 'snapshot',
                type: {
                  vec: 'publicKey',
                },
              },
            ],
          },
          {
            name: 'NewCrank',
            fields: [
              {
                name: 'authority',
                type: 'publicKey',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'Amount',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'None',
          },
          {
            name: 'All',
          },
          {
            name: 'Quantity',
            fields: [
              {
                name: 'amount',
                type: 'u64',
              },
            ],
          },
          {
            name: 'Fraction',
            fields: [
              {
                name: 'numerator',
                type: 'u64',
              },
              {
                name: 'denominator',
                type: 'u64',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'StrategyStatus',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Halted',
          },
          {
            name: 'Initializing',
          },
          {
            name: 'Running',
          },
        ],
      },
    },
    {
      name: 'VaultCommand',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Harvest',
          },
          {
            name: 'RedeemToToken',
          },
          {
            name: 'RedeemToLP',
          },
          {
            name: 'RedeemToStake',
          },
          {
            name: 'ReinvestStake',
          },
        ],
      },
    },
  ],
  events: [
    {
      name: 'VaultInitialize',
      fields: [
        {
          name: 'underlyingMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'creator',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depositLimit',
          type: 'u64',
          index: false,
        },
        {
          name: 'performanceFeeMillibps',
          type: 'u64',
          index: false,
        },
        {
          name: 'stakeFeeMillibps',
          type: 'u64',
          index: false,
        },
        {
          name: 'unstakeFeeMillibps',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'VaultSetStrategy',
      fields: [
        {
          name: 'creator',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'steps',
          type: {
            vec: {
              defined: 'VaultOperation',
            },
          },
          index: false,
        },
        {
          name: 'addresses',
          type: {
            vec: 'publicKey',
          },
          index: false,
        },
      ],
    },
    {
      name: 'VaultFeeClaimed',
      fields: [
        {
          name: 'id',
          type: 'u64',
          index: false,
        },
        {
          name: 'amount',
          type: 'u64',
          index: false,
        },
        {
          name: 'owner',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'proof',
          type: {
            vec: 'publicKey',
          },
          index: false,
        },
      ],
    },
    {
      name: 'VaultDistributionClosed',
      fields: [],
    },
    {
      name: 'VaultTokenSwapped',
      fields: [
        {
          name: 'vault',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'pool',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'amountIn',
          type: 'u64',
          index: false,
        },
        {
          name: 'amountOut',
          type: 'u64',
          index: false,
        },
        {
          name: 'mintIn',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'mintOut',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'VaultLiquidityProvided',
      fields: [
        {
          name: 'vault',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'pool',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'amountA',
          type: 'u64',
          index: false,
        },
        {
          name: 'amountB',
          type: 'u64',
          index: false,
        },
        {
          name: 'amountOut',
          type: 'u64',
          index: false,
        },
        {
          name: 'mintA',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'mintB',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'mintPool',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'VaultStakeProvided',
      fields: [
        {
          name: 'vault',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'farm',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'amountBase',
          type: 'u64',
          index: false,
        },
        {
          name: 'amountFarm',
          type: 'u64',
          index: false,
        },
        {
          name: 'baseMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'farmMint',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'VaultStakeReinvested',
      fields: [
        {
          name: 'vault',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'farm',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'amountBase',
          type: 'u64',
          index: false,
        },
        {
          name: 'amountFarm',
          type: 'u64',
          index: false,
        },
        {
          name: 'fee',
          type: 'u64',
          index: false,
        },
        {
          name: 'baseMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'farmMint',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'VaultHarvested',
      fields: [
        {
          name: 'vault',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'farm',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'amountReward',
          type: 'u64',
          index: false,
        },
        {
          name: 'rewardMint',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'NewVault',
      fields: [
        {
          name: 'underlyingMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'creator',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depositLimit',
          type: 'u64',
          index: false,
        },
        {
          name: 'performanceFeeMillibps',
          type: 'u64',
          index: false,
        },
        {
          name: 'stakeFeeMillibps',
          type: 'u64',
          index: false,
        },
        {
          name: 'unstakeFeeMillibps',
          type: 'u64',
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'LossOverflow',
      msg: 'The losses exceed the total debt, did you lose all our money?',
    },
    {
      code: 6001,
      name: 'InvalidOpcode',
      msg: 'Incorrect opcode',
    },
    {
      code: 6002,
      name: 'CrankDenied',
      msg: 'Crank denied',
    },
    {
      code: 6003,
      name: 'UnexpectedStep',
      msg: 'Unexpectedly created hash snapshot',
    },
    {
      code: 6004,
      name: 'VaultIsFull',
      msg: 'Vault have reached his deposit limit',
    },
    {
      code: 6005,
      name: 'ZeroDeposit',
      msg: 'Please use non-zero deposit amount',
    },
  ],
}
