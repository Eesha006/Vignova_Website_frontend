import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import { useSeo } from '../hooks/useSeo.js'

const SERVICES = [
  { title: 'Research-Backed Social Media Management', stage: 'Research · Content', desc: 'Every post has a reason to exist — planned around what your actual audience responds to, not what trended last week.' },
  { title: 'Content Strategy', stage: 'Strategy · Content', desc: 'A content plan mapped to how your buyers actually decide, not a themed calendar borrowed from a template.' },
  { title: 'High-Performing Reel Scripts', stage: 'Content', desc: "Scripts built on what's proven to hold attention in your category — simple to film, not dependent on a production crew." },
  { title: 'Meta Ads', stage: 'Meta Ads', desc: 'Campaigns built around your margins, not your impressions. We optimize for the outcome you\u2019re actually paying for.' },
  { title: 'Website Development', stage: 'Website', desc: 'A site engineered to convert, not just exist — built fast, built clean, and built to hand off to your funnel.' },
  { title: 'Sales Funnels', stage: 'Funnels', desc: 'The path from first click to signed client, mapped and measured at every step, so you know where people drop off and why.' },
  { title: 'Marketing Research', stage: 'Research', desc: 'Category, competitor and customer research that removes the guesswork from every decision that follows it.' },
  { title: 'Creative Strategy', stage: 'Strategy', desc: 'The thread that keeps every channel — social, ads, website — telling the same story, in the same voice.' },
]

export default function ServicesPage() {
  useSeo({
    title: 'Services',
    description: 'Eight capabilities, one connected system — research, content, Meta Ads, website and funnels, built to work together.',
  })

  return (
    <>
      <section className="section" style={{ paddingTop: '9rem', background: 'var(--paper)' }}>
        <div className="container-vg">
          <SectionHeader
            as="h1"
            eyebrow="What We Build"
            title="Eight capabilities. One connected system."
            lede="Buy one service on its own, and you've hired a vendor. Buy into the system, and you've bought a result."
          />

          <div className="row" style={{ marginTop: '3.5rem' }}>
            {SERVICES.map((s, i) => (
              <div className="col-12 col-md-6 col-lg-3 d-flex" key={s.title} style={{ marginBottom: '1.6rem' }}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="card-vg"
                  style={{ width: '100%', position: 'relative' }}
                >
                  <span className="mono-label">{String(i + 1).padStart(2, '0')}</span>
                  <h3 style={{ marginTop: '0.9rem', fontSize: '1.05rem' }}>{s.title}</h3>
                  <p className="lede" style={{ fontSize: '0.88rem', marginTop: '0.7rem' }}>{s.desc}</p>
                  <span
                    className="mono-label"
                    style={{
                      display: 'inline-block',
                      marginTop: '1rem',
                      color: 'var(--blue-deep)',
                      fontSize: '0.7rem',
                      borderTop: '1px solid rgba(10,14,23,0.08)',
                      paddingTop: '0.7rem',
                      width: '100%',
                    }}
                  >
                    {s.stage}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container-vg" style={{ textAlign: 'center' }}>
          <SectionHeader
            align="center"
            eyebrow="How They Connect"
            title="A gap in one stage breaks every stage after it."
            lede="Great ads sending traffic to a slow website. Great content with no funnel to catch the interest it creates. Buying services in isolation is how that happens — buying the system is how it doesn't."
          />
          <Link to="/book" className="btn-vg btn-primary" style={{ marginTop: '2rem', display: 'inline-flex', background: 'var(--blue-deep)', color: 'var(--paper)' }}>
            Talk to Us About Your Business →
          </Link>
        </div>
      </section>
    </>
  )
}
