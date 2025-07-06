import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jamie Brown Fit | Oficial</title>
        <meta name="description" content="Coaching profesional para transformar cuerpo y mente." />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
        <style>{`
          body {
            margin: 0;
            padding: 0;
            font-family: 'Open Sans', sans-serif;
            background: white;
            color: #333;
          }
          nav {
            background: white;
            padding: 1rem 2rem;
            position: sticky;
            top: 0;
            z-index: 999;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          nav img {
            height: 40px;
          }
          nav ul {
            display: flex;
            list-style: none;
            gap: 1.5rem;
          }
          nav a {
            text-decoration: none;
            color: #333;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.9rem;
          }
          .hero {
            background-image: url('https://images.unsplash.com/photo-1594737625785-c0e1ee06b286?auto=format&fit=crop&w=1470&q=80');
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            padding: 2rem;
          }
          .hero h1 {
            font-size: 3rem;
            font-family: 'Anton', sans-serif;
          }
          .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
          }
          .hero a {
            padding: 0.8rem 2rem;
            background: #fff;
            color: #000;
            text-decoration: none;
            font-weight: bold;
            border-radius: 8px;
          }
          .media-logos {
            padding: 2rem;
            background: #f9f9f9;
            text-align: center;
          }
          .media-logos img {
            height: 40px;
            margin: 0 1rem;
            opacity: 0.7;
          }
          .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            padding: 4rem 2rem;
            background: white;
          }
          .feature-box {
            text-align: center;
            padding: 1rem;
          }
          .feature-box img {
            width: 60px;
            margin-bottom: 1rem;
          }
          .cards {
            padding: 4rem 2rem;
            background: #f5f5f5;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
          .card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          .card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }
          .card-content {
            padding: 1.5rem;
          }
          .card-content h3 {
            margin: 0 0 1rem;
            font-size: 1.2rem;
          }
          .contact {
            padding: 4rem 2rem;
            text-align: center;
            background: white;
          }
          form {
            max-width: 500px;
            margin: 0 auto;
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
            background: black;
            color: white;
            padding: 1rem;
            border: none;
            border-radius: 6px;
            font-weight: bold;
            cursor: pointer;
          }
          footer {
            background: #111;
            color: #aaa;
            padding: 2rem;
            text-align: center;
            font-size: 0.9rem;
          }
        `}</style>
      </Head>

      <nav>
        <img src="https://via.placeholder.com/120x40?text=Logo" alt="Logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Programs</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div>
          <h1>COACHING PARA CAMBIAR TU VIDA</h1>
          <p>Entrenamiento personalizado, resultados reales</p>
          <a href="#contact">Comienza ahora</a>
        </div>
      </section>

      <section className="media-logos">
        <p>Como se vio en:</p>
        <div>
          <img src="https://via.placeholder.com/80x40?text=Media+1" alt="Media 1" />
          <img src="https://via.placeholder.com/80x40?text=Media+2" alt="Media 2" />
          <img src="https://via.placeholder.com/80x40?text=Media+3" alt="Media 3" />
        </div>
      </section>

      <section className="features">
        <div className="feature-box">
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" alt="Icono 1" />
          <h3>Plan personalizado</h3>
          <p>Diseñado para ti y tus metas.</p>
        </div>
        <div className="feature-box">
          <img src="https://cdn-icons-png.flaticon.com/512/1049/1049166.png" alt="Icono 2" />
          <h3>Nutrición inteligente</h3>
          <p>Comida real para resultados reales.</p>
        </div>
        <div className="feature-box">
          <img src="https://cdn-icons-png.flaticon.com/512/2089/2089787.png" alt="Icono 3" />
          <h3>Acompañamiento real</h3>
          <p>No estás sola en el proceso.</p>
        </div>
      </section>

      <section className="cards">
        {[1,2,3].map(i => (
          <div className="card" key={i}>
            <img src={"https://source.unsplash.com/600x400/?fitness,workout," + i} alt={"Card " + i} />
            <div className="card-content">
              <h3>Programa {i}</h3>
              <p>Descripción breve del programa de entrenamiento o transformación.</p>
            </div>
          </div>
        ))}
      </section>

      <section className="contact" id="contact">
        <h2>Contáctanos</h2>
        <form>
          <input type="text" placeholder="Tu nombre" />
          <input type="email" placeholder="Correo electrónico" />
          <textarea placeholder="Mensaje..." rows="4" />
          <button type="submit">Enviar mensaje</button>
        </form>
      </section>

      <footer>
        © 2025 JamieBrownFit Replica. Todos los derechos reservados.
      </footer>
    </>
  );
}
