// ✅ NUEVA PLANTILLA TOTALMENTE DISTINTA – DISEÑO RADICAL Y MODERNO
// Inspirado en layouts editoriales, diseño asimétrico y experiencia visual fluida

import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>Genesis Fit | Tu Evolución Empieza Aquí</title>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>

      <div style={styles.navbar}>
        <span style={styles.brand}>GENESIS.</span>
        <div style={styles.links}>
          <a onClick={() => scrollTo('#welcome')}>Inicio</a>
          <a onClick={() => scrollTo('#who')}>Quién soy</a>
          <a onClick={() => scrollTo('#program')}>Programa</a>
          <a onClick={() => scrollTo('#proof')}>Pruebas</a>
          <a onClick={() => scrollTo('#talk')}>Conecta</a>
        </div>
      </div>

      <section id="welcome" style={styles.hero}>
        <h1 style={styles.headline}>No entrenas para cambiar tu cuerpo. Entrenas para cambiar tu vida.</h1>
        <p style={styles.subhead}>Descubre cómo cientos de mujeres lo lograron conmigo.</p>
        <button style={styles.primaryBtn} onClick={() => scrollTo('#talk')}>Agenda tu sesión</button>
      </section>

      <section id="who" style={styles.splitLeft}>
        <div style={styles.splitText}>
          <h2>¿Quién es Genesis?</h2>
          <p>Coach certificada, especialista en entrenamiento femenino y bienestar emocional. Más de 150 historias reales de transformación.</p>
        </div>
        <img src="/trainer_main.webp" alt="Genesis" style={styles.splitImage} />
      </section>

      <section id="program" style={styles.columnsSection}>
        <h2 style={styles.sectionHeader}>Mi Programa</h2>
        <div style={styles.columns}>
          <div>
            <h3>🌱 Fase 1: Fundamentos</h3>
            <p>Establece tu base física y mental.</p>
          </div>
          <div>
            <h3>🔥 Fase 2: Acción</h3>
            <p>Entrena, mejora, y siente la diferencia.</p>
          </div>
          <div>
            <h3>🌟 Fase 3: Evolución</h3>
            <p>Consolida tus hábitos y expande tu confianza.</p>
          </div>
        </div>
      </section>

      <section id="proof" style={styles.proofSection}>
        <h2 style={styles.sectionHeader}>Resultados Reales</h2>
        <div style={styles.proofGallery}>
          {[1, 2, 3].map(i => (
            <div key={i} style={styles.proofCard}>
              <img src={`/transformation_${i}.webp`} alt={`Transformación ${i}`} style={styles.proofImg} />
              <p style={styles.caption}>+8 semanas de progreso</p>
            </div>
          ))}
        </div>
      </section>

      <section id="talk" style={styles.contactBlock}>
        <div style={styles.contactInner}>
          <h2>Hablemos</h2>
          <p>Cuéntame tus metas. Yo me encargo del camino.</p>
          <form style={styles.form}>
            <input type="text" placeholder="Tu nombre" required style={styles.input} />
            <input type="email" placeholder="Correo electrónico" required style={styles.input} />
            <textarea rows={4} placeholder="¿Cuál es tu objetivo?" required style={styles.input}></textarea>
            <button style={styles.primaryBtn}>Enviar</button>
          </form>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Genesis Fit. Hecho con 💪</p>
      </footer>
    </>
  );
}

const styles = {
  navbar: { position: 'fixed', top: 0, width: '100%', background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', zIndex: 1000, fontFamily: 'Manrope, sans-serif', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' },
  brand: { fontWeight: 800, fontSize: '1.4rem', color: '#111' },
  links: { display: 'flex', gap: '1.2rem', fontSize: '0.95rem', color: '#444', cursor: 'pointer' },
  hero: { padding: '8rem 2rem 6rem', background: '#F5F5F5', textAlign: 'center' },
  headline: { fontSize: '2.8rem', fontWeight: 800, maxWidth: '800px', margin: '0 auto 1.2rem', color: '#222' },
  subhead: { fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem', color: '#555' },
  primaryBtn: { backgroundColor: '#111', color: '#fff', padding: '0.9rem 2rem', borderRadius: '30px', textDecoration: 'none', fontWeight: 600, border: 'none', cursor: 'pointer' },
  splitLeft: { display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'center', justifyContent: 'center', padding: '5rem 2rem', background: '#fff' },
  splitText: { maxWidth: '500px' },
  splitImage: { width: '100%', maxWidth: '400px', borderRadius: '12px' },
  columnsSection: { background: '#F7F7F7', padding: '5rem 2rem', textAlign: 'center' },
  sectionHeader: { fontSize: '2rem', marginBottom: '2rem', fontWeight: 700 },
  columns: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' },
  proofSection: { background: '#fff', padding: '5rem 2rem', textAlign: 'center' },
  proofGallery: { display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' },
  proofCard: { maxWidth: '300px' },
  proofImg: { width: '100%', borderRadius: '10px' },
  caption: { marginTop: '0.5rem', color: '#666' },
  contactBlock: { background: '#111', color: '#fff', padding: '5rem 2rem' },
  contactInner: { maxWidth: '600px', margin: '0 auto', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' },
  input: { padding: '0.9rem', borderRadius: '6px', border: 'none', fontSize: '1rem' },
  footer: { background: '#000', color: '#aaa', textAlign: 'center', padding: '2rem', fontSize: '0.9rem' }
};
