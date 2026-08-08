import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import { useSeo } from '../hooks/useSeo.js'

const BLOGS = [
  {
    slug: 'social-media-research',
    title: 'Inside Our Social Media Research Process',
    description:
      'How we decide what to post before we decide what to post.',
  },
  {
    slug: 'buyer-path-framework',
    title: 'The Buyer-Path Framework Behind Our Content Strategy',
    description:
      'Why we build content around buyer decisions instead of weekly themes.',
  },
  {
    slug: 'reel-script-framework',
    title: 'What Actually Makes a Reel Get Watched',
    description:
      'The framework behind high-retention reels and scroll-stopping hooks.',
  },
  {
    slug: 'meta-ads',
    title: 'How We Actually Structure a Meta Ads Campaign',
    description:
      'How we build campaigns that focus on business results instead of vanity metrics.',
  },
  {
    slug: 'website-philosophy',
    title: 'Our Website Build Philosophy',
    description:
      'Why every website we build starts with conversion before design.',
  },
  {
    slug: 'sales-funnel',
    title: 'Mapping Your Sales Funnel',
    description:
      'Finding the biggest leaks in your customer journey before scaling.',
  },
  {
    slug: 'research-sprint',
    title: 'Inside a Vignova Research Sprint',
    description:
      'The research process behind every strategy we recommend.',
  },
  {
    slug: 'creative-strategy',
    title: 'Keeping Every Channel Telling the Same Story',
    description:
      'Creating one strategic thread across content, ads and websites.',
  },
]

export default function ResourcesPage() {
  useSeo({
    title: 'Resources',
    description:
      "Where Vignova's thinking is made public — research, strategy and insights.",
  })

  return (
    <section
      className="section"
      style={{ paddingTop: '9rem', minHeight: '70vh' }}
    >
      <div className="container">

        <SectionHeader
          eyebrow="Resources"
          title="Insights, frameworks & research."
          intro="Everything we learn while building brands, shared publicly."
        />

        <div className="row" style={{ marginTop: '3rem' }}>
          {BLOGS.map((blog) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={blog.slug}
              style={{ marginBottom: '1.8rem' }}
            >
              <Link
                to={`/resources/blog/${blog.slug}`}
                className="card-vg"
                style={{
                  display: 'block',
                  height: '100%',
                  textDecoration: 'none',
                }}
              >
                <span className="mono-label">ARTICLE</span>

                <h3 style={{ marginTop: '0.8rem' }}>
                  {blog.title}
                </h3>

                <p
                  className="lede"
                  style={{
                    fontSize: '0.92rem',
                    marginTop: '0.8rem',
                  }}
                >
                  {blog.description}
                </p>

                <div
                  style={{
                    marginTop: '1.5rem',
                    fontWeight: 600,
                    fontSize: '.9rem',
                  }}
                >
                  Read Article →
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}