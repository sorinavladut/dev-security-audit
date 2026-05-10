
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#020817]/90 backdrop-blur border-b border-cyan-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Dev <span className="text-green-400">Security Audit</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link href="/servicii">Servicii</Link>
          <Link href="/despre">Despre noi</Link>
          <Link href="/preturi">Prețuri</Link>
          <Link href="/cum-functioneaza">Cum funcționează</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-5 py-2 rounded-xl transition"
        >
          Solicită un audit
        </Link>
      </div>
    </header>
  )
}
