// COMPLETO INDEX ACTUALIZADO
import Head from "next/head";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Head>
        <title>iamgenesisfit | Página oficial</title>
        <meta name="description" content="Transforma tu cuerpo y tu mente con iamgenesisfit. Programas, comunidad y resultados reales." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:title" content="iamgenesisfit | Página oficial" />
        <meta property="og:description" content="Transforma tu cuerpo y tu mente con iamgenesisfit. Programas, comunidad y resultados reales." />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet" />
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            background-color: #000000;
            font-family: 'Poppins', sans-serif;
          }

          @media (max-width: 768px) {
            .hero-section {
              padding: 4rem 1.5rem;
              background: linear-gradient(to bottom, #000, #0A0A0A);
              text-align: left;
            }
            .hero-title {
              font-size: 2.2rem !important;
              margin-bottom: 1rem;
            }
            .hero-subtitle {
              font-size: 1rem !important;
              line-height: 1.6;
              color: #ccc;
              margin-bottom: 2rem;
            }
            .hero-cta {
              display: block;
              width: 100%;
              text-align: center;
              padding: 0.75rem;
              font-size: 1rem;
            }
            .section-padding {
              padding: 3rem 1.5rem !important;
            }
            .trainer-section {
              flex-direction: column !important;
              text-align: center !important;
            }
            .trainer-image {
              width: 100% !important;
              max-width: 320px;
              margin: 0 auto 1.5rem;
            }
            .before-grid {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
            .faq-container {
              padding: 3rem 1.5rem !important;
            }
            .plans-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </Head>

      <main>
        {/* HERO */}
        <section className="hero-section" style={{ background: "linear-gradient(180deg, #000 0%, #0A0A0A 100%)", color: "#fff", padding: "6rem 2rem", textAlign: "center" }}>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", marginBottom: "1rem", fontWeight: "700", letterSpacing: "1px", color: "#0A84FF" }}>
            TRANSFORMA TU VIDA HOY
          </h1>
          <p className="hero-subtitle" style={{ color: "#bbb", fontSize: "1.15rem", maxWidth: "700px", margin: "0 auto 2rem", lineHeight: 1.6 }}>
            Descubre un enfoque único de entrenamiento físico y mental diseñado para ayudarte a alcanzar tu mejor versión. Resultados reales. Cambios sostenibles. Comunidad que te respalda.
          </p>
          <a className="hero-cta" href="#" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 2rem', backgroundColor: '#0A84FF', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: '500' }}>
            Comienza tu cambio
          </a>
        </section>

        {/* SOBRE MÍ */}
        <section style={{ background: 'radial-gradient(circle at top left, #0A0A0A, #000)', color: '#fff', padding: '4rem 2rem' }} className="section-padding">
          <div className="trainer-section" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            <img
              src="/trainer_main.webp"
              alt="Entrenadora Genesis"
              className="trainer-image"
              style={{ width: '300px', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 0 20px rgba(0,0,0,0.4)' }}
            />
            <div style={{ flex: 1 }}>
              <h2 style={{ color: '#0A84FF', fontSize: '2rem', marginBottom: '1rem' }}>Conoce a Genesis</h2>
              <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: 1.6 }}>
                Soy Genesis, entrenadora certificada con más de 5 años ayudando a mujeres a transformar sus cuerpos y su autoestima. Mi enfoque combina nutrición inteligente, entrenamiento eficiente y una comunidad que te impulsa. Esto no es una dieta más — es una nueva forma de vivir.
              </p>
            </div>
          </div>
        </section>

        {/* BEFORE & AFTER */}
        <section style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Logra tus metas conmigo</h2>
          <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Estos son solo algunos de los muchos resultados que hemos conseguido con dedicación, esfuerzo y el plan adecuado.
          </p>
          <div className="before-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', justifyItems: 'center' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ background: '#111', borderRadius: '10px', overflow: 'hidden', maxWidth: '300px', width: '100%' }}>
                <img src={`/before${i}.webp`} alt={`Transformación ${i}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div style={{ padding: '1rem' }}>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#0A84FF' }}>Transformación #{i}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Antes y después tras 12 semanas de programa personalizado.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-container" style={{ backgroundColor: '#111', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Preguntas frecuentes</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            {[...Array(5)].map((_, i) => (
              <div key={i} style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: 0, color: '#0A84FF', fontSize: '1rem' }}>¿Pregunta ejemplo #{i + 1}?</h4>
                <p style={{ color: '#ccc', fontSize: '0.95rem' }}>
                  Esta es una respuesta de ejemplo para demostrar cómo se verá el texto real en el sitio.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* REDES */}
        <section style={{ backgroundColor: '#111', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Síguenos o escríbenos</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <a href="https://www.instagram.com/iamgenesisfit/" target="_blank" rel="noopener noreferrer" style={{ color: "#0A84FF" }}>
              <FaInstagram size={36} />
            </a>
            <a href="https://wa.me/18292520244" target="_blank" rel="noopener noreferrer" style={{ color: "#0A84FF" }}>
              <FaWhatsapp size={36} />
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ backgroundColor: '#000', color: '#666', textAlign: 'center', padding: '2rem', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} iamgenesisfit. Todos los derechos reservados.
        </footer>
      </main>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/18292520244"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#0A84FF',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 0 15px rgba(0,0,0,0.3)',
          zIndex: 999
        }}
      >
        <FaWhatsapp size={28} color="#fff" />
      </a>
    </>
  );
}
