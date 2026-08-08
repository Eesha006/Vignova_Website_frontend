import AdminGate from '../admin/AdminGate.jsx'
import AvailabilityForm from '../admin/AvailabilityForm.jsx'
import { useSeo } from '../hooks/useSeo.js'

export default function AdminPage() {
  useSeo({ title: 'Admin' })

  return (
    <section className="section" style={{ paddingTop: '9rem', minHeight: '80vh' }}>
      <AdminGate>
        <div className="container-vg" style={{ maxWidth: 480 }}>
          <div className="eyebrow">Admin</div>
          <h1 style={{ fontSize: '2rem' }}>Open up available time</h1>
          <AvailabilityForm />
        </div>
      </AdminGate>
    </section>
  )
}
