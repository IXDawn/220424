/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useStore } from '../../store/hooks'
import { observer } from 'mobx-react-lite'
import SideCartListNFT from './SideCartListNFT'
import { Checkbox } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import { grey } from '@mui/material/colors'
const SideCartListCollection = observer(({ address, tokenIdMap }) => {
  const { cartStore } = useStore()
  const { isAddressChecked, setAddressChecked } = cartStore
  const handleAddressCheckedChange = (event) => {
    setAddressChecked(address, event.target.checked)
  }
  const itemStyle = css`
    border-bottom: 1px solid #f0f0f0;
  `
  const titleStyle = css`
    display: flex;
    justify-content: space-between;
  `
  return (
    <div css={[itemStyle]}>
      <div css={[titleStyle]}>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <div
            css={css`
              width: 24px;
              height: 24px;
              border-radius: 12px;
              background: rgba(0, 0, 0, 0.2);
              margin-right: 14px;
            `}
          ></div>
          <div
            css={css`
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 400;
              color: #000000;
            `}
          >
            Bored Ape Yacht Club {`>`}
          </div>
        </div>
        <div>
          <Checkbox
            icon={
              <Brightness1Icon
                sx={{
                  color: '#FAFAFA',
                  border: '1px solid #F0F0F0',
                  borderRadius: 50,
                }}
              />
            }
            checkedIcon={<CheckCircleIcon />}
            checked={isAddressChecked(address)}
            onChange={handleAddressCheckedChange}
            sx={{
              color: grey[900],
              '&.Mui-checked': {
                color: grey[900],
              },
            }}
          />
        </div>
      </div>
      <div>
        {[...tokenIdMap.keys()].map((tokenId) => {
          return (
            <SideCartListNFT
              key={tokenId}
              address={address}
              tokenId={tokenId}
            />
          )
        })}
      </div>
    </div>
  )
  // return (
  //   <div
  //     css={css`
  //       border: 1px solid black;
  //       border-radius: 8px;
  //     `}
  //   >
  //     <div
  //       css={css`
  //         display: flex;
  //         justify-content: space-between;
  //         align-items: center;
  //       `}
  //     >
  //       <div>address: {address.substring(0, 8)}</div>
  //       <Checkbox
  //         checked={isAddressChecked(address)}
  //         onChange={handleAddressCheckedChange}
  //       />
  //     </div>

  //     {[...tokenIdMap.keys()].map((tokenId) => {
  //       return (
  //         <SideCartListNFT key={tokenId} address={address} tokenId={tokenId} />
  //       )
  //     })}
  //   </div>
  // )
})

export default SideCartListCollection
