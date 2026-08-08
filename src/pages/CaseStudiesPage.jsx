import { useState } from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import { useSeo } from '../hooks/useSeo.js'

const INDUSTRIES = ['All', 'Local Business', 'Healthcare', 'Tech Startup', 'Personal Brand']

const CASE_STUDIES = [
  {
    id: 'aayushman-physio-fit-clinic',
    industry: 'Healthcare',
    client: 'Aayushman Physio Fit Clinic',
    title: 'Digitizing the patient journey from booking to payment.',
    description:
      'A digital healthcare experience designed to make appointments, registrations, home-service requests and payments easier for patients.',
    services: [
      'Token Generation',
      'Online OP Form',
      'WhatsApp Booking',
      'Home Service Booking',
      'Razorpay Integration',
    ],
    challenge:
      'The clinic wanted to make its appointment and service-booking process more convenient while reducing the dependency on manual enquiries and in-person registration.',
    solution:
      'We built a connected digital experience that allows patients to generate tokens, complete the OP form online, book check-ups through WhatsApp, request home physiotherapy services and make online payments.',
    outcome:
      'A smoother digital patient journey connecting clinic registration, appointment booking, home services and online payments in one experience.',
  },
]

export default function CaseStudiesPage() {
  useSeo({
    title: 'Case Studies',
    description: 'Real outcomes from real engagements — filtered by industry.',
  })

  const [industry, setIndustry] = useState('All')

  const filtered =
    industry === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.industry === industry)

  return (
    <section
      className="section"
      style={{
        paddingTop: '9rem',
        minHeight: '70vh',
      }}
    >
      <div className="container">
        <SectionHeader
          eyebrow="PROOF, NOT PROMISES"
          title="Results, not a highlight reel."
          body="Real outcomes from real engagements — filtered by industry."
        />

        <div
          className="d-flex flex-wrap"
          role="tablist"
          aria-label="Filter case studies by industry"
          style={{
            gap: 10,
            marginTop: '2.4rem',
          }}
        >
          {INDUSTRIES.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={industry === tab}
              onClick={() => setIndustry(tab)}
              className="btn-vg"
              style={{
                background:
                  industry === tab ? 'var(--ink)' : 'transparent',
                color:
                  industry === tab ? 'var(--paper)' : 'var(--ink)',
                border: '1px solid rgba(10,14,23,0.18)',
                padding: '0.55rem 1.1rem',
                fontSize: '0.85rem',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className="row"
          style={{
            marginTop: '3rem',
          }}
        >
          {filtered.map((c) => (
            <div
              className="col-12 col-lg-8"
              key={c.id}
              style={{
                marginBottom: '2rem',
              }}
            >
              <article
                style={{
                  border: '1px solid rgba(10,14,23,0.14)',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  background: 'var(--paper)',
                }}
              >
                {/* Industry */}
                <div
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--blue)',
                    marginBottom: '1rem',
                    fontWeight: 600,
                  }}
                >
                  {c.industry}
                </div>

                {/* Client */}
                <h3
                  style={{
                    marginBottom: '0.8rem',
                    fontSize: '1.8rem',
                  }}
                >
                  {c.client}
                </h3>

                {/* Main title */}
                <h2
                  style={{
                    fontSize: '2rem',
                    lineHeight: 1.15,
                    marginBottom: '1rem',
                    color: 'var(--ink)',
                  }}
                >
                  {c.title}
                </h2>

                {/* Description */}
                <p
                  style={{
                    color: 'rgba(10,14,23,0.68)',
                    lineHeight: 1.7,
                    marginBottom: '1.8rem',
                  }}
                >
                  {c.description}
                </p>

                {/* Services */}
                <div
                  className="d-flex flex-wrap"
                  style={{
                    gap: '8px',
                    marginBottom: '2.2rem',
                  }}
                >
                  {c.services.map((service) => (
                    <span
                      key={service}
                      style={{
                        border: '1px solid rgba(10,14,23,0.15)',
                        borderRadius: '999px',
                        padding: '0.45rem 0.8rem',
                        fontSize: '0.78rem',
                        color: 'var(--ink)',
                      }}
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Challenge */}
                <div style={{ marginBottom: '1.8rem' }}>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--blue)',
                      marginBottom: '0.5rem',
                      fontWeight: 600,
                    }}
                  >
                    The Challenge
                  </div>

                  <p
                    style={{
                      margin: 0,
                      lineHeight: 1.7,
                      color: 'rgba(10,14,23,0.72)',
                    }}
                  >
                    {c.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div style={{ marginBottom: '1.8rem' }}>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--blue)',
                      marginBottom: '0.5rem',
                      fontWeight: 600,
                    }}
                  >
                    What We Built
                  </div>

                  <p
                    style={{
                      margin: 0,
                      lineHeight: 1.7,
                      color: 'rgba(10,14,23,0.72)',
                    }}
                  >
                    {c.solution}
                  </p>
                </div>

                {/* Outcome */}
                <div
                  style={{
                    paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(10,14,23,0.12)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--blue)',
                      marginBottom: '0.5rem',
                      fontWeight: 600,
                    }}
                  >
                    The Outcome
                  </div>

                  <p
                    style={{
                      margin: 0,
                      lineHeight: 1.7,
                      color: 'var(--ink)',
                      fontWeight: 500,
                    }}
                  >
                    {c.outcome}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}