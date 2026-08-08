import { useEffect, useState } from 'react'
import { useSeo } from '../hooks/useSeo.js'

const PORTAL_URL = 'https://portal.vignovamarketing.in'
const REDIRECT_DELAY_MS = 1800

export default function ClientLoginPage() {
  useSeo({ title: 'Client Login', description: 'Redirecting to the Vignova Marketing Client Portal.' })
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = PORTAL_URL
    }, REDIRECT_DELAY_MS)

    // The manual fallback link appears a beat after the page loads, so it
    // never competes visually with the automatic redirect — it's a safety
    // net, not the primary path.
    const fallbackTimer = setTimeout(() => setShowFallback(true), 1000)

    return () => {
      clearTimeout(redirectTimer)
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <section
      className="section-dark"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div className="glass-dark" style={{ borderRadius: 'var(--radius-lg)', padding: '3rem', maxWidth: 440, textAlign: 'center' }}>
        <div
          aria-hidden="true"
          style={{
            width: 36,
            height: 36,
            margin: '0 auto 1.5rem',
            borderRadius: '50%',
            border: '2px solid rgba(247,246,243,0.2)',
            borderTopColor: 'var(--blue-bright)',
            animation: 'vg-spin 0.9s linear infinite',
          }}
        />
        <style>{'@keyframes vg-spin { to { transform: rotate(360deg); } }'}</style>
        <p style={{ color: '#f7f6f3', fontSize: '1.05rem' }}>
          You're being securely redirected to your Vignova Client Portal.
        </p>
        {showFallback && (
          <a
            href={PORTAL_URL}
            className="mono-label"
            style={{ display: 'inline-block', marginTop: '1.4rem', color: 'var(--blue-bright)' }}
          >
            Click here if you're not redirected automatically →
          </a>
        )}
      </div>
    </section>
  )
}
