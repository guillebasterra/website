import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Personal Website',
  description: 'Built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-100">
        {/* Menu Bar */}
        <aside className="w-1/4 md:w-64 p-10 md:p-12 lg:p-14 flex flex-col space-y-10">
          {/* Name */}
          <Link href="/" className="text-3xl font-bold text-gray-900 hover:underline">
            Guillermo Basterra
          </Link>
          {/* Menu Links */}
          <nav className="flex flex-col space-y-4">
            <Link href="/about" className="text-lg text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="/resume" className="text-lg text-gray-700 hover:text-gray-900">
              Resume
            </Link>
            <Link href="/contact" className="text-lg text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-grow px-4 md:px-6 lg:px-12 pt-12 md:pt-16 lg:pt-20 overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
