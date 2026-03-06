'use client'

import { deleteReview } from '@/actions/reviews'

export default function DeleteReviewButton({ reviewId, gymId }: { reviewId: number; gymId: number }) {
  async function handleDelete(formData: FormData) {
    if (!window.confirm('Delete this review?')) return
    await deleteReview(formData)
  }

  return (
    <form action={handleDelete}>
      <input type="hidden" name="reviewId" value={reviewId} />
      <input type="hidden" name="gymId" value={gymId} />
      <button
        type="submit"
        className="text-sm text-red-500 hover:text-red-700 font-medium"
      >
        Delete
      </button>
    </form>
  )
}
