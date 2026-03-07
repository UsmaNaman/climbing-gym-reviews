import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getGymById } from '@/lib/queries'
import GymTypeBadge from '@/components/GymTypeBadge'

const TYPE_DETAIL: Record<string, { label: string; desc: string }> = {
  bouldering: {
    label: 'Bouldering',
    desc: 'Bouldering involves climbing shorter walls (typically up to 4–5 metres) without ropes or harnesses. Problems are graded using the V-scale or Fontainebleau system, and climbers use crash pads for protection. It is an excellent way to build strength, technique, and problem-solving skills.',
  },
  lead: {
    label: 'Lead Climbing',
    desc: 'Lead climbing requires a harness and rope. The climber clips the rope into pre-placed protection as they ascend, meaning a fall results in dropping only a short distance past the last clip. It demands route-reading ability, endurance, and comfort with exposure on taller walls.',
  },
  both: {
    label: 'Bouldering & Lead Climbing',
    desc: 'This gym offers both bouldering and roped climbing. Bouldering (rope-free, up to ~5m) develops raw power and technique on shorter problems, while lead and top-rope climbing on taller walls builds endurance, route-reading, and confidence at height. Together they cover the full spectrum of indoor climbing.',
  },
}

export default function GymPage({ params }: { params: { id: string } }) {
  const gymId = Number(params.id)
  const gym = getGymById(gymId)

  if (!gym) notFound()

  const facilities: string[] = gym.training_facilities
    ? JSON.parse(gym.training_facilities)
    : []

  const climbingInfo = TYPE_DETAIL[gym.type]

  const mapSrc = gym.lat && gym.lng
    ? `https://www.openstreetmap.org/export/embed.html?bbox=${gym.lng - 0.01}%2C${gym.lat - 0.007}%2C${gym.lng + 0.01}%2C${gym.lat + 0.007}&layer=mapnik&marker=${gym.lat}%2C${gym.lng}`
    : null

  return (
    <>
      {/* Hero */}
      <section className="relative bg-zinc-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`https://picsum.photos/seed/gym-${gymId}/1400/500`}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-10 pb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-zinc-500 hover:text-orange-400 transition-colors mb-8"
          >
            ← All Gyms
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <GymTypeBadge type={gym.type} />
            <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">{gym.area}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-4">
            {gym.name}
          </h1>

          <p className="text-zinc-500 text-sm mb-6">{gym.address}</p>

          {gym.website && (
            <a
              href={gym.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-widest uppercase text-orange-400 hover:text-orange-300 transition-colors"
            >
              Website ↗
            </a>
          )}
        </div>

        <div className={`relative z-10 h-1 ${
          gym.type === 'bouldering' ? 'bg-gradient-to-r from-orange-500 to-amber-400' :
          gym.type === 'lead' ? 'bg-gradient-to-r from-blue-500 to-blue-400' :
          'bg-gradient-to-r from-emerald-500 to-emerald-400'
        }`} />
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-14">

        {/* History */}
        {gym.history && (
          <section>
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-400 mb-5">History</h2>
            <p className="text-zinc-700 leading-relaxed text-[15px]">{gym.history}</p>
          </section>
        )}

        {/* Climbing Types */}
        <section>
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-400 mb-5">Climbing</h2>
          <div className="bg-white border border-stone-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <GymTypeBadge type={gym.type} />
              <span className="text-sm font-black uppercase tracking-tight text-zinc-900">{climbingInfo.label}</span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">{climbingInfo.desc}</p>
          </div>
        </section>

        {/* Training Facilities */}
        {facilities.length > 0 && (
          <section>
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-400 mb-5">Training Facilities</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {facilities.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-700">
                  <span className="text-orange-400 mt-0.5 shrink-0">◈</span>
                  {f}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Map */}
        {mapSrc && (
          <section>
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-400 mb-5">Location</h2>
            <div className="rounded-xl overflow-hidden border border-stone-200 shadow-sm">
              <iframe
                src={mapSrc}
                width="100%"
                height="380"
                style={{ border: 0, display: 'block' }}
                title={`Map of ${gym.name}`}
                loading="lazy"
              />
            </div>
            <p className="text-xs text-zinc-400 mt-2">{gym.address}</p>
          </section>
        )}
      </div>
    </>
  )
}
