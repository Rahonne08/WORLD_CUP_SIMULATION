'use client';

import { useEffect, useState } from 'react';
import { getTelemetry, TelemetryResponse, getStandings, getMatches } from '@/lib/footballApi';
import { ShieldCheck, RefreshCw, Layers, ServerCrash, Cpu, Key, Database, CheckCircle, AlertOctagon, Loader2 } from 'lucide-react';

export default function AdminPage() {
  const [telemetry, setTelemetry] = useState<TelemetryResponse | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isActionPlaying, setIsActionPlaying] = useState<boolean>(false);
  const [rawView, setRawView] = useState<string>('');
  const [rawType, setRawType] = useState<'standings' | 'matches' | 'none'>('none');

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString('pt-BR');
    setLogs((prev) => [`[${timestamp}] ${message}`, ...prev]);
  };

  const fetchTelemetry = async () => {
    setIsLoading(true);
    try {
      const data = await getTelemetry();
      setTelemetry(data);
      addLog('Dados de telemetria atualizados com sucesso.');
    } catch (err: any) {
      console.error(err);
      addLog('ERRO: Não foi possível obter telemetria do servidor.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTelemetry();
    addLog('Painel de depuração inicializado.');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const forceEndpointRefresh = async (endpoint: 'standings' | 'matches') => {
    setIsActionPlaying(true);
    addLog(`Iniciando atualização forçada para endpoint: ${endpoint}...`);
    try {
      if (endpoint === 'standings') {
        await getStandings(true);
      } else {
        await getMatches(true);
      }
      addLog(`Sucesso: Cache forçado e atualizado para ${endpoint}.`);
      await fetchTelemetry();
    } catch (err: any) {
      addLog(`ERRO ao forçar atualização: ${err.message}`);
    } finally {
      setIsActionPlaying(false);
    }
  };

  const inspectRawPayload = async (type: 'standings' | 'matches') => {
    setIsActionPlaying(true);
    setRawType(type);
    setRawView('Carregando dados puros...');
    try {
      const response = await fetch(`/api/football-data?endpoint=${type}`);
      if (!response.ok) throw new Error(`Falha HTTP ${response.status}`);
      const data = await response.json();
      setRawView(JSON.stringify(data, null, 2));
      addLog(`Visualizando JSON puro do endpoint: ${type}`);
    } catch (err: any) {
      setRawView(`Falha ao obter JSON: ${err.message}`);
      addLog(`ERRO ao inspecionar JSON: ${err.message}`);
    } finally {
      setIsActionPlaying(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-800 pb-5">
        <div className="bg-green-500/10 p-2.5 rounded-xl border border-green-500/20 text-green-400">
          <Cpu className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Depuração Médias & API</h1>
          <p className="text-gray-400 text-sm">Painel Administrativo para controle, telemetria, segurança e saúde de dados.</p>
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20 bg-gray-900/10 border border-dashed border-gray-800 rounded-3xl gap-4">
          <Loader2 className="h-10 w-10 text-green-400 animate-spin" />
          <p className="text-sm text-gray-450 font-mono">Lendo telemetria da CPU...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Teleme Card (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col gap-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-gray-850 pb-3">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                Métricas e Telemetria Football-Data.org (v4)
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Status */}
                <div className="bg-gray-950 border border-gray-850 rounded-xl p-4 flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Status do Barramento</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`h-3.5 w-3.5 rounded-full ${
                      telemetry?.apiStatus === 'Ativo' ? 'bg-green-500 animate-pulse' :
                      telemetry?.apiStatus === 'Limite Excedido' ? 'bg-yellow-500' :
                      telemetry?.apiStatus === 'Token Inválido' ? 'bg-red-500 animate-pulse' :
                      telemetry?.apiStatus === 'Copa Não Iniciada' ? 'bg-orange-500' : 'bg-red-500'
                    }`} />
                    <span className="text-lg font-extrabold text-white">{telemetry?.apiStatus || 'Desconhecido'}</span>
                  </div>
                </div>

                {/* Last Update */}
                <div className="bg-gray-950 border border-gray-850 rounded-xl p-4 flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Última Sincronização</span>
                  <span className="text-lg font-extrabold text-white mt-1 tabular-nums line-clamp-1">{telemetry?.lastUpdate || 'Nunca'}</span>
                </div>

                {/* Requests Done */}
                <div className="bg-gray-950 border border-gray-850 rounded-xl p-4 flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Total de Chamadas Recebidas</span>
                  <span className="text-2xl font-black text-green-400 mt-1 tabular-nums">
                    {telemetry?.requestsCount ?? 0}
                  </span>
                </div>

                {/* Requests Left */}
                <div className="bg-gray-950 border border-gray-850 rounded-xl p-4 flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Limite p/ Minuto Restante</span>
                  <span className={`text-2xl font-black mt-1 tabular-nums ${
                    (telemetry?.requestsRemaining ?? 0) < 3 ? 'text-yellow-500' : 'text-green-500'
                  }`}>
                    {telemetry?.requestsRemaining ?? 10} / {telemetry?.requestsLimit ?? 10}
                  </span>
                </div>
              </div>

              {/* Cache Health */}
              <div className="bg-gray-950 border border-gray-850 rounded-xl p-5 flex flex-col gap-3">
                <span className="text-xs uppercase font-bold text-gray-500">Integridade de Fonte de Dados</span>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    {telemetry?.usingMock ? (
                      <>
                        <AlertOctagon className="h-5 w-5 text-yellow-500 shrink-0" />
                        <span className="text-gray-300">
                          Utilizando <strong className="text-yellow-400 font-bold">Fallbacks Locais de Alta Fidelidade</strong> (Chave ausente/vazia)
                        </span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                        <span className="text-gray-300">
                          Utilizando <strong className="text-green-400 font-bold font-mono">DADOS REAIS ONLINE</strong> conectados à Football-Data API.
                        </span>
                      </>
                    )}
                  </div>
                  <button
                    onClick={fetchTelemetry}
                    className="flex items-center gap-1 bg-gray-900 border border-gray-800 hover:bg-gray-800 text-xs text-white font-bold px-3 py-1.5 rounded-lg active:scale-95 transition-all"
                  >
                    <RefreshCw className="h-3 w-3 text-green-400" />
                    Ping Status
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions (Cache commands etc) */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col gap-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2 border-b border-gray-850 pb-3">
                <Layers className="h-5 w-5 text-blue-500" />
                Ações de Forçamento e Sanitização de Cache
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => forceEndpointRefresh('standings')}
                  disabled={isActionPlaying}
                  className="flex flex-col items-start gap-1 p-4 text-left bg-gray-950/80 hover:bg-gray-900 disabled:opacity-40 border border-gray-850 hover:border-gray-700/60 transition-all rounded-xl cursor-pointer"
                >
                  <span className="text-xs font-bold text-green-400">Classificação / Standings</span>
                  <span className="text-[10px] text-gray-500">Força a requisição ao vivo para re-calcular posições.</span>
                </button>
                <button
                  onClick={() => forceEndpointRefresh('matches')}
                  disabled={isActionPlaying}
                  className="flex flex-col items-start gap-1 p-4 text-left bg-gray-950/80 hover:bg-gray-900 disabled:opacity-40 border border-gray-850 hover:border-gray-700/60 transition-all rounded-xl cursor-pointer"
                >
                  <span className="text-xs font-bold text-green-400">Jogos / Matches</span>
                  <span className="text-[10px] text-gray-500">Força a atualização de placares e calendários ao vivo.</span>
                </button>
              </div>

              {/* Inspect raw JSON */}
              <div className="flex flex-wrap gap-3 mt-2 border-t border-gray-850 pt-4">
                <button
                  onClick={() => inspectRawPayload('standings')}
                  className="px-3.5 py-1.5 bg-gray-950 text-xs font-bold font-mono border border-gray-850 hover:border-gray-700 rounded-lg text-gray-300"
                >
                  Inspecionar Standings JSON
                </button>
                <button
                  onClick={() => inspectRawPayload('matches')}
                  className="px-3.5 py-1.5 bg-gray-950 text-xs font-bold font-mono border border-gray-850 hover:border-gray-700 rounded-lg text-gray-300"
                >
                  Inspecionar Matches JSON
                </button>
              </div>

              {rawType !== 'none' && (
                <div className="mt-4 bg-gray-950 border border-gray-850 rounded-xl p-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs text-gray-400 border-b border-gray-850 pb-2">
                    <span>JSON Puro do Cache: <strong className="text-green-500 font-mono">{rawType}</strong></span>
                    <button onClick={() => setRawType('none')} className="text-red-400 hover:underline">Fechar</button>
                  </div>
                  <pre className="text-[10px] text-green-300 font-mono max-h-72 overflow-y-auto whitespace-pre-wrap">
                    {rawView}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Console Logs & Config details */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 shadow-xl flex-1 flex flex-col gap-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2 border-b border-gray-850 pb-3">
                <Database className="h-5 w-5 text-gray-400" />
                Fila de Logs de Eventos
              </h2>
              <div className="flex-1 bg-gray-950 border border-gray-850 rounded-xl p-4 overflow-y-auto max-h-96 min-h-64 font-mono text-[10px] text-green-400/90 leading-relaxed space-y-2 select-text">
                {logs.length === 0 ? (
                  <span className="text-gray-600 italic">Nenhum evento registrado...</span>
                ) : (
                  logs.map((log, idx) => (
                    <div key={idx} className="border-b border-gray-900 pb-1.5 last:border-b-0 break-all">{log}</div>
                  ))
                )}
              </div>
            </div>

            {/* Dev configuration guide */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col gap-3 text-xs">
              <span className="font-bold text-white flex items-center gap-2">
                <Key className="h-4 w-4 text-green-400" />
                Variáveis de Ambiente
              </span>
              <p className="text-gray-400 leading-relaxed">
                As requisições ao vivo demandam que a chave de autenticação esteja adicionada por segredos no painel de controle do AI Studio.
              </p>
              <div className="bg-gray-950 border border-gray-850 p-3 rounded-lg font-mono text-[11px] text-gray-300">
                FOOTBALL_DATA_API_KEY=&quot;...&quot;
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
