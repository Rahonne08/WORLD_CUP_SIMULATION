import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Cache configuration
const CACHE_FILE = path.join('/tmp', 'football_data_cache_v4.json');
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache TTL
const BASE_URL = 'https://api.football-data.org/v4';

interface Telemetry {
  apiStatus: 'Ativo' | 'Não Configurado' | 'Erro Externo' | 'Limite Excedido';
  lastUpdate: string;
  requestsCount: number;
  requestsLimit: number;
  requestsRemaining: number;
  usingMock: boolean;
}

interface CacheStore {
  competition?: any;
  standings?: any;
  matches?: any;
  telemetry: Telemetry;
  timestamps: {
    competition?: number;
    standings?: number;
    matches?: number;
  };
}

// Memory fallback cache in case write permission in /tmp is somehow limited
let memoryCache: CacheStore = {
  telemetry: {
    apiStatus: 'Não Configurado',
    lastUpdate: 'Nunca',
    requestsCount: 0,
    requestsLimit: 10,
    requestsRemaining: 10,
    usingMock: true,
  },
  timestamps: {},
};

// 48 Teams for World Cup 2026 based on initialTeams in lib/store.ts
const INITIAL_TEAMS = [
  // Grupo A
  { id: 'MEX', name: 'México', code: 'MEX', group: 'A', flagUrl: 'https://flagcdn.com/w80/mx.png', ranking: 15 },
  { id: 'RSA', name: 'África do Sul', code: 'RSA', group: 'A', flagUrl: 'https://flagcdn.com/w80/za.png', ranking: 60 },
  { id: 'KOR', name: 'Coreia do Sul', code: 'KOR', group: 'A', flagUrl: 'https://flagcdn.com/w80/kr.png', ranking: 25 },
  { id: 'CZE', name: 'República Tcheca', code: 'CZE', group: 'A', flagUrl: 'https://flagcdn.com/w80/cz.png', ranking: 41 },
  // Grupo B
  { id: 'CAN', name: 'Canadá', code: 'CAN', group: 'B', flagUrl: 'https://flagcdn.com/w80/ca.png', ranking: 30 },
  { id: 'QAT', name: 'Catar', code: 'QAT', group: 'B', flagUrl: 'https://flagcdn.com/w80/qa.png', ranking: 55 },
  { id: 'SUI', name: 'Suíça', code: 'SUI', group: 'B', flagUrl: 'https://flagcdn.com/w80/ch.png', ranking: 19 },
  { id: 'BIH', name: 'Bósnia e Herzegovina', code: 'BIH', group: 'B', flagUrl: 'https://flagcdn.com/w80/ba.png', ranking: 64 },
  // Grupo C
  { id: 'BRA', name: 'Brasil', code: 'BRA', group: 'C', flagUrl: 'https://flagcdn.com/w80/br.png', ranking: 6 },
  { id: 'MAR', name: 'Marrocos', code: 'MAR', group: 'C', flagUrl: 'https://flagcdn.com/w80/ma.png', ranking: 8 },
  { id: 'HAI', name: 'Haiti', code: 'HAI', group: 'C', flagUrl: 'https://flagcdn.com/w80/ht.png', ranking: 83 },
  { id: 'SCO', name: 'Escócia', code: 'SCO', group: 'C', flagUrl: 'https://flagcdn.com/w80/gb-sct.png', ranking: 43 },
  // Grupo D
  { id: 'USA', name: 'EUA', code: 'USA', group: 'D', flagUrl: 'https://flagcdn.com/w80/us.png', ranking: 16 },
  { id: 'PAR', name: 'Paraguai', code: 'PAR', group: 'D', flagUrl: 'https://flagcdn.com/w80/py.png', ranking: 40 },
  { id: 'AUS', name: 'Austrália', code: 'AUS', group: 'D', flagUrl: 'https://flagcdn.com/w80/au.png', ranking: 27 },
  { id: 'TUR', name: 'Turquia', code: 'TUR', group: 'D', flagUrl: 'https://flagcdn.com/w80/tr.png', ranking: 22 },
  // Grupo E
  { id: 'GER', name: 'Alemanha', code: 'GER', group: 'E', flagUrl: 'https://flagcdn.com/w80/de.png', ranking: 10 },
  { id: 'CUW', name: 'Curaçao', code: 'CUW', group: 'E', flagUrl: 'https://flagcdn.com/w80/cw.png', ranking: 82 },
  { id: 'CIV', name: 'Costa do Marfim', code: 'CIV', group: 'E', flagUrl: 'https://flagcdn.com/w80/ci.png', ranking: 34 },
  { id: 'ECU', name: 'Equador', code: 'ECU', group: 'E', flagUrl: 'https://flagcdn.com/w80/ec.png', ranking: 23 },
  // Grupo F
  { id: 'NED', name: 'Holanda', code: 'NED', group: 'F', flagUrl: 'https://flagcdn.com/w80/nl.png', ranking: 7 },
  { id: 'JPN', name: 'Japão', code: 'JPN', group: 'F', flagUrl: 'https://flagcdn.com/w80/jp.png', ranking: 18 },
  { id: 'TUN', name: 'Tunísia', code: 'TUN', group: 'F', flagUrl: 'https://flagcdn.com/w80/tn.png', ranking: 44 },
  { id: 'SWE', name: 'Suécia', code: 'SWE', group: 'F', flagUrl: 'https://flagcdn.com/w80/se.png', ranking: 38 },
  // Grupo G
  { id: 'BEL', name: 'Bélgica', code: 'BEL', group: 'G', flagUrl: 'https://flagcdn.com/w80/be.png', ranking: 9 },
  { id: 'EGY', name: 'Egito', code: 'EGY', group: 'G', flagUrl: 'https://flagcdn.com/w80/eg.png', ranking: 29 },
  { id: 'IRN', name: 'Irã', code: 'IRN', group: 'G', flagUrl: 'https://flagcdn.com/w80/ir.png', ranking: 21 },
  { id: 'NZL', name: 'Nova Zelândia', code: 'NZL', group: 'G', flagUrl: 'https://flagcdn.com/w80/nz.png', ranking: 85 },
  // Grupo H
  { id: 'ESP', name: 'Espanha', code: 'ESP', group: 'H', flagUrl: 'https://flagcdn.com/w80/es.png', ranking: 3 },
  { id: 'CPV', name: 'Cabo Verde', code: 'CPV', group: 'H', flagUrl: 'https://flagcdn.com/w80/cv.png', ranking: 65 },
  { id: 'KSA', name: 'Arábia Saudita', code: 'KSA', group: 'H', flagUrl: 'https://flagcdn.com/w80/sa.png', ranking: 56 },
  { id: 'URU', name: 'Uruguai', code: 'URU', group: 'H', flagUrl: 'https://flagcdn.com/w80/uy.png', ranking: 11 },
  // Grupo I
  { id: 'FRA', name: 'França', code: 'FRA', group: 'I', flagUrl: 'https://flagcdn.com/w80/fr.png', ranking: 1 },
  { id: 'IRQ', name: 'Iraque', code: 'IRQ', group: 'I', flagUrl: 'https://flagcdn.com/w80/iq.png', ranking: 57 },
  { id: 'SEN', name: 'Senegal', code: 'SEN', group: 'I', flagUrl: 'https://flagcdn.com/w80/sn.png', ranking: 14 },
  { id: 'NOR', name: 'Noruega', code: 'NOR', group: 'I', flagUrl: 'https://flagcdn.com/w80/no.png', ranking: 31 },
  // Grupo J
  { id: 'ARG', name: 'Argentina', code: 'ARG', group: 'J', flagUrl: 'https://flagcdn.com/w80/ar.png', ranking: 3 },
  { id: 'ALG', name: 'Argélia', code: 'ALG', group: 'J', flagUrl: 'https://flagcdn.com/w80/dz.png', ranking: 28 },
  { id: 'AUT', name: 'Áustria', code: 'AUT', group: 'J', flagUrl: 'https://flagcdn.com/w80/at.png', ranking: 24 },
  { id: 'JOR', name: 'Jordânia', code: 'JOR', group: 'J', flagUrl: 'https://flagcdn.com/w80/jo.png', ranking: 63 },
  // Grupo K
  { id: 'COD', name: 'RD Congo', code: 'COD', group: 'K', flagUrl: 'https://flagcdn.com/w80/cd.png', ranking: 46 },
  { id: 'POR', name: 'Portugal', code: 'POR', group: 'K', flagUrl: 'https://flagcdn.com/w80/pt.png', ranking: 5 },
  { id: 'UZB', name: 'Uzbequistão', code: 'UZB', group: 'K', flagUrl: 'https://flagcdn.com/w80/uz.png', ranking: 50 },
  { id: 'COL', name: 'Colômbia', code: 'COL', group: 'K', flagUrl: 'https://flagcdn.com/w80/co.png', ranking: 13 },
  // Grupo L
  { id: 'ENG', name: 'Inglaterra', code: 'ENG', group: 'L', flagUrl: 'https://flagcdn.com/w80/gb-eng.png', ranking: 4 },
  { id: 'CRO', name: 'Croácia', code: 'CRO', group: 'L', flagUrl: 'https://flagcdn.com/w80/hr.png', ranking: 11 },
  { id: 'GHA', name: 'Gana', code: 'GHA', group: 'L', flagUrl: 'https://flagcdn.com/w80/gh.png', ranking: 74 },
  { id: 'PAN', name: 'Panamá', code: 'PAN', group: 'L', flagUrl: 'https://flagcdn.com/w80/pa.png', ranking: 33 },
];

