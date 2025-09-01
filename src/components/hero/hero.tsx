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
    <section className="flex flex-col row-start-2 items-center p-20">
      <h1
        className={`${rajdhaniSans.className} self-center text-7xl lg:text-9xl`}
      >
        CARUAZU
      </h1>
      <p className={`${geistMono.className} self-center text-center text-md `}>
        Desenvolvo aplicações WEB
      </p>
    </section>
  );
};
