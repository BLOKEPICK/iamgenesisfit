// ✅ NUEVA VERSIÓN REEMPLAZABLE DE index.js
// Estilo profesional completo basado en #94715F, fuente Poppins + Playfair Display, eliminado FAQ y Planes, con formulario optimizado

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
        <div style={styles.trainerWrapper}>
          <img src="/trainer_main.webp" alt="Genesis" style={styles.trainerImg} />
          <div>
            <h2>Sobre mí</h2>
            <p>
              Soy Genesis, entrenadora certificada especializada en ayudar a mujeres a transformar su físico y su mentalidad. Mi enfoque es integral, personalizado y basado en resultados reales.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" style={styles.sectionWhite}>
        <h2 style={styles.sectionTitle}>Transformaciones Reales</h2>
        <p style={styles.sectionDesc}>Historias reales de compromiso, esfuerzo y guía efectiva.</p>
        <div style={styles.galleryGrid}>
          {[1, 2, 3].map(i => (
            <div key={i} style={styles.galleryCard}>
              <img src={`/transformation_${i}.webp`} alt={`Transformación ${i}`} style={styles.galleryImg} />
              <p style={styles.galleryCaption}>12 semanas de cambio total</p>
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
  sectionWhite: {
    backgroundColor: "#fefefe",
    padding: "4rem 2rem",
  },
  sectionForm: {
    backgroundColor: primary,
    color: "#fff",
    padding: "4rem 2rem",
  },
  trainerWrapper: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "2rem",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  trainerImg: {
    width: "300px",
    borderRadius: "12px",
    objectFit: "cover",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)",
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
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  galleryCard: {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  },
  galleryImg: {
    width: "100%",
    height: "360px",
    objectFit: "cover",
  },
  galleryCaption: {
    padding: "1rem",
    backgroundColor: secondary,
    color: "#000",
    textAlign: "center",
    fontWeight: 500,
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
