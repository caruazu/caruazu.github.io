// app/components/Contato.tsx
import Link from "next/link";

type Card = {
  label: string;
  title: string;
  href: string;
};

type ContatoProps = {
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  cards?: [Card, Card];
};

export function Contato({
  heading = "Agende uma demonstração",
  description = "Solicite uma proposta ou marque uma reunião.",
  ctaText = "Enviar mensagem",
  ctaHref = "/contato",
  cards = [
    {
      label: "Entraremos em contato",
      title: "Envie um email",
      href: "mailto:future@healthchain.tec.br",
    },
    {
      label: "Nosso endereço",
      title: "Veja nossa localização",
      href: "https://maps.app.goo.gl/pzGRcZtjCvo7J3PG9",
    },
  ],
}: ContatoProps) {
  return (
    <section id="contato" className="mx-auto max-w-6xl mt-10 mb-10 sm:p-6">
      <div className="rounded-3xl p-4 pb-10 bg-white sm:p-7 pt-10 md:p-10">
        {/* Layout: coluna no mobile; 3 colunas no md+ */}
        <div className="grid gap-5 md:grid-cols-3 md:items-start">
          {/* Coluna esquerda */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {heading}
            </h2>

            <p className="mt-4 max-w-prose text-stone-700">{description}</p>
          </div>

          {/* Cards à direita (empilham no mobile) */}
          {cards.map((card, idx) => (
            <Link
              key={idx}
              href={card.href}
              className="
                group rounded-2xl bg-forest-light pb-16 p-5 sm:p-6
                md:h-56 md:p-7
                hover:bg-[#b6dbce] transition
                focus:outline-none focus:ring-2 focus:ring-forest-vivid
                relative
              "
            >
              <div className="text-xs font-medium text-stone-600">
                {card.label}
              </div>
              <div className="mt-1 text-xl font-semibold">{card.title}</div>

              {/* seta no canto inferior direito */}
              <span
                aria-hidden
                className="
                  absolute bottom-5 right-5 inline-flex h-9 w-9 items-center justify-center
                  rounded-full border border-stone-800
                  group-hover:translate-x-0.5 transition-transform
                "
                title="Abrir"
              >
                <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

export default Contato;
