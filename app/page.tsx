'use client';

import Link from 'next/link';
import { Trophy, Calendar, Users, Calculator } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAppStore } from '@/lib/store';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-06-11T16:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-900 via-green-800 to-blue-900 p-8 md:p-16 text-center shadow-2xl border border-green-700/50">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/soccer/1920/1080?blur=4')] opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="inline-flex items-center justify-center rounded-full bg-green-500/20 p-3 ring-1 ring-green-500/50">
            <Trophy className="h-12 w-12 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            Copa do Mundo 2026
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
            Acompanhe, simule e viva a emoção do maior torneio de futebol do mundo.
          </p>
          
          <div className="flex flex-col items-center gap-4 mt-4 bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
            <span className="text-sm uppercase tracking-widest text-green-300 font-semibold">A Copa começa em</span>
            <div className="flex gap-4 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-5xl font-black text-white tabular-nums tracking-tighter">
                  {timeLeft.days}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-green-400/70 font-bold">Dias</span>
              </div>
              <div className="text-3xl md:text-5xl font-light text-white/20">:</div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-5xl font-black text-white tabular-nums tracking-tighter">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-green-400/70 font-bold">Horas</span>
              </div>
              <div className="text-3xl md:text-5xl font-light text-white/20">:</div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-5xl font-black text-white tabular-nums tracking-tighter">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-green-400/70 font-bold">Min</span>
              </div>
              <div className="text-3xl md:text-5xl font-light text-white/20">:</div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-5xl font-black text-green-400 tabular-nums tracking-tighter">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-green-400/70 font-bold">Seg</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/groups" className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 text-sm font-bold text-gray-950 hover:bg-green-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              <Users className="h-5 w-5" />
              Ver Grupos
            </Link>
            <Link href="/players" className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold text-gray-950 hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
              <Trophy className="h-5 w-5" />
              Explorar Jogadores
            </Link>
            <Link href="/simulator" className="inline-flex items-center gap-2 rounded-full bg-gray-900/80 backdrop-blur px-8 py-4 text-sm font-bold text-white hover:bg-gray-800 transition-all border border-gray-700 hover:border-gray-500 hover:scale-105 active:scale-95">
              <Calculator className="h-5 w-5" />
              Simular Copa
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 hover:bg-gray-900 transition-colors">
          <Users className="h-10 w-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">48 Seleções</h3>
          <p className="text-gray-400">O maior torneio da história, com 48 equipes divididas em 12 grupos.</p>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 hover:bg-gray-900 transition-colors">
          <Calendar className="h-10 w-10 text-yellow-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">104 Partidas</h3>
          <p className="text-gray-400">Acompanhe todos os jogos, desde a fase de grupos até a grande final.</p>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 hover:bg-gray-900 transition-colors">
          <Calculator className="h-10 w-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Simulador Real</h3>
          <p className="text-gray-400">Preencha os resultados e veja a tabela se atualizar em tempo real.</p>
        </div>
      </section>

      {/* Featured Groups Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            Grupos em Destaque
          </h2>
          <Link href="/groups" className="text-sm font-medium text-green-400 hover:text-green-300 transition-colors">
            Ver todos &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeaturedGroup group="A" />
          <FeaturedGroup group="C" />
          <FeaturedGroup group="F" />
        </div>
      </section>
    </div>
  );
}

function FeaturedGroup({ group }: { group: string }) {
  const getGroupStats = useAppStore((state) => state.getGroupStats);
  const stats = getGroupStats(group).slice(0, 4);

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:bg-gray-900 transition-colors">
      <h3 className="text-xl font-bold text-green-400 mb-4 border-b border-gray-800 pb-2">Grupo {group}</h3>
      <ul className="flex flex-col gap-3">
        {stats.map((stat: any, index: number) => (
          <li key={stat.team.id} className="flex items-center justify-between text-gray-300 group/item">
            <div className="flex items-center gap-3">
              <span className="text-gray-600 text-xs font-mono w-4">{index + 1}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-green-500/70 bg-green-500/5 px-1 rounded border border-green-500/10">#{stat.team.ranking}</span>
                <span className="font-medium text-sm group-hover/item:text-white transition-colors">{stat.team.name}</span>
              </div>
            </div>
            <span className="text-xs font-bold text-green-500">{stat.points} pts</span>
          </li>
        ))}
      </ul>
      <Link href="/groups" className="mt-6 block text-center text-sm text-gray-400 hover:text-white transition-colors bg-gray-950 py-2 rounded-lg border border-gray-800">
        Ver Tabela Completa
      </Link>
    </div>
  );
}
