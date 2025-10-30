import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExpertsGrid from './components/ExpertsGrid'
import AdminPreview from './components/AdminPreview'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section id="how-it-works" className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">How it works</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-xl border p-5">
                <p className="font-semibold text-gray-800">1. Experts list</p>
                <p className="text-sm text-gray-600 mt-1">Professionals publish services with pricing and availability.</p>
              </div>
              <div className="rounded-xl border p-5">
                <p className="font-semibold text-gray-800">2. Customers book</p>
                <p className="text-sm text-gray-600 mt-1">Pick a time slot and confirm with secure checkout.</p>
              </div>
              <div className="rounded-xl border p-5">
                <p className="font-semibold text-gray-800">3. Notifications</p>
                <p className="text-sm text-gray-600 mt-1">App alerts and emails go to both sides instantly.</p>
              </div>
              <div className="rounded-xl border p-5">
                <p className="font-semibold text-gray-800">4. Admin oversight</p>
                <p className="text-sm text-gray-600 mt-1">Track listings, bookings, users and payments in one place.</p>
              </div>
            </div>
          </div>
        </section>
        <ExpertsGrid />
        <AdminPreview />
      </main>
      <footer className="border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Consultly. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
