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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Anton&display=swap" rel="stylesheet" />
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            background-color: #000000;
            font-family: 'Poppins', sans-serif;
          }
          @media (max-width: 768px) {
            .trainer-section {
              flex-direction: column !important;
              text-align: center !important;
            }
            .trainer-image {
              width: 100% !important;
              max-width: 320px;
              margin: 0 auto 1.5rem;
            }
          }
        `}</style>
      </Head>

      <main>
        {/* HERO - Degradado vertical en esquinas superior e inferior */}
        <section style={{
          background: "#0A84FF",
          color: "#fff",
          padding: "5rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Degradado arriba */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100px",
            background: "linear-gradient(to bottom, #000, transparent)",
            zIndex: 1
          }} />

          {/* Contenido */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <h1 style={{ fontSize: "2.8rem", fontFamily: "'Anton', sans-serif", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
              El cambio empieza contigo
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#fff", marginTop: "1rem", maxWidth: "600px", marginInline: "auto", lineHeight: 1.6 }}>
              Genesis Fit no es solo un programa. Es una transformación completa guiada por experiencia real y resultados medibles.
            </p>
            <a href="#planes" style={{ marginTop: "2rem", display: "inline-block", padding: "0.9rem 2.5rem", backgroundColor: "#fff", color: "#0A84FF", fontWeight: "700", borderRadius: "8px", textDecoration: "none" }}>
              Empezar ahora
            </a>
          </div>

          {/* Degradado abajo */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "380px",
            background: "linear-gradient(to top, #000, transparent)",
            zIndex: 1
          }} />
        </section>

        {/* SOBRE MÍ */}
        <section style={{ background: 'radial-gradient(circle at top left, #0A0A0A, #000)', color: '#fff', padding: '4rem 2rem' }}>
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

        {/* BEFORE & AFTER - Estilo B con cintillo y fondo sólido oscuro */}
        <section style={{ backgroundColor: '#0A0A0A', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0A84FF' }}>Logra tus metas conmigo</h2>
          <p style={{ color: '#aaa', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Resultados reales obtenidos con esfuerzo, dedicación y un plan personalizado.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                  background: '#0A84FF',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  padding: '0.5rem 1rem',
                  textAlign: 'center'
                }}>
                  12 semanas de transformación
                </div>
                <img
                  src={`/transformation_${i}.webp`}
                  alt={`Transformación ${i}`}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
                <div style={{
                  padding: '1.5rem 1rem',
                  backgroundColor: '#111',
                  textAlign: 'center'
                }}>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#0A84FF' }}>Transformación #{i}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#ccc', marginTop: '0.5rem' }}>Antes y después tras seguimiento personalizado.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ backgroundColor: '#101010', color: '#fff', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', color: '#0A84FF' }}>Preguntas frecuentes</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[...Array(5)].map((_, i) => (
              <div key={i} style={{ background: '#1A1A1A', borderRadius: '8px', padding: '1rem 1.5rem' }}>
                <h4 style={{ margin: 0, color: '#0A84FF', fontSize: '1rem' }}>¿Pregunta ejemplo #{i + 1}?</h4>
                <p style={{ color: '#ccc', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                  Esta es una respuesta de ejemplo para demostrar cómo se verá el texto real en el sitio.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* REDES */}
        <section style={{ backgroundColor: '#0A0A0A', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Síguenos o escríbenos</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem' }}>
            <a href="https://www.instagram.com/iamgenesisfit/" target="_blank" rel="noopener noreferrer" style={{ color: "#0A84FF" }}>
              <FaInstagram size={36} />
            </a>
            <a href="https://wa.me/18292520244" target="_blank" rel="noopener noreferrer" style={{ color: "#0A84FF" }}>
              <FaWhatsapp size={36} />
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{
          backgroundColor: '#000',
          color: '#555',
          textAlign: 'center',
          padding: '2rem',
          fontSize: '0.9rem'
        }}>
          &copy; {new Date().getFullYear()} iamgenesisfit. Todos los derechos reservados.
        </footer>

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
      </main>
    </>
  );
}