'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TruckTransitionProps {
  activeSection: number;
  scrollDirection?: 'down' | 'up';
}

export default function TruckTransition({ activeSection, scrollDirection = 'down' }: TruckTransitionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousSection, setPreviousSection] = useState(1);

  // Trigger transition when section changes
  useEffect(() => {
    if (activeSection !== previousSection) {
      setIsTransitioning(true);
      
      // End transition faster - deblur happens earlier
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setPreviousSection(activeSection);
      }, 500); // Further reduced to 0.5s

      return () => clearTimeout(timer);
    }
  }, [activeSection, previousSection]);

  // Calculate truck position based on active section and scroll direction
  const getTruckPosition = (section: number, direction: 'down' | 'up') => {
    if (direction === 'down') {
      // Left to right when scrolling down
      const positions = {
        1: 20,  // Section 1 - far left
        2: 40,  // Section 2 - left middle
        3: 60,  // Section 3 - right middle
        4: 80   // Section 4 - far right
      };
      return positions[section as keyof typeof positions] || 20;
    } else {
      // Right to left when scrolling up
      const positions = {
        1: 80,  // Section 1 - far right
        2: 60,  // Section 2 - right middle
        3: 40,  // Section 3 - left middle
        4: 20   // Section 4 - far left
      };
      return positions[section as keyof typeof positions] || 80;
    }
  };

  const truckX = getTruckPosition(isTransitioning ? activeSection : previousSection, scrollDirection);

  // Inline Truck SVG Component with direction-based flip
  const TruckSVG = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 32" 
      width="64" 
      height="32" 
      fill="none" 
      stroke="var(--orange-500)" 
      strokeWidth="2"
      className="drop-shadow-lg"
      style={{
        transform: scrollDirection === 'up' ? 'scaleX(-1)' : 'scaleX(1)',
      }}
    >
      <rect x="2" y="10" width="30" height="12" rx="2" ry="2" />
      <rect x="34" y="14" width="20" height="8" rx="1" ry="1" />
      <circle cx="12" cy="24" r="3" fill="var(--orange-500)" />
      <circle cx="42" cy="24" r="3" fill="var(--orange-500)" />
    </svg>
  );

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none">
      {/* Background blur overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(6px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ 
              duration: 0.15, // Even faster blur in
              exit: { duration: 0.1 } // Much faster blur out
            }}
            className="absolute inset-0 bg-black/5"
          />
        )}
      </AnimatePresence>

      {/* Horizontal line with section points - only visible during transitions */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2"
          >
            {/* Horizontal path line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 opacity-40" />
            
            {/* Section points along the horizontal line */}
            <div className="absolute top-0 left-0 right-0 flex justify-between px-[20vw]">
              {[1, 2, 3, 4].map((section) => (
                <motion.div
                  key={section}
                  animate={{
                    scale: activeSection === section ? 1.4 : 1,
                    opacity: activeSection === section ? 1 : 0.6,
                  }}
                  className="w-4 h-4 rounded-full bg-orange-500 shadow-lg transform -translate-y-1/2 border-2 border-white"
                  style={{
                    boxShadow: activeSection === section ? '0 0 20px rgba(249, 115, 22, 0.6)' : '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Truck moving horizontally along the line */}
      <motion.div
        animate={{
          x: `${truckX}vw`,
          opacity: isTransitioning ? 1 : 0,
        }}
        transition={{
          x: {
            duration: isTransitioning ? 0.4 : 0, // Smooth horizontal movement
            ease: [0.25, 0.1, 0.25, 1],
          },
          opacity: {
            duration: 0.15,
          }
        }}
        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: 0,
        }}
      >
        <motion.div
          animate={{
            scale: isTransitioning ? [1, 1.1, 1] : 1,
            rotate: isTransitioning ? [0, 2, -2, 0] : 0,
          }}
          transition={{
            duration: 0.3,
            repeat: isTransitioning ? Infinity : 0,
          }}
        >
          <TruckSVG />
          
          {/* Glow effect during transition */}
          <AnimatePresence>
            {isTransitioning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="absolute inset-0 blur-md"
                style={{
                  background: 'radial-gradient(circle, var(--orange-500) 0%, transparent 70%)',
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Speed trail effect during transition - direction-based */}
        <AnimatePresence>
          {isTransitioning && (
            <div className="absolute top-1/2 transform -translate-y-1/2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: scrollDirection === 'down' ? -10 : 10 }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    x: scrollDirection === 'down' ? [0, -20] : [0, 20],
                    scale: [1, 0.8],
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: 'easeOut',
                  }}
                  className={`absolute w-6 h-1 rounded-full ${
                    scrollDirection === 'down' 
                      ? 'bg-gradient-to-l from-orange-400/60 to-transparent' 
                      : 'bg-gradient-to-r from-orange-400/60 to-transparent'
                  }`}
                  style={{
                    [scrollDirection === 'down' ? 'right' : 'left']: `${30 + i * 10}px`,
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
