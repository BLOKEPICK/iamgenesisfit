// 💡 NUEVA PLANTILLA CONCEPTUAL — DISEÑO MODERNO, LAYOUT DIFERENTE
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>Genesis Fit | Redefine tu energía</title>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div style={styles.sideMenu}>
        <h1 style={styles.logo}>Genesis Fit</h1>
        <nav style={styles.sideNav}>
          <a onClick={() => scrollTo('#intro')}>Inicio</a>
          <a onClick={() => scrollTo('#about')}>Quien soy</a>
          <a onClick={() => scrollTo('#program')}>Programa</a>
          <a onClick={() => scrollTo('#proof')}>Testimonios</a>
          <a onClick={() => scrollTo('#form')}>Contáctame</a>
        </nav>
      </div>

      <main style={styles.mainContent}>
        <section id="intro" style={styles.heroBlock}>
          <div style={styles.heroTextWrap}>
            <h2 style={styles.heroHeading}>Tu cuerpo, tu poder.</h2>
            <p style={styles.heroSub}>Resultados reales para mujeres reales.</p>
          </div>
          <img src="/hero2.webp" alt="Genesis en acción" style={styles.heroImg} />
        </section>

        <section id="about" style={styles.aboutSection}>
          <div style={styles.aboutSplit}>
            <div style={styles.aboutText}>
              <h3 style={styles.sectionTitle}>Soy Genesis</h3>
              <p>Coach fitness especializada en mujeres. Te acompaño con estrategias reales, sin excusas y con resultados.</p>
              <p>Mi enfoque es integral: físico, mental y emocional. Más que una rutina, es un estilo de vida.</p>
            </div>
            <img src="/trainer_alt.webp" alt="Genesis" style={styles.aboutImg} />
          </div>
        </section>

        <section id="program" style={styles.programSection}>
          <h3 style={styles.sectionTitle}>Cómo funciona el programa</h3>
          <div style={styles.stepsRow}>
            <div style={styles.stepBox}>
              <strong>1</strong>
              <p>Evaluación inicial 1:1</p>
            </div>
            <div style={styles.stepBox}>
              <strong>2</strong>
              <p>Rutina + plan nutricional personalizado</p>
            </div>
            <div style={styles.stepBox}>
              <strong>3</strong>
              <p>Seguimiento quincenal</p>
            </div>
            <div style={styles.stepBox}>
              <strong>4</strong>
              <p>Progreso + ajustes estratégicos</p>
            </div>
          </div>
        </section>

        <section id="proof" style={styles.proofSection}>
          <h3 style={styles.sectionTitle}>Testimonios reales</h3>
          <div style={styles.collageRow}>
            {[1,2,3].map(i => (
              <img key={i} src={`/transformation_${i}.webp`} alt={`Testimonio ${i}`} style={styles.collageImg} />
            ))}
          </div>
        </section>

        <section id="form" style={styles.contactSection}>
          <h3 style={styles.sectionTitleWhite}>¿Lista para comenzar?</h3>
          <form style={styles.formWrap}>
            <input type="text" placeholder="Tu nombre" style={styles.input} required />
            <input type="email" placeholder="Correo electrónico" style={styles.input} required />
            <textarea placeholder="Tu meta personal" style={styles.textarea} rows={4}></textarea>
            <button style={styles.button}>Enviar ✨</button>
          </form>
        </section>

        <footer style={styles.footer}>© {new Date().getFullYear()} Genesis Fit. Todos los derechos reservados.</footer>
      </main>
    </>
  );
}

const primary = '#D8A47F';
const dark = '#1C1C1C';

const styles = {
  sideMenu: {
    position: 'fixed', top: 0, left: 0, height: '100vh', width: '220px', background: dark, color: '#fff', padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2rem', fontFamily: 'Space Grotesk, sans-serif', zIndex: 10
  },
  logo: { fontWeight: 700, fontSize: '1.5rem' },
  sideNav: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  mainContent: { marginLeft: '220px', fontFamily: 'Space Grotesk, sans-serif' },
  heroBlock: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '5rem 2rem', background: '#fafafa', minHeight: '90vh' },
  heroTextWrap: { maxWidth: '50%' },
  heroHeading: { fontSize: '3rem', marginBottom: '1rem' },
  heroSub: { fontSize: '1.2rem' },
  heroImg: { width: '40%', borderRadius: '12px', boxShadow: '0 0 20px rgba(0,0,0,0.2)' },
  aboutSection: { background: '#fff', padding: '5rem 2rem' },
  aboutSplit: { display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'center' },
  aboutText: { flex: 1 },
  aboutImg: { width: '40%', borderRadius: '10px' },
  sectionTitle: { fontSize: '2rem', marginBottom: '2rem', textAlign: 'left' },
  programSection: { background: '#f5f5f5', padding: '4rem 2rem' },
  stepsRow: { display: 'flex', justifyContent: 'space-around', gap: '1rem', flexWrap: 'wrap' },
  stepBox: { background: primary, padding: '1.5rem', borderRadius: '10px', color: '#fff', width: '200px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' },
  proofSection: { background: '#fff', padding: '4rem 2rem' },
  collageRow: { display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' },
  collageImg: { width: '280px', borderRadius: '10px' },
  contactSection: { background: dark, color: '#fff', padding: '5rem 2rem' },
  sectionTitleWhite: { fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' },
  formWrap: { maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.9rem', borderRadius: '6px', border: 'none' },
  textarea: { padding: '1rem', borderRadius: '6px', border: 'none' },
  button: { background: primary, border: 'none', padding: '1rem', borderRadius: '30px', color: '#fff', fontWeight: 600, cursor: 'pointer' },
  footer: { background: '#000', color: '#aaa', textAlign: 'center', padding: '2rem', fontSize: '0.9rem' }
};