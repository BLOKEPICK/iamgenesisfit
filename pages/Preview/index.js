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
        position: 'sticky', top: 0, zIndex: 99, background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem'
      }}>
        <a href="#hero" style={{ fontWeight: 700, fontSize: '1.5rem' }}><span style={{ fontWeight: 400 }}>Genesis</span> Fit</a>
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
        <section id="hero" style={{ background: '#F3EDEB', padding: '6rem 2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Transforma tu cuerpo y mente con <strong>Genesis Fit</strong></h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>Acompañamiento real para mujeres reales. ¡Cambia tu vida desde hoy!</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="#formulario" style={{ backgroundColor: '#94715F', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '6px', fontWeight: 600 }}>Comienza Ahora</a>
          </div>
        </section>

        {/* Sobre mí */}
        <section id="sobremi" style={{ padding: '5rem 2rem', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sobre mí</h2>
          <p style={{ maxWidth: '700px', textAlign: 'center' }}>
            Soy Genesis, entrenadora personal especializada en mujeres. Mi objetivo es ayudarte a transformar tu estilo de vida con rutinas efectivas, nutrición personalizada y un acompañamiento constante. ¡Juntas lograremos resultados duraderos!
          </p>
        </section>

        {/* Testimonios */}
        <section id="testimonios" style={{ background: '#f9f9f9', padding: '5rem 2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Testimonios</h2>
          <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto' }}>
            {[1,2,3,4].map(i => (
              <div key={i} style={{ flex: '0 0 300px', background: '#fff', borderRadius: '8px', padding: '1rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <img src={`/testimonio${i}.webp`} alt={`Testimonio ${i}`} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '6px' }} />
              </div>
            ))}
          </div>
        </section>

        {/* Before & After */}
        <section id="before" style={{ padding: '5rem 2rem', backgroundColor: '#F3EDEB' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Resultados Reales</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
                <img src={`/beforeafter${i}.webp`} alt={`Antes y después ${i}`} style={{ width: '100%', borderRadius: '6px' }} />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ background: '#fff', padding: '5rem 2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Preguntas frecuentes</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Si tienes alguna otra pregunta, no dudes en <a href="https://wa.me/18292520244" style={{ color: '#94715F', fontWeight: 600 }}>escribirnos</a>.
          </p>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                ['¿Este programa es solo para mujeres?', 'Sí, está enfocado 100% en mujeres.'],
                ['¿Necesito experiencia previa?', 'No, trabajamos desde principiantes hasta avanzadas.'],
                ['¿Incluye nutrición?', 'Sí, se adapta a tus metas y hábitos actuales.'],
                ['¿Cuántos días a la semana?', 'Tú decides, pero te recomendamos mínimo 3.'],
                ['¿Tengo que ir al gym?', 'No es obligatorio. Puedes entrenar en casa o gimnasio.'],
                ['¿Hay seguimiento personalizado?', 'Sí, 100% personalizado y con contacto directo.']
              ].map(([q, a], i) => (
                <li key={i} style={{ marginBottom: '1.5rem' }}>
                  <strong>{q}</strong>
                  <p>{a}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Formulario */}
        <section id="formulario" style={{ background: '#F3EDEB', padding: '5rem 2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Contáctame</h2>
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" name="nombre" placeholder="Nombre" required style={inputStyle} />
            <input type="email" name="email" placeholder="Correo" required style={inputStyle} />
            <input type="text" name="dias" placeholder="¿Cuántos días deseas entrenar?" style={inputStyle} />
            <input type="text" name="condicion" placeholder="¿Alguna condición física?" style={inputStyle} />
            <textarea name="meta" placeholder="¿Cuál es tu meta que buscas lograr?" rows={3} style={inputStyle}></textarea>
            <textarea name="actividad" placeholder="¿Realiza alguna actividad física? ¿Cuáles?" rows={3} style={inputStyle}></textarea>
            <button type="submit" style={{ background: '#94715F', color: '#fff', padding: '1rem', fontWeight: 600, border: 'none', borderRadius: '6px' }}>Enviar</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#000', color: '#fff', padding: '3rem 2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://www.instagram.com/GenesisFit" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>Instagram</a>
            <a href="https://www.tiktok.com/@genesisfit" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>TikTok</a>
          </div>
          <div style={{ fontSize: '0.9rem', color: '#ccc', marginTop: '1rem' }}>
            © Copyright 2025 Genesis Fit. Todos los derechos reservados.
          </div>
          <div style={{ fontSize: '0.85rem', color: '#aaa', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
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