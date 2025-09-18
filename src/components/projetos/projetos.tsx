import { Share_Tech_Mono, Tiny5, VT323 } from "next/font/google";

const tiny5 = Tiny5({
  subsets: ["latin"],
  weight: "400",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

const shareTech = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
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
      <h3 className={`${tiny5.className} text-5xl md:text-7xl `}>PROJETOS</h3>
      <p className={`${vt323.className} text-lg `}>Os que posso mostrar</p>
      <div className="pt-15">
        <ul className={`${vt323.className} flex flex-col gap-5`}>
          {projetos.map((projeto) => (
            <li key={projeto.nome}>
              <a
                href={projeto.link}
                className="text-3xl underline decoration-[1px] underline-offset-2"
              >
                {projeto.nome}
              </a>
              <p className={`${shareTech.className} text-sm`}>
                {projeto.descricao}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
