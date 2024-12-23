import './globals.css';
import Link from 'next/link';

import Menu from './components/Menu';



export const metadata = {
  title: 'My Personal Website',
  description: 'Built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-gray-100">
        <Menu />
        <main className="flex-grow p-8">{children}</main>
      </body>
    </html>
  );
}
