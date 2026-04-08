/**
 * Serviço de API para integração com API-Football
 */

const BASE_URL = 'https://v3.football.api-sports.io';
const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;

/**
 * Headers padrão para todas as requisições
 */
const headers = {
  'x-apisports-key': API_KEY || '',
  'x-rapidapi-host': 'v3.football.api-sports.io'
};

/**
 * Busca jogadores de uma seleção específica
 * @param {number} teamId - ID da seleção na API-Football
 * @param {number} season - Temporada (ex: 2024 para dados atuais)
 */
export async function getPlayersByTeam(teamId: number, season: number = 2024) {
  if (!API_KEY) {
    throw new Error('API Key da API-Football não configurada no .env');
  }

  try {
    const response = await fetch(`${BASE_URL}/players?team=${teamId}&season=${season}`, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.errors && Object.keys(data.errors).length > 0) {
      throw new Error(`Erro da API: ${JSON.stringify(data.errors)}`);
    }

    return data.response; // Retorna a lista de jogadores com estatísticas
  } catch (error) {
    console.error('Erro ao buscar jogadores:', error);
    throw error;
  }
}

/**
 * Lista de IDs de algumas seleções principais na API-Football (exemplo)
 * Brasil: 6, Argentina: 26, França: 2, Alemanha: 25, Portugal: 27, México: 16
 */
export const WORLD_CUP_TEAMS = [
  { id: 6, name: 'Brasil', flag: 'https://flagcdn.com/br.svg' },
  { id: 26, name: 'Argentina', flag: 'https://flagcdn.com/ar.svg' },
  { id: 2, name: 'França', flag: 'https://flagcdn.com/fr.svg' },
  { id: 25, name: 'Alemanha', flag: 'https://flagcdn.com/de.svg' },
  { id: 27, name: 'Portugal', flag: 'https://flagcdn.com/pt.svg' },
  { id: 16, name: 'México', flag: 'https://flagcdn.com/mx.svg' },
  { id: 9, name: 'Espanha', flag: 'https://flagcdn.com/es.svg' },
  { id: 10, name: 'Inglaterra', flag: 'https://flagcdn.com/gb-eng.svg' },
  { id: 15, name: 'Uruguai', flag: 'https://flagcdn.com/uy.svg' },
  { id: 24, name: 'Bélgica', flag: 'https://flagcdn.com/be.svg' },
];
