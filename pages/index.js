import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <main style={{
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Segoe UI', sans-serif",
      padding: "1.5rem",
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "2.8rem",
        fontWeight: "bold",
        marginBottom: "1rem"
      }}>
        Estamos construyendo algo grande
      </h1>

      <p style={{
        fontSize: "1.1rem",
        color: "#ccc",
        marginBottom: "2.5rem",
        maxWidth: "500px"
      }}>
        Muy pronto lanzaremos la plataforma definitiva para transformar tu cuerpo y tu vida. Mantente conectado.
      </p>

      <div style={{ display: "flex", gap: "2rem" }}>
        <a
          href="https://www.instagram.com/iamgenesisfit/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#0A84FF",
            fontSize: "2.8rem",
            transition: "transform 0.3s ease, color 0.3s ease"
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.15)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1.0)"}
        >
          <FaInstagram />
        </a>

        <a
          href="https://wa.me/18292520244"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#0A84FF",
            fontSize: "2.8rem",
            transition: "transform 0.3s ease, color 0.3s ease"
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.15)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1.0)"}
        >
          <FaWhatsapp />
        </a>
      </div>
    </main>
  );
}
