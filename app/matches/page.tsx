'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { getMatches, MatchEntry, getTelemetry, TelemetryResponse } from '@/lib/footballApi';
import { Calendar, MapPin, RefreshCw, AlertTriangle, Loader2, Search, SlidersHorizontal } from 'lucide-react';

export default function MatchesPage() {
  const [matches, setMatches] = useState<MatchEntry[]>([]);
  const [filteredMatches, setFilteredMatches] = useState<MatchEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [telemetry, setTelemetry] = useState<TelemetryResponse | null>(null);
  const [nextUpdateIn, setNextUpdateIn] = useState<number>(60);

  // Filters State
  const [selectedStage, setSelectedStage] = useState<string>('ALL'); // ALL, GROUP_STAGE, KNOCKOUT
  const [selectedGroup, setSelectedGroup] = useState<string>('ALL'); // ALL, A, B, C, etc.
  const [searchQuery, setSearchQuery] = useState<string>('');

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const fetchMatchesData = async (isManual: boolean = false) => {
    if (isManual) setIsLoading(true);
    setErrorMessage(null);
    try {
      const data = await getMatches(isManual);
      const telData = await getTelemetry();

      const sortedMatches = (data.matches || []).sort((a, b) => 
        new Date(a.utcDate).getTime() - new Date(b.utcDate).getTime()
      );
      
      setMatches(sortedMatches);
      setTelemetry(telData);
      setNextUpdateIn(60);
    } catch (err: any) {
      console.error(err);
      setErrorMessage('Falha ao obter dados de partidas. Exibindo dados locais offline em cache.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMatchesData();

    // Auto update every 60s
    timerRef.current = setInterval(() => {
      setNextUpdateIn((prev) => {
        if (prev <= 1) {
          fetchMatchesData();
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Filter application
  useEffect(() => {
    let result = [...matches];

    // Stage filter
    if (selectedStage === 'GROUP_STAGE') {
      result = result.filter(m => m.stage === 'GROUP_STAGE');
    } else if (selectedStage === 'KNOCKOUT') {
      result = result.filter(m => m.stage !== 'GROUP_STAGE');
    }

    // Group filter
    if (selectedGroup !== 'ALL') {
      result = result.filter(m => m.group === `GROUP_${selectedGroup}`);
    }

    // Search filter (team name)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(m => 
        (m.homeTeam?.name || '').toLowerCase().includes(q) || 
        (m.awayTeam?.name || '').toLowerCase().includes(q)
      );
    }

    setFilteredMatches(result);
  }, [matches, selectedStage, selectedGroup, searchQuery]);

  // Translate stage code to human readable
  const translateStage = (stage: string) => {
    switch (stage) {
      case 'GROUP_STAGE': return 'Fase de Grupos';
      case 'LAST_32': return 'Dezesseis-avos de Final';
      case 'LAST_16': return 'Oitavas de Final';
      case 'QUARTER_FINALS': return 'Quartas de Final';
      case 'SEMI_FINALS': return 'Semifinal';
      case 'THIRD_PLACE': return 'Disputa de 3º Lugar';
      case 'FINAL': return 'Grande Final';
      default: return stage;
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'GROUP_STAGE': return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
      case 'LAST_32': case 'LAST_16': return 'bg-teal-500/10 text-teal-400 border border-teal-500/20';
      case 'QUARTER_FINALS': return 'bg-purple-500/10 text-purple-400 border border-purple-500/20';
      case 'SEMI_FINALS': return 'bg-orange-500/10 text-orange-400 border border-orange-500/20';
      default: return 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20';
    }
  };

  // Localized date formatting
  const formatMatchDate = (isoStr: string) => {
    const d = new Date(isoStr);
    return d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', weekday: 'long' });
  };

  const formatMatchTime = (isoStr: string) => {
    const d = new Date(isoStr);
    return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) + ' hrs';
  };

  const groupsList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Tabela de Jogos</h1>
          <p className="text-gray-400">
            Acompanhe o calendário, datas, horários, locais e resultados reais de todos os confrontos da Copa.
          </p>
        </div>
        <button
          onClick={() => fetchMatchesData(true)}
          disabled={isLoading}
          className="flex items-center gap-2 self-start md:self-auto px-5 py-3 bg-gray-900 hover:bg-gray-800 disabled:opacity-40 rounded-xl font-bold text-sm text-gray-200 border border-gray-800 transition-all active:scale-95 shadow-md"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin text-green-400" />
          ) : (
            <RefreshCw className="h-4 w-4 text-green-400" />
          )}
          Atualizar Dados
        </button>
      </div>

      {/* Warnings & Telemetry */}
      {telemetry?.usingMock && (
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-4 flex gap-3 text-yellow-300">
          <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
          <div className="text-sm">
            <span className="font-bold">Dados Simulados:</span> A API oficial ainda não tem partidas agendadas ou está sem segredo configurado. Exibindo jogos simulados da fase de grupos e eliminação.
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 flex gap-3 text-red-300">
          <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
          <div className="text-sm">{errorMessage}</div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-gray-900/40 border border-gray-800/80 rounded-2xl px-5 py-3 text-xs text-gray-400">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className={`h-2.5 w-2.5 rounded-full ${
              telemetry?.apiStatus === 'Ativo' ? 'bg-green-500 animate-pulse' :
              telemetry?.apiStatus === 'Limite Excedido' ? 'bg-yellow-500' : 'bg-red-500'
            }`} />
            API: <strong className="text-gray-200">{telemetry?.apiStatus || 'Carregando...'}</strong>
          </span>
          <span>
            Requisições Livres p/ Minuto: <strong className="text-green-500">{telemetry?.requestsRemaining ?? 10}</strong>
          </span>
          <span>
            Última Sincronização: <strong className="text-gray-200">{telemetry?.lastUpdate || 'Nunca'}</strong>
          </span>
        </div>
        <span>Prox. Atualização Automática: <strong className="text-green-400">{nextUpdateIn}s</strong></span>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col md:flex-row gap-5 shadow-lg">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-gray-500" />
          <input
            type="text"
            placeholder="Pesquisar seleção..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-950 border border-gray-850 focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all"
          />
        </div>

        {/* Phase Select */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-gray-500" />
          <select
            value={selectedStage}
            onChange={(e) => {
              setSelectedStage(e.target.value);
              if (e.target.value !== 'GROUP_STAGE') {
                setSelectedGroup('ALL'); // Reset group if not viewing group stage
              }
            }}
            className="bg-gray-950 border border-gray-850 hover:border-gray-700/60 text-sm text-gray-300 rounded-xl py-3 px-4 outline-none focus:border-green-500/50 transition-colors"
          >
            <option value="ALL">Todas as Fases</option>
            <option value="GROUP_STAGE">Fase de Grupos</option>
            <option value="KNOCKOUT">Fases Eliminatórias</option>
          </select>
        </div>

        {/* Group Filter (Only show if ALL or GROUP_STAGE is selected) */}
        {selectedStage !== 'KNOCKOUT' && (
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="bg-gray-950 border border-gray-850 hover:border-gray-700/60 text-sm text-gray-300 rounded-xl py-3 px-4 outline-none focus:border-green-500/50 transition-colors"
          >
            <option value="ALL">Todos os Grupos (A-L)</option>
            {groupsList.map(g => (
              <option key={g} value={g}>Grupo {g}</option>
            ))}
          </select>
        )}
      </div>

      {/* Matches Grid */}
      {isLoading && matches.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 bg-gray-900/10 border border-dashed border-gray-800 rounded-3xl gap-4">
          <Loader2 className="h-10 w-10 text-green-400 animate-spin" />
          <p className="text-sm text-gray-400 font-mono">Carregando jogos oficiais da Copa...</p>
        </div>
      ) : filteredMatches.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-gray-900/10 border border-dashed border-gray-800 rounded-3xl text-center p-6">
          <AlertTriangle className="h-10 w-10 text-gray-600 mb-3" />
          <p className="text-gray-400 font-bold mb-1">Nenhum confronto encontrado</p>
          <p className="text-xs text-gray-500 max-w-sm">Tente redefinir seus filtros ou digite um nome diferente para encontrar a partida buscada.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMatches.map((match) => (
            <div key={match.id} className="bg-gray-900/40 border border-gray-800/80 rounded-2xl p-5 flex flex-col justify-between hover:border-gray-700/80 transition-all hover:translate-y-[-2px] hover:shadow-xl shadow-md">
              
              {/* Card Top: Stage and Group info */}
              <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-850">
                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${getStageColor(match.stage)} shrink-0`}>
                  {translateStage(match.stage)}
                </span>
                {match.group && (
                  <span className="text-[10px] font-bold font-mono text-green-400 bg-green-500/5 px-2 py-1 rounded border border-green-500/10 shrink-0">
                    {match.group.replace('GROUP_', 'Grupo ')}
                  </span>
                )}
              </div>

              {/* Card Center: Scoreboard */}
              <div className="flex flex-col gap-4 py-1">
                {/* Home Team Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-5.5 rounded overflow-hidden shadow-sm shrink-0 border border-gray-850 bg-gray-950">
                      <Image
                        src={match.homeTeam?.crest || 'https://flagcdn.com/w80/un.png'}
                        alt={match.homeTeam?.name || 'Selecione'}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="font-bold text-sm text-gray-100 line-clamp-1">{match.homeTeam?.name || 'A definir'}</span>
                  </div>
                  <span className="text-base font-black text-white px-2.5 py-1 bg-gray-950 rounded border border-gray-800/60 w-9 text-center tabular-nums">
                    {match.score?.fullTime?.home ?? '-'}
                  </span>
                </div>

                {/* Away Team Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-5.5 rounded overflow-hidden shadow-sm shrink-0 border border-gray-850 bg-gray-950">
                      <Image
                        src={match.awayTeam?.crest || 'https://flagcdn.com/w80/un.png'}
                        alt={match.awayTeam?.name || 'Selecione'}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="font-bold text-sm text-gray-100 line-clamp-1">{match.awayTeam?.name || 'A definir'}</span>
                  </div>
                  <span className="text-base font-black text-white px-2.5 py-1 bg-gray-950 rounded border border-gray-800/60 w-9 text-center tabular-nums">
                    {match.score?.fullTime?.away ?? '-'}
                  </span>
                </div>
              </div>

              {/* Card Footer: Metadata */}
              <div className="mt-5 pt-4 border-t border-gray-850 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-gray-450 font-medium">
                  <Calendar className="h-3.5 w-3.5 text-green-500 shrink-0" />
                  <span className="capitalize">{formatMatchDate(match.utcDate)}</span>
                  <span className="text-green-500 font-bold ml-auto shrink-0 font-mono">{formatMatchTime(match.utcDate)}</span>
                </div>
                {match.venue && (
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin className="h-3.5 w-3.5 text-gray-600 shrink-0" />
                    <span className="line-clamp-1">{match.venue}</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
