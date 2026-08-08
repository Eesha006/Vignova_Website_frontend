import { useEffect } from 'react'

const SITE_NAME = 'Vignova Marketing'

/**
 * Sets the document title and meta description for the current page.
 * Call once per page component. Restores the previous title on unmount
 * so navigating away never leaves a stale title behind.
 *
 * Client-side-only SEO — sufficient for crawlers that execute JavaScript
 * (Google, Bing). If broader crawler support is ever needed, that's a
 * build-tooling decision (e.g. static prerendering) layered on top of
 * this, not a replacement for it.
 */
export function useSeo({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME

    let meta = document.querySelector('meta[name="description"]')
    const previousDescription = meta ? meta.getAttribute('content') : null

    if (description) {
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }

    return () => {
      document.title = previousTitle
      if (meta && previousDescription !== null) {
        meta.setAttribute('content', previousDescription)
      }
    }
  }, [title, description])
}
