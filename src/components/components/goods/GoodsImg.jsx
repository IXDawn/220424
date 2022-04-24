/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
function GoodsImg() {
  const imgStyle = css`
    width: 648px;
    height: 888px;
    border-radius: 18px;
    background: rgba(0, 0, 0, 0.2) !important;
    position: relative;
  `
  const serialStyle = css`
    width: 310px;
    height: 48px;
    background: #000000;
    opacity: 0.8;
    border-radius: 24px;
    display: flex;
    position: absolute;
    top: 19px;
    right: 26px;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
  `
  const serialItemStyle = css`
    width: 95px;
    height: 37px;
    background: #fafafa;
    border: 1px solid #f0f0f0;
    border-radius: 18px;
    line-height: 37px;
    text-align: center;
  `
  const userDataStyle = css`
    width: 268px;
    height: 78px;
    background: #000000;
    opacity: 0.7;
    border-radius: 39px;
    position: absolute;
    left: 28px;
    bottom: 36px;
    display: flex;
    align-items: center;
    padding-left: 13px;
  `
  return (
    <div css={[imgStyle]}>
      <div css={[serialStyle]}>
        <div css={[serialItemStyle]}># 8325</div>
        <div css={[serialItemStyle]}># 7325</div>
        <div css={[serialItemStyle]}># 8108</div>
      </div>
      <div css={[userDataStyle]}>
        <div
          css={css`
            width: 56px;
            height: 52px;
            border-radius: 50%;
            background: #fafafa;
            margin-right: 13px;
          `}
        ></div>
        <div
          css={css`
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #ffffff;
          `}
        >
          <div>Created by </div>
          <div>@RandomCharacter</div>
        </div>
      </div>
    </div>
  )
}

export default GoodsImg
