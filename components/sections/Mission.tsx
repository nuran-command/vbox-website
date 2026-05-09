import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export default function Mission() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-[96px] md:py-[128px] bg-white relative overflow-hidden">
      <div className="max-w-[1514px] mx-auto px-4 sm:px-8 md:px-[34px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[96px] items-center">
          
          {/* Text Content */}
          <div className="flex flex-col">
            <div className="flex items-center gap-[16px] mb-[24px]">
              <span className="w-[32px] h-[2px] bg-orange"></span>
              <span className="text-orange font-body font-bold text-sm uppercase tracking-wider">{t('mission.tag')}</span>
            </div>
            
            <h2 className="font-display font-[700] text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] text-brown mb-[32px]">
              {t('mission.title')} <br className="hidden md:block"/> {t('mission.title.2')}
            </h2>
            
            <p className="font-body text-brownMid text-base md:text-lg mb-[40px] leading-relaxed">
              {t('mission.desc')}
            </p>

            {/* Badges / Tags */}
            <div className="flex flex-wrap gap-[8px] md:gap-[16px]">
              <span className="px-[24px] py-[8px] bg-orange text-white font-body font-bold rounded-full text-sm">
                {t('mission.badge.1')}
              </span>
              <span className="px-[24px] py-[8px] bg-orange text-white font-body font-bold rounded-full text-sm">
                {t('mission.badge.2')}
              </span>
              <span className="px-[24px] py-[8px] bg-orange text-white font-body font-bold rounded-full text-sm">
                {t('mission.badge.3')}
              </span>
              <span className="px-[24px] py-[8px] bg-orange text-white font-body font-bold rounded-full text-sm">
                {t('mission.badge.4')}
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/5] md:aspect-square bg-grayLight rounded-3xl overflow-hidden shadow-2xl order-last">
             <img src="/images/image 5.png" alt="Mission" className="w-full h-full object-cover" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
