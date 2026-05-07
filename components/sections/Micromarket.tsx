import React from 'react';

export default function Micromarket() {
  return (
    <section className="py-[96px] md:py-[128px] bg-cream">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
          
          {/* Left Column: Image (on mobile, moves to top) */}
          <div className="order-2 md:order-1 relative w-full aspect-[3/4] md:aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl">
            {/* Placeholder for vending machine image */}
            <div className="w-full h-full bg-creamWarm flex items-center justify-center text-brownMid font-body text-center p-4">
              <p>Vending Machine Photo Placeholder</p>
            </div>
          </div>

          {/* Right Column: Text & Grid */}
          <div className="order-1 md:order-2 flex flex-col">
            <div className="flex items-center gap-[16px] mb-[24px]">
              <span className="w-[32px] h-[2px] bg-orange"></span>
              <span className="text-orange font-body font-[600] text-[14px] leading-[1.4] uppercase tracking-wider">Микромаркет</span>
            </div>
            
            <h2 className="font-display font-[700] text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-brown mb-[24px]">
              Что такое vbox?
            </h2>
            
            <p className="font-body text-[16px] md:text-[18px] leading-[1.6] text-brownLight mb-[48px] font-[400]">
              Умный вендинговый автомат — где можно купить готовую еду, снеки, 
              воду и напитки за 30 секунд, не выходя из офиса. Работает 24/7.
            </p>

            {/* Food Categories Grid */}
            <div className="grid grid-cols-2 gap-[16px]">
              <div className="bg-white rounded-2xl p-[16px] flex flex-col items-center gap-[12px] shadow-sm border border-beigeStrong transition-transform hover:-translate-y-1">
                <div className="w-[80px] h-[80px] md:w-[96px] md:h-[96px] bg-creamWarm rounded-full flex items-center justify-center text-xs text-brownLight">img</div>
                <p className="font-body font-[700] text-brown uppercase tracking-wider text-[14px] text-center">
                  СНЭКИ
                </p>
              </div>
              <div className="bg-white rounded-2xl p-[16px] flex flex-col items-center gap-[12px] shadow-sm border border-beigeStrong transition-transform hover:-translate-y-1">
                <div className="w-[80px] h-[80px] md:w-[96px] md:h-[96px] bg-creamWarm rounded-full flex items-center justify-center text-xs text-brownLight">img</div>
                <p className="font-body font-[700] text-brown uppercase tracking-wider text-[14px] text-center">
                  ГОТОВАЯ ЕДА
                </p>
              </div>
              <div className="bg-white rounded-2xl p-[16px] flex flex-col items-center gap-[12px] shadow-sm border border-beigeStrong transition-transform hover:-translate-y-1">
                <div className="w-[80px] h-[80px] md:w-[96px] md:h-[96px] bg-creamWarm rounded-full flex items-center justify-center text-xs text-brownLight">img</div>
                <p className="font-body font-[700] text-brown uppercase tracking-wider text-[14px] text-center">
                  ФРУКТЫ
                </p>
              </div>
              <div className="bg-white rounded-2xl p-[16px] flex flex-col items-center gap-[12px] shadow-sm border border-beigeStrong transition-transform hover:-translate-y-1">
                <div className="w-[80px] h-[80px] md:w-[96px] md:h-[96px] bg-creamWarm rounded-full flex items-center justify-center text-xs text-brownLight">img</div>
                <p className="font-body font-[700] text-brown uppercase tracking-wider text-[14px] text-center">
                  ВЫПЕЧКА
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
