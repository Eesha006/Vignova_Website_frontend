import { useState } from 'react'
import { openAvailability } from '../api/availability.js'
import { useAuth } from '../hooks/useAuth.js'

export default function AvailabilityForm() {
  const { accessToken, logout } = useAuth()
  const [form, setForm] = useState({ date: '', startTime: '', endTime: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error | unauthorized
  const [createdCount, setCreatedCount] = useState(0)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const created = await openAvailability(form, accessToken)
      setCreatedCount(created.length)
      setStatus('success')
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setStatus('unauthorized')
        logout()
      } else {
        setStatus('error')
      }
    }
  }

  return (
    <>
      <p className="lede" style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
        Pick a date and a window (e.g. today, 7:00 PM to 9:00 PM). It'll be sliced into
        30-minute slots and appear on the public booking page immediately.
      </p>

      {status === 'unauthorized' && (
        <p style={{ color: '#B3462C', marginTop: '1rem' }}>
          Your session expired. Please sign in again.
        </p>
      )}

      <form onSubmit={handleSubmit} className="card-vg" style={{ marginTop: '1.6rem' }}>
        <div style={{ marginBottom: '1.1rem' }}>
          <label htmlFor="avail-date" className="mono-label d-block" style={{ marginBottom: 6 }}>Date</label>
          <input id="avail-date" required type="date" name="date" value={form.date} onChange={handleChange} className="form-control" />
        </div>
        <div style={{ marginBottom: '1.1rem' }}>
          <label htmlFor="avail-start" className="mono-label d-block" style={{ marginBottom: 6 }}>From</label>
          <input id="avail-start" required type="time" name="startTime" value={form.startTime} onChange={handleChange} className="form-control" />
        </div>
        <div style={{ marginBottom: '1.4rem' }}>
          <label htmlFor="avail-end" className="mono-label d-block" style={{ marginBottom: 6 }}>To</label>
          <input id="avail-end" required type="time" name="endTime" value={form.endTime} onChange={handleChange} className="form-control" />
        </div>

        <button type="submit" disabled={status === 'submitting'} className="btn-vg btn-primary w-100">
          {status === 'submitting' ? 'Opening…' : 'Open This Window'}
        </button>

        {status === 'success' && (
          <p style={{ color: '#3A7D5C', marginTop: '1rem' }}>
            Done — {createdCount} slot{createdCount === 1 ? '' : 's'} opened and live on the booking page.
          </p>
        )}
        {status === 'error' && (
          <p style={{ color: '#B3462C', marginTop: '1rem' }}>
            Something went wrong. Check the times don't overlap slots you've already opened.
          </p>
        )}
      </form>
    </>
  )
}
