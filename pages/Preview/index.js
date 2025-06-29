import Head from "next/head";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Head>
        <title>iamgenesisfit | Página oficial</title>
        <meta name="description" content="Transforma tu cuerpo y tu mente con iamgenesisfit. Programas, comunidad y resultados reales." />
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            background-color: #000000;
            font-family: 'Poppins', sans-serif;
          }
        `}</style>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        {/* HERO */}
        <section style={{ backgroundColor: "#000", color: "#fff", padding: "6rem 2rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", marginBottom: "1rem", fontWeight: "700", letterSpacing: "1px" }}>
            GENESIS IS NOW
          </h1>
          <p style={{ color: "#ccc", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
            Tu transformación comienza hoy. Elige el camino. Construye tu mejor versión.
          </p>
        </section>

        {/* BEFORE & AFTER */}
        <section style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Logra tus metas conmigo</h2>
          <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Estos son solo algunos de los muchos resultados que hemos conseguido con dedicación, esfuerzo y el plan adecuado.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ background: '#111', borderRadius: '10px', overflow: 'hidden', maxWidth: '300px' }}>
                <img src={`/beforeafter${i}.jpg`} alt={`Transformación ${i}`} style={{ width: '100%', display: 'block' }} />
                <div style={{ padding: '1rem' }}>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#0A84FF' }}>Transformación #{i}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Antes y después tras 12 semanas de programa personalizado.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ backgroundColor: '#111', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Preguntas frecuentes</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            {[...Array(5)].map((_, i) => (
              <div key={i} style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: 0, color: '#0A84FF', fontSize: '1rem' }}>¿Pregunta ejemplo #{i + 1}?</h4>
                <p style={{ color: '#ccc', fontSize: '0.95rem' }}>
                  Esta es una respuesta de ejemplo para demostrar cómo se verá el texto real en el sitio.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PLANES (estructura simple de prueba) */}
        <section style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Planes disponibles</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {["Básico", "Pro", "Elite"].map((nombre, i) => (
              <div key={i} style={{
                background: '#111', padding: '2rem', borderRadius: '10px', maxWidth: '300px',
                flex: '1 1 250px', border: i === 1 ? '2px solid #0A84FF' : 'none'
              }}>
                <h3 style={{ fontSize: '1.4rem', color: '#0A84FF' }}>{`Plan ${nombre}`}</h3>
                <p style={{ color: '#ccc' }}>$XX.XX / mes</p>
                <ul style={{ listStyle: 'none', padding: 0, color: '#aaa', textAlign: 'left', fontSize: '0.95rem' }}>
                  <li>✔ Beneficio 1</li>
                  <li>✔ Beneficio 2</li>
                  <li>✔ Beneficio 3</li>
                </ul>
                <button style={{
                  marginTop: '1rem', backgroundColor: '#0A84FF', color: '#fff', border: 'none',
                  padding: '0.6rem 1.2rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '600'
                }}>Elegir</button>
              </div>
            ))}
          </div>
        </section>

        {/* REDES */}
        <section style={{ backgroundColor: '#111', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Síguenos o escríbenos</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <a href="https://www.instagram.com/iamgenesisfit/" target="_blank" rel="noopener noreferrer" style={{ color: "#0A84FF" }}>
              <FaInstagram size={36} />
            </a>
            <a href="https://wa.me/18292520244" target="_blank" rel="noopener noreferrer" style={{ color: "#0A84FF" }}>
              <FaWhatsapp size={36} />
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{
          backgroundColor: '#000',
          color: '#666',
          textAlign: 'center',
          padding: '2rem',
          fontSize: '0.9rem',
          fontFamily: 'Poppins, sans-serif'
        }}>
          &copy; {new Date().getFullYear()} iamgenesisfit. Todos los derechos reservados.
        </footer>
      </main>
    </>
  );
}
