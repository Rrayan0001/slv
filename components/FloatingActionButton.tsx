'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X, ArrowUp } from 'lucide-react';

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actionButtons = [
    {
      icon: Phone,
      label: 'Call Now',
      href: 'tel:+919901389430',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Mail,
      label: 'Email Us',
      href: 'mailto:slvcargomoverss@gmail.com',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/919901389430',
      color: 'bg-[var(--orange-500)] hover:bg-[var(--orange-600)]'
    }
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="mb-3 sm:mb-4 w-12 h-12 bg-[var(--navy-900)] hover:bg-[var(--navy-800)] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl touch-manipulation"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 sm:w-16 sm:h-16 bg-[var(--orange-500)] hover:bg-[var(--orange-600)] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl touch-manipulation"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 space-y-3 flex flex-col items-end"
          >
            {actionButtons.map((button, index) => (
              <motion.a
                key={button.label}
                href={button.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 ${button.color} text-white px-3 py-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl min-w-[120px] justify-center whitespace-nowrap`}
              >
                <button.icon size={18} />
                <span className="text-sm font-medium">{button.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
