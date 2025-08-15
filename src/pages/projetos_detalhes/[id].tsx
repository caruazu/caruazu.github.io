// pages/projetos_detalhes/[id].tsx
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { projetos, getProjetoById, type Projeto } from "@/lib/projetos";

type Props = { projeto: Projeto };

const ProjetoDetalhesPage: NextPage<Props> = ({ projeto }) => {
  return (
    <>
      <Head>
        <title>{projeto.nome} • Detalhes</title>
        <meta name="description" content={projeto.resumo} />
      </Head>

      <main className="w-full bg-white text-zinc-900">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900"
          >
            ← Voltar para projetos
          </Link>

          <h1 className="mt-4 text-3xl/tight md:text-5xl/tight font-semibold tracking-tight">
            {projeto.nome}
          </h1>
          <p className="mt-3 md:mt-4 text-zinc-600 text-lg md:text-xl">
            {projeto.resumo}
          </p>
          <div className="mt-8">
            <div className="flex justify-center">
              <div className="max-w-[600px]">
                <Image
                  src={projeto.capa}
                  alt={`Capa do projeto ${projeto.nome}`}
                  width={1120}
                  height={720}
                  className="ring-1 ring-black/10 rounded-xl"
                  priority
                />
              </div>
            </div>

            <article className="mt-8">
              <p className="text-zinc-700 text-base md:text-lg">
                {projeto.descricao}
              </p>
            </article>

            {/* SEÇÕES DETALHADAS */}
            {projeto.secoes?.map((secao, idx) => (
              <section key={idx} className="mt-10">
                {secao.titulo && (
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    {secao.titulo}
                  </h2>
                )}

                {secao.paragrafos?.map((p, i) => (
                  <p
                    key={i}
                    className="mt-3 text-zinc-700 text-base md:text-lg"
                  >
                    {p}
                  </p>
                ))}

                {secao.itens && secao.itens.length > 0 && (
                  <ul className="mt-4 space-y-4">
                    {secao.itens.map((item, j) => (
                      <li key={j} className="text-zinc-700">
                        {item.titulo && (
                          <h3 className="text-lg md:text-xl font-medium">
                            {item.titulo}
                          </h3>
                        )}
                        <p className="mt-1 text-base md:text-lg">
                          {item.texto}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {projeto.imagens && projeto.imagens.length > 1 && (
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projeto.imagens.slice(1).map((img, i) => (
                  <Image
                    key={img}
                    src={img}
                    alt={`${projeto.nome} imagem ${i + 2}`}
                    width={640}
                    height={360}
                    className="ring-1 ring-black/10 rounded-xl"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projetos.map((p) => ({ params: { id: p.id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const id = ctx.params?.id as string;
  const projeto = getProjetoById(id);
  if (!projeto) return { notFound: true };
  return { props: { projeto } };
};

export default ProjetoDetalhesPage;
