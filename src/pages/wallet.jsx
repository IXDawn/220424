/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { css as cssClass } from '@emotion/css'
import NoFooterLayout from '../components/layout/NoFooterLayout'
import { ReactSortable } from 'react-sortablejs'
import { useMemo, useState } from 'react'
import { IconButton, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export default function Wallet() {
  const [tokenList] = useState([
    { id: 1, name: 'ETH' },
    { id: 2, name: 'USDT' },
    { id: 3, name: 'USDC' },
    { id: 4, name: 'WETH' },
    { id: 5, name: 'Token0' },
    { id: 6, name: 'Token1' },
    { id: 7, name: 'Token2' },
  ])

  const [paymentTokens, setPaymentTokens] = useState([{ id: 1, name: 'ETH' }])

  const remainingTokens = useMemo(() => {
    return tokenList.filter(({ id }) => {
      return !paymentTokens.some(
        ({ id: paymentTokenId }) => paymentTokenId === id
      )
    })
  }, [paymentTokens, tokenList])

  const handleAddPaymentToken = (id) => {
    setPaymentTokens([
      ...paymentTokens,
      tokenList.find((token) => token.id === id),
    ])
  }

  const handleRemovePaymentToken = (id) => {
    setPaymentTokens(paymentTokens.filter((token) => token.id !== id))
  }

  return (
    <NoFooterLayout>
      <div>
        <ReactSortable
          list={paymentTokens}
          setList={setPaymentTokens}
          animation={200}
          ghostClass={cssClass`
            background-color: grey;
          `}
        >
          {paymentTokens.map((item) => (
            <div
              css={css`
                width: 600px;
                height: 80px;
                border: 2px solid blue;
                border-radius: 10px;
                margin: 10px;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
              `}
              key={item.id}
            >
              <div
                css={css`
                  display: flex;
                `}
              >
                <div>{item.name}</div>
                <IconButton onClick={() => handleRemovePaymentToken(item.id)}>
                  <CloseIcon />
                </IconButton>
              </div>
              <TextField />
            </div>
          ))}
        </ReactSortable>
        <div>
          {remainingTokens.map((item) => (
            <div
              css={css`
                width: 600px;
                height: 80px;
                border: 1px solid black;
                border-radius: 10px;
                margin: 10px;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
              `}
              key={item.id}
              onClick={() => handleAddPaymentToken(item.id)}
            >
              <div>{item.name}</div>
              <div>0.25</div>
            </div>
          ))}
        </div>
      </div>
    </NoFooterLayout>
  )
}
