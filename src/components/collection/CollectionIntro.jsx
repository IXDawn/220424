/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
export default function CollectionIntro() {
  const appStyle = css`
    width: 100%;
    height: 98px;
    margin-bottom: 40px;
    background: rgba(0, 0, 0, 0.2);
    position: relative;
  `
  const userStyle = css`
    width: 348px;
    height: 88px;
    background: #ffffff;
    box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.06);
    border-radius: 44px;
    position: absolute;
    bottom: -40px;
    left: 20px;
    display: flex;
    align-items: center;
    padding-left: 20px;
  `
  const itemStyle = css`
    width: 578px;
    height: 88px;
    background: #ffffff;
    box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.06);
    border-radius: 44px;
    position: absolute;
    bottom: -40px;
    left: 378px;
    display: flex;
    align-items: center;
    padding: 0 0 0 8px;
  `
  const userImgStyle = css`
    width: 62px;
    height: 62px;
    background: #ffffff;
    border: 1px solid #df6060;
    border-radius: 30px;
  `
  const itemTextStyle = css`
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #999999;
  `
  const itemNumberStyle = css`
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
  `
  return (
    <div css={[appStyle]}>
      <div css={[userStyle]}>
        <div css={[userImgStyle]}></div>
        <div
          css={css`
            margin-left: 10px;
          `}
        >
          <div
            css={css`
              font-size: 20px;
              font-family: PingFang SC;
              font-weight: 600;
              color: #000000;
            `}
          >
            Bored Ape Yacht Club
          </div>
          <div
            css={css`
              width: 138px;
              height: 24px;
              background: #fafafa;
              border: 1px solid #f5f5f5;
              border-radius: 12px;
            `}
          ></div>
        </div>
      </div>
      <div css={[itemStyle]}>
        <div
          css={css`
            width: 107px;
            text-align: center;
          `}
        >
          <div css={[itemNumberStyle]}>1,328</div>
          <div css={[itemTextStyle]}>Items</div>
        </div>
        <div
          css={css`
            width: 103px;
            text-align: center;
            border-left: 1px solid #f0f0f0;
            border-right: 1px solid #f0f0f0;
          `}
        >
          <div css={[itemNumberStyle]}>1,300</div>
          <div css={[itemTextStyle]}>Owners</div>
        </div>
        <div
          css={css`
            width: 125px;
            text-align: center;
          `}
        >
          <div css={[itemNumberStyle]}>1.02K</div>
          <div css={[itemTextStyle]}>Volume Traded</div>
        </div>
        <div
          css={css`
            width: 112px;
            text-align: center;
            border-left: 1px solid #f0f0f0;
            border-right: 1px solid #f0f0f0;
          `}
        >
          <div css={[itemNumberStyle]}>1.02</div>
          <div css={[itemTextStyle]}>Floor Prices</div>
        </div>
        <div
          css={css`
            width: 101px;
            text-align: center;
          `}
        >
          <div css={[itemNumberStyle]}>+97.5%</div>
          <div css={[itemTextStyle]}>Daily Change</div>
        </div>
      </div>
    </div>
  )
}
