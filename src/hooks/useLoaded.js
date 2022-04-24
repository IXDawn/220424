import { useEffect, useState } from 'react'

// 避免由于客户端和服务端的环境不同导致的渲染问题
export const useLoaded = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => setLoaded(true), [])
  return loaded
}
