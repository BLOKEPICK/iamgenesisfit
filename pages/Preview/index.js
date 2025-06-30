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
        `}</style>
      </Head>

      <main>
        {/* HERO */}
        <section style={{ background: "linear-gradient(180deg, #000 0%, #0A0A0A 100%)", color: "#fff", padding: "6rem 2rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", marginBottom: "1rem", fontWeight: "700", letterSpacing: "1px", color: "#0A84FF" }}>
            TRANSFORMA TU VIDA HOY
          </h1>
          <p style={{ color: "#bbb", fontSize: "1.15rem", maxWidth: "700px", margin: "0 auto 2rem", lineHeight: 1.6 }}>
            Descubre un enfoque único de entrenamiento físico y mental diseñado para ayudarte a alcanzar tu mejor versión. Resultados reales. Cambios sostenibles. Comunidad que te respalda.
          </p>
          <a href="#" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 2rem', backgroundColor: '#0A84FF', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: '500' }}>
            Comienza tu cambio
          </a>
        </section>

        {/* BEFORE & AFTER */}
        <section style={{ backgroundColor: '#0A0A0A', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0A84FF' }}>Logra tus metas conmigo</h2>
          <p style={{ color: '#aaa', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Resultados reales obtenidos con esfuerzo, dedicación y un plan personalizado.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ background: '#111', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 0 12px rgba(0,0,0,0.3)' }}>
                <img
                  src={`/transformation_${i}.webp`}
                  alt={`Transformación ${i}`}
                  style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: '1rem' }}>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#0A84FF' }}>Transformación #{i}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Antes y después tras 12 semanas de programa personalizado.</p>
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
