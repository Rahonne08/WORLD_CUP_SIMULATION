'use client';

import { useAppStore } from '@/lib/store';
import Image from 'next/image';

export function KnockoutBracket() {
  const { knockoutMatches, teams, updateKnockoutScore } = useAppStore();

  const rounds = [
    { id: 'R32', name: '16-avos de Final' },
    { id: 'R16', name: 'Oitavas de Final' },
    { id: 'QF', name: 'Quartas de Final' },
    { id: 'SF', name: 'Semifinais' },
    { id: 'F', name: 'Final' }
  ];

  return (
    <div className="overflow-x-auto pb-8 w-full">
      <div className="flex min-w-max p-4">
        {rounds.map((round, roundIndex) => {
          const roundMatches = knockoutMatches.filter(m => m.round === round.id);
          return (
            <div key={round.id} className="flex flex-col w-80 shrink-0 relative">
              <h3 className="text-center font-bold text-green-400 mb-8 bg-gray-900/80 py-2 rounded-lg border border-gray-800 mx-4 h-10 shrink-0 sticky left-0">
                {round.name}
              </h3>
              <div className="flex flex-col flex-1">
                {roundMatches.map((match, index) => (
                  <div key={match.id} className="relative px-6 py-2 flex-1 flex flex-col justify-center min-h-[110px]">
                    <MatchCard match={match} teams={teams} updateScore={updateKnockoutScore} />
                    
                    {/* Lines to the right (next round) */}
                    {roundIndex < rounds.length - 1 && (
                      <div className="absolute right-2 top-1/2 w-4 border-t-2 border-gray-700"></div>
                    )}
                    {roundIndex < rounds.length - 1 && index % 2 === 0 && (
                      <div className="absolute right-2 top-1/2 h-[50%] border-r-2 border-gray-700 translate-y-[1px] rounded-tr-lg"></div>
                    )}
                    {roundIndex < rounds.length - 1 && index % 2 === 1 && (
                      <div className="absolute right-2 bottom-1/2 h-[50%] border-r-2 border-gray-700 -translate-y-[1px] rounded-br-lg"></div>
                    )}

                    {/* Lines to the left (previous round) */}
                    {roundIndex > 0 && (
                      <div className="absolute left-2 top-1/2 w-4 border-t-2 border-gray-700"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MatchCard({ match, teams, updateScore }: any) {
  const homeTeam = teams.find((t: any) => t.id === match.homeTeamId);
  const awayTeam = teams.find((t: any) => t.id === match.awayTeamId);

  const isTied = match.homeScore !== null && match.awayScore !== null && match.homeScore === match.awayScore;

  return (
    <div className="bg-gray-900/90 border border-gray-700 rounded-xl p-3 flex flex-col gap-2 shadow-lg hover:border-gray-500 transition-colors relative z-10">
      <div className="text-xs text-gray-500 text-center font-mono">{match.id}</div>
      
      {/* Home Team */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1">
          {homeTeam ? (
            <>
              <div className="relative w-6 h-4 rounded-sm overflow-hidden shrink-0">
                <Image src={homeTeam.flagUrl} alt={homeTeam.name} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <span className="text-sm font-medium text-gray-200 truncate">{homeTeam.name}</span>
            </>
          ) : (
            <span className="text-sm text-gray-600 italic">A definir</span>
          )}
        </div>
        <div className="flex gap-1">
          {isTied && (
            <input 
              type="number" min="0" max="99" placeholder="P"
              value={match.homePenalties !== null ? match.homePenalties : ''}
              onChange={(e) => updateScore(match.id, match.homeScore, match.awayScore, e.target.value ? parseInt(e.target.value) : null, match.awayPenalties)}
              className="w-8 h-8 bg-gray-950 border border-yellow-700/50 rounded text-center text-xs font-bold text-yellow-500 focus:outline-none focus:border-yellow-500"
              title="Pênaltis"
            />
          )}
          <input 
            type="number" min="0" max="99"
            value={match.homeScore !== null ? match.homeScore : ''}
            onChange={(e) => updateScore(match.id, e.target.value ? parseInt(e.target.value) : null, match.awayScore, match.homePenalties, match.awayPenalties)}
            className="w-10 h-8 bg-gray-950 border border-gray-600 rounded text-center text-sm font-bold text-white focus:outline-none focus:border-green-500"
          />
        </div>
      </div>

      {/* Away Team */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1">
          {awayTeam ? (
            <>
              <div className="relative w-6 h-4 rounded-sm overflow-hidden shrink-0">
                <Image src={awayTeam.flagUrl} alt={awayTeam.name} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <span className="text-sm font-medium text-gray-200 truncate">{awayTeam.name}</span>
            </>
          ) : (
            <span className="text-sm text-gray-600 italic">A definir</span>
          )}
        </div>
        <div className="flex gap-1">
          {isTied && (
            <input 
              type="number" min="0" max="99" placeholder="P"
              value={match.awayPenalties !== null ? match.awayPenalties : ''}
              onChange={(e) => updateScore(match.id, match.homeScore, match.awayScore, match.homePenalties, e.target.value ? parseInt(e.target.value) : null)}
              className="w-8 h-8 bg-gray-950 border border-yellow-700/50 rounded text-center text-xs font-bold text-yellow-500 focus:outline-none focus:border-yellow-500"
              title="Pênaltis"
            />
          )}
          <input 
            type="number" min="0" max="99"
            value={match.awayScore !== null ? match.awayScore : ''}
            onChange={(e) => updateScore(match.id, match.homeScore, e.target.value ? parseInt(e.target.value) : null, match.homePenalties, match.awayPenalties)}
            className="w-10 h-8 bg-gray-950 border border-gray-600 rounded text-center text-sm font-bold text-white focus:outline-none focus:border-green-500"
          />
        </div>
      </div>
    </div>
  );
}
