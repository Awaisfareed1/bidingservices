'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-600/20 to-black p-10 text-center">

          {/* Glow effect */}
          <div className="absolute inset-0 bg-purple-500 opacity-10 blur-3xl"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            Ready to Start Getting Interviews?
          </h2>

          <p className="text-gray-300 mb-6 relative">
            Let us handle your job applications while you focus on interviews.
          </p>

          <Link
            href="/contact"
            className="relative inline-block bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-medium transition text-white"
          >
            Get Started Now
          </Link>

        </div>
      </div>
    </motion.section>
  );
}