import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="gradient-bg min-h-screen">
      <Navbar />
      <section className="pt-40 px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-10">Contact</h1>

        <form className="space-y-6">
          <input placeholder="Nume" className="w-full p-4 rounded-xl bg-black border border-cyan-900" />
          <input placeholder="Email" className="w-full p-4 rounded-xl bg-black border border-cyan-900" />
          <textarea placeholder="Mesaj" rows="5" className="w-full p-4 rounded-xl bg-black border border-cyan-900"></textarea>

          <button className="bg-green-400 text-black px-8 py-4 rounded-xl font-bold">
            Trimite
          </button>
        </form>
      </section>
      <Footer />
    </main>
  )
}
