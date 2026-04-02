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
    history: `## 🇿🇦 África do Sul na Copa do Mundo 2026

A África do Sul está de volta ao maior palco do futebol mundial! 🌍⚽
Depois de ficar fora das últimas edições, os **Bafana Bafana** encerraram o jejum e garantiram presença na Copa do Mundo FIFA 2026! 🔥🙌

---

## 🌟 História em Copas

* 🏁 Primeira participação: 1998
* 🔢 Participações: 4 (1998, 2002, 2010, 2026)
* 🏆 Melhor resultado: Fase de grupos
* 🏟️ País-sede: 2010

📌 Destaque:
A última participação foi justamente em 2010, quando sediou a Copa e encantou o mundo com sua energia e torcida! 🎺🌍

---

## 📅 Jogos da África do Sul – Grupo A

### 🥇 Rodada 1

📍 Cidade do México (México)
🗓️ 11 de junho
⏰ 16h (Brasília)
⚔️ México 🇲🇽 x 🇿🇦 África do Sul

### 🥈 Rodada 2

📍 Atlanta (EUA)
🗓️ 18 de junho
⏰ 13h (Brasília)
⚔️ 🇨🇿 República Tcheca x 🇿🇦 África do Sul

### 🥉 Rodada 3

📍 Monterrey (México)
🗓️ 24 de junho
⏰ 22h (Brasília)
⚔️ 🇿🇦 África do Sul x Coreia do Sul 🇰🇷

---

## 📊 Histórico em Copas

* 🌍 Confederação: CAF
* 🏆 Melhor campanha: Fase de grupos
* ⏱️ Última Copa: 2010
* 🔢 Participações: 4
* 🔄 Sequência atual: 1

📈 Números gerais:

* ⚽ Jogos: 9
* ✅ Vitórias: 2
* 🤝 Empates: 4
* ❌ Derrotas: 3
* 🥅 Gols marcados: 11
* 🚫 Gols sofridos: 16

---

## 🌟 Fique de olho!

A África do Sul chega com espírito de superação e muita energia ⚡🔥
Após anos fora do Mundial, quer mostrar que voltou para competir de verdade!

👉 Será que os Bafana Bafana vão conquistar sua **primeira classificação ao mata-mata**? 🏆🇿🇦🔥`,
    qualification: `## 🚀 Caminho até a Copa 2026

A classificação foi emocionante até o último minuto! 😮🔥🔥

* 🥇 Liderou o Grupo C das eliminatórias africanas
* 📊 Campanha: **5 vitórias, 3 empates, 2 derrotas**
* ⚔️ Disputa intensa com a Nigéria
* 👀 Surpresa do grupo: Benin

### 💥 Momento decisivo:

* 🇿🇦 Vitória por **3x0 sobre Ruanda**
* 🇳🇬 Goleada da Nigéria por **4x0 sobre Benin**
  👉 Resultado: África do Sul assume a liderança e garante a vaga! 🏆🔥`,
    lastMatches: [
      { opponent: 'Panamá', result: 'L', score: '1-2' },
      { opponent: 'Panamá', result: 'D', score: '1-1' },
      { opponent: 'Camarões', result: 'L', score: '1-2' },
      { opponent: 'Zimbábue', result: 'W', score: '3-2' },
      { opponent: 'Egito', result: 'L', score: '0-1' },
    ]
  },
  'BRA': {
    history: `## 🇧🇷 Brasil na Copa do Mundo 2026

A Brasil é simplesmente a maior potência da história do futebol mundial! 🌍⚽
Única seleção presente em **todas as edições** da Copa do Mundo FIFA, o Brasil chega para 2026 com o peso da tradição e o sonho do hexa! ⭐⭐⭐⭐⭐🔥

---

## 🏆 História gloriosa

* 🥇 **5 títulos mundiais** (1958, 1962, 1970, 1994, 2002)
* 🌍 Única seleção em **todas as Copas**
* 🏟️ Sede em **1950 e 2014**
* 🔥 Todos os títulos conquistados **fora de casa e invictos**

👉 O Brasil é sinônimo de futebol arte! 🎨⚽

---

## 📅 Jogos do Brasil – Grupo C

### 🥇 Rodada 1

📍 Nova York/Nova Jersey (EUA)
🗓️ 13 de junho
⏰ 19h (Brasília)
⚔️ 🇧🇷 Brasil x 🇲🇦 Marrocos

### 🥈 Rodada 2

📍 Filadélfia (EUA)
🗓️ 19 de junho
⏰ 21h30 (Brasília)
⚔️ 🇧🇷 Brasil x 🇭🇹 Haiti

### 🥉 Rodada 3

📍 Miami (EUA)
🗓️ 24 de junho
⏰ 19h (Brasília)
⚔️ 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escócia x 🇧🇷 Brasil

---

## 📊 Desempenho geral

* ⚽ Jogos: 109
* ✅ Vitórias: 73
* 🤝 Empates: 18
* ❌ Derrotas: 18
* 🥅 Gols marcados: 237
* 🚫 Gols sofridos: 108

📈 Uma campanha simplesmente lendária! 🐐

---

## 🌟 Grandes ídolos

* 👑 Pelé
* ⚡ Ronaldo (maior artilheiro do Brasil em Copas)
* 🎩 Zico
* 🧠 Rivaldo
* 🔥 Neymar

---

## 🚀 Brasil rumo a 2026

Após campanhas recentes chegando até as quartas (2018 e 2022), o Brasil chega com um único objetivo:
👉 **Conquistar o HEXA!** 🏆🔥

Com uma nova geração talentosa e tradição incomparável, a Seleção Brasileira entra sempre como favorita! 💛💚

---

## 🌟 Fique de olho!

O Brasil é mais do que uma seleção… é uma paixão mundial ❤️🌍

👉 Será que 2026 será o ano do tão esperado **6º título**? 🏆🇧🇷🔥`,
    qualification: `## 🚀 Caminho até a Copa 2026

A Seleção Brasileira garantiu sua vaga na Copa do Mundo da FIFA 2026™ ao terminar na quinta colocação das Eliminatórias da CONMEBOL.

O formato da competição sul-americana foi disputado em pontos corridos, com jogos de ida e volta entre todas as seleções participantes. Ao final da campanha, a CONMEBOL distribuiu seis vagas diretas para o Mundial, além de uma vaga para a repescagem.

---

### 📊 Resumo da Campanha:
O Brasil garantiu sua vaga nas Eliminatórias Sul-Americanas, terminando entre os primeiros colocados após uma campanha sólida, apesar de alguns tropeços no início do ciclo sob novo comando técnico.`,
    lastMatches: [
      { opponent: 'Croácia', result: 'W', score: '3-1' },
      { opponent: 'França', result: 'L', score: '1-2' },
      { opponent: 'Tunísia', result: 'D', score: '1-1' },
      { opponent: 'Senegal', result: 'W', score: '2-0' },
      { opponent: 'Japão', result: 'L', score: '2-3' },
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
    history: `## 🇲🇽 México na Copa do Mundo 2026

O México se prepara para um momento histórico! 🌍⚽
Como um dos **países-sede** da Copa do Mundo FIFA 2026, a seleção mexicana fará história ao ser o primeiro país a receber o torneio pela **terceira vez** (1970, 1986 e 2026)! 🏟️🔥

---

## 🌟 História em Copas

* 🏁 Primeira participação: 1930
* 🔢 Participações: 18
* 🏆 Melhor resultado: **Quartas de final (1970 e 1986)**
* 🏟️ País-sede: 1970, 1986 e 2026

📌 Destaque:
O México é uma das seleções mais tradicionais do mundo, com uma torcida apaixonada que promete transformar os estádios em verdadeiros caldeirões! 🇲🇽🔥

---

## 📅 Jogos do México – Grupo B

### 🥇 Rodada 1

📍 Cidade do México (México)
🗓️ 11 de junho
⏰ 16h (Brasília)
⚔️ 🇲🇽 México x 🇿🇦 África do Sul

### 🥈 Rodada 2

📍 Guadalajara (México)
🗓️ 18 de junho
⏰ 22h (Brasília)
⚔️ 🇲🇽 México x 🇰🇷 Coreia do Sul

### 🥉 Rodada 3

📍 Cidade do México (México)
🗓️ 24 de junho
⏰ 20h (Brasília)
⚔️ 🇨🇿 República Tcheca x 🇲🇽 México

---

## 📊 Histórico em Copas

* 🌍 Confederação: Concacaf
* 🏆 Melhor campanha: Quartas de final
* ⏱️ Última Copa: 2022
* 🔢 Participações: 18
* 🔄 Sequência atual: 9 Copas seguidas

📈 Números gerais:

* ⚽ Jogos: 60
* ✅ Vitórias: 17
* 🤝 Empates: 15
* ❌ Derrotas: 28
* 🥅 Gols marcados: 62
* 🚫 Gols sofridos: 101

---

## 🌟 Fique de olho!

O México combina experiência internacional com o fator casa ⚡🔥
Com o apoio massivo de sua torcida, a seleção mexicana entra no torneio com a ambição de fazer sua melhor campanha da história!

👉 Será que 2026 será o ano do México brilhar no cenário mundial? 🏆🇲🇽🔥`,
    qualification: `## 🚀 Caminho até a Copa 2026

Como um dos anfitriões, o México garantiu sua vaga **automaticamente**! 🏟️✨

* 🤝 Classificado direto como país-sede
* 🌍 Co-anfitrião com EUA e Canadá
* 🔥 Oportunidade única de jogar diante de sua torcida fanática

### 🎯 Expectativa:
A meta é clara: superar a "maldição das oitavas" e buscar uma semifinal inédita em casa! 💪🇲🇽`,
    lastMatches: [
      { opponent: 'Bélgica', result: 'D', score: '1-1' },
      { opponent: 'Portugal', result: 'D', score: '0-0' },
      { opponent: 'Islândia', result: 'W', score: '4-0' },
      { opponent: 'Bolívia', result: 'W', score: '1-0' },
      { opponent: 'Panamá', result: 'W', score: '1-0' },
    ]
  },
  'CAN': {
    history: `## 🇨🇦 Canadá na Copa do Mundo 2026

O Canadá chega para fazer história na Copa do Mundo FIFA 2026! 🌍⚽
Como **coanfitrião**, ao lado de Estados Unidos e México, a seleção disputará sua **3ª Copa do Mundo** — e promete ir além! 🚀🔥

---

## 🌟 Destaques e expectativa

* 🏟️ País-sede da Copa 2026
* 🔢 3ª participação em Copas (1986, 2022, 2026)
* 🎯 Busca **classificação inédita ao mata-mata**
* 👨‍🏫 Treinador: Jesse Marsch

Após cair na fase de grupos na Copa do Mundo FIFA 2022, o Canadá quer aproveitar o fator casa para surpreender! 💪🇨🇦

---

## 📅 Jogos do Canadá – Grupo B

### 🥇 Rodada 1

📍 Toronto (Canadá)
🗓️ 12 de junho
⏰ 16h (Brasília)
⚔️ 🇨🇦 Canadá x 🇧🇦 Bósnia e Herzegovina

### 🥈 Rodada 2

📍 Vancouver (Canadá)
🗓️ 18 de junho
⏰ 16h (Brasília)
⚔️ 🇨🇦 Canadá x 🇶🇦 Catar

### 🥉 Rodada 3

📍 Vancouver (Canadá)
🗓️ 24 de junho
⏰ 16h (Brasília)
⚔️ 🇨🇭 Suíça x 🇨🇦 Canadá

---

## 📊 Histórico em Copas

* 🌍 Confederação: Concacaf
* 🏆 Melhor resultado: Fase de grupos (1986 e 2022)
* ⏱️ Última Copa: 2022
* 🏁 Primeira Copa: 1986
* 🔢 Participações: 3
* 🔄 Sequência atual: 2 Copas seguidas
* 🏟️ País-sede: 2026

📈 Números gerais:

* ⚽ Jogos: 6
* ❌ Vitórias: 0
* 🤝 Empates: 0
* 🔻 Derrotas: 6
* 🥅 Gols marcados: 2
* 🚫 Gols sofridos: 12

👉 Curiosidade: o Canadá ainda busca sua **primeira vitória em Copas do Mundo** 👀🔥`,
    qualification: `## 🚀 Caminho até a Copa 2026

Diferente de outras seleções, o Canadá garantiu vaga automaticamente por ser **país-sede** 🏟️✨

* 🤝 Classificado direto (sem eliminatórias)
* 🌍 Torneio com **48 seleções** — o maior da história
* 🔥 Grande oportunidade de crescimento no futebol mundial`,
    lastMatches: [
      { opponent: 'Tunísia', result: 'D', score: '0-0' },
      { opponent: 'Islândia', result: 'D', score: '2-2' },
      { opponent: 'Guatemala', result: 'W', score: '1-0' },
      { opponent: 'Venezuela', result: 'W', score: '2-0' },
      { opponent: 'Equador', result: 'D', score: '0-0' },
    ]
  },
  'KOR': {
    history: `## 🇰🇷 Coreia do Sul na Copa do Mundo 2026

A Coreia do Sul chega com moral para a Copa do Mundo FIFA 2026! 🌍⚽
A seleção asiática garantiu sua **11ª participação consecutiva**, mostrando uma impressionante consistência no cenário mundial! 🔥📈

---

## 🌟 Destaques recentes

* 🔁 **11 Copas seguidas disputadas**
* 🚀 Classificação às oitavas na Copa do Mundo FIFA 2022
* 💪 Retorno ao mata-mata após 12 anos

A Coreia do Sul segue sendo uma das maiores potências do futebol asiático! 🏆⚡

---

## 📅 Jogos da Coreia do Sul – Grupo A

### 🥇 Rodada 1

📍 Guadalajara (México)
🗓️ 11 de junho
⏰ 23h (Brasília)
⚔️ 🇰🇷 Coreia do Sul x 🇨🇿 República Tcheca

### 🥈 Rodada 2

📍 Guadalajara (México)
🗓️ 18 de junho
⏰ 22h (Brasília)
⚔️ México 🇲🇽 x 🇰🇷 Coreia do Sul

### 🥉 Rodada 3

📍 Monterrey (México)
🗓️ 24 de junho
⏰ 22h (Brasília)
⚔️ África do Sul 🇿🇦 x 🇰🇷 Coreia do Sul

---

## 📊 Histórico em Copas

* 🌍 Confederação: AFC
* 🏆 Melhor campanha: **4º lugar (2002)**
* 🏁 Primeira Copa: 1954
* ⏱️ Última Copa: 2022 (oitavas de final)
* 🔢 Participações: 12
* 🔄 Sequência atual: 11 Copas seguidas
* 🏟️ País-sede: 2002

📈 Números gerais:

* ⚽ Jogos: 38
* ✅ Vitórias: 7
* 🤝 Empates: 10
* ❌ Derrotas: 21
* 🥅 Gols marcados: 39
* 🚫 Gols sofridos: 78

---

## 🌟 Fique de olho!

A Coreia do Sul combina **velocidade, disciplina e talento** ⚡🧠
Com tradição recente e confiança em alta, chega forte para buscar mais uma campanha histórica!

👉 Será que os sul-coreanos podem repetir — ou superar — o feito de 2002? 🏆🇰🇷🔥`,
    qualification: `## 🚀 Caminho até a Copa 2026

A campanha da Coreia do Sul foi simplesmente **impecável**! 😮🔥

### 🔹 Segunda fase:

* 🥇 Grupo com China, Tailândia e Singapura
* 📊 **5 vitórias e 1 empate**

### 🔹 Fase final:

* ⚔️ Enfrentou Jordânia, Iraque, Omã, Palestina e Kuwait
* 🏆 Terminou em **1º lugar do grupo**
* 📈 **6 vitórias e 4 empates**

💥 Destaque:
👉 Única seleção asiática a se classificar **invicta** para 2026! 🧱🔥`,
    lastMatches: [
      { opponent: 'Áustria', result: 'L', score: '0-1' },
      { opponent: 'Costa do Marfim', result: 'L', score: '0-4' },
      { opponent: 'Gana', result: 'W', score: '1-0' },
      { opponent: 'Bolívia', result: 'W', score: '2-0' },
      { opponent: 'Paraguai', result: 'W', score: '2-0' },
    ]
  },
  'CZE': {
    history: `## 🇨🇿 República Tcheca na Copa do Mundo 2026

A República Tcheca está de volta ao maior palco do futebol mundial! 🌍⚽
Após uma classificação emocionante, a equipe retorna à Copa do Mundo FIFA 2026 depois de **20 anos** longe do torneio! 😱🔥

---

## 🌟 História em Copas

* 🏁 Primeira participação: 1934
* 🔢 Participações: 10
* 🥈 Melhor campanha: **Vice-campeã (1934 e 1962)**

📌 Curiosidade:
A seleção já disputou Copas como **Tchecoslováquia**, entre 1930 e 1994, sendo uma das mais tradicionais da Europa! 🇪🇺⚽

---

## 🏆 Destaque atual

A classificação para 2026 veio com muita emoção! 💥

* ⚔️ Vitória nos pênaltis contra a Dinamarca
* 🧠 Sangue frio e precisão nas cobranças
* 🔥 Retorno histórico desde a Copa de 2006

Uma seleção que mistura tradição com espírito competitivo! 💪🇨🇿

---

## 📅 Jogos da República Tcheca – Grupo A

### 🥇 Rodada 1

📍 Guadalajara (México)
🗓️ 11 de junho
⏰ 23h (Brasília)
⚔️ Coreia do Sul 🇰🇷 x 🇨🇿 República Tcheca

### 🥈 Rodada 2

📍 Atlanta (EUA)
🗓️ 18 de junho
⏰ 13h (Brasília)
⚔️ 🇨🇿 República Tcheca x África do Sul 🇿🇦

### 🥉 Rodada 3

📍 Cidade do México (México)
🗓️ 24 de junho
⏰ 20h (Brasília)
⚔️ 🇨🇿 República Tcheca x México 🇲🇽

---

## 🌟 Fique de olho!

A República Tcheca chega como uma seleção **tradicional e perigosa** 👀⚠️
Com histórico forte e confiança renovada, pode surpreender no grupo!

👉 Será que vem aí mais uma campanha histórica rumo a uma final? 🏆🇨🇿🔥`,
    qualification: `## 🚀 Caminho até a Copa 2026

A jornada até a Copa foi marcada por **emoção e nervos de aço** 😮🔥

* ⚔️ Eliminou a Irlanda nos pênaltis
* 🔥 Empate épico por 2x2 com a Dinamarca
* 🎯 Vitória por **3x1 nos pênaltis** no jogo decisivo
* 🧠 Destaque para o controle emocional nos momentos críticos

👉 Uma classificação digna de seleção grande! 🏆`,
    lastMatches: [
      { opponent: 'Dinamarca', result: 'W', score: '2(3)-(1)2' },
      { opponent: 'Irlanda', result: 'W', score: '2(4)-(3)2' },
      { opponent: 'Gibraltar', result: 'W', score: '6-0' },
      { opponent: 'San Marino', result: 'W', score: '1-0' },
      { opponent: 'Ilhas Faroe', result: 'L', score: '1-2' },
    ]
  },
  'QAT': {
    history: `## 🇶🇦 Catar na Copa do Mundo 2026

O Catar segue escrevendo sua história no futebol mundial! 🌍⚽
Após sediar a incrível Copa do Mundo FIFA 2022, o país retorna agora para sua **segunda participação**, buscando evolução e protagonismo. 🚀🔥

### 🌟 Destaque recente

Em 2022, o Catar fez sua **estreia em Copas do Mundo**, proporcionando:

* 🏟️ Organização impecável
* 🤝 Hospitalidade de alto nível
* 🌍 Grande visibilidade para o Oriente Médio

Agora, a missão é diferente: **competir e surpreender dentro de campo!** 💪⚽

---

## 📅 Jogos do Catar – Grupo B

### 🥇 Rodada 1

📍 Santa Clara (EUA)
🗓️ 13 de junho
⏰ 16h (Brasília)
⚔️ 🇶🇦 Catar x 🇨🇭 Suíça

### 🥈 Rodada 2

📍 Vancouver (Canadá)
🗓️ 18 de junho
⏰ 19h (Brasília)
⚔️ 🇨🇦 Canadá x 🇶🇦 Catar

### 🥉 Rodada 3

📍 Seattle (EUA)
🗓️ 24 de junho
⏰ 16h (Brasília)
⚔️ 🇧🇦 Bósnia e Herzegovina x 🇶🇦 Catar

---

## 📊 Histórico em Copas

* 🌍 Confederação: AFC
* 🏆 Melhor resultado: Fase de grupos (2022)
* 🏁 Primeira Copa: 2022
* ⏱️ Última Copa: 2022
* 🔢 Participações: 2 (2022, 2026)
* 🔄 Sequência atual: 2 Copas seguidas
* 🏟️ País-sede: 2022

📈 Números gerais:

* ⚽ Jogos: 3
* ❌ Vitórias: 0
* 🤝 Empates: 0
* 🔻 Derrotas: 3
* 🥅 Gols marcados: 1
* 🚫 Gols sofridos: 7

---

## 🌟 Fique de olho!

O Catar chega como uma seleção em **construção**, mas com grande ambição 👀🔥
Com experiência recente em alto nível e evolução constante, pode surpreender no grupo!

👉 Será que o Catar vai conquistar sua **primeira vitória em Copas do Mundo** em 2026? 🏆⚽`,
    qualification: `## 🚀 Caminho até a Copa 2026

A classificação do Catar foi marcada por **persistência e superação**! 🔥👏

* 🥇 Liderou seu grupo na 2ª fase com **16 pontos**
* 📊 Campanha: **5 vitórias, 1 empate, 1 derrota**
* ⚔️ Enfrentou dificuldades na 3ª fase
* 🎯 Garantiu vaga na 4ª fase com vitória decisiva

🏆 Jogo chave:
👉 Vitória por **2x1 sobre os Emirados Árabes Unidos** selou a classificação! 🇦🇪❌

Mesmo sem classificação direta, o Catar mostrou **força mental e evolução competitiva** 💥`,
    lastMatches: [
      { opponent: 'Tunísia', result: 'L', score: '0-3' },
      { opponent: 'Síria', result: 'D', score: '1-1' },
      { opponent: 'Palestina', result: 'L', score: '0-1' },
      { opponent: 'Zimbábue', result: 'L', score: '1-2' },
      { opponent: 'Emirados Árabes Unidos', result: 'W', score: '2-1' },
    ]
  },
  'SUI': {
    history: `## Suíça na Copa do Mundo 2026

A Suíça chega com força total para a Copa do Mundo FIFA 2026! 🌍⚽
Será a **13ª participação** da equipe no torneio — e a **6ª consecutiva**, mostrando consistência e evolução ao longo dos anos. 📈

### 🏆 Destaques históricos

* 🔝 Chegou às **quartas de final** em 1934, 1938 e 1954
* 💪 Desde 1994, avançou às **oitavas em 5 de 6 Copas**
* 🔥 Nas últimas Euros, alcançou **quartas de final consecutivas**

A Suíça é conhecida por ser uma seleção **difícil de bater**, sempre competitiva e organizada taticamente! 🧠⚔️

---

## 📅 Jogos da Suíça – Grupo B

### 🥇 Rodada 1

📍 Santa Clara (EUA)
🗓️ 13 de junho
⏰ 16h (Brasília)
⚔️ Catar 🇶🇦 x 🇨🇭 Suíça

### 🥈 Rodada 2

📍 Los Angeles (EUA)
🗓️ 18 de junho
⏰ 16h (Brasília)
⚔️ 🇨🇭 Suíça x Bósnia e Herzegovina 🇧🇦

### 🥉 Rodada 3

📍 Vancouver (Canadá)
🗓️ 24 de junho
⏰ 16h (Brasília)
⚔️ 🇨🇭 Suíça x Canadá 🇨🇦

---

## 📊 Histórico em Copas

* 🌍 Confederação: UEFA
* 🥇 Melhor resultado: Quartas de final (1934, 1938, 1954)
* ⏱️ Última Copa: 2022 (oitavas de final)
* 🏁 Primeira Copa: 1934
* 🔢 Participações: 13

📈 Números gerais:

* ⚽ Jogos: 41
* ✅ Vitórias: 14
* 🤝 Empates: 8
* ❌ Derrotas: 19
* 🥅 Gols marcados: 55
* 🚫 Gols sofridos: 73

---

## 🌟 Fique de olho!

A Suíça chega como uma seleção **subestimada, mas extremamente perigosa** 👀⚠️
Com disciplina tática e jogadores decisivos, pode ser uma das surpresas da Copa!`,
    qualification: `## 🚀 Caminho até a Copa 2026

A campanha nas eliminatórias europeias foi simplesmente **impecável**! 😮🔥

* ✅ Vitória por **4x0** sobre Kosovo
* ✅ **3x0** contra a Eslovênia
* ✅ **2x0** diante da Suécia
* 🔁 Empates estratégicos fora de casa
* 💥 Nova goleada: **4x1 sobre a Suécia**

📊 Resultado final:

* 🟢 **Invicta**
* ⚽ **14 gols marcados**
* 🛡️ **Apenas 2 gols sofridos**

Uma seleção equilibrada, sólida e pronta para surpreender! 💪🇨🇭`,
    lastMatches: [
      { opponent: 'Noruega', result: 'D', score: '0-0' },
      { opponent: 'Alemanha', result: 'L', score: '3-4' },
      { opponent: 'Kosovo', result: 'D', score: '1-1' },
      { opponent: 'Suécia', result: 'W', score: '4-1' },
      { opponent: 'Eslovênia', result: 'D', score: '0-0' },
    ]
  },
  'BIH': {
    history: `## 🇧🇦 Bósnia e Herzegovina na Copa do Mundo 2026

A Bósnia e Herzegovina segue construindo sua história no futebol mundial! 🌍⚽
Ainda jovem como nação independente, a seleção busca crescer e surpreender na Copa do Mundo FIFA 2026! 🚀🔥

---

## 🌟 História em Copas

* 🏁 Primeira participação: **2014 (Brasil)**
* 🔢 Participações: 2 (2014 e 2026)
* 🏆 Melhor resultado: Fase de grupos

📌 Curiosidade:
Antes da independência em 1992, jogadores bósnios atuavam pela antiga Iugoslávia, que teve forte presença em Copas! 🇪🇺⚽

---

## 🏆 Destaque histórico

Na Copa do Mundo FIFA 2014, a Bósnia fez sua estreia:

* ⚔️ Derrota para a Argentina (1x2)
* ❌ Derrota para a Nigéria (0x1)
* ✅ Vitória histórica sobre o Irã (3x1)

👉 Mesmo eliminada, deixou boa impressão em sua primeira Copa! 👀🔥

---

## 📅 Jogos da Bósnia – Copa 2026 (Grupo B)

🥇 Rodada 1

📍 Toronto (Canadá)
🗓️ 12 de junho
⏰ 16h (Brasília)
⚔️ 🇨🇦 Canadá x 🇧🇦 Bósnia e Herzegovina

🥈 Rodada 2

📍 Los Angeles (EUA)
🗓️ 18 de junho
⏰ 16h (Brasília)
⚔️ 🇨🇭 Suíça x Bósnia e Herzegovina 🇧🇦

Rodada 3

📍 Seattle (EUA)
🗓️ 24 de junho
⏰ 16h (Brasília)
⚔️ 🇧🇦 Bósnia e Herzegovina x 🇶🇦 Catar

⚔️ Grupo equilibrado, com chances reais de classificação! 💪

---

## 📊 Histórico em Copas

* 🌍 Confederação: UEFA
* 🏆 Melhor campanha: Fase de grupos
* ⏱️ Última Copa: 2014
* 🔢 Participações: 2

📈 Números gerais:

* ⚽ Jogos: 3
* ✅ Vitórias: 1
* ❌ Derrotas: 2
* 🤝 Empates: 0
* 🥅 Gols marcados: 4
* 🚫 Gols sofridos: 4

---

## 🌟 Ídolos e destaques

Alguns dos principais nomes da história recente:

* ⭐ Edin Džeko
* 🎯 Miralem Pjanić
* ⚡ Vedad Ibišević

👉 Todos marcaram gols históricos na Copa de 2014! ⚽🔥

---

## 🌟 Fique de olho!

A Bósnia e Herzegovina é uma seleção **técnica e perigosa** 👀⚠️
Mesmo com pouca experiência em Copas, pode surpreender e buscar sua **primeira classificação ao mata-mata**!

👉 Será que 2026 marcará um novo capítulo histórico? 🏆🔥`,
    qualification: `## 🚀 Caminho e evolução

Desde a independência, a Bósnia tem mostrado crescimento constante:

* ⚔️ Disputou eliminatórias competitivas
* 🔥 Chegou a playoffs em 2010
* 🥇 Classificou-se em 1º lugar do grupo europeu em 2014

Agora, retorna ao Mundial com mais experiência e ambição! 💪🇧🇦`,
    lastMatches: [
      { opponent: 'Itália', result: 'W', score: '1(4)-1(1)' },
      { opponent: 'País de Gales', result: 'W', score: '1(4)-1(2)' },
      { opponent: 'Áustria', result: 'D', score: '1-1' },
      { opponent: 'Romênia', result: 'W', score: '3-1' },
      { opponent: 'Malta', result: 'W', score: '4-1' },
    ]
  },
  'MAR': {
    history: `## 🇲🇦 Marrocos na Copa do Mundo da FIFA: perfil e histórico da seleção

---

### 🌍 Destaques gerais

* Em 2026, o Marrocos disputará sua **7ª Copa do Mundo da FIFA™**
* Será a **3ª participação consecutiva**, algo inédito para o país
* Melhor campanha: **4º lugar no Qatar 2022**
* Primeira seleção africana a alcançar uma **semifinal de Copa do Mundo**

O Marrocos chega à Copa de 2026 com o objetivo de provar que a campanha histórica de 2022 não foi acaso. A equipe segue como uma das maiores forças do futebol africano e mundial.

---

### 📅 Jogos do Marrocos – Grupo C

**Rodada 1**
📍 13 de junho
Brasil x Marrocos
Nova York/Nova Jersey (EUA)

**Rodada 2**
📍 19 de junho
Escócia x Marrocos
Boston (EUA)

**Rodada 3**
📍 24 de junho
Marrocos x Haiti
Atlanta (EUA)

---

### 🧠 Técnico do Marrocos

O atual treinador é Mohamed Ouahbi, que assumiu a equipe pouco antes do Mundial de 2026.

* Nascido na Bélgica
* Ganhou destaque ao conquistar a **Copa do Mundo Sub-20 de 2025** com o Marrocos
* Substituiu Walid Regragui, responsável pela campanha histórica de 2022

---

### 🛣️ Como o Marrocos se classificou para 2026

O Marrocos garantiu vaga de forma dominante nas eliminatórias africanas:

* Classificou-se em **5 de setembro de 2025**
* Vitória marcante: **5 a 0 sobre o Níger**
* Terminou como líder do Grupo E da CAF com ampla vantagem

---

### 📊 Histórico do Marrocos em Copas

* **Participações:** 7 (1970, 1986, 1994, 1998, 2018, 2022, 2026)
* **Melhor campanha:** Semifinal (2022)
* **Jogos:** 23
* **Vitórias:** 5
* **Empates:** 7
* **Derrotas:** 11
* **Gols marcados:** 20
* **Gols sofridos:** 27

---

### 🏁 Primeira participação – México 1970

A estreia aconteceu na Copa de 1970, no México:

* Derrota para a Alemanha Ocidental (2x1)
* Derrota para o Peru (3x0)
* Empate com a Bulgária (1x1)

Mesmo sem avançar, o Marrocos deixou boa impressão como representante africano.

---

### ⭐ Última Copa – Qatar 2022 (Histórica)

O auge da seleção marroquina aconteceu no Copa do Mundo FIFA Qatar 2022:

* Empate com a Croácia (0x0)
* Vitória sobre a Bélgica (2x0)
* Vitória sobre o Canadá (2x1)

**Fase eliminatória:**

* Eliminou a Espanha (pênaltis)
* Eliminou Portugal (1x0)
* Caiu na semifinal para a França (2x0)

➡️ Resultado final: **4º lugar (melhor campanha da história africana)**

---

### ⚽ Artilheiro do Marrocos em Copas

O maior goleador é Youssef En-Nesyri:

* **3 gols em Copas do Mundo**
* Destaque para o gol histórico contra Portugal em 2022

---

### 🏃 Recordistas de jogos

Achraf Hakimi e Hakim Ziyech são os jogadores com mais partidas:

* **10 jogos cada**
* Participações em 2018 e 2022

---

### 💥 Momentos inesquecíveis

* **1986:** primeiro país africano a passar da fase de grupos
* **2022:** primeira seleção africana a chegar à semifinal
* **1998:** vitória por 3x0 sobre a Escócia (maior vitória em Copas)

---

### 🚀 Expectativas para 2026

Com uma geração talentosa e embalada pelo sucesso recente, o Marrocos entra na Copa de 2026 como uma seleção perigosa e respeitada.

Os Leões do Atlas querem mais do que repetir 2022: o sonho agora é chegar à final e continuar fazendo história no futebol mundial.`,
    qualification: `O Marrocos garantiu vaga de forma dominante nas eliminatórias africanas:

* Classificou-se em **5 de setembro de 2025**
* Vitória marcante: **5 a 0 sobre o Níger**
* Terminou como líder do Grupo E da CAF com ampla vantagem`,
    lastMatches: [
      { opponent: 'Paraguai', result: 'W', score: '2-1' },
      { opponent: 'Equador', result: 'D', score: '1-1' },
      { opponent: 'Senegal', result: 'W', score: '3-0' },
      { opponent: 'Nigéria', result: 'W', score: '0(4)-0(2)' },
      { opponent: 'Camarões', result: 'W', score: '2-0' },
    ]
  },
  'HAI': {
    history: `## 🇭🇹 Haiti na Copa do Mundo da FIFA: perfil e histórico da seleção

---

### 🌍 Destaques gerais

* O Haiti voltará a disputar uma Copa após **52 anos**
* Última participação: **1974**
* Copa de 2026 será a **2ª da história**
* Classificação conquistada em um grupo difícil da Concacaf

O retorno à Copa do Mundo marca um momento histórico para o futebol haitiano, que busca escrever um novo capítulo no cenário internacional.

---

### 📅 Jogos do Haiti – Grupo C

**Rodada 1**
📍 13 de junho
Haiti x Escócia
Boston (EUA)

**Rodada 2**
📍 19 de junho
Brasil x Haiti
Filadélfia (EUA)

**Rodada 3**
📍 24 de junho
Marrocos x Haiti
Atlanta (EUA)

---

### 🧠 Técnico do Haiti

O comandante da seleção é Sébastien Migné:

* Assumiu o Haiti em 2024
* Liderou toda a campanha de classificação
* Já treinou seleções como Quênia e Guiné Equatorial
* Foi auxiliar de Rigobert Song em Camarões

---

### 📊 Histórico do Haiti em Copas

* **Participações:** 2 (1974 e 2026)
* **Melhor campanha:** fase de grupos (1974)
* **Jogos:** 3
* **Vitórias:** 0
* **Empates:** 0
* **Derrotas:** 3
* **Gols marcados:** 2
* **Gols sofridos:** 14

---

### 🏁 Primeira participação – Alemanha 1974

A única participação do Haiti aconteceu na Copa do Mundo FIFA 1974:

* Derrota para a Itália (3x1)
* Derrota para a Polônia (7x0)
* Derrota para a Argentina (4x1)

Mesmo com resultados difíceis, a equipe fez história ao representar o país no maior palco do futebol mundial.

---

### ⚽ Artilheiro do Haiti em Copas

O maior destaque histórico é Emmanuel Sanon:

* **2 gols em Copas do Mundo**
* Autor de todos os gols do Haiti no torneio

Momento marcante:

* Gol contra a Itália, quebrando uma longa sequência sem sofrer gols do goleiro Dino Zoff

---

### 🏃 Recordistas de jogos

Sete jogadores dividem o recorde de partidas (3 jogos cada):

* Eddy Antoine
* Pierre Bayonne
* Jean-Claude Désir
* Henry Francillon
* Emmanuel Sanon
* Philippe Vorbe
* Wilner Nazaire

Todos participaram da campanha de 1974.

---

### 💥 Momentos marcantes

* **1973:** título da Concacaf que garantiu vaga na Copa
* **1974:** estreia histórica em Mundiais
* **2026:** retorno após mais de meio século

---

### 🚀 Expectativas para 2026

O Haiti chega como uma das seleções menos tradicionais do torneio, mas com muita motivação. A equipe aposta na organização tática e no espírito coletivo para tentar surpreender no Grupo C.

Após 52 anos de espera, os Granadeiros querem mostrar evolução e buscar seus **primeiros pontos — e quem sabe a primeira vitória — em Copas do Mundo**.`,
    qualification: `A campanha haitiana foi sólida e surpreendente:

**Segunda fase:**

* 2º lugar no grupo
* 3 vitórias e 1 derrota

**Terceira fase (decisiva):**

* Grupo com Costa Rica, Honduras e Nicarágua
* Apenas 1 derrota
* Empates e vitórias importantes contra adversários diretos

A classificação veio após:

* Vitória por 2x0 sobre a Nicarágua
* Empate entre Costa Rica e Honduras

➡️ Resultado: **1º lugar do grupo e vaga garantida na Copa**`,
    lastMatches: [
      { opponent: 'Islândia', result: 'D', score: '1-1' },
      { opponent: 'Tunísia', result: 'L', score: '0-1' },
      { opponent: 'Nicarágua', result: 'W', score: '2-0' },
      { opponent: 'Costa Rica', result: 'W', score: '1-0' },
      { opponent: 'Honduras', result: 'L', score: '0-3' },
    ]
  },
  'SCO': {
    history: `## 🏴 Escócia na Copa do Mundo da FIFA: perfil e histórico da seleção

A **Escócia** está de volta à Copa do Mundo da FIFA™ após **28 anos de ausência**, encerrando um longo período fora do maior palco do futebol mundial. A classificação veio de forma dramática e emocionante, reacendendo a esperança dos torcedores escoceses.

---

### 🌍 Destaques gerais

* Retorno à Copa após ausência desde **1998**
* **9ª participação** em Copas do Mundo
* Nunca passou da fase de grupos
* Classificação heroica com vitória por 4x2 sobre a Dinamarca

Depois de décadas como presença constante (principalmente entre os anos 70 e 90), a Escócia busca agora recuperar seu espaço no cenário mundial.

---

### 📅 Jogos da Escócia – Grupo C

**Rodada 1**
📍 13 de junho
Haiti x Escócia
⏰ 22h (Brasília)
Boston (EUA)

**Rodada 2**
📍 19 de junho
Escócia x Marrocos
⏰ 19h (Brasília)
Boston (EUA)

**Rodada 3**
📍 24 de junho
Escócia x Brasil
⏰ 19h (Brasília)
Miami (EUA)

---

### 🧠 Técnico da Escócia

O treinador é Steve Clarke:

* No comando desde 2019
* Responsável por levar a seleção a **3 grandes torneios**
* Considerado um dos maiores técnicos da história do país
* Estilo pragmático e foco na consistência

Clarke pode encerrar seu ciclo após a Copa de 2026, deixando um legado importante para o futebol escocês.

---

### 📊 Histórico da Escócia em Copas

* **Participações:** 9 (1954–1998, 2026)
* **Melhor resultado:** fase de grupos
* **Jogos:** 23
* **Vitórias:** 4
* **Empates:** 7
* **Derrotas:** 12
* **Gols marcados:** 25
* **Gols sofridos:** 41

---

### ⭐ Melhor campanha – 1974

Na Copa do Mundo FIFA 1974:

* Terminou **invicta**
* Empates com Brasil e Iugoslávia
* Vitória sobre o Zaire

⚠️ Mesmo invicta, foi eliminada por saldo de gols — um dos episódios mais marcantes (e frustrantes) da história da seleção.

---

### 🕰️ Última Copa – França 1998

Na Copa do Mundo FIFA 1998:

* Derrota para o Brasil (2x1)
* Empate com a Noruega (1x1)
* Derrota para o Marrocos (3x0)

➡️ Eliminada na fase de grupos mais uma vez.

---

### 🏁 Primeira Copa – Suíça 1954

A estreia foi difícil:

* Derrota para a Áustria (1x0)
* Goleada sofrida para o Uruguai (7x0)

➡️ Até hoje, a maior derrota da história da seleção.

---

### ⚽ Artilheiro da Escócia em Copas

O maior goleador é Joe Jordan:

* **4 gols em Copas do Mundo**
* Marcou em três edições (1974, 1978 e 1982)

Um feito raro, comparável a grandes nomes do futebol mundial.

---

### 🧤 Recordista de jogos

O jogador com mais partidas é Jim Leighton:

* **9 jogos em Copas do Mundo**
* Participações entre 1982 e 1990

---

### 💥 Momentos inesquecíveis

* Gol histórico de Archie Gemmill contra a Holanda em 1978
* Gol de David Narey contra o Brasil em 1982
* Campanha invicta de 1974 (mesmo com eliminação)

➡️ A história da Escócia é marcada por grandes momentos… quase sempre com finais amargos.

---

### 🚀 Expectativas para 2026

A Escócia chega motivada após uma classificação dramática e com um elenco competitivo. O grande objetivo é finalmente quebrar o tabu e **avançar pela primeira vez para o mata-mata**.

Depois de quase três décadas fora da Copa, os escoceses querem mais do que participar — querem fazer história.`,
    qualification: `### 🛣️ Como a Escócia se classificou para 2026

A campanha foi marcada por altos e baixos, mas terminou de forma épica:

* Empate fora com a Dinamarca
* Vitórias pouco convincentes contra Grécia e Belarus
* Derrota para a Grécia fora de casa

➡️ Tudo parecia perdido… até o improvável acontecer:

* Empate surpreendente de Belarus contra a Dinamarca
* Vitória decisiva por **4x2 sobre a Dinamarca**

Gols de:

* Scott McTominay
* Lawrence Shankland
* Kieran Tierney
* Kenny McLean

👉 Dois gols saíram nos acréscimos, garantindo uma classificação histórica.`,
    lastMatches: [
      { opponent: 'Costa do Marfim', result: 'L', score: '0-1' },
      { opponent: 'Japão', result: 'L', score: '0-1' },
      { opponent: 'Dinamarca', result: 'W', score: '4-2' },
      { opponent: 'Grécia', result: 'L', score: '2-3' },
      { opponent: 'Belarus', result: 'W', score: '2-1' },
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