/**
 * Reads full cache from filesystem
 */
function readCache(): CacheStore {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const dataStr = fs.readFileSync(CACHE_FILE, 'utf-8');
      const store = JSON.parse(dataStr);
      // Synchronize with memory
      memoryCache = store;
      return store;
    }
  } catch (err) {
    console.error('Failed to read filesystem cache, using memory:', err);
  }
  return memoryCache;
}

/**
 * Writes cache back to filesystem and memory
 */
function saveCache(store: CacheStore) {
  memoryCache = store;
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(store, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to write filesystem cache:', err);
  }
}

/**
 * Generates beautiful, highly realistic data for World Cup 2026 matches
 */
function generateMockMatches() {
  const matches: any[] = [];
  const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  
  const stadiums: Record<string, string[]> = {
    A: ['Estádio Azteca, Cidade do México', 'Estádio Akron, Guadalajara', 'Lumen Field, Seattle'],
    B: ['BMO Field, Toronto', 'BC Place, Vancouver', 'MetLife Stadium, Nova York'],
    C: ['SoFi Stadium, Los Angeles', 'Levi\'s Stadium, San Francisco', 'AT&T Stadium, Dallas'],
    D: ['Arrowhead Stadium, Kansas City', 'Hard Rock Stadium, Miami', 'Mercedes-Benz Stadium, Atlanta'],
    E: ['Lincoln Financial Field, Filadélfia', 'Gillette Stadium, Boston', 'NRG Stadium, Houston'],
    F: ['Estádio BBVA, Monterrey', 'MetLife Stadium, Nova York', 'Lumen Field, Seattle'],
    G: ['SoFi Stadium, Los Angeles', 'BMO Field, Toronto', 'BC Place, Vancouver'],
    H: ['AT&T Stadium, Dallas', 'Hard Rock Stadium, Miami', 'Arrowhead Stadium, Kansas City'],
    I: ['Mercedes-Benz Stadium, Atlanta', 'Levi\'s Stadium, San Francisco', 'NRG Stadium, Houston'],
    J: ['Estádio Azteca, Cidade do México', 'Lincoln Financial Field, Filadélfia', 'Gillette Stadium, Boston'],
    K: ['Estádio Akron, Guadalajara', 'Lumen Field, Seattle', 'AT&T Stadium, Dallas'],
    L: ['BMO Field, Toronto', 'MetLife Stadium, Nova York', 'SoFi Stadium, Los Angeles']
  };

  let idCounter = 400000;
  
  groups.forEach((group, groupIdx) => {
    const groupTeams = INITIAL_TEAMS.filter(t => t.group === group);
    if (groupTeams.length === 4) {
      const groupStadiums = stadiums[group] || ['MetLife Stadium, Nova York'];
      
      // We will spread the matches over realistic dates in June 2026
      const dates = [
        `2026-06-${11 + groupIdx}T16:00:00Z`,
        `2026-06-${11 + groupIdx}T19:00:00Z`,
        `2026-06-${17 + groupIdx}T15:00:00Z`,
        `2026-06-${17 + groupIdx}T18:00:00Z`,
        `2026-06-${23 + groupIdx}T17:00:00Z`,
        `2026-06-${23 + groupIdx}T20:00:00Z`
      ];

      // Simulated realistic results for already "played" matches or upcoming ones
      // Since current time is June 2026, some matches might be live or finished!
      // Let's check current local time (June 2, 2026). So today is BEFORE the Cup starts! All matches are TIMED.
      // Wait, let's look at the current time: 2026-06-02T22:56:04Z. The Cup starts June 11, 2026, so all are upcoming (TIMED).
      // This is perfect! Let's mock results if the user wants to see some simulated ones, but TIMED is standard.
      // Wait, we can also simulate a few pre-loaded friendly results if they are before June 11, or just keep them TIMED.

      // Round 1
      matches.push(createMockMatch(
        idCounter++, dates[0], 'TIMED', 1, 'GROUP_STAGE', `GROUP_${group}`,
        groupTeams[0], groupTeams[1], groupStadiums[0]
      ));
      matches.push(createMockMatch(
        idCounter++, dates[1], 'TIMED', 1, 'GROUP_STAGE', `GROUP_${group}`,
        groupTeams[2], groupTeams[3], groupStadiums[1]
      ));
      
      // Round 2
      matches.push(createMockMatch(
        idCounter++, dates[2], 'TIMED', 2, 'GROUP_STAGE', `GROUP_${group}`,
        groupTeams[0], groupTeams[2], groupStadiums[2]
      ));
      matches.push(createMockMatch(
        idCounter++, dates[3], 'TIMED', 2, 'GROUP_STAGE', `GROUP_${group}`,
        groupTeams[3], groupTeams[1], groupStadiums[0]
      ));

      // Round 3
      matches.push(createMockMatch(
        idCounter++, dates[4], 'TIMED', 3, 'GROUP_STAGE', `GROUP_${group}`,
        groupTeams[3], groupTeams[0], groupStadiums[1]
      ));
      matches.push(createMockMatch(
        idCounter++, dates[5], 'TIMED', 3, 'GROUP_STAGE', `GROUP_${group}`,
        groupTeams[1], groupTeams[2], groupStadiums[2]
      ));
    }
  });

  // Let's add a few knockout phases matches (from Round of 32 onwards) so it has eliminatories!
  // These will be TIMED too
  let r32Id = 500000;
  for (let i = 1; i <= 16; i++) {
    matches.push({
      id: r32Id++,
      utcDate: `2026-06-${28 + Math.floor((i - 1) / 3)}T18:00:00Z`,
      status: 'TIMED',
      matchday: null,
      stage: 'LAST_32',
      group: null,
      homeTeam: { name: `Vencedor Grupo ${String.fromCharCode(65 + ((i - 1) % 12))}`, crest: 'https://flagcdn.com/w80/un.png' },
      awayTeam: { name: `2º Colocado Grupo ${String.fromCharCode(65 + ((i + 1) % 12))}`, crest: 'https://flagcdn.com/w80/un.png' },
      score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null } },
      venue: i % 2 === 0 ? 'SoFi Stadium, Los Angeles' : 'MetLife Stadium, Nova York'
    });
  }

  // Round of 16
  for (let i = 1; i <= 8; i++) {
    matches.push({
      id: r32Id++,
      utcDate: `2026-07-${4 + Math.floor((i - 1) / 2)}T19:00:00Z`,
      status: 'TIMED',
      matchday: null,
      stage: 'LAST_16',
      group: null,
      homeTeam: { name: `Vencedor R32-${i * 2 - 1}`, crest: 'https://flagcdn.com/w80/un.png' },
      awayTeam: { name: `Vencedor R32-${i * 2}`, crest: 'https://flagcdn.com/w80/un.png' },
      score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null } },
      venue: 'AT&T Stadium, Dallas'
    });
  }

  return matches;
}

