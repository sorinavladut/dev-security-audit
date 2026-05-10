import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="gradient-bg min-h-screen">
      <Navbar />
      <section className="pt-40 px-6">
        <h1 className="text-5xl font-bold">Prețuri</h1>
      </section>
      <Footer />
    </main>
  )
}
