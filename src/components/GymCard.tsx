import Link from 'next/link'
import { GymWithStats } from '@/lib/queries'
import GymTypeBadge from './GymTypeBadge'
import StarDisplay from './StarDisplay'

export default function GymCard({ gym }: { gym: GymWithStats }) {
  return (
    <Link href={`/gyms/${gym.id}`} className="block">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-gray-200 transition-all h-full">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h2 className="text-lg font-semibold text-gray-900 leading-tight">{gym.name}</h2>
          <GymTypeBadge type={gym.type} />
        </div>
        <p className="text-sm text-gray-500 mb-1">{gym.area}</p>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{gym.address}</p>
        <div className="flex items-center justify-between mt-auto">
          <StarDisplay rating={gym.avg_rating} />
          <span className="text-xs text-gray-400">
            {gym.review_count === 0
              ? 'No reviews'
              : `${gym.review_count} review${gym.review_count === 1 ? '' : 's'}`}
          </span>
        </div>
      </div>
    </Link>
  )
}
