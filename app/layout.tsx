import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Copa 2026 Hub',
  description: 'Acompanhe e simule a Copa do Mundo FIFA 2026',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen bg-gray-950 text-gray-50 font-sans antialiased pb-16 md:pb-0" suppressHydrationWarning>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
