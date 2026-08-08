import SectionHeader from '../components/SectionHeader.jsx'
import { useSeo } from '../hooks/useSeo.js'

export default function TermsPage() {
  useSeo({ title: 'Terms of Service', description: 'The terms governing use of the Vignova Marketing website and services.' })

  return (
    <section className="section" style={{ paddingTop: '9rem', minHeight: '60vh' }}>
      <div className="container-vg" style={{ maxWidth: '70ch' }}>
        <SectionHeader as="h1" title="Terms of Service" />
        <p className="lede" style={{ marginTop: '1.5rem' }}>
          This page is reserved for Vignova Marketing's real terms of service — engagement
          terms, cancellation policy, liability and the rest — once those are actually
          decided. Placeholder legal text would create more confusion than it resolves, so
          this stays intentionally blank until the real terms exist.
        </p>
      </div>
    </section>
  )
}
