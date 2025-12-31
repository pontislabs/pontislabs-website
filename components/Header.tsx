'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Header Component
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-background/95 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-white tracking-tight hover:text-accent transition-colors"
          >
            PONTISLABS
          </Link>

          {/* Navigation Menu - Desktop */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link
                href="/#services"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#process"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                href="/#case-studies"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="bg-primary hover:bg-accent text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col space-y-1 py-4 border-t border-gray-800">
            <li>
              <Link
                href="/#services"
                onClick={handleLinkClick}
                className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#process"
                onClick={handleLinkClick}
                className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                href="/#case-studies"
                onClick={handleLinkClick}
                className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                onClick={handleLinkClick}
                className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={handleLinkClick}
                className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                Blog
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="/#contact"
                onClick={handleLinkClick}
                className="block text-center bg-primary hover:bg-accent text-white py-3 px-4 rounded-lg transition-colors font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
