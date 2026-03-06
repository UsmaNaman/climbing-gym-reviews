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
    <>
      {/* Gym hero header */}
      <section className="relative bg-zinc-950 text-white overflow-hidden">
        {/* Background image */}
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

          <div className="flex items-center gap-5">
            <StarDisplay rating={avgRating} />
            <span className="text-zinc-500 text-sm">
              {reviews.length === 0
                ? 'No reviews yet'
                : `${reviews.length} review${reviews.length === 1 ? '' : 's'}`}
            </span>
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
        </div>

        <div className={`relative z-10 h-1 ${
          gym.type === 'bouldering' ? 'bg-gradient-to-r from-orange-500 to-amber-400' :
          gym.type === 'lead' ? 'bg-gradient-to-r from-blue-500 to-blue-400' :
          'bg-gradient-to-r from-emerald-500 to-emerald-400'
        }`} />
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-400 mb-6">
            Reviews
          </h2>
          {reviews.length === 0 ? (
            <p className="text-zinc-400 text-sm">No reviews yet — be the first.</p>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} gymId={gymId} />
              ))}
            </div>
          )}
        </section>

        <section>
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-400 mb-6">
            Add a Review
          </h2>
          <ReviewForm gymId={gymId} />
        </section>
      </div>
    </>
  )
}
