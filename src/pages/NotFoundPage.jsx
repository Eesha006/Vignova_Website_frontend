import { Link } from 'react-router-dom'
import { useSeo } from '../hooks/useSeo.js'

export default function NotFoundPage() {
  useSeo({ title: 'Page Not Found', description: 'The page you were looking for could not be found.' })

  return (
    <section
      className="section section-dark"
      style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '9rem' }}
    >
      <div className="container-vg">
        <div className="eyebrow">Page Not Found</div>
        <h1 style={{ color: '#f7f6f3', maxWidth: '18ch' }}>
          That page didn't make it into the system.
        </h1>
        <p className="lede" style={{ marginTop: '1.4rem', maxWidth: '48ch' }}>
          The link you followed may be outdated, or the page may have moved. Here's where
          you probably meant to go.
        </p>

        <div className="d-flex flex-wrap" style={{ gap: 12, marginTop: '2rem' }}>
          <Link to="/" className="btn-vg btn-outline">Home</Link>
          <Link to="/services" className="btn-vg btn-outline">Services</Link>
          <Link to="/contact" className="btn-vg btn-outline">Contact</Link>
        </div>

        <p className="lede" style={{ marginTop: '2.5rem', fontSize: '0.85rem' }}>
          If you think this is a broken link on our end,{' '}
          <a href="mailto:vignovamarketing@gmail.com">let us know</a>.
        </p>
      </div>
    </section>
  )
}
