import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delayMs: number) => {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const t = setTimeout(() => {
      setDebounced(value)
    }, delayMs)
    return () => clearTimeout(t)
  }, [value, delayMs])
  return debounced
}
