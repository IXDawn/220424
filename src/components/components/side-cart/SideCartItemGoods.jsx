/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'
import Checkbox from '@mui/material/Checkbox'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { grey } from '@mui/material/colors'
function SideCartItemGoods(props) {
  console.log(props)
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
            <HighlightOffIcon sx={{ color: grey[500] }} />
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
  )
}

export default SideCartItemGoods
