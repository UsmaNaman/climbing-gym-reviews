'use client'

import { useRef } from 'react'
import { addReview } from '@/actions/reviews'
import StarInput from './StarInput'

export default function ReviewForm({ gymId }: { gymId: number }) {
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    await addReview(formData)
    formRef.current?.reset()
  }

  return (
    <form ref={formRef} action={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Add a Review</h3>
      <input type="hidden" name="gymId" value={gymId} />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
        <StarInput />
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
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your review…"
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
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        Submit Review
      </button>
    </form>
  )
}
