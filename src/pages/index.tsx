import { Contato } from "@/components/contato/contato";
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
  { name: "Ana Souza", role: "CEO", imageUrl: "/team/ana.jpg" },
  { name: "Bruno Lima", role: "CTO", imageUrl: "/team/bruno.jpg" },
  { name: "Carla Dias", role: "Design Lead", imageUrl: "/team/carla.jpg" },
  { name: "Diego Prado", role: "Web Dev", imageUrl: "/team/diego.jpg" },
  { name: "Erika Melo", role: "Marketing", imageUrl: "/team/erika.jpg" },
  { name: "Felipe Nunes", role: "Suporte", imageUrl: "/team/felipe.jpg" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Projetos />
      <Planos />
      <Sobre />
      <Equipe members={exampleMembers} />
      <Contato />
    </>
  );
}
