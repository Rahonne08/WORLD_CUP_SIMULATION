'use client';

import { useAppStore } from '@/lib/store';
import Image from 'next/image';
import { RefreshCw, Play, Dices } from 'lucide-react';
import { useState } from 'react';
import { KnockoutBracket } from '@/components/KnockoutBracket';

export default function SimulatorPage() {
  const { matches, knockoutMatches, teams, updateMatchScore, resetSimulation, getGroupStats, generateKnockoutStage, randomizeGroupMatches } = useAppStore();
  const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  const [activeTab, setActiveTab] = useState<'groups' | 'knockout'>('groups');

  const handleScoreChange = (matchId: string, type: 'home' | 'away', value: string) => {
    const numValue = value === '' ? null : parseInt(value, 10);
    const match = matches.find(m => m.id === matchId);
    if (match) {
      if (type === 'home') {
        updateMatchScore(matchId, numValue, match.awayScore);
      } else {
        updateMatchScore(matchId, match.homeScore, numValue);
      }
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Simulador de Partidas</h1>
          <p className="text-gray-400">Insira os resultados e veja a tabela atualizar em tempo real.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={randomizeGroupMatches}
            className="flex items-center gap-2 px-4 py-2 bg-blue-900/50 text-blue-400 border border-blue-800 rounded-lg hover:bg-blue-800/50 transition-colors"
          >
            <Dices className="h-4 w-4" />
            <span className="hidden sm:inline">Simular Resultados</span>
            <span className="sm:hidden">Simular</span>
          </button>
          <button 
            onClick={resetSimulation}
            className="flex items-center gap-2 px-4 py-2 bg-red-900/50 text-red-400 border border-red-800 rounded-lg hover:bg-red-800/50 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            <span className="hidden sm:inline">Resetar</span>
          </button>
          {activeTab === 'groups' && (
            <button 
              onClick={() => {
                generateKnockoutStage();
                setActiveTab('knockout');
              }}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-bold border border-green-500 rounded-lg hover:bg-green-500 transition-colors"
            >
              <Play className="h-4 w-4" />
              <span className="hidden sm:inline">Gerar Mata-Mata</span>
              <span className="sm:hidden">Mata-Mata</span>
            </button>
          )}
        </div>
      </div>

      <div className="flex bg-gray-900/50 p-1 rounded-xl border border-gray-800 w-full max-w-md mx-auto">
        <button
          onClick={() => setActiveTab('groups')}
          className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${activeTab === 'groups' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-400 hover:text-gray-200'}`}
        >
          Fase de Grupos
        </button>
        <button
          onClick={() => {
            const r32_1 = knockoutMatches.find(m => m.id === 'R32-1');
            if (!r32_1?.homeTeamId) {
              generateKnockoutStage();
            }
            setActiveTab('knockout');
          }}
          className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${activeTab === 'knockout' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-400 hover:text-gray-200'}`}
        >
          Mata-Mata
        </button>
      </div>

      {activeTab === 'groups' ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {groups.map((group) => {
          const groupMatches = matches.filter(m => m.group === group);
          const stats = getGroupStats(group);

          return (
            <div key={group} className="flex flex-col gap-6 bg-gray-900/30 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-green-400 border-b border-gray-800 pb-2">Grupo {group}</h2>
              
              {/* Tabela Resumida */}
              <div className="overflow-x-auto bg-gray-950/50 rounded-xl border border-gray-800">
                <table className="w-full text-sm text-left text-gray-300">
                  <thead className="text-xs text-gray-400 uppercase bg-gray-900/80 border-b border-gray-800">
                    <tr>
                      <th scope="col" className="px-4 py-2">Seleção</th>
                      <th scope="col" className="px-2 py-2 text-center">PTS</th>
                      <th scope="col" className="px-2 py-2 text-center">J</th>
                      <th scope="col" className="px-2 py-2 text-center">SG</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.map((stat, index) => (
                      <tr key={stat.team.id} className="border-b border-gray-800/50">
                        <td className="px-4 py-2 font-medium text-white flex items-center gap-2">
                          <span className="text-gray-500 w-4 text-center">{index + 1}</span>
                          <span className="hidden sm:inline">{stat.team.name}</span>
                          <span className="sm:hidden">{stat.team.code}</span>
                        </td>
                        <td className="px-2 py-2 text-center font-bold text-green-400">{stat.points}</td>
                        <td className="px-2 py-2 text-center">{stat.played}</td>
                        <td className="px-2 py-2 text-center">{stat.goalDifference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Partidas do Grupo */}
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Partidas</h3>
                {groupMatches.map((match) => {
                  const homeTeam = teams.find(t => t.id === match.homeTeamId);
                  const awayTeam = teams.find(t => t.id === match.awayTeamId);

                  if (!homeTeam || !awayTeam) return null;

                  return (
                    <div key={match.id} className="flex items-center justify-between bg-gray-900/80 border border-gray-800 rounded-xl p-3 hover:border-gray-700 transition-colors">
                      
                      {/* Home Team */}
                      <div className="flex items-center gap-3 w-1/3 justify-end">
                        <span className="text-sm font-medium text-gray-200 hidden sm:block text-right">{homeTeam.name}</span>
                        <span className="text-sm font-medium text-gray-200 sm:hidden">{homeTeam.code}</span>
                        <div className="relative w-8 h-6 rounded-sm overflow-hidden shrink-0">
                          <Image src={homeTeam.flagUrl} alt={homeTeam.name} fill className="object-cover" referrerPolicy="no-referrer" />
                        </div>
                      </div>

                      {/* Score Inputs */}
                      <div className="flex items-center gap-2 px-4">
                        <input 
                          type="number" 
                          min="0" 
                          max="99"
                          value={match.homeScore !== null ? match.homeScore : ''}
                          onChange={(e) => handleScoreChange(match.id, 'home', e.target.value)}
                          className="w-12 h-10 bg-gray-950 border border-gray-700 rounded-md text-center text-lg font-bold text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                        />
                        <span className="text-gray-500 font-bold">x</span>
                        <input 
                          type="number" 
                          min="0" 
                          max="99"
                          value={match.awayScore !== null ? match.awayScore : ''}
                          onChange={(e) => handleScoreChange(match.id, 'away', e.target.value)}
                          className="w-12 h-10 bg-gray-950 border border-gray-700 rounded-md text-center text-lg font-bold text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                        />
                      </div>

                      {/* Away Team */}
                      <div className="flex items-center gap-3 w-1/3 justify-start">
                        <div className="relative w-8 h-6 rounded-sm overflow-hidden shrink-0">
                          <Image src={awayTeam.flagUrl} alt={awayTeam.name} fill className="object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <span className="text-sm font-medium text-gray-200 hidden sm:block">{awayTeam.name}</span>
                        <span className="text-sm font-medium text-gray-200 sm:hidden">{awayTeam.code}</span>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>
      ) : (
        <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6">
          <KnockoutBracket />
        </div>
      )}
    </div>
  );
}
