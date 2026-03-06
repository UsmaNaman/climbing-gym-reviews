import Link from 'next/link'
import { Review } from '@/lib/queries'
import StarDisplay from './StarDisplay'
import DeleteReviewButton from './DeleteReviewButton'

export default function ReviewCard({ review, gymId }: { review: Review; gymId: number }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-start justify-between gap-4 mb-3">
        <StarDisplay rating={review.rating} />
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href={`/gyms/${gymId}/edit-review/${review.id}`}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Edit
          </Link>
          <DeleteReviewButton reviewId={review.id} gymId={gymId} />
        </div>
      </div>
      <p className="text-gray-700 mb-3 whitespace-pre-wrap">{review.review_text}</p>
      <div className="flex items-center gap-3 text-xs text-gray-400">
        {review.date_visited && (
          <span>Visited: {review.date_visited}</span>
        )}
        <span>Added: {new Date(review.created_at).toLocaleDateString('en-GB')}</span>
        {review.updated_at !== review.created_at && (
          <span>Edited: {new Date(review.updated_at).toLocaleDateString('en-GB')}</span>
        )}
      </div>
    </div>
  )
}
