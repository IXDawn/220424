/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { observer } from 'mobx-react-lite'
import { useLoaded } from '../../hooks/useLoaded'
import { useStore } from '../../store/hooks'
import { computed } from 'mobx'
import ResultsItem from '../resultsItem/ResultsItem'
const cardMain = css`
  aspect-ratio: 1/1.2;
  border-radius: 8px;
  cursor: pointer;
`

const checked = css`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: -3px;
    right: -3px;
    top: -3px;
    bottom: -3px;
    border: 3px solid #000000;
    box-shadow: 0px 12px 13px 1px rgba(0, 0, 0, 0.06);
    border-radius: 18px;
  }
`

const NFTCard = observer(({ address, tokenId }) => {
  const loaded = useLoaded()
  const { cartStore } = useStore()
  const isOnCart = computed(() => {
    return cartStore.isOnCart(address, tokenId)
  }).get()
  const toggleSelected = isOnCart
    ? cartStore.removeFromCart
    : cartStore.addToCart

  if (!loaded) return null
  return (
    <div
      css={[cardMain, isOnCart && checked]}
      onClick={() => toggleSelected(address, tokenId)}
    >
      {/* {address + ' ' + tokenId} */}
      <ResultsItem isOnCart={isOnCart} />
    </div>
  )
})

export default NFTCard
