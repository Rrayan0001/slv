'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import RippleBackground from '../../../components/RippleBackground';

export default function Contact() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the relocation process?",
      answer: "Our relocation process is simple: 1) Contact us with your requirements, 2) We provide a customized quote based on your goods and distance, 3) Schedule pickup at your convenience, 4) Track your shipment in real-time, 5) Safe delivery at your destination. We handle everything from packing to delivery."
    },
    {
      question: "How is pricing determined?",
      answer: "Pricing depends on several factors including the type of goods, weight, volume, distance, and service type required. We provide customized quotes based on your specific needs. Contact us for accurate pricing information tailored to your shipment."
    },
    {
      question: "What are your support hours?",
      answer: "Our office hours are Monday through Saturday, 9:00 AM to 6:00 PM. We are closed on Sundays. For urgent inquiries, you can reach us via WhatsApp at +91 99013 89430."
    },
    {
      question: "Do you provide insurance coverage?",
      answer: "Yes, we offer insurance coverage options for your cargo. We can discuss insurance plans that best suit your shipment needs during the quote process."
    },
    {
      question: "What areas do you cover?",
      answer: "We provide domestic logistics services with a focus on city-based coverage across India. Our primary service areas include major cities like Bangalore, Mumbai, Delhi, Chennai, Hyderabad, and Pune."
    },
    {
      question: "How quickly will you respond to my inquiry?",
      answer: "We typically respond to all inquiries via email within 24 hours during business hours. For urgent matters, please call us or reach out via WhatsApp for immediate assistance."
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Navbar />
      
      {/* Hero Section with Title and Tagline */}
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Contact <span className="text-[var(--orange-500)]">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our logistics experts. We're here to help with all your cargo transportation needs.
            </p>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
              Your trusted partner for seamless logistics solutions since 2005
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* WhatsApp and Get in Touch - Equal Width Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* WhatsApp Contact Card - Prominent */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={28} className="text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Contact via WhatsApp</h2>
              </div>
              
              <p className="text-base text-white/90 mb-6 leading-relaxed">
                Get instant responses and quick quotes! Chat with us directly on WhatsApp for the fastest way to reach our team.
              </p>

              <a
                href="https://wa.me/919901389430"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-white text-green-600 hover:bg-gray-50 active:bg-gray-100 font-bold text-base sm:text-lg px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 touch-manipulation mb-6"
              >
                <MessageCircle className="mr-3" size={22} />
                Chat on WhatsApp Now
              </a>

              {/* Additional Quick Contact Info */}
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/90 text-sm font-medium">Phone:</span>
                    <a href="tel:+919901389430" className="text-white font-semibold hover:text-white/80 transition-colors">
                      +91 99013 89430
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/90 text-sm font-medium">Hours:</span>
                    <span className="text-white text-sm">9 AM - 6 PM (Mon-Sat)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/90 text-sm font-medium">Response Time:</span>
                    <span className="text-white text-sm">Within minutes</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Company Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-800)] rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 text-white"
            >
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--orange-500)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Registered Business Address</h3>
                    <p className="text-gray-200 leading-relaxed">
                      SAHAKARNAGAR<br />
                      BANGALORE-560092<br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--orange-500)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
                    <a href="tel:+919901389430" className="text-xl text-white hover:text-[var(--orange-500)] transition-colors duration-200 font-medium">
                      +91 99013 89430
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--orange-500)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a href="mailto:slvcargomoverss@gmail.com" className="text-lg text-white hover:text-[var(--orange-500)] transition-colors duration-200 break-all">
                      slvcargomoverss@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                    <a href="https://wa.me/919901389430" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-green-400 transition-colors duration-200 font-medium">
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--orange-500)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
                    <p className="text-gray-200 leading-relaxed">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Google Map - Below Both Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-200"
          >
            <div className="bg-gray-100 p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-[var(--navy-900)] flex items-center">
                <MapPin className="mr-2 text-[var(--orange-500)]" size={20} />
                Our Location
              </h3>
            </div>
            <div className="h-80 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0418!2d77.5548!3d13.0418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzMwLjUiTiA3N8KwMzMnMTcuMyJF!5e0!3m2!1sen!2sin!4v1728123456!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="S L V Cargo Movers and Packers Location - Sahakarnagar, Bangalore"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="bg-gray-50 p-4 border-t border-gray-200">
              <a
                href="https://maps.app.goo.gl/SQhxbTWxHCUbQFEG6?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm text-[var(--orange-500)] hover:text-[var(--orange-600)] font-semibold transition-colors duration-200"
              >
                <MapPin className="inline mr-2" size={16} />
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="text-[var(--orange-500)]" size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy-900)] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200 touch-manipulation min-h-[60px]"
                >
                  <h3 className="text-lg font-semibold text-[var(--navy-900)] pr-4">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="text-[var(--orange-500)] flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                  )}
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
      <RippleBackground />
    </div>
  );
}
