/**
 * The eyebrow + heading + lede pattern repeats on every page in the
 * UX Research doc's wireframes. Centralizing it here means a change to
 * that pattern (spacing, heading level) happens once, not on eleven pages.
 *
 * `as` controls the heading level so each page can still have exactly
 * one real <h1> — pass as="h1" on the page's hero, as="h2" everywhere else.
 */
export default function SectionHeader({ eyebrow, title, lede, as = 'h2', align = 'left' }) {
  const Heading = as
  return (
    <div style={{ textAlign: align, maxWidth: lede ? '62ch' : undefined, marginLeft: align === 'center' ? 'auto' : undefined, marginRight: align === 'center' ? 'auto' : undefined }}>
      {eyebrow && <div className="eyebrow" style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}>{eyebrow}</div>}
      <Heading>{title}</Heading>
      {lede && <p className="lede" style={{ marginTop: '1.2rem' }}>{lede}</p>}
    </div>
  )
}
