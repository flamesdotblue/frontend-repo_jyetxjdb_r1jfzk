import { Calendar, Shield, CheckCircle2 } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Book trusted experts for 1:1 online consultations
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A modern platform where experts list their services and customers book seamless video consultations. Built-in notifications and email receipts keep everyone in the loop.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#experts" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                <Calendar className="h-5 w-5" />
                Explore experts
              </a>
              <a href="#list" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50">
                <Shield className="h-5 w-5" />
                List your consultation
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border bg-white/70">
                <div className="flex items-center gap-2 text-gray-800 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Verified experts
                </div>
                <p className="text-sm text-gray-500 mt-1">Profiles vetted by our team</p>
              </div>
              <div className="p-4 rounded-lg border bg-white/70">
                <div className="flex items-center gap-2 text-gray-800 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Instant booking
                </div>
                <p className="text-sm text-gray-500 mt-1">Clear calendar availability</p>
              </div>
              <div className="p-4 rounded-lg border bg-white/70">
                <div className="flex items-center gap-2 text-gray-800 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Email notifications
                </div>
                <p className="text-sm text-gray-500 mt-1">Auto updates for both sides</p>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="relative aspect-[4/3] rounded-2xl border bg-white p-4 shadow-sm">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 pointer-events-none" />
              <div className="h-full w-full grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-blue-50 border p-4">
                  <p className="text-sm font-semibold text-blue-700">Booking request</p>
                  <p className="text-xs text-blue-700/70">Sent to: Dr. Aisha</p>
                  <div className="mt-3 text-xs text-blue-700/80">Tue, 10:00 - 10:30</div>
                </div>
                <div className="rounded-xl bg-violet-50 border p-4">
                  <p className="text-sm font-semibold text-violet-700">New email</p>
                  <p className="text-xs text-violet-700/70">Your booking is confirmed</p>
                  <div className="mt-3 text-xs text-violet-700/80">Check your inbox</div>
                </div>
                <div className="rounded-xl bg-white border p-4 col-span-2">
                  <p className="text-sm font-semibold text-gray-800">Realtime notification</p>
                  <p className="text-xs text-gray-500">Expert and customer instantly notified on acceptance</p>
                  <div className="mt-3 h-2 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
