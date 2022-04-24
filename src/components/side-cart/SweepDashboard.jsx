/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { observer } from 'mobx-react-lite'
import { useTab } from '../../hooks/useTab'
import { useStore } from '../../store/hooks'
import { debounce } from '../../utils/utils'
import { Slider, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import StyledTab from '../tabs/StyledTab'
import StyledTabPanel from '../tabs/StyledTabPanel'
import TabContext from '@mui/lab/TabContext'
import { useEffect, useMemo, useState } from 'react'

const SweepDashboard = observer(() => {
  const { tabIndex, handleTabChange } = useTab()
  const { sweepStore } = useStore()
  const { sweptNFTsAmount, maxSweepAmount, setSweptNFTsAmount } = sweepStore

  const handleSliderChange = (event) => {
    setSweptNFTsAmount(event.target.value)
  }

  const [itemsInput, setItemsInput] = useState(sweptNFTsAmount)
  const handleInputChange = (event) => {
    setItemsInput(event.target.value)
  }
  const debouncedInputChangeWatcher = useMemo(
    () => {
      const inputChangeWatcher = (newValue) => {
        if (newValue === '' || isNaN(newValue)) return
        let formatValue = Math.floor(Number(newValue))
        if (formatValue > maxSweepAmount) formatValue = maxSweepAmount
        else if (formatValue < 0) formatValue = 0
        setItemsInput(formatValue)
        setSweptNFTsAmount(formatValue)
      }
      return debounce(inputChangeWatcher, 1000)
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  )
  useEffect(() => {
    debouncedInputChangeWatcher(itemsInput)
  }, [itemsInput]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    setItemsInput(sweptNFTsAmount)
  }, [sweptNFTsAmount])

  return (
    <div
      css={css`
        margin: 8px;
        padding: 8px;
        border: 1px solid black;
      `}
    >
      <TabContext value={tabIndex}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <TabList onChange={handleTabChange}>
            {/*标签页标题*/}
            <StyledTab label={'Items'} value={'1'} />
            <StyledTab label={'ETH'} value={'2'} />
          </TabList>
          <div>
            {sweptNFTsAmount}/{maxSweepAmount}
          </div>
        </Box>
        {/*标签页内容*/}
        <StyledTabPanel value={'1'}>
          <Slider
            valueLabelDisplay="off"
            value={sweptNFTsAmount}
            max={maxSweepAmount}
            onChange={handleSliderChange}
          />
          <TextField
            size={'small'}
            value={itemsInput}
            onChange={handleInputChange}
          />
        </StyledTabPanel>
        <StyledTabPanel value={'2'}>ETH</StyledTabPanel>
      </TabContext>
    </div>
  )
})

export default SweepDashboard
