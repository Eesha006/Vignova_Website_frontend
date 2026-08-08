import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSeo } from '../hooks/useSeo.js'
import { getPostBySlug } from '../api/blog.js'
import EmptyState from '../components/EmptyState.jsx'

export default function BlogPostPage() {
  const { slug } = useParams()

  const [post, setPost] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    setStatus('loading')
    setPost(null)

    getPostBySlug(slug)
      .then((data) => {
        setPost(data)
        setStatus('ready')
      })
      .catch(() => {
        setPost(null)
        setStatus('notFound')
      })
  }, [slug])

  useSeo({
    title: post ? post.title : 'Blog',
    description: post
      ? post.excerpt
      : 'Research notes from Vignova Marketing.',
  })

  if (status === 'loading') {
    return (
      <section
        className="section"
        style={{
          paddingTop: '9rem',
          minHeight: '70vh',
        }}
      >
        <div className="container-vg">
          <p className="lede">Loading article…</p>
        </div>
      </section>
    )
  }

  if (status === 'notFound') {
    return (
      <section
        className="section"
        style={{
          paddingTop: '9rem',
          minHeight: '70vh',
        }}
      >
        <div className="container-vg">
          <EmptyState
            title="That article isn't available."
            body="It may have been moved, or it doesn't exist."
            ctaLabel="Back to the Blog"
            ctaTo="/resources/blog"
          />
        </div>
      </section>
    )
  }

  return (
    <article
      className="section"
      style={{
        paddingTop: '9rem',
        minHeight: '70vh',
      }}
    >
      <div
        className="container-vg"
        style={{
          maxWidth: '780px',
        }}
      >
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mono-label"
          style={{
            marginBottom: '1.8rem',
            lineHeight: 1.6,
          }}
        >
          <Link
            to="/"
            style={{
              color: 'var(--slate)',
            }}
          >
            Home
          </Link>

          {' / '}

          <Link
            to="/resources/blog"
            style={{
              color: 'var(--slate)',
            }}
          >
            Blog
          </Link>

          {' / '}

          <span style={{ color: 'var(--ink)' }}>
            {post.title}
          </span>
        </nav>

        {/* Category */}
        {post.category && (
          <div
            className="eyebrow"
            style={{
              marginBottom: '1rem',
            }}
          >
            {post.category}
          </div>
        )}

        {/* Title */}
        <h1>{post.title}</h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p
            className="lede"
            style={{
              marginTop: '1.2rem',
              maxWidth: '65ch',
            }}
          >
            {post.excerpt}
          </p>
        )}

        {/* Reading time */}
        {post.readTime && (
          <div
            className="mono-label"
            style={{
              marginTop: '1rem',
            }}
          >
            {post.readTime}
          </div>
        )}

        {/* Article body */}
        <div
          className="blog-article-body"
          style={{
            marginTop: '3rem',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--ink)',
          }}
        >
          {post.body}
        </div>

        {/* Author */}
        {post.author && (
          <div
            className="card-vg"
            style={{
              marginTop: '4rem',
            }}
          >
            <span className="mono-label">
              Written by
            </span>

            <h3
              style={{
                marginTop: '0.5rem',
                fontSize: '1.05rem',
              }}
            >
              {post.author.name}
            </h3>

            {post.author.bio && (
              <p
                className="lede"
                style={{
                  fontSize: '0.9rem',
                  marginTop: '0.4rem',
                }}
              >
                {post.author.bio}
              </p>
            )}
          </div>
        )}

        {/* Back to resources */}
        <div
          style={{
            marginTop: '3rem',
          }}
        >
          <Link
            to="/resources/blog"
            className="btn-vg btn-outline"
          >
            ← Back to Resources
          </Link>
        </div>
      </div>
    </article>
  )
}