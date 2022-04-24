/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
function ResultsItem({ isOnCart }) {
  const cardStyle = css`
    background: #ffffff;
    box-shadow: 0px 12px 13px 1px rgba(0, 0, 0, 0.06);
    border-radius: 18px;
    margin-top: 18px;
    padding: 0 12px 18px;
  `
  const imgStyle = css`
    height: 198px;
    border-radius: 18px;
    background: rgba(0, 0, 0, 0.1);
    position: relative;
    &::after {
      content: '';
      position: absolute;
      right: 19px;
      bottom: -21px;
      width: 39px;
      height: 39px;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      border: 3px solid #fff;
    }
  `
  const isOnCartIconStyle = css`
    width: 34px;
    height: 34px;
    position: absolute;
    display: ${isOnCart ? 'block' : 'none'};
    right: 19px;
    top: 25px;
    &::after {
      content: '';
      position: absolute;
      border: 2px solid #fff;
      border-radius: 50%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  `
  return (
    <div css={[cardStyle]}>
      <div css={[imgStyle]}>
        <div css={[isOnCartIconStyle]}>
          <CheckCircleIcon sx={{ fontSize: 34 }} />
        </div>
      </div>
      <div
        css={css`
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #666666;
          line-height: 24px;
          margin-top: 13px;
        `}
      >
        Azuki#4563
      </div>
      <div
        css={css`
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #000000;
          line-height: 26px;
        `}
      >
        16.04 ETH
      </div>
    </div>
  )
}

export default ResultsItem
