/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Head from 'next/head'
import Header from '../header/Header'
import SideCart from '../side-cart/SideCart'
import UnsupportedNetworkBar from '../topbar/UnsupportedNetworkBar'

const NoFooterLayout = ({ children, title = 'Mfers' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>

      <UnsupportedNetworkBar />

      <Header />

      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            flex: 1 1 auto;
          `}
        >
          {children}
        </div>

        <SideCart />
      </div>
    </>
  )
}

export default NoFooterLayout
