// 🌟 NUEVO DISEÑO COMPLETAMENTE DIFERENTE PARA GENESIS FIT
// Estilo minimalista, elegante y moderno, enfocado en mujeres con tonos suaves y diseño alternativo

import Head from 'next/head';
import { useState } from 'react';
import { FaWhatsapp, FaBars } from 'react-icons/fa';

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
        <title>Genesis Fit | Bienestar Integral Femenino</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>

      <header style={styles.header}>
        <h1 style={styles.logo}>Genesis Fit</h1>
        <nav style={styles.desktopNav}>
          <a onClick={() => scrollTo('#about')}>Sobre mí</a>
          <a onClick={() => scrollTo('#services')}>Servicios</a>
          <a onClick={() => scrollTo('#gallery')}>Resultados</a>
          <a onClick={() => scrollTo('#contact')}>Contacto</a>
        </nav>
        <FaBars onClick={() => setMenuOpen(!menuOpen)} style={styles.menuIcon} />
        {menuOpen && (
          <div style={styles.mobileMenu}>
            <a onClick={() => scrollTo('#about')}>Sobre mí</a>
            <a onClick={() => scrollTo('#services')}>Servicios</a>
            <a onClick={() => scrollTo('#gallery')}>Resultados</a>
            <a onClick={() => scrollTo('#contact')}>Contacto</a>
          </div>
        )}
      </header>

      <section style={styles.hero}>
        <h2 style={styles.heroTitle}>Bienvenida al cambio</h2>
        <p style={styles.heroSubtitle}>Programas diseñados para transformar tu cuerpo con intención y cuidado</p>
        <a href="#contact" style={styles.cta}>Comienza ahora</a>
      </section>

      <section id="about" style={styles.sectionLight}>
        <div style={styles.aboutContainer}>
          <img src="/trainer_main.webp" alt="Genesis" style={styles.aboutImg} />
          <div>
            <h3 style={styles.sectionTitle}>Conóceme</h3>
            <p style={styles.sectionText}>Soy Genesis, entrenadora especializada en acompañar mujeres que desean sentirse fuertes, saludables y plenas. Mi enfoque es 100% personalizado y empático. Aquí no se trata de encajar en moldes, sino de crear el tuyo propio.</p>
          </div>
        </div>
      </section>

      <section id="services" style={styles.sectionDark}>
        <h3 style={styles.sectionTitleLight}>Servicios Personalizados</h3>
        <div style={styles.serviceCards}>
          <div style={styles.card}><h4>Entrenamiento</h4><p>Rutinas diseñadas para tu estilo de vida y objetivos.</p></div>
          <div style={styles.card}><h4>Nutrición</h4><p>Planificación consciente y realista para alimentarte mejor.</p></div>
          <div style={styles.card}><h4>Coaching</h4><p>Acompañamiento emocional para tu evolución física.</p></div>
        </div>
      </section>

      <section id="gallery" style={styles.sectionLight}>
        <h3 style={styles.sectionTitle}>Antes y Después</h3>
        <div style={styles.gallery}>
          {[1,2,3].map(i => (
            <img key={i} src={`/transformation_${i}.webp`} alt={`Resultado ${i}`} style={styles.galleryImg} />
          ))}
        </div>
      </section>

      <section id="contact" style={styles.sectionDark}>
        <h3 style={styles.sectionTitleLight}>Hablemos</h3>
        <form style={styles.form}>
          <input type="text" placeholder="Tu nombre" required style={styles.input} />
          <input type="email" placeholder="Correo electrónico" required style={styles.input} />
          <textarea placeholder="¿Cuál es tu meta?" required style={styles.input} rows={4}></textarea>
          <button type="submit" style={styles.button}>Enviar</button>
        </form>
      </section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Genesis Fit. Todos los derechos reservados.
      </footer>

      <a href="https://wa.me/" style={styles.whatsapp}><FaWhatsapp color="#fff" size={24} /></a>
    </>
  );
}

const styles = {
  header: {
    background: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    fontFamily: 'Montserrat, sans-serif'
  },
  logo: { fontWeight: 700, color: '#94715F', fontSize: '1.5rem' },
  desktopNav: { display: 'flex', gap: '1.5rem', fontSize: '0.95rem', color: '#555', cursor: 'pointer' },
  menuIcon: { display: 'none', cursor: 'pointer', color: '#94715F' },
  mobileMenu: { position: 'absolute', top: '4rem', left: 0, right: 0, background: '#fff', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#94715F' },
  hero: { padding: '6rem 2rem 4rem', background: '#F9F4F1', textAlign: 'center' },
  heroTitle: { fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: '#94715F' },
  heroSubtitle: { fontSize: '1.1rem', marginBottom: '2rem', color: '#6b4d3b' },
  cta: { background: '#94715F', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '30px', textDecoration: 'none' },
  sectionLight: { padding: '4rem 2rem', background: '#fff' },
  sectionDark: { padding: '4rem 2rem', background: '#94715F', color: '#fff', textAlign: 'center' },
  sectionTitle: { textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', color: '#94715F' },
  sectionTitleLight: { textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', color: '#fff' },
  sectionText: { maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' },
  aboutContainer: { display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', gap: '2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' },
  aboutImg: { width: '100%', maxWidth: '400px', borderRadius: '12px', boxShadow: '0 0 20px rgba(0,0,0,0.1)' },
  serviceCards: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' },
  card: { background: '#fff', color: '#94715F', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', textAlign: 'center' },
  gallery: { display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' },
  galleryImg: { width: '100%', maxWidth: '300px', borderRadius: '10px' },
  form: { maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.8rem', borderRadius: '6px', border: 'none', fontSize: '1rem' },
  button: { backgroundColor: '#fff', color: '#94715F', fontWeight: 600, padding: '0.8rem', borderRadius: '30px', border: 'none', cursor: 'pointer' },
  footer: { background: '#222', color: '#ccc', textAlign: 'center', padding: '2rem', fontSize: '0.9rem' },
  whatsapp: { position: 'fixed', bottom: '20px', right: '20px', background: '#94715F', borderRadius: '50%', padding: '0.8rem', zIndex: 1000 }
};
