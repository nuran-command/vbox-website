"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-transparent text-white pt-6 pb-4">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-[80px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/images/vbox_logo.png" alt="vbox logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-body text-base font-medium">
          <Link href="#about" className="hover:text-amber transition-colors">О нас</Link>
          <Link href="#achievements" className="hover:text-amber transition-colors">Достижения</Link>
          <Link href="#micromarket" className="hover:text-amber transition-colors">Микромаркет</Link>
          <Link href="#join" className="hover:text-amber transition-colors">Присоединиться</Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="w-12 h-12 rounded-full bg-orange flex items-center justify-center text-sm font-bold transition-transform hover:scale-105">
            RU
          </button>
          <button className="px-8 py-3 rounded-full bg-orange font-body font-bold text-sm transition-transform hover:scale-105">
            Связаться с нами
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-espresso/95 backdrop-blur-md text-white p-8 flex flex-col gap-6">
          <Link href="#about" className="font-body text-lg" onClick={() => setIsOpen(false)}>О нас</Link>
          <Link href="#achievements" className="font-body text-lg" onClick={() => setIsOpen(false)}>Достижения</Link>
          <Link href="#micromarket" className="font-body text-lg" onClick={() => setIsOpen(false)}>Микромаркет</Link>
          <Link href="#join" className="font-body text-lg" onClick={() => setIsOpen(false)}>Присоединиться</Link>
          <div className="flex gap-4 pt-4 border-t border-white/20">
            <button className="w-12 h-12 rounded-full bg-orange flex items-center justify-center font-bold">RU</button>
            <button className="flex-1 rounded-full bg-orange font-bold font-body">Связаться с нами</button>
          </div>
        </div>
      )}
    </nav>
  );
}
