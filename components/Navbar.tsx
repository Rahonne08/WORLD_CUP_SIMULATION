import Link from 'next/link';
import { Trophy, Home, Users, LayoutGrid, Calculator, BookOpen } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-green-400">
          <Trophy className="h-6 w-6" />
          <span>Copa 2026 Hub</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-green-400 transition-colors flex items-center gap-2">
            <Home className="h-4 w-4" /> Início
          </Link>
          <Link href="/teams" className="hover:text-green-400 transition-colors flex items-center gap-2">
            <Users className="h-4 w-4" /> Seleções
          </Link>
          <Link href="/players" className="hover:text-green-400 transition-colors flex items-center gap-2">
            <Trophy className="h-4 w-4" /> Jogadores
          </Link>
          <Link href="/groups" className="hover:text-green-400 transition-colors flex items-center gap-2">
            <LayoutGrid className="h-4 w-4" /> Grupos
          </Link>
          <Link href="/simulator" className="hover:text-green-400 transition-colors flex items-center gap-2">
            <Calculator className="h-4 w-4" /> Simulador
          </Link>
          <Link href="/rules" className="hover:text-green-400 transition-colors flex items-center gap-2">
            <BookOpen className="h-4 w-4" /> Regulamento
          </Link>
        </div>
        {/* Mobile menu could be added here */}
      </div>
      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-gray-800 bg-gray-950 flex justify-around items-center h-16 px-2 z-50">
        <Link href="/" className="flex flex-col items-center gap-1 text-xs text-gray-400 hover:text-green-400">
          <Home className="h-5 w-5" /> Início
        </Link>
        <Link href="/teams" className="flex flex-col items-center gap-1 text-xs text-gray-400 hover:text-green-400">
          <Users className="h-5 w-5" /> Seleções
        </Link>
        <Link href="/players" className="flex flex-col items-center gap-1 text-xs text-gray-400 hover:text-green-400">
          <Trophy className="h-5 w-5" /> Jogadores
        </Link>
        <Link href="/groups" className="flex flex-col items-center gap-1 text-xs text-gray-400 hover:text-green-400">
          <LayoutGrid className="h-5 w-5" /> Grupos
        </Link>
        <Link href="/simulator" className="flex flex-col items-center gap-1 text-xs text-gray-400 hover:text-green-400">
          <Calculator className="h-5 w-5" /> Simulador
        </Link>
      </div>
    </nav>
  );
}
