import { GymType } from '@/lib/queries'

const styles: Record<GymType, string> = {
  bouldering: 'bg-orange-100 text-orange-700',
  lead: 'bg-blue-100 text-blue-700',
  both: 'bg-green-100 text-green-700',
}

const labels: Record<GymType, string> = {
  bouldering: 'Bouldering',
  lead: 'Lead',
  both: 'Bouldering + Lead',
}

export default function GymTypeBadge({ type }: { type: GymType }) {
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${styles[type]}`}>
      {labels[type]}
    </span>
  )
}
