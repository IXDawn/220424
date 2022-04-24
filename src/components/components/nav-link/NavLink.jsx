/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Link from 'next/link'

export default function NavLink({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a
        css={css`
          text-decoration: none;
          color: unset;
        `}
        href={href}
        {...props}
      >
        {children}
      </a>
    </Link>
  )
}
