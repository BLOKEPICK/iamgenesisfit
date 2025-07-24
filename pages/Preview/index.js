// 🌟 NUEVA PLANTILLA PROFESIONAL CON ESTILO PULIDO Y TOTALMENTE ADAPTATIVA
// Incluye imágenes estratégicamente ubicadas, diseño visual limpio, elegante y moderno

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
        <title>Genesis Fit | Potencia tu transformación</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header style={styles.header}>
        <div style={styles.logo}>Genesis Fit</div>
        <nav style={styles.nav}>
          <a onClick={() => scrollTo('#hero')}>Inicio</a>
          <a onClick={() => scrollTo('#about')}>Sobre mí</a>
          <a onClick={() => scrollTo('#services')}>Servicios</a>
          <a onClick={() => scrollTo('#testimonials')}>Resultados</a>
          <a onClick={() => scrollTo('#contact')}>Contacto</a>
        </nav>
      </header>

      <section id="hero" style={styles.hero}>
        <img src="/hero-banner.webp" alt="Entrenamiento" style={styles.heroImage} />
        <div style={styles.heroTextBlock}>
          <h1 style={styles.heroTitle}>Transforma tu cuerpo y tu energía</h1>
          <p style={styles.heroSubtitle}>Coaching integral para mujeres que buscan una evolución real.</p>
        </div>
      </section>

      <section id="about" style={styles.sectionWhite}>
        <div style={styles.aboutContainer}>
          <img src="/trainer_main.webp" alt="Genesis" style={styles.aboutImg} />
          <div>
            <h2 style={styles.sectionTitle}>Soy Genesis</h2>
            <p style={styles.sectionText}>Entrenadora certificada, apasionada por empoderar a mujeres. A través de planes individualizados, creo procesos de cambio físico, mental y emocional.</p>
          </div>
        </div>
      </section>

      <section id="services" style={styles.sectionGray}>
        <h2 style={styles.sectionTitle}>¿Qué incluye mi programa?</h2>
        <ul style={styles.serviceList}>
          <li>✅ Rutinas personalizadas según tus objetivos y estilo de vida</li>
          <li>✅ Guía nutricional sencilla y práctica</li>
          <li>✅ Acompañamiento emocional y seguimiento</li>
          <li>✅ Comunicación constante y ajustes semanales</li>
        </ul>
      </section>

      <section id="testimonials" style={styles.sectionWhite}>
        <h2 style={styles.sectionTitle}>Resultados de mis clientas</h2>
        <div style={styles.gallery}>
          {[1, 2, 3].map(i => (
            <img key={i} src={`/transformation_${i}.webp`} alt={`Transformación ${i}`} style={styles.galleryImg} />
          ))}
        </div>
      </section>

      <section id="contact" style={styles.contactSection}>
        <div style={styles.contactContent}>
          <h2 style={styles.sectionTitleLight}>¿Lista para comenzar?</h2>
          <p style={styles.sectionTextLight}>Escríbeme y trabajaremos juntas en tu mejor versión.</p>
          <form style={styles.form}>
            <input type="text" placeholder="Nombre" required style={styles.input} />
            <input type="email" placeholder="Correo electrónico" required style={styles.input} />
            <textarea rows="4" placeholder="¿Cuál es tu meta?" required style={styles.input}></textarea>
            <button type="submit" style={styles.button}>Enviar</button>
          </form>
        </div>
      </section>

      <footer style={styles.footer}>© {new Date().getFullYear()} Genesis Fit | Todos los derechos reservados</footer>
    </>
  );
}

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', position: 'fixed', top: 0, width: '100%', background: '#fff', zIndex: 1000, boxShadow: '0 2px 6px rgba(0,0,0,0.05)', fontFamily: 'Outfit, sans-serif' },
  logo: { fontWeight: 800, fontSize: '1.4rem', color: '#111' },
  nav: { display: 'flex', gap: '1.5rem', fontSize: '0.95rem', color: '#444', cursor: 'pointer' },
  hero: { position: 'relative', height: '90vh', overflow: 'hidden' },
  heroImage: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65)' },
  heroTextBlock: { position: 'relative', zIndex: 10, padding: '4rem 2rem', color: '#fff', maxWidth: '700px' },
  heroTitle: { fontSize: '2.8rem', fontWeight: 800, marginBottom: '1rem' },
  heroSubtitle: { fontSize: '1.2rem' },
  sectionWhite: { padding: '5rem 2rem', background: '#fff' },
  sectionGray: { padding: '5rem 2rem', background: '#f8f8f8' },
  sectionTitle: { fontSize: '2rem', marginBottom: '2rem', fontWeight: 700, textAlign: 'center' },
  sectionText: { maxWidth: '600px', margin: '0 auto', textAlign: 'center', lineHeight: 1.7 },
  aboutContainer: { display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' },
  aboutImg: { width: '100%', maxWidth: '400px', borderRadius: '12px' },
  serviceList: { maxWidth: '600px', margin: '0 auto', padding: 0, listStyle: 'none', lineHeight: 2, fontSize: '1rem' },
  gallery: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' },
  galleryImg: { width: '100%', maxWidth: '280px', borderRadius: '10px' },
  contactSection: { background: '#111', color: '#fff', padding: '5rem 2rem' },
  contactContent: { maxWidth: '600px', margin: '0 auto', textAlign: 'center' },
  sectionTitleLight: { fontSize: '2rem', marginBottom: '1rem', fontWeight: 700 },
  sectionTextLight: { marginBottom: '2rem', fontSize: '1.1rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.9rem', borderRadius: '6px', border: 'none', fontSize: '1rem' },
  button: { backgroundColor: '#fff', color: '#111', fontWeight: 600, padding: '0.9rem', borderRadius: '30px', border: 'none', cursor: 'pointer' },
  footer: { background: '#000', color: '#aaa', textAlign: 'center', padding: '2rem', fontSize: '0.85rem' }
};