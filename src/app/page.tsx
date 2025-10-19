'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Truck, Plane, Ship, Users, Award, Clock } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceCard from '../../components/ServiceCard';
import Button from '../../components/Button';
import ScrollProgress from '../../components/ScrollProgress';
import FloatingActionButton from '../../components/FloatingActionButton';
import AnimatedCounter from '../../components/AnimatedCounter';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';

export default function Home() {
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
      <ScrollProgress />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                Logistics Made
                <span className="text-orange-500 block">Simple</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Your trusted partner for reliable and efficient cargo solutions. 
                We deliver excellence in every shipment with our comprehensive logistics services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
                  Get Free Quote
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button href="/services" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy-900">
                  Our Services
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.slice(0, 4).map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="text-3xl font-bold text-orange-500">
                        <AnimatedCounter 
                          value={stat.value} 
                          suffix={stat.suffix}
                          className="text-3xl font-bold text-orange-500"
                        />
                      </div>
                      <div className="text-sm text-gray-300 mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
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
