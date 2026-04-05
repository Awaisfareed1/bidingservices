'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="xl:max-w-7xl lg:max-w-4xl md:max-w-2xl mx-auto md:px-4 md:py-4 py-4 px-6 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">MySite</h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col bg-white border-t">
          <Link href="/" className="py-3 px-6 border-b">Home</Link>
          <Link href="/blog" className="py-3 px-6 border-b">Blogs</Link>
          <Link href="/about" className="py-3 px-6 border-b">About</Link>
          <Link href="/services" className="py-3 px-6 border-b">Services</Link>
          <Link href="/contact" className="py-3 px-6">Contact</Link>
        </div>
      </div>
    </nav>
  );
}