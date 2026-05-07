import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-espresso">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0">
        {/* Replace this div with an actual img or Next/Image later */}
        <div className="w-full h-full bg-gray-800 opacity-60 mix-blend-overlay"></div>
      </div>

      {/* Gradient Overlay for Text Readability - Left 40% on Desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/50 to-transparent md:w-[60%] w-full"></div>

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-8 md:px-[80px] pt-[96px]">
        <div className="md:w-[50%]">
          <h1 className="font-display font-[800] text-[40px] md:text-[80px] lg:text-[96px] leading-[1.0] text-white mb-[24px]">
            Social
            <br />
            <span className="text-orange">Project</span>
          </h1>
          
          <p className="font-body text-white/90 text-base md:text-lg max-w-[480px] mb-[32px] leading-relaxed">
            Мы расширяем возможности людей с особыми потребностями, 
            выпускников детских домов и детей из малообеспеченных семей 
            через технологии и значимую занятость.
          </p>

          <button className="px-[32px] py-[16px] bg-orange text-white font-body font-bold rounded-lg transition-transform hover:-translate-y-1 hover:shadow-lg">
            Присоединиться
          </button>
        </div>
      </div>
    </section>
  );
}
