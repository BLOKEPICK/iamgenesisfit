import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jamie Brown Fit | Página oficial</title>
        <meta name="description" content="Transforma tu cuerpo y tu mente con un coaching fitness personalizado." />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet" />
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            background-color: #ffffff;
          }
          .hero {
            background-image: url('/hero.jpg');
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            position: relative;
          }
          .hero-overlay {
            background-color: rgba(0,0,0,0.6);
            padding: 2rem;
            border-radius: 12px;
          }
          .form-section, .benefits-section, footer {
            padding: 4rem 2rem;
            text-align: center;
          }
          .form-section {
            background-color: #f5f5f5;
          }
          form {
            max-width: 500px;
            margin: 0 auto;
            display: grid;
            gap: 1rem;
          }
          input, button {
            padding: 1rem;
            border-radius: 6px;
            border: 1px solid #ccc;
            font-size: 1rem;
          }
          button {
            background-color: #000;
            color: white;
            border: none;
            cursor: pointer;
          }
          .benefits {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 2rem;
            max-width: 1000px;
            margin: 0 auto;
          }
          .benefit-box {
            background: #fff;
            padding: 2rem;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            border-radius: 8px;
          }
          footer {
            background-color: #000;
            color: #aaa;
            font-size: 0.9rem;
          }
          @media (max-width: 768px) {
            .hero {
              height: auto;
              padding: 4rem 1rem;
            }
          }
        `}</style>
      </Head>
      <main>
        <section className="hero">
          <div className="hero-overlay">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>TRANSFORMA TU VIDA</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Entrenamiento personalizado, resultados reales</p>
            <a href="#form" style={{ backgroundColor: 'white', color: 'black', padding: '0.8rem 1.5rem', borderRadius: '8px', fontWeight: '600' }}>Comienza ahora</a>
          </div>
        </section>

        <section id="form" className="form-section">
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Solicita tu consulta gratuita</h2>
          <form>
            <input type="text" placeholder="Nombre completo" />
            <input type="email" placeholder="Correo electrónico" />
            <input type="tel" placeholder="Teléfono" />
            <button type="submit">Enviar</button>
          </form>
        </section>

        <section className="benefits-section">
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Beneficios</h2>
          <div className="benefits">
            <div className="benefit-box">✔ Coaching personalizado</div>
            <div className="benefit-box">✔ Plan nutricional adaptado</div>
            <div className="benefit-box">✔ Resultados garantizados</div>
          </div>
        </section>

        <footer>
          <p>© 2025 Jamie Brown Fit Replica. Todos los derechos reservados.</p>
        </footer>
      </main>
    </>
  );
}
