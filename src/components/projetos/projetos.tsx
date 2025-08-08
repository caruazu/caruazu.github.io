"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjetosProps = {
  heroTitle?: string;
  heroSubtitle?: string;
  featurePoints?: string[];
  promptImageSrc?: string;
  codeImageSrc?: string;
  extraImageSrc?: string;
  extraHeading?: string;
  extraText?: string;
};

export function Projetos({
  heroTitle = "Projetos",
  heroSubtitle = "Nossas soluções para a área da saúde buscam integrar tecnologia avançada à prática clínica, promovendo precisão, economia e facilidade de uso.",
  promptImageSrc = "/images/prompt.png",
  codeImageSrc = "/images/claude-code.png",
  extraImageSrc = "/images/extra.png",
}: ProjetosProps) {
  return (
    <section className="w-full bg-white text-zinc-900">
      <div className="text-center mx-auto pt-24 max-w-6xl px-6 mt-12 md:mt-20 pb-16 md:pb-24">
        <h1 className="text-3xl/tight md:text-5xl/tight font-semibold tracking-tight">
          {heroTitle}
        </h1>
        <p className="mt-3 md:mt-4 text-zinc-600 text-lg md:text-xl">
          {heroSubtitle}
        </p>
      </div>

      {/* Seção 1 */}
      <div className="mx-auto max-w-6xl px-6 mt-12 md:mt-20 pb-16 md:pb-24">
        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="order-2 lg:order-none">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              HealthLaudo
            </h3>
            <p className="mt-3 text-zinc-600 text-base md:text-lg">
              O HealthLaudo é uma plataforma inovadora para gestão e emissão de
              laudos médicos digitais, integrando tecnologia blockchain para
              garantir a autenticidade e segurança dos documentos médicos.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-900 px-5 py-3 text-sm md:text-base font-medium hover:bg-zinc-900 hover:text-white transition-colors shadow-sm"
              >
                Saiba mais
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-none">
            <Link href={promptImageSrc}>
              <Image
                src={promptImageSrc}
                alt="Janela de prompt"
                width={920}
                height={640}
                className="ring-1 ring-black/10 rounded-xl"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Seção 2 */}
      <div className="mx-auto max-w-6xl px-6 mt-12 md:mt-20 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="p-0 order-first lg:order-none">
            <Link href={codeImageSrc}>
              <Image
                src={codeImageSrc}
                alt="Terminal Claude Code"
                width={1120}
                height={720}
                className="ring-1 ring-black/10 rounded-xl"
              />
            </Link>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Mamograf-IA
            </h3>
            <p className="mt-3 text-zinc-600 text-base md:text-lg">
              O Mamograf-IA é uma solução revolucionária que utiliza
              inteligência artificial avançada para auxiliar radiologistas na
              análise e interpretação de exames de mamografia, aumentando a
              precisão diagnóstica e reduzindo o tempo de análise.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-900 px-5 py-3 text-sm md:text-base font-medium hover:bg-zinc-900 hover:text-white transition-colors shadow-sm"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Seção 3 */}
      <div className="mx-auto max-w-6xl px-6 mt-12 md:mt-20 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-none">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Healthchain
            </h3>
            <p className="mt-3 text-zinc-600 text-base md:text-lg">
              Use a tecnologia blockchain e ofereça registros seguros e
              acessíveis para sua Unidade de Saúde. Nosso projeto oferece
              características nativas de blockchain e busca por
              interoperabilidade e desfragmentação de dados.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-900 px-5 py-3 text-sm md:text-base font-medium hover:bg-zinc-900 hover:text-white transition-colors shadow-sm"
              >
                Saiba mais
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-last">
            <Link href={extraImageSrc}>
              <Image
                src={extraImageSrc}
                alt="Imagem adicional"
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
