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
          <div className="p-6 overflow-y-auto flex flex-col gap-8">
            <>
              {/* History */}
              <section>
                <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-green-500 rounded-full"></span>
                  História em Copas
                </h3>
                <div className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-wrap markdown-body">
                  <ReactMarkdown>{details.history}</ReactMarkdown>
                </div>
              </section>

              {/* Qualification */}
              <section>
                <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                  Caminho para 2026
                </h3>
                <div className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-wrap markdown-body">
                  <ReactMarkdown>{details.qualification}</ReactMarkdown>
                </div>
              </section>

              {/* Last Matches */}
              <section>
                <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-yellow-500 rounded-full"></span>
                  Últimos 5 Jogos
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {details.lastMatches.map((match: any, idx: number) => (
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

              {/* Technical Staff */}
              <section>
                <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
                  Comissão Técnica
                </h3>
                <div className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-wrap markdown-body">
                  <ReactMarkdown>{details.technicalStaff}</ReactMarkdown>
                </div>
              </section>

              {/* Tactical Analysis */}
              <section>
                <h3 className="text-lg font-bold text-orange-400 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
                  Análise Tática
                </h3>
                <div className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-wrap markdown-body">
                  <ReactMarkdown>{details.tacticalAnalysis}</ReactMarkdown>
                </div>
              </section>
            </>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
