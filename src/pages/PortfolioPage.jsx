import { useState } from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { useSeo } from '../hooks/useSeo.js'
import project1 from "../assets/portfolio/project1.png";
import project2 from "../assets/portfolio/project2.jpeg";
import project3 from "../assets/portfolio/project3.jpeg";
import project4 from "../assets/portfolio/project4.jpeg";
import project5 from "../assets/portfolio/project5.jpeg";

const TYPES = ['All', 'Content', 'Ad Creative', 'Websites', 'Funnels']

// No portfolio items exist yet — intentionally empty, see EmptyState below.

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Physiotherapy Website",
    type: "Websites",
    image: project1,
    description:
      "A modern, responsive physiotherapy website with appointment booking and a seamless user experience.",
  },
  {
    id: 2,
    title: "Becoming You × Kava Cafe",
    type: "Ad Creative",
    image: project2,
    description:
  "Event photography and social media content created for Becoming You's self-awareness programme hosted at Kava Cafe.",
  },
  {
  id: 3,
  title: "The Art of Self Discovery",
  type: "Content",
  image: project3,
  description:
    "Instagram promotional post designed for Becoming You's self-awareness workshop in collaboration with Kava Cafe.",
},
{
  id: 4,
  title: "Ayushman Physio Offer Campaign",
  type: "Content",
  image: project4,
  description:
    "Promotional social media creative highlighting consultation offers for Ayushman Physio Rehabilitation Center.",
},
{
  id: 5,
  title: "Ayushman Physio Fit post",
  type: "Content",
  image: project5,
  description:
    "Promotional social media post",
},
];
export default function PortfolioPage() {
  useSeo({
    title: 'Portfolio',
    description: 'A look at the craft behind Vignova\u2019s content, ads, websites and funnels.',
  })
  const [type, setType] = useState('All')

  const filtered = type === 'All' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((p) => p.type === type)

  return (
    <section className="section" style={{ paddingTop: '9rem', minHeight: '70vh' }}>
      <div className="container-vg">
        <SectionHeader as="h1" eyebrow="Craft, Shown" title="What the work actually looks like." />

        <div className="d-flex flex-wrap" role="tablist" aria-label="Filter portfolio by type" style={{ gap: 10, marginTop: '2.4rem' }}>
          {TYPES.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={type === tab}
              onClick={() => setType(tab)}
              className="btn-vg"
              style={{
                background: type === tab ? 'var(--ink)' : 'transparent',
                color: type === tab ? 'var(--paper)' : 'var(--ink)',
                border: '1px solid rgba(10,14,23,0.18)',
                padding: '0.55rem 1.1rem',
                fontSize: '0.85rem',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            title="New work is being added soon."
            body="Book a consultation and we'll walk you through recent projects directly."
            ctaLabel="Book a Consultation"
            ctaTo="/book"
          />
        ) : (
          <div className="row" style={{ marginTop: '2.5rem' }}>
            {filtered.map((p) => (
              <div className="col-12 col-md-6 col-lg-4 mb-5" key={p.id}>
                <div className="portfolio-card">

                  <img
                    src={p.image}
                    alt={p.title}
                    className="portfolio-image"
                  />

                  <div className="portfolio-content">
                    <p className="portfolio-category">
                      {p.type}
                    </p>

                    <h3 className="portfolio-title">
                      {p.title}
                    </h3>

                    <p className="portfolio-description">
                      {p.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
