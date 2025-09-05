import { Geist_Mono, Rajdhani } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rajdhaniSans = Rajdhani({
  subsets: ["latin"],
  weight: "300",
});

const projetos = [
  {
    nome: "SVO",
    descricao: "Serviço do governo de Alagoas para reportar óbitos",
    link: "https://prasvo.uncisal.edu.br",
  },
  {
    nome: "Healthchain",
    descricao: "Divulgação para a startup healthchain",
    link: "https://healthchain.tec.br",
  },
  {
    nome: "Empregos",
    descricao: "Gerencie vagas de emprego",
    link: "https://github.com/caruazu/empregos",
  },
  {
    nome: "Chamados",
    descricao: "Organize os atendimentos do setor",
    link: "https://github.com/caruazu/chamados",
  },
  {
    nome: "Agendador",
    descricao: "Marque uma reunião",
    link: "https://github.com/caruazu/agendador",
  },
];

export const Projetos = () => {
  return (
    <section className="text-center p-10">
      <h2 className={`${rajdhaniSans.className} text-5xl md:text-7xl `}>
        Projetos
      </h2>
      <h2 className={`${geistMono.className} text-sm `}>
        Os que posso mostrar
      </h2>
      <div className="pt-15">
        <ul className={`${geistMono.className} flex flex-col gap-5`}>
          {projetos.map((projeto) => (
            <li key={projeto.nome}>
              <a
                href={projeto.link}
                className="text-2xl font-thin underline decoration-[1px] underline-offset-2"
              >
                {projeto.nome}
              </a>
              <p className="text-xs">{projeto.descricao}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
