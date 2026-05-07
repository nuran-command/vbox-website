import React from 'react';

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default function Clients() {
  const clients = Array.from({ length: 6 });

  return (
    <section className="py-[96px] md:py-[128px] bg-cream overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-[80px]">
        {/* Header */}
        <div className="flex flex-col mb-[48px]">
          <div className="flex items-center gap-[16px] mb-[24px]">
            <span className="w-[32px] h-[2px] bg-orange"></span>
            <span className="text-orange font-body font-[600] text-[14px] leading-[1.4] uppercase tracking-wider">Наши пользователи</span>
          </div>
          
          <h2 className="font-display font-[700] text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-brown mb-[16px]">
            Нам доверяют
          </h2>
          
          <p className="font-body text-[16px] md:text-[18px] leading-[1.6] text-brownLight font-[400] max-w-[600px]">
            Ведущие компании Казахстана выбирают vbox для комфорта своих сотрудников.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="pl-4 sm:pl-8 md:pl-[max(80px,calc((100vw-1280px)/2+80px))] overflow-x-auto pb-[32px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-[20px] w-max pr-4 sm:pr-8 md:pr-[80px]">
          {clients.map((_, i) => (
            <div key={i} className="bg-creamCard rounded-2xl p-[24px] w-[260px] flex flex-col items-center gap-[16px] shrink-0 border border-beigeStrong/50 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer">
              {/* Logo Box */}
              <div className="h-[100px] w-full bg-white rounded-xl flex items-center justify-center shadow-sm">
                <span className="font-display font-[800] text-brown text-xl tracking-widest">BARYS</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-[4px] mt-[4px]">
                <p className="font-body font-[700] text-brown text-[16px]">BARYS</p>
                <p className="font-body text-brownLight text-[13px] md:text-[14px] leading-[1.4] flex items-center gap-[6px]">
                  <PinIcon className="w-[14px] h-[14px] shrink-0" /> Проспект Туран, 57, Астана
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
