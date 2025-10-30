import { Calendar, Bell, Mail, Shield, User } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold">C</div>
          <span className="text-gray-900 font-semibold tracking-tight">Consultly</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#experts" className="hover:text-gray-900 transition-colors">Experts</a>
          <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How it works</a>
          <a href="#admin" className="hover:text-gray-900 transition-colors">Admin</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#notifications" className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md border text-gray-700 hover:bg-gray-50">
            <Bell className="h-4 w-4" />
            <span className="hidden md:inline">Notifications</span>
          </a>
          <a href="#contact" className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md border text-gray-700 hover:bg-gray-50">
            <Mail className="h-4 w-4" />
            <span className="hidden md:inline">Contact</span>
          </a>
          <a href="#login" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-900 text-white hover:bg-black">
            <User className="h-4 w-4" />
            <span className="hidden md:inline">Sign in</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
