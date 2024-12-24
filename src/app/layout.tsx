"use client";

import { useState } from 'react';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* Main Layout */}
        <div className="flex h-screen p-16">
          {/* Sidebar for Large Screens */}
          <aside className="hidden md:flex w-64 p-10 bg-white shadow-md flex-col space-y-6">
            <Link href="/" className="text-3xl font-sans font-bold text-gray-900 hover:underline">
              Guillermo Basterra
            </Link>
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

          {/* Hamburger Menu for Small Screens */}
          <button
            className="fixed top-4 right-4 z-50 md:hidden p-2 bg-gray-900 text-white rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Pull-Out Menu with Slide Animation */}
          <div
            className={`fixed inset-0 z-40 transition-all duration-300 ${
              menuOpen ? 'bg-black bg-opacity-50' : 'pointer-events-none'
            }`}
            onClick={() => setMenuOpen(false)} // Close menu when clicking the background
          >
            <aside
              className={`fixed top-0 right-0 w-64 h-full bg-white p-6 shadow-lg flex flex-col space-y-6 transform transition-transform duration-300 ${
                menuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
            >
              <button
                className="text-right text-xl font-bold"
                onClick={() => setMenuOpen(false)}
              >
                ×
              </button>
              <Link href="/" className="text-lg text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="/about" className="text-lg text-gray-700 hover:text-gray-900">
                About
              </Link>
              <Link href="/resume" className="text-lg text-gray-700 hover:text-gray-900">
                Resume
              </Link>
              <Link href="/contact" className="text-lg text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </aside>
          </div>

          {/* Content Area */}
          <main className="flex-grow ml-4 md:ml-14 p-4 md:p-8 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
