'use client'

import { useState } from 'react'

export default function StarInput({ defaultValue = 0 }: { defaultValue?: number }) {
  const [rating, setRating] = useState(defaultValue)
  const [hovered, setHovered] = useState(0)

  return (
    <div className="flex items-center gap-1">
      <input type="hidden" name="rating" value={rating} />
      {Array.from({ length: 5 }, (_, i) => {
        const value = i + 1
        return (
          <button
            key={i}
            type="button"
            onClick={() => setRating(value)}
            onMouseEnter={() => setHovered(value)}
            onMouseLeave={() => setHovered(0)}
            className={`text-3xl transition-colors ${
              value <= (hovered || rating) ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </button>
        )
      })}
      {rating > 0 && (
        <span className="ml-1 text-sm text-gray-600">{rating}/5</span>
      )}
    </div>
  )
}
