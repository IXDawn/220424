/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
function SideFilterItem({ filterTitle, filterItem }) {
  const [packUpType, setPackUpType] = useState(true)
  const title = css`
    height: 58px;
    line-height: 58px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
  const itemStyle = css`
    height: 42px;
    background: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    margin: 10px 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  `
  const textStyle = css`
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
  `
  return (
    <div>
      <div css={[title, textStyle]}>
        <div>{filterTitle}</div>
        <div onClick={() => setPackUpType(!packUpType)}>
          {packUpType ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </div>
      </div>
      <div
        css={css`
          display: ${packUpType ? 'block' : 'none'};
        `}
      >
        {filterItem.map((item, index) => {
          return (
            <div css={[itemStyle]} key={index}>
              <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                `}
              >
                <Checkbox
                  sx={{
                    '&.Mui-checked': {
                      color: 'black',
                    },
                  }}
                />
                <div
                  css={css`
                    font-size: 14px;
                    font-family: PingFang SC;
                    font-weight: 400;
                  `}
                >
                  {item.name}
                </div>
              </div>
              <div
                css={css`
                  font-size: 14px;
                  font-family: PingFang SC;
                  font-weight: 400;
                  color: #999999;
                `}
              >
                {item.num}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideFilterItem
