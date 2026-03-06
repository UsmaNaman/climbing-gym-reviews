import Link from 'next/link'
import { GymWithStats } from '@/lib/queries'
import GymTypeBadge from './GymTypeBadge'
import StarDisplay from './StarDisplay'

export default function GymCard({ gym }: { gym: GymWithStats }) {
  return (
    <Link href={`/gyms/${gym.id}`} className="block group">
      <div className="bg-white border border-stone-200 rounded-lg overflow-hidden hover:border-orange-400 hover:shadow-lg transition-all duration-200 h-full flex flex-col">
        {/* Gym image */}
        <div className="relative h-40 overflow-hidden bg-zinc-100">
          <img
            src={`https://picsum.photos/seed/gym-${gym.id}/600/320`}
            alt={gym.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-2 left-3">
            <GymTypeBadge type={gym.type} />
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h2 className="text-base font-black uppercase tracking-tight text-zinc-900 leading-tight group-hover:text-orange-500 transition-colors">
              {gym.name}
            </h2>
          </div>

          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">{gym.area}</p>

          <p className="text-xs text-zinc-400 mb-4 line-clamp-1">{gym.address}</p>

          <div className="flex items-center justify-between mt-auto pt-3 border-t border-stone-100">
            <StarDisplay rating={gym.avg_rating} />
            <span className="text-xs font-medium text-zinc-400">
              {gym.review_count === 0
                ? 'No reviews'
                : `${gym.review_count} review${gym.review_count === 1 ? '' : 's'}`}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
