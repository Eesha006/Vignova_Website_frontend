import { motion } from 'framer-motion'

const STAGES = [
  { label: 'Agency', status: 'Today', desc: 'Research-driven growth marketing, delivered end to end.' },
  { label: 'AI Products', status: 'Next', desc: 'Proprietary tools that scale what our research uncovers.' },
  { label: 'Marketing Automation', status: 'Future', desc: 'Systems that run the growth pipeline with less manual effort.' },
  { label: 'Academy', status: 'Future', desc: 'Teaching the method behind the systems we build.' },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="section section-dark">
      <div className="container-vg">
        <div className="row">
          <div className="col-12 col-lg-7">
            <div className="eyebrow">Where We're Going</div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ color: '#f7f6f3' }}
            >
              An agency today. A growth platform tomorrow.
            </motion.h2>
          </div>
        </div>

        <div className="row" style={{ marginTop: '3.5rem' }}>
          {STAGES.map((s, i) => (
            <div className="col-12 col-md-6 col-lg-3" key={s.label} style={{ marginBottom: '1.8rem' }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-dark"
                style={{ borderRadius: 'var(--radius-md)', padding: '1.8rem', height: '100%' }}
              >
                <span
                  className="mono-label"
                  style={{ color: i === 0 ? 'var(--blue-bright)' : 'var(--slate-soft)' }}
                >
                  {s.status}
                </span>
                <h3 style={{ color: '#f7f6f3', marginTop: '0.7rem' }}>{s.label}</h3>
                <p className="lede" style={{ marginTop: '0.6rem', fontSize: '0.88rem' }}>{s.desc}</p>
              </motion.div>
              {i < STAGES.length - 1 && (
                <div className="d-none d-lg-flex justify-content-center" style={{ marginTop: '-1.4rem', position: 'relative', zIndex: 2 }}>
                  <span style={{ color: 'var(--slate-soft)' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
