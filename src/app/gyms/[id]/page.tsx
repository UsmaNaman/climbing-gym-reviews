import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getGymById, getReviewsByGymId } from '@/lib/queries'
import GymTypeBadge from '@/components/GymTypeBadge'
import StarDisplay from '@/components/StarDisplay'
import ReviewCard from '@/components/ReviewCard'
import ReviewForm from '@/components/ReviewForm'

export default function GymPage({ params }: { params: { id: string } }) {
  const gymId = Number(params.id)
  const gym = getGymById(gymId)

  if (!gym) notFound()

  const reviews = getReviewsByGymId(gymId)
  const avgRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : null

  return (
    <div className="max-w-3xl">
      <Link href="/" className="text-sm text-blue-600 hover:text-blue-800 mb-6 inline-block">
        ← All gyms
      </Link>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h1 className="text-2xl font-bold text-gray-900">{gym.name}</h1>
          <GymTypeBadge type={gym.type} />
        </div>
        <p className="text-gray-600 mb-1">{gym.area}</p>
        <p className="text-gray-500 text-sm mb-4">{gym.address}</p>

        <div className="flex items-center gap-4">
          <StarDisplay rating={avgRating} />
          <span className="text-sm text-gray-400">
            {reviews.length === 0
              ? 'No reviews yet'
              : `${reviews.length} review${reviews.length === 1 ? '' : 's'}`}
          </span>
        </div>

        {gym.website && (
          <a
            href={gym.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-blue-600 hover:text-blue-800"
          >
            Visit website →
          </a>
        )}
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-gray-400 text-sm">No reviews yet. Be the first!</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} gymId={gymId} />
            ))}
          </div>
        )}
      </section>

      <section>
        <ReviewForm gymId={gymId} />
      </section>
    </div>
  )
}
