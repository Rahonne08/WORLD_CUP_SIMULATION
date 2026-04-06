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
  const [activePlayerIdx, setActivePlayerIdx] = useState(0);
  const [prevTeamId, setPrevTeamId] = useState(team?.id);

  if (team?.id !== prevTeamId) {
    setPrevTeamId(team?.id);
    setActivePlayerIdx(0);
  }

  const details = useMemo(() => {
    if (!team) return null;
    return getTeamDetails(team.id, team.name);
  }, [team]);

  if (!team || !details) return null;

  const currentPlayer = details.players[activePlayerIdx] || details.players[0];

  const nextPlayer = () => {
    if (details.players.length === 0) return;
    setActivePlayerIdx((prev) => (prev + 1) % details.players.length);
  };

  const prevPlayer = () => {
    if (details.players.length === 0) return;
    setActivePlayerIdx((prev) => (prev - 1 + details.players.length) % details.players.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          key={team.id}
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
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400 font-mono">Grupo {team.group} • {team.code} • #{team.ranking}</span>
                  {details.historyStats.titles > 0 && (
                    <div className="flex gap-0.5 ml-2">
                      {[...Array(details.historyStats.titles)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-xs">⭐</span>
                      ))}
                    </div>
                  )}
                </div>
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
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2">🧑‍🏫 Técnico</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-2xl">
                  👔
                </div>
                <div>
                  <p className="text-white font-bold text-lg">{details.coach.name}</p>
                  <p className="text-gray-400 text-sm">{details.coach.nationality} • {details.coach.age} anos</p>
                  <p className="text-purple-400/80 text-xs font-mono mt-1">{details.coach.tenure} no cargo</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mt-4 leading-relaxed italic border-l-2 border-purple-500/30 pl-3">
                {details.coach.description}
              </p>
            </div>

            {/* 2. Histórico em Copas */}
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">📊 Histórico em Copas</h3>
              <div className="grid grid-cols-2 gap-3">
                {/* Top Row */}
                <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700/50">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Participações</p>
                  <p className="text-2xl font-bold text-white">{details.historyStats.participations}</p>
                </div>
                <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700/50">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Títulos</p>
                  <div className="flex items-baseline gap-1.5">
                    <p className="text-2xl font-bold text-yellow-500">{details.historyStats.titles}</p>
                    {details.historyStats.titleYears && (
                      <p className="text-[9px] text-gray-400 font-mono truncate max-w-[80px]">({details.historyStats.titleYears.join(', ')})</p>
                    )}
                  </div>
                </div>

                {/* Middle Row */}
                <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700/50">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Jogos</p>
                  <p className="text-xl font-bold text-gray-300">{details.historyStats.totalMatches}</p>
                </div>
                <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700/50">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Vitórias</p>
                  <p className="text-xl font-bold text-green-400">{details.historyStats.wins}</p>
                </div>

                {/* Bottom Row */}
                <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700/50">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Empates</p>
                  <p className="text-xl font-bold text-blue-400/80">{details.historyStats.draws}</p>
                </div>
                <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700/50">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Derrotas</p>
                  <p className="text-xl font-bold text-red-400/80">{details.historyStats.losses}</p>
                </div>

                {/* Full Width Row */}
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700/50 col-span-2">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Melhor Campanha</p>
                  <p className="text-base font-bold text-blue-300 leading-tight">{details.historyStats.bestCampaign}</p>
                </div>
              </div>
            </div>

            {/* 3. Melhores Jogadores (Carousel) */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 md:col-span-2 relative">
              <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center gap-2">⭐ Principais Jogadores</h3>
              {details.players.length > 0 ? (
                <div className="relative overflow-hidden px-12">
                  <div className="flex justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activePlayerIdx}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="w-full max-w-lg bg-gray-900/50 border border-gray-700 p-6 rounded-2xl shadow-xl"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-2xl border border-yellow-500/20">
                            {activePlayerIdx === 0 ? '🥇' : activePlayerIdx === 1 ? '🥈' : '🥉'}
                          </div>
                          <div>
                            <p className="font-black text-white text-xl tracking-tight">{currentPlayer?.name}</p>
                            <p className="text-xs text-gray-500 uppercase tracking-widest font-mono font-bold">{currentPlayer?.position}</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-sm">
                            <span className="text-gray-500 font-medium">Clube Atual:</span>
                            <span className="text-gray-200 font-bold bg-gray-800 px-2.5 py-1 rounded-lg border border-gray-700">{currentPlayer?.club}</span>
                          </div>
                          <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700/50 relative">
                            <span className="absolute -top-3 left-4 text-2xl text-yellow-500/20 font-serif">“</span>
                            <p className="text-sm text-gray-300 leading-relaxed italic">
                              {currentPlayer?.highlight}
                            </p>
                            <span className="absolute -bottom-6 right-4 text-2xl text-yellow-500/20 font-serif">”</span>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevPlayer}
                    className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-gray-400 hover:text-yellow-400 hover:bg-gray-700/50 rounded-full transition-all border border-transparent hover:border-yellow-500/30"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button
                    onClick={nextPlayer}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-gray-400 hover:text-yellow-400 hover:bg-gray-700/50 rounded-full transition-all border border-transparent hover:border-yellow-500/30"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>

                  {/* Indicators */}
                  <div className="flex justify-center gap-2 mt-6">
                    {details.players.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActivePlayerIdx(i)}
                        className={`h-1.5 rounded-full transition-all ${i === activePlayerIdx ? 'w-8 bg-yellow-500' : 'w-2 bg-gray-700'}`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-900/30 rounded-xl border border-dashed border-gray-700">
                  <p className="text-gray-500 text-sm italic">Informações dos jogadores em breve.</p>
                </div>
              )}
            </div>

            {/* 4. Jogos na Copa 2026 */}
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 md:col-span-2">
              <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">🗓️ Jogos na Fase de Grupos</h3>
              {details.groupMatches.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {details.groupMatches.map((match, idx) => (
                    <div key={idx} className="bg-gray-900/50 p-4 rounded-xl border border-gray-700/50 hover:bg-gray-700/50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-bold text-white text-sm">{match.opponent}</p>
                        <span className="text-[10px] bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded border border-green-500/20">R{idx + 1}</span>
                      </div>
                      <div className="space-y-1 text-xs text-gray-400">
                        <p className="flex items-center gap-1.5">📅 {match.date} • {match.time}</p>
                        <p className="flex items-center gap-1.5">🏟️ {match.stadium}</p>
                        <p className="flex items-center gap-1.5">📍 {match.country}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : <p className="text-gray-500 text-sm">Informações em breve.</p>}
            </div>

            {/* 5. Últimos 5 Jogos */}
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 md:col-span-2">
              <h3 className="text-lg font-bold text-red-400 mb-5 flex items-center gap-2">🔥 Desempenho Recente</h3>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                {details.lastMatches.map((match: any, idx: number) => (
                  <div key={idx} className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-gray-700/30 transition-all">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shadow-inner ${
                      match.result === 'W' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      match.result === 'L' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      'bg-gray-700 text-gray-300 border border-gray-600'
                    }`}>
                      {match.result === 'W' ? 'V' : match.result === 'L' ? 'D' : 'E'}
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-gray-500 uppercase mb-1 truncate w-24">{match.opponent}</p>
                      <p className="font-mono font-bold text-white text-lg">{match.score}</p>
                    </div>
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
