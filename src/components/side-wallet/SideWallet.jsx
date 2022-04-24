/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core'
import { useSwitchNetwork } from '../../hooks/useSwitchNetwork'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
const WalletConnect = new WalletConnectConnector({
  rpcUrl: 'https://mainnet.infura.io/v3/d1ebe4d9b8b142f4bfa1651b958ebea8',
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
})

const Injected = new InjectedConnector({
  supportedChainIds: [1],
})

export default function SideWallet({ toggleSideWalletOpen }) {
  const { activate, deactivate, active, account } = useWeb3React()
  const { isUnsupportedChainIdError, switchNetwork } = useSwitchNetwork()

  return (
    <>
      {/*已连接钱包*/}
      {active && (
        <div
          css={css`
            width: 378px;
            margin: 0 auto;
          `}
        >
          <div>{account}</div>
          <div
            css={css`
              margin-bottom: 16px;
              border: 1px solid #e6e6e6;
              border-radius: 8px;
              text-align: center;
              padding: 8px;
              margin: 0 auto;
              cursor: pointer;
            `}
            onClick={deactivate}
          >
            disconnect
          </div>
        </div>
      )}

      {/*未连接钱包*/}
      {!active && !isUnsupportedChainIdError && (
        <div
          css={css`
            width: 378px;
            padding: 129px 30px 0;
          `}
        >
          <div
            css={css`
              font-size: 20px;
              color: #000000;
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <div
              css={css`
                font-family: PingFang SC;
                font-weight: bold;
              `}
            >
              Choose Your Wallet
            </div>
            <div onClick={() => toggleSideWalletOpen()}>
              <HighlightOffIcon />
            </div>
          </div>
          <div
            css={css`
              width: 318px;
              background: #ffffff;
              box-shadow: 0px 4px 9px 1px rgba(0, 0, 0, 0.06);
              border-radius: 10px;
              margin-top: 39px;
              padding: 9px 15px;
              > div {
                margin: 11px 0;
                border-radius: 8px;
                text-align: center;
                padding: 8px;
                cursor: pointer;
                padding: 9px 0 6px 16px;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
              onClick={() => {
                activate(Injected)
              }}
            >
              <div
                css={css`
                  width: 34px;
                  height: 34px;
                  background: rgba(0, 0, 0, 0.5);
                  margin-right: 21px;
                `}
              ></div>
              <div>Metamask</div>
            </div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
              onClick={() => {
                activate(WalletConnect)
              }}
            >
              <div
                css={css`
                  width: 34px;
                  height: 34px;
                  background: rgba(0, 0, 0, 0.5);
                  margin-right: 21px;
                `}
              ></div>
              <div>WalletConnect</div>
            </div>
          </div>
        </div>
      )}

      {/*已连接钱包，但不是主网*/}
      {isUnsupportedChainIdError && (
        <div
          css={css`
            padding: 40px;
            > div {
              margin-bottom: 16px;
              border: 1px solid #e6e6e6;
              border-radius: 8px;
              text-align: center;
              padding: 8px;
              cursor: pointer;
            }
          `}
        >
          <div
            onClick={() => {
              switchNetwork()
            }}
          >
            Switch to Mainnet
          </div>
        </div>
      )}
    </>
  )
}
