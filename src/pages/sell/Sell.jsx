/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import TabList from '@mui/lab/TabList'
import StyledTab from '../../components/tabs/StyledTab'
import StyledTabPanel from '../../components/tabs/StyledTabPanel'
import TabContext from '@mui/lab/TabContext'
import { useTab } from '../../hooks/useTab'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import { useSweep } from '../../hooks/useSweep'
import SellTitle from '../../components/sell/SellTitle'
import NoFooterLayout from '../../components/layout/NoFooterLayout'
import NFTCardList from '../../components/nfts/NFTCardList'
function Sell() {
  const getNFTs = (address) => {
    const res = []
    for (let i = 0; i < 150; i++) {
      res.push({ address, tokenId: String(i) })
    }
    return res
  }
  const { tabIndex, handleTabChange } = useTab()
  const router = useRouter()
  const NFTs = getNFTs(router.query.id)
  useSweep(NFTs)
  return (
    <div>
      <NoFooterLayout>
        <div
          css={css`
            padding: 0 50px;
          `}
        >
          <SellTitle />
          <TabContext value={tabIndex}>
            <Box>
              <TabList onChange={handleTabChange}>
                {/*标签页标题*/}
                <StyledTab label="Unlisted" value={'1'} />
                <StyledTab label="My Listings" value={'2'} />
              </TabList>
            </Box>
            {/*标签页内容*/}
            <StyledTabPanel value={'1'}>
              <div
                css={css`
                  padding-top: 30px;
                `}
              >
                {NFTs && <NFTCardList NFTs={NFTs} />}
              </div>
            </StyledTabPanel>
            <StyledTabPanel value={'2'}>Analytics</StyledTabPanel>
          </TabContext>
        </div>
      </NoFooterLayout>
    </div>
  )
}

export default Sell
