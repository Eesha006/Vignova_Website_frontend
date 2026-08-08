import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo/logo1.png'

const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        background: scrolled ? 'rgba(10,14,23,0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(247,246,243,0.08)' : '1px solid transparent',
      }}
    >
      <div className="container-vg d-flex align-items-center justify-content-between" style={{ height: 78 }}>
        <Link
          to="/"
          className="d-flex align-items-center"
          style={{
            width: 170,
            height: 58,
          }}
        >
          <img
            src={logo}
            alt="Vignova Marketing"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Link>

        <nav className="d-none d-lg-flex align-items-center" aria-label="Primary" style={{ gap: 28 }}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                fontSize: '0.88rem',
                color: isActive ? '#f7f6f3' : 'rgba(247,246,243,0.78)',
                fontWeight: 500,
                transition: 'color 0.3s ease',
              })}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f7f6f3')}
              onMouseLeave={(e) => {
                if (!e.currentTarget.getAttribute('aria-current')) e.currentTarget.style.color = 'rgba(247,246,243,0.78)'
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="d-none d-lg-flex align-items-center" style={{ gap: 12 }}>
          <Link to="/client-login" className="btn-vg btn-ghost-blue" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
            Client Login
          </Link>
          <Link to="/book" className="btn-vg btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}>
            Book a Consultation
          </Link>
        </div>

        <button
          className="d-lg-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{
            background: 'transparent',
            border: '1px solid rgba(247,246,243,0.25)',
            borderRadius: 10,
            width: 42,
            height: 42,
            color: '#f7f6f3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div
          className="d-lg-none"
          style={{
            background: 'rgba(10,14,23,0.98)',
            borderTop: '1px solid rgba(247,246,243,0.08)',
            padding: '1.5rem var(--gutter) 2rem',
          }}
        >
          <div className="d-flex flex-column" style={{ gap: 18 }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                style={{ color: '#f7f6f3', fontSize: '1.05rem', fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
            <hr className="hr-vg" style={{ margin: '0.5rem 0' }} />
            <Link to="/client-login" onClick={() => setOpen(false)} className="btn-vg btn-ghost-blue w-100">
              Client Login
            </Link>
            <Link to="/book" onClick={() => setOpen(false)} className="btn-vg btn-primary w-100">
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  )
}
