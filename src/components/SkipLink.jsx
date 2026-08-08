/**
 * Visually hidden until focused. Lets keyboard users bypass the navbar
 * instead of tabbing through every nav link on every single page load.
 */
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      style={{
        position: 'absolute',
        left: 12,
        top: -60,
        zIndex: 1000,
        background: 'var(--blue-deep)',
        color: 'var(--paper)',
        padding: '0.75rem 1.25rem',
        borderRadius: 8,
        fontSize: '0.9rem',
        fontWeight: 600,
        transition: 'top 0.2s ease',
      }}
      onFocus={(e) => (e.currentTarget.style.top = '12px')}
      onBlur={(e) => (e.currentTarget.style.top = '-60px')}
    >
      Skip to main content
    </a>
  )
}
