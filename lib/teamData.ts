export interface MatchResult {
  opponent: string;
  result: 'W' | 'D' | 'L';
  score: string;
}

export interface Player {
  name: string;
  position: string;
  club: string;
  highlight: string;
}

export interface Coach {
  name: string;
  nationality: string;
  age: number;
  tenure: string;
  description: string;
}

export interface WorldCupHistory {
  participations: number;
  totalMatches: number;
  wins: number;
  losses: number;
  draws: number;
  titles: number;
  bestCampaign: string;
}

export interface Match {
  opponent: string;
  date: string;
  time: string;
  stadium: string;
  country: string;
}

export interface TeamDetails {
  history: string;
  qualification: string;
  lastMatches: MatchResult[];
  coach: Coach;
  players: Player[];
  historyStats: WorldCupHistory;
  groupMatches: Match[];
  tacticalAnalysis: string;
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
    ],
    coach: {
      name: 'Hugo Broos',
      nationality: 'Belga',
      age: 73,
      tenure: '5 anos',
      description: 'Experiente treinador belga, com passagens por diversas seleções e clubes, focado em organização e disciplina tática.'
    },
    players: [
      { name: 'Ronwen Williams', position: 'Goleiro', club: 'Mamelodi Sundowns', highlight: 'Destaque da Copa Africana 2024' },
      { name: 'Teboho Mokoena', position: 'Meio-campista', club: 'Mamelodi Sundowns', highlight: 'Destaque do time' },
      { name: 'Lyle Foster', position: 'Atacante', club: 'Burnley', highlight: 'Destaque do time' }
    ],
    historyStats: {
      participations: 4,
      totalMatches: 9,
      wins: 2,
      losses: 3,
      draws: 4,
      titles: 0,
      bestCampaign: 'Fase de grupos'
    },
    groupMatches: [
      { opponent: 'México', date: '11 de junho', time: '16h00', stadium: 'Cidade do México', country: 'México' },
      { opponent: 'República Tcheca', date: '18 de junho', time: '13h00', stadium: 'Atlanta', country: 'EUA' },
      { opponent: 'República da Coreia', date: '24 de junho', time: '22h00', stadium: 'Monterrey', country: 'México' }
    ],
    tacticalAnalysis: 'A África do Sul sob Hugo Broos tem demonstrado um estilo de jogo disciplinado, priorizando a solidez defensiva e contra-ataques rápidos.'
  },
  'CPV': {
    history: `## Cabo Verde na Copa do Mundo da FIFA: perfil e histórico da seleção

A classificação de Cabo Verde para a Copa do Mundo da FIFA 2026™ é um feito histórico. Um país pequeno em território e população, mas gigante em paixão pelo futebol, chega pela primeira vez ao maior torneio do planeta.

🌍 Destaques gerais
Estreia em Copas do Mundo (2026)
Projeto consolidado ao longo de décadas
Forte ligação entre o país e sua diáspora
Seleção conhecida como Tubarões Azuis

A campanha representa mais do que futebol: é um símbolo de identidade nacional.

📅 Jogos de Cabo Verde – Grupo H

Rodada 1
📍 15 de junho
Espanha x Cabo Verde
Atlanta (EUA) – 14h00 (Brasília)

Rodada 2
📍 21 de junho
Uruguai x Cabo Verde
Miami (EUA) – 21h00 (Brasília)

Rodada 3
📍 26 de junho
Cabo Verde x Arábia Saudita
Houston (EUA) – 21h00 (Brasília)

🧠 Técnico de Cabo Verde

O comandante é Bubista:

Ex-capitão da seleção
Símbolo de liderança e superação
Construiu uma equipe equilibrada e competitiva
🛣️ Como Cabo Verde se classificou
Campanha impecável em casa: 5 vitórias em 5 jogos
Nenhum gol sofrido como mandante
Liderou grupo difícil, superando seleções como Camarões e Angola
Classificação confirmada com vitória por 3x0 sobre Essuatíni

➡️ Primeira Copa garantida com autoridade

📊 Histórico em Copas
Participações: 1 (2026)
Melhor campanha: estreia
Confederação: CAF
📈 Últimos jogos
⚖️ Cabo Verde 1 (4) x (2) 1 Finlândia
❌ Chile 4x2 Cabo Verde
🤝 Egito 1x1 Cabo Verde
⚖️ Cabo Verde 0 (4) x (5) 0 Irã
✅ Cabo Verde 3x0 Essuatíni
🚀 Expectativas

Cabo Verde chega como grande surpresa do torneio. Com organização tática e espírito coletivo forte, pode ser uma das zebras da Copa.`,
    qualification: `Campanha impecável em casa: 5 vitórias em 5 jogos. Nenhum gol sofrido como mandante. Liderou grupo difícil, superando seleções como Camarões e Angola. Classificação confirmada com vitória por 3x0 sobre Essuatíni.`,
    lastMatches: [
      { opponent: 'Finlândia', result: 'D', score: '1-1' },
      { opponent: 'Chile', result: 'L', score: '2-4' },
      { opponent: 'Egito', result: 'D', score: '1-1' },
      { opponent: 'Irã', result: 'D', score: '0-0' },
      { opponent: 'Essuatíni', result: 'W', score: '3-0' },
    ]
  },
  'KSA': {
    history: `## Arábia Saudita na Copa do Mundo da FIFA: perfil e histórico da seleção

A Arábia Saudita disputará sua 7ª Copa do Mundo, consolidando-se como uma das seleções mais constantes da Ásia no torneio.

🌍 Destaques gerais
7ª participação em Copas
Melhor campanha: oitavas de final (1994)
Presença frequente desde os anos 90

📅 Jogos da Arábia Saudita – Grupo H

Rodada 1
📍 15 de junho
Arábia Saudita x Uruguai
Miami (EUA) – 19h00 (Brasília)

Rodada 2
📍 21 de junho
Espanha x Arábia Saudita
Atlanta (EUA) – 13h00 (Brasília)

Rodada 3
📍 26 de junho
Cabo Verde x Arábia Saudita
Houston (EUA) – 21h00 (Brasília)

🧠 Técnico da Arábia Saudita

O treinador é Hervé Renard:

Experiência internacional na África e Ásia
Conhecido por organizar equipes competitivas
Especialista em torneios curtos
🛣️ Como a Arábia Saudita se classificou

Campanha longa e desafiadora:
Avançou como vice na fase inicial
Caiu em grupo difícil com Japão e Austrália
Foi para a fase final de repescagem asiática

Na fase decisiva:
Vitória sobre Indonésia (3x2)
Empate com Iraque (0x0)
Classificação garantida no saldo de gols

📊 Histórico em Copas
Participações: 7
Melhor campanha: oitavas (1994)
Jogos: 19
Vitórias: 4
Empates: 2
Derrotas: 13
📈 Últimos jogos
❌ Sérvia 2x1 Arábia Saudita
❌ Arábia Saudita 0x4 Egito
❌ Arábia Saudita 0x1 Jordânia
✅ Palestina 1x2 Arábia Saudita
❌ Marrocos 1x0 Arábia Saudita
🚀 Expectativas

A meta é clara: voltar ao mata-mata, algo que não acontece desde 1994.`,
    qualification: `Campanha longa e desafiadora: avançou como vice na fase inicial, caiu em grupo difícil com Japão e Austrália, foi para a fase final de repescagem asiática. Na fase decisiva: vitória sobre Indonésia (3x2), empate com Iraque (0x0), classificação garantida no saldo de gols.`,
    lastMatches: [
      { opponent: 'Sérvia', result: 'L', score: '1-2' },
      { opponent: 'Egito', result: 'L', score: '0-4' },
      { opponent: 'Jordânia', result: 'L', score: '0-1' },
      { opponent: 'Palestina', result: 'W', score: '2-1' },
      { opponent: 'Marrocos', result: 'L', score: '0-1' },
    ]
  },
  'URU': {
    history: `## Uruguai na Copa do Mundo da FIFA: perfil e histórico da seleção

O Uruguai chega para disputar sua 15ª Copa do Mundo, carregando o peso de uma das camisas mais tradicionais do futebol mundial.

🌍 Destaques gerais
Bicampeão mundial (1930 e 1950)
15 participações
5ª Copa consecutiva

A “Celeste” segue sendo uma das seleções mais respeitadas do planeta.

📅 Jogos do Uruguai – Grupo H

Rodada 1
📍 15 de junho
Arábia Saudita x Uruguai
Miami (EUA) – 19h00 (Brasília)

Rodada 2
📍 21 de junho
Uruguai x Cabo Verde
Miami (EUA) – 19h00 (Brasília)

Rodada 3
📍 26 de junho
Uruguai x Espanha
Guadalajara (México) – 21h00 (Brasília)

🧠 Técnico do Uruguai

O treinador é Marcelo Bielsa:

Um dos técnicos mais influentes do futebol moderno
Estilo ofensivo e intenso
Conhecido por desenvolver jovens talentos
🛣️ Como o Uruguai se classificou

Terminou em 4º nas eliminatórias sul-americanas
28 pontos conquistados
Vitórias marcantes contra Brasil e Argentina
➡️ Garantiu vaga direta na Copa

📊 Histórico em Copas
Participações: 15
Títulos: 2 (1930 e 1950)
Jogos: 59
Vitórias: 25
Empates: 13
Derrotas: 21
Gols marcados: 89
⭐ Momentos históricos
🏆 Campeão da Copa do Mundo FIFA 1930
🏆 Campeão da Copa do Mundo FIFA 1950 (Maracanazo)
📈 Últimos jogos
➖ Argélia 0x0 Uruguai
➖ Inglaterra 1x1 Uruguai
❌ EUA 5x1 Uruguai
➖ México 0x0 Uruguai
✅ Uzbequistão 1x2 Uruguai
🚀 Expectativas

Mesmo em renovação, o Uruguai chega forte. Com jovens talentos e um treinador de elite, a seleção sonha em voltar às fases finais e brigar por algo grande.

👉 Uma equipe que mistura tradição, raça e ambição.`,
    qualification: `Terminou em 4º nas eliminatórias sul-americanas, 28 pontos conquistados, vitórias marcantes contra Brasil e Argentina. Garantiu vaga direta na Copa.`,
    lastMatches: [
      { opponent: 'Argélia', result: 'D', score: '0-0' },
      { opponent: 'Inglaterra', result: 'D', score: '1-1' },
      { opponent: 'EUA', result: 'L', score: '1-5' },
      { opponent: 'México', result: 'D', score: '0-0' },
      { opponent: 'Uzbequistão', result: 'W', score: '2-1' },
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
    history: `## 🇦🇷 Argentina na Copa do Mundo da FIFA 2026

A Argentina chega como **atual campeã mundial** e uma das grandes favoritas ao título. Sob o comando de **Lionel Scaloni**, a equipe vive um dos melhores momentos de sua história recente, embalada pela conquista da Copa do Mundo de 2022 e da Copa América 2024. A seleção busca repetir um feito raro: conquistar o bicampeonato consecutivo, algo que não acontece desde o Brasil em 1958 e 1962.

### 🧠 Comissão Técnica
**Técnico:** Lionel Scaloni
* **Background:** Ex-jogador com passagens por clubes como Lazio e West Ham, iniciou sua trajetória na seleção como auxiliar antes de assumir o comando definitivo em 2018.
* **Principais Conquistas:** Campeão da Copa América (2021, 2024), Finalissima (2022) e Copa do Mundo (2022).`,
    qualification: 'Dominou as eliminatórias sul-americanas e garantiu a vaga com antecedência, terminando em 1º lugar com ampla vantagem.',
    lastMatches: [
      { opponent: 'Zâmbia', result: 'W', score: '5-0' },
      { opponent: 'Mauritânia', result: 'W', score: '2-1' },
      { opponent: 'Angola', result: 'W', score: '2-0' },
      { opponent: 'Porto Rico', result: 'W', score: '6-0' },
      { opponent: 'Venezuela', result: 'W', score: '1-0' },
    ]
  },
  'ALG': {
    history: `## 🇩🇿 Argélia na Copa do Mundo da FIFA 2026

A Argélia retorna à Copa após 12 anos e chega com ambição. Conhecida como **“Raposas do Deserto”**, a equipe quer repetir — ou superar — a histórica campanha de 2014.

### 🧠 Comissão Técnica
**Técnico:** Vladimir Petković
* **Background:** Treinador experiente de origem bósnio-suíça, com passagens marcantes pela Lazio e pela seleção da Suíça.
* **Principais Conquistas:** Conduziu a Suíça a campanhas sólidas em Eurocopas e Copas do Mundo, sendo reconhecido por sua organização tática.`,
    qualification: 'Terminou a fase africana com campanha sólida: 8 vitórias, 1 empate, 1 derrota. Destaque para Mohamed Amoura, artilheiro com 10 gols.',
    lastMatches: [
      { opponent: 'Uruguai', result: 'D', score: '0-0' },
      { opponent: 'Guatemala', result: 'W', score: '7-0' },
      { opponent: 'Nigéria', result: 'L', score: '0-2' },
      { opponent: 'RD Congo', result: 'L', score: '0-2' },
      { opponent: 'Guiné Equatorial', result: 'W', score: '3-1' },
    ]
  },
  'AUT': {
    history: `## 🇦🇹 Áustria na Copa do Mundo da FIFA 2026

A Áustria volta ao Mundial após **28 anos de ausência** e quer escrever um novo capítulo em sua história.

### 🧠 Comissão Técnica
**Técnico:** Ralf Rangnick
* **Background:** Conhecido como o "Professor" do futebol moderno, foi o arquiteto do projeto da Red Bull no futebol e passou por clubes como Schalke e Manchester United.
* **Principais Conquistas:** Pioneiro do *Gegenpressing*, influenciou gerações de treinadores alemães e transformou o estilo de jogo da Áustria com intensidade e pressão alta.`,
    qualification: 'Terminou em 1º lugar no grupo europeu. Destaque: goleada histórica de **10x0 sobre San Marino**. Classificação garantida na última rodada.',
    lastMatches: [
      { opponent: 'Coreia do Sul', result: 'W', score: '1-0' },
      { opponent: 'Gana', result: 'W', score: '5-1' },
      { opponent: 'Bósnia', result: 'D', score: '1-1' },
      { opponent: 'Chipre', result: 'W', score: '2-0' },
      { opponent: 'Romênia', result: 'L', score: '0-1' },
    ]
  },
  'JOR': {
    history: `## 🇯🇴 Jordânia na Copa do Mundo da FIFA 2026

A Jordânia fará sua **estreia histórica em Copas do Mundo**, após anos de tentativas frustradas.

### 🧠 Comissão Técnica
**Técnico:** Jamal Sellami
* **Background:** Ex-jogador da seleção marroquina, construiu uma carreira sólida como treinador em clubes de elite do Marrocos.
* **Principais Conquistas:** Vencedor do CHAN (Campeonato das Nações Africanas) com o Marrocos, é elogiado por sua disciplina tática e capacidade de extrair o máximo de seus elencos.`,
    qualification: 'Reagiu após início difícil, sequência de 4 vitórias seguidas, classificação confirmada com ajuda de resultados paralelos.',
    lastMatches: [
      { opponent: 'Nigéria', result: 'D', score: '2-2' },
      { opponent: 'Costa Rica', result: 'D', score: '2-2' },
      { opponent: 'Marrocos', result: 'L', score: '2-3' },
      { opponent: 'Arábia Saudita', result: 'W', score: '1-0' },
      { opponent: 'Iraque', result: 'W', score: '1-0' },
    ]
  },
  'FRA': {
    history: `## 🇫🇷 França na Copa do Mundo da FIFA: perfil e histórico da seleção

A **França** chega à Copa do Mundo da FIFA 2026™ como uma das grandes favoritas. Os Blues disputarão sua **8ª Copa consecutiva** e a **17ª no total**, consolidando-se como uma potência mundial.

---

### 🌍 Destaques gerais

* **Bicampeã mundial** (1998 e 2018)
* Vice-campeã em 2022
* **8 participações consecutivas**
* Busca a 3ª final seguida

A equipe quer apagar a dolorosa derrota na final para a Argentina em 2022 e voltar ao topo.

---

### 📅 Jogos da França – Grupo I

**Rodada 1**
📍 16 de junho
França x Senegal
Nova York/Nova Jersey – 16h00

**Rodada 2**
📍 22 de junho
França x Iraque
Filadélfia – 18h00

**Rodada 3**
📍 26 de junho
Noruega x França
Boston – 16h00

---

### 🧠 Técnico da França

O comandante é Didier Deschamps:

* Campeão do mundo como jogador (1998)
* Campeão como treinador (2018)
* Um dos maiores técnicos da história da seleção

---

### 🛣️ Como se classificou

* Campanha **invicta** nas eliminatórias
* Vitória decisiva por 4x0 sobre a Ucrânia
* Destaque para Kylian Mbappé (5 gols)

➡️ Melhor ataque e defesa do grupo

---

### 📊 Histórico em Copas

* **Participações:** 17
* **Títulos:** 2
* **Jogos:** 73
* **Vitórias:** 39

---

### 🚀 Expectativas

A França chega como candidata ao título e quer fazer história com mais uma final.`,
    qualification: `Campanha invicta nas eliminatórias, vitória decisiva por 4x0 sobre a Ucrânia, destaque para Kylian Mbappé (5 gols). Melhor ataque e defesa do grupo.`,
    lastMatches: [
      { opponent: 'Espanha', result: 'D', score: '2-2' },
      { opponent: 'Inglaterra', result: 'W', score: '3-1' },
      { opponent: 'Alemanha', result: 'L', score: '1-2' },
      { opponent: 'Itália', result: 'W', score: '2-0' },
      { opponent: 'Holanda', result: 'W', score: '4-0' },
    ]
  },
  'IRQ': {
    history: `## 🇮🇶 Iraque na Copa do Mundo da FIFA: perfil e histórico da seleção

O **Iraque** está de volta à Copa do Mundo após **40 anos**, em um dos retornos mais emocionantes do torneio.

---

### 🌍 Destaques gerais

* Retorno após última participação em **1986**
* Seleção tradicional do Oriente Médio
* Classificação histórica e emocionante

---

### 📅 Jogos do Iraque – Grupo I

**Rodada 1**
📍 16 de junho
Iraque x Noruega
Boston – 19h00

**Rodada 2**
📍 22 de junho
França x Iraque
Filadélfia – 18h00

**Rodada 3**
📍 26 de junho
Senegal x Iraque
Toronto – 16h00

---

### 🧠 Técnico do Iraque

O treinador é Graham Arnold:

* Assumiu pouco antes da classificação
* Liderou campanha épica

---

### 🛣️ Como se classificou

* Vitória por **2x1 sobre a Bolívia** na repescagem
* Gols de Aymen Hussein e Ali Al-Hamadi

➡️ Garantiu retorno histórico à Copa

---

### 📊 Histórico em Copas

* **Participações:** 2 (1986 e 2026)
* Melhor resultado: fase de grupos

---

### 📈 Últimos jogos

* ✅ Iraque 2x1 Bolívia
* ❌ Jordânia 1x0 Iraque
* ❌ Argélia 2x0 Iraque
* ✅ Sudão 0x2 Iraque
* ✅ Iraque 2x1 Bahrein

---

### 🚀 Expectativas

O Iraque chega como azarão, mas com espírito de luta forte para surpreender.`,
    qualification: `Vitória por 2x1 sobre a Bolívia na repescagem, gols de Aymen Hussein e Ali Al-Hamadi. Garantiu retorno histórico à Copa.`,
    lastMatches: [
      { opponent: 'Bolívia', result: 'W', score: '2-1' },
      { opponent: 'Jordânia', result: 'L', score: '0-1' },
      { opponent: 'Argélia', result: 'L', score: '0-2' },
      { opponent: 'Sudão', result: 'W', score: '2-0' },
      { opponent: 'Bahrein', result: 'W', score: '2-1' },
    ]
  },
  'SEN': {
    history: `## 🇸🇳 Senegal na Copa do Mundo da FIFA: perfil e histórico da seleção

O **Senegal** disputará sua **3ª Copa consecutiva** e chega como uma das principais forças africanas.

---

### 🌍 Destaques gerais

* Melhor campanha: **quartas de final (2002)**
* Seleção forte e experiente
* Ataque eficiente e defesa sólida

---

### 📅 Jogos do Senegal – Grupo I

**Rodada 1**
📍 16 de junho
França x Senegal

**Rodada 2**
📍 22 de junho
Noruega x Senegal

**Rodada 3**
📍 26 de junho
Senegal x Iraque

---

### 🧠 Técnico do Senegal

O treinador é Pape Thiaw:

* Ex-jogador da campanha de 2002
* Assume com experiência dentro da seleção

---

### 🛣️ Como se classificou

* Campanha **invicta**
* Vitória decisiva por 4x0 sobre a Mauritânia
* Destaque para Sadio Mané

---

### 📊 Histórico em Copas

* **Participações:** 4
* **Jogos:** 12
* **Vitórias:** 5

---

### 📈 Últimos jogos

* ✅ Senegal 3x1 Gâmbia
* ✅ Senegal 2x0 Peru
* ❌ Senegal 0x3 Marrocos
* ✅ Senegal 1x0 Egito
* ❌ Mali 1x0 Senegal

---

### 🚀 Expectativas

Senegal chega forte para brigar por vaga no mata-mata e repetir 2002.`,
    qualification: `Campanha invicta, vitória decisiva por 4x0 sobre a Mauritânia, destaque para Sadio Mané.`,
    lastMatches: [
      { opponent: 'Gâmbia', result: 'W', score: '3-1' },
      { opponent: 'Peru', result: 'W', score: '2-0' },
      { opponent: 'Marrocos', result: 'L', score: '0-3' },
      { opponent: 'Egito', result: 'W', score: '1-0' },
      { opponent: 'Mali', result: 'L', score: '0-1' },
    ]
  },
  'NOR': {
    history: `## 🇳🇴 Noruega na Copa do Mundo da FIFA: perfil e histórico da seleção

A **Noruega** está de volta à Copa após **28 anos**, embalada por uma geração talentosa.

---

### 🌍 Destaques gerais

* Retorno desde 1998
* Campanha perfeita nas eliminatórias
* Geração liderada por estrelas internacionais

---

### 📅 Jogos da Noruega – Grupo I

**Rodada 1**
📍 16 de junho
Iraque x Noruega

**Rodada 2**
📍 22 de junho
Noruega x Senegal

**Rodada 3**
📍 26 de junho
Noruega x França

---

### 🧠 Técnico da Noruega

O treinador é Ståle Solbakken:

* Ex-jogador da seleção
* Liderou campanha perfeita

---

### 🛣️ Como se classificou

* **100% de aproveitamento**
* 8 vitórias em 8 jogos
* Destaque para Erling Haaland (artilheiro)
* Apoio criativo de Martin Ødegaard

---

### 📊 Histórico em Copas

* **Participações:** 4
* Melhor resultado: oitavas de final

---

### 📈 Últimos jogos

* 🤝 Noruega 0x0 Suíça
* ❌ Holanda 2x1 Noruega
* ✅ Itália 1x4 Noruega
* ✅ Noruega 4x1 Estônia
* 🤝 Noruega 1x1 Nova Zelândia

---

### 🚀 Expectativas

Com uma “geração de ouro”, a Noruega chega como uma das seleções mais perigosas do grupo.

👉 Objetivo: avançar e fazer sua melhor campanha da história.`,
    qualification: `100% de aproveitamento, 8 vitórias em 8 jogos, destaque para Erling Haaland (artilheiro) e apoio criativo de Martin Ødegaard.`,
    lastMatches: [
      { opponent: 'Suíça', result: 'D', score: '0-0' },
      { opponent: 'Holanda', result: 'L', score: '1-2' },
      { opponent: 'Itália', result: 'W', score: '4-1' },
      { opponent: 'Estônia', result: 'W', score: '4-1' },
      { opponent: 'Nova Zelândia', result: 'D', score: '1-1' },
    ]
  },
  'ESP': {
    history: `## 🇪🇸✨ ESPANHA: A FURIA CHEGA COM SEDE DE BICAMPEONATO! ✨🇪🇸

🎉 **Atual Campeã Europeia em Campo!**
A Espanha desembarca na América do Norte para a sua 17ª Copa do Mundo com o moral no topo! 📈🏆 Após conquistar a Euro 2024, a seleção espanhola quer provar que a nova geração está pronta para repetir o feito histórico de 2010 e pintar o mundo de vermelho novamente.

Sob o comando de Luis de la Fuente, a "Roja" busca apagar a eliminação precoce de 2022 e reafirmar seu estilo de jogo envolvente e dominante em solo americano, mexicano e canadense! 🌍✈️

🧠📋 **O Comandante: Luis de la Fuente**
Assumindo o desafio em dezembro de 2022, De la Fuente transformou a equipe. Com um perfil agregador e profundo conhecimento das categorias de base, ele conseguiu unir a experiência de veteranos com a explosão de jovens talentos, devolvendo à Espanha o posto de favorita em qualquer competição! 👔🔝

---

### 📅 AGENDA DA ESPANHA – GRUPO H 🗓️
Não perca a estreia da atual campeã da Europa! ⏰

⚔️ **Rodada 1**
* **Jogo:** 🇪🇸 Espanha x Cabo Verde 🇨🇻
* 📍 **Local:** Atlanta (EUA) 🇺🇸
* 🕒 **Data/Hora:** 15 de junho | 13h00 *(horário de Brasília)*

⚔️ **Rodada 2**
* **Jogo:** 🇪🇸 Espanha x Arábia Saudita 🇸🇦
* 📍 **Local:** Guadalajara (México) 🇲🇽
* 🕒 **Data/Hora:** 21 de junho | 21h00 *(horário de Brasília)*

⚔️ **Rodada 3**
* **Jogo:** 🇺🇾 Uruguai x Espanha 🇪🇸
* 📍 **Local:** Guadalajara (México) 🇲🇽
* 🕒 **Data/Hora:** 26 de junho | 22h00 *(horário de Brasília)*

---

### 📜 HISTÓRICO NA COPA DO MUNDO 🏆
Uma das camisas mais tradicionais do futebol:

* 🌍 **Confederação:** UEFA
* 🥇 **Melhor Campanha:** Campeã (2010) 🏆
* 🔙 **Primeira Copa:** Itália 1934
* 🔢 **Participações:** 17 (Uma sequência incrível de 13 seguidas!)
* 📊 **Estatísticas:** 67 Jogos | 31 Vitórias ✅ | 17 Empates 🤝 | 19 Derrotas ❌`,
    qualification: `### 🛣️ O Caminho Impecável até a Vaga

A classificação para 2026 foi um verdadeiro passeio! A Espanha dominou o Grupo E com uma campanha de quase 100% de aproveitamento:

* 💥 **Ataque Demolidor:** Goleadas marcantes como o 6 a 0 sobre a Turquia 🇹🇷 e os massacres sobre Bulgária 🇧🇬 e Geórgia 🇬🇪.
* 🛡️ **Solidez Total:** A equipe garantiu a vaga com muita antecedência, mostrando um equilíbrio perfeito entre posse de bola e eficiência defensiva.`,
    lastMatches: [
      { opponent: 'Egito', result: 'D', score: '0-0' },
      { opponent: 'Sérvia', result: 'W', score: '3-0' },
      { opponent: 'Turquia', result: 'D', score: '2-2' },
      { opponent: 'Geórgia', result: 'W', score: '4-0' },
      { opponent: 'Bulgária', result: 'W', score: '4-0' },
    ]
  },
  'GER': {
    history: `## 🇩🇪✨ **A MÁQUINA ALEMÃ NA COPA DO MUNDO 2026!** ✨🇩🇪

🎉 **Em Busca da Redenção!**
A Alemanha desembarca na Copa do Mundo da FIFA 2026™ de cara nova! Disputando seu primeiro Mundial sob a batuta tática do técnico **Julian Nagelsmann** 🧠👔, a gigante europeia vai para o seu **19º Mundial consecutivo** (o 21º em toda a sua história). 

A missão da **tetracampeã** 🏆🏆🏆🏆 no torneio sediado por Canadá, México e EUA é muito clara: colocar um ponto final na sequência amarga de eliminações na fase de grupos (2018 e 2022) e mostrar ao mundo o poder do seu forte processo de reconstrução iniciado em 2024! 🔄🚀

🧠👔 **O Comandante: Julian Nagelsmann**
Nagelsmann assumiu o leme em setembro de 2023. Mesmo com pouco tempo para preparar a equipe para a Euro 2024 disputada em casa, o trabalho convenceu a Federação Alemã (DFB), que renovou seu contrato antes mesmo do torneio, garantindo o comandante até o fim da Copa de 2026! ✍️📋

---

### 📅 **AGENDA DA ALEMANHA – GRUPO E** 🗓️

*Fique de olho nos horários para não perder a tetracampeã em campo!* ⏰

⚔️ **Rodada 1**
* **Jogo:** 🇩🇪 Alemanha x Curaçau 🇨🇼
* 📍 **Local:** Houston (EUA) 🇺🇸
* 🕒 **Data/Hora:** 14 de junho | 14h00 *(horário de Brasília)*

⚔️ **Rodada 2**
* **Jogo:** 🇩🇪 Alemanha x Costa do Marfim 🇨🇮
* 📍 **Local:** Toronto (Canadá) 🇨🇦
* 🕒 **Data/Hora:** 20 de junho | 17h00 *(horário de Brasília)*

⚔️ **Rodada 3**
* **Jogo:** 🇪🇨 Equador x Alemanha 🇩🇪
* 📍 **Local:** Nova York/Nova Jersey (EUA) 🇺🇸
* 🕒 **Data/Hora:** 25 de junho | 17h00 *(horário de Brasília)*

---

### 📜 **HISTÓRICO DE PESO EM COPAS DO MUNDO** 🏆

Uma verdadeira realeza do futebol mundial:
* 🌍 **Confederação:** UEFA
* 🥇 **Títulos (Tetracampeã):** 1954, 1974, 1990 e 2014
* ⏪ **Última Copa:** Catar 2022 *(Fase de grupos)*
* 🔙 **Primeira Copa:** Itália 1934 *(4º lugar)*
* 🔢 **Participações:** 21
* 📊 **Estatísticas Gerais:** 112 Jogos | 68 Vitórias ✅ | 21 Empates 🤝 | 23 Derrotas ❌ | 232 Gols Pró ⚽ | 130 Gols Contra 🥅`,
    qualification: `🛣️ **O Caminho até a Vaga**
A vaga foi carimbada com estilo em novembro de 2025! A Alemanha dominou e venceu o **Grupo A** das eliminatórias: foram **5 vitórias em 6 partidas**, com um saldo impressionante de 16 gols marcados e apenas 3 sofridos. ⚽🔥

A campanha teve emoção: após uma derrota surpreendente por 2 a 0 na estreia contra a Eslováquia, os alemães se recuperaram de forma espetacular, fechando as eliminatórias com uma goleada avassaladora de 6 a 0 sobre os próprios eslovacos! 🌪️ Tudo isso superando os desfalques de estrelas como Jamal Musiala, Kai Havertz, Antonio Rüdiger e Marc-André ter Stegen, que lidaram com lesões durante a jornada. 🏥💪`,
    lastMatches: [
      { opponent: 'Gana', result: 'W', score: '2-1' },
      { opponent: 'Suíça', result: 'W', score: '4-3' },
      { opponent: 'Eslováquia', result: 'W', score: '6-0' },
      { opponent: 'Luxemburgo', result: 'W', score: '2-0' },
      { opponent: 'Irlanda do Norte', result: 'W', score: '1-0' },
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
    history: `## 🇺🇸 Estados Unidos na Copa do Mundo da FIFA: perfil e histórico da seleção

Os **Estados Unidos** chegam à Copa do Mundo de 2026 como um dos protagonistas, não apenas dentro de campo, mas também como **coanfitriões** do torneio ao lado de Canadá e México.

Após cair nas oitavas de final no Copa do Mundo FIFA Qatar 2022, a seleção americana quer dar um passo além jogando em casa.

---

### 🌍 Destaques gerais

* **12ª participação** em Copas do Mundo
* País-sede em **1994 e 2026**
* Melhor campanha: **semifinal em 1930**
* Eliminado nas oitavas em 2022

A edição de 2026 será histórica, com **48 seleções**, e os EUA querem aproveitar o fator casa para fazer uma campanha marcante. ([LOS40][1])

---

### 📅 Jogos dos EUA – Grupo D

O Grupo D conta com Estados Unidos, Paraguai, Austrália e outra seleção europeia via repescagem. ([Wikipedia][2])

**Rodada 1**
📍 12 de junho
Estados Unidos x Paraguai
Los Angeles – 22h00 (Brasília)

**Rodada 2**
📍 19 de junho
Estados Unidos x Austrália
Seattle – 16h00 (Brasília)

**Rodada 3**
📍 25 de junho
Turquia x Estados Unidos
Los Angeles – 23h00 (Brasília)

---

### 🧠 Técnico dos EUA

O treinador é Mauricio Pochettino:

* Assumiu a seleção em 2024
* Ex-técnico de clubes como PSG, Chelsea e Tottenham
* Primeira experiência comandando uma seleção
* Missão: levar os EUA ao melhor resultado em décadas

Pochettino aposta em uma geração talentosa liderada por jogadores como Christian Pulisic. ([ge][3])

---

### 📊 Histórico dos EUA em Copas

* **Participações:** 12
* **Melhor campanha:** 3º lugar (1930)
* **Jogos:** 37
* **Vitórias:** 9
* **Empates:** 8
* **Derrotas:** 20
* **Gols marcados:** 40
* **Gols sofridos:** 66

---

### ⭐ Melhor campanha – 1930

Na Copa do Mundo FIFA 1930:

* Vitória sobre Paraguai (3x0)
* Vitória sobre Bélgica (3x0)
* Chegada às semifinais

➡️ Acabou eliminado pela Argentina (6x1), mas garantiu seu melhor resultado da história.

---

### 🕰️ Última Copa – Qatar 2022

* Empate com País de Gales (1x1)
* Empate com Inglaterra (0x0)
* Vitória sobre Irã (1x0)

Classificação invicta para o mata-mata, com gol decisivo de Christian Pulisic.

➡️ Eliminado nas oitavas pela Holanda (3x1)

---

### ⚽ Artilheiro dos EUA em Copas

O maior goleador é Landon Donovan:

* **5 gols em Copas do Mundo**
* Destaque nas edições de 2002 e 2010

---

### 🚀 Expectativas para 2026

Jogando em casa e com uma geração promissora, os Estados Unidos chegam com ambição alta. A meta é clara: **superar as oitavas de final e buscar uma campanha histórica**.

Com o apoio da torcida e a liderança de Pochettino, os americanos querem transformar o Mundial de 2026 em um marco definitivo para o futebol no país.`,
    qualification: `Os Estados Unidos não precisaram disputar eliminatórias:

* Classificação automática por serem **país-sede**
* Organização conjunta com Canadá e México
* Retorno ao papel de anfitrião após 1994`,
    lastMatches: [
      { opponent: 'Portugal', result: 'L', score: '0-2' },
      { opponent: 'Bélgica', result: 'L', score: '2-5' },
      { opponent: 'Uruguai', result: 'W', score: '5-1' },
      { opponent: 'Paraguai', result: 'W', score: '2-1' },
      { opponent: 'Austrália', result: 'W', score: '2-1' },
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
    ],
    coach: {
      name: 'Javier Aguirre',
      nationality: 'Mexicano',
      age: 67,
      tenure: '2 anos',
      description: 'Experiente treinador, conhecido por sua garra e conhecimento tático, busca levar o México ao topo em casa.'
    },
    players: [
      { name: 'Julián Quiñones', position: 'Atacante', club: 'Al-Qadsiah', highlight: 'Destaque ofensivo' },
      { name: 'Santiago Giménez', position: 'Atacante', club: 'Feyenoord', highlight: 'Artilheiro' },
      { name: 'Guillermo Ochoa', position: 'Goleiro', club: 'Livre', highlight: 'Líder e experiente' }
    ],
    historyStats: {
      participations: 18,
      totalMatches: 60,
      wins: 17,
      losses: 28,
      draws: 15,
      titles: 0,
      bestCampaign: 'Quartas de final'
    },
    groupMatches: [
      { opponent: 'África do Sul', date: '11 de junho', time: '16h00', stadium: 'Cidade do México', country: 'México' },
      { opponent: 'Coreia do Sul', date: '18 de junho', time: '22h00', stadium: 'Guadalajara', country: 'México' },
      { opponent: 'República Tcheca', date: '24 de junho', time: '20h00', stadium: 'Cidade do México', country: 'México' }
    ],
    tacticalAnalysis: 'O México sob Javier Aguirre tem focado em uma defesa sólida e transições rápidas, aproveitando a velocidade de seus atacantes e a experiência de seu goleiro.'
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
* ✅ Vitórias: 0
* 🤝 Empates: 0
* ❌ Derrotas: 6
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
    ],
    coach: {
      name: 'Jesse Marsch',
      nationality: 'Norte-americano',
      age: 52,
      tenure: '2 anos',
      description: 'Treinador com experiência internacional, focado em implementar um estilo de jogo intenso e agressivo.'
    },
    players: [
      { name: 'Alphonso Davies', position: 'Lateral', club: 'Bayern de Munique', highlight: 'Destaque mundial' },
      { name: 'Jonathan David', position: 'Atacante', club: 'Lille', highlight: 'Artilheiro' }
    ],
    historyStats: {
      participations: 3,
      totalMatches: 6,
      wins: 0,
      losses: 6,
      draws: 0,
      titles: 0,
      bestCampaign: 'Fase de grupos'
    },
    groupMatches: [
      { opponent: 'Bósnia e Herzegovina', date: '12 de junho', time: '16h00', stadium: 'Toronto', country: 'Canadá' },
      { opponent: 'Catar', date: '18 de junho', time: '16h00', stadium: 'Vancouver', country: 'Canadá' },
      { opponent: 'Suíça', date: '24 de junho', time: '16h00', stadium: 'Vancouver', country: 'Canadá' }
    ],
    tacticalAnalysis: 'O Canadá sob Jesse Marsch busca um futebol de alta intensidade, pressão constante e transições rápidas, aproveitando a velocidade de seus alas.'
  },
  'KOR': {
    history: `## 🇰🇷 Coreia do Sul na Copa do Mundo 2026

A Coreia do Sul chega com moral para a Copa do Mundo FIFA 2026! 🌍⚽
A seleção asiática garantiu sua **11ª participação consecutiva**, mostrando uma impressionante consistência no cenário mundial! 🔥📈

---

## 🌟 História em Copas

* 🏁 Primeira participação: 1954
* 🔢 Participações: 12
* 🏆 Melhor resultado: **4º lugar (2002)**

📌 Destaque:
A Coreia do Sul segue sendo uma das maiores potências do futebol asiático, com uma tradição de times aguerridos e disciplinados! 🏆⚡

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
⚔️ 🇲🇽 México x 🇰🇷 Coreia do Sul

### 🥉 Rodada 3
📍 Monterrey (México)
🗓️ 24 de junho
⏰ 22h (Brasília)
⚔️ 🇿🇦 África do Sul x 🇰🇷 Coreia do Sul

---

## 📊 Histórico em Copas

* 🌍 Confederação: AFC
* 🏆 Melhor campanha: 4º lugar (2002)
* ⏱️ Última Copa: 2022
* 🔢 Participações: 12

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

A campanha da Coreia do Sul foi marcada por consistência e força no cenário asiático, garantindo sua vaga com autoridade! 💪🇰🇷`,
    lastMatches: [
      { opponent: 'Áustria', result: 'L', score: '0-1' },
      { opponent: 'Costa do Marfim', result: 'L', score: '0-4' },
      { opponent: 'Gana', result: 'W', score: '1-0' },
      { opponent: 'Bolívia', result: 'W', score: '2-0' },
      { opponent: 'Paraguai', result: 'W', score: '2-0' },
    ],
    coach: {
      name: 'Hong Myung-Bo',
      nationality: 'Sul-Coreano',
      age: 57,
      tenure: '2 anos',
      description: 'Ídolo nacional, busca implementar um futebol organizado e competitivo.'
    },
    players: [
      { name: 'Son Heung-min', position: 'Atacante', club: 'Los Angeles FC', highlight: 'Frequentemente eleito o melhor da Ásia' },
      { name: 'Kim Min-jae', position: 'Zagueiro', club: 'Bayern de Munique', highlight: 'Pilar defensivo' },
      { name: 'Lee Kang-in', position: 'Meia', club: 'PSG', highlight: 'Criatividade' }
    ],
    historyStats: {
      participations: 12,
      totalMatches: 38,
      wins: 7,
      losses: 21,
      draws: 10,
      titles: 0,
      bestCampaign: '4º lugar (2002)'
    },
    groupMatches: [
      { opponent: 'República Tcheca', date: '11 de junho', time: '23h00', stadium: 'Guadalajara', country: 'México' },
      { opponent: 'México', date: '18 de junho', time: '22h00', stadium: 'Guadalajara', country: 'México' },
      { opponent: 'África do Sul', date: '24 de junho', time: '22h00', stadium: 'Monterrey', country: 'México' }
    ],
    tacticalAnalysis: 'A Coreia do Sul aposta em um jogo de transição rápida, alta intensidade física e a genialidade de seus talentos individuais no ataque.'
  },
  'CZE': {
    history: `## 🇨🇿 República Tcheca na Copa do Mundo 2026

A República Tcheca está de volta ao maior palco do futebol mundial! 🌍⚽
Após uma classificação emocionante, a equipe retorna à Copa do Mundo FIFA 2026! 😱🔥

---

## 🌟 História em Copas

* 🏁 Primeira participação: 1934 (como Tchecoslováquia)
* 🔢 Participações: 10 (2 como República Tcheca, 8 como Tchecoslováquia)
* 🥈 Melhor campanha: **Vice-campeã (1934 e 1962)**

📌 Curiosidade:
A seleção já disputou Copas como **Tchecoslováquia**, entre 1930 e 1994, sendo uma das mais tradicionais da Europa! 🇪🇺⚽

---

## 📅 Jogos da República Tcheca – Grupo A

### 🥇 Rodada 1
📍 Guadalajara (México)
🗓️ 11 de junho
⏰ 23h (Brasília)
⚔️ 🇰🇷 Coreia do Sul x 🇨🇿 República Tcheca

### 🥈 Rodada 2
📍 Atlanta (EUA)
🗓️ 18 de junho
⏰ 13h (Brasília)
⚔️ 🇨🇿 República Tcheca x 🇿🇦 África do Sul

### 🥉 Rodada 3
📍 Cidade do México (México)
🗓️ 24 de junho
⏰ 22h (Brasília)
⚔️ 🇨🇿 República Tcheca x 🇲🇽 México

---

## 📊 Histórico em Copas

* 🌍 Confederação: UEFA
* 🏆 Melhor campanha: Vice-campeã (1934, 1962)
* ⏱️ Última Copa: 2006
* 🔢 Participações: 10

📈 Números gerais:

* ⚽ Jogos: 33
* ✅ Vitórias: 12
* 🤝 Empates: 5
* ❌ Derrotas: 16
* 🥅 Gols marcados: 47
* 🚫 Gols sofridos: 49

---

## 🌟 Fique de olho!

A República Tcheca chega como uma seleção **tradicional e perigosa** 👀⚠️
Com histórico forte e confiança renovada, pode surpreender no grupo!

👉 Será que vem aí mais uma campanha histórica rumo a uma final? 🏆🇨🇿🔥`,
    qualification: `## 🚀 Caminho até a Copa 2026

A jornada até a Copa foi marcada por **emoção e nervos de aço** 😮🔥`,
    lastMatches: [
      { opponent: 'Dinamarca', result: 'W', score: '2(3)-(1)2' },
      { opponent: 'Irlanda', result: 'W', score: '2(4)-(3)2' },
      { opponent: 'Gibraltar', result: 'W', score: '6-0' },
      { opponent: 'San Marino', result: 'W', score: '1-0' },
      { opponent: 'Ilhas Faroe', result: 'L', score: '1-2' },
    ],
    coach: {
      name: 'Miroslav Koubek',
      nationality: 'Checo',
      age: 74,
      tenure: '07 meses',
      description: 'Experiente treinador checo, assumiu o desafio de comandar a seleção na Copa do Mundo.'
    },
    players: [
      { name: 'Patrik Schick', position: 'Atacante', club: 'Bayer Leverkusen', highlight: 'Destaque ofensivo' },
      { name: 'Tomáš Souček', position: 'Meio-campista', club: 'West Ham', highlight: 'Líder e motor do meio-campo' }
    ],
    historyStats: {
      participations: 10,
      totalMatches: 33,
      wins: 12,
      losses: 16,
      draws: 5,
      titles: 0,
      bestCampaign: 'Vice-campeã (1934, 1962)'
    },
    groupMatches: [
      { opponent: 'Coreia do Sul', date: '11 de junho', time: '23h00', stadium: 'Guadalajara', country: 'México' },
      { opponent: 'África do Sul', date: '18 de junho', time: '13h00', stadium: 'Atlanta', country: 'EUA' },
      { opponent: 'México', date: '24 de junho', time: '22h00', stadium: 'Cidade do México', country: 'México' }
    ],
    tacticalAnalysis: 'A República Tcheca aposta em um jogo coletivo, com forte presença física e transições rápidas, liderada pela qualidade técnica de seus principais jogadores.'
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
    ],
    coach: {
      name: 'Julen Lopetegui',
      nationality: 'Espanhol',
      age: 59,
      tenure: '01 ano',
      description: 'Experiente treinador espanhol, traz bagagem tática europeia para elevar o nível competitivo da seleção.'
    },
    players: [
      { name: 'Almoez Ali', position: 'Atacante', club: 'Al-Duhail SC', highlight: 'Um dos maiores artilheiros da história da seleção' },
      { name: 'Akram Afif', position: 'Atacante', club: 'Al-Sadd SC', highlight: 'Atacante decisivo e criativo' },
      { name: 'Hasan Al-Haydos', position: 'Meio-campista', club: 'Al-Sadd SC', highlight: 'Veterano e líder' },
      { name: 'Sebastián Soria', position: 'Atacante', club: 'Qatar SC', highlight: 'Experiente e relevante' }
    ],
    historyStats: {
      participations: 2,
      totalMatches: 3,
      wins: 0,
      losses: 3,
      draws: 0,
      titles: 0,
      bestCampaign: 'Fase de grupos'
    },
    groupMatches: [
      { opponent: 'Suíça', date: '13 de junho', time: '16h00', stadium: 'Santa Clara', country: 'EUA' },
      { opponent: 'Canadá', date: '18 de junho', time: '19h00', stadium: 'Vancouver', country: 'Canadá' },
      { opponent: 'Bósnia e Herzegovina', date: '24 de junho', time: '16h00', stadium: 'Seattle', country: 'EUA' }
    ],
    tacticalAnalysis: 'O Catar busca um futebol organizado, com foco na solidez defensiva e na criatividade de seus talentos ofensivos para surpreender os adversários.'
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
    ],
    coach: {
      name: 'Murat Yakin',
      nationality: 'Suiço',
      age: 51,
      tenure: '05 anos',
      description: 'Treinador experiente, focado em manter a organização tática e a competitividade da seleção.'
    },
    players: [
      { name: 'Granit Xhaka', position: 'Meio-campista', club: 'Bayer Leverkusen', highlight: 'Líder técnico e emocional' },
      { name: 'Manuel Akanji', position: 'Zagueiro', club: 'Manchester City', highlight: 'Pilar defensivo' },
      { name: 'Yann Sommer / Gregor Kobel', position: 'Goleiro', club: 'Inter de Milão / Borussia Dortmund', highlight: 'Goleiros de elite' }
    ],
    historyStats: {
      participations: 13,
      totalMatches: 41,
      wins: 14,
      losses: 19,
      draws: 8,
      titles: 0,
      bestCampaign: 'Quartas de final (1934, 1938, 1954)'
    },
    groupMatches: [
      { opponent: 'Catar', date: '13 de junho', time: '16h00', stadium: 'Santa Clara', country: 'EUA' },
      { opponent: 'Bósnia e Herzegovina', date: '18 de junho', time: '16h00', stadium: 'Los Angeles', country: 'EUA' },
      { opponent: 'Canadá', date: '24 de junho', time: '16h00', stadium: 'Vancouver', country: 'Canadá' }
    ],
    tacticalAnalysis: 'A Suíça é conhecida por sua solidez defensiva, organização tática rigorosa e capacidade de transição, contando com jogadores de alto nível em todas as posições.'
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
  },
  'PAR': {
    history: `## 🇵🇾 Paraguai na Copa do Mundo da FIFA: perfil e histórico da seleção

Depois de **16 anos de ausência**, o **Paraguai** está de volta à Copa do Mundo da FIFA™. A seleção alvirrubra retorna ao maior palco do futebol com o objetivo de reviver seus melhores momentos e escrever um novo capítulo em sua história.

A última lembrança em Mundiais ainda dói: a eliminação nas quartas de final em 2010, com derrota por 1 a 0 para a Espanha, que viria a ser campeã.

---

### 🌍 Destaques gerais

* Retorno após ausência desde **2010**
* **9ª participação** em Copas do Mundo
* Melhor campanha: **quartas de final (2010)**
* Volta impulsionada pelo novo formato com 48 seleções

O Paraguai chega motivado, com uma geração que quer recolocar o país entre os protagonistas da América do Sul.

---

### 📅 Jogos do Paraguai – Grupo D

**Rodada 1**
📍 12 de junho
Estados Unidos x Paraguai
Los Angeles – 22h00 (Brasília)

**Rodada 2**
📍 19 de junho
Turquia x Paraguai
Santa Clara (EUA) – 1h00 (Brasília)

**Rodada 3**
📍 25 de junho
Paraguai x Austrália
Santa Clara (EUA) – 23h00 (Brasília)

---

### 🧠 Técnico do Paraguai

O comandante é Gustavo Alfaro:

* Assumiu em 2024 em momento delicado
* Recuperou a equipe nas eliminatórias
* Conhecido por seu estilo tático organizado e competitivo

---

### 📊 Histórico do Paraguai em Copas

* **Participações:** 9
* **Melhor campanha:** quartas de final (2010)
* **Jogos:** 27
* **Vitórias:** 7
* **Empates:** 10
* **Derrotas:** 10
* **Gols marcados:** 30
* **Gols sofridos:** 38

---

### ⭐ Melhor campanha – 2010

Na Copa do Mundo FIFA 2010:

* Chegou às quartas de final pela primeira vez
* Eliminou o Japão nas oitavas (pênaltis)
* Caiu para a Espanha por 1x0

➡️ Campanha histórica, por pouco não alcançando a semifinal.

---

### 🕰️ Última participação – 2010

A mesma campanha na África do Sul também foi a última presença do Paraguai em Copas até agora.

* Time competitivo
* Defesa sólida
* Eliminado pela futura campeã

---

### 🏁 Primeira Copa – 1930

Na Copa do Mundo FIFA 1930:

* Participação na edição inaugural
* Eliminado na fase de grupos

---

### 🚀 Expectativas para 2026

O Paraguai chega com sede de protagonismo após anos fora da Copa. Com uma equipe organizada e competitiva, a meta inicial é avançar da fase de grupos.

Mas o sonho vai além: repetir — ou até superar — a histórica campanha de 2010 e voltar a figurar entre as grandes seleções do mundo.`,
    qualification: `A classificação veio pelas eliminatórias da CONMEBOL:

* Terminou na **6ª colocação**
* Beneficiado pelo aumento de vagas para a Copa
* Campanha marcada por vitórias importantes

Destaques:

* Vitória por **1x0 sobre o Brasil**
* Vitória por **2x1 sobre a Argentina**

➡️ Garantiu vaga direta no Mundial de 2026`,
    lastMatches: [
      { opponent: 'Marrocos', result: 'L', score: '1-2' },
      { opponent: 'Grécia', result: 'W', score: '1-0' },
      { opponent: 'México', result: 'W', score: '2-1' },
      { opponent: 'EUA', result: 'L', score: '1-2' },
      { opponent: 'Coreia do Sul', result: 'L', score: '0-2' },
    ]
  },
  'AUS': {
    history: `## 🇦🇺 Austrália na Copa do Mundo da FIFA: perfil e histórico da seleção

A **Austrália** chega à Copa do Mundo da FIFA 2026™ pronta para disputar sua **7ª participação** e consolidar sua sequência impressionante no cenário mundial. Desde 2006, os “Socceroos” não ficam fora de um Mundial.

---

### 🌍 Destaques gerais

* **7ª participação** em Copas do Mundo
* **6ª consecutiva (2006–2026)**
* Melhor campanha: **oitavas de final (2006 e 2022)**
* Seleção em evolução constante

A meta agora é clara: **ir além das oitavas** e alcançar um feito inédito.

---

### 📅 Jogos da Austrália – Grupo D

**Rodada 1**
📍 13 de junho
Austrália x Turquia
Vancouver (Canadá) – 1h00 (14/06 em Brasília)

**Rodada 2**
📍 19 de junho
Estados Unidos x Austrália
Seattle (EUA) – 16h00 (Brasília)

**Rodada 3**
📍 25 de junho
Paraguai x Austrália
Santa Clara (EUA) – 23h00 (Brasília)

---

### 🧠 Técnico da Austrália

O treinador é Tony Popovic:

* Ex-zagueiro da seleção, com mais de **50 jogos internacionais**
* Participou da Copa de 2006 como jogador
* Assumiu a seleção em 2024
* Conhecido por disciplina tática e organização defensiva

Após se aposentar, iniciou rapidamente a carreira como técnico, conquistando títulos no futebol australiano e asiático. ([Wikipedia][1])

---

### 📊 Histórico da Austrália em Copas

* **Participações:** 7 (1974, 2006, 2010, 2014, 2018, 2022, 2026)
* **Melhor campanha:** oitavas de final (2006 e 2022)
* **Jogos:** 20
* **Vitórias:** 4
* **Empates:** 4
* **Derrotas:** 12
* **Gols marcados:** 17
* **Gols sofridos:** 37

---

### ⭐ Melhores campanhas

#### 🏆 Alemanha 2006

* Primeira vez nas oitavas
* Eliminada pela Itália (futura campeã)

#### 🏆 Qatar 2022

* Classificação histórica para o mata-mata
* Eliminada pela Argentina (campeã)

➡️ Mostra da evolução da seleção ao longo dos anos

---

### 🏁 Primeira Copa – 1974

A estreia aconteceu na Alemanha Ocidental:

* Eliminada na fase de grupos
* Primeira experiência internacional da seleção

---

### 🚀 Expectativas para 2026

A Austrália chega com uma equipe equilibrada e acostumada a competir em alto nível. A experiência recente em Copas e a consistência nas classificações colocam os Socceroos como uma seleção perigosa.

O objetivo é claro:
👉 **superar as oitavas de final e alcançar um feito inédito na história do país.**`,
    qualification: `## 🛣️ Como a Austrália se classificou para 2026

A campanha teve dois momentos distintos:

**Fase inicial:**

* 6 vitórias em 6 jogos
* Nenhum gol sofrido

**Fase decisiva:**

* Derrota para o Bahrein na estreia
* Empate com a Indonésia
* Troca de treinador → entrada de Popovic

A partir daí, a equipe reagiu:

* Vitória sobre a China
* Empate fora contra o Japão
* Vitória sobre o Japão
* Vitória decisiva por **2x1 sobre a Arábia Saudita**

➡️ Classificação garantida com vaga direta para a Copa ([Wikipedia][2])`,
    lastMatches: [
      { opponent: 'Curaçao', result: 'W', score: '5-1' },
      { opponent: 'Camarões', result: 'W', score: '1-0' },
      { opponent: 'Colômbia', result: 'L', score: '0-3' },
      { opponent: 'Venezuela', result: 'L', score: '0-1' },
      { opponent: 'EUA', result: 'L', score: '1-2' },
    ]
  },
  'TUR': {
    history: `## 🇹🇷 Turquia na Copa do Mundo 2026: O Fim do Jejum!

A Turquia garantiu seu passaporte para a Copa do Mundo da FIFA 2026™! Sob a liderança tática do técnico **Vincenzo Montella** 🧠👔, a equipe mostrou sua força e venceu seus dois jogos decisivos na temida repescagem europeia. ✈️🌍

Graças a uma vitória suada e apertada por 1 a 0 sobre os kosovares 🇽🇰 na terça-feira (31/03) — selada com um gol super oportunista do artilheiro **Kerem Akturkoglu** ⚽🔥 —, os turcos carimbaram a sua terceira participação geral em Copas do Mundo!

É a primeira vez que a seleção turca disputa o Mundial desde a inesquecível campanha de 2002 (Coreia/Japão), quando surpreenderam o planeta e terminaram em um histórico **3º lugar** 🥉 (sendo parados apenas na semifinal pelo Brasil 🇧🇷).

---

### 📅 Agenda da Turquia – Grupo D

**Rodada 1**
📍 Vancouver (Canadá) 🇨🇦
🗓️ 13 de junho
⏰ 1h00 (14/06 no horário de Brasília)
⚔️ 🇦🇺 Austrália x 🇹🇷 Turquia

**Rodada 2**
📍 Santa Clara (EUA) 🇺🇸
🗓️ 19 de junho
⏰ 1h00 (horário de Brasília)
⚔️ 🇹🇷 Turquia x 🇵🇾 Paraguai

**Rodada 3**
📍 Los Angeles (EUA) 🇺🇸
🗓️ 25 de junho
⏰ 23h00 (horário de Brasília)
⚔️ 🇹🇷 Turquia x 🇺🇸 Estados Unidos

---

### 📜 Histórico em Copas do Mundo 🏆

#### 🕰️ Copa do Mundo de 1954 (Suíça)
Na sua estreia em mundiais, a Turquia foi eliminada na primeira fase após disputar três partidas intensas:
* ❌ Derrota para a Alemanha por 4 x 1 🇩🇪
* ✅ Vitória esmagadora sobre a Coreia do Sul por 7 x 0 🇰🇷
* ❌ Derrota no jogo de desempate para a Alemanha por 7 x 2 🇩🇪

#### 🥉 Copa do Mundo de 2002 (Coreia/Japão)
* **Melhor campanha:** 3º lugar
* Eliminada na semifinal pelo Brasil (1x0)
* Venceu a Coreia do Sul na disputa do 3º lugar (3x2)

#### 🚀 Copa do Mundo de 2026 (EUA/Canadá/México)
Em 31 de março de 2026, a Turquia celebrou seu retorno à Copa após 24 anos de espera. Agora, a missão é no Grupo D, lutando por uma vaga nos mata-matas. O sonho está mais vivo do que nunca! 🌟`,
    qualification: `### 🛣️ O Caminho até a Vaga

Nas eliminatórias da UEFA, a Turquia terminou na 2ª posição do seu grupo, logo atrás da Espanha 🇪🇸. Esse cenário já estava praticamente desenhado após um duro tropeço por 6 a 0 em casa para os ibéricos na segunda rodada. 🤕

Mas Montella não deixou a peteca cair! O comandante conduziu sua equipe com sucesso na repescagem continental, garantindo a vaga com vitórias cirúrgicas sobre a **Romênia** 🇷🇴 e o **Kosovo** 🇽🇰. 💪`,
    lastMatches: [
      { opponent: 'Kosovo', result: 'W', score: '1-0' },
      { opponent: 'Romênia', result: 'W', score: '1-0' },
      { opponent: 'Espanha', result: 'D', score: '2-2' },
      { opponent: 'Bulgária', result: 'W', score: '2-0' },
      { opponent: 'Geórgia', result: 'W', score: '4-1' },
    ]
  },
  'CUW': {
    history: `## 🇨🇼✨ CURAÇAU: A HISTÓRICA ESTREIA DA "ONDA AZUL"! ✨🇨🇼

🎉 **O Menor Gigante do Mundo!**
Preparem os corações! Curaçau garantiu sua classificação histórica para a Copa do Mundo da FIFA 2026™ e acaba de se tornar o menor país da história (com apenas 150 mil habitantes e 443 km²) a disputar o maior evento esportivo do planeta! 🏝️⚽

A vaga veio de forma simbólica em novembro de 2025, após um empate heroico em 0 a 0 contra a Jamaica 🇯🇲, em Kingston. A "Onda Azul" terminou na liderança do Grupo B das eliminatórias da Concacaf e provou que o tamanho do território não define o tamanho do futebol! 🌊💙

🧠🇳🇱 **Comando Holandês: Dick Advocaat**
Para elevar o nível da equipe, a federação trouxe o renomado e experiente técnico holandês Dick Advocaat em 2024. Com bagagem de Copas do Mundo no currículo, ele assumiu o legado deixado por Remko Bicentini para guiar esses heróis em solo norte-americano! 📋👨🏫

---

### 📅 AGENDA DE CURAÇAU – GRUPO E 🗓️
Hora de torcer pela maior surpresa do torneio! ⏰

⚔️ **Rodada 1**
* **Jogo:** 🇩🇪 Alemanha x Curaçau 🇨🇼
* 📍 **Local:** Houston (EUA) 🇺🇸
* 🕒 **Data/Hora:** 14 de junho | 14h00 *(horário de Brasília)*

⚔️ **Rodada 2**
* **Jogo:** 🇪🇨 Equador x Curaçau 🇨🇼
* 📍 **Local:** Kansas City (EUA) 🇺🇸
* 🕒 **Data/Hora:** 20 de junho | 21h00 *(horário de Brasília)*

⚔️ **Rodada 3**
* **Jogo:** 🇨🇼 Curaçau x Costa do Marfim 🇨🇮
* 📍 **Local:** Filadélfia (EUA) 🇺🇸
* 🕒 **Data/Hora:** 25 de junho | 17h00 *(horário de Brasília)*

---

### 📜 HISTÓRICO NA COPA DO MUNDO 🏆
Uma história que começa a ser escrita AGORA:

* 🌍 **Confederação:** Concacaf
* 🆕 **Primeira Copa do Mundo:** 2026 (EUA/Canadá/México)
* 🔢 **Participações:** 1 (Estreante absoluta!) 🌟

---

### 🚀 Expectativas para 2026
Será que Curaçau consegue surpreender a poderosa Alemanha na estreia? A torcida está pronta para ver a "Onda Azul" em ação no maior palco do mundo!`,
    qualification: `### 🛣️ O Caminho até a Glória

A campanha rumo a 2026 foi avassaladora! Curaçau não deu chances aos rivais:

* 👊 Goleou Barbados por 4 a 1 (com hat-trick de Rangelo Janga!)
* ✈️ Venceu o clássico contra Aruba por 2 a 0 fora de casa.
* 🔥 Massacrou Santa Lúcia por 4 a 0 (brilho de Gervane Kastaneer!).
* 💥 Aplicou uma goleada histórica de 5 a 1 sobre o Haiti!
* 🤝 Jamaica 0 x 0 Curaçau 🇯🇲 (O jogo da classificação!) 🎊`,
    lastMatches: [
      { opponent: 'Austrália', result: 'L', score: '1-5' },
      { opponent: 'China', result: 'L', score: '0-2' },
      { opponent: 'Jamaica', result: 'D', score: '0-0' },
      { opponent: 'Bermudas', result: 'W', score: '7-0' },
      { opponent: 'Trinidad e Tobago', result: 'D', score: '1-1' },
    ]
  },
  'CIV': {
    history: `## COSTA DO MARFIM: O RETORNO DOS ELEFANTES! ✨🇨🇮

🎉 **A Volta da Potência Africana!**
Após 12 anos de espera, a Costa do Marfim está de volta ao maior palco do futebol mundial! 🌍✈️ A última vez que vimos os "Elefantes" em ação foi no Brasil 2014, e agora eles desembarcam na América do Norte para a sua 4ª participação histórica.

Atuais Campeões Africanos (2024) 🏆, os marfinenses chegam com uma missão clara: quebrar o tabu e avançar pela primeira vez para os mata-matas! O país está mobilizado para ver essa geração de ouro fazer história. 🇨🇮🔥

🧠📋 **O Comandante: Emerse Faé**
Emerse Faé assumiu o leme em janeiro de 2024 em um momento crítico e transformou a seleção! Sua chegada foi o combustível necessário para levar a equipe ao título continental e, agora, ao Mundial de 2026. 👔🔝

---

### 📅 AGENDA DA COSTA DO MARFIM – GRUPO E 🗓️
Prepare a torcida, os Elefantes vão passar! 🐘⏰

⚔️ **Rodada 1**
* **Jogo:** 🇨🇮 Costa do Marfim x Equador 🇪🇨
* 📍 **Local:** Filadélfia (EUA) 🇺🇸
* 🕒 **Data/Hora:** 14 de junho | 20h00 *(horário de Brasília)*

⚔️ **Rodada 2**
* **Jogo:** 🇩🇪 Alemanha x Costa do Marfim 🇨🇮
* 📍 **Local:** Toronto (Canadá) 🇨🇦
* 🕒 **Data/Hora:** 20 de junho | 17h00 *(horário de Brasília)*

⚔️ **Rodada 3**
* **Jogo:** 🇨🇼 Curaçau x Costa do Marfim 🇨🇮
* 📍 **Local:** Filadélfia (EUA) 🇺🇸
* 🕒 **Data/Hora:** 25 de junho | 17h00 *(horário de Brasília)*

---

### 📜 HISTÓRICO NA COPA DO MUNDO 🏆
Uma trajetória de garra no continente africano:

* 🌍 **Confederação:** CAF (África)
* ⭐ **Melhores Campanhas:** 2006, 2010, 2014 (Fase de Grupos)
* 🔙 **Primeira Copa:** Alemanha 2006
* 🔢 **Participações:** 4 (2006, 2010, 2014 e 2026)
* 📊 **Estatísticas:** 9 Jogos | 3 Vitórias ✅ | 1 Empate 🤝 | 5 Derrotas ❌ | 13 Gols Pró ⚽`,
    qualification: `### 🛣️ O Caminho Invencível até a Vaga

A classificação veio com autoridade total! A Costa do Marfim garantiu sua vaga ao vencer o Quênia 🇰🇪 por 3 a 0 na última rodada das eliminatórias. Confira os destaques da campanha no Grupo F:

* 🛡️ **Defesa de Ferro:** Terminaram a liderança invictos e sem sofrer um único gol! 🚫⚽
* 🎯 **Artilharia Pesada:** O paredão do meio-campo Seko Fofana liderou com 3 gols, seguido de perto por nomes de peso como Franck Kessié, Simon Adingra e Sébastien Haller.`,
    lastMatches: [
      { opponent: 'Escócia', result: 'W', score: '1-0' },
      { opponent: 'Coreia do Sul', result: 'W', score: '4-0' },
      { opponent: 'Egito', result: 'L', score: '2-3' },
      { opponent: 'Burkina Faso', result: 'W', score: '3-0' },
      { opponent: 'Gabão', result: 'W', score: '3-2' },
    ]
  },
  'ECU': {
    history: `## 🇪🇨✨ EQUADOR: A ASCENSÃO DA "LA TRI"! ✨🇪🇨

🎉 **A Geração de Ouro Sul-Americana!**
O Equador carimbou o passaporte para a sua 5ª Copa do Mundo da FIFA™! Pela segunda vez consecutiva, a "La Tri" chega ao Mundial ostentando uma geração brilhante que atua na elite do futebol europeu. 🌍✈️

Com uma campanha histórica nas eliminatórias da CONMEBOL, os equatorianos terminaram em 2º lugar, ficando atrás apenas da atual campeã Argentina 🇦🇷. O objetivo agora é superar o recorde de 2006 e avançar além das oitavas de final! 🚀🔥

🧠🇦🇷 **O Comandante: Sebastián Beccacece**
O técnico argentino assumiu o desafio após a Copa América e devolveu a personalidade ao time! Sob sua liderança, o Equador se tornou uma equipe extremamente resiliente e competitiva, perdendo apenas na estreia contra o Brasil 🇧🇷 e seguindo invicto desde então. 📋👔

---

### 📅 AGENDA DO EQUADOR – GRUPO E 🗓️
Anote para não perder os lances da La Tri! ⏰

⚔️ **Rodada 1**
* **Jogo:** 🇨🇮 Costa do Marfim x Equador 🇪🇨
* 📍 **Local:** Filadélfia (EUA) 🇺🇸
* 🕒 **Data/Hora:** 14 de junho | 20h00 *(horário de Brasília)*

⚔️ **Rodada 2**
* **Jogo:** 🇪🇨 Equador x Curaçau 🇨🇼
* 📍 **Local:** Kansas City (EUA) 🇺🇸
* 🕒 **Data/Hora:** 20 de junho | 21h00 *(horário de Brasília)*

⚔️ **Rodada 3**
* **Jogo:** 🇪🇨 Equador x Alemanha 🇩🇪
* 📍 **Local:** Nova York/Nova Jersey (EUA) 🇺🇸
* 🕒 **Data/Hora:** 25 de junho | 17h00 *(horário de Brasília)*

---

### 📜 HISTÓRICO NA COPA DO MUNDO 🏆
O Equador já é figura carimbada no cenário mundial:

* 🌍 **Confederação:** CONMEBOL
* ⭐ **Melhor Campanha:** 2006 (Oitavas de Final) 🇩🇪
* 🔙 **Primeira Copa:** Coreia/Japão 2002 🇰🇷🇯🇵
* 🔢 **Participações:** 5 (2002, 2006, 2014, 2022 e 2026)
* 📊 **Estatísticas:** 13 Jogos | 5 Vitórias ✅ | 2 Empates 🤝 | 6 Derrotas ❌`,
    qualification: `### 🛡️ Uma Defesa Quase Invencível

O segredo do sucesso equatoriano rumo a 2026 foi o "ferrolho" lá atrás:

* 🧱 **Muralha:** A defesa sofreu apenas 2 gols em 12 jogos! 🚫⚽
* 💎 **Jovens Estrelas:** Nomes como Moisés Caicedo e William Pacho são os pilares dessa equipe que promete fazer história na América do Norte.
* 🎯 **Matador:** O veterano Enner Valencia continua sendo a referência no ataque, tendo marcado 6 gols na caminhada classificatória.`,
    lastMatches: [
      { opponent: 'Holanda', result: 'D', score: '1-1' },
      { opponent: 'Marrocos', result: 'D', score: '1-1' },
      { opponent: 'Nova Zelândia', result: 'W', score: '2-0' },
      { opponent: 'Canadá', result: 'D', score: '0-0' },
      { opponent: 'México', result: 'D', score: '1-1' },
    ]
  },
  'NED': {
    history: `## 🇳🇱✨ HOLANDA: A BUSCA PELO TOPO DO MUNDO! ✨🇳🇱

🎉 **A Tradição da Laranja Mecânica!**
Os Países Baixos chegam à Copa do Mundo da FIFA 2026™ com um histórico que impõe respeito: em todas as edições que participaram desde 1974, nunca foram eliminados na primeira fase! 🤯🔥

Com três vice-campeonatos na bagagem, a Holanda desembarca na América do Norte decidida a dar o passo final que falta para a consagração mundial. Após caírem nas quartas de final em 2022, os holandeses prometem futebol total para buscar o título inédito! 🏆🇳🇱

🧠🎯 **O Comandante: Ronald Koeman**
Ídolo como jogador e agora em sua segunda passagem como técnico, Ronald Koeman assumiu o comando em 2023. Com passagens por gigantes como Barcelona e Ajax, o ex-zagueiro artilheiro traz toda sua experiência para guiar a nova geração holandesa rumo à glória! 📋👨🏫

---

### 📅 AGENDA DA HOLANDA – GRUPO F 🗓️
Prepare o seu manto laranja, os jogos prometem ser eletrizantes! ⏰

⚔️ **Rodada 1**
* **Jogo:** 🇳🇱 Holanda x Japão 🇯🇵
* 📍 **Local:** Dallas (EUA) 🇺🇸
* 🕒 **Data/Hora:** 14 de junho | 17h00 *(horário de Brasília)*

⚔️ **Rodada 2**
* **Jogo:** 🇳🇱 Holanda x Suécia 🇸🇪
* 📍 **Local:** Houston (EUA) 🇺🇸
* 🕒 **Data/Hora:** 20 de junho | 14h00 *(horário de Brasília)*

⚔️ **Rodada 3**
* **Jogo:** 🇹🇳 Tunísia x Holanda 🇳🇱
* 📍 **Local:** Kansas City (EUA) 🇺🇸
* 🕒 **Data/Hora:** 25 de junho | 20h00 *(horário de Brasília)*

---

### 📜 HISTÓRICO NA COPA DO MUNDO 🏆
Uma das camisas mais pesadas do futebol europeu:

* 🌍 **Confederação:** UEFA
* 🥈 **Melhores Campanhas:** Vice-campeã em 1974, 1978 e 2010
* ⏪ **Última Copa:** Catar 2022 (Quartas de Final)
* 🔢 **Participações:** 12 (1934, 1938, 1974, 1978, 1990, 1994, 1998, 2006, 2010, 2014, 2022, 2026)
* 📊 **Estatísticas Gerais:** 55 Jogos | 30 Vitórias ✅ | 14 Empates 🤝 | 11 Derrotas ❌`,
    qualification: `### 🛣️ O Caminho até a Vaga

A classificação foi garantida com autoridade e emoção! A Holanda terminou as eliminatórias da UEFA de forma invicta no Grupo G:

* 👊 **Goleada Final:** A vaga foi carimbada com um sonoro 4 a 0 sobre a Lituânia 🇱🇹.
* 📊 **Domínio Total:** Em 6 jogos contra Finlândia, Malta e Lituânia, a equipe marcou impressionantes 25 gols e sofreu apenas 2! 🛡️⚽
* 🤝 **Equilíbrio:** Os únicos pontos perdidos foram nos empates contra a forte seleção da Polônia 🇵🇱.`,
    lastMatches: [
      { opponent: 'Equador', result: 'D', score: '1-1' },
      { opponent: 'Noruega', result: 'W', score: '2-1' },
      { opponent: 'Lituânia', result: 'W', score: '4-0' },
      { opponent: 'Polônia', result: 'D', score: '1-1' },
      { opponent: 'Finlândia', result: 'W', score: '4-0' },
    ]
  },
  'JPN': {
    history: `## 🇯🇵✨ JAPÃO: OS SAMURAIS AZUIS EM BUSCA DA HISTÓRIA! ✨🇯🇵

🎉 **Classificação em Tempo Recorde!**
O Japão não apenas garantiu sua vaga, ele atropelou o caminho até ela! ⚡ Com exceção dos anfitriões, os japoneses foram os primeiros do mundo a assegurar o passaporte para a Copa de 2026. Esta será a 8ª participação consecutiva da seleção, uma sequência impecável que começou em 1998. 🌏✈️

Depois de chocar o planeta no Catar 2022 ao vencer as gigantes Espanha 🇪🇸 e Alemanha 🇩🇪, o Japão chega à América do Norte com um objetivo claro: ir além das oitavas de final pela primeira vez na história! 📈🔥

🧠📋 **O Comandante: Hajime Moriyasu**
Moriyasu fez história ao se tornar o primeiro técnico do Japão a ter o contrato renovado após um Mundial. Reconhecido por sua inteligência tática e gestão de elenco, ele equilibra como ninguém a experiência dos veteranos com a energia da nova geração. 👔🔝

---

### 📅 AGENDA DO JAPÃO – GRUPO F 🗓️
Preparem os despertadores para acompanhar os Samurais! ⏰

⚔️ **Rodada 1**
* **Jogo:** 🇳🇱 Holanda x Japão 🇯🇵
* 📍 **Local:** Dallas (EUA) 🇺🇸
* 🕒 **Data/Hora:** 14 de junho | 17h00 *(horário de Brasília)*

⚔️ **Rodada 2**
* **Jogo:** 🇹🇳 Tunísia x Japão 🇯🇵
* 📍 **Local:** Monterrey (México) 🇲🇽
* 🕒 **Data/Hora:** 20 de junho | 23h00 *(horário de Brasília)*

⚔️ **Rodada 3**
* **Jogo:** 🇯🇵 Japão x Suécia 🇸🇪
* 📍 **Local:** Dallas (EUA) 🇺🇸
* 🕒 **Data/Hora:** 25 de junho | 20h00 *(horário de Brasília)*

---

### 📜 HISTÓRICO NA COPA DO MUNDO 🏆
Uma evolução constante no cenário mundial:

* 🌍 **Confederação:** AFC (Ásia)
* ⭐ **Melhores Campanhas:** 2002, 2010, 2018 e 2022 (Oitavas de Final)
* 🔙 **Primeira Copa:** França 1998
* 🔢 **Participações:** 8 (1998, 2002, 2006, 2010, 2014, 2018, 2022 e 2026)
* 📊 **Estatísticas:** 25 Jogos | 7 Vitórias ✅ | 6 Empates 🤝 | 12 Derrotas ❌`,
    qualification: `### 🛣️ O Caminho Avassalador até a Vaga

A campanha nas eliminatórias asiáticas foi digna de um filme de ação:

* 🛡️ **Defesa Impenetrável:** Na segunda fase, foram 6 vitórias em 6 jogos, com 24 gols marcados e ZERO sofridos! 🚫🥅
* 🚀 **Velocidade Máxima:** Na fase final, superou potências como a Arábia Saudita 🇸🇦 e carimbou a vaga com três rodadas de antecedência. Foi a classificação mais rápida da história do futebol japonês! 🎌💨`,
    lastMatches: [
      { opponent: 'Inglaterra', result: 'W', score: '1-0' },
      { opponent: 'Escócia', result: 'W', score: '1-0' },
      { opponent: 'Bolívia', result: 'W', score: '3-0' },
      { opponent: 'Gana', result: 'W', score: '2-0' },
      { opponent: 'Brasil', result: 'W', score: '3-2' },
    ]
  },
  'SWE': {
    history: `## 🇸🇪✨ SUÉCIA: A FORÇA VIKING ESTÁ DE VOLTA! ✨🇸🇪

🎉 **Uma Tradição que se Renova!**
A Suécia está de volta ao palco principal! Com a vaga garantida para a Copa de 2026, os suecos somam agora 13 participações históricas. Conhecida por surpreender gigantes, a seleção amarela e azul chega com uma missão: honrar o passado de glórias (como o vice-campeonato de 1958 e o 3º lugar em 1994) e mostrar a força de sua nova geração! 🛡️🌊

Após ficar de fora em 2022, a Suécia aposta em um futebol coletivo e dinâmico. Esqueça a dependência de um só craque; agora o jogo é no conjunto, na velocidade e na pressão! ⚡💪

🧠🏴 **A "Era Graham Potter"**
O arquiteto da reconstrução é o inglês Graham Potter! Contratado em outubro de 2025 sob desconfiança, ele organizou a casa em tempo recorde. A confiança no projeto é tanta que seu contrato já foi estendido até 2030! Potter segue os passos de George Raynor, o único outro inglês a comandar os suecos (e que os levou à final contra o Brasil em 58). 👀📋

---

### 📅 AGENDA DA SUÉCIA – GRUPO F 🗓️
Prepare-se para batalhas épicas no grupo da morte! ⏰

⚔️ **Rodada 1**
* **Jogo:** 🇸🇪 Suécia x Tunísia 🇹🇳
* 📍 **Local:** Monterrey (México) 🇲🇽
* 🕒 **Data/Hora:** 14 de junho | 23h00 *(horário de Brasília)*

⚔️ **Rodada 2**
* **Jogo:** 🇳🇱 Holanda x Suécia 🇸🇪
* 📍 **Local:** Houston (EUA) 🇺🇸
* 🕒 **Data/Hora:** 20 de junho | 14h00 *(horário de Brasília)*

⚔️ **Rodada 3**
* **Jogo:** 🇯🇵 Japão x Suécia 🇸🇪
* 📍 **Local:** Dallas (EUA) 🇺🇸
* 🕒 **Data/Hora:** 25 de junho | 20h00 *(horário de Brasília)*

---

### 📜 HISTÓRICO DE PESO EM COPAS 🏆
Uma das seleções europeias mais consistentes:

* 🌍 **Confederação:** UEFA
* 🥈 **Melhor Campanha:** Vice-campeã (1958)
* 🥉 **Pódios:** 3º lugar em 1950 e 1994
* 🔙 **Primeira Copa:** Itália 1934
* 🔢 **Participações:** 13 (1934, 1938, 1950, 1958, 1970, 1974, 1978, 1990, 1994, 2002, 2006, 2018, 2026)`,
    qualification: `### 🛣️ O Caminho Dramático até a Vaga

A jornada para 2026 foi um verdadeiro teste para o coração dos torcedores:

* 🎢 **Turbulência:** Após uma fase de grupos ruim, a vaga parecia perdida.
* 🎟️ **A Chance de Ouro:** Graças ao desempenho na Nations League, o time ganhou uma vida extra na repescagem.
* 🔥 **O Nome da Classificação:** Viktor Gyökeres! O artilheiro do Arsenal foi monstruoso, marcando 4 gols nos dois jogos decisivos.
* ✅ **Vaga Carimbada:** Vitórias épicas sobre a Ucrânia 🇺🇦 (3x1) e Polônia 🇵🇱 (3x2) garantiram o passaporte em março de 2026!`,
    lastMatches: [
      { opponent: 'Polônia', result: 'W', score: '3-2' },
      { opponent: 'Ucrânia', result: 'W', score: '3-1' },
      { opponent: 'Eslovênia', result: 'D', score: '1-1' },
      { opponent: 'Suíça', result: 'L', score: '4-1' },
      { opponent: 'Kosovo', result: 'L', score: '0-1' },
    ]
  },
  'TUN': {
    history: `## 🇹🇳✨ TUNÍSIA: AS ÁGUIAS DO CARTAGO QUEREM VOAR ALTO! ✨🇹🇳

🎉 **Presença Confirmada no Cenário Global!**
A Tunísia carimbou seu passaporte para a sua 7ª Copa do Mundo da FIFA™! ✈️🌍 Sendo a terceira participação consecutiva das Águias, a seleção africana mostra uma maturidade impressionante: neste século, eles estiveram presentes em 5 das 7 edições do torneio.

Agora, em 2026, o objetivo é um só: usar toda essa experiência acumulada para quebrar a barreira da primeira fase e avançar, pela primeira vez na história, para os mata-matas! 🚀🔥

🧠📋 **O Comando de Sami Trabelsi**
A chegada de Sami Trabelsi deu o impulso final que a equipe precisava. Com um trabalho focado em organização e disciplina tática, o técnico transformou a Tunísia em uma equipe extremamente difícil de ser batida, unindo o talento individual a um sistema coletivo sólido. 🛡️👔

---

### 📅 AGENDA DA TUNÍSIA – GRUPO F 🗓️
Olho no lance! As Águias estreiam em solo mexicano! ⏰

⚔️ **Rodada 1**
* **Jogo:** 🇸🇪 Suécia x Tunísia 🇹🇳
* 📍 **Local:** Monterrey (México) 🇲🇽
* 🕒 **Data/Hora:** 14 de junho | 22h00 *(horário de Brasília)*

⚔️ **Rodada 2**
* **Jogo:** 🇹🇳 Tunísia x Japão 🇯🇵
* 📍 **Local:** Monterrey (México) 🇲🇽
* 🕒 **Data/Hora:** 20 de junho | 23h00 *(horário de Brasília)*

⚔️ **Rodada 3**
* **Jogo:** 🇹🇳 Tunísia x Holanda 🇳🇱
* 📍 **Local:** Kansas City (EUA) 🇺🇸
* 🕒 **Data/Hora:** 25 de junho | 20h00 *(horário de Brasília)*

---

### 📜 HISTÓRICO NA COPA DO MUNDO 🏆
Uma trajetória de persistência e evolução:

* 🌍 **Confederação:** CAF (África)
* ⭐ **Melhores Campanhas:** Fase de Grupos (Sempre competitivos!)
* 🔙 **Primeira Copa:** Argentina 1978
* 🔢 **Participações:** 7 (1978, 1998, 2002, 2006, 2018, 2022, 2026)
* 📊 **Estatísticas:** 18 Jogos | 3 Vitórias ✅ | 5 Empates 🤝 | 10 Derrotas ❌`,
    qualification: `### 🛣️ O Caminho Perfeito até a Vaga

A campanha nas eliminatórias africanas foi simplesmente impecável:

* 🧱 **Muralha Inabalável:** As Águias do Cartago terminaram a competição com um feito histórico: não sofreram um único gol em 10 partidas! 🚫⚽
* 📊 **Domínio Absoluto:** Somaram 28 dos 30 pontos possíveis, terminando muito à frente da Namíbia 🇳🇦.
* 🎯 **O Gol da Glória:** A vaga foi selada oficialmente com um gol heroico de Mohamed Ali Ben Romdhane nos minutos finais contra a Guiné Equatorial 🇬🇶. 🎊🙌`,
    lastMatches: [
      { opponent: 'Canadá', result: 'D', score: '0-0' },
      { opponent: 'Haiti', result: 'W', score: '1-0' },
      { opponent: 'Mali', result: 'D', score: '1-1' },
      { opponent: 'Tanzânia', result: 'D', score: '1-1' },
      { opponent: 'Nigéria', result: 'L', score: '3-2' },
    ]
  },
  'BEL': {
    history: `## 🇧🇪✨ BÉLGICA: OS DIABOS VERMELHOS EM BUSCA DA REDENÇÃO! ✨🇧🇪

🎉 **Rumo à 15ª Participação Histórica!**
A Bélgica carimbou seu passaporte para a América do Norte e disputará sua 4ª Copa do Mundo consecutiva! ✈️🌍 Com um histórico de peso, os belgas querem apagar a imagem amarga do Catar 2022 e provar que ainda são uma das maiores potências do futebol mundial.

O grande objetivo? Repetir ou superar a campanha mágica de 2018, quando encantaram o mundo e conquistaram o honroso 3º lugar na Rússia! 🥉🔥

🧠🇫🇷 **O Comandante: Rudi Garcia**
Rudi Garcia assumiu o leme em janeiro de 2025 com uma missão clara: trazer estabilidade e reerguer a moral da equipe. Com passagens por grandes clubes europeus, o técnico francês busca extrair o melhor do talento belga para brilhar no primeiro Mundial com 48 seleções! 📋👔

---

### 📅 AGENDA DA BÉLGICA – GRUPO G 🗓️
Prepare sua torcida, os Diabos Vermelhos vêm com tudo! ⏰

⚔️ **Rodada 1**
* **Jogo:** 🇧🇪 Bélgica x Egito 🇪🇬
* 📍 **Local:** Seattle (EUA) 🇺🇸
* 🕒 **Data/Hora:** 15 de junho | 16h00 *(horário de Brasília)*

⚔️ **Rodada 2**
* **Jogo:** 🇧🇪 Bélgica x Irã 🇮🇷
* 📍 **Local:** Los Angeles (EUA) 🇺🇸
* 🕒 **Data/Hora:** 21 de junho | 16h00 *(horário de Brasília)*

⚔️ **Rodada 3**
* **Jogo:** 🇳🇿 Nova Zelândia x Bélgica 🇧🇪
* 📍 **Local:** Vancouver (Canadá) 🇨🇦
* 🕒 **Data/Hora:** 26 de junho | 0h00 *(madrugada de 27/06 em Brasília)*

---

### 📜 HISTÓRICO NA COPA DO MUNDO 🏆
Uma trajetória de tradição e grandes talentos:

* 🌍 **Confederação:** UEFA
* ⭐ **Melhor Campanha:** 2018 (3º lugar) 🥉
* 🔙 **Primeira Copa:** Uruguai 1930
* 🔢 **Participações:** 15 (1930, 1934, 1938, 1954, 1970, 1982, 1986, 1990, 1994, 1998, 2002, 2014, 2018, 2022, 2026)
* 📊 **Estatísticas:** 51 Jogos | 21 Vitórias ✅ | 10 Empates 🤝 | 20 Derrotas ❌`,
    qualification: `### 🛣️ O Caminho até a Vaga

A classificação foi selada com autoridade nas eliminatórias europeias:

* 🥇 **Líder do Grupo J:** A Bélgica dominou seu grupo com 5 vitórias fundamentais.
* 💥 **Goleada de Respeito:** A vaga foi confirmada com chave de ouro na última rodada: um massacre de 7 a 0 sobre Liechtenstein! ⚽🌪️
* 🛡️ **Superação:** O time mostrou resiliência após um período de transição, garantindo presença em solo norte-americano com méritos totais.`,
    lastMatches: [
      { opponent: 'México', result: 'D', score: '1-1' },
      { opponent: 'EUA', result: 'W', score: '5-2' },
      { opponent: 'Liechtenstein', result: 'W', score: '7-0' },
      { opponent: 'Cazaquistão', result: 'D', score: '1-1' },
      { opponent: 'País de Gales', result: 'W', score: '3-2' },
    ]
  },
  'EGY': {
    history: `## 🇪🇬✨ EGITO: OS FARAÓS BUSCAM A PRIMEIRA VITÓRIA! ✨🇪🇬

🎉 **O Retorno Triunfal!**
O Egito se prepara para disputar sua quarta Copa do Mundo da FIFA™. Após ficar fora da última edição, os Faraós voltaram com força total e garantiram vaga para sua quarta participação no torneio. O objetivo agora é histórico: buscar a primeira vitória no maior palco do futebol mundial! 🇪🇬⚽

Os Faraós dominaram seu grupo nas eliminatórias africanas, encerrando a campanha invictos diante de adversários de peso, graças a uma defesa sólida e às boas atuações de seus principais nomes, como o astro Mohamed Salah. 🏹🔥

🧠📋 **O Comandante: Hossam Hassan**
Após uma carreira brilhante como jogador, Hossam Hassan consolidou seu nome não apenas como um dos maiores artilheiros da história do futebol egípcio, mas também como um dos principais treinadores do país. Pela seleção, ele segue como o maior artilheiro da história do país e agora busca levar o Egito a um novo patamar como técnico. 👔🔝

---

### 📅 AGENDA DO EGITO – GRUPO G 🗓️
Fique ligado nos horários dos Faraós! ⏰

⚔️ **Rodada 1**
* **Jogo:** 🇧🇪 Bélgica x Egito 🇪🇬
* 📍 **Local:** Seattle (EUA) 🇺🇸
* 🕒 **Data/Hora:** 15 de junho | 16h00 *(horário de Brasília)*

⚔️ **Rodada 2**
* **Jogo:** 🇳🇿 Nova Zelândia x Egito 🇪🇬
* 📍 **Local:** Vancouver (Canadá) 🇨🇦
* 🕒 **Data/Hora:** 21 de junho | 22h00 *(horário de Brasília)*

⚔️ **Rodada 3**
* **Jogo:** 🇪🇬 Egito x Irã 🇮🇷
* 📍 **Local:** Seattle (EUA) 🇺🇸
* 🕒 **Data/Hora:** 26 de junho | 0h00 *(madrugada de 27/06 em Brasília)*

---

### 📜 HISTÓRICO NA COPA DO MUNDO 🏆
Uma trajetória de persistência no cenário mundial:

* 🌍 **Confederação:** CAF (África)
* ⭐ **Melhores Campanhas:** 1934, 1990, 2018 (Fase de Grupos)
* 🔙 **Primeira Copa:** Itália 1934
* 🔢 **Participações:** 4 (1934, 1990, 2018, 2026)
* 📊 **Estatísticas:** 7 Jogos | 0 Vitórias ✅ | 2 Empates 🤝 | 5 Derrotas ❌`,
    qualification: `### 🛣️ Como o Egito se classificou para 2026

O Egito assegurou sua vaga ao terminar na liderança do Grupo A das eliminatórias africanas, à frente de Burkina Faso, Serra Leoa, Guiné-Bissau, Etiópia e Djibuti.

* 📈 **Campanha Invicta:** Foram 8 vitórias e 2 empates, totalizando 26 pontos em 30 possíveis.
* ⚽ **Ataque e Defesa:** A equipe marcou 20 gols — nove deles do astro Mohamed Salah — e sofreu apenas dois, simbolizando a retomada do Egito rumo à elite do futebol mundial. 🛡️🌪️`,
    lastMatches: [
      { opponent: 'Espanha', result: 'D', score: '0-0' },
      { opponent: 'Arábia Saudita', result: 'W', score: '4-0' },
      { opponent: 'Nigéria', result: 'D', score: '0-0' },
      { opponent: 'Senegal', result: 'L', score: '0-1' },
      { opponent: 'Costa do Marfim', result: 'W', score: '3-2' },
    ]
  },
  'IRN': {
    history: `## 🇮🇷✨ IRÃ: O "GENERAL" E A BUSCA PELO MATA-MATA INÉDITO! ✨🇮🇷

🎉 **Sétima Sinfonia Persa!**
O Irã vai para sua sétima Copa do Mundo da FIFA™ com um objetivo claro: chegar ao mata-mata pela primeira vez na história! 🚀🔥 Três vezes campeã continental, a seleção iraniana é uma das potências do futebol asiático, mas ainda busca reeditar esse sucesso no cenário mundial.

Classificada sem dificuldades e contando com uma geração de talentos já firmados na Europa, a seleção chega para o Mundial com condições reais de fazer uma grande campanha em solo norte-americano. 🌏✈️

🧠📋 **O Comandante: Amir Ghalenoei**
Em sua segunda passagem pelo comando, o experiente Ghalenoei é um dos treinadores mais conceituados de seu país. Conhecido como "General" nos tempos de jogador, ele trouxe disciplina e uma mentalidade vencedora para o elenco. 👔🔝

---

### 📅 AGENDA DO IRÃ – GRUPO G 🗓️
Acompanhe os horários da seleção iraniana! ⏰

⚔️ **Rodada 1**
* **Jogo:** 🇮🇷 Irã x Nova Zelândia 🇳🇿
* 📍 **Local:** Los Angeles (EUA) 🇺🇸
* 🕒 **Data/Hora:** 15 de junho | 22h00 *(horário de Brasília)*

⚔️ **Rodada 2**
* **Jogo:** 🇧🇪 Bélgica x Irã 🇮🇷
* 📍 **Local:** Los Angeles (EUA) 🇺🇸
* 🕒 **Data/Hora:** 21 de junho | 16h00 *(horário de Brasília)*

⚔️ **Rodada 3**
* **Jogo:** 🇪🇬 Egito x Irã 🇮🇷
* 📍 **Local:** Seattle (EUA) 🇺🇸
* 🕒 **Data/Hora:** 26 de junho | 0h00 *(madrugada de 27/06 em Brasília)*

---

### 📜 HISTÓRICO NA COPA DO MUNDO 🏆
Uma trajetória de consistência na Ásia:

* 🌍 **Confederação:** AFC (Ásia)
* ⭐ **Melhores Campanhas:** Fase de Grupos (1978, 1998, 2006, 2014, 2018, 2022)
* 🔙 **Primeira Copa:** Argentina 1978
* 🔢 **Participações:** 7 (1978, 1998, 2006, 2014, 2018, 2022, 2026)
* 📊 **Estatísticas:** 18 Jogos | 3 Vitórias ✅ | 4 Empates 🤝 | 11 Derrotas ❌`,
    qualification: `### 🛣️ Como o Irã se classificou para 2026

A campanha foi marcada pelo domínio técnico e tático:

* 🚀 **Passeio na Ásia:** Após empates estratégicos com o Uzbequistão, o Irã atropelou Turcomenistão e Hong Kong com goleadas.
* 🎯 **Astro em Campo:** Mehdi Taremi foi o nome da classificação, garantindo a vaga com dois gols no empate decisivo contra os uzbeques no Estádio Azadi.
* 📈 **Domínio:** Vencendo seis dos seus primeiros oito jogos na terceira fase, confirmou a vaga com antecedência. 🛡️🌪️`,
    lastMatches: [
      { opponent: 'Costa Rica', result: 'W', score: '5-0' },
      { opponent: 'Nigéria', result: 'L', score: '1-2' },
      { opponent: 'Uzbequistão', result: 'D', score: '0-0' },
      { opponent: 'Cabo Verde', result: 'W', score: '0-0' },
      { opponent: 'Tanzânia', result: 'W', score: '2-0' },
    ]
  },
  'NZL': {
    history: `## 🇳🇿✨ NOVA ZELÂNDIA: OS ALL WHITES EM BUSCA DA PRIMEIRA VITÓRIA! ✨🇳🇿

🎉 **A Terceira Aventura Mundial!**
Pela terceira vez na história, a Nova Zelândia vai disputar a Copa do Mundo da FIFA™. Após uma estreia difícil em 1982, os neozelandeses surpreenderam o mundo em 2010, quando terminaram a fase de grupos invictos (com empates contra Itália, Paraguai e Eslováquia), embora não tenham avançado. 🇳🇿⚽

Agora, em 2026, o objetivo é claro: conquistar a inédita primeira vitória e buscar uma classificação histórica para o mata-mata! 🚀🔥

🧠📋 **O Comandante: Darren Bazeley**
Darren Bazeley, ex-jogador com longa trajetória no futebol inglês e neozelandês, assumiu o desafio de liderar esta geração. Com um conhecimento profundo do futebol local e experiência internacional, ele moldou uma equipe competitiva e pronta para causar impacto na América do Norte. 👔🔝

---

### 📅 AGENDA DA NOVA ZELÂNDIA – GRUPO G 🗓️
Acompanhe os All Whites no Grupo G! ⏰

⚔️ **Rodada 1**
* **Jogo:** 🇮🇷 Irã x Nova Zelândia 🇳🇿
* 📍 **Local:** Los Angeles (EUA) 🇺🇸
* 🕒 **Data/Hora:** 15 de junho | 22h00 *(horário de Brasília)*

⚔️ **Rodada 2**
* **Jogo:** 🇳🇿 Nova Zelândia x Egito 🇪🇬
* 📍 **Local:** Vancouver (Canadá) 🇨🇦
* 🕒 **Data/Hora:** 21 de junho | 22h00 *(horário de Brasília)*

⚔️ **Rodada 3**
* **Jogo:** 🇳🇿 Nova Zelândia x Bélgica 🇧🇪
* 📍 **Local:** Vancouver (Canadá) 🇨🇦
* 🕒 **Data/Hora:** 26 de junho | 0h00 *(madrugada de 27/06 em Brasília)*

---

### 📜 HISTÓRICO NA COPA DO MUNDO 🏆
A força da Oceania no cenário global:

* 🌍 **Confederação:** OFC (Oceania)
* ⭐ **Melhores Campanhas:** 1982, 2010 (Fase de Grupos)
* 🔙 **Primeira Copa:** Espanha 1982
* 🔢 **Participações:** 3 (1982, 2010, 2026)
* 📊 **Estatísticas:** 6 Jogos | 0 Vitórias ✅ | 3 Empates 🤝 | 3 Derrotas ❌`,
    qualification: `### 🛣️ Como a Nova Zelândia se classificou para 2026

Pela primeira vez, a OFC contou com uma vaga direta para a Copa do Mundo, e a Nova Zelândia não deu chances aos adversários:

* 🌪️ **Domínio Total:** Vitórias expressivas sobre Taiti (3x0), Vanuatu (8x1) e Samoa (8x0).
* ✅ **Vaga Carimbada:** A classificação foi confirmada com uma goleada de 7x0 sobre Fiji e uma vitória sólida de 3x0 sobre a Nova Caledônia em Auckland.
* 🛡️ **Favoritismo Confirmado:** A equipe mostrou que era o time a ser batido na região, garantindo a primeira vaga direta da história da Oceania. 🇳🇿💪`,
    lastMatches: [
      { opponent: 'Chile', result: 'W', score: '4-1' },
      { opponent: 'Finlândia', result: 'L', score: '0-2' },
      { opponent: 'Equador', result: 'L', score: '0-2' },
      { opponent: 'Colômbia', result: 'L', score: '1-2' },
      { opponent: 'Noruega', result: 'D', score: '1-1' },
    ]
  }
};

