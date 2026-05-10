import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="gradient-bg min-h-screen text-white">
      <Navbar />

      <section className="pt-40 pb-24 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          Dev Security <span className="text-green-400">Audit</span>
        </h1>

        <p className="mt-8 text-2xl text-gray-300 max-w-3xl mx-auto">
          Securitate digitală accesibilă pentru startup-uri și freelanceri din România
        </p>

        <p className="mt-4 text-lg text-gray-400">
          Audit securitate pentru aplicații web, API-uri și infrastructură cloud
        </p>

        <Link
          href="/contact"
          className="inline-block mt-10 bg-green-400 hover:bg-green-300 text-black px-10 py-4 rounded-2xl text-lg font-bold transition glow"
        >
          Solicită un audit de securitate
        </Link>
      </section>

      <Footer />
    </main>
  )
}
