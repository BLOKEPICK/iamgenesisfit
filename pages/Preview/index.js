// ✅ PLANTILLA COMPLETA NUEVA PARA GENESIS FIT
// Diseño profesional y único desde cero, sin depender del anterior

import Head from 'next/head';
import { useState } from 'react';
import { FaBars, FaWhatsapp } from 'react-icons/fa';

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
        <title>Genesis Fit | Fitness & Empowerment</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>

      <header style={styles.header}>
        <h1 style={styles.logo}>Genesis Fit</h1>
        <nav style={styles.navDesktop}>
          <a onClick={() => scrollTo('#about')}>Sobre mí</a>
          <a onClick={() => scrollTo('#plans')}>Planes</a>
          <a onClick={() => scrollTo('#gallery')}>Resultados</a>
          <a onClick={() => scrollTo('#contact')}>Contacto</a>
        </nav>
        <FaBars onClick={() => setMenuOpen(!menuOpen)} style={styles.burger} />
        {menuOpen && (
          <div style={styles.navMobile}>
            <a onClick={() => scrollTo('#about')}>Sobre mí</a>
            <a onClick={() => scrollTo('#plans')}>Planes</a>
            <a onClick={() => scrollTo('#gallery')}>Resultados</a>
            <a onClick={() => scrollTo('#contact')}>Contacto</a>
          </div>
        )}
      </header>

      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>Entrena con propósito</h2>
          <p style={styles.heroText}>Programas personalizados que empoderan tu cuerpo y tu mente.</p>
          <a href="#contact" style={styles.cta}>Empieza hoy</a>
        </div>
      </section>

      <section id="about" style={styles.splitSection}>
        <img src="/trainer_main.webp" alt="Genesis" style={styles.imageBlock} />
        <div style={styles.textBlock}>
          <h3 style={styles.sectionTitle}>Soy Genesis</h3>
          <p>Especialista en transformar vidas desde dentro hacia fuera. Mi pasión es guiar a mujeres a través de procesos reales y sostenibles. No vendo fórmulas mágicas, trabajo con resultados tangibles.</p>
        </div>
      </section>

      <section id="plans" style={styles.plansSection}>
        <h3 style={styles.sectionTitle}>Planes Disponibles</h3>
        <div style={styles.cardContainer}>
          <div style={styles.card}><h4>Básico</h4><p>Rutina + guía semanal</p></div>
          <div style={styles.card}><h4>Premium</h4><p>Plan completo con coaching personalizado</p></div>
          <div style={styles.card}><h4>Elite</h4><p>Seguimiento 24/7 + soporte exclusivo</p></div>
        </div>
      </section>

      <section id="gallery" style={styles.gallerySection}>
        <h3 style={styles.sectionTitle}>Resultados Reales</h3>
        <div style={styles.gallery}>
          {[1, 2, 3].map(i => (
            <img key={i} src={`/transformation_${i}.webp`} alt={`Transformación ${i}`} style={styles.galleryImg} />
          ))}
        </div>
      </section>

      <section id="contact" style={styles.contactSection}>
        <h3 style={styles.sectionTitle}>Contáctame</h3>
        <form style={styles.form}>
          <input type="text" placeholder="Nombre" style={styles.input} required />
          <input type="email" placeholder="Correo" style={styles.input} required />
          <textarea placeholder="Cuéntame tu objetivo" rows={4} style={styles.input} required></textarea>
          <button type="submit" style={styles.button}>Enviar</button>
        </form>
      </section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Genesis Fit. Todos los derechos reservados.
      </footer>

      <a href="https://wa.me/" target="_blank" style={styles.whatsapp}><FaWhatsapp size={22} color="#fff" /></a>
    </>
  );
}

const styles = {
  header: { position: 'fixed', top: 0, width: '100%', background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', zIndex: 1000, fontFamily: 'Outfit, sans-serif', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' },
  logo: { fontWeight: 700, fontSize: '1.5rem', color: '#333' },
  navDesktop: { display: 'flex', gap: '1.5rem', fontSize: '0.95rem', color: '#444', cursor: 'pointer' },
  burger: { display: 'none', cursor: 'pointer', color: '#333' },
  navMobile: { position: 'absolute', top: '4rem', left: 0, right: 0, background: '#fff', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem', textAlign: 'center' },
  hero: { background: '#EFE8E1', padding: '7rem 2rem 5rem', textAlign: 'center' },
  heroContent: { maxWidth: '700px', margin: '0 auto' },
  heroTitle: { fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' },
  heroText: { fontSize: '1.1rem', marginBottom: '2rem', color: '#555' },
  cta: { background: '#333', color: '#fff', padding: '0.9rem 2rem', borderRadius: '30px', textDecoration: 'none', fontWeight: 500 },
  splitSection: { display: 'flex', flexDirection: 'column-reverse', gap: '2rem', padding: '4rem 2rem', alignItems: 'center' },
  imageBlock: { width: '100%', maxWidth: '400px', borderRadius: '12px' },
  textBlock: { maxWidth: '600px', textAlign: 'center' },
  sectionTitle: { textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', color: '#222' },
  plansSection: { padding: '5rem 2rem', background: '#f9f9f9' },
  cardContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' },
  card: { background: '#fff', padding: '2rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
  gallerySection: { padding: '5rem 2rem', background: '#fff' },
  gallery: { display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' },
  galleryImg: { width: '100%', maxWidth: '300px', borderRadius: '10px' },
  contactSection: { background: '#333', color: '#fff', padding: '4rem 2rem', textAlign: 'center' },
  form: { maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.9rem', borderRadius: '6px', border: 'none', fontSize: '1rem' },
  button: { background: '#fff', color: '#333', fontWeight: 600, padding: '0.9rem', borderRadius: '30px', border: 'none', cursor: 'pointer' },
  footer: { background: '#111', color: '#ccc', textAlign: 'center', padding: '2rem', fontSize: '0.9rem' },
  whatsapp: { position: 'fixed', bottom: '20px', right: '20px', background: '#333', padding: '0.75rem', borderRadius: '50%', zIndex: 1000 }
};
