
export default function Footer() {
  return (
    <footer className="border-t border-cyan-900 mt-20 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-sm text-gray-400">
        <div>
          <h3 className="text-white font-bold mb-4">Dev Security Audit</h3>
          <p>Securitate digitală accesibilă pentru startup-uri și freelanceri.</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Servicii</h3>
          <ul className="space-y-2">
            <li>Audit securitate IT</li>
            <li>Secure Code Review</li>
            <li>Testare vulnerabilități</li>
            <li>Consultanță GDPR</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Companie</h3>
          <ul className="space-y-2">
            <li>Despre noi</li>
            <li>Prețuri</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>Politică confidențialitate</li>
            <li>Termeni și condiții</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
