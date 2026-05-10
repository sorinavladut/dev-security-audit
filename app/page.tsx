
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="cyber-bg min-h-screen overflow-hidden">
      <div className="grid-overlay"></div>

      <Navbar />

      <section className="relative pt-40 pb-28 text-center px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            Dev Security <span className="text-green-400">Audit</span>
          </h1>

          <p className="mt-8 text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto">
            Securitate digitală accesibilă pentru startup-uri și freelanceri din România
          </p>

          <p className="mt-6 text-lg text-gray-400">
            Audit securitate pentru aplicații web, API-uri și infrastructură cloud
          </p>

          <Link href="/contact" className="cyber-button mt-10 inline-block">
            Solicită un audit de securitate
          </Link>

          <div className="mt-10 flex justify-center gap-8 text-sm text-gray-400 flex-wrap">
            <span>✔ OWASP aligned</span>
            <span>✔ GDPR aware</span>
            <span>✔ Raport în 24h</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-16">
          Avantaje Competitive
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            ['Securitate reală','Audit de cod și identificare vulnerabilități cu soluții concrete'],
            ['Preț accesibil','Servicii profesionale adaptate bugetelor mici și medii'],
            ['Model modular','Servicii flexibile: alegi exact ce ai nevoie'],
            ['Focus România','Adaptat legislației și pieței locale']
          ].map(([title,text]) => (
            <div key={title} className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-4">{title}</h3>
              <p className="text-gray-300 leading-8">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
