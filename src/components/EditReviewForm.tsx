'use client'

import { editReview } from '@/actions/reviews'
import StarInput from './StarInput'
import { Review } from '@/lib/queries'

export default function EditReviewForm({ review, gymId }: { review: Review; gymId: number }) {
  return (
    <form action={editReview} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 space-y-4">
      <input type="hidden" name="reviewId" value={review.id} />
      <input type="hidden" name="gymId" value={gymId} />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
        <StarInput defaultValue={review.rating} />
      </div>

      <div>
        <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700 mb-1">
          Review
        </label>
        <textarea
          id="reviewText"
          name="reviewText"
          rows={4}
          required
          defaultValue={review.review_text}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="dateVisited" className="block text-sm font-medium text-gray-700 mb-1">
          Date Visited <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          id="dateVisited"
          name="dateVisited"
          type="date"
          defaultValue={review.date_visited ?? ''}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
        <a
          href={`/gyms/${gymId}`}
          className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-400 transition-colors"
        >
          Cancel
        </a>
      </div>
    </form>
  )
}
