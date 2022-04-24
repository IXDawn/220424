/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
function SellTitle() {
  return (
    <div>
      <div
        css={css`
          font-size: 26px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #000000;
          line-height: 40px;
          margin-top: 32px;
        `}
      >
        List Your Items for Sale
      </div>
      <div
        css={css`
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 29px;
        `}
      >
        Sell NFTs you own across multiple marketplaces-individually or in
        batches.
      </div>
    </div>
  )
}

export default SellTitle
