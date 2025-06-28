import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 py-12 text-center">
      <div className="max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Estamos construyendo algo grande
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl mb-10">
          Muy pronto lanzaremos la plataforma definitiva para transformar tu cuerpo y tu vida.
          ¡Mantente conectado!
        </p>
        <div className="flex justify-center gap-10">
          <a
            href="https://www.instagram.com/iamgenesisfit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A84FF] hover:scale-110 transition-transform text-4xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/18292520244"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A84FF] hover:scale-110 transition-transform text-4xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </main>
  );
}
