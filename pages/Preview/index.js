// ⚡ PLANTILLA NUEVA – Estilo creativo, no convencional, nada de grids ni estructura clásica
// Diseño experimental: menú lateral vertical, hero desalineado, secciones diagonales y navegación fluida

import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [active, setActive] = useState(false);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(false);
  };

  return (
    <>
      <Head>
        <title>Genesis Fit | Movimiento, mente y magia</title>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div style={styles.sidebar}>
        <div style={styles.logo}>GF</div>
        <nav style={styles.navVertical}>
          <a onClick={() => scrollTo('#inicio')}>Inicio</a>
          <a onClick={() => scrollTo('#ella')}>Ella</a>
          <a onClick={() => scrollTo('#proceso')}>Proceso</a>
          <a onClick={() => scrollTo('#impacto')}>Impacto</a>
          <a onClick={() => scrollTo('#accion')}>Acción</a>
        </nav>
      </div>

      <main style={styles.main}>
        <section id="inicio" style={styles.heroDiagonal}>
          <h1 style={styles.heroTitle}>El fitness es solo el inicio</h1>
          <p style={styles.heroQuote}>Conéctate contigo misma desde el cuerpo, el poder y el propósito.</p>
        </section>

        <section id="ella" style={styles.bioBlock}>
          <div style={styles.bioLeft}>
            <h2>Ella es Genesis</h2>
            <p>No transforma cuerpos. Transforma vidas. A través de enfoque, fuerza y conexión real. Y lo hace contigo.</p>
          </div>
          <div style={styles.bioRight}>
            <img src="/trainer_main.webp" alt="Genesis" style={styles.bioImg} />
          </div>
        </section>

        <section id="proceso" style={styles.scrollNarrative}>
          <div style={styles.step}><span>1</span><p>Reencuentro: tu historia importa, tu punto de partida también.</p></div>
          <div style={styles.step}><span>2</span><p>Ruptura: hábitos viejos se quiebran con acción.</p></div>
          <div style={styles.step}><span>3</span><p>Renacimiento: el cuerpo se convierte en tu aliad@, no en tu castigo.</p></div>
        </section>

        <section id="impacto" style={styles.resultCollage}>
          <h2>Impacto visible</h2>
          <div style={styles.collageRow}>
            {[1, 2, 3].map(i => (
              <img key={i} src={`/transformation_${i}.webp`} alt={`Progreso ${i}`} style={styles.collageImg} />
            ))}
          </div>
        </section>

        <section id="accion" style={styles.ctaSection}>
          <div>
            <h2>¿Lista para ti misma?</h2>
            <p>Rellena el formulario. Genesis te responderá personalmente.</p>
            <form style={styles.form}>
              <input type="text" placeholder="Tu nombre" style={styles.input} required />
              <input type="email" placeholder="Tu email" style={styles.input} required />
              <textarea rows="4" placeholder="¿Qué te mueve?" style={styles.input}></textarea>
              <button type="submit" style={styles.button}>Enviar ✨</button>
            </form>
          </div>
        </section>

        <footer style={styles.footer}>© {new Date().getFullYear()} Genesis Fit – diseño atípico, resultados reales</footer>
      </main>
    </>
  );
}

const styles = {
  sidebar: { position: 'fixed', top: 0, left: 0, width: '80px', height: '100vh', background: '#111', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', paddingTop: '2rem', fontFamily: 'Space Grotesk, sans-serif' },
  logo: { fontWeight: 700, fontSize: '1.5rem' },
  navVertical: { display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem', cursor: 'pointer' },
  main: { marginLeft: '80px' },
  heroDiagonal: { height: '100vh', background: 'linear-gradient(135deg, #f4dcdc 50%, #fff 50%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '5rem' },
  heroTitle: { fontSize: '3.5rem', color: '#111', maxWidth: '600px' },
  heroQuote: { fontSize: '1.2rem', color: '#444', maxWidth: '500px' },
  bioBlock: { display: 'flex', padding: '4rem 2rem', background: '#fff', alignItems: 'center' },
  bioLeft: { flex: 1, paddingRight: '2rem' },
  bioRight: { flex: 1 },
  bioImg: { width: '100%', borderRadius: '12px' },
  scrollNarrative: { background: '#f0f0f0', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', gap: '2rem' },
  step: { display: 'flex', alignItems: 'flex-start', gap: '1rem' },
  resultCollage: { padding: '4rem 2rem', background: '#fff', textAlign: 'center' },
  collageRow: { display: 'flex', gap: '1rem', justifyContent: 'center' },
  collageImg: { width: '30%', borderRadius: '10px' },
  ctaSection: { background: '#111', color: '#fff', padding: '4rem 2rem', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px', margin: '2rem auto' },
  input: { padding: '0.8rem', borderRadius: '6px', border: 'none', fontSize: '1rem' },
  button: { background: '#fff', color: '#111', fontWeight: 600, padding: '0.8rem', border: 'none', borderRadius: '30px', cursor: 'pointer' },
  footer: { background: '#000', color: '#aaa', textAlign: 'center', padding: '2rem', fontSize: '0.85rem' }
};
