import { motion } from 'framer-motion'

const SERVICES = [
  { title: 'Research-Backed Social Media Management', desc: 'Every post has a reason to exist — planned around what your actual audience responds to, not what trended last week.' },
  { title: 'Content Strategy', desc: 'A content plan mapped to how your buyers actually decide, not a themed calendar borrowed from a template.' },
  { title: 'High-Performing Reel Scripts', desc: "Scripts built on what's proven to hold attention in your category — simple to film, not dependent on a production crew." },
  { title: 'Meta Ads', desc: 'Campaigns built around your margins, not your impressions. We optimize for the outcome you\u2019re actually paying for.' },
  { title: 'Website Development', desc: 'A site engineered to convert, not just exist — built fast, built clean, and built to hand off to your funnel.' },
  { title: 'Sales Funnels', desc: 'The path from first click to signed client, mapped and measured at every step, so you know where people drop off and why.' },
  { title: 'Marketing Research', desc: 'Category, competitor and customer research that removes the guesswork from every decision that follows it.' },
  { title: 'Creative Strategy', desc: 'The thread that keeps every channel — social, ads, website — telling the same story, in the same voice.' },
]

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--paper-dim)' }}>
      <div className="container-vg">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="eyebrow">What We Build</div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Eight capabilities. One connected system.
            </motion.h2>
            <p className="lede" style={{ marginTop: '1.2rem' }}>
              Buy one service on its own, and you've hired a vendor. Buy into the
              system, and you've bought a result.
            </p>
          </div>
        </div>

        <div className="row" style={{ marginTop: '3rem' }}>
          {SERVICES.map((s, i) => (
            <div className="col-12 col-md-6 col-lg-3 d-flex" key={s.title} style={{ marginBottom: '1.6rem' }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="card-vg"
                style={{ width: '100%' }}
              >
                <span className="mono-label">{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ marginTop: '0.9rem', fontSize: '1.08rem' }}>{s.title}</h3>
                <p className="lede" style={{ fontSize: '0.9rem', marginTop: '0.7rem' }}>{s.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
