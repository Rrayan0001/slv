'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Truck, Ship, Warehouse, Package, Clock, Shield, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ServiceCard from '../../../components/ServiceCard';
import Button from '../../../components/Button';
import RippleBackground from '../../../components/RippleBackground';

export default function Services() {
  const services = [
    {
      title: "Air Freight",
      description: "Fast and reliable air cargo services for time-sensitive shipments across domestic and international routes.",
      icon: "plane",
      features: [
        "Same day and next day delivery",
        "International shipping network",
        "Real-time tracking",
        "Custom clearance support",
        "Insurance coverage",
        "Dangerous goods handling"
      ],
      pricing: "Starting from ₹50/kg"
    },
    {
      title: "Road Transport",
      description: "Comprehensive road transportation solutions with our modern fleet ensuring safe and timely delivery.",
      icon: "truck",
      features: [
        "Full truck load (FTL) services",
        "Part truck load (PTL) services",
        "Door-to-door delivery",
        "Temperature-controlled vehicles",
        "24/7 tracking system",
        "Cash on delivery option"
      ],
      pricing: "Starting from ₹2/km"
    },
    {
      title: "Sea Freight",
      description: "Cost-effective sea freight services for large volume shipments with global shipping network.",
      icon: "ship",
      features: [
        "Container shipping (FCL/LCL)",
        "Port-to-port services",
        "Custom clearance assistance",
        "Warehousing at ports",
        "Documentation support",
        "Cargo insurance"
      ],
      pricing: "Starting from ₹15,000/container"
    },
    {
      title: "Warehousing",
      description: "Secure warehousing facilities with advanced inventory management and distribution services.",
      icon: "warehouse",
      features: [
        "Temperature-controlled storage",
        "Inventory management system",
        "Pick and pack services",
        "Quality inspection",
        "Security surveillance",
        "Flexible storage options"
      ],
      pricing: "Starting from ₹50/sq ft/month"
    }
  ];

  const additionalServices = [
    {
      icon: Package,
      title: "Packaging Solutions",
      description: "Professional packaging services to ensure your goods are protected during transit."
    },
    {
      icon: Shield,
      title: "Insurance Services",
      description: "Comprehensive cargo insurance coverage for all your shipments."
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Same day and next day delivery services for urgent shipments."
    },
    {
      icon: MapPin,
      title: "Custom Clearance",
      description: "Expert assistance with customs documentation and clearance procedures."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Request Quote",
      description: "Contact us with your shipment details and requirements."
    },
    {
      step: "02",
      title: "Get Customized Plan",
      description: "We provide a tailored logistics solution with competitive pricing."
    },
    {
      step: "03",
      title: "Schedule Pickup",
      description: "Arrange pickup at your location at a convenient time."
    },
    {
      step: "04",
      title: "Track & Monitor",
      description: "Monitor your shipment in real-time with our tracking system."
    },
    {
      step: "05",
      title: "Safe Delivery",
      description: "Your cargo is delivered safely to the destination."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-orange-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive logistics solutions designed to meet your business needs. 
              From air freight to warehousing, we provide end-to-end cargo solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
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
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our main logistics services designed to handle all your cargo transportation needs.
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
              >
                <div className="order-1">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </div>
                
                <div className="order-2">
                  <div className="space-y-8">
                    <div className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full text-base font-semibold">
                      {service.pricing}
                    </div>
                    <h3 className="text-3xl font-bold text-navy-900">Service Features</h3>
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-4">
                          <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-700 text-lg leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button href="/contact" variant="primary" className="mt-8 text-lg px-8 py-4">
                      Get Quote
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Value-added services to enhance your logistics experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple 5-step process to get your cargo moving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-orange-200 transform translate-x-8 z-0"></div>
                )}
                <h3 className="text-xl font-bold text-navy-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our logistics experts to discuss your specific requirements 
              and get a tailored solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
                Get Custom Quote
              </Button>
              <Button href="tel:+919876543210" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy-900">
                Call Expert
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
