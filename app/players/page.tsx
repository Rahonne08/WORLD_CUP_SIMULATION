'use client';

import { useState, useEffect, useMemo } from 'react';
import { getPlayersByTeam, WORLD_CUP_TEAMS } from '@/lib/footballApi';
import { PlayerCard } from '@/components/players/PlayerCard';
import { FilterBar } from '@/components/players/FilterBar';
import { Trophy, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Página principal de Jogadores
 * Gerencia o estado dos dados, filtros e renderização da lista
 */
export default function PlayersPage() {
  const [players, setPlayers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Estados de Filtro
  const [search, setSearch] = useState('');
  const [selectedTeam, setSelectedTeam] = useState(WORLD_CUP_TEAMS[0].id);
  const [sortBy, setSortBy] = useState('name');

  /**
   * Efeito para carregar jogadores quando o time selecionado muda
   */
  useEffect(() => {
    async function loadPlayers() {
      setLoading(true);
      setError(null);
      try {
        const data = await getPlayersByTeam(selectedTeam);
        setPlayers(data);
      } catch (err: any) {
        setError(err.message || 'Falha ao carregar jogadores. Verifique sua chave de API.');
      } finally {
        setLoading(false);
      }
    }

    loadPlayers();
  }, [selectedTeam]);

  /**
   * Lógica de filtragem e ordenação (Memoizada para performance)
   */
  const filteredPlayers = useMemo(() => {
    let result = [...players];

    // Filtro por busca
    if (search) {
      result = result.filter((p) => 
        p.player.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Ordenação
    result.sort((a, b) => {
      if (sortBy === 'name') {
        return a.player.name.localeCompare(b.player.name);
      }
      if (sortBy === 'age') {
        return a.player.age - b.player.age;
      }
      if (sortBy === 'goals') {
        return (b.statistics[0].goals.total || 0) - (a.statistics[0].goals.total || 0);
      }
      return 0;
    });

    return result;
  }, [players, search, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
            <Trophy className="w-3 h-3" />
            Copa do Mundo 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Explorador de <span className="text-yellow-500">Craques</span>
          </h1>
          <p className="text-gray-400 mt-2 max-w-xl">
            Descubra as estatísticas detalhadas dos principais jogadores que estarão no maior palco do mundo.
          </p>
        </div>
      </header>

      {/* Filtros */}
      <FilterBar
        search={search}
        setSearch={setSearch}
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Conteúdo Principal */}
      <main className="mt-12 min-h-[400px]">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24"
            >
              <Loader2 className="w-12 h-12 text-yellow-500 animate-spin mb-4" />
              <p className="text-gray-500 font-medium animate-pulse">Conectando ao banco de dados da FIFA...</p>
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-500/10 border border-red-500/20 p-8 rounded-3xl text-center max-w-lg mx-auto"
            >
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Ops! Algo deu errado</h3>
              <p className="text-red-400 text-sm mb-6">{error}</p>
              <button
                onClick={() => setSelectedTeam(selectedTeam)} // Trigger reload
                className="px-6 py-2.5 bg-red-500 text-white rounded-xl font-bold text-sm hover:bg-red-600 transition-colors"
              >
                Tentar Novamente
              </button>
            </motion.div>
          ) : filteredPlayers.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredPlayers.map((playerData) => (
                <PlayerCard key={playerData.player.id} player={playerData} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-gray-500 text-lg">Nenhum jogador encontrado para sua busca.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
