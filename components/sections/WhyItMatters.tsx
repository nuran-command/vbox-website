import React from 'react';

export default function WhyItMatters() {
  return (
    <section className="py-[96px] md:py-[128px] bg-cream">
      <div className="max-w-[1514px] mx-auto px-4 sm:px-8 md:px-[34px]">
        
        {/* Header content */}
        <div className="text-center max-w-[800px] mx-auto mb-[64px]">
          <h2 className="font-display font-[700] text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-orange mb-[24px]">
            Почему это важно?
          </h2>
          <h3 className="font-display font-[700] text-[24px] md:text-[32px] lg:text-[40px] leading-[1.2] text-brown mb-[32px]">
            Каждый 5-й казахстанец <br className="hidden md:block" /> в уязвимой ситуации не может найти работу
          </h3>
          <p className="font-body text-brownMid text-base md:text-lg max-w-[680px] mx-auto leading-relaxed">
            В Казахстане около 700 000 человек с инвалидностью, из которых
            только 30% трудоустроены. Выпускники детских домов
            сталкиваются с безработицей в 2 раза чаще среднего. vbox меняет
            это — через технологии и реальную занятость.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mb-[48px]">
          {/* Using bg-white to match the design screenshot, border to match Figma outline */}
          <div className="bg-white rounded-2xl px-8 py-8 text-center border border-beigeStrong shadow-sm">
            <p className="font-display font-bold text-[48px] text-orange leading-none">700к</p>
            <p className="font-body text-sm md:text-base text-brownMid mt-[16px]">
              человек с инвалидностью в Казахстане
            </p>
          </div>
          
          <div className="bg-white rounded-2xl px-8 py-8 text-center border border-beigeStrong shadow-sm">
            <p className="font-display font-bold text-[48px] text-orange leading-none">70%</p>
            <p className="font-body text-sm md:text-base text-brownMid mt-[16px]">
              из них не имеют стабильной работы
            </p>
          </div>
          
          <div className="bg-white rounded-2xl px-8 py-8 text-center border border-beigeStrong shadow-sm">
            <p className="font-display font-bold text-[48px] text-orange leading-none">2×</p>
            <p className="font-body text-sm md:text-base text-brownMid mt-[16px]">
              выше безработица среди выпускников детдомов
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button className="px-[32px] py-[16px] bg-yellow text-espresso font-body font-bold rounded-lg transition-transform hover:-translate-y-1 hover:shadow-lg">
            Присоединиться к проекту
          </button>
        </div>

      </div>
    </section>
  );
}
