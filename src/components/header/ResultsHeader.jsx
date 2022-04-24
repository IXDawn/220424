/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import {
  IconButton,
  ToggleButton,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import { useStore } from '../../store/hooks'
import { observer } from 'mobx-react-lite'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
const SweepModeToggleButton = observer(() => {
  const { cartUIStore } = useStore()
  const { sweepMode, toggleSweepMode, unmountToggle } = cartUIStore
  useEffect(() => {
    return () => {
      unmountToggle()
    }
  }, [unmountToggle])

  return (
    <ToggleButton
      value="check"
      selected={sweepMode}
      onChange={() => {
        toggleSweepMode()
      }}
      css={css`
        width: 148px;
        background: #000000;
        border: 1px solid #000000;
        border-radius: 8px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #ffffff;
        margin-left: 10px;
      `}
    >
      Sweep Mode
    </ToggleButton>
  )
})

const ResultsHeader = () => {
  const [sort, setSort] = React.useState(sortOptions[0])
  const handleChange = (event) => {
    setSort(event.target.value)
  }
  const [searchTokenId, setSearchTokenId] = useState('')
  const setSearchTokenIdChange = (event) => {
    setSearchTokenId(event.target.value)
  }
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 42px;
          height: 42px;
          background: #ffffff;
          border: 1px solid #f0f0f0;
          box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.06);
          border-radius: 8px;
        `}
      >
        <IconButton>
          <RefreshIcon />
        </IconButton>
      </div>

      <div
        css={css`
          margin-left: 13px;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 400;
          margin-right: 40px;
        `}
      >
        1,029 Results
      </div>
      <TextField
        value={searchTokenId.value}
        onChange={setSearchTokenIdChange}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              onClick={() => console.log(searchTokenId)}
            >
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Select
        value={sort}
        onChange={handleChange}
        css={css`
          margin-left: 10px;
        `}
      >
        {sortOptions.map((option) => (
          <MenuItem key={option.label} value={option}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

      <SweepModeToggleButton />
    </div>
  )
}

const sortOptions = [
  {
    label: 'Recently Listed',
    sortBy: 'LISTING_DATE',
    sortAscending: false,
  },
  {
    label: 'Recently Created',
    sortBy: 'CREATED_DATE',
    sortAscending: false,
  },
  {
    label: 'Recently Sold',
    sortBy: 'LAST_SALE_DATE',
    sortAscending: false,
  },
  {
    label: 'Recently Received',
    sortBy: 'LAST_TRANSFER_DATE',
    sortAscending: false,
  },
  {
    label: 'Ending Soon',
    sortBy: 'EXPIRATION_DATE',
    sortAscending: true,
  },
  {
    label: 'Price: Low to High',
    sortBy: 'PRICE',
    sortAscending: true,
  },
  {
    label: 'Price: High to Low',
    sortBy: 'PRICE',
    sortAscending: false,
  },
  {
    label: 'Highest Last Sale',
    sortBy: 'LAST_SALE_PRICE',
    sortAscending: false,
  },
  {
    label: 'Most Viewed',
    sortBy: 'VIEWER_COUNT',
    sortAscending: false,
  },
  {
    label: 'Most Favorited',
    sortBy: 'FAVORITE_COUNT',
    sortAscending: false,
  },
  {
    label: 'Oldest',
    sortBy: 'CREATED_DATE',
    sortAscending: true,
  },
]

export default ResultsHeader
