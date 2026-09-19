import { useCallback, useRef, useEffect } from 'react'

export function usePrint() {
  const previouslyOpen = useRef([])

  useEffect(() => {
    const handleBeforePrint = () => {
      const details = document.querySelectorAll('details')
      previouslyOpen.current = Array.from(details).map((el) => el.open)
      details.forEach((el) => {
        el.open = true
      })
    }

    const handleAfterPrint = () => {
      document.querySelectorAll('details').forEach((el, i) => {
        el.open = previouslyOpen.current[i] ?? false
      })
    }

    window.addEventListener('beforeprint', handleBeforePrint)
    window.addEventListener('afterprint', handleAfterPrint)

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint)
      window.removeEventListener('afterprint', handleAfterPrint)
    }
  }, [])

  return useCallback(() => window.print(), [])
}
