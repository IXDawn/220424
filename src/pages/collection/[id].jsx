/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useTab } from '../../hooks/useTab'
import SideFilter from '../../components/side-filter/SideFilter'
import NoFooterLayout from '../../components/layout/NoFooterLayout'
import CollectionIntro from '../../components/collection/CollectionIntro'
import ResultsHeader from '../../components/header/ResultsHeader'
import NFTCardList from '../../components/nfts/NFTCardList'
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import StyledTab from '../../components/tabs/StyledTab'
import StyledTabPanel from '../../components/tabs/StyledTabPanel'
import TabContext from '@mui/lab/TabContext'
import { useSweep } from '../../hooks/useSweep'

// TODO: 接口对接
const getNFTs = (address) => {
  const res = []
  for (let i = 0; i < 150; i++) {
    res.push({ address, tokenId: String(i) })
  }
  return res
}

export default function CollectionHomePage() {
  const { tabIndex, handleTabChange } = useTab()
  const router = useRouter()
  const NFTs = getNFTs(router.query.id)
  useSweep(NFTs)

  return (
    <NoFooterLayout>
      <div
        css={css`
          display: flex;
        `}
      >
        <SideFilter />

        <div
          css={css`
            flex: 1 1 auto;
          `}
        >
          <CollectionIntro />

          <TabContext value={tabIndex}>
            <Box
              css={css`
                padding: 0 20px;
              `}
            >
              <TabList onChange={handleTabChange}>
                {/*标签页标题*/}
                <StyledTab label={'Items'} value={'1'} />
                <StyledTab label={'Analytics'} value={'2'} />
              </TabList>
            </Box>
            {/*标签页内容*/}
            <StyledTabPanel value={'1'}>
              <div
                css={css`
                  padding: 20px;
                `}
              >
                <ResultsHeader />
                <NFTCardList NFTs={NFTs} />
              </div>
            </StyledTabPanel>
            <StyledTabPanel value={'2'}>Analytics</StyledTabPanel>
          </TabContext>
        </div>
      </div>
    </NoFooterLayout>
  )
}
