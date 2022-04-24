/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Button } from '@mui/material'
import Header from '../header/Header'
import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import SideFilterConditions from './SideFilterConditions'
const normalWidth = '338px'

const mainMenu = css`
  border-left: 2px solid #212121;
  border-right: 2px solid #f0f0f0;
  position: sticky;
  background: white;
  flex: 0 0 auto;
  top: ${Header.height};
  bottom: 0;
  height: calc(100vh - ${Header.height});
  left: 0;
  width: 60px;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-transition: width 0.05s linear;
  transition: width 0.05s linear;
  -webkit-transform: translateZ(0) scale(1, 1);
  &::-webkit-scrollbar-button {
    background-color: #fff;
    display: none;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`
const expanded = css`
  width: ${normalWidth};
`

export default function SideFilter() {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen((open) => !open)
  const [age, setAge] = useState(10)
  const [conditions, setConditions] = useState()
  useEffect(() => {
    setConditions([
      {
        filterTitle: 'Marketplace',
        filterItem: [
          {
            name: 'Opensea',
            num: '984(9.84%)',
          },
        ],
      },
      {
        filterTitle: 'Marketplace',
        filterItem: [
          {
            name: 'Opensea',
            num: '984(9.84%)',
          },
        ],
      },
    ])
  }, [])
  const handleChange = (event) => {
    setAge(event.target.value)
  }
  const textStyle = css`
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
  `
  const buyNow = css`
    display: flex;
    margin-top: 22px;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    height: 26px;
  `
  const button = css`
    width: 54px;
    height: 26px;
    border-radius: 13px;
  `
  const title = css`
    height: 58px;
    line-height: 58px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
  const selectStyle = css`
    height: 42px;
    background: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    margin: 0 30px;
  `
  const to = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    padding: 0 30px;
    height: 42px;
  `
  const max = css`
    height: 42px;
    background: #ffffff;
    border-radius: 8px;
  `
  const applyStyle = css`
    height: 42px;
    background: #f5f5f5;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    margin: 10px 30px 0;
    line-height: 42px;
    text-align: center;
  `

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 54,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(28px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: 'black',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }))

  return (
    <div css={[mainMenu, open && expanded]}>
      {open && (
        <div
          css={css`
            position: absolute;
            right: 0;
            width: ${normalWidth};
          `}
        >
          <Button
            color="primary"
            aria-label="collapse filter"
            fullWidth
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 78px;
              padding: 0 30px;
            `}
            onClick={toggleOpen}
          >
            <div css={[textStyle]}>Filter</div>
            <ArrowBackIcon />
          </Button>
          <div
            css={css`
              width: 305px;
              height: 1px;
              background: #f0f0f0;
              border-radius: 1px;
              margin: 0 30px;
            `}
          ></div>
          <div css={[buyNow]}>
            <div>Buy now</div>
            <div css={[button]}>
              <IOSSwitch />
            </div>
          </div>

          <div css={[buyNow]}>
            <div>Rarity Ranking</div>
            <div css={[button]}>
              <IOSSwitch />
            </div>
          </div>
          <div
            css={css`
              width: 305px;
              height: 1px;
              background: #f0f0f0;
              border-radius: 1px;
              margin: 22px 30px 0;
            `}
          ></div>
          <div css={[textStyle, title]}>Price</div>
          <div css={[selectStyle]}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              sx={{ minWidth: 276, height: 42 }}
              defaultValue
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div css={[to]}>
            <div css={[max]}>
              <TextField
                variant="outlined"
                size="small"
                sx={{ marginRight: 2 }}
                placeholder="Min"
              />
            </div>
            <div>to</div>
            <div css={[max]}>
              <TextField
                variant="outlined"
                size="small"
                sx={{ marginLeft: 2 }}
                placeholder="MAX"
              />
            </div>
          </div>
          <div css={[applyStyle]}>
            <Button
              sx={{
                minWidth: 276,
                height: 42,
                fontSize: 14,
                fontFamily: 'PingFang SC',
                fontWeight: 400,
                color: '#999999',
                '&:hover': {
                  backgroundColor: 'black',
                  borderColor: '#0062cc',
                  boxShadow: 'none',
                  color: '#FFFFFF',
                },
                '&:active': {
                  boxShadow: 'none',
                  backgroundColor: '#ccc',
                  borderColor: '#ccc',
                  color: '#000000',
                },
              }}
            >
              apply
            </Button>
          </div>
          <SideFilterConditions conditions={conditions} />
        </div>
      )}

      {!open && (
        <Button
          color="primary"
          aria-label="filter"
          fullWidth
          css={css`
            display: flex;
            justify-content: center;
            min-width: 24px;
          `}
          onClick={toggleOpen}
        >
          <FilterAltIcon />
        </Button>
      )}
    </div>
  )
}
