import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen w-full flex flex-col justify-center items-start overflow-hidden"
      style={{
        background: 'linear-gradient(279.97deg, #FEB501 20.06%, #ECCB27 101.71%)'
      }}
    >
      {/* Image */}
      <img
        src="/images/image 0.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-[center_top] md:w-[1535px] md:h-[912px] md:top-0 md:right-0 md:left-auto md:bottom-auto max-w-none"
      />

      {/* Overlay - full page */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(89.82deg, #1E1E1E -6.88%, rgba(0, 0, 0, 0) 87.45%)'
        }}
      ></div>

      {/* Text Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 max-w-[1700px] mx-auto pt-[100px] md:pt-[150px] pb-10">
        <div className="flex flex-col">
          <h1
            className="font-display font-[700] text-white mb-[24px] md:mb-[40px] text-[52px] leading-[1.1] tracking-[-1px] md:text-[86px] md:leading-[84px] md:tracking-[-2.58px]"
          >
            Social
            <br />
            <span className="text-orange">Project</span>
          </h1>

          <p className="font-body text-white/90 text-[16px] md:text-[20px] max-w-[528px] mb-[40px] md:mb-[60px] leading-[1.6] font-[500]">
            Мы расширяем возможности людей с особыми потребностями,
            выпускников детских домов и детей из малообеспеченных семей
            через технологии и значимую занятость.
          </p>

          <button
            className="bg-orange text-white font-body font-bold rounded-[12px] transition-transform hover:-translate-y-1 hover:shadow-lg w-full sm:w-[221.55px] h-[50.8px] text-[16px] flex items-center justify-center"
          >
            Присоединиться
          </button>
        </div>
      </div>
    </section>
  );
}
