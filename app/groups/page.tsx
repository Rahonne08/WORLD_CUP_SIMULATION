'use client';

import { useAppStore } from '@/lib/store';
import Image from 'next/image';

export default function GroupsPage() {
  const getGroupStats = useAppStore((state) => state.getGroupStats);
  const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Fase de Grupos</h1>
        <p className="text-gray-400">Acompanhe a classificação de cada grupo.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {groups.map((group) => {
          const stats = getGroupStats(group);
          return (
            <div key={group} className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-green-900/50 to-transparent p-4 border-b border-gray-800">
                <h2 className="text-xl font-bold text-green-400">Grupo {group}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-300">
                  <thead className="text-xs text-gray-400 uppercase bg-gray-900/80 border-b border-gray-800">
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
                      <tr key={stat.team.id} className="border-b border-gray-800/50 hover:bg-gray-800/50 transition-colors">
                        <td className="px-4 py-3 font-medium text-white flex items-center gap-3">
                          <span className="text-gray-500 w-4 text-center">{index + 1}</span>
                          <div className="relative w-6 h-4 rounded-sm overflow-hidden">
                            <Image 
                              src={stat.team.flagUrl} 
                              alt={stat.team.name} 
                              fill 
                              className="object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <span className="hidden sm:inline">{stat.team.name}</span>
                          <span className="sm:hidden">{stat.team.code}</span>
                        </td>
                        <td className="px-2 py-3 text-center font-bold text-green-400">{stat.points}</td>
                        <td className="px-2 py-3 text-center">{stat.played}</td>
                        <td className="px-2 py-3 text-center">{stat.won}</td>
                        <td className="px-2 py-3 text-center">{stat.drawn}</td>
                        <td className="px-2 py-3 text-center">{stat.lost}</td>
                        <td className="px-2 py-3 text-center">{stat.goalsFor}</td>
                        <td className="px-2 py-3 text-center">{stat.goalsAgainst}</td>
                        <td className="px-2 py-3 text-center">{stat.goalDifference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
