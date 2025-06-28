import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Estamos construyendo algo grande</h1>
      <p className="text-gray-400 mb-8 text-center">Muy pronto estarás en la mejor plataforma de fitness personalizada.</p>

      <div className="flex space-x-6">
        <a
          href="https://www.instagram.com/iamgenesisfit/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-transform transform hover:scale-110"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://wa.me/18292520244"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-transform transform hover:scale-110"
        >
          <FaWhatsapp size={40} />
        </a>
      </div>
    </main>
  );
}
