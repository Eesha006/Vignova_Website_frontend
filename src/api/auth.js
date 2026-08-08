import client from './client'

/**
 * Public — exchanges admin credentials for a JWT access + refresh token
 * pair. AuthController wraps its response in the ApiResponse envelope
 * ({ data, timestamp }), unlike the older booking endpoints — hence the
 * double .data unwrap here.
 */
export const login = (email, password) =>
  client.post('/auth/login', { email, password }).then((res) => res.data.data)
