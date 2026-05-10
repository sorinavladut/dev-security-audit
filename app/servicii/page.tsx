
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="cyber-bg min-h-screen">
      <div className="grid-overlay"></div>

      <Navbar />

      <section className="relative pt-40 px-6 max-w-7xl mx-auto pb-20">
        <h1 className="text-5xl font-bold text-center mb-6">Serviciile Noastre</h1>

        <p className="text-center text-gray-400 mb-16">
          Serviciile Noastre
        </p>


<div className="grid md:grid-cols-3 gap-8">
  {[
    'Audit securitate IT',
    'Audit cod sursă',
    'Testare vulnerabilități',
    'Consultanță GDPR',
    'Training securitate',
    'Remediere & re-testare'
  ].map((service) => (
    <div key={service} className="cyber-card p-8">
      <h2 className="text-2xl font-bold text-green-400 mb-4">{service}</h2>
      <p className="text-gray-300 leading-8">
        Identificăm vulnerabilități și oferim recomandări concrete.
      </p>
    </div>
  ))}
</div>

      </section>

      <Footer />
    </main>
  )
}
