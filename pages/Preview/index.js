// ✅ NUEVA VERSIÓN REEMPLAZABLE DE index.js
// Secciones "Sobre mí" y "Resultados" rediseñadas con layout profesional

import Head from "next/head";
import { useState, useEffect } from "react";
import { FaInstagram, FaWhatsapp, FaBars } from "react-icons/fa6";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <Head>
        <title>iamgenesisfit | Página oficial</title>
        <meta name="description" content="Transforma tu cuerpo con Genesis. Asesorías personalizadas en entrenamiento y nutrición." />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            background-color: #fdfaf9;
          }
          h1, h2, h3, h4 {
            font-family: 'Playfair Display', serif;
          }
        `}</style>
      </Head>

      {/* NAVBAR */}
      <header style={styles.header}>
        <h1 style={styles.logo}>iamgenesisfit</h1>
        <nav className="desktop-menu" style={styles.navLinks}>
          <a href="#sobre-mi" style={styles.navLink}>Sobre mí</a>
          <a href="#resultados" style={styles.navLink}>Transformaciones</a>
          <a href="#contacto" style={styles.navLink}>Formulario</a>
        </nav>
        <div className="mobile-menu-icon" style={{ display: "none" }}>
          <FaBars size={24} color="#fff" onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: "pointer" }} />
        </div>
        <style>{`
          @media (max-width: 768px) {
            .desktop-menu { display: none !important; }
            .mobile-menu-icon { display: block !important; }
          }
        `}</style>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <h2 style={styles.heroTitle}>Eleva tu bienestar con Genesis</h2>
        <p style={styles.heroSubtitle}>Entrenamiento y nutrición para transformar cuerpo y mente.</p>
        <a href="#contacto" style={styles.heroBtn}>Empieza ahora</a>
      </section>

      {/* SOBRE MI */}
      <section id="sobre-mi" style={styles.sectionAltBg}>
        <div style={styles.sobreMiGrid}>
          <div style={styles.sobreMiText}>
            <h2 style={styles.sectionTitle}>Conoce a Genesis</h2>
            <p>
              Soy Genesis, entrenadora certificada especializada en transformar no solo cuerpos, sino también la confianza y el bienestar de mis clientas. Con más de 5 años de experiencia, combino nutrición estratégica, entrenamiento personalizado y motivación constante.
            </p>
            <p>
              Mi misión es guiarte hacia una vida más fuerte, más sana y más segura de ti misma. Cada proceso es único, y tú mereces un plan que se adapte a ti y evolucione contigo.
            </p>
          </div>
          <img src="/trainer_main.webp" alt="Genesis" style={styles.trainerImgLarge} />
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" style={styles.sectionWhite}>
        <h2 style={styles.sectionTitle}>Transformaciones Reales</h2>
        <p style={styles.sectionDesc}>Historias reales de compromiso, esfuerzo y guía efectiva.</p>
        <div style={styles.resultadosGrid}>
          {[1, 2, 3].map(i => (
            <div key={i} style={styles.resultadoCard}>
              <img src={`/transformation_${i}.webp`} alt={`Transformación ${i}`} style={styles.resultadoImg} />
              <div style={styles.resultadoOverlay}>
                <p style={styles.resultadoTexto}>12 semanas de progreso</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="contacto" style={styles.sectionForm}>
        <h2 style={styles.sectionTitle}>¿Lista para empezar?</h2>
        <p style={styles.sectionDesc}>Completa este formulario y transforma tu vida hoy.</p>
        <form style={styles.form}>
          <input type="text" placeholder="Nombre" required style={styles.input} />
          <input type="email" placeholder="Correo electrónico" required style={styles.input} />
          <input type="text" placeholder="¿Cuántos días deseas entrenar?" style={styles.input} />
          <input type="text" placeholder="¿Alguna condición física?" style={styles.input} />
          <textarea placeholder="¿Cuál es tu meta?" style={styles.textarea} rows={3}></textarea>
          <textarea placeholder="¿Realizas alguna actividad física? ¿Cuáles?" style={styles.textarea} rows={3}></textarea>
          <button type="submit" style={styles.submitBtn}>Enviar solicitud</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} iamgenesisfit | Todos los derechos reservados
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/18292520244" target="_blank" rel="noopener noreferrer" style={styles.waBtn}>
        <FaWhatsapp size={28} color="#fff" />
      </a>
    </>
  );
}

// 🎨 ESTILOS PRINCIPALES
const primary = "#94715F";
const secondary = "#B89E90";
const styles = {
  header: {
    backgroundColor: primary,
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: "1.5rem",
    margin: 0,
  },
  navLinks: {
    display: "flex",
    gap: "2rem",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 500,
  },
  hero: {
    backgroundColor: secondary,
    color: "#fff",
    textAlign: "center",
    padding: "6rem 2rem",
  },
  heroTitle: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  heroBtn: {
    backgroundColor: primary,
    color: "#fff",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 600,
  },
  sectionAltBg: {
    backgroundColor: "#fff",
    padding: "4rem 2rem",
  },
  sobreMiGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    maxWidth: "1200px",
    margin: "0 auto",
    alignItems: "center",
  },
  sobreMiText: {
    fontSize: "1.05rem",
    color: "#333",
    lineHeight: 1.7,
  },
  trainerImgLarge: {
    width: "100%",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  },
  sectionWhite: {
    backgroundColor: "#fefefe",
    padding: "4rem 2rem",
  },
  resultadosGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  resultadoCard: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  },
  resultadoImg: {
    width: "100%",
    height: "360px",
    objectFit: "cover",
  },
  resultadoOverlay: {
    position: "absolute",
    bottom: 0,
    background: "rgba(0,0,0,0.6)",
    width: "100%",
    padding: "1rem",
  },
  resultadoTexto: {
    color: "#fff",
    fontWeight: 600,
    textAlign: "center",
  },
  sectionForm: {
    backgroundColor: primary,
    color: "#fff",
    padding: "4rem 2rem",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  sectionDesc: {
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto 2rem",
    fontSize: "1.1rem",
  },
  form: {
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.75rem 1rem",
    borderRadius: "6px",
    border: "none",
    fontSize: "1rem",
  },
  textarea: {
    padding: "0.75rem 1rem",
    borderRadius: "6px",
    border: "none",
    fontSize: "1rem",
  },
  submitBtn: {
    backgroundColor: "#fff",
    color: primary,
    fontWeight: 600,
    padding: "0.75rem",
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
  },
  footer: {
    backgroundColor: "#222",
    color: "#ccc",
    textAlign: "center",
    padding: "2rem 1rem",
    fontSize: "0.9rem",
  },
  waBtn: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: primary,
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
    zIndex: 999,
  },
};