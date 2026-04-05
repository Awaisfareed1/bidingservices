'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur border-b border-[#1f1f1f]">
      
      <div className="xl:max-w-7xl lg:max-w-4xl md:max-w-2xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          Biding<span className="text-purple-500">Services</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/blogs" className="hover:text-white transition">Blogs</Link>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="ml-4 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0a0a] border-t border-[#1f1f1f]"
          >
            <div className="flex flex-col text-gray-300">

              {[
                { name: 'Home', href: '/' },
                { name: 'Blogs', href: '/blogs' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="py-4 px-6 border-b border-[#1f1f1f] hover:bg-[#111]"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="p-4">
                <Link
                  href="/contact"
                  className="block text-center bg-purple-600 py-3 rounded-lg text-white"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}