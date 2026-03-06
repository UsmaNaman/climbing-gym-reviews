import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getGymById, getReviewById } from '@/lib/queries'
import EditReviewForm from '@/components/EditReviewForm'

export default function EditReviewPage({
  params,
}: {
  params: { id: string; reviewId: string }
}) {
  const gymId = Number(params.id)
  const reviewId = Number(params.reviewId)

  const gym = getGymById(gymId)
  const review = getReviewById(reviewId)

  if (!gym || !review || review.gym_id !== gymId) notFound()

  return (
    <>
      <section className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 pt-10 pb-12">
          <Link
            href={`/gyms/${gymId}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-zinc-500 hover:text-orange-400 transition-colors mb-8"
          >
            ← {gym.name}
          </Link>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
            Edit Review
          </h1>
        </div>
        <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600" />
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 max-w-2xl">
        <EditReviewForm review={review} gymId={gymId} />
      </div>
    </>
  )
}
