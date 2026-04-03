'use client';

import { Team } from '@/lib/store';
import { getTeamDetails } from '@/lib/teamData';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect, useMemo } from 'react';

interface TeamModalProps {
  team: Team | null;
  onClose: () => void;
}

export function TeamModal({ team, onClose }: TeamModalProps) {
  const details = useMemo(() => {
    if (!team) return null;
    return getTeamDetails(team.id, team.name);
  }, [team]);

  if (!team || !details) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-10 rounded shadow-sm overflow-hidden">
                <Image src={team.flagUrl} alt={team.name} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{team.name}</h2>
                <span className="text-sm text-gray-400 font-mono">Grupo {team.group} • {team.code} • #{team.ranking}</span>
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
          <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Técnico */}
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">🧑🏫 Técnico</h3>
              <p className="text-white font-bold">{details.coach.name}</p>
              <p className="text-gray-400 text-sm">{details.coach.nationality} • {details.coach.age} anos • {details.coach.tenure}</p>
              <p className="text-gray-300 text-sm mt-2">{details.coach.description}</p>
            </div>

            {/* 2. Melhores Jogadores */}
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">⭐ Melhores Jogadores</h3>
              {details.players.length > 0 ? (
                <ul className="space-y-2">
                  {details.players.map((player, idx) => (
                    <li key={idx} className="text-sm text-gray-300">
                      <span className="font-bold text-white">{player.name}</span> ({player.position}) - {player.club} - <span className="text-yellow-500">{player.highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : <p className="text-gray-500 text-sm">Informações em breve.</p>}
            </div>

            {/* 3. Histórico em Copas */}
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">📊 Histórico em Copas</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <p>Participações: <span className="text-white">{details.historyStats.participations}</span></p>
                <p>Jogos: <span className="text-white">{details.historyStats.totalMatches}</span></p>
                <p>Vitórias: <span className="text-white">{details.historyStats.wins}</span></p>
                <p>Derrotas: <span className="text-white">{details.historyStats.losses}</span></p>
                <p>Empates: <span className="text-white">{details.historyStats.draws}</span></p>
                <p>Títulos: <span className="text-white">{details.historyStats.titles}</span></p>
                <p className="col-span-2">Melhor campanha: <span className="text-white">{details.historyStats.bestCampaign}</span></p>
              </div>
            </div>

            {/* 4. Jogos na Copa 2026 */}
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 md:col-span-2">
              <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">🗓️ Jogos na Copa 2026</h3>
              {details.groupMatches.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {details.groupMatches.map((match, idx) => (
                    <div key={idx} className="bg-gray-700 p-3 rounded-lg text-sm text-gray-300">
                      <p className="font-bold text-white">{match.opponent}</p>
                      <p>{match.date} - {match.time}</p>
                      <p>{match.stadium}, {match.country}</p>
                    </div>
                  ))}
                </div>
              ) : <p className="text-gray-500 text-sm">Informações em breve.</p>}
            </div>

            {/* 5. Últimos 5 Jogos */}
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 md:col-span-2">
              <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">🔥 Últimos 5 Jogos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {details.lastMatches.map((match: any, idx: number) => (
                  <div key={idx} className="bg-gray-700 border border-gray-600 rounded-lg p-3 flex flex-col items-center justify-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      match.result === 'W' ? 'bg-green-900/50 text-green-400 border border-green-500/30' :
                      match.result === 'L' ? 'bg-red-900/50 text-red-400 border border-red-500/30' :
                      'bg-gray-600 text-gray-300 border border-gray-500'
                    }`}>
                      {match.result === 'W' ? 'V' : match.result === 'L' ? 'D' : 'E'}
                    </div>
                    <span className="text-xs text-gray-400 text-center truncate w-full">{match.opponent}</span>
                    <span className="font-mono font-bold text-white">{match.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
