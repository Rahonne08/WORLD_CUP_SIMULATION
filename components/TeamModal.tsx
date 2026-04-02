'use client';

import { Team } from '@/lib/store';
import { getTeamDetails } from '@/lib/teamData';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import Image from 'next/image';

interface TeamModalProps {
  team: Team | null;
  onClose: () => void;
}

export function TeamModal({ team, onClose }: TeamModalProps) {
  if (!team) return null;

  const details = getTeamDetails(team.id, team.name);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-10 rounded shadow-sm overflow-hidden">
                <Image src={team.flagUrl} alt={team.name} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{team.name}</h2>
                <span className="text-sm text-gray-400 font-mono">Grupo {team.group} • {team.code}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto flex flex-col gap-8">
            
            {/* History */}
            <section>
              <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-green-500 rounded-full"></span>
                História em Copas
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-wrap">
                {details.history}
              </p>
            </section>

            {/* Qualification */}
            <section>
              <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                Caminho para 2026
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-wrap">
                {details.qualification}
              </p>
            </section>

            {/* Last Matches */}
            <section>
              <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-yellow-500 rounded-full"></span>
                Últimos 5 Jogos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {details.lastMatches.map((match, idx) => (
                  <div key={idx} className="bg-gray-800 border border-gray-700 rounded-lg p-3 flex flex-col items-center justify-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      match.result === 'W' ? 'bg-green-900/50 text-green-400 border border-green-500/30' :
                      match.result === 'L' ? 'bg-red-900/50 text-red-400 border border-red-500/30' :
                      'bg-gray-700 text-gray-300 border border-gray-600'
                    }`}>
                      {match.result === 'W' ? 'V' : match.result === 'L' ? 'D' : 'E'}
                    </div>
                    <span className="text-xs text-gray-400 text-center truncate w-full">{match.opponent}</span>
                    <span className="font-mono font-bold text-white">{match.score}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
