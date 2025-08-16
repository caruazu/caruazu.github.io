// components/Projetos.tsx (seu componente ajustado)
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projetos as data } from "@/lib/projetos";

type ProjetosProps = {
  heroTitle?: string;
  heroSubtitle?: string;
};

export function Projetos({
  heroTitle = "Projetos",
  heroSubtitle = "Nossas soluções têm como foco: precisão, economia e facilidade de uso para pacientes e profissionais.",
}: ProjetosProps) {
  // mapeia por nome para reaproveitar o layout existente
  const healthLaudo = data.find((p) => p.id === "healthlaudo")!;
  const mamografIA = data.find((p) => p.id === "mamograf-ia")!;
  const healthchain = data.find((p) => p.id === "healthchain")!;

  return (
    <section id="projetos" className="w-full bg-white text-zinc-900">
      <div className="text-center mx-auto pt-16 max-w-6xl px-6">
        <h1 className="text-3xl/tight md:text-5xl/tight font-semibold tracking-tight">
          {heroTitle}
        </h1>
        <p className="mt-3 md:mt-4 text-zinc-600 text-lg md:text-xl">
          {heroSubtitle}
        </p>
      </div>

      {/* Seção 1 - HealthLaudo */}
      <div className="mx-auto max-w-6xl px-6 mt-12 pb-8">
        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-none">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {healthLaudo.nome}
            </h3>
            <p className="mt-3 text-zinc-600 text-base md:text-lg">
              {healthLaudo.resumo}
            </p>
            <div className="mt-6">
              <Link
                href={`/projetos_detalhes/${healthLaudo.id}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-900 px-5 py-3 text-sm md:text-base font-medium hover:bg-zinc-900 hover:text-white transition-colors shadow-sm"
              >
                Saiba mais
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-none">
            <Link href={`/projetos_detalhes/${healthLaudo.id}`}>
              <Image
                src={healthLaudo.capa}
                alt={`Capa ${healthLaudo.nome}`}
                width={920}
                height={640}
                className="ring-1 ring-black/10 rounded-xl"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Seção 2 - Mamograf-IA */}
      <div className="mx-auto max-w-6xl px-6 mt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="p-0 order-first lg:order-none">
            <Link href={`/projetos_detalhes/${mamografIA.id}`}>
              <Image
                src={mamografIA.capa}
                alt={`Capa ${mamografIA.nome}`}
                width={1120}
                height={720}
                className="ring-1 ring-black/10 rounded-xl"
              />
            </Link>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {mamografIA.nome}
            </h3>
            <p className="mt-3 text-zinc-600 text-base md:text-lg">
              {mamografIA.resumo}
            </p>
            <div className="mt-6">
              <Link
                href={`/projetos_detalhes/${mamografIA.id}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-900 px-5 py-3 text-sm md:text-base font-medium hover:bg-zinc-900 hover:text-white transition-colors shadow-sm"
              >
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Seção 3 - Healthchain */}
      <div className="mx-auto max-w-6xl px-6 mt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-none">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {healthchain.nome}
            </h3>
            <p className="mt-3 text-zinc-600 text-base md:text-lg">
              {healthchain.resumo}
            </p>
            <div className="mt-6">
              <Link
                href={`/projetos_detalhes/${healthchain.id}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-900 px-5 py-3 text-sm md:text-base font-medium hover:bg-zinc-900 hover:text-white transition-colors shadow-sm"
              >
                Saiba mais
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-last">
            <Link href={`/projetos_detalhes/${healthchain.id}`}>
              <Image
                src={healthchain.capa}
                alt={`Capa ${healthchain.nome}`}
                width={1120}
                height={720}
                className="ring-1 ring-black/10 rounded-xl"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
