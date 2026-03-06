import { GymType } from '@/lib/queries'

const styles: Record<GymType, string> = {
  bouldering: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
  lead: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  both: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
}

const labels: Record<GymType, string> = {
  bouldering: 'Bouldering',
  lead: 'Lead',
  both: 'Bouldering + Lead',
}

export default function GymTypeBadge({ type }: { type: GymType }) {
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase ${styles[type]}`}>
      {labels[type]}
    </span>
  )
}
