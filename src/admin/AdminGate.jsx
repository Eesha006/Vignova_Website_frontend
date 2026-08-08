import { useState } from 'react'
import { login } from '../api/auth.js'
import { useAuth } from '../hooks/useAuth.js'

/** Wraps any admin-only content behind a real login (email + password),
 * per the backend's move to JWT + BCrypt authentication. */
export default function AdminGate({ children }) {
  const { isAuthenticated, login: setSession } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | error

  if (isAuthenticated) return children

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const loginResponse = await login(email, password)
      setSession(loginResponse)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="container-vg" style={{ maxWidth: 480 }}>
      <div className="eyebrow">Admin</div>
      <h1 style={{ fontSize: '2rem' }}>Sign in</h1>
      <p className="lede" style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
        This page isn't linked from anywhere on the public site. Your session lives only in
        this browser tab — it's never saved.
      </p>
      <form onSubmit={handleSubmit} style={{ marginTop: '1.6rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="admin-email" className="mono-label d-block" style={{ marginBottom: 6 }}>Email</label>
          <input
            id="admin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="you@vignovamarketing.in"
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="admin-password" className="mono-label d-block" style={{ marginBottom: 6 }}>Password</label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="••••••••"
            required
          />
        </div>

        {status === 'error' && (
          <p style={{ color: '#B3462C', marginBottom: '1rem' }}>
            Incorrect email or password.
          </p>
        )}

        <button type="submit" disabled={status === 'submitting'} className="btn-vg btn-primary w-100">
          {status === 'submitting' ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}
