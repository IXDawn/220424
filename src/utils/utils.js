export const makeId = (n = 5) => {
  let text = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < n; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}

// 节流装饰器
export const throttle = (func, ms) => {
  let isThrottled = false,
    savedArgs,
    savedThis

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments
      savedThis = this
      return null
    }

    func.apply(this, arguments)

    isThrottled = true

    setTimeout(function f() {
      isThrottled = false
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }

  return wrapper
}

// 防抖装饰器
export function debounce(func, ms) {
  let timeout
  return function f() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, arguments)
    }, ms)
  }
}
