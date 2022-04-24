import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

export const useSwitchNetwork = () => {
  const { error } = useWeb3React()
  const isUnsupportedChainIdError = error instanceof UnsupportedChainIdError
  const switchNetwork = async () => {
    const library = new Web3Provider(window.ethereum)
    try {
      await library.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1' }],
      })
    } catch (switchError) {
      // 4902 error code indicates the chain is missing on the wallet
      console.log(switchError)
    }
  }

  return { isUnsupportedChainIdError, switchNetwork }
}
