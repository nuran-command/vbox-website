import React from 'react';
import Link from 'next/link';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"></line>
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-espresso text-white">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 py-[64px] md:py-[96px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px]">
          
          {/* Col 1: Logo, Tagline, Socials */}
          <div className="flex flex-col h-full justify-between gap-[48px]">
            <div>
              <Link href="/" className="inline-block mb-[24px]">
                <img src="/images/vbox_logo.png" alt="vbox logo" className="h-12 w-auto object-contain" />
              </Link>
              <p className="font-body text-[14px] text-white/70 leading-[1.6] mb-[32px] max-w-[300px]">
                Социальный стартап, объединяющий людей и технологии для создания инклюзивных рабочих мест в Казахстане.
              </p>
              <div className="flex items-center gap-[16px]">
                <a href="#" className="text-white hover:text-yellow transition-colors">
                  <InstagramIcon className="w-[28px] h-[28px]" />
                </a>
                <a href="#" className="text-white hover:text-yellow transition-colors">
                  <TwitterIcon className="w-[28px] h-[28px]" />
                </a>
              </div>
            </div>
            
            <p className="font-body text-[12px] text-white/40">
              © 2024 ВБОКС. Все права защищены.
            </p>
          </div>

          {/* Col 2: Site Links */}
          <div className="flex flex-col">
            <h4 className="font-body font-[700] text-[14px] text-white mb-[24px]">Сайт</h4>
            <div className="flex flex-col gap-[16px]">
              <Link href="#about" className="font-body text-[14px] text-white/70 hover:text-yellow transition-colors">О нас</Link>
              <Link href="#news" className="font-body text-[14px] text-white/70 hover:text-yellow transition-colors">Новости</Link>
              <Link href="#support" className="font-body text-[14px] text-white/70 hover:text-yellow transition-colors">Поддержка</Link>
            </div>
          </div>

          {/* Col 3: Company Links */}
          <div className="flex flex-col">
            <h4 className="font-body font-[700] text-[14px] text-white mb-[24px]">Компания</h4>
            <div className="flex flex-col gap-[16px]">
              <Link href="#how-it-works" className="font-body text-[14px] text-white/70 hover:text-yellow transition-colors">Как мы работаем</Link>
              <Link href="#terms" className="font-body text-[14px] text-white/70 hover:text-yellow transition-colors">Условия сервиса</Link>
              <Link href="#faq" className="font-body text-[14px] text-white/70 hover:text-yellow transition-colors">FAQ</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
