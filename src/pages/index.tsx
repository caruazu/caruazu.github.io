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
  {
    name: "Aislan Galdino",
    role: "Ciência de Dados e BI",
    imageUrl: "/team/aislan.jpeg",
  },
  {
    name: "Henrique Silva",
    role: "Codificação e Projetos",
    imageUrl: "/team/henrique.jpeg",
  },
  {
    name: "Larissa Carvalho",
    role: "Marketing, Mídias e Identidade",
    imageUrl: "/team/larissa.jpeg",
  },
  {
    name: "Reinaldo Alves",
    role: "Prospecção e Negócios",
    imageUrl: "/team/reinaldo.jpeg",
  },
  {
    name: "Ziraldo Cardoso",
    role: "Inovação e Gestão de Equipes",
    imageUrl: "/team/ziraldo.jpeg",
  },
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
