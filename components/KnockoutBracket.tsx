'use client';

import { useAppStore } from '@/lib/store';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useMemo, useRef, useState } from 'react';
import { Dices, ChevronLeft, ChevronRight } from 'lucide-react';

const generateConfetti = () => [...Array(20)].map(() => ({
  x: (Math.random() - 0.5) * 400,
  y: (Math.random() - 0.5) * 400
}));

export function KnockoutBracket() {
  const { knockoutMatches, teams, selectKnockoutWinner, simulateFromMatch, championId } = useAppStore();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const rounds = [
    { id: 'R32', name: '16-avos de Final' },
    { id: 'R16', name: 'Oitavas de Final' },
    { id: 'QF', name: 'Quartas de Final' },
    { id: 'SF', name: 'Semifinais' },
    { id: 'F', name: 'Final' }
  ];

  const confetti = useMemo(() => generateConfetti(), []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 320; // Width of a round
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative group/bracket">
      {/* Scroll Controls (Desktop) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:group-hover/bracket:flex">
        <button 
          onClick={() => scroll('left')}
          className="p-2 bg-gray-900/80 border border-gray-700 rounded-full text-white hover:bg-gray-800 transition-all ml-2 shadow-xl"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:group-hover/bracket:flex">
        <button 
          onClick={() => scroll('right')}
          className="p-2 bg-gray-900/80 border border-gray-700 rounded-full text-white hover:bg-gray-800 transition-all mr-2 shadow-xl"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`overflow-x-auto pb-8 w-full scroll-smooth select-none snap-x snap-mandatory ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
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
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ 
              scale: 1, 
              rotate: 0, 
              opacity: 1,
              y: [0, -8, 0]
            }}
            transition={{ 
              scale: { type: 'spring', stiffness: 260, damping: 20 },
              rotate: { type: 'spring', stiffness: 260, damping: 20 },
              opacity: { duration: 0.5 },
              y: { 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
            className="z-10 relative group"
          >
            <div className="absolute -inset-4 bg-green-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image 
              src={teams.find(t => t.id === championId)?.flagUrl || ''} 
              alt="Campeão" 
              width={240} 
              height={144} 
              className="rounded-lg shadow-[0_0_50px_rgba(34,197,94,0.3)] border-2 border-green-500/30" 
              referrerPolicy="no-referrer" 
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-2xl font-black text-green-400 mt-6 z-10 tracking-wider uppercase drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
          >
            {teams.find(t => t.id === championId)?.name}
          </motion.p>
        </div>
      )}
      <div className="flex min-w-max p-4">
        {rounds.map((round, roundIndex) => {
          const roundMatches = knockoutMatches.filter(m => m.round === round.id);
          return (
            <div key={round.id} className="flex flex-col w-80 shrink-0 relative snap-center">
              <h3 className="text-center font-bold text-green-400 mb-8 bg-gray-900/80 py-2 rounded-lg border border-gray-800 mx-4 h-10 shrink-0 sticky left-0">
                {round.name}
              </h3>
              <div className="flex flex-col flex-1">
                {roundMatches.map((match, index) => (
                  <div key={match.id} className="relative px-6 py-2 flex-1 flex flex-col justify-center min-h-[110px]">
                    <MatchCard 
                      match={match} 
                      teams={teams} 
                      selectWinner={selectKnockoutWinner} 
                      simulateFromMatch={simulateFromMatch}
                    />
                    
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
  </div>
  );
}

function MatchCard({ match, teams, selectWinner, simulateFromMatch }: any) {
  const homeTeam = teams.find((t: any) => t.id === match.homeTeamId);
  const awayTeam = teams.find((t: any) => t.id === match.awayTeamId);

  return (
    <div className="bg-gray-900/90 border border-gray-700 rounded-xl p-3 flex flex-col gap-2 shadow-lg hover:border-gray-500 transition-colors relative z-10">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">{match.id}</span>
        <div className="flex items-center gap-2">
          {match.homeTeamId && match.awayTeamId && (
            <button
              onClick={() => simulateFromMatch(match.id)}
              className="text-[10px] flex items-center gap-1 font-bold text-blue-400 hover:text-blue-300 transition-colors"
              title="Simular a partir daqui"
            >
              <Dices className="h-3 w-3" />
              Simular
            </button>
          )}
          {match.winnerId && (
            <span className="text-[10px] font-bold text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded uppercase">Finalizado</span>
          )}
        </div>
      </div>
      
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
        {match.homeScore !== null && (
          <span className={`text-sm font-bold ${match.winnerId === match.homeTeamId ? 'text-green-400' : 'text-gray-400'}`}>
            {match.homeScore}
          </span>
        )}
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
        {match.awayScore !== null && (
          <span className={`text-sm font-bold ${match.winnerId === match.awayTeamId ? 'text-green-400' : 'text-gray-400'}`}>
            {match.awayScore}
          </span>
        )}
      </button>

      {match.winnerId && (
        <div className="mt-1 pt-2 border-t border-gray-800/50 flex justify-center items-center gap-2">
          <span className="text-[10px] text-gray-500 uppercase tracking-tighter">Placar Final:</span>
          <span className="text-xs font-black text-white bg-gray-800 px-2 py-0.5 rounded-md">
            {match.homeScore} — {match.awayScore}
          </span>
        </div>
      )}
    </div>
  );
}
