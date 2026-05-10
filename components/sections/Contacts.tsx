import React from 'react';

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}


import { useLanguage } from '@/components/LanguageProvider';

export default function Contacts() {
  const { t } = useLanguage();
  return (
    <section id="contacts" className="py-[96px] md:py-[128px] bg-white">
      <div className="max-w-[1514px] mx-auto px-4 sm:px-8 md:px-[34px]">
        
        {/* Top Headings */}
        <div className="flex flex-col mb-[48px] md:mb-[64px]">
          <div className="flex items-center gap-[16px] mb-[24px]">
            <span className="w-[32px] h-[2px] bg-orange"></span>
            <span className="text-orange font-body font-[600] text-[14px] leading-[1.4] uppercase tracking-wider">{t('contacts.tag')}</span>
          </div>
          <h2 className="font-display font-[700] text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-brown">
            {t('contacts.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] md:gap-[40px] items-center">
          
          {/* Left Column: Contact Details */}
          <div className="flex flex-col">
            <h3 className="font-display font-[700] text-[32px] md:text-[40px] text-[#1A1A1A] mb-[32px]">
              {t('contacts.label')}
            </h3>
            
            <div className="flex flex-col gap-[12px]">
              <p className="font-display font-[700] text-[#1A1A1A] text-[20px] md:text-[24px]">
                +77051605526
              </p>
              <p className="font-display font-[700] text-[#1A1A1A] text-[20px] md:text-[24px]">
                {t('contacts.address.1')}
              </p>
              <p className="font-display font-[700] text-[#1A1A1A] text-[20px] md:text-[24px]">
                {t('contacts.address.2')}
              </p>
              <p className="font-display font-[700] text-[#1A1A1A] text-[20px] md:text-[24px]">
                {t('contacts.address.3')}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Map */}
          <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-sm border border-beigeStrong/50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.606233261642!2d71.41165381575317!3d51.0858717795701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585c572b83441%3A0x64426514936d50f8!2sKabanbay%20Batyr%20Ave%2C%2053%2C%20Astana%20010000!5e0!3m2!1sen!2skz!4v1715351400000!5m2!1sen!2skz"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="VBox Office Map"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