const genericOpponents = ['Sérvia', 'Nigéria', 'Japão', 'Coreia do Sul', 'Austrália', 'Gana', 'Camarões', 'Costa Rica', 'Peru', 'Chile', 'Suécia', 'Polônia'];

export function getTeamDetails(teamId: string, teamName: string): TeamDetails {
  const data = specificData[teamId] || {};
  return {
    history: data.history || `A seleção de ${teamName} tem uma história de muita luta e paixão no futebol mundial. A equipe busca surpreender e fazer uma campanha histórica nesta edição do torneio.`,
    qualification: data.qualification || `A equipe de ${teamName} garantiu sua vaga após uma campanha consistente em suas eliminatórias continentais, mostrando força coletiva e superando adversários difíceis.`,
    lastMatches: data.lastMatches || generateRandomMatches(),
    coach: data.coach || { name: 'A definir', nationality: 'N/A', age: 0, tenure: 'N/A', description: 'Informações em breve.' },
    players: data.players || [],
    historyStats: data.historyStats || { participations: 0, totalMatches: 0, wins: 0, losses: 0, draws: 0, titles: 0, bestCampaign: 'N/A' },
    groupMatches: data.groupMatches || [],
    tacticalAnalysis: data.tacticalAnalysis || 'Análise tática em breve.',
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
