import { Geist_Mono } from "next/font/google";
import Image from "next/image";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const Sobre = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <article className="relative overflow-hidden rounded-2xl ">
        {/* Accent gradient ring */}
        <div className="pointer-events-none absolute inset-0 " />

        <div className="p-6 sm:p-8">
          {/* Profile + Quote side by side on large screens */}
          <div className="flex flex-col md:flex-row items-center md:gap-6">
            {/* Profile */}
            <div className="flex items-center gap-4 flex-col text-center">
              <Image
                src="https://github.com/caruazu.png"
                alt="Profile picture"
                className="h-42 w-42 rounded-full "
                loading="lazy"
                width={96}
                height={96}
              />
              <div className="min-w-0">
                <h3
                  className={`${geistMono.className} text-lg text-neutral-900 dark:text-neutral-50`}
                >
                  Gustavo Caruazu
                </h3>
                {/* <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate">
                  Desenvolvedor WEB
                </p> */}
              </div>
            </div>

            {/* Quote */}
            <div className="mt-5 md:mt-0 md:flex-1 content-center ">
              <p className="px-7 text-lg leading-relaxed md:text-xl ">
                Atuo como desenvolvedor WEB. Venho buscando conhecer as
                tecnologias mais modernas da área, a fim de estar sempre
                atualizado e preparado para os desafios do mercado.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
