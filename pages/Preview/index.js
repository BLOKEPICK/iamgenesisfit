import Head from 'next/head';
import { useState, useEffect } from 'react';
import { FaBars, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>Genesis Fit | Transforma tu cuerpo y mente</title>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600&family=Great+Vibes&display=swap" rel="stylesheet" />
      </Head>

      <header style={styles.header}>
        <h1 style={styles.logo}>Genesis Fit</h1>
        <nav style={styles.navDesktop}>
          <a onClick={() => scrollToSection('#sobre-mi')}>Sobre mí</a>
          <a onClick={() => scrollToSection('#servicios')}>Servicios</a>
          <a onClick={() => scrollToSection('#transformaciones')}>Transformaciones</a>
          <a onClick={() => scrollToSection('#contacto')}>Contacto</a>
        </nav>
        <FaBars size={24} color="#fff" onClick={() => setMenuOpen(!menuOpen)} style={styles.menuIcon} />
        {menuOpen && (
          <div style={styles.navMobile}>
            <a onClick={() => scrollToSection('#sobre-mi')}>Sobre mí</a>
            <a onClick={() => scrollToSection('#servicios')}>Servicios</a>
            <a onClick={() => scrollToSection('#transformaciones')}>Transformaciones</a>
            <a onClick={() => scrollToSection('#contacto')}>Contacto</a>
          </div>
        )}
      </header>

      <main>
        <section style={styles.hero}>
          <h2 style={styles.heroTitle}>Transforma tu cuerpo, fortalece tu mente</h2>
          <p style={styles.heroSubtitle}>Acompañamiento personalizado para alcanzar tu mejor versión.</p>
          <a href="#contacto" style={styles.heroBtn}>Comienza hoy</a>
        </section>

        <section id="sobre-mi" style={styles.section}>
          <div style={styles.grid}>
            <img src="/trainer_main.webp" style={styles.image} alt="Genesis" />
            <div>
              <h3 style={styles.title}>Soy Genesis</h3>
              <p>Como entrenadora fitness certificada, he guiado a decenas de mujeres hacia su mejor versión física y mental.</p>
              <p style={styles.firma}>&mdash; Genesis</p>
            </div>
          </div>
        </section>

        <section id="servicios" style={styles.sectionAlt}>
          <h3 style={styles.title}>Mis Servicios</h3>
          <p>Entrenamiento personalizado, asesorías nutricionales y coaching emocional para potenciar resultados.</p>
        </section>

        <section id="transformaciones" style={styles.section}>
          <h3 style={styles.title}>Transformaciones reales</h3>
          <div style={styles.gallery}>
            {[1, 2, 3].map(i => (
              <div key={i} style={styles.card}>
                <img src={`/transformation_${i}.webp`} alt={`Transformación ${i}`} style={styles.cardImg} />
                <p style={styles.cardText}>8 semanas de progreso</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" style={styles.contacto}>
          <h3 style={styles.title}>Contáctame</h3>
          <form style={styles.form}>
            <input style={styles.input} type="text" placeholder="Nombre" required />
            <input style={styles.input} type="email" placeholder="Correo electrónico" required />
            <textarea style={styles.input} placeholder="Mensaje" required />
            <button type="submit" style={styles.button}>Enviar</button>
          </form>
        </section>
      </main>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Genesis Fit | Todos los derechos reservados
      </footer>

      <a href="https://wa.me/" target="_blank" style={styles.whatsapp}>
        <FaWhatsapp color="#fff" size={28} />
      </a>
    </>
  );
}

const styles = {
  header: {
    background: '#94715F',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    color: '#fff',
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.8rem',
  },
  navDesktop: {
    display: 'flex',
    gap: '1.5rem',
    color: '#fff',
    fontWeight: 500,
    cursor: 'pointer',
  },
  navMobile: {
    position: 'absolute',
    top: '4rem',
    left: 0,
    right: 0,
    backgroundColor: '#94715F',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    gap: '1rem',
    color: '#fff',
  },
  menuIcon: {
    display: 'block',
    cursor: 'pointer',
  },
  hero: {
    backgroundColor: '#E3D5CA',
    color: '#fff',
    textAlign: 'center',
    padding: '7rem 2rem 5rem',
  },
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    fontFamily: 'Playfair Display',
  },
  heroSubtitle: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
  },
  heroBtn: {
    backgroundColor: '#94715F',
    color: '#fff',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
  },
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#fff',
  },
  sectionAlt: {
    padding: '4rem 2rem',
    backgroundColor: '#f7f4f2',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Playfair Display',
    fontSize: '2rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column-reverse',
    gap: '2rem',
    maxWidth: '1100px',
    margin: '0 auto',
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '12px',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
  },
  firma: {
    fontFamily: 'Great Vibes',
    fontSize: '2rem',
    color: '#94715F',
    marginTop: '1rem',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  card: {
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  cardImg: {
    width: '100%',
    height: 'auto',
  },
  cardText: {
    backgroundColor: '#94715F',
    color: '#fff',
    textAlign: 'center',
    padding: '0.5rem',
  },
  contacto: {
    padding: '4rem 2rem',
    backgroundColor: '#94715F',
    color: '#fff',
    textAlign: 'center',
  },
  form: {
    maxWidth: '500px',
    margin: '2rem auto 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: 'none',
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#fff',
    color: '#94715F',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#222',
    color: '#ccc',
    textAlign: 'center',
    padding: '2rem 1rem',
    fontSize: '0.9rem',
  },
  whatsapp: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#94715F',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 15px rgba(0,0,0,0.3)',
    zIndex: 999,
  },
};