import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export default function WhyItMatters() {
  const { t } = useLanguage();
  return (
    <section className="py-[96px] md:py-[128px] bg-cream">
      <div className="max-w-[1514px] mx-auto px-4 sm:px-8 md:px-[34px]">
        
        {/* Header content */}
        <div className="text-center max-w-[800px] mx-auto mb-[64px]">
          <h2 className="font-display font-[700] text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-orange mb-[24px]">
            {t('why.title')}
          </h2>
          <h3 className="font-display font-[700] text-[24px] md:text-[32px] lg:text-[40px] leading-[1.2] text-brown mb-[32px]">
            {t('why.subtitle')} <br className="hidden md:block" /> {t('why.subtitle.2')}
          </h3>
          <p className="font-body text-brownMid text-base md:text-lg max-w-[680px] mx-auto leading-relaxed">
            {t('why.desc')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mb-[48px]">
          {/* Using bg-white to match the design screenshot, border to match Figma outline */}
          <div className="bg-white rounded-2xl px-8 py-8 text-center border border-beigeStrong shadow-sm">
            <p className="font-display font-bold text-[48px] text-orange leading-none">{t('why.stat1.val')}</p>
            <p className="font-body text-sm md:text-base text-brownMid mt-[16px]">
              {t('why.stat1.text')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl px-8 py-8 text-center border border-beigeStrong shadow-sm">
            <p className="font-display font-bold text-[48px] text-orange leading-none">{t('why.stat2.val')}</p>
            <p className="font-body text-sm md:text-base text-brownMid mt-[16px]">
              {t('why.stat2.text')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl px-8 py-8 text-center border border-beigeStrong shadow-sm">
            <p className="font-display font-bold text-[48px] text-orange leading-none">{t('why.stat3.val')}</p>
            <p className="font-body text-sm md:text-base text-brownMid mt-[16px]">
              {t('why.stat3.text')}
            </p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#join"
            className="inline-block px-[32px] py-[16px] bg-yellow text-espresso font-body font-bold rounded-lg transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            {t('why.button')}
          </a>
        </div>

      </div>
    </section>
  );
}
