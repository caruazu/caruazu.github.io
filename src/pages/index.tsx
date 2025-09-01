import { Footer } from "@/components/footer/footer";
import { Projetos } from "@/components/projetos";
import { Geist_Mono, Rajdhani } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rajdhaniSans = Rajdhani({
  subsets: ["latin"],
  weight: "300",
});

export default function Home() {
  return (
    <div>
      <main className="flex flex-col row-start-2 items-center sm:items-start p-20">
        <h1
          className={`${rajdhaniSans.className} self-center text-7xl lg:text-9xl`}
        >
          CARUAZU
        </h1>
        <p className={`${geistMono.className} self-center text-center text-sm`}>
          Desenvolvo aplicações WEB
        </p>
      </main>
      <Projetos />
      <Footer />
    </div>
  );
}
