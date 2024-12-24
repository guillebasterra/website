"use client";

import { useState } from "react";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="flex  relative">
          {/* Sidebar for Large Screens */}
          <aside
            className="hidden md:flex fixed top-16 bottom-16 left-16 w-64 bg-white shadow-md flex-col justify-between p-10"
            style={{
              height: "calc(100vh - 13vh)", // Keeps the floating menu equal distance from the top and bottom
            }}
          >
            <div>
              <Link
                href="/"
                className="text-3xl font-sans font-bold text-gray-900 hover:line-through"
              >
                Guillermo Basterra
              </Link>
              <nav className="flex flex-col space-y-4 mt-6">
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
            </div>
          </aside>

          {/* Hamburger Menu for Small Screens */}
          <button
            className="fixed top-4 right-4 z-50 md:hidden p-2 bg-gray-900 text-white rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Pull-Out Menu */}
          <div
            className={`fixed inset-0 z-40 transition-all duration-300 ${
              menuOpen ? "bg-black bg-opacity-50" : "pointer-events-none"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <aside
              className={`fixed top-0 right-0 w-64 h-full bg-white p-6 shadow-lg flex flex-col space-y-6 transform transition-transform duration-300 ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              onClick={(e) => e.stopPropagation()}
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
          <main
            className={`flex-grow p-4 md:p-8 ${
              menuOpen ? "ml-2" : "md:ml-[calc(64px+16rem)]"
            }`}
            style={{
              paddingTop: "64px",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
