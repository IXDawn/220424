/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
function GoodsInformationTabs({ value, setValue, tabsItems }) {
  const itemStyle = css`
    height: 36px;
    border-radius: 18px;
    padding: 0 22px 0 27px;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 36px;
  `
  const onItemStyle = css`
    height: 36px;
    background: linear-gradient(154deg, #d6ff5c, #5cff8a);
    border-radius: 18px;
  `
  return (
    <div
      css={css`
        margin-top: 49px;
        height: 48px;
        background: #ffffff;
        border: 1px solid #f0f0f0;
        border-radius: 24px;
        display: flex;
        align-items: center;
        padding: 0 8px;
        justify-content: space-around;
      `}
    >
      {tabsItems.map((item, index) => {
        return (
          <div
            css={[itemStyle, item === value ? onItemStyle : '']}
            key={index}
            onClick={() => setValue(item)}
          >
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default GoodsInformationTabs
