import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jamie Brown Fit | Replica</title>
        <meta name="description" content="Transforma tu cuerpo y mente con entrenamiento profesional." />
      </Head>
      <main className="min-h-screen bg-white text-black">
        <section className="h-screen bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
          <div className="bg-black bg-opacity-50 p-10 rounded-xl text-white">
            <h1 className="text-4xl font-bold mb-4">TRANSFORMA TU VIDA</h1>
            <p className="text-lg mb-6">Programa personalizado de fitness y bienestar</p>
            <a href="#form" className="bg-white text-black px-6 py-2 font-semibold rounded">Comienza ahora</a>
          </div>
        </section>

        <section id="form" className="p-10 bg-gray-100 text-center">
          <h2 className="text-2xl font-bold mb-4">Solicita tu consulta gratuita</h2>
          <form className="max-w-xl mx-auto grid grid-cols-1 gap-4">
            <input className="border p-3 rounded" placeholder="Nombre completo" />
            <input className="border p-3 rounded" placeholder="Email" />
            <input className="border p-3 rounded" placeholder="Teléfono" />
            <button className="bg-black text-white py-3 px-6 rounded">Enviar</button>
          </form>
        </section>

        <section className="p-10 text-center">
          <h2 className="text-2xl font-bold mb-6">Beneficios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded shadow">✔️ Coaching personalizado</div>
            <div className="p-6 bg-white rounded shadow">✔️ Plan de nutrición</div>
            <div className="p-6 bg-white rounded shadow">✔️ Resultados garantizados</div>
          </div>
        </section>

        <footer className="p-6 bg-black text-white text-center">
          <p>© 2025 JamieBrownFit Replica. Todos los derechos reservados.</p>
        </footer>
      </main>
    </>
  );
}
