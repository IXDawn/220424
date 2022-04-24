import { makeAutoObservable } from 'mobx'

class CartUIStore {
  isExpanded = false
  sweepMode = false

  constructor(rootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  toggleOpen = () => {
    this.isExpanded = !this.isExpanded
  }

  toggleSweepMode = () => {
    if (!this.sweepMode && !this.isExpanded) this.isExpanded = true
    this.sweepMode = !this.sweepMode
  }

  unmountToggle = () => {
    this.sweepMode = false
  }
}

export default CartUIStore
