export interface MatchResult {
  opponent: string;
  result: 'W' | 'D' | 'L';
  score: string;
}

export interface TeamDetails {
  history: string;
  qualification: string;
  lastMatches: MatchResult[];
}

const specificData: Record<string, Partial<TeamDetails>> = {
  'RSA': {
    history: `O jejum terminou. Depois de ficar fora das três últimas edições, a África do Sul está de volta à Copa do Mundo da FIFA™ pela primeira vez desde que recebeu o torneio e as melhores seleções do planeta em 2010.

Histórico da África do Sul na Copa do Mundo
Confederação: CAF
Melhores Copas do Mundo: 1998, 2002, 2010 (fase de grupos)
Última Copa do Mundo: 2010 (fase de grupos)
Primeira Copa do Mundo: 1998 (fase de grupos)
Participações: 4 (1998, 2002, 2010, 2026)
Sequência atual de classificações: 1
País-sede: 2010 (fase de grupos)
Histórico na Copa do Mundo: 9 J, 2 V, 4 E, 3 D, 11 GP, 16 GC`,
    qualification: `Como a África do Sul se classificou para 2026
A África do Sul garantiu sua quarta participação em Copas do Mundo ao terminar na liderança do Grupo C das eliminatórias da CAF, com cinco vitórias, três empates e duas derrotas. A classificação veio após uma disputa acirrada com a Nigéria, potência continental, e com o surpreendente Benin, sendo decidida apenas nos minutos finais da última rodada.

Os Bafana Bafana chegaram à rodada decisiva em segundo lugar e precisavam vencer Ruanda em casa para seguir sonhando. Com uma convincente vitória por 3 a 0, as atenções se voltaram para o duelo entre Nigéria e o então líder Benin. A goleada por 4 a 0 dos nigerianos permitiu que os sul-africanos terminassem na primeira colocação e garantissem a vaga no Mundial.`,
    lastMatches: [
      { opponent: 'Panamá', result: 'L', score: '1-2' },
      { opponent: 'Panamá', result: 'D', score: '1-1' },
      { opponent: 'Camarões', result: 'L', score: '1-2' },
      { opponent: 'Zimbábue', result: 'W', score: '3-2' },
      { opponent: 'Egito', result: 'L', score: '0-1' },
    ]
  },
  'BRA': {
    history: 'O Brasil é a única seleção a participar de todas as edições da Copa do Mundo e a maior vencedora do torneio, com 5 títulos (1958, 1962, 1970, 1994 e 2002). Conhecida pelo "futebol arte", a seleção canarinho sempre entra como uma das favoritas.',
    qualification: 'O Brasil garantiu sua vaga nas Eliminatórias Sul-Americanas, terminando entre os primeiros colocados após uma campanha sólida, apesar de alguns tropeços no início do ciclo sob novo comando técnico.',
    lastMatches: [
      { opponent: 'Argentina', result: 'D', score: '1-1' },
      { opponent: 'Colômbia', result: 'W', score: '2-0' },
      { opponent: 'Uruguai', result: 'L', score: '0-1' },
      { opponent: 'Peru', result: 'W', score: '3-0' },
      { opponent: 'Chile', result: 'W', score: '4-0' },
    ]
  },
  'ARG': {
    history: 'A Argentina é tricampeã mundial (1978, 1986 e 2022). Atual defensora do título, a equipe albiceleste tem uma rica história de craques, desde Maradona até Lionel Messi, que liderou a equipe na conquista no Catar.',
    qualification: 'A Argentina sobrou nas Eliminatórias Sul-Americanas, classificando-se com antecedência e liderando a tabela na maior parte da competição, mantendo a base campeã do mundo.',
    lastMatches: [
      { opponent: 'Brasil', result: 'D', score: '1-1' },
      { opponent: 'Uruguai', result: 'W', score: '2-1' },
      { opponent: 'Equador', result: 'W', score: '1-0' },
      { opponent: 'Bolívia', result: 'W', score: '3-0' },
      { opponent: 'Paraguai', result: 'D', score: '0-0' },
    ]
  },
  'FRA': {
    history: 'A França possui dois títulos mundiais (1998 e 2018) e chegou à final em 2006 e 2022. Com uma das gerações mais talentosas de sua história, os Les Bleus são uma potência dominante no futebol moderno.',
    qualification: 'A França dominou seu grupo nas Eliminatórias Europeias, classificando-se de forma invicta e demonstrando um poder ofensivo avassalador.',
    lastMatches: [
      { opponent: 'Espanha', result: 'D', score: '2-2' },
      { opponent: 'Inglaterra', result: 'W', score: '3-1' },
      { opponent: 'Alemanha', result: 'L', score: '1-2' },
      { opponent: 'Itália', result: 'W', score: '2-0' },
      { opponent: 'Holanda', result: 'W', score: '4-0' },
    ]
  },
  'ESP': {
    history: 'A Espanha conquistou o mundo em 2010 com seu famoso estilo "tiki-taka". Após um período de renovação, a La Roja voltou a figurar entre as principais forças da Europa, com uma geração jovem e muito técnica.',
    qualification: 'A Espanha garantiu o primeiro lugar em seu grupo nas Eliminatórias Europeias, superando adversários difíceis com um futebol de muita posse de bola e controle.',
    lastMatches: [
      { opponent: 'França', result: 'D', score: '2-2' },
      { opponent: 'Portugal', result: 'W', score: '1-0' },
      { opponent: 'Itália', result: 'W', score: '2-1' },
      { opponent: 'Croácia', result: 'W', score: '3-0' },
      { opponent: 'Alemanha', result: 'D', score: '1-1' },
    ]
  },
  'GER': {
    history: 'A Alemanha é tetracampeã mundial (1954, 1974, 1990 e 2014). Conhecida por sua eficiência e força tática, a equipe busca se redimir após campanhas decepcionantes nas últimas duas Copas.',
    qualification: 'A Alemanha fez uma campanha segura nas Eliminatórias Europeias, mostrando evolução sob o comando de Julian Nagelsmann e garantindo a vaga direta.',
    lastMatches: [
      { opponent: 'Inglaterra', result: 'D', score: '1-1' },
      { opponent: 'França', result: 'W', score: '2-1' },
      { opponent: 'Espanha', result: 'D', score: '1-1' },
      { opponent: 'Holanda', result: 'W', score: '3-2' },
      { opponent: 'Bélgica', result: 'L', score: '0-1' },
    ]
  },
  'ENG': {
    history: 'A Inglaterra, inventora do futebol, possui um título mundial conquistado em casa em 1966. Nas últimas edições, a equipe tem chegado longe, impulsionada por uma geração talentosa da Premier League.',
    qualification: 'A Inglaterra passou sem sustos pelas Eliminatórias Europeias, terminando invicta e com um dos melhores ataques do continente.',
    lastMatches: [
      { opponent: 'Alemanha', result: 'D', score: '1-1' },
      { opponent: 'França', result: 'L', score: '1-3' },
      { opponent: 'Itália', result: 'W', score: '2-0' },
      { opponent: 'Espanha', result: 'D', score: '0-0' },
      { opponent: 'Portugal', result: 'W', score: '2-1' },
    ]
  },
  'USA': {
    history: 'Os Estados Unidos têm crescido consistentemente no cenário mundial. Sua melhor campanha foi o 3º lugar na primeira edição em 1930. Como um dos países-sede em 2026, a expectativa é enorme.',
    qualification: 'Como país-sede, os Estados Unidos já estavam automaticamente classificados para a Copa do Mundo de 2026, aproveitando o ciclo para disputar amistosos e a Liga das Nações da CONCACAF.',
    lastMatches: [
      { opponent: 'México', result: 'W', score: '2-0' },
      { opponent: 'Canadá', result: 'D', score: '1-1' },
      { opponent: 'Alemanha', result: 'L', score: '1-3' },
      { opponent: 'Gana', result: 'W', score: '4-0' },
      { opponent: 'Colômbia', result: 'L', score: '1-2' },
    ]
  },
  'MEX': {
    history: `HISTORIA EM COPAS: 
Confederação: Concacaf
Melhores Copas do Mundo: 1970 e 1986 (quartas de final)
Última Copa do Mundo: Catar 2022 (fase de grupos)
Primeira Copa do Mundo: Uruguai 1930
Participações: 18 (1930, 1950, 1954, 1958, 1962, 1966, 1970, 1978, 1986, 1994, 1998, 2002, 2006, 2010, 2014, 2018, 2022, 2026)
Sequência atual de classificações: 9 (de 1994 a 2026)
Sede da Copa do Mundo: 1970 (quartas de final), 1986 (quartas), 2026
Histórico na Copa do Mundo: 60 J, 17 V, 15 E, 28 D, 62 GP, 101 GC`,
    qualification: `🏆 Copa do Mundo de 2026 (anfitriã)

O México será co-anfitrião da Copa do Mundo FIFA 2026, junto com:
Estados Unidos
Canadá

🔥 Destaque histórico:
O México será o primeiro país a sediar três Copas do Mundo (1970, 1986 e 2026).

🎯 Expectativa:
Jogando em casa, a pressão é grande para:
Quebrar a “maldição das oitavas”
Chegar finalmente a uma semifinal histórica`,
    lastMatches: [
      { opponent: 'Bélgica', result: 'D', score: '1-1' },
      { opponent: 'Portugal', result: 'D', score: '0-0' },
      { opponent: 'Islândia', result: 'W', score: '4-0' },
      { opponent: 'Bolívia', result: 'W', score: '1-0' },
      { opponent: 'Panamá', result: 'W', score: '1-0' },
    ]
  },
  'CAN': {
    history: `O Canadá vai disputar a Copa do Mundo da FIFA 26™ como coanfitrião, ao lado dos Estados Unidos e do México. Essa será sua terceira participação no maior torneio do futebol.
O Canadá foi colocado no Grupo B para o torneio de 2026
No Catar 2022, a seleção canadense caiu na fase de grupos
Os canadenses jogaram dois torneios antes: o México 1986 e o Catar 2022. Sob o comando do técnico Jesse Marsch e com apoio da torcida, a seleção está ansiosa para finalmente passar da fase de grupos, e talvez sonhar com algo ainda maior.

Jogos do Canadá no Grupo B
• Rodada 1 12 de junho
Canadá x Bósnia e Herzegovina Toronto, no Canadá – 15h00 no horário local (16h00 em Brasília)
• Rodada 2 18 de junho
Canadá x Catar Vancouver, no Canadá – 15h00 no horário local (16h00 em Brasília)
• Rodada 3 24 de junho
Suíça x Canadá Vancouver, no Canadá – 12h00 no horário local (16h00 em Brasília)

Histórico do Canadá na Copa do Mundo
Confederação: Concacaf
Melhores Copas do Mundo: 1986 e 2022 (fase de grupos)
Última Copa do Mundo: Catar 2022 (fase de grupos)
Primeira Copa do Mundo: México 1986
Participações: 3 (1986, 2022 e 2026)
Sequência atual de classificações: 2 (2022 e 2026)
Sede da Copa do Mundo: 2026
Histórico na Copa do Mundo: 6 J, 0 V, 0 E, 6 D, 2 GP, 12 GC`,
    qualification: `Como o Canadá se classificou para 2026
O Canadá garantiu sua vaga como coanfitrião do torneio, ao lado dos Estados Unidos e do México. A edição de 2026 será a maior até hoje, com um formato ampliado para 48 seleções.`,
    lastMatches: [
      { opponent: 'Tunísia', result: 'D', score: '0-0' },
      { opponent: 'Islândia', result: 'D', score: '2-2' },
      { opponent: 'Guatemala', result: 'W', score: '1-0' },
      { opponent: 'Venezuela', result: 'W', score: '2-0' },
      { opponent: 'Equador', result: 'D', score: '0-0' },
    ]
  },
  'KOR': {
    history: `República da Coreia se classificou para sua 11ª Copa do Mundo da FIFA seguida
No Qatar 2022, sul-coreanos passaram da fase de grupos pela primeira vez em 12 anos

Histórico da Coreia do Sul na Copa do Mundo
Confederação: AFC
Melhor Copa do Mundo: 2002 (quarto lugar)
Última Copa do Mundo: Qatar 2022 (Oitavas de final)
Primeira Copa do Mundo: Suíça 1954
Participações: 12 (1954, 1986, 1990, 1994, 1998, 2002, 2006, 2010, 2014, 2018, 2022, 2026)
Sequência atual de classificação: 11
Sede da Copa do Mundo: 2002
Histórico na Copa do Mundo: 38 J, 7 V, 10 E, 21 D, 39 GP, 78 GC`,
    qualification: `Como a Coreia do Sul se classificou para 2026
Apesar de duas trocas de treinador após o Qatar 2022, a Coreia do Sul garantiu vaga para 2026 com tranquilidade, terminando a campanha nas eliminatórias asiáticas de forma invicta. Na segunda fase, em grupo com China, Tailândia e Singapura, acumulou cinco vitórias e apenas um empate — com os tailandeses, em 1 a 1.
Já na fase final, enfrentou Jordânia, Iraque, Omã, Palestina e Kuwait pelo Grupo B, terminando na liderança após seis vitórias e quatro empates e assegurando um lugar no primeiro Mundial com 48 seleções. De quebra, foi o único representante asiático a se classificar para 2026 sem derrotas.`,
    lastMatches: [
      { opponent: 'Áustria', result: 'L', score: '0-1' },
      { opponent: 'Costa do Marfim', result: 'L', score: '0-4' },
      { opponent: 'Gana', result: 'W', score: '1-0' },
      { opponent: 'Bolívia', result: 'W', score: '2-0' },
      { opponent: 'Paraguai', result: 'W', score: '2-0' },
    ]
  },
  'CZE': {
    history: `A República Tcheca se classificou para a Copa do Mundo da FIFA 2026™ após dramática vitória nos pênaltis sobre a Dinamarca, garantindo seu primeiro retorno ao torneio mundial desde a Alemanha 2006.
A recompensa para a República Tcheca é uma vaga no Grupo A do torneio, no qual vai enfrentar a Coreia do Sul em Guadalajara, a África do Sul em Atlanta e o México, um dos países-sede, na Cidade do México.

República Tcheca na Copa do Mundo
Primeira participação: Itália 1934
Participações: 10 (1934, 1938, 1954, 1958, 1962, 1970, 1982, 1990, 2006, 2026)
Melhor campanha: vice-campeã (1934 e 1962)
A República Tcheca competiu em Copas do Mundo como Tchhecoslováquia de 1930 a 1994 e como República Tcheca de 1998 a 2014.`,
    qualification: `A equipe de Miroslav Koubek se classificou na repescagem europeia depois de inicialmente superar a República da Irlanda nos pênaltis em sua semifinal. No jogo decisivo, demonstrou mais uma vez que consegue manter a calma na marca dos 11 metros com um triunfo por 3 a 1 contra os dinamarqueses, após um empate em 2 a 2 em 120 minutos de tirar o fôlego em Praga.`,
    lastMatches: [
      { opponent: 'Dinamarca', result: 'W', score: '2(3)-(1)2' },
      { opponent: 'Irlanda', result: 'W', score: '2(4)-(3)2' },
      { opponent: 'Gibraltar', result: 'W', score: '6-0' },
      { opponent: 'San Marino', result: 'W', score: '1-0' },
      { opponent: 'Ilhas Faroe', result: 'L', score: '1-2' },
    ]
  },
  'QAT': {
    history: `O Catar foi a sede a Copa do Mundo da FIFA 2022™, combinando organização meticulosa com hospitalidade excepcional para oferecer um torneio extraordinário que destacou a região do Golfo no cenário mundial. Fazendo sua estreia no maior evento global, os anfitriões ganharam experiência inestimável ao enfrentar equipes diante de sua própria torcida.
O Catar agora se prepara para disputar sua segunda Copa do Mundo da FIFA™
O país chega embalado pela primeira grande campanha nas eliminatórias asiáticas

Jogos do Catar no Grupo B
• Rodada 1
13 de junho
Catar x Suíça 
LOCAL: Santa Clara (região da Baía de San Francisco), nos EUA – 12h00 no horário local (16h00 em Brasília)
• Rodada 2 
18 de junho
Canadá x Catar 
LOCAL: Vancouver, no Canadá – 15h00 no horário local (19h00 em Brasília)
• Rodada 3 
24 de junho
Bósnia e Herzegovina x Catar 
LOCAL: Seattle, nos Estados Unidos – 12h00 no horário local (16h00 em Brasília)

Histórico do Catar na Copa do Mundo
Confederação: AFC
Melhor Copa do Mundo: 2022 (fase de grupos)
Última Copa do Mundo: Catar 2022
Primeira Copa do Mundo: Catar 2022
Participações: 2 (2022, 2026)
Sequência atual de classificações: 2
País-sede: 2022
Histórico na Copa do Mundo: 3 J, 0 V, 0 E, 3 D, 1 GP, 7 GC`,
    qualification: `Como o Catar se classificou para 2026
O Catar garantiu vaga direta para a Copa do Mundo da FIFA 26™ com uma vitória por 2 a 1 sobre os Emirados Árabes Unidos, em Doha, no dia 14 de outubro, em duelo válido pela quarta fase das eliminatórias asiáticas.
Desde o início das eliminatórias, a seleção apresentou atuações consistentes e convincentes, liderando seu grupo na segunda fase com 16 pontos (cinco vitórias, um empate e uma derrota). Na terceira fase, manteve o bom desempenho, mas terminou em quarto lugar, atrás de Irã e Uzbequistão - que ficaram com as vagas diretas -, sendo obrigada a seguir para a quarta fase.`,
    lastMatches: [
      { opponent: 'Tunísia', result: 'L', score: '0-3' },
      { opponent: 'Síria', result: 'D', score: '1-1' },
      { opponent: 'Palestina', result: 'L', score: '0-1' },
      { opponent: 'Zimbábue', result: 'L', score: '1-2' },
      { opponent: 'Emirados Árabes Unidos', result: 'W', score: '2-1' },
    ]
  }
};

