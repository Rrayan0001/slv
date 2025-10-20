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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-2 sm:top-6 left-0 right-0 z-50 px-3 sm:px-8">
      <nav className="bg-black rounded-xl sm:rounded-3xl shadow-2xl mx-auto max-w-7xl">
        <div className="px-3 py-2 sm:px-10 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo - Mobile Optimized */}
            <Link href="/" className="flex items-center touch-manipulation">
              <Image
                src="/slvlogo1.png"
                alt="SLV Cargo Movers"
                width={140}
                height={35}
                className="h-6 sm:h-9 md:h-10 w-auto"
                priority
                sizes="(max-width: 640px) 100px, 140px"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-orange-400 active:text-orange-500 font-medium text-sm transition-all duration-300 touch-manipulation"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button - Enhanced touch target */}
            <button
              className="md:hidden text-white p-2 touch-manipulation hover:text-orange-400 active:text-orange-500 transition-colors duration-200 min-w-[40px] min-h-[40px] flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation - Improved spacing */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-2 border-t border-gray-700 pt-4 animate-fadeIn">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-orange-400 active:text-orange-500 font-medium text-base transition-colors duration-200 py-3 px-3 touch-manipulation rounded-lg hover:bg-white/5 active:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

