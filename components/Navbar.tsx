'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsScrolling(true);

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // Set navbar back to opaque after scrolling stops (300ms delay)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="fixed top-2 sm:top-6 left-0 right-0 z-50 px-2 sm:px-8">
      <nav className={`rounded-lg sm:rounded-3xl shadow-2xl mx-auto max-w-7xl transition-all duration-300 ${
        !mounted ? 'bg-white/50 backdrop-blur-lg' : (isScrolling ? 'bg-white/60 backdrop-blur-xl' : 'bg-white/50 backdrop-blur-lg')
      }`}>
        <div className="px-2 py-1 sm:px-10 sm:py-4 flex justify-between items-center">
          {/* Logo - Mobile Optimized */}
          <Link href="/" className="flex items-center touch-manipulation">
            <Image
              src="/1.png"
              alt="SLV Cargo Movers"
              width={220}
              height={60}
              className="h-10 sm:h-14 md:h-16 w-auto rounded-md sm:rounded-none filter drop-shadow-md"
              priority
              sizes="(max-width: 640px) 120px, 220px"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--navy-900)] hover:text-[var(--orange-500)] active:text-[var(--orange-600)] font-medium text-lg md:text-xl transition-all duration-300 touch-manipulation"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Enhanced touch target */}
          <button
            className="md:hidden text-[var(--navy-900)] p-1 touch-manipulation hover:text-[var(--orange-500)] active:text-[var(--orange-600)] transition-colors duration-200 min-w-[32px] min-h-[32px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation - Improved spacing */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-2 border-t border-gray-200 pt-2 px-3 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--navy-900)] hover:text-[var(--orange-500)] active:text-[var(--orange-600)] font-medium text-xl transition-colors duration-200 py-3 px-3 touch-manipulation rounded-lg hover:bg-gray-100 active:bg-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

