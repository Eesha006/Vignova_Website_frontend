import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader.jsx'
import { useSeo } from '../hooks/useSeo.js'

const VALUES = [
  { n: '01', title: 'Evidence over opinion', desc: "If the research doesn't support it, it doesn't ship." },
  { n: '02', title: 'Systems over silos', desc: "We won't hand you an ad plan that ignores your website." },
  { n: '03', title: 'Candor over comfort', desc: "We'll tell you what the data shows, even when it's not what you hoped." },
  { n: '04', title: 'Craft over shortcuts', desc: "Research-backed doesn't mean rushed." },
  { n: '05', title: 'Shared growth', desc: 'We measure our own success by the number that mattered to you at the start.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function AboutPage() {
  useSeo({
    title: 'About',
    description: 'Vignova Marketing exists because marketing budgets deserve better math — research first, then one connected system.',
  })

  return (
    <>
      <section className="section section-dark" style={{ paddingTop: '9rem' }}>
        <div className="container-vg">
          <SectionHeader
            as="h1"
            eyebrow="About Vignova"
            title="We started Vignova because marketing budgets deserve better math."
          />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="container-vg">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="lede"
            style={{ maxWidth: '62ch', fontSize: '1.1rem' }}
          >
            Most businesses investing seriously in marketing are still buying activity, not
            outcomes — a freelancer for reels, a boutique shop for ads, a developer for the
            website, none of them accountable to the same number. Vignova exists to replace
            that with one system: research first, then content, ads, website and funnels,
            built to work together and prove it.
          </motion.p>

          <motion.blockquote
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            style={{
              borderLeft: '2px solid var(--gold)',
              paddingLeft: '1.6rem',
              margin: '3rem 0',
              maxWidth: '52ch',
            }}
          >
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--ink)' }}>
              Research isn't a service we sell — it's the discipline behind every service we
              do sell.
            </p>
          </motion.blockquote>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper-dim)' }}>
        <div className="container-vg">
          <SectionHeader eyebrow="What We Won't Compromise On" title="Five rules, tested against real decisions." />
          <div style={{ marginTop: '2.5rem' }}>
            {VALUES.map((v, i) => (
              <motion.div
                key={v.n}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="row align-items-baseline"
                style={{ borderTop: i > 0 ? '1px solid rgba(10,14,23,0.1)' : 'none', padding: '1.6rem 0' }}
              >
                <div className="col-2 col-md-1">
                  <span className="mono-label" style={{ fontSize: '1.3rem', color: 'var(--slate-soft)' }}>{v.n}</span>
                </div>
                <div className="col-10 col-md-4">
                  <h3 style={{ fontSize: '1.15rem' }}>{v.title}</h3>
                </div>
                <div className="col-12 col-md-7">
                  <p className="lede" style={{ fontSize: '0.95rem', marginTop: '0.4rem' }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="container-vg">
          <SectionHeader eyebrow="The Person Behind Vignova" title="Founder story — coming soon." />
          <p className="lede" style={{ marginTop: '1rem' }}>
            
          </p>
        </div>
      </section>
    </>
  )
}
