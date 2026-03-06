import dynamic from 'next/dynamic'
import { getAllGymsWithStats } from '@/lib/queries'

const GymMap = dynamic(() => import('@/components/GymMap'), { ssr: false })

export default function MapPage() {
  const gyms = getAllGymsWithStats()

  return (
    <>
      <section className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <p className="text-orange-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">London</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
            Gym Map
          </h1>
        </div>
        <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600" />
      </section>

      {/* Map */}
      <div className="h-[70vh] w-full">
        <GymMap gyms={gyms} />
      </div>

      {/* Legend */}
      <section className="bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-wrap items-center gap-6">
          <span className="text-[10px] font-black tracking-widest uppercase text-zinc-500">Key</span>
          <span className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="w-3 h-3 rounded-full bg-orange-400 inline-block border border-white/20" /> Bouldering
          </span>
          <span className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="w-3 h-3 rounded-full bg-blue-400 inline-block border border-white/20" /> Lead
          </span>
          <span className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block border border-white/20" /> Bouldering + Lead
          </span>
          <span className="ml-auto text-[10px] text-zinc-600">{gyms.length} gyms</span>
        </div>
      </section>
    </>
  )
}
