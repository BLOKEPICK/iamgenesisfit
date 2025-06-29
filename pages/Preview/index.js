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
          <p style={styles.heroSubtitle}>El comienzo de tu transformación total</p>
          <button style={styles.ctaButton}>Explora el sitio</button>
        </section>

        {/* SECCIÓN DESTACADOS */}
        <section style={styles.highlightsSection}>
          <div style={styles.highlightItem}>
            <h3 style={styles.highlightTitle}>Transformación real</h3>
            <p style={styles.highlightText}>Programas diseñados para resultados visibles y sostenibles.</p>
          </div>
          <div style={styles.highlightItem}>
            <h3 style={styles.highlightTitle}>Comunidad privada</h3>
            <p style={styles.highlightText}>Accede a una red exclusiva de motivación y apoyo constante.</p>
          </div>
          <div style={styles.highlightItem}>
            <h3 style={styles.highlightTitle}>Coaching profesional</h3>
            <p style={styles.highlightText}>Acompañamiento directo con planes personalizados.</p>
          </div>
        </section>

        {/* SOBRE NOSOTROS */}
        <section style={styles.aboutSection}>
          <h2 style={styles.sectionTitle}>Sobre iamgenesisfit</h2>
          <p style={styles.aboutText}>
            Somos una comunidad dedicada al cambio físico y mental. Con programas de entrenamiento personalizados, acceso a expertos y una comunidad de apoyo, llevamos tu potencial al máximo. Nos inspiramos en la fuerza, la transformación y el bienestar real. Este es tu nuevo comienzo.
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
  ... // [No cambia aquí: solo se debe actualizar agregando estilos para .ctaButton y .highlightsSection]
};
