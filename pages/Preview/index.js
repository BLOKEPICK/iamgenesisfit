import Head from "next/head";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Head>
        <title>iamgenesisfit | Página oficial</title>
        <meta name="description" content="Transforma tu cuerpo y tu mente con iamgenesisfit. Programas, comunidad y resultados reales." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:title" content="iamgenesisfit | Página oficial" />
        <meta property="og:description" content="Transforma tu cuerpo y tu mente con iamgenesisfit. Programas, comunidad y resultados reales." />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Anton&display=swap" rel="stylesheet" />
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            background-color: #000000;
            font-family: 'Poppins', sans-serif;
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

      <main>
        {/* SOBRE MÍ */}
        <section style={{ background: 'radial-gradient(circle at top left, #A79978, #fff)', color: '#', padding: '4rem 2rem' }}>
          <div className="trainer-section" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            <img
              src="/trainer_main.webp"
              alt="Entrenadora Genesis"
              className="trainer-image"
              style={{ width: '300px', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 0 20px rgba(0,0,0,0.4)' }}
            />
            <div style={{ flex: 1 }}>
              <h2 style={{ color: '#0A84FF', fontSize: '2rem', marginBottom: '1rem' }}>Conoce a Genesis</h2>
              <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: 1.6 }}>
                Soy Genesis, entrenadora certificada con más de 5 años ayudando a mujeres a transformar sus cuerpos y su autoestima. Mi enfoque combina nutrición inteligente, entrenamiento eficiente y una comunidad que te impulsa. Esto no es una dieta más — es una nueva forma de vivir.
              </p>
            </div>
          </div>
        </section>

         {/* BEFORE & AFTER - Estilo B con cintillo y fondo sólido oscuro */}
        <section style={{ backgroundColor: '#0A0A0A', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '0.5rem',
              color: '#fff',
              fontFamily: 'Anton, sans-serif',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>Resultados que hablan por sí solos</h2>
            <div style={{
              width: '80px',
              height: '4px',
              margin: '0.5rem auto 1rem',
              background: '#0A84FF',
              borderRadius: '2px'
            }} />
            <p style={{
              color: '#bbb',
              fontSize: '1.05rem',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              No es magia. Es ciencia, dedicación y una guía experta comprometida contigo en cada paso.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                  background: '#0A84FF',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  padding: '0.5rem 1rem',
                  textAlign: 'center'
                }}>
                  12 semanas de transformación
                </div>
                <img
                  src={`/transformation_${i}.webp`}
                  alt={`Transformación ${i}`}
                  style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                />
                <div style={{
                  padding: '1.5rem 1rem',
                  backgroundColor: '#111',
                  textAlign: 'center'
                }}>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#0A84FF' }}>Transformación #{i}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#ccc', marginTop: '0.5rem' }}>Antes y después tras seguimiento personalizado.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ backgroundColor: '#101010', color: '#fff', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', color: '#0A84FF' }}>Preguntas frecuentes</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[...Array(5)].map((_, i) => (
              <div key={i} style={{ background: '#1A1A1A', borderRadius: '8px', padding: '1rem 1.5rem' }}>
                <h4 style={{ margin: 0, color: '#0A84FF', fontSize: '1rem' }}>¿Pregunta ejemplo #{i + 1}?</h4>
                <p style={{ color: '#ccc', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                  Esta es una respuesta de ejemplo para demostrar cómo se verá el texto real en el sitio.
                </p>
              </div>
            ))}
          </div>
        </section>

       /* PLANES */
<section id="planes" style={{ backgroundColor: '#0A0A0A', color: '#fff', padding: '4rem 2rem' }}>
  <h2 style={{
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
    fontFamily: 'Anton, sans-serif',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  }}>elige tu plan</h2>

  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  }}>
    {[
      {
        title: 'Plan Básico',
        price: '$49 / mes',
        features: ['Acceso a rutinas básicas', 'Grupo de WhatsApp', '1 check-in mensual'],
        highlight: false
      },
      {
        title: 'Plan Avanzado',
        price: '$99 / mes',
        features: ['Rutinas personalizadas', 'Grupo privado VIP', '2 check-ins mensuales', 'Asesoría nutricional'],
        highlight: true
      },
      {
        title: 'Plan Premium',
        price: '$149 / mes',
        features: ['Plan completo personalizado', 'Chat directo con Genesis', 'Check-in semanal', 'Acceso a talleres exclusivos'],
        highlight: false
      }
    ].map((plan, i) => (
      <div key={i} style={{
        backgroundColor: plan.highlight ? '#0A84FF' : '#111',
        color: plan.highlight ? '#fff' : '#ccc',
        borderRadius: '14px',
        padding: '2rem',
        boxShadow: plan.highlight ? '0 0 25px rgba(10,132,255,0.4)' : '0 0 15px rgba(0,0,0,0.2)',
        position: 'relative',
        transform: plan.highlight ? 'scale(1.05)' : 'none',
        zIndex: plan.highlight ? 1 : 0,
        transition: 'transform 0.3s ease'
      }}>
        {plan.highlight && (
          <div style={{
            position: 'absolute',
            top: '-1rem',
            right: '-1rem',
            backgroundColor: '#fff',
            color: '#0A84FF',
            padding: '0.3rem 0.75rem',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: '700',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>Más popular</div>
        )}

        <h3 style={{
          fontSize: '1.4rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '1rem'
        }}>{plan.title}</h3>

        <p style={{
          fontSize: '1.6rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>{plan.price}</p>

        <ul style={{
          listStyle: 'none',
          padding: 0,
          marginBottom: '2rem',
          color: plan.highlight ? '#fff' : '#aaa',
          fontSize: '0.95rem',
          lineHeight: 1.7
        }}>
          {plan.features.map((f, idx) => (
            <li key={idx} style={{
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center'
            }}>• {f}</li>
          ))}
        </ul>

        <a href="#" style={{
          display: 'block',
          backgroundColor: plan.highlight ? '#fff' : '#0A84FF',
          color: plan.highlight ? '#0A84FF' : '#fff',
          textAlign: 'center',
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          fontWeight: '700',
          textDecoration: 'none'
        }}>Seleccionar</a>
      </div>
    ))}
  </div>
</section>


        {/* FOOTER */}
        <footer style={{
          backgroundColor: '#000',
          color: '#555',
          textAlign: 'center',
          padding: '2rem',
          fontSize: '0.9rem'
        }}>
          &copy; {new Date().getFullYear()} iamgenesisfit. Todos los derechos reservados.
        </footer>

        {/* BOTÓN FLOTANTE WHATSAPP */}
        <a
          href="https://wa.me/18292520244"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#0A84FF',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 0 15px rgba(0,0,0,0.3)',
            zIndex: 999
          }}
        >
          <FaWhatsapp size={28} color="#fff" />
        </a>
      </main>
    </>
  );
}