/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ToggleButton } from '@mui/lab'
import { useState } from 'react'
import GoodsInformationTabs from './GoodsInformationTabs'
function GoodsInformation() {
  const [tabValue, setTabValue] = useState('Attributes')
  const tabsItems = [
    'Attributes',
    'Info',
    'Price History',
    'Offers',
    'Activity',
  ]
  const userItemStyle = css`
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 43px;
  `
  const userItemCardStyle = css`
    height: 64px;
    background: #ffffff;
    box-shadow: 0px 9px 15px 1px rgba(0, 0, 0, 0.06);
    border-radius: 32px;
    padding: 0 20px 0 14px;
    display: flex;
    align-items: center;
    margin-right: 14px;
  `
  const userItemImgStyle = css`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2) !important;
    margin-right: 12px;
  `
  const userItemCardTextStyle = css`
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #333333;
  `
  const priceTextStyle = css`
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #666666;
  `
  const priceTextNumStyle = css`
    font-size: 30px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #000000;
  `
  const buttonStyle = css`
    width: 258px;
    height: 56px;
    background: #000000;
    border-radius: 10px;
    border: 1px solid #000000;
    border-radius: 8px;
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
  `

  const showingStyle = css`
    height: 32px;
    background: #fafafa;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #666666;
    padding: 0 16px 0 16px;
    line-height: 32px;
    margin-right: 11px;
  `
  const tableButtonStyle = css`
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #26d02a;
    height: 26px;
    background: #f6fff2;
    border: 1px solid #c0ff8c;
    border-radius: 12px;
    padding: 0 12px;
    line-height: 26px;
    display: inline-block;
    margin-left: 13px;
  `
  const tableTextStyle = css`
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
  `
  const tableNumberTextStyle = css`
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #666666;
  `
  const tableUserImgStyle = css`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2) !important;
    margin-right: 13px;
  `
  const tableItemUserStyle = css`
    display: flex;
    align-items: center;
  `
  const tableItemStyle = css`
    display: flex;
    justify-content: space-between;
    width: 558px;
    padding: 29px 0;
    border-bottom: 1px solid #f0f0f0;
  `
  return (
    <div
      css={css`
        margin-left: 48px;
      `}
    >
      <div
        css={css`
          font-size: 32px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #000000;
          border-bottom: 1px solid #f0f0f0;
          width: 744px;
          line-height: 100px;
        `}
      >
        Invisible Friends #109
      </div>
      <div
        css={css`
          display: flex;
          margin-top: 20px;
        `}
      >
        <div>
          <div css={[userItemStyle]}>Listed on</div>
          <div css={[userItemCardStyle]}>
            <div css={[userItemImgStyle]}></div>
            <div css={[userItemCardTextStyle]}>Opensea</div>
          </div>
        </div>
        <div>
          <div css={[userItemStyle]}>Collection</div>
          <div css={[userItemCardStyle]}>
            <div css={[userItemImgStyle]}></div>
            <div css={[userItemCardTextStyle]}>Opensea</div>
          </div>
        </div>
        <div>
          <div css={[userItemStyle]}>Owned by</div>
          <div css={[userItemCardStyle]}>
            <div css={[userItemImgStyle]}></div>
            <div css={[userItemCardTextStyle]}>Opensea</div>
          </div>
        </div>
      </div>
      <div
        css={css`
          margin-top: 35px;
          display: flex;
        `}
      >
        <div
          css={css`
            width: 172px;
            border-right: 1px solid #ebebeb;
          `}
        >
          <div
            css={[
              css`
                line-height: 31px;
              `,
              priceTextStyle,
            ]}
          >
            Current Price
          </div>
          <div
            css={[
              css`
                line-height: 43px;
              `,
              priceTextNumStyle,
            ]}
          >
            1.09 ETH
          </div>
          <div
            css={[
              css`
                line-height: 20px;
                margin-top: 5px;
              `,
              priceTextStyle,
            ]}
          >
            ≈$2809.23
          </div>
        </div>
        <div
          css={css`
            margin-left: 48px;
          `}
        >
          <div
            css={[
              css`
                line-height: 31px;
              `,
              priceTextStyle,
            ]}
          >
            Sale ends March 4, 2022 at 8:04pm CST{' '}
          </div>
          <div
            css={css`
              display: flex;
            `}
          >
            <div>
              <div
                css={[
                  css`
                    line-height: 43px;
                  `,
                  priceTextNumStyle,
                ]}
              >
                25
              </div>
              <div
                css={[
                  css`
                    line-height: 20px;
                    margin-top: 5px;
                    width: 92px;
                  `,
                  priceTextStyle,
                ]}
              >
                Hours
              </div>
            </div>
            <div>
              <div
                css={[
                  css`
                    line-height: 43px;
                  `,
                  priceTextNumStyle,
                ]}
              >
                25
              </div>
              <div
                css={[
                  css`
                    line-height: 20px;
                    margin-top: 5px;
                    width: 106px;
                  `,
                  priceTextStyle,
                ]}
              >
                Minutes
              </div>
            </div>
            <div>
              <div
                css={[
                  css`
                    line-height: 43px;
                  `,
                  priceTextNumStyle,
                ]}
              >
                25
              </div>
              <div
                css={[
                  css`
                    line-height: 20px;
                    margin-top: 5px;
                  `,
                  priceTextStyle,
                ]}
              >
                Seconds
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        css={css`
          margin-top: 40px;
          display: flex;
        `}
      >
        <div>
          <ToggleButton css={[buttonStyle]}>Buy Now</ToggleButton>
        </div>
        <div>
          <ToggleButton
            css={[
              buttonStyle,
              css`
                margin-left: 10px;
              `,
            ]}
          >
            Add to Cart
          </ToggleButton>
        </div>
      </div>
      <GoodsInformationTabs
        value={tabValue}
        setValue={setTabValue}
        tabsItems={tabsItems}
      />
      <div
        css={css`
          margin-top: 14px;
          display: flex;
          align-items: center;
        `}
      >
        <div
          css={css`
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #666666;
            margin-right: 21px;
          `}
        >
          Showing:
        </div>
        <div css={[showingStyle]}>Mint</div>
        <div css={[showingStyle]}>Listing</div>
        <div css={[showingStyle]}>Sales</div>
        <div css={[showingStyle]}>Bids</div>
        <div css={[showingStyle]}>Transfer</div>
      </div>
      <div
        css={css`
          margin-top: 5px;
        `}
      >
        <div css={[tableItemStyle]}>
          <div css={[tableItemUserStyle]}>
            <div css={[tableUserImgStyle]}></div>
            <div>
              <div css={[tableTextStyle]}>
                From @Leoliswag to @Alice
                <span css={[tableButtonStyle]}>Sales</span>
              </div>
              <div css={[tableNumberTextStyle]}>42 minutes ago</div>
            </div>
          </div>
          <div>
            <div css={[tableTextStyle]}>0.24 ETH</div>
            <div css={[tableNumberTextStyle]}>$672.23</div>
          </div>
        </div>
        <div css={[tableItemStyle]}>
          <div css={[tableItemUserStyle]}>
            <div css={[tableUserImgStyle]}></div>
            <div>
              <div css={[tableTextStyle]}>
                From @Leoliswag to @Alice
                <span css={[tableButtonStyle]}>Sales</span>
              </div>
              <div css={[tableNumberTextStyle]}>42 minutes ago</div>
            </div>
          </div>
          <div>
            <div css={[tableTextStyle]}>0.24 ETH</div>
            <div css={[tableNumberTextStyle]}>$672.23</div>
          </div>
        </div>
        <div css={[tableItemStyle]}>
          <div css={[tableItemUserStyle]}>
            <div css={[tableUserImgStyle]}></div>
            <div>
              <div css={[tableTextStyle]}>
                From @Leoliswag to @Alice
                <span css={[tableButtonStyle]}>Sales</span>
              </div>
              <div css={[tableNumberTextStyle]}>42 minutes ago</div>
            </div>
          </div>
          <div>
            <div css={[tableTextStyle]}>0.24 ETH</div>
            <div css={[tableNumberTextStyle]}>$672.23</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoodsInformation
