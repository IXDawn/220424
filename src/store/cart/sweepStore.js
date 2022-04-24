import { makeAutoObservable } from 'mobx'

class SweepStore {
  listId = null
  NFTs = []

  constructor(rootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  updateNFTs = (newNFTs) => {
    this.NFTs = newNFTs
  }

  mount = (listId) => {
    this.listId = listId
  }

  unmount = (listId) => {
    if (this.listId === listId) {
      this.listId = null
      this.NFTs = []
    }
  }

  get cartList() {
    return this.rootStore.cartStore.cartList
  }

  get MAX_CART_SIZE() {
    return this.rootStore.cartStore.constructor.MAX_CART_SIZE
  }

  get cartSize() {
    return this.rootStore.cartStore.cartSize
  }

  get sweptNFTs() {
    const sweptNFTs = []
    for (const address in this.cartList) {
      for (const [tokenId, token] of this.cartList[address]) {
        if (token.hash === this.listId) {
          sweptNFTs.push({
            address,
            tokenId,
            timestamp: token.timestamp,
          })
        }
      }
    }
    sweptNFTs.sort((a, b) => a.timestamp - b.timestamp)
    return sweptNFTs
  }

  get remainingNFTs() {
    return this.NFTs.slice(0, 2 * this.MAX_CART_SIZE).filter((nft) => {
      return !this.rootStore.cartStore.isOnCart(nft.address, nft.tokenId)
    })
  }

  get sweptNFTsAmount() {
    return this.sweptNFTs.length
  }

  get maxSweepAmount() {
    if (this.sweptNFTsAmount > this.MAX_CART_SIZE) {
      return this.sweptNFTsAmount
    }
    return Math.min(
      Number(this.sweptNFTsAmount) + Number(this.remainingNFTs.length),
      Number(this.sweptNFTsAmount) + Number(this.MAX_CART_SIZE) - this.cartSize
    )
  }

  sweepForward = () => {
    const NFT = this.remainingNFTs[0]
    if (NFT) {
      this.rootStore.cartStore.addToCart(NFT.address, NFT.tokenId, {
        hash: this.listId,
      })
    }
  }

  sweepBack = () => {
    const NFT = this.sweptNFTs[this.sweptNFTs.length - 1]
    if (NFT) {
      this.rootStore.cartStore.removeFromCart(NFT.address, NFT.tokenId)
    }
  }

  setSweptNFTsAmount = (newValue) => {
    const oldValue = this.sweptNFTsAmount
    if (newValue > oldValue) {
      for (let i = oldValue; i < newValue; i++) {
        this.sweepForward()
      }
    } else if (newValue < oldValue) {
      for (let i = oldValue; i > newValue; i--) {
        this.sweepBack()
      }
    }
  }
}

export default SweepStore
