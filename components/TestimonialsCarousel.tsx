'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'Tech Solutions Pvt Ltd',
    content: 'SLV Cargo Movers has been our trusted logistics partner for over 2 years. Their reliability and professional service have helped us scale our business efficiently.',
    rating: 5,
    avatar: '/api/placeholder/80/80'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'Global Exports Inc',
    content: 'Excellent service! They handle our international shipments with great care. The real-time tracking feature is very helpful for our business operations.',
    rating: 5,
    avatar: '/api/placeholder/80/80'
  },
  {
    id: 3,
    name: 'Amit Patel',
    company: 'Manufacturing Corp',
    content: 'Fast, reliable, and cost-effective. SLV Cargo Movers has never disappointed us. Their team is professional and always available when we need them.',
    rating: 5,
    avatar: '/api/placeholder/80/80'
  },
  {
    id: 4,
    name: 'Sunita Reddy',
    company: 'Retail Chain',
    content: 'The best logistics service in the industry. They deliver on time, every time. Highly recommended for anyone looking for reliable cargo services.',
    rating: 5,
    avatar: '/api/placeholder/80/80'
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative max-w-5xl mx-auto px-4">
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 p-8 sm:p-12 mx-0 border border-gray-100">
              {/* Rating Stars */}
              <motion.div 
                className="flex justify-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Testimonial Content */}
              <motion.blockquote 
                className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 sm:mb-10 italic leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                "{testimonials[currentIndex].content}"
              </motion.blockquote>

              {/* Author Info */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-4 sm:space-y-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-white font-bold text-2xl sm:text-3xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </motion.div>
                <div className="text-center sm:text-left">
                  <h4 className="text-lg sm:text-xl font-semibold text-navy-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <motion.button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 touch-manipulation group"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft size={24} className="text-navy-900 group-hover:text-white transition-colors" />
      </motion.button>

      <motion.button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 sm:translate-x-6 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 touch-manipulation group"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight size={24} className="text-navy-900 group-hover:text-white transition-colors" />
      </motion.button>

      {/* Dots Indicator */}
      <motion.div 
        className="flex justify-center space-x-3 mt-10 sm:mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-orange-500 w-8 h-3 shadow-lg' 
                : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
