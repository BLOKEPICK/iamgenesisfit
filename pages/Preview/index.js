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
        <section id="sobremi" style={{ background: '#fff', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
            <img src="/trainer_main.webp" alt="Genesis" style={{ width: '100%', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }} />
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sobre mí</h2>
              <p>Soy Genesis, entrenadora certificada con pasión por ayudar a mujeres a transformar su vida desde dentro hacia fuera. Cada cuerpo tiene su historia, y yo te acompaño a escribir la mejor versión de la tuya.</p>
              <p>Mi enfoque combina entrenamiento físico, hábitos saludables y mucha empatía.</p>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" style={{ background: '#FAF7F6', padding: '4rem 2rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Lo que dicen de mí</h2>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '1.5rem', padding: '1rem 0' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ minWidth: '240px', height: '300px', backgroundColor: '#eee', borderRadius: '10px', flexShrink: 0, backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(/testimonial_${i}.webp)` }} />
            ))}
          </div>
        </section>

        {/* Before and After */}
        <section id="before" style={{ background: '#fff', padding: '4rem 2rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Resultados reales</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <img src={`/beforeafter_${i}.webp`} alt={`Progreso ${i}`} style={{ width: '100%', height: 'auto' }} />
              </div>
            ))}
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section id="faq" style={{ background: '#F3EDEB', padding: '4rem 2rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>Preguntas Frecuentes</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>¿Tienes otra duda? <a href="https://wa.me/18292520244" style={{ color: '#94715F', fontWeight: 600 }}>Escríbeme por WhatsApp</a></p>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: "¿Este programa es solo para mujeres?", a: "Sí, mi enfoque está totalmente dedicado a mujeres." },
              { q: "¿Necesito ir al gimnasio?", a: "No, puedes entrenar desde casa con el plan adecuado para ti." },
              { q: "¿Incluye plan de alimentación?", a: "Sí, recibirás una guía nutricional ajustada a tu meta." },
              { q: "¿Puedo contactarte directamente?", a: "Claro, siempre estaré disponible por WhatsApp para acompañarte." },
              { q: "¿Qué duración tienen los programas?", a: "Dependiendo de tu objetivo, desde 4 semanas hasta 12 o más." },
              { q: "¿Qué necesito para empezar?", a: "Ganas de cambiar y seguir un plan personalizado." },
              { q: "¿Cómo recibiré mi programa?", a: "Por correo electrónico una vez completes el formulario." },
              { q: "¿Hay seguimiento semanal?", a: "Sí, hago un seguimiento personalizado según el plan que elijas." }
            ].map((item, idx) => (
              <details key={idx} style={{ background: '#fff', borderRadius: '8px', padding: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                <summary style={{ fontWeight: 600, cursor: 'pointer' }}>{item.q}</summary>
                <p style={{ marginTop: '0.5rem' }}>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Formulario */}
        <section id="formulario" style={{ background: '#94715F', padding: '4rem 2rem', color: '#fff' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>¿Lista para comenzar?</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Llena este formulario y empecemos tu transformación</p>
          <form action="https://formspree.io/f/YOUR_ID" method="POST" style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" name="nombre" placeholder="Nombre" required style={inputStyle} />
            <input type="email" name="correo" placeholder="Correo electrónico" required style={inputStyle} />
            <input type="text" name="dias" placeholder="¿Cuántos días deseas entrenar?" style={inputStyle} />
            <input type="text" name="condicion" placeholder="¿Alguna condición física?" style={inputStyle} />
            <textarea name="meta" placeholder="¿Cuál es tu meta?" rows="3" style={inputStyle}></textarea>
            <textarea name="actividad" placeholder="¿Realizas alguna actividad física? ¿Cuáles?" rows="3" style={inputStyle}></textarea>
            <button type="submit" style={{ backgroundColor: '#fff', color: '#94715F', padding: '0.75rem', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>Enviar</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#111', color: '#fff', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', padding: '2rem', fontSize: '0.9rem', fontFamily: 'Manrope, sans-serif', gap: '1rem' }}>
        <div style={{ flex: '1 1 300px' }}>© Copyright 2025 Genesis Fit. Todos los derechos reservados.</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://www.instagram.com/GenesisFit" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@genesisfit" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
        <div style={{ flex: '1 1 300px', textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem' }}>
          <a href="/privacidad" style={{ color: '#fff', textDecoration: 'underline' }}>Política de Privacidad</a>
          <a href="/terminos" style={{ color: '#fff', textDecoration: 'underline' }}>Términos y Condiciones</a>
          <span style={{ fontSize: '0.85rem', color: '#aaa' }}>Diseñado por <a href="https://www.instagram.com/GeorgeValdezR" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', textDecoration: 'underline' }}>@GeorgeValdezR</a></span>
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
