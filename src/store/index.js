import React from 'react'
import CartStore from './cart'
import CartUIStore from './cart/cartUIStore'
import SweepStore from './cart/sweepStore'

class RootStore {
  constructor() {
    this.cartStore = new CartStore(this)
    this.cartUIStore = new CartUIStore(this)
    this.sweepStore = new SweepStore(this)
  }
}

const rootStore = new RootStore()

const store = React.createContext(rootStore)

export default store
