'use client';

import { useAppStore, Team } from '@/lib/store';
import Image from 'next/image';
import { useState } from 'react';
import { TeamModal } from '@/components/TeamModal';

export default function TeamsPage() {
  const teams = useAppStore((state) => state.teams);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  // Group teams by their group letter for better display
  const groupedTeams = teams.reduce((acc, team) => {
    if (!acc[team.group]) {
      acc[team.group] = [];
    }
    acc[team.group].push(team);
    return acc;
  }, {} as Record<string, typeof teams>);

  return (
    <div className="flex flex-col gap-8">
      <TeamModal team={selectedTeam} onClose={() => setSelectedTeam(null)} />
      
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Seleções Participantes</h1>
        <p className="text-gray-400">Conheça as 48 seleções que disputarão a Copa do Mundo 2026.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.entries(groupedTeams).map(([group, groupTeams]) => (
          <div key={group} className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-green-400 border-b border-gray-800 pb-2">
              Grupo {group}
            </h2>
            <div className="flex flex-col gap-3">
              {groupTeams.map((team) => (
                <button 
                  key={team.id} 
                  onClick={() => setSelectedTeam(team)}
                  className="flex items-center gap-4 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:bg-gray-800 hover:border-green-500/50 transition-all text-left"
                >
                  <div className="relative w-12 h-8 rounded overflow-hidden shadow-sm shrink-0">
                    <Image 
                      src={team.flagUrl} 
                      alt={`Bandeira ${team.name}`} 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20">#{team.ranking}</span>
                      <span className="font-bold text-gray-100">{team.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 font-mono">{team.code}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
