import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="section-dark" style={{ paddingTop: '4rem', paddingBottom: '2.2rem' }}>
      <div className="container-vg">
        <div className="row">
          <div className="col-12 col-lg-4" style={{ marginBottom: '2.2rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#f7f6f3' }}>Vignova Marketing</span>
            <p className="lede" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              Elevate. Engage. Empower. A research-driven growth marketing agency
              building measurable systems for ambitious businesses across India.
            </p>
          </div>

          <div className="col-6 col-lg-2" style={{ marginBottom: '2.2rem' }}>
            <Link to="/services" className="mono-label" style={{ color: 'var(--blue-bright)' }}>Services</Link>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
              {['Social Media', 'Meta Ads', 'Website Dev', 'Sales Funnels'].map((l) => (
                <li key={l} style={{ marginBottom: '0.6rem', color: 'rgba(247,246,243,0.7)', fontSize: '0.9rem' }}>{l}</li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-2" style={{ marginBottom: '2.2rem' }}>
            <span className="mono-label" style={{ color: 'var(--blue-bright)' }}>Company</span>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
              <li style={{ marginBottom: '0.6rem' }}>
                <Link to="/about" style={{ color: 'rgba(247,246,243,0.7)', fontSize: '0.9rem' }}>About</Link>
              </li>
              <li style={{ marginBottom: '0.6rem' }}>
                <Link to="/case-studies" style={{ color: 'rgba(247,246,243,0.7)', fontSize: '0.9rem' }}>Case Studies</Link>
              </li>
              <li style={{ marginBottom: '0.6rem' }}>
                <Link to="/portfolio" style={{ color: 'rgba(247,246,243,0.7)', fontSize: '0.9rem' }}>Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'rgba(247,246,243,0.7)', fontSize: '0.9rem' }}>Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-2" style={{ marginBottom: '2.2rem' }}>
            <span className="mono-label" style={{ color: 'var(--blue-bright)' }}>Resources</span>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
              <li style={{ marginBottom: '0.6rem' }}>
                <Link to="/resources/blog" style={{ color: 'rgba(247,246,243,0.7)', fontSize: '0.9rem' }}>Blog</Link>
              </li>
              <li style={{ marginBottom: '0.6rem' }}>
                <Link to="/resources/faq" style={{ color: 'rgba(247,246,243,0.7)', fontSize: '0.9rem' }}>FAQ</Link>
              </li>
              <li>
                <Link to="/client-login" style={{ color: 'rgba(247,246,243,0.7)', fontSize: '0.9rem' }}>Client Login</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-2" style={{ marginBottom: '2.2rem' }}>
            <span className="mono-label" style={{ color: 'var(--blue-bright)' }}>Contact</span>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
              <li style={{ marginBottom: '0.6rem' }}>
                <a href="mailto:vignovamarketing@gmail.com" style={{ color: 'rgba(247,246,243,0.7)', fontSize: '0.9rem' }}>
                  vignovamarketing@gmail.com
                </a>
              </li>
              <li style={{ marginBottom: '0.6rem' }}>
                <a href="tel:+917997619119" style={{ color: 'rgba(247,246,243,0.7)', fontSize: '0.9rem' }}>
                  +91 79976 19119
                </a>
              </li>
              <li style={{ marginBottom: '0.6rem' }}>
                <a href="https://www.instagram.com/vignova.marketing" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(247,246,243,0.7)', fontSize: '0.9rem' }}>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/eesha-g-3980a1321" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(247,246,243,0.7)', fontSize: '0.9rem' }}>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="hr-vg" />

        <div className="d-flex flex-wrap justify-content-between align-items-center" style={{ paddingTop: '1.4rem', gap: 12 }}>
          <span className="mono-label">© {new Date().getFullYear()} Vignova Marketing. All rights reserved.</span>
          <div className="d-flex" style={{ gap: 18 }}>
            <Link to="/legal/privacy-policy" className="mono-label" style={{ color: 'rgba(247,246,243,0.6)' }}>Privacy Policy</Link>
            <Link to="/legal/terms" className="mono-label" style={{ color: 'rgba(247,246,243,0.6)' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
