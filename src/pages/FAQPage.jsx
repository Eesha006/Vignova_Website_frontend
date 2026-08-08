import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import { useSeo } from '../hooks/useSeo.js'

// Three questions from the original draft (pricing, portfolio examples,
// contract terms) are intentionally left out of the live site until the
// founder confirms real answers — publishing a "pending" placeholder to
// visitors would look unfinished, so the honest move is to simply not
// ask those questions yet.
const FAQS = [
  {
    q: 'How is Vignova different from a regular social media agency?',
    a: 'Most agencies start with content. We start with research — your audience, your competitors, your category — and only then decide what to build. Content, ads, your website and your funnel are treated as one system, not four separate services.',
  },
  {
    q: 'Do you work with businesses outside the industries you list?',
    a: 'We focus on local businesses, SMBs, healthcare clinics, restaurants and cafés, gyms and fitness brands, salons, real estate, education, tech startups, personal brands and professional service providers. If that\u2019s not you, we\u2019ll tell you honestly whether we\u2019re a fit before you spend anything.',
  },
  {
    q: 'How long before we see results?',
    a: 'Timelines vary by channel and by business — research and strategy typically come first, with content, ads, website and funnel work following at different speeds. We\u2019ll set specific expectations for your situation on the first call.',
  },
  {
    q: 'What happens after I book a consultation?',
    a: 'We ask about your business, your goals, and what\u2019s not working today. If there\u2019s a fit, we follow up with a plan specific to your business — not a generic proposal. If there isn\u2019t a fit, we\u2019ll tell you that too.',
  },
  {
    q: 'Do you handle everything, or do I still need other vendors?',
    a: 'The goal is to reduce how many vendors you\u2019re managing, not add to the list. Research, content, ads, website and funnels can all run through Vignova as one connected system — you decide how much of it you want us to own.',
  },
  {
    q: 'What\u2019s the Client Portal, and do I need to use it?',
    a: 'The Portal is where active clients track reporting and campaign status. It\u2019s a separate, secure application from this website — you\u2019ll get access once you\u2019re onboarded.',
  },
  {
    q: 'What if it isn\u2019t working?',
    a: 'We\u2019ll tell you early if something isn\u2019t performing, rather than waiting for a renewal conversation to bring it up.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(10,14,23,0.1)' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-100 d-flex justify-content-between align-items-center"
        style={{
          background: 'none',
          border: 'none',
          textAlign: 'left',
          padding: '1.4rem 0',
          fontWeight: 600,
          fontSize: '1.02rem',
          color: open ? 'var(--blue-deep)' : 'var(--ink)',
        }}
      >
        <span>{q}</span>
        <span aria-hidden="true" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s var(--ease)', flexShrink: 0, marginLeft: 12 }}>
          ⌄
        </span>
      </button>
      {open && (
        <p className="lede" style={{ fontSize: '0.95rem', paddingBottom: '1.4rem' }}>
          {a}
        </p>
      )}
    </div>
  )
}

export default function FAQPage() {
  useSeo({ title: 'FAQ', description: 'Direct answers on pricing fit, process and the client portal — before you book a call.' })

  return (
    <section className="section" style={{ paddingTop: '9rem', minHeight: '70vh' }}>
      <div className="container-vg" style={{ maxWidth: 760 }}>
        <SectionHeader as="h1" eyebrow="FAQ" title="Direct answers, before a sales conversation." />

        <div style={{ marginTop: '2.5rem' }}>
          {FAQS.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

        <div className="card-vg" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.1rem' }}>Still have a question?</h3>
          <div className="d-flex justify-content-center flex-wrap" style={{ gap: 12, marginTop: '1.2rem' }}>
            <Link to="/contact" className="btn-vg btn-outline">Ask Us Directly</Link>
            <Link to="/book" className="btn-vg btn-primary" style={{ background: 'var(--blue-deep)', color: 'var(--paper)' }}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
