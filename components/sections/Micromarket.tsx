import React from 'react';

export default function Micromarket() {
  return (
    <section className="py-[96px] md:py-[128px] bg-white overflow-hidden">
      <div className="max-w-[1514px] mx-auto px-6 sm:px-8 md:px-[34px]">
        
        {/* Section Tag */}
        <div className="flex items-center justify-start gap-[16px] mb-[32px] md:mb-[64px] lg:pl-[100px]">
          <span className="w-[32px] h-[2px] bg-orange"></span>
          <span className="text-orange font-body font-[600] text-[14px] leading-[1.4] uppercase tracking-wider">Микромаркет</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-[48px] md:gap-[64px] lg:pl-[100px] items-center lg:items-start text-center lg:text-left">
          
          {/* Left Column: Machine Image */}
          <img 
            src="/images/micromarket.png" 
            alt="VBox Machine" 
            className="rounded-[32px] object-cover flex-shrink-0 w-full max-w-[400px] md:max-w-[554px] h-auto" 
          />

          {/* Right Column: Content */}
          <div className="flex flex-col items-center lg:items-start max-w-[568.7px]">
            <h2 className="font-display font-[700] text-[32px] md:text-[40px] text-brown mb-[16px] leading-tight">
              Что такое vbox?
            </h2>
            
            <p className="font-body text-brownLight text-[16px] md:text-[18px] leading-[1.4] mb-[40px]">
              Умный вендинговый автомат — где можно купить готовую еду, снеки, воду и напитки за 30 секунд, не выходя из офиса. Работает 24/7.
            </p>

            {/* Food Categories Grid */}
            <div className="grid grid-cols-2 gap-[16px] md:gap-[24px] w-full">
              <CategoryCard title="СНЭКИ" image="/images/micro1.png" />
              <CategoryCard title="ГОТОВАЯ ЕДА" image="/images/micro2.png" />
              <CategoryCard title="ФРУКТЫ" image="/images/micro3.png" />
              <CategoryCard title="ВЫПЕЧКА" image="/images/micro4.png" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function CategoryCard({ title, image }: { title: string; image: string }) {
  return (
    <div 
      className="bg-white rounded-[20px] md:rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex flex-col items-center pt-[16px] md:pt-[20px] border border-beigeStrong transition-all hover:scale-[1.02] overflow-hidden w-full aspect-[206/138]"
    >
      <p className="font-body font-bold text-brown text-[14px] md:text-[16px] uppercase tracking-wider mb-2 text-center">
        {title}
      </p>
      <div className="w-full flex-grow flex items-center justify-center overflow-hidden p-2">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
    </div>
  );
}
