import React from 'react';

export default function Team() {
  const photos = ['team1.png', 'team2.png', 'team3.png', 'team4.png'];

  return (
    <section className="py-[96px] md:py-[128px] bg-cream overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-[80px]">
        {/* Header */}
        <div className="relative flex flex-col mb-[64px] items-center text-center">
          {/* Label: Absolute left on desktop, centered/flow on mobile */}
          <div className="md:absolute md:left-0 md:top-[12px] flex items-center gap-[16px] mb-[24px] md:mb-0">
            <span className="w-[32px] h-[2px] bg-orange"></span>
            <span className="text-orange font-body font-[600] text-[14px] leading-[1.4] uppercase tracking-wider">Наша команда</span>
          </div>

          <h2 className="font-display font-[700] text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-brown mb-[24px] max-w-[800px] mx-auto">
            Хочешь стать частью <br className="hidden md:block" /> нашей команды?
          </h2>

          <p className="font-body text-[16px] md:text-[18px] leading-[1.6] text-brownLight font-[400]">
            Возьми все в свои руки, меняй будущее вместе с нами!
          </p>
        </div>
      </div>

      {/* Horizontal Photo Strip */}
      <div className="pl-4 sm:pl-8 md:pl-[max(80px,calc((100vw-1280px)/2+80px))] overflow-x-auto pb-[32px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-[24px] w-max pr-4 md:pr-[80px]">
          {photos.map((src, i) => (
            <div
              key={i}
              className="w-[359px] h-[471px] bg-creamWarm rounded-[32px] overflow-hidden shrink-0 shadow-lg group relative cursor-pointer"
            >
              {/* Image */}
              <img
                src={`/images/${src}`}
                alt={`Team member ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
