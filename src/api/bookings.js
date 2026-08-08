import client from './client'

/**
 * Public — atomically claims a slot. Throws with err.response.status === 409
 * if the slot was booked by someone else first; callers should catch that
 * specifically and prompt the visitor to pick another time.
 */
export const createBooking = (payload) => client.post('/bookings', payload).then((res) => res.data)
