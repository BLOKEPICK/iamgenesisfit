// 🌟 Estilo completamente renovado con diseño distinto por sección
// Cada sección usa estructura, fondo y experiencia visual diferente para dar una navegación dinámica

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
        <title>Genesis Fit | Coaching Femenino Transformador</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>

      <header style={styles.header}>
        <div style={styles.logo}>GENESIS FIT</div>
        <nav style={styles.navDesktop}>
          <a onClick={() => scrollTo('#about')}>Sobre mí</a>
          <a onClick={() => scrollTo('#programs')}>Programas</a>
          <a onClick={() => scrollTo('#results')}>Resultados</a>
          <a onClick={() => scrollTo('#contact')}>Contacto</a>
        </nav>
        <FaBars onClick={() => setMenuOpen(!menuOpen)} style={styles.menuIcon} />
        {menuOpen && (
          <div style={styles.navMobile}>
            <a onClick={() => scrollTo('#about')}>Sobre mí</a>
            <a onClick={() => scrollTo('#programs')}>Programas</a>
            <a onClick={() => scrollTo('#results')}>Resultados</a>
            <a onClick={() => scrollTo('#contact')}>Contacto</a>
          </div>
        )}
      </header>

      <section style={styles.hero}>
        <video autoPlay muted loop style={styles.videoBg}>
          <source src="/background-fitness.mp4" type="video/mp4" />
        </video>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Confianza. Fuerza. Evolución.</h1>
          <p style={styles.heroSubtitle}>Coaching personalizado desde el corazón femenino.</p>
          <a href="#contact" style={styles.cta}>Solicita tu llamada gratuita</a>
        </div>
      </section>

      <section id="about" style={styles.aboutSection}>
        <div style={styles.aboutContent}>
          <div>
            <h2 style={styles.aboutTitle}>Soy Genesis</h2>
            <p>Tu guía en este viaje: transformaciones físicas, seguridad emocional y bienestar duradero.</p>
            <ul style={styles.aboutList}>
              <li>+5 años de experiencia</li>
              <li>+100 mujeres transformadas</li>
              <li>Certificación internacional en coaching</li>
            </ul>
          </div>
          <img src="/trainer_main.webp" alt="Genesis" style={styles.aboutImg} />
        </div>
      </section>

      <section id="programs" style={styles.diagonalSection}>
        <div style={styles.diagonalContent}>
          <h2 style={styles.sectionTitleLight}>Programas diseñados para ti</h2>
          <div style={styles.cardsAlt}>
            <div style={styles.cardAlt}><h3>Coaching 1:1</h3><p>Entrenamiento exclusivo adaptado a tu ritmo y metas personales.</p></div>
            <div style={styles.cardAlt}><h3>Reto 30 días</h3><p>Ideal si buscas resultados rápidos con comunidad y disciplina.</p></div>
            <div style={styles.cardAlt}><h3>Desintoxicación consciente</h3><p>Nutrición, mente y cuerpo alineados en un plan de 2 semanas.</p></div>
          </div>
        </div>
      </section>

      <section id="results" style={styles.resultsSection}>
        <h2 style={styles.resultsTitle}>Antes & Después</h2>
        <div style={styles.resultsSlider}>
          {[1, 2, 3].map(i => (
            <div key={i} style={styles.resultCard}>
              <img src={`/transformation_${i}.webp`} alt={`Resultado ${i}`} style={styles.resultImg} />
              <p style={styles.resultLabel}>8 semanas de progreso</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={styles.splitContact}>
        <div style={styles.splitLeft}>
          <h2 style={styles.contactTitle}>Comencemos tu viaje</h2>
          <p>Llena este formulario y recibe una respuesta en menos de 24h.</p>
        </div>
        <form style={styles.splitRight}>
          <input type="text" placeholder="Nombre" style={styles.input} required />
          <input type="email" placeholder="Email" style={styles.input} required />
          <textarea placeholder="¿Qué deseas lograr?" rows={4} style={styles.input}></textarea>
          <button type="submit" style={styles.button}>Enviar</button>
        </form>
      </section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Genesis Fit. Todos los derechos reservados.
      </footer>

      <a href="https://wa.me/" target="_blank" style={styles.whatsapp}><FaWhatsapp color="#fff" size={24} /></a>
    </>
  );
}

// Los nuevos estilos se agregarán en la próxima iteración si lo deseas
// Aquí ya tienes toda la estructura con diseño visual y experiencia distinta por sección
