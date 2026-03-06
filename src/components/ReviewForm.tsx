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
    <form ref={formRef} action={handleSubmit} className="bg-white border border-stone-200 rounded-lg p-6 space-y-5">
      <input type="hidden" name="gymId" value={gymId} />

      <div>
        <label className="block text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400 mb-2">Rating</label>
        <StarInput />
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
          className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-colors"
          placeholder="Write your review…"
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
          className="rounded-lg border border-stone-300 px-3 py-2.5 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-colors"
        />
      </div>

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg text-xs font-black tracking-widest uppercase transition-colors"
      >
        Submit Review
      </button>
    </form>
  )
}
