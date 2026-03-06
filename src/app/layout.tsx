import type { Metadata } from 'next'
import Link from 'next/link'
import NavMenu from '@/components/NavMenu'
import './globals.css'

export const metadata: Metadata = {
  title: 'London Climbing Gyms',
  description: 'Rate and review climbing gyms in London',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-50 min-h-screen">
        <header className="bg-zinc-950 sticky top-0 z-40 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-4">
            <NavMenu />
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-orange-400 text-lg leading-none">⬡</span>
              <span className="text-white font-black text-sm tracking-[0.15em] uppercase group-hover:text-orange-400 transition-colors">
                London Climbing
              </span>
            </Link>
          </div>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
