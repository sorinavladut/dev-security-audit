
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="cyber-bg min-h-screen">
      <div className="grid-overlay"></div>

      <Navbar />

      <section className="relative pt-40 px-6 max-w-7xl mx-auto pb-20">
        <h1 className="text-5xl font-bold text-center mb-6">Despre Noi</h1>

        <p className="text-center text-gray-400 mb-16">
          Despre Noi
        </p>


<div className="cyber-card p-10">
  <ul className="space-y-6 text-lg text-gray-300">
    <li>✔ 16+ ani experiență enterprise</li>
    <li>✔ React, Node.js, Java, AWS, Kubernetes</li>
    <li>✔ 100+ proiecte livrate</li>
    <li>✔ Focus pe rezultate și confidențialitate</li>
  </ul>
</div>

<div className="grid md:grid-cols-4 gap-6 mt-10">
  {['16+ Ani','100+ Proiecte','50+ Clienți','24h Răspuns'].map((stat) => (
    <div key={stat} className="cyber-card p-6 text-center">
      <h3 className="text-3xl font-bold text-green-400">{stat}</h3>
    </div>
  ))}
</div>

      </section>

      <Footer />
    </main>
  )
}
