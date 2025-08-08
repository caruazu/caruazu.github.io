"use client";

import Image from "next/image";
import React from "react";

export type TeamMember = {
  id?: string | number;
  name: string;
  role: string;
  imageUrl: string;
};

export type EquipeProps = {
  title?: string;
  subtitle?: string;
  members: TeamMember[];
  className?: string;
  cardClassName?: string;
};

export function Equipe({
  title = "Nossa equipe",
  subtitle,
  members,
  className = "",
  cardClassName = "",
}: EquipeProps) {
  return (
    <section className={`w-full px-4 md:px-6 lg:px-8 py-12 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <header className="text-center mb-8">
          <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && (
            <p className="mt-1 text-sm md:text-base text-gray-500">
              {subtitle}
            </p>
          )}
        </header>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {members.map((m, idx) => (
            <article
              key={m.id ?? idx}
              className={`w-36 h-54 relative rounded-xl  bg-white dark:bg-zinc-900 p-3 flex flex-col items-center justify-start ${cardClassName}`}
            >
              <div className="mt-1 h-28 w-28 rounded-full overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-700">
                <Image
                  src={m.imageUrl}
                  alt={`Foto de ${m.name}`}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                  sizes="64px"
                />
              </div>

              {/* Nome */}
              <h3 className="mt-6 text-sm font-semibold leading-none tracking-tight text-center line-clamp-1 px-2">
                {m.name}
              </h3>

              {/* Cargo */}
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 text-center line-clamp-2 px-2">
                {m.role}
              </p>

              {/* Previne conteúdo estourar do card */}
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-200/60 dark:ring-zinc-800/60" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Equipe;
