import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import type { Metadata } from 'next';
import { BootstrapClient } from '@/components/BootstrapClient/BootstrapClient';

export const metadata: Metadata = {
  title: 'Tayani Britto | Desenvolvedora Full Stack Python',
  description:
    'Portfolio profissional de Tayani Britto. Desenvolvedora Full Stack Python e Front-End especializada em React,  Next.js, TypeScript e automação de processos.',
  keywords: [
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'FastAPI',
    'Front-End',
    'Full Stack',
    'Back-End',
    'Desenvolvedor',
    'Portfólio',
    'PWA',
  ],
  authors: [
    {
      name: 'Tayani Britto',
    },
  ],
  openGraph: {
    title: 'Tayani Britto | Desenvolvedora Full Stack Python',
    description:
      'Portfolio profissional de Tayani Britto. Desenvolvedora Full Stack Python e Front-End especializada em React,  Next.js, TypeScript e automação de processos.',
    url: 'https://tayanibritto-dev.vercel.app',
    siteName: 'Portfólio de Tayani Britto',
    locale: 'pt-BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          <BootstrapClient />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
