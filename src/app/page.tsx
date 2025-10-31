'use client';

import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Truck, Users, Award, Clock, Play, X, MessageCircle, Phone, Mail, ChevronRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceCard from '../../components/ServiceCard';
import Button from '../../components/Button';
import { Cover } from '../../components/Cover';

// Lazy load heavy components
const RippleBackground = lazy(() => import('../../components/RippleBackground'));

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user has already seen the intro in this session
    const seenInSession = sessionStorage.getItem('slv-intro-seen');
    
    if (seenInSession) {
      // User has already seen intro in this session (navigated from another page)
      setShowIntro(false);
      setHasVisited(true);
    } else {
      // New session or page refresh - show the intro
      setShowIntro(true);
    }

    // Handle scroll to skip intro
    const handleScroll = () => {
      if (showIntro && window.scrollY > 50) {
        handleSkipIntro();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showIntro]);

  const handleSkipIntro = () => {
    setShowIntro(false);
    // Store in sessionStorage (clears when browser/tab closes)
    sessionStorage.setItem('slv-intro-seen', 'true');
    setHasVisited(true);
  };

  const handleVideoEnd = () => {
    handleSkipIntro();
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSidebarExpanded &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarExpanded(false);
      }
    };

    if (isSidebarExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarExpanded]);


  const stats = [
    { value: 1000, label: "Successful Deliveries", suffix: "+" },
    { value: 50, label: "Cities Covered", suffix: "+" },
    { value: 18, label: "Years Experience", suffix: "+" },
    { value: 99, label: "Customer Satisfaction", suffix: "%" }
  ];

  const features = [
    "24/7 Customer Support",
    "Real-time Tracking",
    "Insurance Coverage",
    "Door-to-Door Service",
    "Custom Packaging",
    "Fast Processing"
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      {/* Full-Screen Intro Video */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          >
            {/* Video Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                preload="metadata"
                className="w-full h-full object-contain"
              >
                <source src="/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Skip Button - Mobile Optimized */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                onClick={handleSkipIntro}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-sm text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 transition-all duration-300 group border border-white/20 touch-manipulation min-h-[44px] min-w-[44px]"
              >
                <span className="text-xs sm:text-sm font-medium">Skip</span>
                <X size={16} className="sm:w-[18px] sm:h-[18px] group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>

              {/* Scroll hint - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-xs sm:text-sm text-center"
              >
                <p className="hidden sm:block">Scroll down to skip</p>
                <p className="block sm:hidden">Swipe up to skip</p>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="mt-2"
                >
                  ↓
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative pt-28 pb-8 sm:pt-32 sm:pb-24 bg-white overflow-hidden w-full">
        {/* Background image overlay */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[url('/final.png')] bg-cover bg-center opacity-10"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 box-border">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4 lg:gap-2 items-start lg:items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3 sm:space-y-6 lg:space-y-8"
            >
              <h1 className="font-bold text-[28px] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--navy-900)]">
                <Cover>Fast & Reliable</Cover>
                <span className="block">Logistics Solutions</span>
              </h1>
              
              <p className="text-[13px] sm:text-base md:text-lg lg:text-xl text-gray-600 leading-[1.5]">
                Your trusted partner for seamless cargo transportation across India. 
                From air freight to warehousing, we deliver excellence with every shipment.
              </p>

              <p className="text-[12px] sm:text-sm md:text-base lg:text-lg text-gray-600 leading-[1.5]">
                Since 2005, S L V Cargo Movers and Packers has been serving clients including Mahindra Logistics, 
                Rivigo, Bosch, FSL, and currently working on ABFRL Project. We have received excellence awards 
                from our working companies. Whether you need same-day delivery or domestic shipping, 
                our expert team ensures your cargo reaches its destination safely and on time.
              </p>

              <div className="pt-1 sm:pt-6">
                <Button href="/contact" variant="primary" className="text-[13px] sm:text-base px-6 py-3 sm:px-8 sm:py-4 bg-[var(--orange-500)] hover:bg-[var(--orange-600)] text-white rounded-lg">
                  Request a Quote
                </Button>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-gray-600">
                <span>Rated</span>
                <div className="flex text-yellow-400 text-xs sm:text-base">
                  {'⭐'.repeat(5)}
                </div>
                <span className="font-semibold">5 stars</span>
                <span className="hidden sm:inline">by trusted tradesmen</span>
              </div>
            </motion.div>

            {/* Right Content - Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end items-center lg:items-start pt-8 lg:pt-0"
            >
              <motion.div
                className="relative max-w-[280px] sm:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px] perspective"
                whileHover={{
                  rotateX: -8,
                  rotateY: 8,
                  scale: 1.05,
                  z: 50
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <Image
                    src="/final.png"
                    alt="SLV Logistics on Mobile"
                    width={400}
                    height={800}
                    className="w-[280px] sm:w-[360px] lg:w-[400px] xl:w-[440px] h-auto object-contain"
                    priority
                    loading="eager"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 440px"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy-900)] mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Three core offerings built for speed and reliability.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Logistics', description: 'End-to-end logistics management with domestic, city-focused coverage.', icon: 'truck' },
              { title: 'Cargo Movers', description: 'Safe, timely cargo movement with professional handling and tracking.', icon: 'truck' },
              { title: 'Packers', description: 'Professional packing using quality materials for secure transit.', icon: 'warehouse' },
            ].map((s, index) => (
              <ServiceCard key={index} title={s.title} description={s.description} icon={s.icon} delay={index * 0.1} />
            ))}
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy-900)] mb-6">About S L V Cargo Movers and Packers</h2>
              <p className="text-xl text-gray-600 mb-8">Founded in 2005, we are trusted by leading brands including Mahindra Logistics, Rivigo, Bosch, FSL, and are currently working on the ABFRL Project. We have received excellence awards from our partner companies.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="text-orange-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-800)] rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Truck size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Experience</h3>
                      <p className="text-white/70">18+ years delivering reliable logistics solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Award size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Trusted by Leaders</h3>
                      <p className="text-white/70">Mahindra, Rivigo, Bosch, FSL, ABFRL</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Users size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Awarded Excellence</h3>
                      <p className="text-white/70">Recognized for dependable, quality service</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Clients Section - Rotating Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy-900)] mb-8">Trusted By</h2>
            {/* Rotating Carousel */}
            <div className="relative overflow-hidden py-4">
              <div className="flex animate-scroll">
                {/* Duplicate items multiple times for seamless infinite loop */}
                {[...Array(3)].map((_, loopIndex) => (
                  <div key={loopIndex} className="flex gap-6 shrink-0 px-2">
                    {['Mahindra', 'Rivigo', 'Bosch', 'ABFRL'].map((name, index) => (
                      <motion.div
                        key={`${loopIndex}-${name}-${index}`}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center text-gray-700 font-semibold min-w-[180px] sm:min-w-[220px] md:min-w-[250px] border border-gray-200 hover:border-[var(--orange-500)] transition-all duration-300 flex items-center justify-center"
                      >
                        {name}
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </motion.div>

          {/* Simple static testimonials to align with clean design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { name: 'Mahindra Logistics', text: 'Reliable and timely service across city routes.' },
              { name: 'Bosch', text: 'Professional team and excellent handling of goods.' },
              { name: 'ABFRL', text: 'End-to-end delivery with great communication.' }
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6 text-left">
                <div className="text-yellow-400 mb-3">{'⭐'.repeat(5)}</div>
                <p className="text-gray-700 mb-4">{t.text}</p>
                <div className="text-sm font-semibold text-[var(--navy-900)]">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collapsible Sticky Sidebar CTA - Mobile Optimized */}
      <div ref={sidebarRef} className="fixed right-4 bottom-4 sm:bottom-auto sm:right-4 sm:top-1/2 sm:transform sm:-translate-y-1/2 z-[100]">
        <AnimatePresence mode="wait">
          {!isSidebarExpanded ? (
            <motion.button
              key="minimized"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setIsSidebarExpanded(true)}
              className="bg-[var(--orange-500)] hover:bg-[var(--orange-600)] active:bg-[var(--orange-600)] text-white rounded-full shadow-2xl p-4 transition-all duration-300 hover:shadow-3xl touch-manipulation w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center pointer-events-auto"
              aria-label="Open quote sidebar"
              style={{ zIndex: 100 }}
            >
              <MessageCircle size={24} className="sm:w-6 sm:h-6" />
            </motion.button>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-[calc(100vw-2rem)] sm:w-64 max-w-sm sm:max-w-none pointer-events-auto"
              style={{ zIndex: 100 }}
            >
              <div className="bg-gradient-to-r from-[var(--orange-500)] to-[var(--orange-600)] p-4 flex items-center justify-between">
                <h3 className="text-lg sm:text-lg font-bold text-white">Get a Quote</h3>
                <button
                  onClick={() => setIsSidebarExpanded(false)}
                  className="text-white hover:bg-white/20 active:bg-white/30 rounded-lg p-2 transition-colors duration-200 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Minimize sidebar"
                >
                  <ChevronRight size={24} className="sm:w-5 sm:h-5" />
                </button>
              </div>
              <div className="p-5 sm:p-5 w-full">
                <p className="text-xs text-gray-600 mb-5">Get instant pricing for your logistics needs</p>
                <div className="space-y-3">
                  <a
                    href="/contact"
                    className="block w-full bg-[var(--orange-500)] hover:bg-[var(--orange-600)] active:bg-[var(--orange-600)] text-white text-center py-3 px-4 rounded-lg text-base sm:text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl touch-manipulation min-h-[48px] flex items-center justify-center"
                  >
                    Request Quote
                  </a>
                  <a
                    href="https://wa.me/919901389430"
                    className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 active:bg-green-600 text-white py-3 px-4 rounded-lg text-base sm:text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl touch-manipulation min-h-[48px]"
                  >
                    <MessageCircle size={18} className="mr-2 sm:w-4 sm:h-4" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+919901389430"
                    className="flex items-center justify-center w-full bg-[var(--navy-900)] hover:bg-[var(--navy-800)] active:bg-[var(--navy-800)] text-white py-3 px-4 rounded-lg text-base sm:text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl touch-manipulation min-h-[48px]"
                  >
                    <Phone size={18} className="mr-2 sm:w-4 sm:h-4" />
                    Call Us
                  </a>
                  <a
                    href="mailto:slvcargomoverss@gmail.com"
                    className="flex items-center justify-center w-full border-2 border-gray-300 hover:border-[var(--orange-500)] active:border-[var(--orange-500)] text-[var(--navy-900)] py-3 px-4 rounded-lg text-base sm:text-sm font-semibold transition-all duration-300 touch-manipulation min-h-[48px]"
                  >
                    <Mail size={18} className="mr-2 sm:w-4 sm:h-4" />
                    Email
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">Available 9 AM - 6 PM</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
      <Suspense fallback={null}>
        <RippleBackground />
      </Suspense>
    </div>
  );
}