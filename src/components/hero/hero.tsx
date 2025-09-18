import { Tiny5, VT323 } from "next/font/google";

const tiny5 = Tiny5({
  subsets: ["latin"],
  weight: "400",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

export const Hero = () => {
  return (
    <section className="flex flex-col row-start-2 items-center px-20 pt-30 pb-10">
      <h1 className={`${tiny5.className} self-center text-7xl md:text-9xl`}>
        CARUAZU
      </h1>
      <p className={`${vt323.className} self-center text-center text-4xl `}>
        Sistemas WEB
      </p>
    </section>
  );
};
