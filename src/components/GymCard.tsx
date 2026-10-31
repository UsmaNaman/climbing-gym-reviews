import Link from 'next/link'
import { Gym } from '@/lib/queries'
import GymTypeBadge from './GymTypeBadge'

export default function GymCard({ gym }: { gym: Gym }) {

  return (
    <Link href={`/gyms/${gym.slug}`} className="block group">
      <div className="bg-white border border-stone-200 rounded-lg overflow-hidden hover:border-orange-400 hover:shadow-lg transition-all duration-200 h-full flex flex-col">
        {/* Gym image */}
        <div className="relative h-40 overflow-hidden bg-zinc-900">
          {gym.photo ? (
            <img
              src={gym.photo.src}
              alt={`Inside ${gym.name}`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div
              className={`w-full h-full flex items-end justify-end p-3 bg-gradient-to-br ${
                gym.type === 'bouldering' ? 'from-orange-500 to-amber-600' : 'from-emerald-500 to-teal-700'
              }`}
            >
              <span className="text-white/25 font-black uppercase text-3xl leading-none tracking-tight text-right">
                {gym.area}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-2 left-3">
            <GymTypeBadge type={gym.type} />
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h2 className="text-base font-black uppercase tracking-tight text-zinc-900 leading-tight group-hover:text-orange-500 transition-colors mb-1">
            {gym.name}
          </h2>
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">{gym.area}</p>
          <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3 mb-4">{gym.about}</p>
          <p className="text-xs text-zinc-300 mt-auto pt-3 border-t border-stone-100 line-clamp-1">{gym.address}</p>
        </div>
      </div>
    </Link>
  )
}
