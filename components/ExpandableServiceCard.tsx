'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: React.ReactNode;
}

export default function ExpandableServiceCard({ title, description, features, pricing, icon }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />
        )}
      </AnimatePresence>

      {/* Card */}
      <motion.div
        layout
        onClick={() => !isExpanded && setIsExpanded(true)}
        className={`relative cursor-pointer ${isExpanded ? 'fixed inset-4 sm:inset-8 z-50 max-w-2xl mx-auto' : ''}`}
      >
        <motion.div
          layout
          className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden ${
            isExpanded ? 'h-full sm:max-h-[90vh]' : 'h-auto'
          }`}
        >
          {/* Card Header */}
          <motion.div layout className="p-6 sm:p-8 border-b border-gray-100">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <motion.div
                  layout
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                >
                  {icon}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <motion.h3 layout className="text-xl sm:text-2xl font-bold text-gray-900">
                    {title}
                  </motion.h3>
                  <motion.p layout className="text-sm sm:text-base text-gray-600 mt-1">
                    {pricing}
                  </motion.p>
                </div>
              </div>

              {/* Close Button (only when expanded) */}
              {isExpanded && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                  className="flex-shrink-0 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </motion.button>
              )}

              {/* Expand Indicator */}
              {!isExpanded && (
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-orange-500" />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div layout className="px-6 sm:px-8 py-4">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Features (Expandable) */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-100 px-6 sm:px-8 py-6"
              >
                <h4 className="font-semibold text-gray-900 mb-4">Service Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 w-full sm:w-auto px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Get Quote
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
}
