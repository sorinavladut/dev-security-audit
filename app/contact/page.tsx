
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="cyber-bg min-h-screen">
      <div className="grid-overlay"></div>

      <Navbar />

      <section className="relative pt-40 px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 pb-20">
        <div>
          <h1 className="text-5xl font-bold mb-10">
            Contactează-ne
          </h1>

          <div className="space-y-8 text-lg text-gray-300">
            <div>
              <h3 className="text-green-400 font-bold mb-2">Email</h3>
              <p>contact@devsecurityaudit.ro</p>
            </div>

            <div>
              <h3 className="text-green-400 font-bold mb-2">Telefon</h3>
              <p>+40 751 123 456</p>
            </div>

            <div>
              <h3 className="text-green-400 font-bold mb-2">Locație</h3>
              <p>România</p>
            </div>

            <div>
              <h3 className="text-green-400 font-bold mb-2">Program</h3>
              <p>Luni - Vineri: 09:00 - 18:00</p>
            </div>
          </div>
        </div>

        <form className="cyber-card p-10 space-y-6">
          <input
            type="text"
            placeholder="Nume"
            className="w-full p-4 rounded-xl bg-black border border-cyan-900"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-black border border-cyan-900"
          />

          <input
            type="text"
            placeholder="Website / Domeniu"
            className="w-full p-4 rounded-xl bg-black border border-cyan-900"
          />

          <textarea
            placeholder="Mesaj"
            rows={5}
            className="w-full p-4 rounded-xl bg-black border border-cyan-900"
          ></textarea>

          <button
            type="submit"
            className="cyber-button w-full"
          >
            Trimite mesajul
          </button>
        </form>
      </section>

      <Footer />
    </main>
  )
}
