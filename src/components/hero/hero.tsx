import { Geist_Mono, Rajdhani } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rajdhaniSans = Rajdhani({
  subsets: ["latin"],
  weight: "300",
});

export const Hero = () => {
  return (
    <section className="flex flex-col row-start-2 items-center px-20 pt-30 pb-10">
      <h1
        className={`${rajdhaniSans.className} self-center text-7xl md:text-9xl`}
      >
        CARUAZU
      </h1>
      <p className={`${geistMono.className} self-center text-center text-md `}>
        Sistemas WEB
      </p>
    </section>
  );
};
