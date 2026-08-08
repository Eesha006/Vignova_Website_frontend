import client from './client'

/**
 * Admin-only — opens a date/time window, sliced into 30-minute slots.
 * Requires a valid admin JWT sent as "Authorization: Bearer <token>" —
 * replaces the old shared X-Admin-Token header now that the backend
 * uses Spring Security + JWT (see context/AdminAuthContext.jsx).
 */
export const openAvailability = (payload, accessToken) =>
  client
    .post('/admin/availability', payload, { headers: { Authorization: `Bearer ${accessToken}` } })
    .then((res) => res.data)
