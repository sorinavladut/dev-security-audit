
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="cyber-bg min-h-screen">
      <div className="grid-overlay"></div>

      <Navbar />

      <section className="relative pt-40 px-6 max-w-7xl mx-auto pb-20">
        <h1 className="text-5xl font-bold text-center mb-6">Prețuri Transparente</h1>

        <p className="text-center text-gray-400 mb-16">
          Prețuri Transparente
        </p>


<div className="grid md:grid-cols-3 gap-8">
  {[
    ['Basic Audit','€299'],
    ['Standard Audit','€599'],
    ['Premium Audit','€999']
  ].map(([name,price]) => (
    <div key={name} className="cyber-card p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">{name}</h2>

      <p className="text-5xl font-bold text-green-400 mb-8">{price}</p>

      <ul className="space-y-4 text-gray-300 mb-10">
        <li>✔ Audit aplicație web</li>
        <li>✔ Scanare vulnerabilități</li>
        <li>✔ Raport detaliat</li>
      </ul>

      <button className="cyber-button">
        Alege pachetul
      </button>
    </div>
  ))}
</div>

      </section>

      <Footer />
    </main>
  )
}
