import SectionHeader from '../components/SectionHeader.jsx'
import { useSeo } from '../hooks/useSeo.js'

export default function PrivacyPolicyPage() {
  useSeo({ title: 'Privacy Policy', description: 'How Vignova Marketing handles your data.' })

  return (
    <section className="section" style={{ paddingTop: '9rem', minHeight: '60vh' }}>
      <div className="container-vg" style={{ maxWidth: '70ch' }}>
        <SectionHeader as="h1" title="Privacy Policy" />
        <p className="lede" style={{ marginTop: '1.5rem' }}>
          This page is reserved for Vignova Marketing's real privacy policy. Legal text
          describing data collection, use, storage and visitor rights isn't something to
          write generically — it needs to accurately reflect what this site and its forms
          actually do, ideally reviewed by counsel before publishing. Once that's ready, it
          replaces this placeholder directly.
        </p>
      </div>
    </section>
  )
}
