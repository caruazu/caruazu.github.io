import { Equipe, TeamMember } from "@/components/equipe";
import { Hero } from "@/components/hero";
import { Planos } from "@/components/planos";
import { Projetos } from "@/components/projetos";
import { Sobre } from "@/components/sobre";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const exampleMembers: TeamMember[] = [
  { name: "Ana Souza", role: "CEO", imageUrl: "/team/stock.jpg" },
  { name: "Bruno Lima", role: "CTO", imageUrl: "/team/stock.jpg" },
  { name: "Carla Dias", role: "Design Lead", imageUrl: "/team/stock.jpg" },
  { name: "Diego Prado", role: "Web Dev.", imageUrl: "/team/stock.jpg" },
  { name: "Erika Melo", role: "Marketing", imageUrl: "/team/stock.jpg" },
  { name: "Felipe Nunes", role: "Suporte", imageUrl: "/team/stock.jpg" },
];

export default function Home() {
  return (
    <>
      <article>
        <Hero />
        <Projetos />
        <Planos />
        <Sobre />
        <Equipe members={exampleMembers} />
      </article>
    </>
  );
}
