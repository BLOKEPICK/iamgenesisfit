import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "1rem"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Estamos construyendo algo grande
      </h1>
      <p style={{ color: "#ccc", marginBottom: "2rem" }}>
        Muy pronto estarás en la mejor plataforma de fitness personalizada.
      </p>
      <div style={{ display: "flex", gap: "2rem" }}>
        <a
          href="https://www.instagram.com/iamgenesisfit/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "2.5rem" }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/18292520244"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "2.5rem" }}
        >
          <FaWhatsapp />
        </a>
      </div>
    </main>
  );
}
