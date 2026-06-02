'use client';

import { useAuth } from './AuthProvider';
import { LogIn, LogOut } from 'lucide-react';

export function LoginButton() {
  const { user, loading, signInWithGoogle, logOut } = useAuth();

  if (loading) {
    return <div className="h-8 w-24 animate-pulse bg-gray-800 rounded-full"></div>;
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-300 hidden sm:inline-block">
          {user.email?.split('@')[0]}
        </span>
        <button
          onClick={logOut}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-950/30 transition-colors border border-red-900/50 rounded-full"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline-block">Sair</span>
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={signInWithGoogle}
      className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-gray-950 bg-green-500 hover:bg-green-400 transition-colors rounded-full shadow-[0_0_10px_rgba(34,197,94,0.3)]"
    >
      <LogIn className="h-4 w-4" />
      Entrar
    </button>
  );
}
