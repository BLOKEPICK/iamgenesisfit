import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jamie Brown Fit | Transform Your Body</title>
        <meta name="description" content="Elite personal coaching for body and lifestyle transformation." />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
        <style>{`
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            font-family: 'Open Sans', sans-serif;
            background-color: #fff;
            color: #333;
          }
          header {
            position: sticky;
            top: 0;
            background: #fff;
            padding: 1.5rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            z-index: 1000;
          }
          header img {
            height: 40px;
          }
          nav ul {
            list-style: none;
            display: flex;
            gap: 2rem;
            margin: 0;
            padding: 0;
          }
          nav a {
            text-decoration: none;
            color: #333;
            font-weight: 600;
            font-size: 0.9rem;
            text-transform: uppercase;
          }
          .hero {
            height: 100vh;
            background-image: url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1470&q=80');
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #fff;
            position: relative;
          }
          .hero::before {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.4);
          }
          .hero-content {
            position: relative;
            z-index: 1;
            padding: 2rem;
          }
          .hero h1 {
            font-family: 'Anton', sans-serif;
            font-size: 3rem;
            margin-bottom: 1rem;
          }
          .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
          }
          .hero a {
            background: #D6B98C;
            padding: 0.75rem 1.5rem;
            color: black;
            font-weight: bold;
            border-radius: 6px;
            text-decoration: none;
          }
          .section {
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: auto;
            text-align: center;
          }
          .logos img {
            height: 40px;
            margin: 0 1rem;
            opacity: 0.6;
          }
          .benefits {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }
          .benefit {
            padding: 1.5rem;
            border: 1px solid #eee;
            border-radius: 12px;
          }
          .programs {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }
          .program-card {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 12px rgba(0,0,0,0.08);
            background: #fff;
          }
          .program-card img {
            width: 100%;
            height: 220px;
            object-fit: cover;
          }
          .program-card h3 {
            margin: 1rem;
            font-size: 1.2rem;
          }
          form {
            max-width: 500px;
            margin: 2rem auto 0;
            display: grid;
            gap: 1rem;
          }
          input, textarea {
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 1rem;
          }
          button {
            background-color: black;
            color: white;
            padding: 1rem;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
          }
          footer {
            background-color: #111;
            color: #aaa;
            padding: 2rem;
            text-align: center;
            font-size: 0.9rem;
          }
        `}</style>
      </Head>

      <header>
        <img src="https://via.placeholder.com/120x40?text=LOGO" alt="Logo" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Programs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>TRANSFORMA TU VIDA</h1>
          <p>Coaching personalizado para cuerpo y mente</p>
          <a href="#contact">Reserva tu consulta</a>
        </div>
      </section>

      <section className="section logos">
        <p>Como se vio en:</p>
        <div>
          <img src="https://via.placeholder.com/100x40?text=Forbes" />
          <img src="https://via.placeholder.com/100x40?text=Women's+Health" />
          <img src="https://via.placeholder.com/100x40?text=Shape" />
        </div>
      </section>

      <section className="section">
        <h2>¿Por qué Jamie Brown?</h2>
        <div className="benefits">
          <div className="benefit">
            <h3>Transformación Total</h3>
            <p>Planes adaptados a tu estilo de vida, no al revés.</p>
          </div>
          <div className="benefit">
            <h3>Resultados Reales</h3>
            <p>Testimonios de cientos de mujeres que cambiaron su vida.</p>
          </div>
          <div className="benefit">
            <h3>Soporte Constante</h3>
            <p>Acompañamiento semanal para mantener tu motivación.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Programas Populares</h2>
        <div className="programs">
          <div className="program-card">
            <img src="https://source.unsplash.com/600x400/?fitness,woman" />
            <h3>Desafío 12 Semanas</h3>
          </div>
          <div className="program-card">
            <img src="https://source.unsplash.com/600x400/?nutrition,healthy" />
            <h3>Nutrición + Entrenamiento</h3>
          </div>
          <div className="program-card">
            <img src="https://source.unsplash.com/600x400/?coach,personal" />
            <h3>Plan Personalizado VIP</h3>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <h2>Contáctanos</h2>
        <form>
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea rows="4" placeholder="¿En qué podemos ayudarte?" />
          <button type="submit">Enviar</button>
        </form>
      </section>

      <footer>
        © 2025 JamieBrownFit Replica. Todos los derechos reservados.
      </footer>
    </>
  );
}
