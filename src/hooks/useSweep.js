import { useEffect, useState } from 'react'
import { makeId } from '../utils/utils'
import { useStore } from '../store/hooks'

export const useSweep = (NFTs) => {
  const [listId] = useState(makeId())
  const { sweepStore } = useStore()
  const { updateNFTs, mount, unmount } = sweepStore

  useEffect(() => {
    mount(listId)
    return () => {
      unmount(listId)
    }
  }, [listId, mount, unmount])

  useEffect(() => {
    //同步来自 'NFTs' 的变化到可观察对象 'sweepStore'
    updateNFTs(NFTs)
  }, [NFTs, updateNFTs])

  return listId
}
