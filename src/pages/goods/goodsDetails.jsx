/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import Header from '../../components/header/Header'
import GoodsImg from '../../components/goods/GoodsImg'
import GoodsInformation from '../../components/goods/GoodsInformation'
function GoodsDetails() {
  const mainStyle = css`
    display: flex;
    margin-top: 40px;
  `
  return (
    <div>
      <Header />
      <div
        css={css`
          margin: 0 auto;
          max-width: 1440px;
        `}
      >
        <div css={[mainStyle]}>
          <GoodsImg />
          <div>
            <GoodsInformation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoodsDetails
