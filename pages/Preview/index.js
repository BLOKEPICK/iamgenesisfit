// ✅ Página completa en un solo archivo para Genesis Fit - VERSIÓN FINAL COMPLETA

import Head from "next/head";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % 10);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + 10) % 10);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);
const inputStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'all 0.3s ease',
};

const inputFocusStyle = `
  input:focus, textarea:focus {
    border-color: #94715F;
    box-shadow: 0 0 0 2px rgba(148, 113, 95, 0.25);
  }
`;

  return (
    <>
      <Head>
        <title>Genesis Fit | Transformación real para mujeres reales</title>
        <meta name="description" content="Acompaña a Genesis Fit en tu proceso de cambio físico y mental. Programas únicos, testimonios reales, asesoría personalizada." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap" rel="stylesheet" />

        <style>{`
          html { scroll-behavior: smooth; }
          body {
            margin: 0;
            padding: 0;
            font-family: 'Manrope', sans-serif;
            background-color: #fff;
            color: #2D2D2D;
          }
          *::selection {
            background-color: #94715F;
            color: #fff;
          }
          a { color: inherit; text-decoration: none; }
          .desktop-menu {
            display: flex;
            gap: 1.5rem;
            font-size: 0.95rem;
            font-weight: 600;
          }
          .mobile-menu-icon { display: none; }
          .mobile-nav { display: none; }

          @media (max-width: 768px) {
            .desktop-menu { display: none !important; }
            .mobile-menu-icon { display: block !important; cursor: pointer; z-index: 101; }
            .mobile-nav {
              display: flex;
              flex-direction: column;
              background: #f0f0f0;
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100dvh;
              padding: 5rem 2rem 1rem;
              gap: 1.5rem;
              z-index: 100;
              overflow-y: auto;
              transition: all 0.3s ease;
              justify-content: space-between;
            }
            .mobile-nav-links {
              display: flex;
              flex-direction: column;
              gap: 1.25rem;
              align-items: flex-start;
            }
            .mobile-nav a {
              width: 100%;
              text-align: left;
              padding-left: 0.5rem;
              font-weight: 600;
              font-size: 1rem;
            }
            .mobile-nav hr {
              width: 100%;
              border: none;
              height: 1px;
              background: #ccc;
              margin: 1rem 0;
            }
            .mobile-nav-footer {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 1rem;
              width: 100%;
              padding-bottom: 2rem;
            }
          }
          .hero-button {
            background-color: #94715F;
            color: #fff;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .hero-button:hover {
            background-color: #B89E90;
          }
            .lightbox-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  flex-direction: column;
}
.lightbox-image {
  max-width: 90%;
  max-height: 80%;
  border-radius: 10px;
}
.lightbox-controls {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.lightbox-button {
  background: #fff;
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
}
.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
}
  ${inputFocusStyle}

        `}</style>
      </Head>

      <header style={{ position: 'sticky', top: 0, zIndex: 102, background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
        <a href="#hero" style={{ fontWeight: 700, fontSize: '1.5rem' }}><span style={{ fontWeight: 400 }}>Genesis</span> Fit</a>
        <nav className="desktop-menu">
          <a href="#sobremi">Sobre mí</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#before">Resultados</a>
          <a href="#faq">Preguntas</a>
          <a href="#formulario">Aplicación</a>
        </nav>
        <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav">
          <div>
            <div className="mobile-nav-links">
              <a href="#sobremi" onClick={() => setMenuOpen(false)}>Sobre mí</a>
              <a href="#testimonios" onClick={() => setMenuOpen(false)}>Testimonios</a>
              <a href="#before" onClick={() => setMenuOpen(false)}>Resultados</a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>Preguntas</a>
              <a href="#formulario" onClick={() => setMenuOpen(false)}>Aplicación</a>
            </div>
            <hr />
            <div className="mobile-nav-footer">
              <div style={{ fontWeight: 700, fontSize: '2.5rem' }}><span style={{ fontWeight: 400 }}>Genesis</span> Fit</div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://instagram.com/GeorgeValdezR" target="_blank"><FaInstagram size={24} /></a>
                <a href="https://tiktok.com" target="_blank"><FaTiktok size={24} /></a>
              </div>
            </div>
          </div>
        </nav>
      )}

      <main>
        <section id="hero" style={{ background: 'linear-gradient(to right, #fff 60%, rgba(183, 158, 144, 0.15))', padding: '5rem 2rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '500px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
  Únete al cambio con <span style={{ fontWeight: 400 }}>Genesis</span> Fit
</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Entrenamiento personalizado para mujeres que desean transformar su cuerpo y su mente.</p>
            <a href="#formulario" className="hero-button">Comienza Ahora</a>
          </div>
          <img src="/trainer_main.webp" alt="Genesis" style={{ maxWidth: '400px', borderRadius: '1rem', objectFit: 'cover' }} />
        </section>

        {/* Sobre mí */}
        <section id="sobremi" style={{ padding: '5rem 2rem', background: '#E5D1C2', color: '#2D2D2D' }}>
  <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Conóceme más</h2>
    <hr style={{ width: '60px', height: '3px', backgroundColor: '#94715F', border: 'none', marginBottom: '2rem' }} />
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '700px' }}>
              ¡Hola! Soy Genesis, una entrenadora que entiende lo que significa empezar desde cero, dudar y aun así seguir. Estoy aquí para guiarte, motivarte y darte herramientas reales para lograr cambios sostenibles. <br /><br />
              Mi enfoque es empático, humano y efectivo. No importa tu punto de partida: juntas construiremos un camino que respete tu cuerpo, tus tiempos y tus objetivos. No se trata de ser perfecta, sino de ser constante. <br /><br />
              Aquí no trabajamos por presión, sino por convicción. Porque mereces sentirte bien contigo misma. 💪
            </p>
          </div>
        </section>

{/* Testimonios */}
<section id="testimonios" style={{ padding: '4rem 2rem', background: '#fff' }}>
  <h2 style={{ textAlign: 'center', marginBottom: '0.5rem', fontSize: '2rem' }}>Testimonios</h2>
  <div style={{
    width: '60px',
    height: '3px',
    backgroundColor: '#94715F',
    margin: '0 auto 2rem',
    borderRadius: '4px'
  }}></div>

  <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem', paddingBottom: '1rem' }}>
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        style={{
          minWidth: '280px',
          height: '360px',
          background: '#f5f5f5',
          borderRadius: '12px',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
        onClick={() => openLightbox(i)}
      >
        <img
          src={`/testimonial_${i + 1}.webp`}
          alt={`Testimonio ${i + 1}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    ))}
  </div>

  {lightboxOpen && (
    <div className="lightbox-overlay" onClick={closeLightbox}>
      <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
      <img
        src={`/testimonial_${lightboxIndex + 1}.webp`}
        alt={`Testimonio ${lightboxIndex + 1}`}
        className="lightbox-image"
      />
      <div className="lightbox-controls">
        <button className="lightbox-button" onClick={prevImage}>Anterior</button>
        <button className="lightbox-button" onClick={nextImage}>Siguiente</button>
      </div>
    </div>
  )}
</section>

        {/* Before & After */}
<section id="before" style={{ padding: '4rem 2rem', background: '#E5D1C2', textAlign: 'center' }}>
  <h2 style={{ marginBottom: '0.5rem' }}>Resultados Reales</h2>
  <div style={{ width: '80px', height: '3px', backgroundColor: '#94715F', margin: '0 auto 2.5rem auto' }}></div>

  <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
    {[1, 2, 3].map(i => (
      <img
        key={i}
        src={`/before_after_${i}.webp`}
        alt={`Transformación ${i}`}
        style={{
          width: '300px',
          height: '360px',
          objectFit: 'cover',
          borderRadius: '12px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      />
    ))}
  </div>
</section>




        {/* FAQ */}
<section id="faq" style={{ padding: '5rem 2rem', backgroundColor: '#fff', textAlign: 'center' }}>
  <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Preguntas Frecuentes</h2>
  <p style={{ marginBottom: '2.5rem', color: '#555' }}>
    Si tienes alguna otra pregunta, <a href="https://wa.me/18292520244" target="_blank" rel="noopener noreferrer" style={{ color: '#94715F', textDecoration: 'underline' }}>escríbenos por WhatsApp</a>.
  </p>
  <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    {[
      ["¿Necesito experiencia previa?", "No, todos los niveles son bienvenidos."],
      ["¿Dónde se realizan los entrenamientos?", "Son rutinas que puedes seguir desde casa o en gimnasio."],
      ["¿Los planes incluyen nutrición?", "Sí, se incluye una guía nutricional personalizada."],
      ["¿Hay seguimiento semanal?", "Sí, tendrás contacto constante conmigo para evaluar tu progreso."],
      ["¿Qué duración tiene el plan?", "Cada plan es mensual, renovable."],
    ].map(([q, a], idx) => (
      <details key={idx} style={{ background: '#f7f7f7', borderRadius: '8px', padding: '1rem 1.25rem' }}>
        <summary style={{ cursor: 'pointer', fontWeight: '600', fontSize: '1rem', outline: 'none' }}>{q}</summary>
        <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', lineHeight: 1.6 }}>{a}</p>
      </details>
    ))}
  </div>
</section>


        {/* Formulario */}
<section id="formulario" style={{ padding: '5rem 2rem', background: '#E5D1C2', textAlign: 'center' }}>
  <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Formulario de Aplicación</h2>
  <p style={{ marginBottom: '2.5rem', color: '#4A3B36' }}>
    Responde este formulario para iniciar tu transformación. ¡Estoy aquí para acompañarte en cada paso!
  </p>
  <form
  action="https://formspree.io/f/mayzrwry"
  method="POST"
  style={{
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
    boxSizing: 'border-box',
  }}
>

    <input
      type="text"
      name="nombre"
      placeholder="Nombre completo"
      required
      style={{
        padding: '0.75rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '6px',
        fontSize: '1rem',
        fontFamily: 'inherit',
        width: '95%'
      }}
    />
    <input
      type="email"
      name="email"
      placeholder="Correo electrónico"
      required
      style={{
        padding: '0.75rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '6px',
        fontSize: '1rem',
        fontFamily: 'inherit',
        width: '95%'
      }}
    />
    <input
      type="text"
      name="dias"
      placeholder="¿Cuántos días deseas entrenar?"
      style={{
        padding: '0.75rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '6px',
        fontSize: '1rem',
        fontFamily: 'inherit',
        width: '95%'
      }}
    />
    <input
      type="text"
      name="condicion"
      placeholder="¿Alguna condición física?"
      style={{
        padding: '0.75rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '6px',
        fontSize: '1rem',
        fontFamily: 'inherit',
        width: '95%'
      }}
    />
    <textarea
      name="meta"
      placeholder="¿Cuál es tu meta que buscas lograr?"
      rows={3}
      style={{
        padding: '0.75rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '6px',
        fontSize: '1rem',
        fontFamily: 'inherit',
        width: '95%',
        resize: 'none'
      }}
    ></textarea>
    <textarea
      name="actividad"
      placeholder="¿Realizas alguna actividad física actualmente?"
      rows={3}
      style={{
        padding: '0.75rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '6px',
        fontSize: '1rem',
        fontFamily: 'inherit',
        width: '95%',
        resize: 'none'
      }}
    ></textarea>
    <button
      type="submit"
      style={{
        backgroundColor: '#94715F',
        color: '#fff',
        padding: '0.85rem',
        borderRadius: '6px',
        fontWeight: '600',
        fontSize: '1rem',
        border: 'none',
        cursor: 'pointer'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#B89E90'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#94715F'}
    >
      Enviar
    </button>
  </form>
</section>

      </main>

      {/* Footer estilo moderno y claro */}
<footer style={{ backgroundColor: '#F4ECE7', color: '#4A3B36', padding: '2rem 1.5rem', textAlign: 'center', fontSize: '0.9rem' }}>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
    <a href="https://instagram.com/GeorgeValdezR" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={22} />
    </a>
    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
      <FaTiktok size={22} />
    </a>
  </div>
  <div style={{ marginBottom: '0.5rem' }}>© 2025 Genesis Fit. Todos los derechos reservados.</div>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
    <a href="/privacy" style={{ color: '#4A3B36', textDecoration: 'underline' }}>Privacidad</a>
    <a href="/terms" style={{ color: '#4A3B36', textDecoration: 'underline' }}>Términos</a>
    <a href="https://instagram.com/GVRFlex" target="_blank" style={{ color: '#4A3B36' }}>Diseñado por: GVRFlex</a>
  </div>
</footer>
    </>
  );
}
