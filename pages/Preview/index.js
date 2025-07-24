// 🌐 Nuevo diseño basado en el estilo de jamiebrownfit.com.au
// Inspiración en bloques modernos, tipografía grande, secciones visuales limpias y llamadas a la acción destacadas

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
        <h1 style={styles.heroTitle}>Resultados reales. Confianza duradera.</h1>
        <p style={styles.heroSubtitle}>Coaching personalizado para mujeres que quieren transformar cuerpo y mente.</p>
        <a href="#contact" style={styles.cta}>Agenda tu sesión gratuita</a>
      </section>

      <section id="about" style={styles.sectionWhite}>
        <div style={styles.flexRow}>
          <div style={styles.textBlock}>
            <h2 style={styles.sectionTitle}>Hola, soy Genesis</h2>
            <p>Más que entrenadora, soy tu guía para descubrir tu versión más segura, fuerte y auténtica. Trabajo exclusivamente con mujeres que están listas para un cambio real. ¿Te animas?</p>
          </div>
          <img src="/trainer_main.webp" style={styles.imageBlock} alt="Genesis" />
        </div>
      </section>

      <section id="programs" style={styles.sectionGray}>
        <h2 style={styles.sectionTitleDark}>Programas personalizados</h2>
        <div style={styles.programGrid}>
          <div style={styles.programCard}><h3>Online Coaching</h3><p>Entrenamiento y seguimiento remoto con planificación semanal.</p></div>
          <div style={styles.programCard}><h3>Desafíos Grupales</h3><p>Reta tu cuerpo junto a otras mujeres y motívate en comunidad.</p></div>
          <div style={styles.programCard}><h3>Plan Nutricional</h3><p>Alimentación pensada para ti, sin dietas extremas ni restricciones absurdas.</p></div>
        </div>
      </section>

      <section id="results" style={styles.sectionWhite}>
        <h2 style={styles.sectionTitle}>Historias reales</h2>
        <div style={styles.resultsGallery}>
          {[1, 2, 3].map((i) => (
            <img key={i} src={`/transformation_${i}.webp`} alt={`Transformación ${i}`} style={styles.resultImage} />
          ))}
        </div>
      </section>

      <section id="contact" style={styles.sectionCall}>
        <h2 style={styles.sectionTitleDark}>Lista para comenzar tu cambio?</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Tu nombre" required style={styles.input} />
          <input type="email" placeholder="Correo electrónico" required style={styles.input} />
          <textarea placeholder="Cuéntame qué deseas lograr" rows={4} style={styles.input}></textarea>
          <button type="submit" style={styles.button}>Enviar solicitud</button>
        </form>
      </section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Genesis Fit – Todos los derechos reservados.
      </footer>

      <a href="https://wa.me/" target="_blank" style={styles.whatsapp}><FaWhatsapp size={22} color="#fff" /></a>
    </>
  );
}

const styles = {
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', position: 'fixed', top: 0, width: '100%', background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', zIndex: 1000, fontFamily: 'Inter, sans-serif'
  },
  logo: { fontWeight: 800, fontSize: '1.5rem', color: '#111' },
  navDesktop: { display: 'flex', gap: '2rem', fontSize: '0.95rem', color: '#444', cursor: 'pointer' },
  menuIcon: { display: 'none', color: '#111', cursor: 'pointer' },
  navMobile: { position: 'absolute', top: '4.5rem', left: 0, right: 0, background: '#fff', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem', textAlign: 'center' },

  hero: { padding: '8rem 2rem 6rem', background: '#f6f6f6', textAlign: 'center' },
  heroTitle: { fontSize: '3rem', fontWeight: 800, maxWidth: '800px', margin: '0 auto 1rem', color: '#222' },
  heroSubtitle: { fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem', color: '#555' },
  cta: { backgroundColor: '#111', color: '#fff', padding: '0.9rem 2rem', borderRadius: '30px', textDecoration: 'none', fontWeight: 600 },

  sectionWhite: { padding: '5rem 2rem', background: '#fff' },
  sectionGray: { padding: '5rem 2rem', background: '#f0f0f0' },
  sectionCall: { padding: '5rem 2rem', background: '#222', color: '#fff', textAlign: 'center' },
  sectionTitle: { fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', color: '#111' },
  sectionTitleDark: { fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', color: '#fff' },
  textBlock: { maxWidth: '500px', textAlign: 'left' },
  imageBlock: { width: '100%', maxWidth: '400px', borderRadius: '12px' },
  flexRow: { display: 'flex', flexDirection: 'column-reverse', gap: '2rem', alignItems: 'center', justifyContent: 'center', maxWidth: '1100px', margin: '0 auto' },

  programGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' },
  programCard: { background: '#fff', padding: '2rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },

  resultsGallery: { display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' },
  resultImage: { maxWidth: '300px', borderRadius: '10px' },

  form: { maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.9rem', borderRadius: '6px', border: 'none', fontSize: '1rem' },
  button: { backgroundColor: '#fff', color: '#111', padding: '0.9rem', fontWeight: 600, borderRadius: '30px', border: 'none', cursor: 'pointer' },

  footer: { background: '#111', color: '#ccc', textAlign: 'center', padding: '2rem', fontSize: '0.9rem' },
  whatsapp: { position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#111', padding: '0.75rem', borderRadius: '50%' }
};
