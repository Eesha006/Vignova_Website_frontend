import { createContext, useState } from 'react'

/**
 * Holds the admin's JWT session for the current tab only — deliberately
 * not persisted to localStorage/sessionStorage, so it never outlives
 * the tab. This is Phase 2 of the Application Architecture doc's auth
 * plan (Section 10): a real login (email + password) issuing a JWT,
 * replacing the earlier shared X-Admin-Token header entirely now that
 * the backend has moved to Spring Security + JWT.
 */
export const AdminAuthContext = createContext(null)

export function AdminAuthProvider({ children }) {
  const [session, setSession] = useState(null) // { accessToken, refreshToken, name, role }

  const value = {
    accessToken: session?.accessToken ?? null,
    refreshToken: session?.refreshToken ?? null,
    name: session?.name ?? null,
    role: session?.role ?? null,
    isAuthenticated: Boolean(session?.accessToken),
    login: (loginResponse) => setSession(loginResponse),
    logout: () => setSession(null),
  }

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>
}
