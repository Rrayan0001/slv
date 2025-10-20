'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Truck, Plane, Ship, Users, Award, Clock, Play, X } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceCard from '../../components/ServiceCard';
import Button from '../../components/Button';
import ScrollProgress from '../../components/ScrollProgress';
import FloatingActionButton from '../../components/FloatingActionButton';
import AnimatedCounter from '../../components/AnimatedCounter';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
  const services = [
    {
      title: "Air Freight",
      description: "Fast and reliable air cargo services for time-sensitive shipments across domestic and international routes.",
      icon: "plane"
    },
    {
      title: "Road Transport",
      description: "Comprehensive road transportation solutions with our modern fleet ensuring safe and timely delivery.",
      icon: "truck"
    },
    {
      title: "Sea Freight",
      description: "Cost-effective sea freight services for large volume shipments with global shipping network.",
      icon: "ship"
    },
    {
      title: "Warehousing",
      description: "Secure warehousing facilities with advanced inventory management and distribution services.",
      icon: "warehouse"
    }
  ];

  const stats = [
    { value: 1000, label: "Successful Deliveries", suffix: "+" },
    { value: 50, label: "Cities Covered", suffix: "+" },
    { value: 5, label: "Years Experience", suffix: "+" },
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
    <div className="min-h-screen bg-white">
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
      <section className="relative pt-28 pb-4 sm:pt-32 sm:pb-20 bg-white overflow-hidden flex items-start sm:items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 sm:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start sm:items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3 sm:space-y-6 lg:space-y-8"
            >
              <h1 className="text-[28px] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900">
                Websites for
                <span className="block">scaffolders</span>
              </h1>
              
              <p className="text-[13px] sm:text-base md:text-lg lg:text-xl text-gray-600 leading-[1.5]">
                Starting a new scaffolding business or keen to become the #1 scaffolder in your area? 
                Struggling to show up on Google or get enquiries? We're here to help.
              </p>

              <p className="text-[12px] sm:text-sm md:text-base lg:text-lg text-gray-600 leading-[1.5]">
                We design and build websites for scaffolders that do the job properly – no DIY, and no BS! 
                Whether you're just getting started or looking to take things up a notch, our scaffolding 
                web design and SEO packages help you get found online, win trust, and book more work.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 pt-1 sm:pt-4">
                <Button href="/contact" variant="primary" className="text-[13px] sm:text-base px-6 py-2.5 sm:px-8 sm:py-4 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white touch-manipulation w-full sm:w-auto rounded-lg">
                  Get a free quote
                </Button>
                <Button href="/services" variant="outline" className="text-[13px] sm:text-base px-6 py-2.5 sm:px-8 sm:py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white active:bg-gray-800 touch-manipulation w-full sm:w-auto rounded-lg">
                  See our packages
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
              className="relative flex justify-center lg:justify-end -mb-4"
            >
              <div className="relative w-full max-w-[240px] sm:max-w-md lg:max-w-lg">
        <Image
                  src="/final.png"
                  alt="SLV Logistics on Mobile"
                  width={700}
                  height={1400}
                  className="w-full h-auto object-contain"
          priority
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 50vw, 40vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to meet your business needs 
              with reliability, speed, and cost-effectiveness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button href="/services" variant="primary" className="text-lg px-8 py-4">
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Why Choose SLV Cargo Movers?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine years of experience with cutting-edge technology to provide 
                unmatched logistics solutions that drive your business forward.
              </p>
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
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Truck size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Fast Delivery</h3>
                      <p className="text-orange-100">Same day and next day delivery options</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Award size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Quality Assured</h3>
                      <p className="text-orange-100">ISO certified processes and procedures</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Users size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Expert Team</h3>
                      <p className="text-orange-100">Experienced professionals at your service</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Ship?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free quote today and experience the difference of working with 
              India's most reliable logistics partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
                Get Free Quote
              </Button>
              <Button href="tel:+919876543210" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy-900">
                <Clock className="mr-2" size={20} />
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <TestimonialsCarousel />
        </div>
      </section>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}