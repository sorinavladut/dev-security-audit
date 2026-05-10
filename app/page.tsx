import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="gradient-bg min-h-screen">
      <Navbar />

      <section className="pt-40 text-center px-6 pb-20">
        <h1 className="text-7xl font-extrabold">
          Dev Security <span className="text-green-400">Audit</span>
        </h1>

        <p className="mt-8 text-2xl text-gray-300 max-w-3xl mx-auto">
          Securitate digitală accesibilă pentru startup-uri și freelanceri din România
        </p>
      </section>

      <Footer />
    </main>
  )
}
