import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Mount once near the root. Without this, React Router preserves scroll
 * position across navigations, which reads as broken on a content site. */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return null
}
