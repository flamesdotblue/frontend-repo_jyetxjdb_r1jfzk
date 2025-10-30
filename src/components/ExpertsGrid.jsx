import { Star, Calendar, Briefcase } from 'lucide-react'

const experts = [
  { id: 1, name: 'Dr. Aisha Khan', field: 'Psychology', rating: 4.9, price: 60 },
  { id: 2, name: 'Rahul Mehta', field: 'Career Coach', rating: 4.8, price: 40 },
  { id: 3, name: 'Sophia Lee', field: 'Nutritionist', rating: 4.7, price: 45 },
  { id: 4, name: 'Daniel Martinez', field: 'Legal Advisor', rating: 4.6, price: 80 },
  { id: 5, name: 'Priya Patel', field: 'Therapist', rating: 4.9, price: 70 },
  { id: 6, name: 'Alex Johnson', field: 'Financial Planner', rating: 4.5, price: 55 },
]

function ExpertsGrid() {
  return (
    <section id="experts" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured experts</h2>
            <p className="text-gray-600 mt-1">Handpicked professionals ready to help</p>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700">View all</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experts.map((ex) => (
            <div key={ex.id} className="group border rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white flex items-center justify-center font-semibold">
                  {ex.name.split(' ').map(w => w[0]).slice(0,2).join('')}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{ex.name}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <Briefcase className="h-4 w-4 text-gray-400" /> {ex.field}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{ex.rating}</span>
                </div>
                <div className="text-sm text-gray-700">
                  ${'{'}ex.price{'}'}/30 min
                </div>
              </div>
              <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black">
                <Calendar className="h-4 w-4" /> Book session
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertsGrid
