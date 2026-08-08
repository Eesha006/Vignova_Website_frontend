import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { useSeo } from '../hooks/useSeo.js'
import { getPublishedPosts } from '../api/blog.js'

const PILLAR_COLOR = { Elevate: 'var(--blue)', Engage: 'var(--green)', Empower: 'var(--gold)' }

export default function BlogPage() {
  useSeo({ title: 'Blog', description: 'Research notes and category breakdowns from Vignova Marketing.' })
  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState('loading') // loading | ready | empty | error

  useEffect(() => {
    getPublishedPosts()
      .then((data) => {
        setPosts(data)
        setStatus(data.length === 0 ? 'empty' : 'ready')
      })
      .catch(() => setStatus('empty')) // the Blog module hasn't shipped yet — treat as empty, not broken
  }, [])

  return (
    <section className="section" style={{ paddingTop: '9rem', minHeight: '70vh' }}>
      <div className="container-vg">
        <SectionHeader as="h1" eyebrow="Blog" title="Research notes and category breakdowns." />

        {status === 'loading' && <p className="lede" style={{ marginTop: '2rem' }}>Loading articles…</p>}

        {status === 'empty' && (
          <EmptyState
            title="The first article is on its way."
            body="In the meantime, browse our FAQ or book a consultation."
            ctaLabel="Read the FAQ"
            ctaTo="/resources/faq"
          />
        )}

        {status === 'ready' && (
          <div className="row" style={{ marginTop: '2.5rem' }}>
            {posts.map((post) => (
              <div className="col-12 col-md-6 col-lg-4" key={post.id} style={{ marginBottom: '1.6rem' }}>
                <Link to={`/resources/blog/${post.slug}`} className="card-vg" style={{ display: 'block', height: '100%' }}>
                  <span className="d-flex align-items-center" style={{ gap: 8 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: PILLAR_COLOR[post.category?.pillar] || 'var(--slate-soft)', display: 'inline-block' }} aria-hidden="true" />
                    <span className="mono-label">{post.category?.name}</span>
                  </span>
                  <h3 style={{ marginTop: '0.8rem', fontSize: '1.1rem' }}>{post.title}</h3>
                  <p className="lede" style={{ fontSize: '0.9rem', marginTop: '0.6rem' }}>{post.excerpt}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
