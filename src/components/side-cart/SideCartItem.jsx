/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'
import Checkbox from '@mui/material/Checkbox'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import SideCartItemGoods from './SideCartItemGoods'
import { grey } from '@mui/material/colors'
function SideCartItem(props) {
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
            icon={<PanoramaFishEyeIcon />}
            checkedIcon={<CheckCircleIcon />}
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
        {props.item.itemArr.map((item) => {
          return <SideCartItemGoods item={item} key={item.item} />
        })}
      </div>
    </div>
  )
}

export default SideCartItem
