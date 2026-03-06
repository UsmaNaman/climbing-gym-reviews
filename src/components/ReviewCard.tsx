import Link from 'next/link'
import { Review } from '@/lib/queries'
import StarDisplay from './StarDisplay'
import DeleteReviewButton from './DeleteReviewButton'

export default function ReviewCard({ review, gymId }: { review: Review; gymId: number }) {
  return (
    <div className="bg-white border border-stone-200 rounded-lg p-5">
      <div className="flex items-start justify-between gap-4 mb-3">
        <StarDisplay rating={review.rating} />
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href={`/gyms/${gymId}/edit-review/${review.id}`}
            className="text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            Edit
          </Link>
          <DeleteReviewButton reviewId={review.id} gymId={gymId} />
        </div>
      </div>
      <p className="text-zinc-700 text-sm leading-relaxed mb-4 whitespace-pre-wrap">{review.review_text}</p>
      <div className="flex items-center gap-4 text-[11px] font-medium text-zinc-400 uppercase tracking-wider border-t border-stone-100 pt-3">
        {review.date_visited && (
          <span>Visited {review.date_visited}</span>
        )}
        <span>Added {new Date(review.created_at).toLocaleDateString('en-GB')}</span>
        {review.updated_at !== review.created_at && (
          <span>Edited {new Date(review.updated_at).toLocaleDateString('en-GB')}</span>
        )}
      </div>
    </div>
  )
}
