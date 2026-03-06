import { getAllGymsWithStats } from '@/lib/queries'
import GymCard from '@/components/GymCard'
import { GymType } from '@/lib/queries'

const TYPE_LABELS: Record<string, string> = {
  bouldering: 'Bouldering Gyms',
  lead: 'Lead Climbing Gyms',
  both: 'Bouldering + Lead Gyms',
}

export default function HomePage({ searchParams }: { searchParams: { type?: string } }) {
  const allGyms = getAllGymsWithStats()
  const activeType = searchParams.type as GymType | undefined

  const gyms = activeType
    ? allGyms.filter(g => g.type === activeType)
    : allGyms

  const heading = activeType ? TYPE_LABELS[activeType] : 'London Climbing Gyms'

  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <p className="text-orange-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Your personal guide
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight mb-6">
            Find Your<br />
            <span className="text-orange-400">Wall</span><br />
            In London
          </h1>
          <p className="text-zinc-400 text-lg max-w-md">
            {allGyms.length} climbing gyms rated and reviewed. Bouldering, lead, and everything in between.
          </p>
        </div>
        {/* Bottom edge detail */}
        <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600" />
      </section>

      {/* Gym grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl font-black uppercase tracking-tight text-zinc-900">{heading}</h2>
          <span className="text-sm text-zinc-400">{gyms.length} {gyms.length === 1 ? 'gym' : 'gyms'}</span>
        </div>

        {activeType && (
          <a href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-500 hover:text-orange-600 mb-6 transition-colors">
            ← Show all gyms
          </a>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gyms.map((gym) => (
            <GymCard key={gym.id} gym={gym} />
          ))}
        </div>
      </section>
    </>
  )
}
