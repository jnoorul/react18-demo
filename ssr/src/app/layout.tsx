import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from './components/header/Header';
import { MenuBar } from './components/navbar/MenuBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'React 18',
  description: 'React 18 New Features',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="h-full">
          <Header />
          <MenuBar />
          <div className="mx-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
