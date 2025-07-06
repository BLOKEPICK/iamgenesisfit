import Head from "next/head";
import { useState, useEffect } from "react";
import { FaInstagram, FaWhatsapp, FaBars } from "react-icons/fa6";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <Head>
        <title>iamgenesisfit | Página oficial</title>
        <meta
          name="description"
          content="Transforma tu cuerpo y tu mente con iamgenesisfit. Programas, comunidad y resultados reales."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:title" content="iamgenesisfit | Página oficial" />
        <meta
          property="og:description"
          content="Transforma tu cuerpo y tu mente con iamgenesisfit. Programas, comunidad y resultados reales."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          body {
            margin: 0;
            padding: 0;
            background-color: #000000;
            font-family: 'DM Sans', sans-serif;
          }
          h1, h2, h3 {
            font-family: 'DM Serif Display', serif;
          }
          @media (max-width: 768px) {
            .trainer-section {
              flex-direction: column !important;
              text-align: center !important;
            }
            .trainer-image {
              width: 100% !important;
              max-width: 320px;
              margin: 0 auto 1.5rem;
            }
          }
        `}</style>
      </Head>

      {/* NAVBAR */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#000",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #333",
        }}
      >
        <h1 style={{ color: "#fff", fontSize: "1.2rem", margin: 0 }}>
          iamgenesisfit
        </h1>
        <nav className="desktop-menu" style={{ display: "flex", gap: "2rem" }}>
          <a href="#sobre-mi" style={linkStyle}>Sobre mí</a>
          <a href="#resultados" style={linkStyle}>Transformaciones</a>
          <a href="#faq" style={linkStyle}>FAQ</a>
          <a href="#planes" style={linkStyle}>Planes</a>
        </nav>
        <div className="mobile-menu-icon" style={{ display: "none" }}>
          <FaBars
            size={24}
            color="#fff"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <style>{`
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            .mobile-menu-icon {
              display: block !important;
            }
          }
        `}</style>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#000",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {["#sobre-mi", "#resultados", "#faq", "#planes"].map((href, i) => (
            <a
              key={i}
              href={href}
              style={{ ...linkStyle, fontSize: "1.5rem" }}
              onClick={() => setMenuOpen(false)}
            >
              {href.replace("#", "").replace("-", " ").toUpperCase()}
            </a>
          ))}
        </div>
      )}

      <main>
        {/* SOBRE MÍ */}
        <section id="sobre-mi" style={sectionSobreMi}>
          <div className="trainer-section" style={trainerContainer}>
            <img
              src="/trainer_main.webp"
              alt="Entrenadora Genesis"
              className="trainer-image"
              style={trainerImg}
            />
            <div style={{ flex: 1 }}>
              <center>
                <h2 style={h2}>Conoce a Genesis</h2>
              </center>
              <p style={p}>
                Soy Genesis, entrenadora certificada con más de 5 años ayudando
                a mujeres a transformar sus cuerpos y su autoestima. Mi enfoque
                combina nutrición inteligente, entrenamiento eficiente y una
                comunidad que te impulsa. Esto no es una dieta más — es una
                nueva forma de vivir.
              </p>
            </div>
          </div>
        </section>

        {/* TRANSFORMACIONES */}
        <section id="resultados" style={sectionTransformaciones}>
          <center>
            <h2 style={h2Transform}>Resultados que hablan por sí solos</h2>
          </center>
          <div style={decorLine}></div>
          <p style={pDesc}>
            No es magia. Es ciencia, dedicación y una guía experta comprometida
            contigo en cada paso.
          </p>

          <div style={gridGallery}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={card}>
                <div style={ribbon}>12 semanas de transformación</div>
                <img
                  src={`/transformation_${i}.webp`}
                  alt={`Transformación ${i}`}
                  style={cardImg}
                />
                <div style={cardFooter}>
                  <h4 style={cardTitle}>Transformación #{i}</h4>
                  <p style={cardText}>
                    Antes y después tras seguimiento personalizado.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={faqSection}>
          <h2 style={h2}>Preguntas frecuentes</h2>
          <div style={faqContainer}>
            {[...Array(5)].map((_, i) => (
              <div key={i} style={faqCard}>
                <h4 style={faqQ}>¿Pregunta ejemplo #{i + 1}?</h4>
                <p style={faqA}>
                  Esta es una respuesta de ejemplo para demostrar cómo se verá
                  el texto real en el sitio.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PLANES */}
        <section id="planes" style={planesSection}>
          <h2 style={h2Planes}>elige tu plan</h2>
          <div style={plansGrid}>
            {[
              {
                title: "Plan Básico",
                price: "$49 / mes",
                features: [
                  "Acceso a rutinas básicas",
                  "Grupo de WhatsApp",
                  "1 check-in mensual",
                ],
                highlight: false,
              },
              {
                title: "Plan Avanzado",
                price: "$99 / mes",
                features: [
                  "Rutinas personalizadas",
                  "Grupo privado VIP",
                  "2 check-ins mensuales",
                  "Asesoría nutricional",
                ],
                highlight: true,
              },
              {
                title: "Plan Premium",
                price: "$149 / mes",
                features: [
                  "Plan completo personalizado",
                  "Chat directo con Genesis",
                  "Check-in semanal",
                  "Acceso a talleres exclusivos",
                ],
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                style={{
                  ...planCard,
                  backgroundColor: plan.highlight ? "#94765B" : "#111",
                  color: plan.highlight ? "#fff" : "#ccc",
                  boxShadow: plan.highlight
                    ? "0 0 25px rgba(255, 255, 255, 0.9)"
                    : "0 0 15px rgba(0,0,0,0.2)",
                  transform: plan.highlight ? "scale(1.05)" : "none",
                  zIndex: plan.highlight ? 1 : 0,
                }}
              >
                {plan.highlight && (
                  <div style={popularBadge}>Más popular</div>
                )}
                <h3 style={planTitle}>{plan.title}</h3>
                <p style={planPrice}>{plan.price}</p>
                <ul style={planList}>
                  {plan.features.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>
                <a href="#" style={selectBtn(plan.highlight)}>Seleccionar</a>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={footer}>
          &copy; {new Date().getFullYear()} iamgenesisfit. Todos los derechos
          reservados.
        </footer>

        {/* WHATSAPP FLOAT */}
        <a
          href="https://wa.me/18292520244"
          target="_blank"
          rel="noopener noreferrer"
          style={waBtn}
        >
          <FaWhatsapp size={28} color="#fff" />
        </a>
      </main>
    </>
  );
}

// --- Estilos en objetos (más limpio y reutilizable) ---
const linkStyle = { color: "#fff", textDecoration: "none", fontWeight: 500 };
const h2 = { color: "#673306", fontSize: "2rem", marginBottom: "1rem" };
const h2Transform = {
  fontSize: "2.5rem",
  marginBottom: "0.5rem",
  color: "#673306",
  fontFamily: "Anton, sans-serif",
  letterSpacing: "1px",
  textTransform: "uppercase",
};
const decorLine = {
  width: "80px",
  height: "4px",
  margin: "0.5rem auto 1rem",
  background: "#0A84FF",
  borderRadius: "2px",
};
const p = { color: "#000000", fontSize: "1rem", lineHeight: 1.6 };
const pDesc = {
  color: "#000000",
  fontSize: "1.05rem",
  maxWidth: "640px",
  margin: "0 auto 2rem",
  lineHeight: 1.6,
};
const sectionSobreMi = {
  background: "radial-gradient(circle at top left, #A79978, #fff)",
  padding: "4rem 2rem",
};
const trainerContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  alignItems: "center",
  maxWidth: "1000px",
  margin: "0 auto",
};
const trainerImg = {
  width: "300px",
  borderRadius: "12px",
  objectFit: "cover",
  boxShadow: "0 0 20px rgba(0,0,0,0.4)",
};
const sectionTransformaciones = {
  background: "radial-gradient(circle at top left, #fff, #A79978)",
  padding: "4rem 2rem",
};
const gridGallery = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2rem",
  maxWidth: "1000px",
  margin: "0 auto",
};
const card = {
  borderRadius: "12px",
  overflow: "hidden",
  position: "relative",
  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
};
const ribbon = {
  position: "absolute",
  top: 0,
  width: "100%",
  background: "#94765B",
  color: "#fff",
  fontWeight: "600",
  fontSize: "0.85rem",
  padding: "0.5rem 1rem",
  textAlign: "center",
};
const cardImg = { width: "100%", height: "360px", objectFit: "cover" };
const cardFooter = {
  padding: "1.5rem 1rem",
  backgroundColor: "#94765B",
  textAlign: "center",
};
const cardTitle = { margin: 0, fontSize: "1.1rem", color: "#000000" };
const cardText = { fontSize: "0.9rem", color: "#ccc", marginTop: "0.5rem" };
const faqSection = {
  background: "radial-gradient(circle at top left, #A79978, #A79978)",
  padding: "4rem 2rem",
};
const faqContainer = {
  maxWidth: "800px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};
const faqCard = {
  background: "#1A1A1A",
  borderRadius: "8px",
  padding: "1rem 1.5rem",
};
const faqQ = { margin: 0, color: "#4D4B49", fontSize: "1rem" };
const faqA = { color: "#ccc", fontSize: "0.95rem", marginTop: "0.5rem" };
const planesSection = { backgroundColor: "#0A0A0A", padding: "4rem 2rem" };
const h2Planes = {
  textAlign: "center",
  fontSize: "2rem",
  marginBottom: "2rem",
  fontFamily: "Anton, sans-serif",
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "#fff",
};
const plansGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2rem",
  maxWidth: "1200px",
  margin: "0 auto",
};
const planCard = {
  borderRadius: "14px",
  padding: "2rem",
  position: "relative",
  transition: "transform 0.3s ease",
};
const popularBadge = {
  position: "absolute",
  top: "-1rem",
  right: "-1rem",
  backgroundColor: "#fff",
  color: "#4D4B49",
  padding: "0.3rem 0.75rem",
  borderRadius: "8px",
  fontSize: "0.8rem",
  fontWeight: "700",
  boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
};
const planTitle = {
  fontSize: "1.4rem",
  fontWeight: "700",
  textAlign: "center",
  marginBottom: "1rem",
};
const planPrice = {
  fontSize: "1.6rem",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "1.5rem",
};
const planList = {
  listStyle: "none",
  padding: 0,
  marginBottom: "2rem",
  fontSize: "0.95rem",
  lineHeight: 1.7,
};
const selectBtn = (highlight) => ({
  display: "block",
  backgroundColor: highlight ? "#fff" : "#4D4B49",
  color: highlight ? "#4D4B49" : "#fff",
  textAlign: "center",
  padding: "0.75rem 1rem",
  borderRadius: "8px",
  fontWeight: "700",
  textDecoration: "none",
});
const footer = {
  backgroundColor: "#000",
  color: "#555",
  textAlign: "center",
  padding: "2rem",
  fontSize: "0.9rem",
};
const waBtn = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#94765B",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 0 15px rgba(0,0,0,0.3)",
  zIndex: 999,
};
