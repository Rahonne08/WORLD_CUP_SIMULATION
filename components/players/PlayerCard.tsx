'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import { User, Shield, Goal, Activity } from 'lucide-react';

interface PlayerCardProps {
  player: any; // Dados da API-Football
}

/**
 * Componente de Card para exibir informações individuais do jogador
 */
export function PlayerCard({ player }: PlayerCardProps) {
  const { player: p, statistics: s } = player;
  const stats = s[0]; // Estatísticas da temporada atual
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-yellow-500/30 transition-all group"
    >
      {/* Header com Foto e Nome */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center overflow-hidden">
        {/* Background Blur */}
        <div className="absolute inset-0 opacity-20 blur-2xl scale-150">
          {!imgError && (
            <Image
              src={p.photo}
              alt=""
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          )}
        </div>

        {/* Foto Principal */}
        <div className="relative z-10 w-32 h-32 rounded-full border-4 border-gray-800 shadow-2xl overflow-hidden group-hover:border-yellow-500/50 transition-colors">
          {!imgError ? (
            <Image
              src={p.photo}
              alt={p.name}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <User className="w-12 h-12 text-gray-600" />
            </div>
          )}
        </div>

        {/* Nacionalidade (Bandeira) */}
        <div className="absolute top-4 right-4 w-8 h-6 rounded shadow-sm overflow-hidden border border-white/10">
          {/* A API-Football não fornece a URL da bandeira diretamente no objeto player, 
              mas podemos usar a flagcdn se tivermos o código do país ou apenas o nome */}
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-[10px] font-bold text-white uppercase">
            {p.nationality.substring(0, 3)}
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-5">
        <div className="mb-4">
          <h3 className="text-lg font-black text-white truncate group-hover:text-yellow-400 transition-colors">
            {p.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">
              {stats.games.position}
            </span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-500 font-medium">
              {p.age} anos
            </span>
          </div>
        </div>

        {/* Estatísticas Rápidas */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-gray-800/50 p-2 rounded-xl border border-gray-700/50 flex flex-col items-center">
            <Activity className="w-3 h-3 text-blue-400 mb-1" />
            <span className="text-xs font-black text-white">{stats.games.appearences || 0}</span>
            <span className="text-[8px] text-gray-500 uppercase font-bold">Jogos</span>
          </div>
          <div className="bg-gray-800/50 p-2 rounded-xl border border-gray-700/50 flex flex-col items-center">
            <Goal className="w-3 h-3 text-green-400 mb-1" />
            <span className="text-xs font-black text-white">{stats.goals.total || 0}</span>
            <span className="text-[8px] text-gray-500 uppercase font-bold">Gols</span>
          </div>
          <div className="bg-gray-800/50 p-2 rounded-xl border border-gray-700/50 flex flex-col items-center">
            <Shield className="w-3 h-3 text-purple-400 mb-1" />
            <span className="text-xs font-black text-white">{stats.goals.assists || 0}</span>
            <span className="text-[8px] text-gray-500 uppercase font-bold">Assists</span>
          </div>
        </div>

        {/* Time Atual */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
          <div className="w-8 h-8 relative shrink-0">
            <Image
              src={stats.team.logo}
              alt={stats.team.name}
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Time Atual</p>
            <p className="text-xs text-gray-300 font-bold truncate">{stats.team.name}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
