// lib/projetos.ts
export type Conteudo = {
  titulo?: string;
  paragrafos?: string[]; // blocos de texto
  itens?: { titulo?: string; texto: string }[]; // listas com (opcional) subtítulo
};

export type Projeto = {
  id: string; // slug usado na URL
  nome: string;
  resumo: string; // pequeno resumo para cards/listas
  descricao: string; // descrição principal no topo da página
  capa: string; // imagem principal (local)
  imagens?: string[]; // imagens adicionais (opcional)
  secoes?: Conteudo[]; // conteúdo estruturado para exibir abaixo
};

export const projetos: Projeto[] = [
  // HEALTHLAUDO
  {
    id: "healthlaudo",
    nome: "HealthLaudo",
    resumo:
      "Plataforma para gestão e emissão de laudos médicos digitais com blockchain.",
    descricao:
      "O HealthLaudo é uma plataforma inovadora para gestão e emissão de laudos médicos digitais, integrando tecnologia blockchain para garantir a autenticidade e segurança dos documentos médicos.",
    capa: "/images/prompt.jpg",
    imagens: ["/images/prompt.jpg"],
    secoes: [
      {
        titulo: "Sobre o HealthLaudo",
        paragrafos: [
          "O HealthLaudo é uma plataforma inovadora para gestão e emissão de laudos médicos digitais, integrando tecnologia blockchain para garantir a autenticidade e segurança dos documentos médicos.",
        ],
      },
      {
        titulo: "Funcionalidades Principais",
        itens: [
          {
            titulo: "Emissão Digital de Laudos",
            texto:
              "Sistema completo para criação, edição e emissão de laudos médicos com assinatura digital certificada.",
          },
          {
            titulo: "Verificação de Autenticidade",
            texto:
              "Cada laudo é registrado na blockchain, permitindo verificação instantânea de autenticidade e integridade.",
          },
          {
            titulo: "Integração com Sistemas",
            texto:
              "API robusta para integração com sistemas hospitalares, clínicas e laboratórios existentes.",
          },
        ],
      },
      {
        titulo: "Benefícios",
        itens: [
          {
            titulo: "Segurança Avançada",
            texto:
              "Proteção contra falsificação e alteração não autorizada de documentos médicos.",
          },
          {
            titulo: "Eficiência Operacional",
            texto:
              "Redução significativa no tempo de emissão e entrega de laudos aos pacientes.",
          },
          {
            titulo: "Conformidade Regulatória",
            texto:
              "Atendimento completo às normas do CFM e LGPD para documentos médicos digitais.",
          },
        ],
      },
      {
        titulo: "Tecnologia",
        paragrafos: [
          "Desenvolvido com tecnologia blockchain permissionada, garantindo que apenas profissionais autorizados possam emitir laudos, enquanto mantém a transparência e rastreabilidade necessárias para o setor de saúde.",
        ],
      },
    ],
  },

  // MAMOGRAF-IA
  {
    id: "mamograf-ia",
    nome: "Mamograf-IA",
    resumo:
      "IA para auxiliar radiologistas em mamografias, elevando precisão diagnóstica.",
    descricao:
      "O Mamograf-IA é uma solução revolucionária que utiliza inteligência artificial avançada para auxiliar radiologistas na análise e interpretação de exames de mamografia, aumentando a precisão diagnóstica e reduzindo o tempo de análise.",
    capa: "/images/claude-code.png",
    imagens: ["/images/claude-code.png"],
    secoes: [
      {
        titulo: "Inteligência Artificial em Mamografia",
        paragrafos: [
          "Solução que aplica modelos de visão computacional para apoio ao diagnóstico, com foco em alta sensibilidade e especificidade.",
        ],
      },
      {
        titulo: "Tecnologia de Ponta",
        itens: [
          {
            titulo: "Algoritmos de Deep Learning",
            texto:
              "Redes neurais convolucionais treinadas com milhares de exames para identificar padrões suspeitos com alta precisão.",
          },
          {
            titulo: "Detecção Precoce",
            texto:
              "Capacidade de identificar lesões em estágios iniciais, aumentando as chances de tratamento bem-sucedido.",
          },
          {
            titulo: "Análise Automatizada",
            texto:
              "Processamento automático de imagens com geração de relatórios preliminares para apoio ao diagnóstico.",
          },
        ],
      },
      {
        titulo: "Impacto Clínico",
        itens: [
          {
            titulo: "Redução de Falsos Negativos",
            texto:
              "Diminuição significativa de casos não detectados, proporcionando maior segurança diagnóstica.",
          },
          {
            titulo: "Otimização do Tempo",
            texto:
              "Redução do tempo de análise por exame, permitindo maior throughput e atendimento mais ágil.",
          },
          {
            titulo: "Padronização de Laudos",
            texto:
              "Uniformização na descrição de achados, seguindo protocolos internacionais como BI-RADS.",
          },
        ],
      },
      {
        titulo: "Integração e Blockchain",
        paragrafos: [
          "Integra-se à plataforma Healthchain, registrando resultados de forma segura e imutável na blockchain para rastreabilidade e auditoria.",
        ],
      },
      {
        titulo: "Benefícios para Profissionais",
        itens: [
          {
            titulo: "Apoio à Decisão Clínica",
            texto:
              "Ferramenta de segunda opinião para casos complexos ou duvidosos.",
          },
          {
            titulo: "Educação Continuada",
            texto:
              "Sistema de feedback que contribui para o aprendizado e aperfeiçoamento contínuo.",
          },
          {
            titulo: "Redução de Stress",
            texto:
              "Maior confiança diagnóstica reduz a ansiedade relacionada à responsabilidade do diagnóstico.",
          },
        ],
      },
    ],
  },

  // HEALTHCHAIN
  {
    id: "healthchain",
    nome: "Healthchain",
    resumo:
      "Registros em blockchain para unidades de saúde com foco em segurança e acesso.",
    descricao:
      "Use a tecnologia blockchain e ofereça registros seguros e acessíveis para sua Unidade de Saúde. Nosso projeto oferece características nativas de blockchain e busca por interoperabilidade e desfragmentação de dados.",
    capa: "/images/extra.jpg",
    imagens: ["/images/extra.jpg"],
    secoes: [
      {
        titulo: "Registros de Saúde",
        paragrafos: [
          "Use a tecnologia blockchain e ofereça registros seguros e acessíveis para sua Unidade de Saúde. Nosso projeto oferece características nativas de blockchain e busca por interoperabilidade e desfragmentação de dados.",
        ],
      },
      {
        titulo: "Informações Integradas",
        paragrafos: [
          "Mude a maneira como as informações de saúde são gerenciadas e compartilhadas.",
        ],
      },
      {
        titulo: "Blockchain na Saúde",
        paragrafos: [
          "Rede blockchain em consórcio (permissionada), voltada ao mercado brasileiro, que integra dados de saúde de várias fontes públicas e privadas, fornecendo registro completo e atualizado por paciente (EHR e PHR), incluindo uso de NTTs (Non-Tradable Token) e integração com o Drex (CBDC do Banco Central do Brasil).",
        ],
      },
      {
        titulo: "Problemas que Resolvemos",
        itens: [
          {
            titulo: "1. Fragmentação e falta de confiabilidade",
            texto:
              "Cada unidade de saúde gera seus próprios dados, com repetição manual e pouca validação, resultando em informações imprecisas, incompletas e conflitantes.",
          },
          {
            titulo: "2. Criptografia e interoperabilidade",
            texto:
              "Além da baixa qualidade de dados, há segurança precária e falta de interoperabilidade entre sistemas.",
          },
          {
            titulo: "3. Associação com tecnologias emergentes",
            texto:
              "Dados parciais ou de baixa qualidade comprometem IA e Telemedicina, levando a previsões e diagnósticos incorretos.",
          },
          {
            titulo: "4. Controle e propriedade de informações",
            texto:
              "O paciente precisa de autonomia para compartilhar seus dados de forma seletiva para diferentes finalidades.",
          },
          {
            titulo: "5. Transações financeiras em tempo real",
            texto:
              "Processos em lote e manuais geram atrasos entre operadoras e unidades de saúde; visamos liquidação mais ágil.",
          },
        ],
      },
      {
        titulo: "Sobre Nós",
        paragrafos: [
          "Startup baseada em blockchain que busca revolucionar a qualidade e segurança das informações em saúde, devolvendo a propriedade dos dados e monetização a quem de direito: o paciente.",
        ],
      },
      {
        titulo: "Nosso Propósito",
        paragrafos: [
          "O setor de saúde no Brasil entra em uma fase crucial de transformações nos próximos 5 anos. A Healthchain nasce para acelerar mudanças essenciais que não podem mais ser adiadas.",
        ],
      },
    ],
  },
];

export function getProjetoById(id: string) {
  return projetos.find((p) => p.id === id) || null;
}
