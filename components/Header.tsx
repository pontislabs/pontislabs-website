'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Header Component
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-white tracking-tight hover:text-accent transition-colors"
          >
            PONTISLABS
          </button>

          {/* Navigation Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('process')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Process
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('case-studies')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Case Studies
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                About
              </button>
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
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-accent text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
