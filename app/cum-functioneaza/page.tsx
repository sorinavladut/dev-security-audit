
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="cyber-bg min-h-screen">
      <div className="grid-overlay"></div>

      <Navbar />

      <section className="relative pt-40 px-6 max-w-7xl mx-auto pb-20">
        <h1 className="text-5xl font-bold text-center mb-6">Cum Funcționează</h1>

        <p className="text-center text-gray-400 mb-16">
          Cum Funcționează
        </p>


<div className="grid md:grid-cols-4 gap-8">
  {[
    'Completezi formularul',
    'Analizăm aplicația',
    'Primești raportul',
    'Discutăm soluțiile'
  ].map((step,index) => (
    <div key={step} className="cyber-card p-8 text-center">
      <div className="text-5xl text-green-400 font-bold mb-6">
        {index + 1}
      </div>

      <h2 className="text-2xl font-bold mb-4">{step}</h2>

      <p className="text-gray-300">
        Proces clar și rapid pentru identificarea vulnerabilităților.
      </p>
    </div>
  ))}
</div>

      </section>

      <Footer />
    </main>
  )
}
