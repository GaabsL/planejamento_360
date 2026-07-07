export interface Slide {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  category: string;
  tags?: string[];
}

export const slidesData = [
  {
    id: "capa",
    number: 1,
    category: "Abertura",
    title: "PLANEJAMENTO 360º",
    subtitle: "DIA IMBATÍVEL ASSAÍ",
    description: "Estratégias Integradas Dentro e Fora das Redes para Dominar o Dia 25 de Junho",
    metadata: "Conteúdo | 360º Dia Imbatível",
  },
  {
    id: "ecossistema",
    number: 2,
    category: "Estratégia",
    title: "O Ecossistema Omnichannel",
    description: "O Dia Imbatível é um patrimônio comercial do Assaí. Para maximizar o fluxo no dia 25 de Junho, nossa missão é estender a urgência do hardsell digital para a jornada física do cliente, transformando conveniência em fluxo de caixa imediato.",
    pillars: [
      {
        title: "Presença Digital (On-line)",
        foco: "Geração de demanda, alcance e consideração.",
        canais: ["Facebook (foco em comerciantes)", "Instagram (trends e conversão)", "TikTok (audiovisual leve)"],
        papel: "É o pilar que avisa o público, gera o desejo de economia e ajuda o cliente a se preparar na véspera (Dia 24).",
        accent: "digital"
      },
      {
        title: "Gatilhos Diretos (Off-line, Proximidade & PDV)",
        foco: "Conversão imediata, impulso e tráfego físico.",
        canais: ["WhatsApp (conversação)", "Push App Meu Assaí (bloqueio de tela)", "Waze Ads (trajeto)", "Rádio Loja (ponto de venda)"],
        papel: "É o pilar que intercepta a rotina do cliente quando ele está na rua, no trânsito ou já dentro da nossa loja, convertendo o desejo em compra real.",
        accent: "direto"
      }
    ]
  },
  {
    id: "facebook",
    number: 3,
    category: "Redes Sociais",
    title: "Redes Sociais: Facebook",
    direcionamentoEstrategico: "Na plataforma com público mais maduro e forte presença de comerciantes, o formato estático focado em preço e urgência (estilo \"panfleto de varejo tradicional\") é o que melhor performa.",
    linhaEditorial: {
      faseAmanha: {
        data: "24/06",
        fase: "É Amanhã",
        headline: "PREPARE-SE | É AMANHÃ! Um dia inteiro de ofertas imperdíveis para abastecer seu negócio ou sua casa."
      },
      faseHoje: {
        data: "25/06",
        fase: "É Hoje",
        headline: "BOM DIA | Hoje o dia amanheceu mais bonito…Porque é Dia Imbatível! | Corra pro Assaí e aproveite ofertas imperdíveis!"
      }
    },
    direcionamentoVisual: [
      "Cores quentes do KV",
      "Letras garrafais",
      "Selos de desconto bem visíveis",
      "Calendário destacado",
      "Setas, preços, carrinho cheio na loja",
      "Leitura limpa"
    ],
    whyWorks: {
      text: "Atacadão, Mateus, Guanabara e Dia a Dia usam cores ultra quentes, preços 3D e selos para gerar urgência instintiva no consumidor de volume.",
      toqueAssai: "Adotamos o mesmo impacto comercial focado em economia, mas mantendo a qualidade e credibilidade da marca."
    }
  },
  {
    id: "instagram-tiktok",
    number: 4,
    category: "Redes Sociais",
    title: "Redes Sociais: Instagram e TikTok",
    direcionamentoEstrategico: "Nestas plataformas, precisamos envelopar o Dia Imbatível em narrativas orgânicas, dinâmicas e divertidas, focando em identificação e \"hacks\" de economia.",
    formatos: [
      {
        title: "Vídeos de Correria / Bastidores (Reels/TikTok)",
        ideia: "Trends nativas explorando o dinamismo e a velocidade do Dia Imbatível."
      },
      {
        title: "Tom de Voz Estratégico",
        ideia: "Traduzir a agressividade de preços do varejo para a linguagem leve e rápida da internet, focando em \"hack de economia\" e \"oportunidade única\"."
      }
    ],
    fases: [
      {
        nome: "Fase \"É Amanhã\" (24/06)",
        badge: "Trend",
        badgeColor: "#FF7300",
        desc: "Roteiro focado no aquecimento e antecipação das ofertas.",
        refImage: "https://i.imgur.com/TYY7Lwc.png",
        videoLink: "https://www.tiktok.com/@jessie.shen/video/7647207264490720519?_r=1&_t=ZS-976U8MNTr1x",
        roteiroLink: "https://docs.google.com/document/d/11fnc1wRoxhTH5ERW5tuAu_sEEux8afkp9zpH6XD5Zpc/edit?tab=t.0"
      },
      {
        nome: "Fase \"É Hoje\" (25/06)",
        badge: "Gancho estratégico e formato em alta",
        badgeColor: "#FFDC00",
        desc: "Momentum de urgência máxima, revelando o estoque girando.",
        refImage: "https://i.imgur.com/4X9Ypby.png",
        videoLink: "https://br.pinterest.com/pin/8866530512232420/",
        roteiroLink: "https://docs.google.com/document/d/1H_6hQhUkpt5H3qlboWP9TSmJdBLDS90B51J5duLxVnk/edit?tab=t.0"
      }
    ]
  },
  {
    id: "stories",
    number: 5,
    category: "Redes Sociais",
    title: "Redes Sociais: Stories",
    direcionamentoEstrategico: "Os Stories funcionam como nosso ponto de conversão mais rápido. O foco aqui não é tanto contemplação estética, mas ação instantânea. Precisamos de mecanismos de engajamento que guiem o usuário diretamente para os encartes e ofertas digitais.",
    formato: "Hardsell estáticos com gatilhos de urgência. Uso obrigatório do Sticker de Link direcionando direto para o encarte digital da loja mais próxima.",
    fases: [
      {
        titulo: "Fase \"É Amanhã\" (24/06)",
        itens: [
          {
            sub: "Pré-jogo",
            copy: "É Amanhã! 25/06 | Preços Imbatíveis para encher o carrinho!",
            link: "assai.com.br/nossas-lojas",
            cta: "Veja a loja mais próxima de você!"
          },
          {
            sub: "Pós-jogo",
            copy: "Os precinhos do Assaí continuam jogando no ataque! | Prepare-se para amanhã!",
            link: "assai.com.br/nossas-lojas",
            cta: "Veja a loja mais próxima de você!"
          }
        ]
      },
      {
        titulo: "Fase \"É Hoje\" (25/06)",
        itens: [
          {
            sub: "Urgência",
            copy: "É hoje! 25/06 | Preços ainda mais baixos! Corra pro Assaí e aproveite!",
            link: "assai.com.br/ofertas",
            cta: "Confira as ofertas"
          }
        ]
      }
    ]
  },
  {
    id: "whatsapp",
    number: 6,
    category: "Gatilhos Diretos",
    title: "Fora das Redes: Ativação no WhatsApp (Proximidade)",
    direcionamentoEstrategico: "O WhatsApp é uma mídia de conversação íntima. Para não soar como spam ou panfleto genérico, usaremos abordagens que gerem curiosidade e utilidade.",
    acoes: [
      {
        titulo: "Ação 1 | Áudio vazado",
        funcionamento: "Disparo de um áudio curto (até 30 segundos) simulando algo com uma informação ultra-exclusiva. A voz precisa ser de alguém como se fosse um gerente, com som ambiente de loja.",
        audioRoteiro: "\"Gente, grava esse áudio aqui rápido... os preços do Assaí tão caindo demais pro Dia Imbatível de amanhã. Em todas as lojas do Assaí. Prepara pra correr porque o estoque é limitado, hein? Avisa os clientes aí!\""
      },
      {
        titulo: "Ação 2 | Sticker Pack com toque Assaí",
        funcionamento: "Figurinhas úteis e humoradas voltadas para o pequeno comerciante (dono de dogão, pizzaria, mercado de bairro) interagir em seus próprios grupos de clientes.",
        frases: [
          "\"Abastecido com o Imbatível!\"",
          "\"Correndo pro Assaí\"",
          "\"Preço baixo assim só hoje\""
        ]
      }
    ]
  },
  {
    id: "push",
    number: 7,
    category: "Gatilhos Diretos",
    title: "Fora das Redes: Push no App (Gatilho de Impulso)",
    direcionamentoEstrategico: "Pushes precisam ser diretos e lidos em frações de segundo na tela de bloqueio do celular, divididos em quatro abordagens táticas baseadas em dados e geolocalização.",
    metrica: "3 Segundos de Leitura para máxima taxa de clique.",
    ideias: [
      {
        id: 1,
        titulo: "1. Geofencing (Raio de 3km da loja)",
        texto: "Você está muito perto de economizar! O Dia Imbatível está acontecendo na loja ao seu lado. Faz a curva e vem!"
      },
      {
        id: 2,
        titulo: "2. Contagem Regressiva (Urgência Real)",
        texto: "Só restam 4 horas! O Dia Imbatível está acabando e os estoques estão derretendo. Corre!"
      },
      {
        id: 3,
        titulo: "3. Humor (Carrinho Vazio)",
        texto: "Seu carrinho mandou avisar que tá com saudade... Aproveita os preços imbatíveis de hoje para resolver isso!"
      },
      {
        id: 4,
        titulo: "4. Segmentado de acordo com histórico (Branding e Dados)",
        texto: "Alerta de Geladeira Cheia! As marcas de bebidas que você mais gosta estão com descontos imbatíveis hoje. Clique e confira!"
      }
    ]
  },
  {
    id: "retail-media-waze",
    number: 8,
    category: "Gatilhos Diretos",
    title: "Fora das Redes: Retail Media na Loja e Waze",
    secoes: [
      {
        title: "Rádio Loja (Ponto de Venda)",
        direcionamentoEstrategico: "Garantir que o cliente que entrou na loja seja impactado por ofertas em tempo real, sustentando o clima de urgência da campanha digital.",
        formato: "Plantão Dia Imbatível (Rádio Loja)",
        roteiro: "Interrupção surpresa da música ambiente por uma vinheta imponente (estilo plantão de notícias urgente): \"ATENÇÃO CLIENTE ASSAÍ! Começa agora o Plantão do Dia Imbatível! Pelos próximos 30 minutos, o óleo de soja e o leite condensado na seção 4 estão com 20% de desconto adicional. É apenas enquanto durar o estoque do corredor!\""
      },
      {
        title: "Waze Ads (Geolocalização / Trajeto)",
        direcionamentoEstrategico: "Impactar motoristas e comerciantes que estão na rua fazendo entregas ou voltando para casa, convertendo a rota física deles para o Assaí.",
        formato: "Pinos de Rota e Zero-Speed Takeovers",
        roteiro: "Anúncios que aparecem quando o carro para completamente no semáforo em um raio próximo à loja. \"Preso no trânsito? O Dia Imbatível do Assaí tá rolando logo ali na frente. Fuja do trânsito, estacione e economize muito no abastecimento de hoje!\""
      }
    ]
  },
  {
    id: "cronograma",
    number: 9,
    category: "Planejamento",
    title: "Cronograma Integrado de Publicações",
    subtitle: "Ações coordenadas para as datas cruciais",
    canais: [
      {
        canal: "Facebook",
        dia24: { acao: "Post Estático \"Prepare-se / É Amanhã\"", hora: "09:00" },
        dia25: { acao: "Post Estático \"É Hoje / Menor Preço\"", hora: "07:00" }
      },
      {
        canal: "Instagram & TikTok",
        dia24: { acao: "Publicação da Trend", hora: "09:00" },
        dia25: { acao: "Vídeo Formato em Alta", hora: "09:00" }
      },
      {
        canal: "Stories (IG)",
        dia24: { acao: "Pré-jogo (12h) e Pós-jogo com reforço (21h)", hora: "Múltiplos" },
        dia25: { acao: "Com botão de ofertas", hora: "09:00" }
      },
      {
        canal: "WhatsApp",
        dia24: { acao: "Disparo do \"Áudio Vazado do Gerente\"", hora: "09:00" },
        dia25: { acao: "Envio do Sticker Pack para grupos de negócios", hora: "09:00" }
      },
      {
        canal: "App Meu Assaí (Push)",
        dia24: { acao: "Notificação Informativa de Preparação", hora: "19:00" },
        dia25: { acao: "Disparos de Geo-fencing e Contagem Regressiva", hora: "11h / 17h" }
      }
    ]
  },
  {
    id: "conclusao",
    number: 10,
    category: "Visão 360º",
    title: "Sinergia Estratégica",
    slogan: "Unimos a agilidade do hardsell à intimidade do WhatsApp e à inteligência de geolocalização",
    conclusaoTexto: "Uma estratégia 360º de extrema eficiência para transformar fluxo digital em conversão real no PDV do Assaí Atacadista."
  },
  {
    id: "fechamento",
    number: 11,
    category: "Fechamento",
    title: "Agradecimento",
    subtitle: "ASSAÍ ATACADISTA",
    parceiro: "MEGAMIDIA GROUP",
    site: "megamidia.com.br",
    missao: "Transformando o fluxo digital em conversão real."
  }
];
