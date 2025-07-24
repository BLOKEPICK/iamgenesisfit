// ✅ Página completa en un solo archivo para Genesis Fit

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Genesis Fit | Transformación real para mujeres reales</title>
        <meta name="description" content="Acompaña a Genesis Fit en tu proceso de cambio físico y mental. Programas únicos, testimonios reales, asesoría personalizada." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap" rel="stylesheet" />
        <style>{`
          html { scroll-behavior: smooth; }
          body {
            margin: 0;
            padding: 0;
            font-family: 'Manrope', sans-serif;
            background-color: #fff;
            color: #2D2D2D;
          }
          *::selection {
            background-color: #94715F;
            color: #fff;
          }
          a { color: inherit; text-decoration: none; }
        `}</style>
      </Head>

      {/* Menú Sticky Transparente */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 99,
        background: 'rgba(255,255,255,0.95)',
        borderBottom: '1px solid #eee',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem'
      }}>
        <a href="#hero" style={{ fontWeight: 700, fontSize: '1.5rem' }}>
          <span style={{ fontWeight: 400 }}>Genesis</span> Fit
        </a>
        <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem', fontWeight: 600 }}>
          <a href="#sobremi">Sobre mí</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#before">Resultados</a>
          <a href="#faq">Preguntas</a>
          <a href="#formulario">Contacto</a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" style={{
          background: '#F3EDEB',
          padding: '6rem 2rem',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Transforma tu cuerpo y mente con <strong>Genesis Fit</strong>
          </h1>
          <p style={{
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Acompañamiento real para mujeres reales. ¡Cambia tu vida desde hoy!
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <a href="#formulario" style={{
              backgroundColor: '#94715F',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontWeight: 600
            }}>
              Comienza Ahora
            </a>
          </div>
        </section>

        {/* Aquí irán las demás secciones que creamos: Sobre mí, Testimonios, Before&After, Preguntas, Formulario */}
      </main>

      {/* Footer tipo Alofoke */}
      <footer style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://www.instagram.com/GenesisFit" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>Instagram</a>
            <a href="https://www.tiktok.com/@genesisfit" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>TikTok</a>
          </div>
          <div style={{ fontSize: '0.9rem', color: '#ccc', marginTop: '1rem' }}>
            © Copyright 2025 Genesis Fit. Todos los derechos reservados.
          </div>
          <div style={{
            fontSize: '0.85rem',
            color: '#aaa',
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <a href="/privacidad" style={{ color: '#aaa', textDecoration: 'underline' }}>Política de Privacidad</a>
            <a href="/terminos" style={{ color: '#aaa', textDecoration: 'underline' }}>Términos y Condiciones</a>
            <span>Diseñado por <a href="https://www.instagram.com/GeorgeValdezR" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', textDecoration: 'underline' }}>@GeorgeValdezR</a></span>
          </div>
        </div>
      </footer>
    </>
  );
}

const inputStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '6px',
  border: 'none',
  fontSize: '1rem'
};
