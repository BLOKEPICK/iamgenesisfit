import Head from 'next/head';
import { useState, useEffect } from 'react';
import { FaBars, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const menuItems = [
    { name: 'Sobre mí', link: '#sobre-mi' },
    { name: 'Servicios', link: '#servicios' },
    { name: 'Transformaciones', link: '#transformaciones' },
    { name: 'Contacto', link: '#contacto' },
  ];

  return (
    <>
      <Head>
        <title>Genesis Fit | Transforma tu cuerpo y mente</title>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600&family=Great+Vibes&display=swap" rel="stylesheet" />
      </Head>

      <header className="fixed w-full z-50 bg-primary shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-white text-2xl font-playfair">Genesis Fit</h1>
          <div className="hidden md:flex gap-8 text-white">
            {menuItems.map((item, idx) => (
              <a key={idx} href={item.link} className="hover:text-secondary transition-colors duration-200">
                {item.name}
              </a>
            ))}
          </div>
          <FaBars className="md:hidden text-white cursor-pointer" size={24} onClick={() => setMenuOpen(!menuOpen)} />
        </nav>

        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden bg-primary text-white flex flex-col items-center gap-4 p-4">
            {menuItems.map((item, idx) => (
              <a key={idx} href={item.link} onClick={() => setMenuOpen(false)}>
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <main className="pt-24 bg-light">
        <section className="text-center py-20 bg-secondary text-white">
          <h2 className="text-4xl font-playfair mb-4">Transforma tu cuerpo, fortalece tu mente</h2>
          <p className="mb-8">Acompañamiento personalizado para alcanzar tu mejor versión.</p>
          <a href="#contacto" className="bg-primary py-2 px-4 rounded">Comienza hoy</a>
        </section>

        <section id="sobre-mi" className="container mx-auto py-16 grid md:grid-cols-2 gap-8 items-center">
          <img src="/trainer_main.webp" className="rounded shadow-md" alt="Genesis" />
          <div>
            <h3 className="text-3xl font-playfair mb-4">Soy Genesis</h3>
            <p>Como entrenadora fitness certificada, he guiado a decenas de mujeres hacia su mejor versión física y mental.</p>
            <p className="mt-4 font-greatvibes text-3xl text-primary">Genesis</p>
          </div>
        </section>

        <section id="servicios" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-playfair mb-8">Mis Servicios</h3>
            <p>Entrenamiento personalizado, asesorías nutricionales y coaching emocional para potenciar resultados.</p>
          </div>
        </section>

        <section id="transformaciones" className="container mx-auto py-16">
          <h3 className="text-center text-3xl font-playfair mb-8">Transformaciones reales</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="shadow-lg rounded overflow-hidden">
                <img src={`/transformation_${i}.webp`} alt={`Transformación ${i}`} />
                <p className="text-center py-2 bg-secondary text-white">8 semanas de progreso</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="bg-primary py-16">
          <div className="container mx-auto text-center text-white">
            <h3 className="text-3xl font-playfair mb-4">Contáctame</h3>
            <form className="max-w-md mx-auto space-y-4">
              <input className="w-full p-2 rounded" type="text" placeholder="Nombre" required />
              <input className="w-full p-2 rounded" type="email" placeholder="Correo electrónico" required />
              <textarea className="w-full p-2 rounded" placeholder="Mensaje" required></textarea>
              <button className="bg-white text-primary py-2 px-4 rounded">Enviar</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-center text-white py-4">
        © {new Date().getFullYear()} Genesis Fit | Todos los derechos reservados
      </footer>

      <a href="https://wa.me/" target="_blank" className="fixed bottom-4 right-4 bg-primary p-3 rounded-full shadow-lg">
        <FaWhatsapp className="text-white" size={28} />
      </a>

      <style jsx>{`
        :root {
          --primary: #94715F;
          --secondary: #E3D5CA;
          --light: #fdfaf9;
        }
        .bg-primary { background-color: var(--primary); }
        .bg-secondary { background-color: var(--secondary); }
        .bg-light { background-color: var(--light); }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-greatvibes { font-family: 'Great Vibes', cursive; }
      `}</style>
    </>
  );
}