function createMockMatch(id: number, date: string, status: string, matchday: number, stage: string, group: string, home: any, away: any, venue: string) {
  return {
    id,
    utcDate: date,
    status,
    matchday,
    stage,
    group,
    homeTeam: {
      id: home.code,
      name: home.name,
      code: home.code,
      crest: home.flagUrl
    },
    awayTeam: {
      id: away.code,
      name: away.name,
      code: away.code,
      crest: away.flagUrl
    },
    score: {
      winner: null,
      duration: 'REGULAR',
      fullTime: {
        home: null,
        away: null
      }
    },
    venue
  };
}

/**
 * Generates beautiful, highly realistic data for World Cup 2026 standings
 */
function generateMockStandings() {
  const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  const standings = groups.map(g => {
    const groupTeams = INITIAL_TEAMS.filter(t => t.group === g);
    // Sort mock standings alphabetically or by ranking for starting state
    return {
      stage: 'GROUP_STAGE',
      type: 'TOTAL',
      group: `GROUP_${g}`,
      table: groupTeams.map((team, index) => ({
        position: index + 1,
        team: {
          id: team.code,
          name: team.name,
          code: team.code,
          crest: team.flagUrl
        },
        playedGames: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0
      }))
    };
  });

  return { standings };
}

function generateMockCompetition() {
  return {
    id: 2000,
    name: 'FIFA World Cup 2026',
    code: 'WC',
    emblem: 'https://flagcdn.com/w80/un.png',
    currentSeason: {
      id: 1382,
      startDate: '2026-06-11',
      endDate: '2026-07-19',
      currentMatchday: 1
    }
  };
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const endpoint = searchParams.get('endpoint'); // competition, standings, matches, telemetry
  const forceRefresh = searchParams.get('refresh') === 'true';

  let cacheStore = readCache();
  const apiKey = process.env.FOOTBALL_DATA_API_KEY;

  if (endpoint === 'telemetry') {
    return NextResponse.json(cacheStore.telemetry);
  }

  // Validate endpoint
  if (!endpoint || !['competition', 'standings', 'matches'].includes(endpoint)) {
    return NextResponse.json({ error: 'Endpoint invá¡lido. Use competition, standings ou matches.' }, { status: 400 });
  }

  // Check if cache is still valid
  const now = Date.now();
  const lastFetched = cacheStore.timestamps[endpoint as 'competition' | 'standings' | 'matches'] || 0;
  const isCacheExpired = (now - lastFetched) > CACHE_TTL_MS;

  if (!forceRefresh && !isCacheExpired && cacheStore[endpoint as 'competition' | 'standings' | 'matches']) {
    // Return cached data
    return NextResponse.json(cacheStore[endpoint as 'competition' | 'standings' | 'matches']);
  }

  // API is not configured -> return beautiful high-fidelity mock fallback data!
  if (!apiKey || apiKey.trim() === '') {
    cacheStore.telemetry = {
      apiStatus: 'Não Configurado',
      lastUpdate: new Date().toLocaleString('pt-BR'),
      requestsCount: cacheStore.telemetry.requestsCount,
      requestsLimit: 10,
      requestsRemaining: 10,
      usingMock: true
    };

    if (endpoint === 'competition') cacheStore.competition = generateMockCompetition();
    if (endpoint === 'standings') cacheStore.standings = generateMockStandings();
    if (endpoint === 'matches') cacheStore.matches = { matches: generateMockMatches() };
    
    cacheStore.timestamps[endpoint as 'competition' | 'standings' | 'matches'] = now;
    saveCache(cacheStore);

    return NextResponse.json(cacheStore[endpoint as 'competition' | 'standings' | 'matches']);
  }

  // Fetch from the real external football-data.org API
  try {
    const url = `${BASE_URL}/competitions/WC${endpoint === 'competition' ? '' : '/' + endpoint}`;
    cacheStore.telemetry.requestsCount++;

    const res = await fetch(url, {
      headers: {
        'X-Auth-Token': apiKey
      },
      next: { revalidate: 300 } // Next.js level caching
    });

    // Capture limit information headers
    const reqLimit = res.headers.get('X-Requests-Available-Minute');
    if (reqLimit) {
      cacheStore.telemetry.requestsRemaining = parseInt(reqLimit, 10);
    } else {
      cacheStore.telemetry.requestsRemaining = Math.max(0, cacheStore.telemetry.requestsRemaining - 1);
    }

    if (res.status === 429) {
      // Rate limit triggered!
      cacheStore.telemetry.apiStatus = 'Limite Excedido';
      saveCache(cacheStore);

      // Return cached data if exists, otherwise fallback to mock
      if (cacheStore[endpoint as 'competition' | 'standings' | 'matches']) {
        return NextResponse.json(cacheStore[endpoint as 'competition' | 'standings' | 'matches']);
      }
      
      // Fallback
      let fallbackData;
      if (endpoint === 'competition') fallbackData = generateMockCompetition();
      if (endpoint === 'standings') fallbackData = generateMockStandings();
      if (endpoint === 'matches') fallbackData = { matches: generateMockMatches() };
      return NextResponse.json(fallbackData);
    }

    if (!res.ok) {
      throw new Error(`Erro HTTP ${res.status}: ${res.statusText}`);
    }

    const apiResponseData = await res.json();

    // Store in cache
    cacheStore[endpoint as 'competition' | 'standings' | 'matches'] = apiResponseData;
    cacheStore.timestamps[endpoint as 'competition' | 'standings' | 'matches'] = now;
    cacheStore.telemetry.apiStatus = 'Ativo';
    cacheStore.telemetry.lastUpdate = new Date().toLocaleString('pt-BR');
    cacheStore.telemetry.usingMock = false;

    saveCache(cacheStore);

    return NextResponse.json(apiResponseData);
  } catch (error: any) {
    console.error(`Falha ao buscar dados na Football-Data API (${endpoint}):`, error);
    
    // Log telemetry error status gracefully
    cacheStore.telemetry.apiStatus = 'Erro Externo';
    saveCache(cacheStore);

    // Fallback gracefully to cache or high fidelity mock so client never breaks
    if (cacheStore[endpoint as 'competition' | 'standings' | 'matches']) {
      return NextResponse.json(cacheStore[endpoint as 'competition' | 'standings' | 'matches']);
    }

    let fallbackData;
    if (endpoint === 'competition') fallbackData = generateMockCompetition();
    if (endpoint === 'standings') fallbackData = generateMockStandings();
    if (endpoint === 'matches') fallbackData = { matches: generateMockMatches() };
    
    return NextResponse.json(fallbackData);
  }
}
