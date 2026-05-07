import React from 'react';

export default function Achievements() {
  return (
    <section className="py-[96px] md:py-[128px] bg-cream">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-[80px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
          
          {/* Left Column: Text & List */}
          <div className="flex flex-col">
            <div className="flex items-center gap-[16px] mb-[24px]">
              <span className="w-[32px] h-[2px] bg-orange"></span>
              <span className="text-orange font-body font-bold text-sm uppercase tracking-wider">Наши достижения</span>
            </div>
            
            <h2 className="font-display font-[700] text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-brown mb-[16px]">
              Результаты, <br className="hidden md:block" /> которые говорят сами
            </h2>
            <p className="font-body text-brownLight text-base md:text-lg mb-[48px]">
              Достижения которых мы достигли
            </p>

            {/* Achievements List */}
            <div className="flex flex-col mb-[48px]">
              <div className="border-t border-beigeStrong py-[24px] flex items-start gap-[24px]">
                <span className="font-display font-bold text-[32px] text-orange w-[32px] leading-none">1</span>
                <p className="font-body text-brown text-lg font-bold leading-snug">
                  Победа в номинации Heart of Impact на People & Projects Awards 2025
                </p>
              </div>
              
              <div className="border-t border-beigeStrong py-[24px] flex items-start gap-[24px]">
                <span className="font-display font-bold text-[32px] text-orange w-[32px] leading-none">2</span>
                <p className="font-body text-brown text-lg font-bold leading-snug">
                  Победа в ProductBestAwards 2025 (креативный бизнес).
                </p>
              </div>
              
              <div className="border-t border-beigeStrong py-[24px] flex items-start gap-[24px]">
                <span className="font-display font-bold text-[32px] text-orange w-[32px] leading-none">3</span>
                <p className="font-body text-brown text-lg font-bold leading-snug">
                  Победа в конкурсе Social Startup Camp 2025 NU Impact
                </p>
              </div>
              
              <div className="border-y border-beigeStrong py-[24px] flex items-start gap-[24px]">
                <span className="font-display font-bold text-[32px] text-orange w-[32px] leading-none">4</span>
                <p className="font-body text-brown text-lg font-bold leading-snug">
                  Foundation для лучших социальных стартапов
                </p>
              </div>
            </div>

            <div>
              <button className="px-[32px] py-[16px] bg-yellow text-espresso font-body font-bold rounded-full transition-transform hover:-translate-y-1 hover:shadow-lg">
                Смотреть все
              </button>
            </div>
          </div>

          {/* Right Column: Image and Quote */}
          <div className="relative mt-[32px] md:mt-0 px-[16px] md:px-0">
            {/* Main Image Container */}
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">
              <img src="/images/image 22.png" alt="Achievement" className="w-full h-full object-cover" />
            </div>
            
            {/* Overlapping Quote Box */}
            <div className="absolute -bottom-[24px] md:bottom-[48px] -left-[8px] md:-left-[48px] bg-yellow rounded-2xl md:rounded-[24px] px-[24px] md:px-[40px] py-[20px] md:py-[32px] shadow-xl max-w-[90%] md:max-w-[80%] z-10">
              <p className="font-display font-[700] text-[20px] md:text-[24px] text-espresso leading-snug">
                “Место для цитаты _______”
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
