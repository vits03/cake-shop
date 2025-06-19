'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full styled-font z-50 bg-[#F564A9] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 ">
          <a href="#hero">
            <Image src="/images/new-logo.png" alt="logo" width={65} height={70} />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-md">
           <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Transition */}
      <div
        className={`transition-all duration-300 ease-in-out right-0 overflow-hidden md:hidden bg-[#F564A9] px-8 ${
          menuOpen ? 'max-h-64 py-3' : 'max-h-0 py-0'
        }`}
      >
        <div className="flex flex-col space-y-3 text-mdfont-medium">
          <a href="#products" onClick={() => setMenuOpen(false)}>Cake</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
