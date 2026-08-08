import { useState } from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import { useSeo } from '../hooks/useSeo.js'

export default function ContactPage() {
  useSeo({
    title: 'Contact',
    description: 'Have a question that doesn\u2019t need a full consultation? Reach Vignova Marketing directly.',
  })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // No general-inquiry endpoint exists yet (Leads table is "proposed" in the
    // Architecture doc, not shipped) — mailto is an honest fallback until it does.
    window.location.href = `mailto:vignovamarketing@gmail.com?subject=${encodeURIComponent(
      'Website inquiry from ' + form.name
    )}&body=${encodeURIComponent(form.message + '\n\n' + form.email)}`
    setStatus('sent')
  }

  return (
    <section className="section" style={{ paddingTop: '9rem', minHeight: '70vh' }}>
      <div className="container-vg">
        <div className="row">
          <div className="col-12 col-lg-5">
            <SectionHeader
              as="h1"
              eyebrow="Get in Touch"
              title="Ask us anything before you book."
              lede="Have a question that doesn't need a full consultation? Send it here — we read every message ourselves."
            />

            <div style={{ marginTop: '2.5rem' }}>
              <p className="mono-label">Email</p>
              <a href="mailto:vignovamarketing@gmail.com" style={{ fontSize: '1.05rem' }}>vignovamarketing@gmail.com</a>

              <p className="mono-label" style={{ marginTop: '1.5rem' }}>Phone</p>
              <a href="tel:+917997619119" style={{ fontSize: '1.05rem' }}>+91 79976 19119</a>

              <p className="mono-label" style={{ marginTop: '1.5rem' }}>Elsewhere</p>
              <div className="d-flex" style={{ gap: 16 }}>
                <a href="https://www.instagram.com/vignova.marketing" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/in/eesha-g-3980a1321" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 offset-lg-1" style={{ marginTop: '2.5rem' }}>
            {status === 'sent' ? (
              <div className="card-vg">
                <p className="lede">
                  Your email app should have opened with your message ready to send. If it
                  didn't, email us directly at{' '}
                  <a href="mailto:vignovamarketing@gmail.com">vignovamarketing@gmail.com</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-vg">
                <div style={{ marginBottom: '1.1rem' }}>
                  <label htmlFor="contact-name" className="mono-label d-block" style={{ marginBottom: 6 }}>Name</label>
                  <input id="contact-name" required name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Your full name" />
                </div>
                <div style={{ marginBottom: '1.1rem' }}>
                  <label htmlFor="contact-email" className="mono-label d-block" style={{ marginBottom: 6 }}>Email</label>
                  <input id="contact-email" required type="email" name="email" value={form.email} onChange={handleChange} className="form-control" placeholder="you@company.com" />
                </div>
                <div style={{ marginBottom: '1.4rem' }}>
                  <label htmlFor="contact-message" className="mono-label d-block" style={{ marginBottom: 6 }}>Message</label>
                  <textarea id="contact-message" required name="message" value={form.message} onChange={handleChange} className="form-control" rows={5} placeholder="What can we help with?" />
                </div>
                <button type="submit" className="btn-vg btn-primary w-100">Send Message</button>
                <p className="lede" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
                  We'll never share your details or add you to a list you didn't ask for.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
