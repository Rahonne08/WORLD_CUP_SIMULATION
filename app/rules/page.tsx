import { BookOpen, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export default function RulesPage() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 border-b border-gray-800 pb-6">
        <div className="bg-blue-900/30 p-4 rounded-2xl border border-blue-800/50">
          <BookOpen className="h-10 w-10 text-blue-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Regulamento da Competição</h1>
          <p className="text-gray-400">Entenda as regras e critérios de desempate da Copa do Mundo 2026.</p>
        </div>
      </div>

      <div className="grid gap-8">
        {/* Pontuação */}
        <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6" />
            Sistema de Pontuação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2">
              <span className="text-4xl font-black text-green-500">3</span>
              <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">Pontos</span>
              <span className="text-xs text-gray-500 mt-2">Por Vitória</span>
            </div>
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2">
              <span className="text-4xl font-black text-yellow-500">1</span>
              <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">Ponto</span>
              <span className="text-xs text-gray-500 mt-2">Por Empate</span>
            </div>
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2">
              <span className="text-4xl font-black text-red-500">0</span>
              <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">Pontos</span>
              <span className="text-xs text-gray-500 mt-2">Por Derrota</span>
            </div>
          </div>
        </section>

        {/* Critérios de Desempate */}
        <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
            <AlertCircle className="h-6 w-6" />
            Critérios de Desempate
          </h2>
          <p className="text-gray-400 mb-6">
            Caso duas ou mais equipes terminem a fase de grupos com o mesmo número de pontos, 
            os seguintes critérios serão aplicados, nesta ordem:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-gray-950 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/50 text-blue-400 font-bold shrink-0 border border-blue-800">1</div>
              <div>
                <h3 className="text-lg font-bold text-gray-200 mb-1">Saldo de Gols (SG)</h3>
                <p className="text-sm text-gray-400">A diferença entre gols marcados (GP) e gols sofridos (GC) em todas as partidas do grupo.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-950 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/50 text-blue-400 font-bold shrink-0 border border-blue-800">2</div>
              <div>
                <h3 className="text-lg font-bold text-gray-200 mb-1">Gols Pró (GP)</h3>
                <p className="text-sm text-gray-400">O número total de gols marcados em todas as partidas do grupo.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-950 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/50 text-blue-400 font-bold shrink-0 border border-blue-800">3</div>
              <div>
                <h3 className="text-lg font-bold text-gray-200 mb-1">Confronto Direto</h3>
                <p className="text-sm text-gray-400">O resultado da partida disputada entre as equipes empatadas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Informações Adicionais */}
        <section className="bg-blue-950/20 border border-blue-900/30 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
            <Info className="h-5 w-5" />
            Formato do Torneio
          </h2>
          <p className="text-sm text-blue-200/70 leading-relaxed">
            A Copa do Mundo de 2026 será a primeira com 48 seleções, divididas em 12 grupos de 4 equipes. 
            Os dois primeiros colocados de cada grupo, juntamente com os oito melhores terceiros colocados, 
            avançam para a fase de 16-avos de final, iniciando a fase eliminatória (mata-mata) até a grande final.
          </p>
        </section>
      </div>
    </div>
  );
}
