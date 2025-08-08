import { Hero } from "@/components/hero";
import { Planos } from "@/components/planos";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <article>
        <Hero />
        <Planos />
      </article>
    </>
  );
}
