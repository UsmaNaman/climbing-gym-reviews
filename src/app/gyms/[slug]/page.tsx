import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllGyms, getGymBySlug } from '@/lib/queries'
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

export function generateStaticParams() {
  return getAllGyms().map((g) => ({ slug: g.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const gym = getGymBySlug(params.slug)
  return gym ? { title: `${gym.name} · London Climbing`, description: gym.about } : {}
}

export default function GymPage({ params }: { params: { slug: string } }) {
  const gym = getGymBySlug(params.slug)

  if (!gym) notFound()

  const facilities = gym.facilities

  const climbingInfo = TYPE_DETAIL[gym.type]

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${gym.lng - 0.01}%2C${gym.lat - 0.007}%2C${gym.lng + 0.01}%2C${gym.lat + 0.007}&layer=mapnik&marker=${gym.lat}%2C${gym.lng}`

  return (
    <>
      {/* Hero */}
      <section className="relative bg-zinc-950 text-white overflow-hidden">
        {gym.photo && (
          <div className="absolute inset-0">
            <img
              src={gym.photo.src}
              alt={`Inside ${gym.name}`}
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent" />
          </div>
        )}

        {gym.photo && (
          <a
            href={gym.photo.creditUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-4 z-10 text-[10px] text-zinc-400 hover:text-white"
          >
            Photo: {gym.photo.credit}
            {gym.photo.license ? ` · ${gym.photo.license}` : ''}
          </a>
        )}

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

          <a
            href={gym.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold tracking-widest uppercase text-orange-400 hover:text-orange-300 transition-colors"
          >
            Website ↗
          </a>
        </div>

        <div className={`relative z-10 h-1 ${
          gym.type === 'bouldering' ? 'bg-gradient-to-r from-orange-500 to-amber-400' :
          gym.type === 'lead' ? 'bg-gradient-to-r from-blue-500 to-blue-400' :
          'bg-gradient-to-r from-emerald-500 to-emerald-400'
        }`} />
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-14">

        {/* About */}
        <section>
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-400 mb-5">About</h2>
          <p className="text-zinc-700 leading-relaxed text-[15px]">{gym.about}</p>
        </section>

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
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-400 mb-5">Facilities</h2>
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

        {/* Sources */}
        <section>
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-400 mb-3">Sources</h2>
          <ul className="space-y-1">
            {gym.sources.map((src) => (
              <li key={src}>
                <a href={src} target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-orange-500 break-all">
                  {new URL(src).hostname.replace(/^www\./, '')}
                </a>
              </li>
            ))}
          </ul>
          {gym.photo && (
            <p className="text-xs text-zinc-500 mt-3">
              Photo:{' '}
              <a href={gym.photo.creditUrl} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 underline">
                {gym.photo.credit}
              </a>
              {gym.photo.license ? `, ${gym.photo.license} via Wikimedia Commons` : ', from the gym’s website'}
            </p>
          )}
          <p className="text-xs text-zinc-400 mt-3">Details change. Check the gym&apos;s own website before you go.</p>
        </section>
      </div>
    </>
  )
}
