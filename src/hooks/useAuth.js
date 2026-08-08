import { useContext } from 'react'
import { AdminAuthContext } from '../context/AdminAuthContext.jsx'

export function useAuth() {
  const ctx = useContext(AdminAuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within an AdminAuthProvider')
  }
  return ctx
}
