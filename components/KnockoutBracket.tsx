'use client';

import { useAppStore } from '@/lib/store';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useMemo } from 'react';

const generateConfetti = () => [...Array(20)].map(() => ({
  x: (Math.random() - 0.5) * 400,
  y: (Math.random() - 0.5) * 400
}));

export function KnockoutBracket() {
  const { knockoutMatches, teams, selectKnockoutWinner, championId } = useAppStore();

  const rounds = [
    { id: 'R32', name: '16-avos de Final' },
    { id: 'R16', name: 'Oitavas de Final' },
    { id: 'QF', name: 'Quartas de Final' },
    { id: 'SF', name: 'Semifinais' },
    { id: 'F', name: 'Final' }
  ];

  const confetti = useMemo(() => generateConfetti(), []);

  return (
    <div className="overflow-x-auto pb-8 w-full">
      {championId && (
        <div className="flex flex-col items-center justify-center mb-8 p-6 bg-gray-900/50 border border-green-500/50 rounded-2xl relative overflow-hidden">
          {/* Confetti-like motion elements */}
          {confetti.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-500 rounded-full"
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{ 
                x: pos.x, 
                y: pos.y, 
                opacity: 0 
              }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          ))}
          <h2 className="text-3xl font-bold text-white mb-4 z-10">Campeão da Copa 2026!</h2>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="z-10"
          >
            <Image src={teams.find(t => t.id === championId)?.flagUrl || ''} alt="Campeão" width={200} height={120} className="rounded-lg shadow-2xl" referrerPolicy="no-referrer" />
          </motion.div>
          <p className="text-xl font-bold text-green-400 mt-4 z-10">{teams.find(t => t.id === championId)?.name}</p>
        </div>
      )}
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
                    <MatchCard match={match} teams={teams} selectWinner={selectKnockoutWinner} />
                    
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

function MatchCard({ match, teams, selectWinner }: any) {
  const homeTeam = teams.find((t: any) => t.id === match.homeTeamId);
  const awayTeam = teams.find((t: any) => t.id === match.awayTeamId);

  return (
    <div className="bg-gray-900/90 border border-gray-700 rounded-xl p-3 flex flex-col gap-2 shadow-lg hover:border-gray-500 transition-colors relative z-10">
      <div className="text-xs text-gray-500 text-center font-mono">{match.id}</div>
      
      {/* Home Team */}
      <button
        onClick={() => match.homeTeamId && selectWinner(match.id, match.homeTeamId)}
        disabled={!match.homeTeamId}
        className={`flex items-center justify-between gap-2 p-2 rounded-lg transition-colors ${match.winnerId === match.homeTeamId ? 'bg-green-900/50 border border-green-500' : 'hover:bg-gray-800'}`}
      >
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
      </button>

      {/* Away Team */}
      <button
        onClick={() => match.awayTeamId && selectWinner(match.id, match.awayTeamId)}
        disabled={!match.awayTeamId}
        className={`flex items-center justify-between gap-2 p-2 rounded-lg transition-colors ${match.winnerId === match.awayTeamId ? 'bg-green-900/50 border border-green-500' : 'hover:bg-gray-800'}`}
      >
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
      </button>
    </div>
  );
}
