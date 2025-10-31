import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--navy-900)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">S L V Cargo Movers and Packers</h3>
            <p className="text-gray-300 mb-4">
              Logistics Made Simple - Your trusted partner for reliable and efficient cargo solutions since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Logistics</li>
              <li className="text-gray-300">Cargo Movers</li>
              <li className="text-gray-300">Packers</li>
              <li className="text-gray-300">End-to-End Delivery</li>
              <li className="text-gray-300">Freight Movers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">SAHAKARNAGAR, BANGALORE-560092, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                <a href="tel:+919901389430" className="text-gray-300 hover:text-orange-500 transition-colors">
                  +91 99013 89430
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-orange-500 flex-shrink-0" />
                <a href="https://wa.me/919901389430" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">
                  WhatsApp: +91 99013 89430
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                <a href="mailto:slvcargomoverss@gmail.com" className="text-gray-300 hover:text-orange-500 transition-colors">
                  slvcargomoverss@gmail.com
                </a>
              </li>
              <li className="text-gray-300 text-sm mt-4">
                Working Hours: 9 AM - 6 PM (Mon-Sat)
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} S L V Cargo Movers and Packers. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            WWW.SLVCARGO.IN
          </p>
        </div>
      </div>
    </footer>
  );
}
