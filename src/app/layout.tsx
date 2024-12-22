import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Personal Website',
  description: 'Built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
          <Link href="/" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
          <Link href="/about" style={{ marginRight: '1rem', color: '#fff' }}>About</Link>
          <Link href="/resume" style={{ marginRight: '1rem', color: '#fff' }}>Resume</Link>
          <Link href="/contact" style={{ color: '#fff' }}>Contact</Link>
          
        </nav>
        {children}
      </body>
    </html>
  );
}
