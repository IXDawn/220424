/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { observer } from 'mobx-react-lite'
import { useLoaded } from '../../hooks/useLoaded'
import { useStore } from '../../store/hooks'
import Header from '../header/Header'
import SweepDashboard from './SweepDashboard'
import SideCartList from './SideCartList'
import { Button } from '@mui/material'
import SelectAllData from './SelectAllData'
const normalWidth = '338px'

const mainMenu = css`
  box-shadow: -7px 0px 8px 0px rgba(0, 0, 0, 0.08);
  position: sticky;
  background: white;
  flex: 0 0 auto;
  top: ${Header.height};
  bottom: 0;
  height: calc(100vh - ${Header.height});
  right: 0;
  width: 0;
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
const SideCart = observer(() => {
  const loaded = useLoaded()
  const { cartUIStore, cartStore } = useStore()
  const { isExpanded, sweepMode } = cartUIStore
  const {
    cartList,
    cartSize,
    removeAll,
    isAllChecked,
    filteredCheckedList,
    setAllChecked,
  } = cartStore
  const handleAllCheckedChange = (event) => {
    setAllChecked(event.target.checked)
  }

  if (!loaded) return null
  return (
    <div css={[mainMenu, isExpanded && expanded]}>
      <div
        css={css`
          position: absolute;
          left: 0;
          width: ${normalWidth};
        `}
      >
        {sweepMode && <SweepDashboard />}

        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding: 0 25px 0 23px;
          `}
        >
          <div
            css={css`
              font-size: 20px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #000000;
            `}
          >
            My Cart{' '}
            <span
              css={css`
                font-size: 16px;
                font-family: PingFang SC;
                font-weight: 400;
                color: #999999;
              `}
            >
              ({cartSize} NFTs)
            </span>
          </div>
          <Button
            onClick={removeAll}
            sx={{
              color: '#000000',
              padding: 0,
              lineHeight: 1.5,
            }}
          >
            clear all
          </Button>
        </div>

        <SideCartList cartList={cartList} />

        <SelectAllData
          isAllChecked={isAllChecked}
          handleAllCheckedChange={handleAllCheckedChange}
        />
        <div
          css={css`
            padding: 12px 25px 0 23px;
          `}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: 24,
              minWidth: 290,
              height: 48,
              fontSize: 14,
              fontFamily: 'PingFang SC',
              fontWeight: 400,
              color: '#FFFFFF',
              backgroundColor: 'black',
              '&:hover': {
                backgroundColor: 'black',
                borderColor: '#0062cc',
                boxShadow: 'none',
                color: '#FFFFFF',
                borderRadius: 24,
              },
              '&:active': {
                boxShadow: 'none',
                backgroundColor: '#ccc',
                borderColor: '#ccc',
                color: '#000000',
                borderRadius: 24,
              },
            }}
          >
            Proceed to Checkout
          </Button>
        </div>

        {/*TODO: 用于后续计算总价等*/}
        <div>{JSON.stringify(filteredCheckedList)}</div>
      </div>
    </div>
  )
})

export default SideCart
