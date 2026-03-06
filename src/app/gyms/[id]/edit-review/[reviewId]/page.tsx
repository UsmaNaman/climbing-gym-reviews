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
    <div className="max-w-2xl">
      <Link
        href={`/gyms/${gymId}`}
        className="text-sm text-blue-600 hover:text-blue-800 mb-6 inline-block"
      >
        ← Back to {gym.name}
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Review</h1>

      <EditReviewForm review={review} gymId={gymId} />
    </div>
  )
}
