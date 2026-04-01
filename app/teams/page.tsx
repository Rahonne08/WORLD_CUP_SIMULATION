'use client';

import { useAppStore } from '@/lib/store';
import Image from 'next/image';

export default function TeamsPage() {
  const teams = useAppStore((state) => state.teams);

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
                <div 
                  key={team.id} 
                  className="flex items-center gap-4 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:bg-gray-800 transition-colors"
                >
                  <div className="relative w-12 h-8 rounded overflow-hidden shadow-sm">
                    <Image 
                      src={team.flagUrl} 
                      alt={`Bandeira ${team.name}`} 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-100">{team.name}</span>
                    <span className="text-xs text-gray-500 font-mono">{team.code}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
