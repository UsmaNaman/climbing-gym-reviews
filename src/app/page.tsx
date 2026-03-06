import { getAllGymsWithStats } from '@/lib/queries'
import GymCard from '@/components/GymCard'

export default function HomePage() {
  const gyms = getAllGymsWithStats()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">London Climbing Gyms</h1>
        <p className="text-gray-500">{gyms.length} gyms — click to view details and leave a review</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gyms.map((gym) => (
          <GymCard key={gym.id} gym={gym} />
        ))}
      </div>
    </div>
  )
}
