'use client';

import { useAppStore } from '@/lib/store';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { getStandings, StandingGroup, TelemetryResponse, getTelemetry } from '@/lib/footballApi';
import { RefreshCw, AlertTriangle, Play, HelpCircle, Loader2 } from 'lucide-react';

export default function GroupsPage() {
  // Simulator State
  const getGroupStats = useAppStore((state) => state.getGroupStats);
  const localGroups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

  // View mode State: 'api' (Real Data) or 'simulator' (Calculated)
  const [viewMode, setViewMode] = useState<'api' | 'simulator'>('api');

  // API State
  const [apiGroups, setApiGroups] = useState<StandingGroup[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [telemetry, setTelemetry] = useState<TelemetryResponse | null>(null);
  const [nextUpdateIn, setNextUpdateIn] = useState<number>(60); // Auto-update timer in seconds

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch API standings & telemetry
  const fetchApiData = async (isManual: boolean = false) => {
    if (isManual) setIsLoading(true);
    setErrorMessage(null);
    try {
      const parsedData = await getStandings(isManual);
      const telData = await getTelemetry();
      
      setApiGroups(parsedData.standings || []);
      setTelemetry(telData);
      setNextUpdateIn(60); // Reset auto-timer
    } catch (err: any) {
      console.error(err);
      setErrorMessage(
        'Falha de conexão com a API. Exibindo dados em cache ou offline se disponíveis.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Initial fetch and auto-updates (polling)
  useEffect(() => {
    fetchApiData();

    // Auto-update timer decrementing every second, pulling refreshed data every 60 seconds
    timerRef.current = setInterval(() => {
      setNextUpdateIn((prev) => {
        if (prev <= 1) {
          fetchApiData();
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const formatGroupName = (rawGroup: string) => {
    // rawGroup could be 'GROUP_A' or similar
    return rawGroup.replace('GROUP_', 'Grupo ');
  };

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Classificação e Grupos</h1>
          <p className="text-gray-400">
            Acompanhe a tabela oficial do mundial de forma dinâmica ou monte e teste seus próprios palpites.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-1.5 flex self-start">
          <button
            onClick={() => setViewMode('api')}
            className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all duration-150 ${
              viewMode === 'api'
                ? 'bg-green-500 text-gray-950 font-black shadow-[0_0_12px_rgba(34,197,94,0.3)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Play className="h-4 w-4 rotate-90 shrink-0 fill-current" />
            Tabela da API (Oficial)
          </button>
          <button
            onClick={() => setViewMode('simulator')}
            className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all duration-150 ${
              viewMode === 'simulator'
                ? 'bg-green-500 text-gray-950 font-black shadow-[0_0_12px_rgba(34,197,94,0.3)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Minha Simulação
          </button>
        </div>
      </div>

      {/* Dynamic Warnings and Statuses */}
      {viewMode === 'api' && (
        <div className="flex flex-col gap-4">
          {/* Diagnostic alert for offline / using mocks */}
          {telemetry?.usingMock && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-4 flex gap-3 text-yellow-300">
              <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
              <div className="text-sm">
                <span className="font-bold">Modo de Alta Fidelidade (Local):</span> A chave de API 
                <code className="bg-yellow-500/10 px-1.5 py-0.5 rounded mx-1 text-yellow-200">FOOTBALL_DATA_API_KEY</code> 
                não foi configurada ou o limite foi temporariamente excedido. Exibindo dados simulados offline baseados nos grupos oficiais de 48 seleções. Configure sua chave no painel de segredos para ativar chamadas ao vivo.
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 flex gap-3 text-red-300 animate-pulse">
              <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
              <div className="text-sm">{errorMessage}</div>
            </div>
          )}

          {/* Polling / Status Indicators */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-gray-900/40 border border-gray-800/80 rounded-2xl px-5 py-3 text-xs text-gray-400">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className={`h-2.5 w-2.5 rounded-full ${
                  telemetry?.apiStatus === 'Ativo' ? 'bg-green-500 animate-pulse' :
                  telemetry?.apiStatus === 'Limite Excedido' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                Status da API: <strong className="text-gray-200">{telemetry?.apiStatus || 'Carregando...'}</strong>
              </span>
              <span>
                Última Atualização: <strong className="text-gray-200">{telemetry?.lastUpdate || 'Nunca'}</strong>
              </span>
              {telemetry && (
                <span>
                  Dados: <strong className={telemetry.usingMock ? 'text-yellow-400' : 'text-green-400'}>
                    {telemetry.usingMock ? 'Simulados Offline' : 'Produção Online (Football-Data)'}
                  </strong>
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <span>Prox. Atualização Automática: <strong className="text-green-400">{nextUpdateIn}s</strong></span>
              <button
                onClick={() => fetchApiData(true)}
                disabled={isLoading}
                className="flex items-center gap-1.5 px-3 py-1 bg-gray-800 hover:bg-gray-700 disabled:opacity-40 rounded-lg text-[11px] font-bold text-gray-200 transition-all active:scale-95 border border-gray-700"
              >
                {isLoading ? <Loader2 className="h-3 w-3 animate-spin text-green-400" /> : <RefreshCw className="h-3 w-3 text-green-400" />}
                Atualizar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Grid View */}
      {viewMode === 'api' ? (
        // API REAL DATA STANDINGS PATH
        isLoading && apiGroups.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-gray-900/10 border border-dashed border-gray-800 rounded-3xl gap-4">
            <Loader2 className="h-10 w-10 text-green-400 animate-spin" />
            <p className="text-sm text-gray-400 font-mono">Conectando ao proxy da Copa do Mundo...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {apiGroups.map((groupData: any) => (
              <div key={groupData.group} id={`api-group-${groupData.group}`} className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:border-gray-700/60 transition-colors">
                <div className="bg-gradient-to-r from-green-900/30 to-transparent p-4 border-b border-gray-800">
                  <h2 className="text-xl font-bold text-green-400">{formatGroupName(groupData.group)}</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-300">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-950 border-b border-gray-800">
                      <tr>
                        <th scope="col" className="px-4 py-3">Seleção</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Pontos">PTS</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Jogos">J</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Vitórias">V</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Empates">E</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Derrotas">D</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Gols Pró">GP</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Gols Contra">GC</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Saldo de Gols">SG</th>
                      </tr>
                    </thead>
                    <tbody>
                      {groupData.table.map((entry: any, index: number) => (
                        <tr key={entry.team.id} className="border-b border-gray-800/40 hover:bg-gray-800/45 transition-colors">
                          <td className="px-4 py-3 font-medium text-white flex items-center gap-3">
                            <span className="text-gray-500 w-4 text-center">{index + 1}</span>
                            <div className="relative w-7 h-5 rounded overflow-hidden shadow-sm shrink-0 border border-gray-800 bg-gray-950">
                              <Image
                                src={entry.team.crest || 'https://flagcdn.com/w80/un.png'}
                                alt={entry.team.name}
                                fill
                                className="object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-bold text-sm tracking-tight">{entry.team.name}</span>
                              <span className="text-[10px] text-gray-500 font-mono uppercase">{entry.team.code}</span>
                            </div>
                          </td>
                          <td className="px-2 py-3 text-center font-bold text-green-400">{entry.points}</td>
                          <td className="px-2 py-3 text-center">{entry.playedGames}</td>
                          <td className="px-2 py-3 text-center text-gray-400">{entry.won}</td>
                          <td className="px-2 py-3 text-center text-gray-400">{entry.draw}</td>
                          <td className="px-2 py-3 text-center text-gray-400">{entry.lost}</td>
                          <td className="px-2 py-3 text-center text-gray-400">{entry.goalsFor}</td>
                          <td className="px-2 py-3 text-center text-gray-400">{entry.goalsAgainst}</td>
                          <td className={`px-2 py-3 text-center font-semibold ${
                            entry.goalDifference > 0 ? 'text-green-400' :
                            entry.goalDifference < 0 ? 'text-red-400' : 'text-gray-500'
                          }`}>
                            {entry.goalDifference > 0 ? `+${entry.goalDifference}` : entry.goalDifference}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        // LOCAL SIMULATOR STANDINGS PATH
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {localGroups.map((group) => {
            const stats = getGroupStats(group);
            return (
              <div key={group} id={`simulator-group-${group}`} className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-green-900/40 to-transparent p-4 border-b border-gray-800">
                  <h2 className="text-xl font-bold text-green-400">Grupo {group}</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-300">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-950 border-b border-gray-800">
                      <tr>
                        <th scope="col" className="px-4 py-3">Seleção</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Pontos">PTS</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Jogos">J</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Vitórias">V</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Empates">E</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Derrotas">D</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Gols Pró">GP</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Gols Contra">GC</th>
                        <th scope="col" className="px-2 py-3 text-center" title="Saldo de Gols">SG</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.map((stat, index) => (
                        <tr key={stat.team.id} className="border-b border-gray-800/40 hover:bg-gray-800/45 transition-colors">
                          <td className="px-4 py-3 font-medium text-white flex items-center gap-3">
                            <span className="text-gray-500 w-4 text-center">{index + 1}</span>
                            <div className="relative w-7 h-5 rounded overflow-hidden shadow-sm border border-gray-800 index-0 bg-gray-950">
                              <Image 
                                src={stat.team.flagUrl} 
                                alt={stat.team.name} 
                                fill 
                                className="object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-bold text-sm tracking-tight">{stat.team.name}</span>
                              <span className="text-[10px] text-gray-500 font-mono uppercase">{stat.team.code}</span>
                            </div>
                          </td>
                          <td className="px-2 py-3 text-center font-bold text-green-400">{stat.points}</td>
                          <td className="px-2 py-3 text-center">{stat.played}</td>
                          <td className="px-2 py-3 text-center text-gray-400">{stat.won}</td>
                          <td className="px-2 py-3 text-center text-gray-400">{stat.drawn}</td>
                          <td className="px-2 py-3 text-center text-gray-400">{stat.lost}</td>
                          <td className="px-2 py-3 text-center text-gray-400">{stat.goalsFor}</td>
                          <td className="px-2 py-3 text-center text-gray-400">{stat.goalsAgainst}</td>
                          <td className={`px-2 py-3 text-center font-semibold ${
                            stat.goalDifference > 0 ? 'text-green-400' :
                            stat.goalDifference < 0 ? 'text-red-400' : 'text-gray-500'
                          }`}>
                            {stat.goalDifference > 0 ? `+${stat.goalDifference}` : stat.goalDifference}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
