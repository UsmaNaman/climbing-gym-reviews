export default function StarDisplay({ rating, max = 5 }: { rating: number | null; max?: number }) {
  if (rating === null) {
    return <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Unrated</span>
  }

  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < Math.round(rating) ? 'text-amber-400' : 'text-zinc-200'}>
          ★
        </span>
      ))}
      <span className="ml-1 text-sm font-semibold text-zinc-600">{rating.toFixed(1)}</span>
    </span>
  )
}
