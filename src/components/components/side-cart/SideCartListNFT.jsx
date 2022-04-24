/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store/hooks'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import Checkbox from '@mui/material/Checkbox'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { grey } from '@mui/material/colors'
import CancelIcon from '@mui/icons-material/Cancel'
const SideCartListNFT = observer(({ address, tokenId }) => {
  const { cartStore } = useStore()
  const { isChecked, setChecked } = cartStore
  const handleCheckedChange = (event) => {
    setChecked(address, tokenId, event.target.checked)
  }
  const itemStyle = css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  `
  const goodsImgStyle = css`
    background: rgba(0, 0, 0, 0.2);
    width: 48px;
    height: 48px;
    border-radius: 10px;
    position: relative;
  `
  const goodsCloseStyle = css`
    position: absolute;
    right: -10px;
    top: -10px;
  `
  return (
    <div css={[itemStyle]}>
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <div css={[goodsImgStyle]}>
          <div css={[goodsCloseStyle]}>
            <CancelIcon
              sx={{
                color: '#FFFFFF',
                background: '#E6E6E6',
                borderRadius: 50,
              }}
              onClick={() => cartStore.removeFromCart(address, tokenId)}
            />
          </div>
        </div>
        <div
          css={css`
            margin-left: 14px;
          `}
        >
          <div
            css={css`
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 400;
              color: #666666;
              margin-bottom: 5px;
            `}
          >
            Azuki#4563
          </div>
          <div
            css={css`
              font-size: 16px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #000000;
            `}
          >
            16.04 ETH
          </div>
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
          checked={isChecked(address, tokenId)}
          onChange={handleCheckedChange}
          sx={{
            color: grey[900],
            '&.Mui-checked': {
              color: grey[900],
            },
          }}
        />
      </div>
    </div>
  )
  // return (
  //   <div
  //     css={css`
  //       aspect-ratio: 5/1;
  //       border: 1px solid black;
  //       border-radius: 8px;
  //       margin: 4px;
  //       display: flex;
  //       align-items: center;
  //     `}
  //   >
  //     <IconButton onClick={() => cartStore.removeFromCart(address, tokenId)}>
  //       <CloseIcon />
  //     </IconButton>
  //     <div>{address + ' ' + tokenId}</div>
  //     <Checkbox
  //       checked={isChecked(address, tokenId)}
  //       onChange={handleCheckedChange}
  //     />
  //   </div>
  // )
})

export default SideCartListNFT
