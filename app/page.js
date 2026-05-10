'use client';

export default function Home() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message);
  }

  return (
    <main>
      <section className="hero">
        <div className="overlay">
          <h1>Dev Security Audit</h1>
          <p>Securitate digitală accesibilă pentru startup-uri și freelanceri din România</p>

          <a href="#contact">
            <button className="hero-btn">Solicită un audit</button>
          </a>
        </div>
      </section>

      <section className="advantages">
        <h2>Avantaje Competitive</h2>

        <div className="cards">
          <div className="card">
            <h3>🛡️ Securitate reală</h3>
            <p>Audit de cod și identificare vulnerabilități.</p>
          </div>

          <div className="card">
            <h3>💰 Preț accesibil</h3>
            <p>Servicii profesionale adaptate IMM-urilor.</p>
          </div>

          <div className="card">
            <h3>⚙️ Model modular</h3>
            <p>Alegi doar serviciile de care ai nevoie.</p>
          </div>

          <div className="card">
            <h3>🇷🇴 Focus România</h3>
            <p>Servicii adaptate pieței locale.</p>
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Serviciile Noastre</h2>

        <div className="service-grid">
          <div className="service-item">✔ Audit de securitate IT</div>
          <div className="service-item">✔ Secure Code Review</div>
          <div className="service-item">✔ Testare vulnerabilități</div>
          <div className="service-item">✔ Consultanță GDPR / ISO 27001 / NIS2</div>
          <div className="service-item">✔ Training securitate</div>
          <div className="service-item">✔ Monitorizare și recomandări</div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-box">
          <h2>Contactează-ne</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nume" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" rows="6" placeholder="Mesaj" required />
            <button type="submit">Trimite mesaj</button>
          </form>
        </div>
      </section>

      <footer>
        <p>© 2026 Dev Security Audit | România</p>
      </footer>
    </main>
  );
}
