'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, MessageCircle, Facebook, Instagram, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import RippleBackground from '../../../components/RippleBackground';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be handled via email service
    setIsSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });
    }, 5000);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const serviceTypes = [
    'Logistics',
    'Cargo Movers',
    'Packers',
    'End-to-End Delivery Service',
    'Freight Movers',
    'Other'
  ];

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

      {/* Contact Form & Company Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--orange-500)] to-[var(--orange-600)] rounded-lg flex items-center justify-center">
                  <Send className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-[var(--navy-900)]">Send Us a Message</h2>
              </div>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center"
                >
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-green-800 mb-3">Thank You!</h3>
                  <p className="text-green-700 text-lg leading-relaxed">
                    Your inquiry has been submitted successfully. We will reply to you via email at{' '}
                    <a href="mailto:slvcargomoverss@gmail.com" className="font-semibold underline">
                      slvcargomoverss@gmail.com
                    </a>{' '}
                    within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form 
                  action={`mailto:slvcargomoverss@gmail.com?subject=Contact Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService Type: ${formData.serviceType}%0D%0AMessage: ${formData.message}`}
                  method="POST"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[var(--navy-900)] mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--orange-500)] focus:border-[var(--orange-500)] transition-all duration-200 text-base"
                        placeholder="Your full name"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[var(--navy-900)] mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--orange-500)] focus:border-[var(--orange-500)] transition-all duration-200 text-base"
                        placeholder="your@email.com"
                        autoComplete="email"
                        inputMode="email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[var(--navy-900)] mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--orange-500)] focus:border-[var(--orange-500)] transition-all duration-200 text-base"
                        placeholder="+91 99013 89430"
                        autoComplete="tel"
                        inputMode="tel"
                      />
                    </div>
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-semibold text-[var(--navy-900)] mb-2">
                        Service Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--orange-500)] focus:border-[var(--orange-500)] transition-all duration-200 text-base bg-white"
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[var(--navy-900)] mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--orange-500)] focus:border-[var(--orange-500)] transition-all duration-200 resize-none text-base"
                      placeholder="Tell us about your requirements, questions, or any special instructions..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full text-lg py-4 bg-[var(--orange-500)] hover:bg-[var(--orange-600)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Company Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-800)] rounded-2xl shadow-xl p-8 lg:p-10 text-white">
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
              </div>

              {/* Interactive Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <div className="bg-gray-100 p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-[var(--navy-900)] flex items-center">
                    <MapPin className="mr-2 text-[var(--orange-500)]" size={20} />
                    Our Location
                  </h3>
                </div>
                <div className="h-80 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0418!2d77.5548!3d13.0418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d9b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sSahakarnagar%2C%20Bangalore%2C%20Karnataka%20560092!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
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
                  <p className="text-sm text-gray-600 text-center">
                    Click on the map for directions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
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
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
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

      {/* Social Media Links */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-[var(--navy-900)] mb-6">Connect With Us</h3>
            <p className="text-gray-600 mb-8">Follow us on social media for updates and logistics tips</p>
            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.me/919901389430"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Note: Social media links will be updated when accounts are created
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <RippleBackground />
    </div>
  );
}
