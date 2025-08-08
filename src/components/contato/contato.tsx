"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export function Contato({
  companyEmail = "contato@minhaempresa.com",
  endereco = {
    linha1: "Rua Exemplo, 123",
    linha2: "Bairro Central",
    cidade: "Fortaleza",
    estado: "CE",
    cep: "60000-000",
    telefone: "+55 (85) 99999-0000",
    mapsUrl: "https://maps.google.com",
  },
}) {
  return (
    <section className="bg-white ">
      <header className="mx-auto max-w-2xl text-center pt-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Fale com a gente
        </h2>
      </header>
      <div className="grid gap-6 md:grid-cols-3 w-full max-w-7xl mx-auto p-6">
        {/* Card: Formulário */}
        <div className="p-6 space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            Me passa teu email
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Informe seu e-mail e nós entraremos em contato.
          </p>

          <form className="mt-5 flex gap-3">
            <label htmlFor="email" className="sr-only">
              Seu e-mail
            </label>
            <div className="flex-1">
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                required
                placeholder="voce@exemplo.com"
                className="w-full rounded-xl border border-neutral-300 focus:border-neutral-800 focus:ring-4 focus:ring-neutral-200 px-4 py-3 text-base outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-950 shadow transition"
            >
              <Mail className="w-4 h-4" />
              Enviar
            </button>
          </form>
        </div>

        {/* Card: zap */}
        <div className="p-6 space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            Manda um Zap!
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            clique no link para conversar conosco no WhatsApp.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="https://wa.me/5585999990000"
              target="_blank"
              aria-label={`Abrir WhatsApp`}
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center w-full rounded-xl border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
            >
              Conversar pelo zap
            </a>
          </div>
        </div>

        {/* Card: Endereço */}
        <div className="p-6 space-y-3">
          <h3 className="text-lg font-semibold">Endereço</h3>
          <div className="text-neutral-700 text-sm space-y-1">
            {endereco.linha1 && (
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  {endereco.linha1}
                  {endereco.linha2 ? `, ${endereco.linha2}` : ""}
                  <br />
                  {[endereco.cidade, endereco.estado, endereco.cep]
                    .filter(Boolean)
                    .join(" - ")}
                </span>
              </p>
            )}
            {endereco.telefone && (
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  className="hover:underline"
                  href={`tel:${endereco.telefone}`}
                >
                  {endereco.telefone}
                </a>
              </p>
            )}
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a className="hover:underline" href={`mailto:${companyEmail}`}>
                {companyEmail}
              </a>
            </p>
          </div>

          {endereco.mapsUrl && (
            <a
              href={endereco.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center w-full rounded-xl border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
            >
              Ver no mapa
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
