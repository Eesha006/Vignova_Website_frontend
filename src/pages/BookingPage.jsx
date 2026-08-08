import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getOpenSlots } from '../api/slots.js'
import { createBooking } from '../api/bookings.js'
import { useSeo } from '../hooks/useSeo.js'

const TIME_FMT = { hour: 'numeric', minute: '2-digit', hour12: true }
const DATE_FMT = { weekday: 'short', month: 'short', day: 'numeric' }

export default function BookingPage() {
  useSeo({ title: 'Book a Consultation', description: 'Pick a time that works for you — no back-and-forth needed.' })
  const [slots, setSlots] = useState([])
  const [status, setStatus] = useState('loading') // loading | ready | error
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedSlotId, setSelectedSlotId] = useState(null)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', industry: 'Local Business' })
  const [submitStatus, setSubmitStatus] = useState('idle') // idle | submitting | success | conflict | error

  const loadSlots = () => {
    setStatus('loading')
    getOpenSlots()
      .then((data) => {
        setSlots(data)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }

  useEffect(() => {
    loadSlots()
  }, [])

  const slotsByDate = useMemo(() => {
    const grouped = {}
    for (const slot of slots) {
      if (!grouped[slot.date]) grouped[slot.date] = []
      grouped[slot.date].push(slot)
    }
    return grouped
  }, [slots])

  const availableDates = Object.keys(slotsByDate).sort()

  useEffect(() => {
    if (!selectedDate && availableDates.length > 0) {
      setSelectedDate(availableDates[0])
    }
  }, [availableDates, selectedDate])

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedSlotId) return
    setSubmitStatus('submitting')
    try {
      await createBooking({ slotId: selectedSlotId, ...form })
      setSubmitStatus('success')
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setSubmitStatus('conflict')
        setSelectedSlotId(null)
        loadSlots()
      } else {
        setSubmitStatus('error')
      }
    }
  }

  const formatTime = (t) =>
    new Date(`2000-01-01T${t}`).toLocaleTimeString('en-IN', TIME_FMT)
  const formatDate = (d) => new Date(`${d}T00:00:00`).toLocaleDateString('en-IN', DATE_FMT)

  if (submitStatus === 'success') {
    return (
      <section className="section section-dark" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', paddingTop: '9rem' }}>
        <div className="container-vg">
          <div className="eyebrow">Confirmed</div>
          <h1 style={{ color: '#f7f6f3', maxWidth: '20ch' }}>You're booked. Check your email.</h1>
          <p className="lede" style={{ marginTop: '1.4rem', maxWidth: '48ch' }}>
            We've sent a confirmation to {form.email}. You'll get the Google Meet
            link again on the morning of the call, and a reminder an hour before
            it starts.
          </p>
          <Link to="/" className="btn-vg btn-outline" style={{ marginTop: '2rem', display: 'inline-flex' }}>
            Back to Home
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section" style={{ paddingTop: '9rem', minHeight: '80vh' }}>
      <div className="container-vg">
        <div className="eyebrow">Book a Consultation</div>
        <h1>Pick a time that works for you.</h1>
        <p className="lede" style={{ marginTop: '1rem' }}>
          These are the only times currently open — once you book one, it's yours
          alone.
        </p>

        {status === 'loading' && (
          <p className="lede" style={{ marginTop: '2.5rem' }}>Loading available times…</p>
        )}

        {status === 'error' && (
          <p className="lede" style={{ marginTop: '2.5rem', color: '#B3462C' }}>
            Couldn't load available times right now. Please refresh, or email us
            directly at vignovamarketing@gmail.com.
          </p>
        )}

        {status === 'ready' && availableDates.length === 0 && (
          <p className="lede" style={{ marginTop: '2.5rem' }}>
            No open times right now — check back soon, or email us directly at{' '}
            <a href="mailto:vignovamarketing@gmail.com">vignovamarketing@gmail.com</a>.
          </p>
        )}

        {status === 'ready' && availableDates.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginTop: '2.5rem' }}>
            {submitStatus === 'conflict' && (
              <p style={{ color: '#B3462C', marginBottom: '1rem' }}>
                That slot was just taken by someone else — pick another below.
              </p>
            )}

            <div className="d-flex flex-wrap" role="group" aria-label="Select a date" style={{ gap: 10, marginBottom: '1.6rem' }}>
              {availableDates.map((date) => (
                <button
                  key={date}
                  onClick={() => {
                    setSelectedDate(date)
                    setSelectedSlotId(null)
                  }}
                  aria-pressed={selectedDate === date}
                  className="btn-vg"
                  style={{
                    background: selectedDate === date ? 'var(--ink)' : 'transparent',
                    color: selectedDate === date ? 'var(--paper)' : 'var(--ink)',
                    border: '1px solid rgba(10,14,23,0.18)',
                    padding: '0.6rem 1.2rem',
                    fontSize: '0.85rem',
                  }}
                >
                  {formatDate(date)}
                </button>
              ))}
            </div>

            {selectedDate && (
              <div className="d-flex flex-wrap" role="group" aria-label="Select a time" style={{ gap: 10, marginBottom: '2.4rem' }}>
                {slotsByDate[selectedDate].map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => setSelectedSlotId(slot.id)}
                    aria-pressed={selectedSlotId === slot.id}
                    className="btn-vg"
                    style={{
                      background: selectedSlotId === slot.id ? 'var(--blue-deep)' : 'transparent',
                      color: selectedSlotId === slot.id ? 'var(--paper)' : 'var(--ink)',
                      border: `1px solid ${selectedSlotId === slot.id ? 'var(--blue-deep)' : 'rgba(10,14,23,0.18)'}`,
                      padding: '0.6rem 1.2rem',
                      fontSize: '0.85rem',
                    }}
                  >
                    {formatTime(slot.startTime)}
                  </button>
                ))}
              </div>
            )}

            {selectedSlotId && (
              <motion.form
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="card-vg"
                style={{ maxWidth: 560 }}
              >
                <div className="row">
                  <div className="col-12 col-sm-6" style={{ marginBottom: '1.1rem' }}>
                    <label htmlFor="booking-name" className="mono-label d-block" style={{ marginBottom: 6 }}>Name</label>
                    <input id="booking-name" required name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Your full name" />
                  </div>
                  <div className="col-12 col-sm-6" style={{ marginBottom: '1.1rem' }}>
                    <label htmlFor="booking-company" className="mono-label d-block" style={{ marginBottom: 6 }}>Company</label>
                    <input id="booking-company" name="company" value={form.company} onChange={handleChange} className="form-control" placeholder="Business name" />
                  </div>
                  <div className="col-12 col-sm-6" style={{ marginBottom: '1.1rem' }}>
                    <label htmlFor="booking-email" className="mono-label d-block" style={{ marginBottom: 6 }}>Email</label>
                    <input id="booking-email" required type="email" name="email" value={form.email} onChange={handleChange} className="form-control" placeholder="you@company.com" />
                  </div>
                  <div className="col-12 col-sm-6" style={{ marginBottom: '1.1rem' }}>
                    <label htmlFor="booking-phone" className="mono-label d-block" style={{ marginBottom: 6 }}>Phone</label>
                    <input id="booking-phone" name="phone" value={form.phone} onChange={handleChange} className="form-control" placeholder="+91" />
                  </div>
                  <div className="col-12" style={{ marginBottom: '1.4rem' }}>
                    <label htmlFor="booking-industry" className="mono-label d-block" style={{ marginBottom: 6 }}>Industry</label>
                    <select id="booking-industry" name="industry" value={form.industry} onChange={handleChange} className="form-select">
                      <option>Local Business</option>
                      <option>Small & Medium Business</option>
                      <option>Healthcare Clinic</option>
                      <option>Restaurant & Café</option>
                      <option>Gym & Fitness Business</option>
                      <option>Salon & Beauty Brand</option>
                      <option>Real Estate</option>
                      <option>Educational Institution</option>
                      <option>Tech Startup</option>
                      <option>Personal Brand</option>
                      <option>Professional Service Provider</option>
                    </select>
                  </div>
                </div>

                <button type="submit" disabled={submitStatus === 'submitting'} className="btn-vg btn-primary w-100">
                  {submitStatus === 'submitting' ? 'Booking…' : `Confirm ${formatTime(slotsByDate[selectedDate].find((s) => s.id === selectedSlotId)?.startTime)} on ${formatDate(selectedDate)} →`}
                </button>

                {submitStatus === 'error' && (
                  <p style={{ color: '#B3462C', marginTop: '1rem' }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </motion.form>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
