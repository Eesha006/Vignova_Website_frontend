import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo1.png'

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function Hero() {
  return (
    <section
      id="top"
      className="section-dark"
      style={{
        width: '100vw',
        maxWidth: '100vw',
        paddingTop: 'clamp(9rem, 16vw, 12rem)',
        paddingBottom: 'clamp(5rem, 10vw, 7rem)',
        position: 'relative',
        overflow: 'hidden',
      }}

    >
      {/* Ambient background */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(60% 50% at 80% 8%, rgba(0,128,214,0.16), transparent 60%), radial-gradient(45% 40% at 8% 90%, rgba(245,166,35,0.12), transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container-vg"
        style={{
          position: 'relative',
        }}
      >
        {/* Hero Logo */}
        <div
          className="hero-logo"
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '2rem',
            top: '32%',
            transform: 'translateY(-50%)',
            width: 'clamp(280px, 25vw, 390px)',
            height: 'clamp(280px, 25vw, 390px)',
            borderRadius: '50%',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2.2rem',
            boxShadow:
              '0 0 0 1px rgba(255,255,255,0.18), 0 25px 70px rgba(0,0,0,0.28)',
            zIndex: 1,
          }}
        >
          <img
            src={logo}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="eyebrow"
        >
          Elevate · Engage · Empower
        </motion.div>

        <div className="row align-items-end">
          <div className="col-12 col-xl-9">
            <motion.h1
              initial="hidden"
              animate="show"
              custom={1}
              variants={fadeUp}
              style={{
                color: '#f7f6f3',
                position: 'relative',
                zIndex: 2,
              }}
            >
              The marketing spend
              <br />
              you can finally{' '}
              <span
                style={{
                  fontStyle: 'italic',
                  color: 'var(--blue-bright)',
                }}
              >
                defend.
              </span>
            </motion.h1>
          </div>
        </div>

        <div className="row" style={{ marginTop: '2.4rem' }}>
          <div className="col-12 col-lg-7">
            <motion.p
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUp}
              className="lede"
              style={{
                maxWidth: '52ch',
                position: 'relative',
                zIndex: 2,
              }}
            >
              Vignova replaces scattered freelancers and disconnected
              campaigns with one connected system — research, content, Meta
              Ads, your website and your funnel, working together and reporting
              back to the number your business actually cares about.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          variants={fadeUp}
          className="hero-actions d-flex flex-wrap"
          style={{
            gap: 14,
            marginTop: '2.6rem',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Link
            to="/book"
            className="btn-vg btn-primary"
            style={{
              background: 'var(--blue-deep)',
              color: 'var(--paper)',
              padding: '1rem 2rem',
            }}
          >
            Book a Consultation →
          </Link>

          <a
            href="#method"
            className="btn-vg btn-outline"
            style={{
              padding: '1rem 2rem',
            }}
          >
            See How It Works
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={4}
          variants={fadeUp}
          className="row"
          style={{
            marginTop: 'clamp(3.5rem, 7vw, 5.5rem)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {[
            [
              '01',
              'Research',
              'We study your market and your competitors before a single post goes live',
            ],
            [
              '02',
              'One System',
              'Content, ads, website and funnel, engineered to move together — not four separate invoices',
            ],
            [
              '03',
              'Real Numbers',
              'Reporting tied to the outcome you actually care about, not platform vanity metrics',
            ],
          ].map(([num, title, desc]) => (
            <div
              className="col-12 col-md-4"
              key={num}
              style={{ marginBottom: '1.5rem' }}
            >
              <div
                style={{
                  borderTop: '1px solid rgba(247,246,243,0.14)',
                  paddingTop: '1.1rem',
                }}
              >
                <span
                  className="mono-label"
                  style={{ color: 'var(--blue-bright)' }}
                >
                  {num}
                </span>

                <h3
                  style={{
                    color: '#f7f6f3',
                    marginTop: '0.5rem',
                    fontSize: '1.15rem',
                  }}
                >
                  {title}
                </h3>

                <p
                  className="lede"
                  style={{
                    marginTop: '0.4rem',
                    fontSize: '0.92rem',
                    maxWidth: '30ch',
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}