import { create } from 'zustand';

export interface Team {
  id: string;
  name: string;
  code: string;
  group: string;
  flagUrl: string;
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
  homePenalties: number | null;
  awayPenalties: number | null;
  nextMatchId: string | null;
  isHomeNext: boolean;
}

export const initialTeams: Team[] = [
  // Grupo A
  { id: 'MEX', name: 'México', code: 'MEX', group: 'A', flagUrl: 'https://flagcdn.com/w80/mx.png' },
  { id: 'RSA', name: 'África do Sul', code: 'RSA', group: 'A', flagUrl: 'https://flagcdn.com/w80/za.png' },
  { id: 'KOR', name: 'Coreia do Sul', code: 'KOR', group: 'A', flagUrl: 'https://flagcdn.com/w80/kr.png' },
  { id: 'CZE', name: 'República Tcheca', code: 'CZE', group: 'A', flagUrl: 'https://flagcdn.com/w80/cz.png' },
  // Grupo B
  { id: 'CAN', name: 'Canadá', code: 'CAN', group: 'B', flagUrl: 'https://flagcdn.com/w80/ca.png' },
  { id: 'QAT', name: 'Catar', code: 'QAT', group: 'B', flagUrl: 'https://flagcdn.com/w80/qa.png' },
  { id: 'SUI', name: 'Suíça', code: 'SUI', group: 'B', flagUrl: 'https://flagcdn.com/w80/ch.png' },
  { id: 'BIH', name: 'Bósnia e Herzegovina', code: 'BIH', group: 'B', flagUrl: 'https://flagcdn.com/w80/ba.png' },
  // Grupo C
  { id: 'BRA', name: 'Brasil', code: 'BRA', group: 'C', flagUrl: 'https://flagcdn.com/w80/br.png' },
  { id: 'MAR', name: 'Marrocos', code: 'MAR', group: 'C', flagUrl: 'https://flagcdn.com/w80/ma.png' },
  { id: 'HAI', name: 'Haiti', code: 'HAI', group: 'C', flagUrl: 'https://flagcdn.com/w80/ht.png' },
  { id: 'SCO', name: 'Escócia', code: 'SCO', group: 'C', flagUrl: 'https://flagcdn.com/w80/gb-sct.png' },
  // Grupo D
  { id: 'USA', name: 'EUA', code: 'USA', group: 'D', flagUrl: 'https://flagcdn.com/w80/us.png' },
  { id: 'PAR', name: 'Paraguai', code: 'PAR', group: 'D', flagUrl: 'https://flagcdn.com/w80/py.png' },
  { id: 'AUS', name: 'Austrália', code: 'AUS', group: 'D', flagUrl: 'https://flagcdn.com/w80/au.png' },
  { id: 'TUR', name: 'Turquia', code: 'TUR', group: 'D', flagUrl: 'https://flagcdn.com/w80/tr.png' },
  // Grupo E
  { id: 'GER', name: 'Alemanha', code: 'GER', group: 'E', flagUrl: 'https://flagcdn.com/w80/de.png' },
  { id: 'CUW', name: 'Curaçao', code: 'CUW', group: 'E', flagUrl: 'https://flagcdn.com/w80/cw.png' },
  { id: 'CIV', name: 'Costa do Marfim', code: 'CIV', group: 'E', flagUrl: 'https://flagcdn.com/w80/ci.png' },
  { id: 'ECU', name: 'Equador', code: 'ECU', group: 'E', flagUrl: 'https://flagcdn.com/w80/ec.png' },
  // Grupo F
  { id: 'NED', name: 'Holanda', code: 'NED', group: 'F', flagUrl: 'https://flagcdn.com/w80/nl.png' },
  { id: 'JPN', name: 'Japão', code: 'JPN', group: 'F', flagUrl: 'https://flagcdn.com/w80/jp.png' },
  { id: 'TUN', name: 'Tunísia', code: 'TUN', group: 'F', flagUrl: 'https://flagcdn.com/w80/tn.png' },
  { id: 'SWE', name: 'Suécia', code: 'SWE', group: 'F', flagUrl: 'https://flagcdn.com/w80/se.png' },
  // Grupo G
  { id: 'BEL', name: 'Bélgica', code: 'BEL', group: 'G', flagUrl: 'https://flagcdn.com/w80/be.png' },
  { id: 'EGY', name: 'Egito', code: 'EGY', group: 'G', flagUrl: 'https://flagcdn.com/w80/eg.png' },
  { id: 'IRN', name: 'Irã', code: 'IRN', group: 'G', flagUrl: 'https://flagcdn.com/w80/ir.png' },
  { id: 'NZL', name: 'Nova Zelândia', code: 'NZL', group: 'G', flagUrl: 'https://flagcdn.com/w80/nz.png' },
  // Grupo H
  { id: 'ESP', name: 'Espanha', code: 'ESP', group: 'H', flagUrl: 'https://flagcdn.com/w80/es.png' },
  { id: 'CPV', name: 'Cabo Verde', code: 'CPV', group: 'H', flagUrl: 'https://flagcdn.com/w80/cv.png' },
  { id: 'KSA', name: 'Arábia Saudita', code: 'KSA', group: 'H', flagUrl: 'https://flagcdn.com/w80/sa.png' },
  { id: 'URU', name: 'Uruguai', code: 'URU', group: 'H', flagUrl: 'https://flagcdn.com/w80/uy.png' },
  // Grupo I
  { id: 'FRA', name: 'França', code: 'FRA', group: 'I', flagUrl: 'https://flagcdn.com/w80/fr.png' },
  { id: 'IRQ', name: 'Iraque', code: 'IRQ', group: 'I', flagUrl: 'https://flagcdn.com/w80/iq.png' },
  { id: 'SEN', name: 'Senegal', code: 'SEN', group: 'I', flagUrl: 'https://flagcdn.com/w80/sn.png' },
  { id: 'NOR', name: 'Noruega', code: 'NOR', group: 'I', flagUrl: 'https://flagcdn.com/w80/no.png' },
  // Grupo J
  { id: 'ARG', name: 'Argentina', code: 'ARG', group: 'J', flagUrl: 'https://flagcdn.com/w80/ar.png' },
  { id: 'ALG', name: 'Argélia', code: 'ALG', group: 'J', flagUrl: 'https://flagcdn.com/w80/dz.png' },
  { id: 'AUT', name: 'Áustria', code: 'AUT', group: 'J', flagUrl: 'https://flagcdn.com/w80/at.png' },
  { id: 'JOR', name: 'Jordânia', code: 'JOR', group: 'J', flagUrl: 'https://flagcdn.com/w80/jo.png' },
  // Grupo K
  { id: 'COD', name: 'RD Congo', code: 'COD', group: 'K', flagUrl: 'https://flagcdn.com/w80/cd.png' },
  { id: 'POR', name: 'Portugal', code: 'POR', group: 'K', flagUrl: 'https://flagcdn.com/w80/pt.png' },
  { id: 'UZB', name: 'Uzbequistão', code: 'UZB', group: 'K', flagUrl: 'https://flagcdn.com/w80/uz.png' },
  { id: 'COL', name: 'Colômbia', code: 'COL', group: 'K', flagUrl: 'https://flagcdn.com/w80/co.png' },
  // Grupo L
  { id: 'ENG', name: 'Inglaterra', code: 'ENG', group: 'L', flagUrl: 'https://flagcdn.com/w80/gb-eng.png' },
  { id: 'CRO', name: 'Croácia', code: 'CRO', group: 'L', flagUrl: 'https://flagcdn.com/w80/hr.png' },
  { id: 'GHA', name: 'Gana', code: 'GHA', group: 'L', flagUrl: 'https://flagcdn.com/w80/gh.png' },
  { id: 'PAN', name: 'Panamá', code: 'PAN', group: 'L', flagUrl: 'https://flagcdn.com/w80/pa.png' },
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
      homeScore: null, awayScore: null, homePenalties: null, awayPenalties: null,
      nextMatchId: `R16-${Math.ceil(i / 2)}`,
      isHomeNext: i % 2 !== 0
    });
  }

  // R16 (Oitavas)
  for (let i = 1; i <= 8; i++) {
    matches.push({
      id: `R16-${i}`, round: 'R16',
      homeTeamId: null, awayTeamId: null,
      homeScore: null, awayScore: null, homePenalties: null, awayPenalties: null,
      nextMatchId: `QF-${Math.ceil(i / 2)}`,
      isHomeNext: i % 2 !== 0
    });
  }

  // QF (Quartas)
  for (let i = 1; i <= 4; i++) {
    matches.push({
      id: `QF-${i}`, round: 'QF',
      homeTeamId: null, awayTeamId: null,
      homeScore: null, awayScore: null, homePenalties: null, awayPenalties: null,
      nextMatchId: `SF-${Math.ceil(i / 2)}`,
      isHomeNext: i % 2 !== 0
    });
  }

  // SF (Semifinais)
  for (let i = 1; i <= 2; i++) {
    matches.push({
      id: `SF-${i}`, round: 'SF',
      homeTeamId: null, awayTeamId: null,
      homeScore: null, awayScore: null, homePenalties: null, awayPenalties: null,
      nextMatchId: `F-1`,
      isHomeNext: i % 2 !== 0
    });
  }

  // F (Final)
  matches.push({
    id: `F-1`, round: 'F',
    homeTeamId: null, awayTeamId: null,
    homeScore: null, awayScore: null, homePenalties: null, awayPenalties: null,
    nextMatchId: null,
    isHomeNext: false
  });

  return matches;
};