const genericOpponents = ['Sérvia', 'Nigéria', 'Japão', 'Coreia do Sul', 'Austrália', 'Gana', 'Camarões', 'Costa Rica', 'Peru', 'Chile', 'Suécia', 'Polônia'];

export function getTeamDetails(teamId: string, teamName: string): TeamDetails {
  if (specificData[teamId]) {
    const data = specificData[teamId];
    return {
      history: data.history || `A seleção de ${teamName} tem uma história de muita luta e paixão no futebol mundial. A equipe busca surpreender e fazer uma campanha histórica nesta edição do torneio.`,
      qualification: data.qualification || `A equipe de ${teamName} garantiu sua vaga após uma campanha consistente em suas eliminatórias continentais, mostrando força coletiva e superando adversários difíceis.`,
      lastMatches: data.lastMatches || generateRandomMatches()
    };
  }

  return {
    history: `A seleção de ${teamName} tem uma trajetória de muita dedicação no cenário internacional. Com jogadores atuando em ligas competitivas, a equipe chega à Copa do Mundo de 2026 com o objetivo de avançar de fase e fazer história para o seu país.`,
    qualification: `${teamName} assegurou sua classificação nas eliminatórias de sua confederação após uma série de jogos disputados. A equipe demonstrou resiliência, garantindo pontos cruciais nas rodadas finais para carimbar o passaporte para a América do Norte.`,
    lastMatches: generateRandomMatches()
  };
}

function generateRandomMatches(): MatchResult[] {
  const matches: MatchResult[] = [];
  const results: ('W' | 'D' | 'L')[] = ['W', 'D', 'L'];
  
  for (let i = 0; i < 5; i++) {
    const opp = genericOpponents[Math.floor(Math.random() * genericOpponents.length)];
    const res = results[Math.floor(Math.random() * results.length)];
    
    let score = '';
    if (res === 'W') score = `${Math.floor(Math.random() * 3) + 1}-${Math.floor(Math.random() * 2)}`;
    else if (res === 'L') score = `${Math.floor(Math.random() * 2)}-${Math.floor(Math.random() * 3) + 1}`;
    else score = `${Math.floor(Math.random() * 3)}-${Math.floor(Math.random() * 3)}`;
    
    matches.push({ opponent: opp, result: res, score });
  }
  return matches;
}
