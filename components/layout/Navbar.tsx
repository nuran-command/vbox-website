"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Use global language context
  const { lang, setLang, t } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // Adjust for navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Option 1: Glassmorphism when scrolled past top
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Option 3: Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navClasses = `fixed w-full z-50 text-white transition-all duration-300 ease-in-out ${
    isHidden ? '-translate-y-full' : 'translate-y-0'
  } ${
    isScrolled 
      ? 'bg-espresso/50 backdrop-blur-md shadow-lg py-4 border-b border-white/10' 
      : 'bg-transparent pt-6 pb-4'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center"
          onClick={(e) => scrollToSection(e, 'top')}
        >
          <img src="/images/vbox_logo.png" alt="vbox logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-body text-base font-medium">
          <Link href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-amber transition-colors">{t('nav.about')}</Link>
          <Link href="#achievements" onClick={(e) => scrollToSection(e, 'achievements')} className="hover:text-amber transition-colors">{t('nav.achievements')}</Link>
          <Link href="#micromarket" onClick={(e) => scrollToSection(e, 'micromarket')} className="hover:text-amber transition-colors">{t('nav.micromarket')}</Link>
          <Link href="#join" onClick={(e) => scrollToSection(e, 'join')} className="hover:text-amber transition-colors">{t('nav.join')}</Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
            className="w-12 h-12 rounded-full bg-orange flex items-center justify-center text-sm font-bold transition-transform hover:scale-105"
          >
            {lang === 'en' ? 'RU' : 'EN'}
          </button>
          <Link 
            href="#contacts" 
            onClick={(e) => scrollToSection(e, 'contacts')}
            className="px-8 py-3 rounded-full bg-orange font-body font-bold text-sm transition-transform hover:scale-105 text-center"
          >
            {t('nav.contact')}
          </Link>
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
          <Link href="#about" className="font-body text-lg" onClick={(e) => scrollToSection(e, 'about')}>{t('nav.about')}</Link>
          <Link href="#achievements" className="font-body text-lg" onClick={(e) => scrollToSection(e, 'achievements')}>{t('nav.achievements')}</Link>
          <Link href="#micromarket" className="font-body text-lg" onClick={(e) => scrollToSection(e, 'micromarket')}>{t('nav.micromarket')}</Link>
          <Link href="#join" className="font-body text-lg" onClick={(e) => scrollToSection(e, 'join')}>{t('nav.join')}</Link>
          <div className="flex gap-4 pt-4 border-t border-white/20">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
              className="w-12 h-12 rounded-full bg-orange flex items-center justify-center font-bold"
            >
              {lang === 'en' ? 'RU' : 'EN'}
            </button>
            <Link 
              href="#contacts" 
              className="flex-1 rounded-full bg-orange font-bold font-body py-3 text-center" 
              onClick={(e) => scrollToSection(e, 'contacts')}
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
