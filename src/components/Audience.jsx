import { motion } from 'framer-motion'

const SEGMENTS = [
  'Local Businesses',
  'Small & Medium Businesses',
  'Healthcare Clinics',
  'Restaurants & Cafés',
  'Gyms & Fitness Businesses',
  'Salons & Beauty Brands',
  'Real Estate Businesses',
  'Educational Institutions',
  'Tech Startups',
  'Personal Brands',
  'Professional Service Providers',
]

export default function Audience() {
  return (
    <section id="audience" className="section section-dark">
      <div className="container-vg">
        <div className="row align-items-start">
          <div className="col-12 col-lg-6">
            <div className="eyebrow">Who We Work With</div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ color: '#f7f6f3' }}
            >
              Built for businesses ready to invest in growth.
            </motion.h2>
            <p className="lede" style={{ marginTop: '1.5rem' }}>
              We work best with teams across India who are tired of disconnected
              marketing activity and want a system that is expected to perform —
              not just show up.
            </p>
          </div>

          <div className="col-12 col-lg-5 offset-lg-1" style={{ marginTop: '3rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="d-flex flex-wrap"
              style={{ gap: 10 }}
            >
              {SEGMENTS.map((seg) => (
                <span
                  key={seg}
                  className="mono-label"
                  style={{
                    border: '1px solid rgba(247,246,243,0.18)',
                    borderRadius: 999,
                    padding: '0.55rem 1.1rem',
                    color: '#f7f6f3',
                  }}
                >
                  {seg}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
