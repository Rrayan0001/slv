'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp, CheckCircle, Truck } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import RippleBackground from '../../../components/RippleBackground';

export default function About() {
  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Started with a vision to revolutionize logistics in India' },
    { year: '2020', title: 'First 1000 Shipments', description: 'Achieved our first milestone with excellent customer satisfaction' },
    { year: '2021', title: 'Fleet Expansion', description: 'Added 50+ vehicles to our growing fleet' },
    { year: '2022', title: 'ISO Certification', description: 'Received ISO 9001:2015 certification for quality management' },
    { year: '2023', title: 'Digital Platform', description: 'Launched our digital tracking and booking platform' },
    { year: '2024', title: '50+ Cities', description: 'Expanded our network to cover 50+ cities across India' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Reliability',
      description: 'We deliver on our promises with consistent, dependable service every time.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do, driving our continuous improvement.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We maintain the highest standards in all our operations and service delivery.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We embrace technology and innovation to provide better logistics solutions.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      experience: '15+ years in logistics',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Director',
      experience: '12+ years in supply chain',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Amit Patel',
      role: 'Technology Head',
      experience: '10+ years in logistics tech',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sunita Reddy',
      role: 'Customer Relations',
      experience: '8+ years in customer service',
      image: '/api/placeholder/300/300'
    }
  ];

  const achievements = [
    'ISO 9001:2015 Certified',
    '99% Customer Satisfaction Rate',
    '1000+ Successful Deliveries',
    '50+ Cities Coverage',
    '24/7 Customer Support',
    'Real-time Tracking System'
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-orange-500">SLV Cargo Movers</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your trusted logistics partner since 2019, delivering excellence in cargo solutions 
              across India with innovation, reliability, and customer-centric approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-navy-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To revolutionize logistics in India by providing reliable, efficient, and cost-effective 
                cargo solutions that enable businesses to grow and succeed. We strive to be the most 
                trusted logistics partner by delivering exceptional service and innovative solutions.
              </p>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become India's leading logistics company by 2030, known for our technological 
                innovation, operational excellence, and unwavering commitment to customer satisfaction. 
                We envision a future where logistics is seamless, transparent, and accessible to all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle size={20} className="flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a trusted logistics partner, here's our story of growth and success.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-500"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-orange-500 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-navy-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center z-10 relative">
                    <Truck size={24} className="text-white" />
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind SLV Cargo Movers' success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <Users size={80} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </div>
              </motion.div>
            ))}
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied customers who trust SLV Cargo Movers for their logistics needs.
            </p>
            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <RippleBackground />
    </div>
  );
}
