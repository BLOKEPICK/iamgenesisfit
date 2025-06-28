import Head from "next/head";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Head>
        <title>iamgenesisfit | En construcción</title>
        <meta name="description" content="Estamos trabajando en algo grande. Muy pronto lo verás." />
      </Head>

      <main style={styles.main}>
        <div style={styles.wrapper}>
          <h1 style={styles.heading}>Estamos construyendo algo grande</h1>
          <p style={styles.subtext}>
            Muy pronto lanzaremos la plataforma definitiva para transformar tu cuerpo y tu vida.
          </p>
          <div style={styles.icons}>
            <a href="https://www.instagram.com/iamgenesisfit/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaInstagram size={40} />
            </a>
            <a href="https://wa.me/18292520244" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaWhatsapp size={40} />
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
  wrapper: {
    textAlign: "center",
    maxWidth: "600px",
    width: "100%",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "1rem",
    lineHeight: "1.2",
  },
  subtext: {
    fontSize: "1.125rem",
    color: "#CCCCCC",
    marginBottom: "2.5rem",
    lineHeight: "1.6",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  },
  icon: {
    color: "#0A84FF",
    transition: "transform 0.2s ease-in-out",
  },
};
