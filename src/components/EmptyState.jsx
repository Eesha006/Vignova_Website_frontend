import { Link } from 'react-router-dom'

/**
 * Per the Visual Design Specification: an empty state should never look
 * broken or generic. This renders the interrupted-pipeline motif (an
 * echo of the 404 page's "unfinished node") instead of a stock icon,
 * so a page with no content yet still feels like part of the same
 * system, not an error.
 */
export default function EmptyState({ title, body, ctaLabel, ctaTo }) {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem', maxWidth: 480, margin: '0 auto' }}>
      <svg width="72" height="24" viewBox="0 0 72 24" fill="none" style={{ margin: '0 auto 1.5rem', display: 'block' }} aria-hidden="true">
        <line x1="2" y1="12" x2="40" y2="12" stroke="var(--blue)" strokeWidth="1.5" />
        <line x1="46" y1="12" x2="70" y2="12" stroke="var(--slate-soft)" strokeWidth="1.5" strokeDasharray="3 4" />
        <circle cx="42" cy="12" r="4" fill="none" stroke="var(--slate-soft)" strokeWidth="1.5" />
      </svg>
      <h3 style={{ fontSize: '1.15rem' }}>{title}</h3>
      <p className="lede" style={{ marginTop: '0.6rem', fontSize: '0.95rem' }}>{body}</p>
      {ctaLabel && ctaTo && (
        <Link to={ctaTo} className="btn-vg btn-outline" style={{ marginTop: '1.6rem', display: 'inline-flex' }}>
          {ctaLabel}
        </Link>
      )}
    </div>
  )
}