interface AppState {
  teams: Team[];
  matches: Match[];
  knockoutMatches: KnockoutMatch[];
  updateMatchScore: (matchId: string, homeScore: number | null, awayScore: number | null) => void;
  updateKnockoutScore: (matchId: string, homeScore: number | null, awayScore: number | null, homePenalties: number | null, awayPenalties: number | null) => void;
  generateKnockoutStage: () => void;
  resetSimulation: () => void;
  getGroupStats: (group: string) => TeamStats[];
}

export const useAppStore = create<AppState>((set, get) => ({
  teams: initialTeams,
  matches: generateInitialMatches(),
  knockoutMatches: generateInitialKnockout(),
  updateMatchScore: (matchId, homeScore, awayScore) => set((state) => ({
    matches: state.matches.map(m => m.id === matchId ? { ...m, homeScore, awayScore } : m)
  })),
  updateKnockoutScore: (matchId, homeScore, awayScore, homePenalties, awayPenalties) => set((state) => {
    const newMatches = [...state.knockoutMatches];
    const matchIndex = newMatches.findIndex(m => m.id === matchId);
    if (matchIndex === -1) return state;

    const match = { ...newMatches[matchIndex], homeScore, awayScore, homePenalties, awayPenalties };
    newMatches[matchIndex] = match;

    let winnerId: string | null = null;
    if (homeScore !== null && awayScore !== null) {
      if (homeScore > awayScore) winnerId = match.homeTeamId;
      else if (awayScore > homeScore) winnerId = match.awayTeamId;
      else if (homePenalties !== null && awayPenalties !== null) {
        if (homePenalties > awayPenalties) winnerId = match.homeTeamId;
        else if (awayPenalties > homePenalties) winnerId = match.awayTeamId;
      }
    }

    if (match.nextMatchId) {
      const nextMatchIndex = newMatches.findIndex(m => m.id === match.nextMatchId);
      if (nextMatchIndex !== -1) {
        const nextMatch = { ...newMatches[nextMatchIndex] };
        const currentWinnerInNextMatch = match.isHomeNext ? nextMatch.homeTeamId : nextMatch.awayTeamId;
        
        if (currentWinnerInNextMatch !== winnerId) {
          if (match.isHomeNext) {
            nextMatch.homeTeamId = winnerId;
          } else {
            nextMatch.awayTeamId = winnerId;
          }
          nextMatch.homeScore = null;
          nextMatch.awayScore = null;
          nextMatch.homePenalties = null;
          nextMatch.awayPenalties = null;
          newMatches[nextMatchIndex] = nextMatch;
        }
      }
    }

    return { knockoutMatches: newMatches };
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

    const bestThirds = thirds.slice(0, 8).map(t => t.team.id);
    const newKnockout = generateInitialKnockout();

    const setMatch = (id: string, home: string | null, away: string | null) => {
      const m = newKnockout.find(x => x.id === id);
      if (m) { m.homeTeamId = home; m.awayTeamId = away; }
    };

    const getT = (arr: string[], idx: number) => arr[idx] || null;

    setMatch('R32-1', firsts['A'], getT(bestThirds, 0));
    setMatch('R32-2', seconds['B'], seconds['C']);
    setMatch('R32-3', firsts['D'], getT(bestThirds, 1));
    setMatch('R32-4', seconds['E'], seconds['F']);
    setMatch('R32-5', firsts['G'], getT(bestThirds, 2));
    setMatch('R32-6', seconds['H'], seconds['I']);
    setMatch('R32-7', firsts['J'], getT(bestThirds, 3));
    setMatch('R32-8', seconds['K'], seconds['L']);
    setMatch('R32-9', firsts['B'], getT(bestThirds, 4));
    setMatch('R32-10', firsts['C'], seconds['A']);
    setMatch('R32-11', firsts['F'], getT(bestThirds, 5));
    setMatch('R32-12', firsts['E'], seconds['D']);
    setMatch('R32-13', firsts['H'], getT(bestThirds, 6));
    setMatch('R32-14', firsts['I'], seconds['G']);
    setMatch('R32-15', firsts['K'], getT(bestThirds, 7));
    setMatch('R32-16', firsts['L'], seconds['J']);

    return { knockoutMatches: newKnockout };
  }),
  resetSimulation: () => set({ matches: generateInitialMatches(), knockoutMatches: generateInitialKnockout() }),
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
