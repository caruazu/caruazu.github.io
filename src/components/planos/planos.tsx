"use client";

import React from "react";

type Feature = { label: string };

type Plan = {
  name: string;
  price: string;
  description: string;
  cta: string;
  highlighted?: boolean;
  features: Feature[];
  note?: string;
};

const plans: Plan[] = [
  {
    name: "Essencial",
    price: "R$ 1.499,90",
    description: "Para startups que precisam de suporte pontual e estratégico.",
    cta: "Começar",
    features: [
      { label: "10 horas de consultoria por mês" },
      { label: "Suporte por e-mail" },
      { label: "Análise de Tecnologia Trimestral" },
    ],
  },
  {
    name: "Profissional",
    price: "R$ 3.499,90",
    description:
      "Para empresas em crescimento que precisam de uma parceria mais ativa para escalar sua tecnologia e otimizar processos.",
    cta: "Começar",
    highlighted: true,
    features: [
      { label: "Tudo do Plano Essencial" },
      { label: "20 horas de consultoria por mês" },
      { label: "Reunião de Alinhamento Semanal" },
      { label: "Gerenciamento Básico de Projetos" },
      { label: "Análise de Tecnologia Mensal" },
    ],
  },
  {
    name: "Especial",
    price: "R$ 7.499,90",
    description:
      "Para negócios com necessidades tecnológicas críticas que desejam ter um parceiro dedicado.",
    cta: "Começar",
    features: [
      { label: "40 horas de consultoria por mês" },
      { label: "Suporte 24/7" },
      { label: "Diretoria de Tecnologia (CTO) como Serviço" },
      { label: "Treinamento para Equipes Internas" },
      { label: "Monitoramento e Suporte Proativo" },
    ],
  },
];

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Planos() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Planos e Preços
        </h2>
        <p className="mt-3 text-sm text-muted-foreground/80 dark:text-white/60">
          Consultoria profissional e com suporte de verdade. Escolha o plano que
          faz sentido para você.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={[
              "relative flex flex-col rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur transition-all dark:bg-zinc-900/60",
              plan.highlighted
                ? "border-lime-600 shadow-md ring-1 ring-lime-600/40 md:scale-[1.03]"
                : "border-zinc-200 hover:shadow-md dark:border-zinc-800",
            ].join(" ")}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime-700 px-3 py-1 text-xs font-semibold text-white shadow">
                Mais popular
              </span>
            )}

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                {plan.description}
              </p>
            </div>

            <div className="mb-6 flex items-baseline gap-1">
              <span
                className={
                  plan.highlighted
                    ? "text-4xl font-bold text-lime-700"
                    : "text-4xl font-bold"
                }
              >
                {plan.price}
              </span>
              <span className="text-sm text-zinc-500">/ mês</span>
            </div>

            <ul className="mb-6 space-y-3 text-sm">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckIcon
                    className={
                      plan.highlighted
                        ? "mt-0.5 h-5 w-5 text-lime-700"
                        : "mt-0.5 h-5 w-5 text-emerald-600"
                    }
                  />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <button
                className={[
                  "w-full rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2",
                  plan.highlighted
                    ? "bg-lime-700 text-white hover:bg-lime-800 focus:ring-lime-700"
                    : "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200",
                ].join(" ")}
                onClick={() => alert(`Plano selecionado: ${plan.name}`)}
                aria-label={`Selecionar plano ${plan.name}`}
              >
                {plan.cta}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Planos;
