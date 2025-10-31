'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Truck, ArrowRight, CheckCircle, MapPin, FileText, Calendar, Route, Shield, Phone, MessageCircle, Mail, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ServiceCard from '../../../components/ServiceCard';
import Button from '../../../components/Button';
import RippleBackground from '../../../components/RippleBackground';

export default function Services() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

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

  const services = [
    {
      title: "Logistics",
      description: "Comprehensive logistics solutions designed to meet all your cargo transportation needs across domestic routes with a focus on cities.",
      icon: "truck",
      features: [
        "End-to-end logistics management",
        "Domestic coverage focused on cities",
        "Efficient route planning",
        "Real-time shipment tracking",
        "Professional handling and care",
        "Flexible scheduling"
      ],
      pricing: "Based on goods and requirements"
    },
    {
      title: "Cargo Movers",
      description: "Reliable cargo moving services ensuring safe and timely transportation of your goods with professional handling.",
      icon: "truck",
      features: [
        "Safe cargo transportation",
        "Professional handling",
        "Timely delivery",
        "Insurance coverage options",
        "Expert drivers and crew",
        "Vehicle tracking system"
      ],
      pricing: "Based on goods and distance"
    },
    {
      title: "Packers",
      description: "Expert packing services to ensure your goods are protected and secure during transit with quality materials and techniques.",
      icon: "warehouse",
      features: [
        "Professional packing services",
        "Quality packing materials",
        "Secure packaging techniques",
        "Item protection and safety",
        "Custom packing solutions",
        "Fragile item handling"
      ],
      pricing: "Based on goods and volume"
    },
    {
      title: "End-to-End Delivery",
      description: "Complete door-to-door delivery service handling everything from pickup to final delivery at your destination.",
      icon: "truck",
      features: [
        "Pickup from your location",
        "Secure transportation",
        "Door-to-door delivery",
        "Full logistics management",
        "End-to-end tracking",
        "Delivery confirmation"
      ],
      pricing: "Based on goods and distance"
    },
    {
      title: "Freight Movers",
      description: "Efficient freight moving services for commercial and industrial shipments with specialized handling equipment.",
      icon: "truck",
      features: [
        "Commercial freight services",
        "Industrial shipments",
        "Heavy cargo handling",
        "Specialized equipment",
        "Bulk freight solutions",
        "Flexible freight options"
      ],
      pricing: "Based on goods type and volume"
    }
  ];

  const additionalServices = [
    {
      icon: Package,
      title: "Packaging Solutions",
      description: "Professional packaging services to ensure your goods are protected during transit."
    },
    {
      icon: MapPin,
      title: "City-Focused Delivery",
      description: "Specialized services for city-based deliveries with optimized routes and faster turnaround."
    }
  ];

  const processSteps = [
    {
      icon: FileText,
      title: "Request Quote",
      description: "Contact us with your shipment details including pickup location, delivery address, item description, weight/volume, and preferred date/time."
    },
    {
      icon: Calendar,
      title: "Get Customized Plan",
      description: "We provide a tailored logistics solution with pricing based on your goods and requirements."
    },
    {
      icon: Route,
      title: "Schedule Pickup",
      description: "Arrange pickup at your location at a convenient time that works for you."
    },
    {
      icon: Shield,
      title: "Track & Monitor",
      description: "Monitor your shipment as it moves through our logistics network."
    },
    {
      icon: CheckCircle,
      title: "Safe Delivery",
      description: "Your cargo is delivered safely to the destination with confirmation."
    }
  ];

  const coverageAreas = [
    { name: "Bangalore", highlight: true },
    { name: "Mumbai", highlight: false },
    { name: "Delhi", highlight: false },
    { name: "Chennai", highlight: false },
    { name: "Hyderabad", highlight: false },
    { name: "Pune", highlight: false },
    { name: "Kolkata", highlight: false },
    { name: "Ahmedabad", highlight: false }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full relative">
      <Navbar />
      
      {/* Hero Section with Instant Quote CTA */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-800)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--orange-500)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--orange-500)] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete <span className="text-[var(--orange-500)]">Logistics Solutions</span> for Your Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              From logistics and cargo moving to packing and end-to-end delivery – we provide comprehensive cargo solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="#quote" variant="primary" className="text-lg px-8 py-4 bg-[var(--orange-500)] hover:bg-[var(--orange-600)] text-white shadow-xl">
                Get Instant Quote
                <ArrowRight className="ml-2 inline" size={20} />
              </Button>
              <Button href="tel:+919901389430" variant="outline" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[var(--navy-900)]">
                <Phone className="mr-2 inline" size={20} />
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collapsible Sticky Sidebar CTA */}
      <div ref={sidebarRef} className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
        <AnimatePresence mode="wait">
          {!isSidebarExpanded ? (
            // Minimized Button
            <motion.button
              key="minimized"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setIsSidebarExpanded(true)}
              className="bg-[var(--orange-500)] hover:bg-[var(--orange-600)] text-white rounded-full shadow-2xl p-4 transition-all duration-300 hover:shadow-3xl"
              aria-label="Open quote sidebar"
            >
              <MessageCircle size={24} />
            </motion.button>
          ) : (
            // Expanded Sidebar
            <motion.div
              key="expanded"
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* Header with minimize button */}
              <div className="bg-gradient-to-r from-[var(--orange-500)] to-[var(--orange-600)] p-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Get a Quote</h3>
                <button
                  onClick={() => setIsSidebarExpanded(false)}
                  className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors duration-200"
                  aria-label="Minimize sidebar"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 w-64">
                <p className="text-xs text-gray-600 mb-5">Get instant pricing for your logistics needs</p>
                <div className="space-y-3">
                  <a
                    href="/contact"
                    className="block w-full bg-[var(--orange-500)] hover:bg-[var(--orange-600)] text-white text-center py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Request Quote
                  </a>
                  <a
                    href="https://wa.me/919901389430"
                    className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+919901389430"
                    className="flex items-center justify-center w-full bg-[var(--navy-900)] hover:bg-[var(--navy-800)] text-white py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Phone size={16} className="mr-2" />
                    Call Us
                  </a>
                  <a
                    href="mailto:slvcargomoverss@gmail.com"
                    className="flex items-center justify-center w-full border-2 border-gray-300 hover:border-[var(--orange-500)] text-[var(--navy-900)] py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-300"
                  >
                    <Mail size={16} className="mr-2" />
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

      {/* Main Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy-900)] mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive logistics solutions designed to handle all your cargo transportation needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--orange-500)] to-[var(--orange-600)] rounded-xl flex items-center justify-center mb-6">
                    <Truck className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--navy-900)] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Pricing Badge */}
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-6">
                    <p className="text-sm font-semibold text-[var(--orange-600)]">Pricing</p>
                    <p className="text-sm text-gray-700">{service.pricing}</p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-[var(--navy-900)] text-sm uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="text-[var(--orange-500)] flex-shrink-0 mt-0.5 mr-2" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    href="/contact" 
                    variant="primary" 
                    className="w-full text-base py-3 bg-[var(--orange-500)] hover:bg-[var(--orange-600)]"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 inline" size={16} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive How It Works Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy-900)] mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple 5-step process to get your cargo moving
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[var(--orange-500)] via-[var(--orange-500)] to-transparent opacity-20"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                    className="relative text-center cursor-pointer group"
                  >
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-[var(--orange-500)] scale-110 shadow-xl' 
                        : 'bg-gradient-to-br from-[var(--orange-500)] to-[var(--orange-600)] scale-100'
                    }`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <div className={`w-2 h-2 mx-auto mb-4 rounded-full transition-all duration-300 ${
                      activeStep === index ? 'bg-[var(--orange-500)] scale-150' : 'bg-[var(--orange-500)] opacity-50'
                    }`}></div>
                    <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${
                      activeStep === index ? 'text-[var(--orange-500)]' : 'text-[var(--navy-900)]'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 ${
                      activeStep === index ? 'text-gray-800 font-medium' : ''
                    }`}>
                      {step.description}
                    </p>
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-4xl font-bold text-gray-100 group-hover:text-[var(--orange-500)] transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area with Visual Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy-900)] mb-6">
              Coverage Area
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We provide domestic logistics services with a focus on city-based coverage across India
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {coverageAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center border-2 ${
                  area.highlight 
                    ? 'border-[var(--orange-500)] bg-orange-50' 
                    : 'border-gray-200 hover:border-[var(--orange-500)]'
                }`}
              >
                <MapPin className={`mx-auto mb-3 ${area.highlight ? 'text-[var(--orange-500)]' : 'text-gray-400'}`} size={24} />
                <h3 className={`font-bold ${area.highlight ? 'text-[var(--orange-500)]' : 'text-[var(--navy-900)]'}`}>
                  {area.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto border border-gray-200"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--orange-500)] to-[var(--orange-600)] rounded-xl flex items-center justify-center">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--navy-900)]">Domestic & City-Focused</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed text-center">
              Our services are primarily focused on domestic routes and city-based deliveries, 
              ensuring efficient and reliable cargo transportation within India's major cities and regions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy-900)] mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Value-added services to enhance your logistics experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--orange-500)] to-[var(--orange-600)] rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--navy-900)] mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="quote" className="py-20 bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-800)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact our logistics experts to discuss your specific requirements 
              and get a tailored solution. Pricing depends on the goods to be forwarded.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" className="text-lg px-8 py-4 bg-[var(--orange-500)] hover:bg-[var(--orange-600)]">
                Get Custom Quote
              </Button>
              <Button href="tel:+919901389430" variant="outline" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[var(--navy-900)]">
                <Phone className="mr-2 inline" size={20} />
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <RippleBackground />
    </div>
  );
}
