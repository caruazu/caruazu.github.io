import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className=" bg-forest-light" id="hero">
      <div className="container mx-auto flex flex-col md:flex-row items-center w-full max-w-7xl p-6 md:pl-24">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Somos uma startup da área de Saúde
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            Integramos tecnologia avançada à prática clínica
          </p>
          <Link href="#sobre">
            <button className="bg-slate-dark text-white px-6 py-3 rounded-lg cursor-pointer">
              Saiba mais
            </button>
          </Link>
        </div>

        {/* Imagem - escondida no mobile */}
        <div className="flex-1 hidden md:flex justify-center items-center">
          <Image src="/hero.png" alt="Hero image" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};
