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
    history: `🇲🇽 História do México nas Copas do Mundo

O México é uma das seleções mais tradicionais do futebol mundial e uma das que mais participou da Copa do Mundo FIFA. Sua estreia foi na primeira edição, em 1930, no Uruguai.

🔥 Anos como anfitrião
O México já sediou a Copa duas vezes:
1970 – considerada uma das melhores da história, vencida pelo Brasil de Pelé
1986 – marcada pela atuação lendária de Diego Maradona
Em ambas, o México chegou até as quartas de final, seu melhor desempenho até hoje.

📊 Desempenho geral
Participações: mais de 15 edições
Melhor resultado: quartas de final (1970 e 1986)
Marca registrada: cair nas oitavas de final repetidamente (o famoso “quarto jogo”)
Entre 1994 e 2018, o México foi eliminado 7 vezes seguidas nas oitavas, criando uma espécie de “maldição”.

🇲🇽 Copa do Mundo de 2022 (última participação)
Na Copa do Mundo FIFA 2022, o México teve uma campanha decepcionante:
Eliminado ainda na fase de grupos
Ficou atrás de Argentina e Polônia
Vitória apenas contra a Arábia Saudita
Isso marcou o fim da sequência de classificações às oitavas.

🌟 Conclusão
O México é uma seleção gigante em tradição e torcida, mas ainda busca dar o salto definitivo nas Copas. A Copa do Mundo FIFA 2026 representa uma oportunidade histórica para mudar sua trajetória e escrever o capítulo mais importante de sua história no futebol.`,
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
      { opponent: 'Arábia Saudita', result: 'W', score: '2-0' },
      { opponent: 'Argentina', result: 'L', score: '0-2' },
      { opponent: 'Polônia', result: 'D', score: '0-0' },
      { opponent: 'Alemanha', result: 'D', score: '2-2' },
      { opponent: 'Colômbia', result: 'L', score: '0-1' },
    ]
  },
  'CAN': {
    history: 'O Canadá fará sua terceira participação em Copas do Mundo (1986, 2022 e 2026). O futebol no país tem crescido exponencialmente, liderado por uma nova geração de jogadores atuando na Europa.',
    qualification: 'Como país-sede, o Canadá obteve a vaga automática para 2026, utilizando o período para ganhar experiência contra seleções de outros continentes.',
    lastMatches: [
      { opponent: 'EUA', result: 'D', score: '1-1' },
      { opponent: 'Jamaica', result: 'W', score: '2-1' },
      { opponent: 'Japão', result: 'L', score: '1-4' },
      { opponent: 'Croácia', result: 'L', score: '0-2' },
      { opponent: 'Panamá', result: 'W', score: '1-0' },
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
