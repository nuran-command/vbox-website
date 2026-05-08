import React from 'react';

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export default function Contacts() {
  return (
    <section className="py-[96px] md:py-[128px] bg-cream">
      <div className="max-w-[1514px] mx-auto px-4 sm:px-8 md:px-[34px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
          
          {/* Left Column: Text & Card */}
          <div className="flex flex-col">
            <div className="flex items-center gap-[16px] mb-[24px]">
              <span className="w-[32px] h-[2px] bg-orange"></span>
              <span className="text-orange font-body font-[600] text-[14px] leading-[1.4] uppercase tracking-wider">Контакты</span>
            </div>
            
            <h2 className="font-display font-[700] text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-brown mb-[48px]">
              Обращайтесь
            </h2>
            
            {/* Contact Card */}
            <div className="bg-white border border-beigeStrong shadow-sm rounded-[24px] p-[32px] max-w-[480px]">
              <div className="flex items-center gap-[24px] mb-[24px]">
                <div className="w-[80px] h-[80px] bg-grayLight rounded-full overflow-hidden shrink-0">
                  <img src="/images/image 17.png" alt="Тулешев Раймбек" className="w-full h-full object-cover" />
                </div>
                <p className="font-display font-[700] text-[32px] leading-[1.1] text-brown">
                  Тулешев <br/> Раймбек
                </p>
              </div>
              
              <div className="h-[1px] w-full bg-beigeStrong mb-[20px]"></div>
              
              <p className="font-body text-brownLight text-[14px] mb-[24px]">Основатель · vbox Social</p>
              
              <div className="flex items-center gap-[12px]">
                <div className="w-[40px] h-[40px] bg-peach rounded-lg flex items-center justify-center shrink-0">
                  <MailIcon className="text-orange w-[20px] h-[20px]" />
                </div>
                <a href="mailto:railtuleshev@gmail.com" className="font-body text-brown text-[18px] md:text-[20px] hover:text-orange transition-colors">
                  railtuleshev@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl">
            <img src="/images/image 23.png" alt="Event photo" className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}
