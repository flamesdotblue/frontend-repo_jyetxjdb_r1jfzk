import { Users, UserCheck, ClipboardList, CalendarCheck, CreditCard } from 'lucide-react'

function Stat({ icon: Icon, label, value, accent }) {
  return (
    <div className={`rounded-xl border p-5 bg-white ${accent}`}>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
          <p className="text-xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  )
}

function AdminPreview() {
  return (
    <section id="admin" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Admin overview</h2>
            <p className="text-gray-600 mt-1">Monitor experts, customers, listings, bookings and payments</p>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700">Go to dashboard</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          <Stat icon={Users} label="Experts" value="248" />
          <Stat icon={UserCheck} label="Customers" value="8,932" />
          <Stat icon={ClipboardList} label="Listings" value="1,142" />
          <Stat icon={CalendarCheck} label="Bookings (30d)" value="2,318" />
          <Stat icon={CreditCard} label="Payments (30d)" value="$92,440" />
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl border bg-white p-5">
            <h3 className="font-semibold text-gray-900">Recent activity</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>• New listing approved: Career Coaching by Rahul</li>
              <li>• Booking confirmed: Aisha with Neha — 10:00 AM</li>
              <li>• Payment captured: $60 — Booking #2391</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white p-5">
            <h3 className="font-semibold text-gray-900">Notifications & emails</h3>
            <p className="mt-2 text-sm text-gray-600">
              Customers and experts receive instant app notifications and email updates for key events: new bookings, approval/decline, reminders, and receipts.
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border p-3">• Booking confirmations</div>
              <div className="rounded-lg border p-3">• 24h reminders</div>
              <div className="rounded-lg border p-3">• Status changes</div>
              <div className="rounded-lg border p-3">• Payment receipts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminPreview
