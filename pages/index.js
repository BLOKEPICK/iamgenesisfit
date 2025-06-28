import Head from "next/head";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Head>
        <title>iamgenesisfit | Coming Soon</title>
        <meta
          name="description"
          content="Plataforma en desarrollo. Prepárate para llevar tu transformación al siguiente nivel."
        />
      </Head>

      <main style={styles.main}>
        <div style={styles.content}>
          <h1 style={styles.title}>GENESIS IS COMING</h1>
          <p style={styles.subtitle}>Prepárate para la nueva era del fitness</p>

          <div style={styles.iconsContainer}>
            <a
              href="https://www.instagram.com/iamgenesisfit/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
            >
              <FaInstagram size={36} />
            </a>
            <a
              href="https://wa.me/18292520244"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
            >
              <FaWhatsapp size={36} />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

const styles = {
  main: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
  },
  content: {
    textAlign: "center",
    maxWidth: "700px",
    width: "100%",
  },
  title: {
    fontSize: "clamp(2.2rem, 6vw, 4rem)",
    fontWeight: 800,
    marginBottom: "1rem",
    letterSpacing: "0.1em",
  },
  subtitle: {
    fontSize: "clamp(1rem, 3vw, 1.5rem)",
    color: "#CCCCCC",
    marginBottom: "2.5rem",
    fontWeight: 300,
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  },
  iconLink: {
    color: "#0A84FF",
    transition: "transform 0.3s ease",
  },
};
