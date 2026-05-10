import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#020817]/90 backdrop-blur border-b border-cyan-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Dev <span className="text-green-400">Security Audit</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-gray-300">
          <Link href="/servicii">Servicii</Link>
          <Link href="/despre">Despre</Link>
          <Link href="/preturi">Prețuri</Link>
          <Link href="/cum-functioneaza">Cum funcționează</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
