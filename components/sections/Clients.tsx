import React, { useRef, useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export default function Clients() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const clients = [
    {
      name: 'Барыс Арена',
      sub: t('clients.sub1'),
      image: '/images/image 13.svg'
    },
    {
      name: 'Mercedes Benz Astana',
      sub: t('clients.sub2'),
      image: '/images/image 14.svg'
    },
    {
      name: 'KPMG Astana',
      sub: t('clients.sub3'),
      image: '/images/image 15.svg'
    },
    {
      name: 'Sergek Group Astana',
      sub: t('clients.sub2'),
      image: '/images/image 13.svg'
    },
    {
      name: 'BARYS',
      sub: t('clients.sub1'),
      image: '/images/image 13.svg'
    },
    {
      name: 'BARYS',
      sub: t('clients.sub1'),
      image: '/images/image 13.svg'
    }
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-[96px] md:py-[128px] bg-cream overflow-hidden">
      <div className="max-w-[1514px] mx-auto px-4 sm:px-8 md:px-[34px]">
        {/* Header */}
        <div className="flex flex-col mb-[48px]">
          <div className="flex items-center gap-[16px] mb-[24px]">
            <span className="w-[32px] h-[2px] bg-orange"></span>
            <span className="text-orange font-body font-[600] text-[14px] leading-[1.4] uppercase tracking-wider">{t('clients.tag')}</span>
          </div>

          <h2 className="font-display font-[700] text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-brown mb-[16px]">
            {t('clients.title')}
          </h2>

          <p className="font-body text-[16px] md:text-[18px] leading-[1.6] text-brownLight font-[400] max-w-[600px]">
            {t('clients.desc')}
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`pl-4 sm:pl-8 md:pl-[max(34px,calc((100vw-1514px)/2+34px))] overflow-x-auto pb-[48px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
      >
        <div className="flex gap-[24px] w-max pr-4 sm:pr-8 md:pr-[34px] pointer-events-none md:pointer-events-auto">
          {clients.map((client, i) => (
            <div key={i} className="bg-white rounded-[32px] p-[32px] w-[300px] min-h-[420px] flex flex-col items-center shrink-0 border border-beigeStrong/50 shadow-sm transition-transform hover:-translate-y-2 hover:shadow-xl select-none">
              {/* Logo Box */}
              <div className="h-[140px] w-full flex items-center justify-center mb-[32px] pointer-events-none">
                <img src={client.image} alt={client.name} className="max-h-full max-w-full object-contain" />
              </div>
              
              <div className="flex flex-col items-center text-center gap-[12px] flex-grow justify-center pointer-events-none">
                <p className="font-body font-[800] text-brown text-[20px] leading-tight">{client.name}</p>
                <p className="font-body text-brownLight text-[15px] font-[500]">{client.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
