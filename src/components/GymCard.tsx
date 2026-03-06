import Link from 'next/link'
import { GymWithStats } from '@/lib/queries'
import GymTypeBadge from './GymTypeBadge'
import StarDisplay from './StarDisplay'

export default function GymCard({ gym }: { gym: GymWithStats }) {
  return (
    <Link href={`/gyms/${gym.id}`} className="block group">
      <div className="bg-white border border-stone-200 rounded-lg overflow-hidden hover:border-orange-400 hover:shadow-lg transition-all duration-200 h-full flex flex-col">
        {/* Top accent bar by type */}
        <div className={`h-1 w-full ${
          gym.type === 'bouldering' ? 'bg-orange-400' :
          gym.type === 'lead' ? 'bg-blue-400' :
          'bg-emerald-400'
        }`} />

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h2 className="text-base font-black uppercase tracking-tight text-zinc-900 leading-tight group-hover:text-orange-500 transition-colors">
              {gym.name}
            </h2>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{gym.area}</span>
            <span className="text-zinc-200">·</span>
            <GymTypeBadge type={gym.type} />
          </div>

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
