import React from 'react';

export default function CTAForm() {
  return (
    <section className="py-[96px] bg-cream">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-[80px]">
        <div className="bg-amber rounded-[32px] p-[32px] md:p-[64px] grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px] shadow-xl">
          
          {/* Left Column: Text */}
          <div className="flex flex-col text-white">
            <div className="flex items-center gap-[16px] mb-[24px]">
              <span className="w-[32px] h-[2px] bg-white"></span>
              <span className="font-body font-[600] text-[14px] leading-[1.4] uppercase tracking-wider">Присоединиться</span>
            </div>
            
            <h2 className="font-display font-[700] text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] mb-[32px]">
              Позволим же <br className="hidden lg:block"/> этому случиться!
            </h2>
            
            <p className="font-body text-[16px] md:text-[18px] leading-[1.6] font-[500] max-w-[500px]">
              Вы выпускник детского дома, человек с особыми потребностями или из малообеспеченной семьи? Мы предлагаем значимые возможности трудоустройства и профессионального развития. Оставьте контактные данные — мы свяжемся с вами.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="flex flex-col gap-[20px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              <div className="flex flex-col gap-[8px]">
                <label className="font-body text-white/80 text-[13px] ml-[4px]">Имя</label>
                <input type="text" placeholder="Ваше имя" className="bg-white rounded-xl px-[16px] py-[14px] w-full font-body text-brown border-none outline-none focus:ring-2 focus:ring-white/50 transition-shadow" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="font-body text-white/80 text-[13px] ml-[4px]">Фамилия</label>
                <input type="text" placeholder="Фамилия" className="bg-white rounded-xl px-[16px] py-[14px] w-full font-body text-brown border-none outline-none focus:ring-2 focus:ring-white/50 transition-shadow" />
              </div>
            </div>
            
            <div className="flex flex-col gap-[8px]">
              <label className="font-body text-white/80 text-[13px] ml-[4px]">Телефон</label>
              <input type="tel" placeholder="+7 (___) ___-__-__" className="bg-white rounded-xl px-[16px] py-[14px] w-full font-body text-brown border-none outline-none focus:ring-2 focus:ring-white/50 transition-shadow" />
            </div>

            <div className="flex flex-col gap-[8px]">
              <label className="font-body text-white/80 text-[13px] ml-[4px]">Email</label>
              <input type="email" placeholder="your@email.com" className="bg-white rounded-xl px-[16px] py-[14px] w-full font-body text-brown border-none outline-none focus:ring-2 focus:ring-white/50 transition-shadow" />
            </div>

            <div className="flex flex-col gap-[8px]">
              <label className="font-body text-white/80 text-[13px] ml-[4px]">Немного о себе</label>
              <textarea placeholder="Расскажите о своей ситуации и пожеланиях..." rows={3} className="bg-white rounded-xl px-[16px] py-[14px] w-full font-body text-brown border-none outline-none resize-none focus:ring-2 focus:ring-white/50 transition-shadow"></textarea>
            </div>

            <div className="mt-[12px] self-start md:self-auto">
              <button className="bg-white text-orange font-body font-[700] text-[16px] rounded-full px-[32px] py-[16px] transition-transform hover:-translate-y-1 hover:shadow-lg w-full md:w-auto">
                Отправить заявку
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
