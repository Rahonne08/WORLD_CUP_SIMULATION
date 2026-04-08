'use client';

import { Search, Filter, ArrowUpDown } from 'lucide-react';
import { WORLD_CUP_TEAMS } from '@/lib/footballApi';

interface FilterBarProps {
  search: string;
  setSearch: (val: string) => void;
  selectedTeam: number;
  setSelectedTeam: (id: number) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
}

/**
 * Barra de filtros para busca, seleção de time e ordenação
 */
export function FilterBar({
  search,
  setSearch,
  selectedTeam,
  setSelectedTeam,
  sortBy,
  setSortBy
}: FilterBarProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center shadow-lg">
      {/* Busca por Nome */}
      <div className="relative w-full md:flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Buscar jogador por nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all"
        />
      </div>

      {/* Seleção de Time */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        <Filter className="w-4 h-4 text-gray-500 shrink-0" />
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(Number(e.target.value))}
          className="w-full md:w-48 bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all appearance-none cursor-pointer"
        >
          {WORLD_CUP_TEAMS.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </div>

      {/* Ordenação */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        <ArrowUpDown className="w-4 h-4 text-gray-500 shrink-0" />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full md:w-40 bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all appearance-none cursor-pointer"
        >
          <option value="name">Nome (A-Z)</option>
          <option value="age">Idade (Menor-Maior)</option>
          <option value="goals">Mais Gols</option>
        </select>
      </div>
    </div>
  );
}
