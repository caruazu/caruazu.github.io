type Column = {
  title: string;
  body: string[];
};

interface Props {
  id?: string;
  title?: string;
  intro?: string;
  columns?: Column[];
  className?: string;
}

const defaultContent: Required<Omit<Props, "id" | "className">> = {
  title: "Sobre nós",
  intro:
    "Nossa startup foi oficialmente fundada em 09 de janeiro de 2024, originando-se de uma iniciativa lançada em abril de 2023. Naquela época, identificamos e examinamos demandas específicas no setor de saúde, reconhecendo-as como oportunidades para que fossem propostas soluções frente aos desafios observados.",
  columns: [
    {
      title: "Missão",
      body: [
        "Tornar o uso de tecnologias avançadas na Saúde mais simples e acessível, oferecendo soluções que promovam economia, agilidade e melhores resultados para pacientes e profissionais.",
      ],
    },
    {
      title: "Visão",
      body: [
        "Ser reconhecida como uma das peças fundamentais na transformação digital da Saúde no Brasil, viabilizando o caminho para uma era de interoperabilidade, diagnóstico remoto e precisão.",
      ],
    },
    {
      title: "Ética",
      body: [
        "Tratamos dados e processos com integridade, transparência e respeito à privacidade, contribuindo para um ecossistema confiável.",
      ],
    },
    {
      title: "Inovação",
      body: [
        "Criamos soluções tecnológicas com foco real nas necessidades dos profissionais de saúde e dos pacientes, sempre buscando impacto prático e mensurável.",
      ],
    },
    {
      title: "Simplicidade",
      body: [
        "Valorizamos a usabilidade e o design funcional como pontes entre a tecnologia de ponta e a prática clínica diária.",
      ],
    },
    {
      title: "Compromisso",
      body: [
        "Trabalhamos com foco em eficiência, economia de recursos e melhores desfechos clínicos, tanto para quem cuida quanto para quem é cuidado.",
      ],
    },
  ],
};

export function Sobre({
  id,
  title = defaultContent.title,
  intro = defaultContent.intro,
  columns = defaultContent.columns,
  className = "",
}: Props) {
  return (
    <section id={id} className={`bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-28">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h1>
        <p className="mt-8 md:mt-10 text-2xl leading-snug md:leading-snug max-w-5xl text-zinc-800">
          {intro}
        </p>
        <div className="mt-10 md:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {columns.map((col, idx) => (
            <article key={idx}>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
                {col.title}
              </h2>
              {col.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-4 text-lg leading-relaxed text-zinc-700"
                >
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sobre;
