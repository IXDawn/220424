/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button } from '@mui/material'
import { useSwitchNetwork } from '../../hooks/useSwitchNetwork'

export default function UnsupportedNetworkBar() {
  const { isUnsupportedChainIdError, switchNetwork } = useSwitchNetwork()

  return (
    <div
      css={css`
        display: ${isUnsupportedChainIdError ? 'flex' : 'none'};
        background: palevioletred;
        justify-content: center;
        align-items: center;
      `}
    >
      <div>Unsupported Network</div>
      <Button
        size={'small'}
        onClick={() => {
          switchNetwork()
        }}
      >
        switch network
      </Button>
    </div>
  )
}
