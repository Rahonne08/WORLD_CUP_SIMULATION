import { create } from 'zustand';

export interface Team {
  id: string;
  name: string;
  code: string;
  group: string;
  flagUrl: string;
  ranking: number;
}

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore: number | null;
  awayScore: number | null;
  group: string;
}

export interface TeamStats {
  team: Team;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface KnockoutMatch {
  id: string;
  round: 'R32' | 'R16' | 'QF' | 'SF' | 'F';
  homeTeamId: string | null;
  awayTeamId: string | null;
  homeScore: number | null;
  awayScore: number | null;
  winnerId: string | null;
  nextMatchId: string | null;
  isHomeNext: boolean;
}

export const initialTeams: Team[] = [
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

export const generateInitialMatches = (): Match[] => {
  const matches: Match[] = [];
  const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

  groups.forEach(group => {
    const groupTeams = initialTeams.filter(t => t.group === group);
    if (groupTeams.length === 4) {
      // Rodada 1
      matches.push({ id: `${group}-1`, homeTeamId: groupTeams[0].id, awayTeamId: groupTeams[1].id, homeScore: null, awayScore: null, group });
      matches.push({ id: `${group}-2`, homeTeamId: groupTeams[2].id, awayTeamId: groupTeams[3].id, homeScore: null, awayScore: null, group });
      // Rodada 2
      matches.push({ id: `${group}-3`, homeTeamId: groupTeams[0].id, awayTeamId: groupTeams[2].id, homeScore: null, awayScore: null, group });
      matches.push({ id: `${group}-4`, homeTeamId: groupTeams[3].id, awayTeamId: groupTeams[1].id, homeScore: null, awayScore: null, group });
      // Rodada 3
      matches.push({ id: `${group}-5`, homeTeamId: groupTeams[3].id, awayTeamId: groupTeams[0].id, homeScore: null, awayScore: null, group });
      matches.push({ id: `${group}-6`, homeTeamId: groupTeams[1].id, awayTeamId: groupTeams[2].id, homeScore: null, awayScore: null, group });
    }
  });

  return matches;
};

export const generateInitialKnockout = (): KnockoutMatch[] => {
  const matches: KnockoutMatch[] = [];

  // R32 (16-avos)
  for (let i = 1; i <= 16; i++) {
    matches.push({
      id: `R32-${i}`, round: 'R32',
      homeTeamId: null, awayTeamId: null,
      homeScore: null, awayScore: null,
      winnerId: null,
      nextMatchId: `R16-${Math.ceil(i / 2)}`,
      isHomeNext: i % 2 !== 0
    });
  }

  // R16 (Oitavas)
  for (let i = 1; i <= 8; i++) {
    matches.push({
      id: `R16-${i}`, round: 'R16',
      homeTeamId: null, awayTeamId: null,
      homeScore: null, awayScore: null,
      winnerId: null,
      nextMatchId: `QF-${Math.ceil(i / 2)}`,
      isHomeNext: i % 2 !== 0
    });
  }

  // QF (Quartas)
  for (let i = 1; i <= 4; i++) {
    matches.push({
      id: `QF-${i}`, round: 'QF',
      homeTeamId: null, awayTeamId: null,
      homeScore: null, awayScore: null,
      winnerId: null,
      nextMatchId: `SF-${Math.ceil(i / 2)}`,
      isHomeNext: i % 2 !== 0
    });
  }

  // SF (Semifinais)
  for (let i = 1; i <= 2; i++) {
    matches.push({
      id: `SF-${i}`, round: 'SF',
      homeTeamId: null, awayTeamId: null,
      homeScore: null, awayScore: null,
      winnerId: null,
      nextMatchId: `F-1`,
      isHomeNext: i % 2 !== 0
    });
  }

  // F (Final)
  matches.push({
    id: `F-1`, round: 'F',
    homeTeamId: null, awayTeamId: null,
    homeScore: null, awayScore: null,
    winnerId: null,
    nextMatchId: null,
    isHomeNext: false
  });

  return matches;
};

interface AppState {
  teams: Team[];
  matches: Match[];
  knockoutMatches: KnockoutMatch[];
  championId: string | null;
  updateMatchScore: (matchId: string, homeScore: number | null, awayScore: number | null) => void;
  selectKnockoutWinner: (matchId: string, winnerId: string) => void;
  generateKnockoutStage: () => void;
  resetSimulation: () => void;
  randomizeGroupMatches: () => void;
  getGroupStats: (group: string) => TeamStats[];
}

export const useAppStore = create<AppState>((set, get) => ({
  teams: initialTeams,
  matches: generateInitialMatches(),
  knockoutMatches: generateInitialKnockout(),
  championId: null,
  updateMatchScore: (matchId, homeScore, awayScore) => set((state) => ({
    matches: state.matches.map(m => m.id === matchId ? { ...m, homeScore, awayScore } : m)
  })),
  selectKnockoutWinner: (matchId, winnerId) => set((state) => {
    const newMatches = [...state.knockoutMatches];
    const matchIndex = newMatches.findIndex(m => m.id === matchId);
    if (matchIndex === -1) return state;

    const oldMatch = newMatches[matchIndex];
    
    // Generate random scores if not already set or if winner changed
    let homeScore = oldMatch.homeScore;
    let awayScore = oldMatch.awayScore;
    
    if (winnerId === oldMatch.homeTeamId) {
      homeScore = Math.floor(Math.random() * 3) + 1;
      awayScore = Math.floor(Math.random() * homeScore);
    } else {
      awayScore = Math.floor(Math.random() * 3) + 1;
      homeScore = Math.floor(Math.random() * awayScore);
    }

    const match = { ...oldMatch, winnerId, homeScore, awayScore };
    newMatches[matchIndex] = match;

    let championId = state.championId;

    if (match.nextMatchId) {
      const nextMatchIndex = newMatches.findIndex(m => m.id === match.nextMatchId);
      if (nextMatchIndex !== -1) {
        const nextMatch = { ...newMatches[nextMatchIndex] };
        if (match.isHomeNext) nextMatch.homeTeamId = winnerId;
        else nextMatch.awayTeamId = winnerId;
        nextMatch.winnerId = null; // Reset next match winner if it was set
        newMatches[nextMatchIndex] = nextMatch;
      }
    } else if (match.round === 'F') {
      championId = winnerId;
    }

    return { knockoutMatches: newMatches, championId };
  }),
  generateKnockoutStage: () => set((state) => {
    const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    const firsts: Record<string, string> = {};
    const seconds: Record<string, string> = {};
    const thirds: TeamStats[] = [];

    groups.forEach(g => {
      const stats = state.getGroupStats(g);
      if (stats.length >= 3) {
        firsts[g] = stats[0].team.id;
        seconds[g] = stats[1].team.id;
        thirds.push(stats[2]);
      }
    });

    thirds.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
      if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
      return a.team.name.localeCompare(b.team.name);
    });

    const bestThirds = thirds.slice(0, 8);
    
    const newKnockout = generateInitialKnockout();

    const allTeams = [
      ...Object.entries(firsts).map(([g, id]) => ({ id, group: g })),
      ...Object.entries(seconds).map(([g, id]) => ({ id, group: g })),
      ...bestThirds.map(t => ({ id: t.team.id, group: t.team.group }))
    ];

    const setMatch = (id: string, home: string | null, away: string | null) => {
      const m = newKnockout.find(x => x.id === id);
      if (m) { m.homeTeamId = home; m.awayTeamId = away; }
    };

    for (let i = 0; i < 16; i++) {
      const home = allTeams[i * 2];
      const away = allTeams[i * 2 + 1];
      setMatch(`R32-${i + 1}`, home?.id || null, away?.id || null);
    }

    return { knockoutMatches: newKnockout, championId: null };
  }),
  resetSimulation: () => set({ matches: generateInitialMatches(), knockoutMatches: generateInitialKnockout(), championId: null }),
  randomizeGroupMatches: () => set((state) => {
    const newMatches = state.matches.map(m => ({
      ...m,
      homeScore: Math.floor(Math.random() * 4),
      awayScore: Math.floor(Math.random() * 4)
    }));
    return { matches: newMatches };
  }),
  getGroupStats: (group: string) => {
    const { teams, matches } = get();
    const groupTeams = teams.filter(t => t.group === group);
    const groupMatches = matches.filter(m => m.group === group && m.homeScore !== null && m.awayScore !== null);

    const statsMap: Record<string, TeamStats> = {};
    groupTeams.forEach(team => {
      statsMap[team.id] = {
        team,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0,
      };
    });

    groupMatches.forEach(match => {
      const homeStats = statsMap[match.homeTeamId];
      const awayStats = statsMap[match.awayTeamId];

      if (homeStats && awayStats && match.homeScore !== null && match.awayScore !== null) {
        homeStats.played += 1;
        awayStats.played += 1;

        homeStats.goalsFor += match.homeScore;
        homeStats.goalsAgainst += match.awayScore;
        awayStats.goalsFor += match.awayScore;
        awayStats.goalsAgainst += match.homeScore;

        if (match.homeScore > match.awayScore) {
          homeStats.won += 1;
          homeStats.points += 3;
          awayStats.lost += 1;
        } else if (match.homeScore < match.awayScore) {
          awayStats.won += 1;
          awayStats.points += 3;
          homeStats.lost += 1;
        } else {
          homeStats.drawn += 1;
          awayStats.drawn += 1;
          homeStats.points += 1;
          awayStats.points += 1;
        }
      }
    });

    // Calculate goal difference and sort
    const statsList = Object.values(statsMap).map(stats => {
      stats.goalDifference = stats.goalsFor - stats.goalsAgainst;
      return stats;
    });

    statsList.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
      if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
      // Confronto direto (simplificado para o escopo, idealmente verificaria a partida entre eles)
      return a.team.name.localeCompare(b.team.name);
    });

    return statsList;
  }
}));
