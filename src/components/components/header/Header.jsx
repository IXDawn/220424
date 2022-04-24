/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useStore } from '../../store/hooks'
import SearchBox from '../search-box/SearchBox'
import SimpleMenu from '../menu/SimpleMenu'
import {
  Avatar,
  Button,
  Drawer,
  FormControlLabel,
  IconButton,
  MenuItem,
  Switch,
} from '@mui/material'
import NavLink from '../nav-link/NavLink'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useState } from 'react'
import SideWallet from '../side-wallet/SideWallet'

const Header = () => {
  const store = useStore()
  const [sideWalletOpen, setSideWalletOpen] = useState(false)
  const toggleSideWalletOpen = () => {
    setSideWalletOpen(!sideWalletOpen)
  }

  return (
    <nav
      css={css`
        position: sticky;
        top: 0;
        display: flex;
        align-items: center;
        width: 100%;
        background: white;
        z-index: 1;
        border: 2px solid black;
        padding: 0 40px;
      `}
    >
      <div
        css={css`
          width: 28px;
          height: 28px;
          background: #000000;
          border-radius: 12px;
          margin-left: 10px;
        `}
      ></div>
      <h1
        css={css`
          margin: 16px;
        `}
      >
        Mfers
      </h1>

      <SearchBox
        css={css`
          width: 300px;
        `}
      />

      <SimpleMenu
        template={
          <NavLink href="/explore-collections">
            <Button>Explore</Button>
          </NavLink>
        }
      >
        <NavLink href="/assets">
          <MenuItem>All NFTs</MenuItem>
        </NavLink>
        <NavLink href="/collection/art">
          <MenuItem>Art</MenuItem>
        </NavLink>
        <NavLink href="/collection/collectibles">
          <MenuItem>Collectibles</MenuItem>
        </NavLink>
        <NavLink href="/collection/domain-names">
          <MenuItem>Domain Names</MenuItem>
        </NavLink>
        <NavLink href="/collection/music">
          <MenuItem>Music</MenuItem>
        </NavLink>
        <NavLink href="/collection/photography-category">
          <MenuItem>Photography</MenuItem>
        </NavLink>
        <NavLink href="/collection/sports">
          <MenuItem>Sports</MenuItem>
        </NavLink>
        <NavLink href="/collection/trading-cards">
          <MenuItem>Trading Cards</MenuItem>
        </NavLink>
        <NavLink href="/collection/utility">
          <MenuItem>Utility</MenuItem>
        </NavLink>
        <NavLink href="/collection/virtual-worlds">
          <MenuItem>Virtual Worlds</MenuItem>
        </NavLink>
      </SimpleMenu>

      <Button>Sell</Button>

      <SimpleMenu template={<Avatar>A</Avatar>}>
        <NavLink href="/account">
          <MenuItem>Profile</MenuItem>
        </NavLink>
        <NavLink href="/rewards">
          <MenuItem>Rewards</MenuItem>
        </NavLink>
        <MenuItem>Log Out</MenuItem>
        <MenuItem>
          <FormControlLabel control={<Switch />} label="Dark" />
        </MenuItem>
      </SimpleMenu>

      <Button onClick={toggleSideWalletOpen}>Connect Wallet</Button>
      <Drawer
        open={sideWalletOpen}
        anchor="right"
        onClose={toggleSideWalletOpen}
      >
        <SideWallet toggleSideWalletOpen={toggleSideWalletOpen} />
      </Drawer>

      <IconButton
        color="primary"
        aria-label="cart"
        onClick={store.cartUIStore.toggleOpen}
      >
        <ShoppingCartIcon />
      </IconButton>
    </nav>
  )
}

Header.height = '72px'

export default Header
