// ✅ Página completa en un solo archivo para Genesis Fit - VERSIÓN FINAL COMPLETA

import Head from "next/head";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

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
              height: 100vh;
              padding: 6rem 2rem 2rem;
              gap: 1.5rem;
              z-index: 100;
              overflow-y: auto;
              transition: all 0.3s ease;
              align-items: center;
              justify-content: flex-start;
            }
            .mobile-nav hr {
              width: 100%;
              border: none;
              height: 1px;
              background: #ccc;
              margin: 2rem 0 1rem;
            }
            .mobile-nav-footer {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 1rem;
              margin-top: auto;
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
        `}</style>
      </Head>

      <header style={{ position: 'sticky', top: 0, zIndex: 102, background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
        <a href="#hero" style={{ fontWeight: 700, fontSize: '1.5rem' }}><span style={{ fontWeight: 400 }}>Genesis</span> Fit</a>
        <nav className="desktop-menu">
          <a href="#sobremi">Sobre mí</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#before">Resultados</a>
          <a href="#faq">Preguntas</a>
          <a href="#formulario">Contacto</a>
        </nav>
        <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav">
          <a href="#sobremi" onClick={() => setMenuOpen(false)}>Sobre mí</a>
          <a href="#testimonios" onClick={() => setMenuOpen(false)}>Testimonios</a>
          <a href="#before" onClick={() => setMenuOpen(false)}>Resultados</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>Preguntas</a>
          <a href="#formulario" onClick={() => setMenuOpen(false)}>Contacto</a>
          <hr />
          <div className="mobile-nav-footer">
            <div style={{ fontWeight: 700, fontSize: '1.5rem' }}><span style={{ fontWeight: 400 }}>Genesis</span> Fit</div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://instagram.com/GeorgeValdezR" target="_blank"><FaInstagram size={24} /></a>
              <a href="https://tiktok.com" target="_blank"><FaTiktok size={24} /></a>
            </div>
          </div>
        </nav>
      )}

      <main>
        <section id="hero" style={{ background: 'linear-gradient(to right, #fff 60%, rgba(183, 158, 144, 0.15))', padding: '5rem 2rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '500px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Únete al cambio con <strong>Genesis Fit</strong></h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Entrenamiento personalizado para mujeres que desean transformar su cuerpo y su mente.</p>
            <a href="#formulario" className="hero-button">Comienza Ahora</a>
          </div>
          <img src="/trainer_main.webp" alt="Genesis" style={{ maxWidth: '400px', borderRadius: '1rem', objectFit: 'cover' }} />
        </section>

        {/* FAQ */}
        <section id="faq" style={{ padding: '4rem 2rem', background: '#fff' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Preguntas Frecuentes</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Si tienes alguna otra pregunta, <a href="https://wa.me/18292520244" target="_blank" rel="noopener noreferrer" style={{ color: '#94715F', textDecoration: 'underline' }}>escríbenos por WhatsApp</a>.</p>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {[
              ["¿Necesito experiencia previa?", "No, todos los niveles son bienvenidos."],
              ["¿Dónde se realizan los entrenamientos?", "Son rutinas que puedes seguir desde casa o en gimnasio."],
              ["¿Los planes incluyen nutrición?", "Sí, se incluye una guía nutricional personalizada."],
              ["¿Hay seguimiento semanal?", "Sí, tendrás contacto constante conmigo para evaluar tu progreso."],
              ["¿Qué duración tiene el plan?", "Cada plan es mensual, renovable."],
            ].map(([q, a], idx) => (
              <details key={idx} style={{ marginBottom: '1rem' }}>
                <summary style={{ cursor: 'pointer', fontWeight: '600', fontSize: '1rem' }}>{q}</summary>
                <p style={{ marginTop: '0.5rem' }}>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Formulario */}
        <section id="formulario" style={{ padding: '4rem 2rem', background: '#F3EDEB', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Formulario de Aplicación</h2>
          <p style={{ marginBottom: '2rem' }}>Responde este formulario para iniciar tu transformación.</p>
          <form action="https://formspree.io/f/mayzrwry" method="POST" style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" name="nombre" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Correo" required />
            <input type="text" name="dias" placeholder="¿Cuántos días deseas entrenar?" />
            <input type="text" name="condicion" placeholder="¿Alguna condición física?" />
            <textarea name="meta" placeholder="¿Cuál es tu meta que buscas lograr?" rows={3}></textarea>
            <textarea name="actividad" placeholder="¿Realiza usted alguna actividad física? ¿Cuáles?" rows={3}></textarea>
            <button type="submit" style={{ backgroundColor: '#94715F', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '6px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Enviar</button>
          </form>
        </section>
      </main>

      {/* Footer estilo Alofoke */}
      <footer style={{ backgroundColor: '#000', color: '#fff', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://instagram.com/GeorgeValdezR" target="_blank"><FaInstagram size={24} /></a>
          <a href="https://tiktok.com" target="_blank"><FaTiktok size={24} /></a>
        </div>
        <div style={{ fontSize: '0.9rem' }}>© Copyright 2025 Genesis Fit. Todos los derechos reservados.</div>
        <div style={{ fontSize: '0.9rem', display: 'flex', gap: '1rem' }}>
          <a href="/privacy">Política de Privacidad</a>
          <a href="/terms">Términos y Condiciones</a>
        </div>
        <div style={{ fontSize: '0.9rem' }}>Diseñado por <a href="https://instagram.com/GeorgeValdezR" target="_blank">@GeorgeValdezR</a></div>
      </footer>
    </>
  );
}
