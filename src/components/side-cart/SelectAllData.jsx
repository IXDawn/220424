/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import { grey } from '@mui/material/colors'
import { Checkbox } from '@mui/material'
function SelectAllData({ isAllChecked, handleAllCheckedChange }) {
  const titleStyle = css`
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 27px;
  `
  const itemStyle = css`
    display: flex;
    justify-content: space-between;
    line-height: 27px;
  `
  return (
    <div
      css={css`
        padding: 0 23px 0 29px;
      `}
    >
      <div css={[titleStyle, itemStyle]}>
        <div>Select All</div>
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
            checked={isAllChecked}
            onChange={handleAllCheckedChange}
            sx={{
              color: grey[900],
              '&.Mui-checked': {
                color: grey[900],
              },
            }}
          />
        </div>
      </div>
      <div css={[itemStyle]}>
        <div css={[titleStyle]}>You Pay</div>
        <div>68.23 ETH</div>
      </div>
      <div css={[itemStyle]}>
        <div css={[titleStyle]}>Saving Gas Fee</div>
        <div>$ 2.38</div>
      </div>
      <div css={[itemStyle]}>
        <div css={[titleStyle]}>Total Balance</div>
        <div> $ 99,258.89</div>
      </div>
    </div>
  )
}

export default SelectAllData
