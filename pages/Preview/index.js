import Head from "next/head";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Head>
        <title>iamgenesisfit | Página oficial</title>
        <meta
          name="description"
          content="Transforma tu cuerpo y tu mente con iamgenesisfit. Programas, comunidad y resultados reales."
        />
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            background-color: #000000;
          }
        `}</style>
      </Head>

      <header style={styles.header}>
        <div style={styles.logo}>GENESISFIT</div>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Inicio</a>
          <a href="#planes" style={styles.navLink}>Planes</a>
          <a href="#contacto" style={styles.navLink}>Contacto</a>
        </nav>
      </header>

      <main style={styles.main}>
        {/* HERO SECTION */}
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>GENESIS IS NOW</h1>
          <p style={styles.heroSubtitle}>Empieza tu transformación hoy</p>
        </section>

        {/* SOBRE NOSOTROS */}
        <section style={styles.aboutSection}>
          <h2 style={styles.sectionTitle}>Sobre iamgenesisfit</h2>
          <p style={styles.aboutText}>
            Somos una comunidad dedicada al cambio físico y mental. Con programas de entrenamiento personalizados, acceso a expertos y una comunidad de apoyo, llevamos tu potencial al máximo.
          </p>
        </section>

        {/* PLANS SECTION */}
        <section id="planes" style={styles.plansSection}>
          <h2 style={styles.sectionTitle}>Elige tu plan</h2>
          <div style={styles.planGrid}>
            <div style={styles.planCard}>
              <h3 style={styles.planName}>Plan Básico</h3>
              <p style={styles.planPrice}>$49/mes</p>
              <ul style={styles.planFeatures}>
                <li>Acceso a entrenamientos</li>
                <li>Grupo privado</li>
              </ul>
              <button style={styles.planButton}>Elegir</button>
            </div>

            <div style={{ ...styles.planCard, border: "2px solid #0A84FF" }}>
              <h3 style={styles.planName}>Plan Pro</h3>
              <p style={styles.planPrice}>$99/mes</p>
              <ul style={styles.planFeatures}>
                <li>Todo en Plan Básico</li>
                <li>Coaching personalizado</li>
              </ul>
              <button style={styles.planButton}>Más popular</button>
            </div>

            <div style={styles.planCard}>
              <h3 style={styles.planName}>Plan Elite</h3>
              <p style={styles.planPrice}>$199/mes</p>
              <ul style={styles.planFeatures}>
                <li>Todo en Plan Pro</li>
                <li>1 a 1 mensual</li>
              </ul>
              <button style={styles.planButton}>Elegir</button>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" style={styles.contactSection}>
          <p style={styles.sectionTitle}>Síguenos o escríbenos</p>
          <div style={styles.iconsContainer}>
            <a href="https://www.instagram.com/iamgenesisfit/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaInstagram size={36} />
            </a>
            <a href="https://wa.me/18292520244" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaWhatsapp size={36} />
            </a>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} iamgenesisfit. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

const styles = {
  header: {
    backgroundColor: "#000",
    padding: "1.5rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #0A84FF",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#0A84FF",
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
  },
  navLink: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontWeight: "500",
  },
  main: {
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
    color: "#FFFFFF",
  },
  hero: {
    minHeight: "100vh",
    backgroundColor: "#000000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "2rem",
  },
  heroTitle: {
    fontSize: "clamp(2.5rem, 7vw, 4rem)",
    fontWeight: 800,
    color: "#FFFFFF",
    marginBottom: "1rem",
  },
  heroSubtitle: {
    fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
    color: "#CCCCCC",
  },
  aboutSection: {
    padding: "4rem 2rem",
    backgroundColor: "#111",
    textAlign: "center",
  },
  aboutText: {
    maxWidth: "700px",
    margin: "0 auto",
    fontSize: "1.1rem",
    color: "#CCC",
    lineHeight: "1.8",
  },
  plansSection: {
    backgroundColor: "#000",
    padding: "4rem 2rem",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  planGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
  },
  planCard: {
    backgroundColor: "#111",
    padding: "2rem",
    borderRadius: "12px",
    maxWidth: "300px",
    flex: "1 1 280px",
    textAlign: "left",
  },
  planName: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  planPrice: {
    fontSize: "1.25rem",
    color: "#0A84FF",
    marginBottom: "1rem",
  },
  planFeatures: {
    listStyle: "none",
    paddingLeft: 0,
    color: "#CCC",
    marginBottom: "1.5rem",
  },
  planButton: {
    backgroundColor: "#0A84FF",
    border: "none",
    color: "white",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  contactSection: {
    backgroundColor: "#000",
    padding: "4rem 2rem",
    textAlign: "center",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "1rem",
  },
  iconLink: {
    color: "#0A84FF",
    transition: "transform 0.3s ease",
  },
  footer: {
    backgroundColor: "#000",
    color: "#777",
    textAlign: "center",
    padding: "2rem",
    fontSize: "0.875rem",
  },
};
