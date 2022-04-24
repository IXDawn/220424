/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import SideCartListCollection from './SideCartListCollection'

export default function SideCartList({ cartList }) {
  return (
    <div
      css={css`
        padding: 5px 25px 0 23px;
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      `}
    >
      {Object.entries(cartList).map(([address, tokenIdMap]) => {
        return (
          <SideCartListCollection
            key={address}
            address={address}
            tokenIdMap={tokenIdMap}
          />
        )
      })}
    </div>
  )
}
