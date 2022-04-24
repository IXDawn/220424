import { makeAutoObservable, toJS } from 'mobx'

function getPersistCart(key) {
  if (typeof window !== 'undefined') {
    const cartList = JSON.parse(localStorage.getItem(key))
    for (const address in cartList) {
      if (cartList[address].length > 0) {
        cartList[address] = new Map(cartList[address])
      } else {
        delete cartList[address]
      }
    }
    return cartList
  }
}

function setPersistCart(key, value) {
  if (typeof window !== 'undefined') {
    const cartList = toJS(value)
    for (const address in cartList) {
      if (cartList[address].size > 0) {
        cartList[address] = [...cartList[address]]
      } else {
        delete cartList[address]
      }
    }
    return localStorage.setItem(key, JSON.stringify(cartList))
  }
}

class CartStore {
  static MAX_CART_SIZE = 120
  cartList = {}

  constructor(rootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
    this.loadCartList()
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', this.handleStoreChange)
    }
  }

  loadCartList = () => {
    this.cartList = getPersistCart('cartList') ?? {}
  }

  handleStoreChange = (e) => {
    if (e.key === 'cartList') {
      this.loadCartList()
    }
  }

  get cartSize() {
    return Object.values(this.cartList).reduce((sum, current) => {
      return Number(sum) + Number(current.size)
    }, 0)
  }

  // 是否在购物车中
  isOnCart = (address, tokenId) => {
    // 确保返回值为 true/false 不为 undefined
    // 否则 false -> undefined 会导致大量重渲染
    return this.cartList[address]?.has(tokenId) ?? false
  }

  addToCart = (address, tokenId, option = {}) => {
    this.loadCartList()
    if (this.cartSize >= this.constructor.MAX_CART_SIZE) return
    this.cartList[address] = this.cartList[address] || new Map()
    this.cartList[address].set(tokenId, {
      ...option,
      isChecked: true,
      timestamp: String(Date.now()),
    })
    setPersistCart('cartList', this.cartList)
  }

  removeFromCart = (address, tokenId) => {
    this.loadCartList()
    if (!this.cartList[address]) return
    this.cartList[address].delete(tokenId)
    if (this.cartList[address].size === 0) {
      delete this.cartList[address]
    }
    setPersistCart('cartList', this.cartList)
  }

  removeAll = () => {
    this.loadCartList()
    this.cartList = {}
    setPersistCart('cartList', this.cartList)
  }

  isChecked = (address, tokenId) => {
    return this.cartList[address]?.get(tokenId)?.isChecked ?? false
  }

  isAddressChecked = (address) => {
    const collectionMap = this.cartList[address]
    if (!collectionMap) return false
    for (const { isChecked } of collectionMap.values()) {
      if (!isChecked) return false
    }
    return true
  }

  get isAllChecked() {
    if (this.cartSize === 0) return false
    return Object.keys(this.cartList).every((address) => {
      return this.isAddressChecked(address)
    })
  }

  setChecked = (address, tokenId, checked) => {
    this.loadCartList()
    const token = this.cartList[address]?.get(tokenId)
    token.isChecked = checked
    this.cartList[address]?.set(tokenId, token)
    setPersistCart('cartList', this.cartList)
  }

  setAddressChecked = (address, checked) => {
    const collectionMap = this.cartList[address] || new Map()
    for (const tokenId of collectionMap.keys()) {
      this.setChecked(address, tokenId, checked)
    }
  }

  setAllChecked = (checked) => {
    for (const address in this.cartList) {
      this.setAddressChecked(address, checked)
    }
  }

  get filteredCheckedList() {
    const checkedList = []
    for (const address in this.cartList) {
      for (const [tokenId, { isChecked }] of this.cartList[address]) {
        if (isChecked) {
          checkedList.push({
            address,
            tokenId,
          })
        }
      }
    }
    return checkedList
  }
}

export default CartStore
