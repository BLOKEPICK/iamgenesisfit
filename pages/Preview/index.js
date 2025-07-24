// pages/index.js
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Genesis Fit</title>
        <meta name="description" content="Transforma tu cuerpo con Genesis Fit" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="font-[Manrope] scroll-smooth bg-[#F3EDEB] text-[#111]">
        {/* Header */}
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
          <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
            <a href="#hero" className="text-2xl font-light tracking-wide">
              Genesis<span className="font-bold text-[#94715F]">Fit</span>
            </a>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#sobre-mi" className="hover:text-[#94715F]">Sobre mí</a>
              <a href="#testimonios" className="hover:text-[#94715F]">Testimonios</a>
              <a href="#transformaciones" className="hover:text-[#94715F]">Before & After</a>
              <a href="#faq" className="hover:text-[#94715F]">FAQ</a>
              <a href="#contacto" className="hover:text-[#94715F]">Contacto</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-28">
          <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Transforma tu cuerpo y tu mente con <span className="text-[#94715F]">Genesis Fit</span>
              </h1>
              <p className="mb-6 text-lg">Entrenamiento personalizado para mujeres reales. Resultados que se sienten y se ven.</p>
              <a href="#contacto" className="inline-block bg-[#94715F] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90">
                Comienza ahora
              </a>
            </div>
            <div>
              <img src="/hero-image.png" alt="Entrenadora" className="rounded-xl w-full shadow-lg" />
            </div>
          </div>
        </section>

        {/* Sobre mí */}
        <section id="sobre-mi" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <img src="/about-me.jpg" alt="Sobre mí" className="rounded-xl shadow-md" />
            <div>
              <h2 className="text-3xl font-bold mb-4">Conóceme</h2>
              <p className="text-lg leading-relaxed">
                Soy Genesis, entrenadora certificada especializada en transformar vidas femeninas. Creo en el poder de la disciplina y el amor propio. Mi misión es guiarte hacia tu mejor versión, física y emocional.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" className="py-24 px-6 bg-[#F3EDEB]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Testimonios</h2>
            <div className="flex overflow-x-auto space-x-6 snap-x">
              {[1, 2, 3].map(i => (
                <div key={i} className="min-w-[300px] snap-center bg-white p-4 rounded-xl shadow-md cursor-pointer">
                  <img src={`/testimonial-${i}.jpg`} alt={`Testimonio ${i}`} className="rounded-md mb-4" />
                  <p className="text-sm italic">“Entrenar con Genesis cambió mi vida. Me siento más fuerte, segura y feliz.”</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After */}
        <section id="transformaciones" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Transformaciones</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-[#F3EDEB] rounded-xl p-4 shadow-md">
                  <img src={`/before-after-${i}.jpg`} alt={`Transformación ${i}`} className="rounded-md w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 px-6 bg-[#F3EDEB]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
            {[
              ["¿Necesito experiencia previa?", "No. Trabajo con principiantes y avanzadas."],
              ["¿Dónde se realizan los entrenamientos?", "Todo es online y personalizado a tu rutina."],
              ["¿Puedo escribirte para dudas?", "¡Sí! Escríbeme directamente por WhatsApp."]
            ].map(([q, a], i) => (
              <details key={i} className="mb-4 bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-lg">{q}</summary>
                <p className="mt-2">{a} <a href="https://wa.me/1XXXXXXXXXX" className="text-[#94715F] underline">Haz clic aquí</a>.</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-24 px-6 bg-white">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Contáctame</h2>
            <form action="https://formspree.io/f/YOUR_ID" method="POST" className="space-y-4">
              <input name="nombre" required className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Nombre" />
              <input name="correo" type="email" required className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Correo electrónico" />
              <input name="dias" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="¿Cuántos días deseas entrenar?" />
              <input name="condicion" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="¿Alguna condición física?" />
              <input name="meta" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="¿Cuál es tu meta?" />
              <input name="actividad" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="¿Realizas actividad física? ¿Cuáles?" />
              <button type="submit" className="w-full bg-[#94715F] text-white py-3 rounded font-semibold hover:opacity-90">Enviar</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#111] text-white py-10 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="flex gap-4">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src="/ig.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
                <img src="/tt.svg" alt="TikTok" className="w-6 h-6" />
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Genesis Fit. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="/politicas" className="hover:underline">Políticas</a>
              <a href="https://instagram.com/GeorgeValdezR" className="hover:underline" target="_blank">Diseño por @GeorgeValdezR</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
