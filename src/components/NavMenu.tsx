'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function NavMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Open menu"
        className="flex flex-col justify-center gap-[5px] w-9 h-9 rounded hover:bg-white/10 transition-colors p-2"
      >
        <span className={`block h-[2px] bg-white transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block h-[2px] bg-white transition-all duration-200 ${open ? 'opacity-0 scale-x-0' : ''}`} />
        <span className={`block h-[2px] bg-white transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 w-52 bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl z-50 overflow-hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-100 hover:bg-zinc-800 transition-colors"
          >
            <span className="text-orange-400">◈</span> All Gyms
          </Link>
          <Link
            href="/map"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-100 hover:bg-zinc-800 transition-colors"
          >
            <span className="text-orange-400">◎</span> Map
          </Link>
          <div className="border-t border-zinc-800 mx-3" />
          <p className="px-4 pt-3 pb-1 text-[10px] font-bold tracking-widest uppercase text-zinc-500">Filter by type</p>
          <Link
            href="/?type=bouldering"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0" /> Bouldering
          </Link>
          <Link
            href="/?type=lead"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" /> Lead Climbing
          </Link>
          <Link
            href="/?type=both"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 pb-3 pt-2.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" /> Bouldering + Lead
          </Link>
        </div>
      )}
    </div>
  )
}
