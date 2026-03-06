'use client'

import { editReview } from '@/actions/reviews'
import StarInput from './StarInput'
import { Review } from '@/lib/queries'

export default function EditReviewForm({ review, gymId }: { review: Review; gymId: number }) {
  return (
    <form action={editReview} className="bg-white border border-stone-200 rounded-lg p-6 space-y-5">
      <input type="hidden" name="reviewId" value={review.id} />
      <input type="hidden" name="gymId" value={gymId} />

      <div>
        <label className="block text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400 mb-2">Rating</label>
        <StarInput defaultValue={review.rating} />
      </div>

      <div>
        <label htmlFor="reviewText" className="block text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400 mb-2">
          Review
        </label>
        <textarea
          id="reviewText"
          name="reviewText"
          rows={4}
          required
          defaultValue={review.review_text}
          className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="dateVisited" className="block text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400 mb-2">
          Date Visited <span className="text-zinc-300 font-medium normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id="dateVisited"
          name="dateVisited"
          type="date"
          defaultValue={review.date_visited ?? ''}
          className="rounded-lg border border-stone-300 px-3 py-2.5 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-colors"
        />
      </div>

      <div className="flex gap-3 pt-1">
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg text-xs font-black tracking-widest uppercase transition-colors"
        >
          Save Changes
        </button>
        <a
          href={`/gyms/${gymId}`}
          className="px-6 py-2.5 rounded-lg text-xs font-black tracking-widest uppercase text-zinc-500 hover:text-zinc-900 border border-stone-300 hover:border-stone-400 transition-colors"
        >
          Cancel
        </a>
      </div>
    </form>
  )
}
