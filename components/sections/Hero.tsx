import React from 'react';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center overflow-hidden"
      style={{
        background: 'linear-gradient(279.97deg, #FEB501 20.06%, #ECCB27 101.71%)'
      }}
    >
      {/* Image */}
      <img
        src="/images/image 0.png"
        alt="Hero Background"
        className="absolute max-w-none"
        style={{
          width: '1535px',
          height: '912px',
          top: 0,
          right: 0,
          objectFit: 'cover'
        }}
      />

      {/* Overlay - full page */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(89.82deg, #1E1E1E -6.88%, rgba(0, 0, 0, 0) 87.45%)'
        }}
      ></div>

      {/* Text Content Container */}
      <div
        className="absolute z-10 w-full px-4 sm:px-6 md:px-8 max-w-[1700px]"
        style={{
          top: '255px'
        }}
      >
        <div className="flex flex-col">
          <h1
            className="font-display font-[700] text-white mb-[40px]"
            style={{
              fontSize: '86px',
              lineHeight: '84.28px',
              letterSpacing: '-2.58px'
            }}
          >
            Social
            <br />
            <span className="text-orange">Project</span>
          </h1>

          <p className="font-body text-white/90 text-[20px] max-w-[528px] mb-[60px] leading-[1.6] font-[500]">
            Мы расширяем возможности людей с особыми потребностями,
            выпускников детских домов и детей из малообеспеченных семей
            через технологии и значимую занятость.
          </p>

          <button
            className="bg-orange text-white font-body font-bold rounded-[12px] transition-transform hover:-translate-y-1 hover:shadow-lg w-fit"
            style={{
              width: '221.55px',
              height: '50.8px',
              fontSize: '16px'
            }}
          >
            Присоединиться
          </button>
        </div>
      </div>
    </section>
  );
}
