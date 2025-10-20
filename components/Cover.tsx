'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CoverProps {
  children: React.ReactNode;
}

export function Cover({ children }: CoverProps) {
  return (
    <motion.span 
      className="relative inline-block group cursor-pointer rounded-md"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Black background that appears on hover */}
      <span className="absolute inset-0 rounded-md bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

      {/* Animated speed lines - only visible on hover */}
      <span className="absolute inset-0 overflow-hidden rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              top: `${5 + i * 10}%`,
              left: '-100%',
              width: '300%',
            }}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{
              x: '100%',
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.03,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </span>

      {/* Main text - black by default, white on hover */}
      <span className="relative z-20 inline-block text-gray-900 group-hover:text-white transition-colors duration-300 font-bold">
        {children}
      </span>
    </motion.span>
  );
}
