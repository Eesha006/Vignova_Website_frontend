import client from './client'

/** Public — returns only unbooked slots from today forward. */
export const getOpenSlots = () => client.get('/slots').then((res) => res.data)
