import { motion } from 'framer-motion'

const STEPS = [
  { n: '01', label: 'Research', desc: 'Market, competitor & audience intelligence' },
  { n: '02', label: 'Strategy', desc: 'A positioning and channel plan built on evidence' },
  { n: '03', label: 'Content', desc: 'Storytelling engineered to earn attention' },
  { n: '04', label: 'Meta Ads', desc: 'Paid acquisition tuned to your unit economics' },
  { n: '05', label: 'Website', desc: 'A digital home built to convert, not just exist' },
  { n: '06', label: 'Funnels', desc: 'Systems that turn attention into pipeline' },
  { n: '07', label: 'Growth', desc: 'Compounding, measurable business outcomes' },
]

export default function Philosophy() {
  return (
    <section id="method" className="section" style={{ background: 'var(--paper)' }}>
      <div className="container-vg">
        <div className="row">
          <div className="col-12 col-lg-7">
            <div className="eyebrow">The Vignova Method</div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              One connected system. Not seven separate vendors.
            </motion.h2>
          </div>
          <div className="col-12 col-lg-4 offset-lg-1 d-flex align-items-end">
            <p className="lede">
              Most agencies hand you a content calendar and call it strategy.
              We treat growth as a pipeline — every stage informs the next,
              and every stage is measured.
            </p>
          </div>
        </div>

        {/* Desktop: horizontal connected pipeline */}
        <div className="d-none d-lg-block" style={{ marginTop: '5rem' }}>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: 22,
                left: 0,
                right: 0,
                height: 1,
                background: 'rgba(10,14,23,0.12)',
              }}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute',
                top: 22,
                left: 0,
                right: 0,
                height: 1,
                background: 'linear-gradient(90deg, var(--blue), var(--green), var(--gold))',
                transformOrigin: 'left',
              }}
            />
            <div className="row">
              {STEPS.map((s, i) => (
                <div className="col" key={s.n}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        background: i === STEPS.length - 1 ? 'var(--gold)' : 'var(--ink)',
                        boxShadow: i === STEPS.length - 1 ? '0 0 0 6px rgba(198,161,91,0.18)' : 'none',
                        marginBottom: '1.3rem',
                      }}
                    />
                    <span className="mono-label">{s.n}</span>
                    <h3 style={{ marginTop: '0.4rem' }}>{s.label}</h3>
                    <p className="lede" style={{ fontSize: '0.88rem', marginTop: '0.5rem', maxWidth: '18ch' }}>
                      {s.desc}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="d-lg-none" style={{ marginTop: '3rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 6, width: 1, background: 'rgba(10,14,23,0.12)' }} />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              style={{ position: 'relative', paddingLeft: '2.4rem', paddingBottom: '2.1rem' }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 1,
                  top: 4,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: i === STEPS.length - 1 ? 'var(--gold)' : 'var(--ink)',
                }}
              />
              <span className="mono-label">{s.n}</span>
              <h3 style={{ marginTop: '0.3rem' }}>{s.label}</h3>
              <p className="lede" style={{ fontSize: '0.9rem', marginTop: '0.35rem' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
