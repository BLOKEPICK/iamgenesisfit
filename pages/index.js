import Head from "next/head";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Head>
        <title>iamgenesisfit | En construcción</title>
        <meta name="description" content="Estamos trabajando en algo grande. Muy pronto lo verás." />
      </Head>

      <main style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Estamos construyendo algo grande</h1>
          <p style={styles.description}>
            Muy pronto lanzaremos la plataforma definitiva para transformar tu cuerpo y tu vida.
          </p>
          <div style={styles.iconContainer}>
            <a
              href="https://www.instagram.com/iamgenesisfit/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.iconLink, color: "#0A84FF" }}
            >
              <FaInstagram size={36} />
            </a>
            <a
              href="https://wa.me/18292520244"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.iconLink, color: "#0A84FF" }}
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
  container: {
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
  },
  card: {
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
    padding: "2rem",
    borderRadius: "1rem",
    background: "linear-gradient(to bottom right, #0A84FF15, #ffffff05)",
    boxShadow: "0 0 30px #0A84FF20",
    backdropFilter: "blur(4px)",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
    fontWeight: "700",
    lineHeight: "1.3",
  },
  description: {
    color: "#ccc",
    fontSize: "1rem",
    marginBottom: "2rem",
    lineHeight: "1.6",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  },
  iconLink: {
    transition: "transform 0.3s ease",
  },
};
