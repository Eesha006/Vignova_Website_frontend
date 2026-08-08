import { motion } from 'framer-motion'

const PILLARS = [
  {
    word: 'Elevate',
    desc: 'Increase visibility and strengthen business presence through research-backed marketing.',
    color: 'var(--blue-deep)',
  },
  {
    word: 'Engage',
    desc: 'Create meaningful audience engagement through strategic content and storytelling.',
    color: 'var(--green)',
  },
  {
    word: 'Empower',
    desc: 'Convert attention into measurable business growth through Meta Ads, websites and funnels.',
    color: 'var(--gold)',
  },
]

export default function BrandMeaning() {
  return (
    <section className="section" style={{ background: 'var(--paper)' }}>
      <div className="container-vg">
        <div className="eyebrow">Our Tagline</div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Elevate. Engage. Empower.
        </motion.h2>

        <div className="row" style={{ marginTop: '3.5rem' }}>
          {PILLARS.map((p, i) => (
            <div className="col-12 col-md-4" key={p.word} style={{ marginBottom: '2rem' }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                style={{ borderLeft: `2px solid ${p.color}`, paddingLeft: '1.4rem' }}
              >
                <h3 style={{ fontStyle: 'italic', fontSize: '1.6rem', color: p.color }}>{p.word}</h3>
                <p className="lede" style={{ marginTop: '0.7rem', fontSize: '0.95rem' }}>{p.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
