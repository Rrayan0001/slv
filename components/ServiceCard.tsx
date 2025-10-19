'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Truck, Ship, Warehouse } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

const iconMap = {
  plane: Plane,
  truck: Truck,
  ship: Ship,
  warehouse: Warehouse,
};

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Truck;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold text-navy-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

