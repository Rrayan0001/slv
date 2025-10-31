'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp, CheckCircle, Truck } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import RippleBackground from '../../../components/RippleBackground';

export default function About() {
  const milestones = [
    { year: '2005', title: 'Company Founded', description: 'S L V Cargo Movers and Packers started operations with a vision to provide reliable logistics solutions' },
    { year: '2010', title: 'First Major Client', description: 'Partnership with leading logistics companies began our journey of excellence' },
    { year: '2015', title: 'Excellence Award', description: 'Received excellence awards from our working companies recognizing our commitment to quality' },
    { year: '2020', title: 'Key Clients Partnership', description: 'Serving major clients including Mahindra Logistics, Rivigo, Bosch, and FSL' },
    { year: '2024', title: 'ABFRL Project', description: 'Currently working on ABFRL Project, continuing our legacy of excellence' }
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
      title: 'Experience',
      description: 'With 18+ years of experience, we bring expertise to every logistics challenge.'
    }
  ];

  const team = [
    {
      name: 'MANJUNATH M',
      role: 'Proprietor',
      experience: 'Leading the company since 2005'
    }
  ];

  const achievements = [
    'Excellence Award Recipient',
    '18+ Years of Experience',
    'Serving Major Corporate Clients',
    'Domestic Coverage Focus',
    'End-to-End Delivery Services',
    'Professional Packers & Movers'
  ];

  const keyClients = [
    'Mahindra Logistics',
    'Rivigo',
    'Bosch',
    'FSL',
    'ABFRL Project'
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-orange-500">S L V Cargo Movers and Packers</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your trusted logistics partner since 2005, delivering excellence in cargo solutions 
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
                Since 2005, S L V Cargo Movers and Packers has been committed to providing reliable, 
                efficient, and cost-effective logistics solutions. We have served prestigious clients 
                including Mahindra Logistics, Rivigo, Bosch, FSL, and are currently working on ABFRL Project. 
                Our excellence awards from working companies reflect our dedication to quality service.
              </p>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With 18+ years of experience in logistics, freight moving, and packing services, 
                we have established ourselves as a trusted partner for end-to-end delivery solutions. 
                Our focus on domestic coverage, particularly in cities, has enabled us to serve businesses 
                across India with reliability and professionalism.
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

      {/* Key Clients */}
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
              Our Key Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading companies across industries for our reliable logistics solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {keyClients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 text-center"
              >
                <Award size={40} className="text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-navy-900">{client}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a trusted startup in 2005 to a recognized logistics partner, here's our story of growth and success.
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
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind S L V Cargo Movers and Packers' success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
              Join thousands of satisfied customers who trust S L V Cargo Movers and Packers for their logistics needs.
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
