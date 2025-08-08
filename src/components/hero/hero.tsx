import Image from "next/image";

export const Hero = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Olá! Somos a Caruazu,
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Desenvolvemos aplicações WEB.
          </p>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg">
            Saiba mais
          </button>
        </div>

        {/* Imagem - escondida no mobile */}
        <div className="flex-1 hidden md:flex justify-center items-center">
          <Image src="/hero.png" alt="Hero image" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};
