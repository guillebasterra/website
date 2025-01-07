"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import "./globals.css";
import { FaLinkedin, FaInstagram} from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="flex  relative">
          {/* Sidebar for Large Screens */}
          <aside
            className="hidden md:flex fixed top-16 bottom-16 left-16 w-64  shadow flex-col justify-between p-9"
            style={{
              height: "calc(100vh - 10vh)", // Keeps the floating menu equal distance from the top and bottom
            }}
          >
            <div>
              <Image
                src="/images/nook.png"
                alt="Description"
                width={160}  // Set the desired width (adjust based on needs)
                height={160} // Set the desired height (adjust based on needs)
                className="object-contain mb-4"
              />
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
            {/* Social Links */}
            <div className="flex flex-col items-left mt-10">
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/guillermo-basterra-diezhandino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-1000"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/willybasterra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-1000"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.youtube.com/@guilleb4sterra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-1000"
                >
                  <FaSquareYoutube size={24} />
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-4 text-left">
                © 2024 Guillermo Basterra
              </p>
            </div>

          </aside>

          {/* Hamburger Menu for Small Screens */}
          <button
            className={`fixed top-4 right-4 z-50 md:hidden p-2  text-black rounded transition-opacity ${
              menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            onClick={() => setMenuOpen(true)}
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
              className={`fixed top-0 right-0 w-64 h-full bg-white p-2 shadow-lg flex flex-col space-y-0 transform transition-transform duration-300 ${
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
              <div className="flex flex-col items-center justify-start h-screen m-0 p-0">
                <Image
                  src="/images/nook.png"
                  alt="Description"
                  width={130}  // Set the desired width (adjust based on needs)
                  height={130} // Set the desired height (adjust based on needs)
                  className="mb-6"
                />
              </div>
              <div className="flex flex-col space-y-6 ml-10">
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
              </div>
              {/* Social Links */}
                <div className="flex flex-col items-center justify-end h-screen  mt-10">
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/guillermo-basterra-diezhandino"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href="https://www.instagram.com/willybasterra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="https://www.youtube.com/@guilleb4sterra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-1000"
                    >
                      <FaSquareYoutube size={24} />
                    </a>
                  </div>
                  <p className="text-gray-500 text-sm mt-4 text-center">
                    © 2024 Guillermo Basterra
                  </p>
                </div>

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
