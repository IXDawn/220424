/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Tab from '@mui/material/Tab'

export default function StyledTab(props) {
  return (
    <Tab
      css={css`
        padding: 12px 0;
        margin: 0 16px;
        min-width: 0;
        text-transform: none;
      `}
      disableRipple
      {...props}
    />
  )
}
