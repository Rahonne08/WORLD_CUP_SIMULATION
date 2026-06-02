import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { Navbar } from '@/components/Navbar';
import { AuthProvider } from '@/components/AuthProvider';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Copa 2026 Hub',
  description: 'Acompanhe e simule a Copa do Mundo FIFA 2026',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen bg-gray-950 text-gray-50 font-sans antialiased pb-16 md:pb-0 flex flex-col justify-between" suppressHydrationWarning>
        <AuthProvider>
          <div>
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
          <footer className="border-t border-gray-900 py-6 bg-gray-950 text-center text-xs text-gray-500">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
              <span>© 2026 Copa 2026 Hub. Todos os direitos reservados.</span>
              <Link href="/admin" className="text-gray-600 hover:text-green-500 hover:underline transition-colors">
                Painel do Desenvolvedor
              </Link>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
