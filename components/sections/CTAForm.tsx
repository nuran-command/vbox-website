import React from 'react';

export default function CTAForm() {
  return (
    <section className="py-[96px] bg-white overflow-hidden">
      <div
        className="bg-amber rounded-r-[32px] md:rounded-r-[48px] relative flex items-center shadow-2xl"
        style={{ width: '1640px', height: '670px' }}
      >
        <div
          className="mx-auto px-[34px] lg:px-[95px] flex items-center justify-between w-full"
          style={{ maxWidth: '1180px', height: '425.6px' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center w-full">

            {/* Left Column: Text */}
            <div className="flex flex-col text-white">
              <div className="flex items-center gap-[16px] mb-[24px]">
                <span className="w-[32px] h-[2px] bg-white"></span>
                <span className="font-body font-[600] text-[14px] leading-[1.4] uppercase tracking-wider">Присоединиться</span>
              </div>

              <h2 className="font-display font-[700] text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] mb-[32px]">
                Позволим же <br className="hidden lg:block" /> этому случиться!
              </h2>

              <p className="font-body text-[16px] md:text-[18px] leading-[1.6] font-[500] max-w-[500px]">
                Вы выпускник детского дома, человек с особыми потребностями или из малообеспеченной семьи? Мы предлагаем значимые возможности трудоустройства и профессионального развития. Оставьте контактные данные — мы свяжемся с вами.
              </p>
            </div>

            {/* Right Column: Form */}
            <div className="flex flex-col gap-[20px] w-full max-w-[550px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="font-body text-white/90 text-[13px] ml-[4px]">Имя</label>
                  <input type="text" placeholder="Ваше имя" className="bg-white rounded-xl px-[16px] py-[14px] w-full font-body text-brown border-none outline-none shadow-sm focus:ring-2 focus:ring-white/50" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="font-body text-white/90 text-[13px] ml-[4px]">Фамилия</label>
                  <input type="text" placeholder="Фамилия" className="bg-white rounded-xl px-[16px] py-[14px] w-full font-body text-brown border-none outline-none shadow-sm focus:ring-2 focus:ring-white/50" />
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="font-body text-white/90 text-[13px] ml-[4px]">Телефон</label>
                <input type="tel" placeholder="+7 (___) ___-__-__" className="bg-white rounded-xl px-[16px] py-[14px] w-full font-body text-brown border-none outline-none shadow-sm focus:ring-2 focus:ring-white/50" />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="font-body text-white/90 text-[13px] ml-[4px]">Email</label>
                <input type="email" placeholder="your@email.com" className="bg-white rounded-xl px-[16px] py-[14px] w-full font-body text-brown border-none outline-none shadow-sm focus:ring-2 focus:ring-white/50" />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="font-body text-white/90 text-[13px] ml-[4px]">Немного о себе</label>
                <textarea placeholder="Расскажите о своей ситуации и пожеланиях..." rows={3} className="bg-white rounded-xl px-[16px] py-[14px] w-full font-body text-brown border-none outline-none resize-none shadow-sm focus:ring-2 focus:ring-white/50"></textarea>
              </div>

              <div className="mt-[12px]">
                <button className="bg-white text-orange font-body font-[700] text-[16px] rounded-full px-[48px] py-[16px] transition-all hover:scale-105 hover:shadow-xl active:scale-95">
                  Отправить заявку
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
