/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import NFTCard from './NFTCard'

export default function NFTCardList({ NFTs }) {
  return (
    <div
      css={css`
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      `}
    >
      {NFTs.map((NFT) => {
        // TODO: 如何唯一标识NFT
        return (
          <NFTCard
            key={NFT.address + NFT.tokenId}
            address={NFT.address}
            tokenId={NFT.tokenId}
          />
        )
      })}
    </div>
  )
}
