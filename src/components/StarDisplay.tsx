export default function StarDisplay({ rating, max = 5 }: { rating: number | null; max?: number }) {
  if (rating === null) {
    return <span className="text-sm text-gray-400">No reviews yet</span>
  }

  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </span>
  )
}
