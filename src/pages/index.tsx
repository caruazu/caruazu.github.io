import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero";
import { Projetos } from "@/components/projetos";
import { Sobre } from "@/components/sobre";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Projetos />
      <Footer />
    </main>
  );
}
