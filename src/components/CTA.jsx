import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--paper-dim)' }}>
      <div className="container-vg">
        <div className="row align-items-center">
          <div className="col-12 col-lg-7">
            <div className="eyebrow">Start The Conversation</div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Book your free growth consultation.
            </motion.h2>
            <p className="lede" style={{ marginTop: '1.4rem' }}>
              Pick a time that actually works for you — we'll confirm it on the
              spot and send everything you need before the call.
            </p>
          </div>

          <div className="col-12 col-lg-4 offset-lg-1" style={{ marginTop: '2rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/book" className="btn-vg btn-primary w-100" style={{ background: 'var(--blue-deep)', color: 'var(--paper)' }}>
                Book a Consultation →
              </Link>
              <p className="lede" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
                Prefer to just ask a question first?{' '}
                <a href="mailto:vignovamarketing@gmail.com">Email us directly</a>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
