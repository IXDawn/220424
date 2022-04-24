/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Card } from '@mui/material'

export default function SimpleMenu({ template, children }) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        position: relative;

        &:hover > .list-card {
          display: block;
        }
      `}
    >
      {template}

      <div
        className="list-card"
        css={css`
          display: none;
          position: absolute;
          left: 0;
          top: 100%;
          z-index: 5;
        `}
      >
        <Card>{children}</Card>
      </div>
    </div>
  )
}
