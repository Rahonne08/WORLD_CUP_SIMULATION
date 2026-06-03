/**
 * Cliente centralizado para a API Football-Data.org.
 * Comunica-se com o proxy em '/api/football-data' para manter a chave de API segura
 * e aproveitar o cache robusto do servidor.
 */

export interface TeamDetails {
  id: string;
  name: string;
  code: string;
  crest: string;
}

export interface StandingTableEntry {
  position: number;
  team: TeamDetails;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

export interface StandingGroup {
  stage: string;
  type: string;
  group: string;
  table: StandingTableEntry[];
}

export interface StandingsResponse {
  standings: StandingGroup[];
}

export interface MatchScore {
  winner: string | null;
  duration: 'REGULAR' | 'EXTRA_TIME' | 'PENALTY_SHOOTOUT';
  fullTime: {
    home: number | null;
    away: number | null;
  };
}

export interface MatchEntry {
  id: number;
  utcDate: string;
  status: 'SCHEDULED' | 'TIMED' | 'LIVE' | 'IN_PLAY' | 'PAUSED' | 'FINISHED' | 'POSTPONED' | 'CANCELLED';
  matchday: number | null;
  stage: string;
  group: string | null;
  homeTeam: TeamDetails;
  awayTeam: TeamDetails;
  score: MatchScore;
  venue?: string;
}

export interface MatchesResponse {
  matches: MatchEntry[];
}

export interface TelemetryResponse {
  apiStatus: 'Ativo' | 'Não Configurado' | 'Erro Externo' | 'Limite Excedido' | 'Token Inválido' | 'Copa Não Iniciada';
  lastUpdate: string;
  requestsCount: number;
  requestsLimit: number;
  requestsRemaining: number;
  usingMock: boolean;
}

/**
 * Busca os detalhes gerais da competição Copa do Mundo
 */
export async function getCompetitionDetails(forceRefresh: boolean = false): Promise<any> {
  const url = `/api/football-data?endpoint=competition${forceRefresh ? '&refresh=true' : ''}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Falha ao obter detalhes da competição');
  }
  return response.json();
}

/**
 * Busca a classificação dos grupos em tempo real
 */
export async function getStandings(forceRefresh: boolean = false): Promise<StandingsResponse> {
  const url = `/api/football-data?endpoint=standings${forceRefresh ? '&refresh=true' : ''}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Falha ao obter classificação de grupos');
  }
  return response.json();
}

/**
 * Busca a lista de jogos e resultados (eliminatórios e fase de grupos)
 */
export async function getMatches(forceRefresh: boolean = false): Promise<MatchesResponse> {
  const url = `/api/football-data?endpoint=matches${forceRefresh ? '&refresh=true' : ''}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Falha ao obter lista de partidas');
  }
  return response.json();
}

/**
 * Busca a telemetria e integridade da API para o painel de depuração
 */
export async function getTelemetry(): Promise<TelemetryResponse> {
  const url = `/api/football-data?endpoint=telemetry`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Falha ao obter telemetria de depuração');
  }
  return response.json();
}
