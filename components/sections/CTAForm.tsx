"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export default function CTAForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    about: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', surname: '', phone: '', email: '', about: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="join" className="py-[64px] md:py-[96px] bg-white overflow-hidden px-4 md:px-0">
      <div
        className="bg-amber rounded-[32px] md:rounded-l-none md:rounded-r-[48px] relative flex items-center shadow-2xl w-full max-w-[1640px] py-[48px] lg:py-0 min-h-auto lg:h-[670px] mx-auto md:mx-0"
      >
        <div
          className="mx-auto px-[24px] sm:px-[34px] lg:px-[95px] flex items-center justify-between w-full max-w-[1180px]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[64px] items-center w-full">

            {/* Left Column: Text */}
            <div className="flex flex-col text-white">
              <div className="flex items-center gap-[16px] mb-[24px]">
                <span className="w-[32px] h-[2px] bg-white"></span>
                <span className="font-body font-[600] text-[14px] leading-[1.4] uppercase tracking-wider">{t('cta.tag')}</span>
              </div>

              <h2 className="font-display font-[700] text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] mb-[32px]">
                {t('cta.title')} <br className="hidden lg:block" /> {t('cta.title.2')}
              </h2>

              <p className="font-body text-[16px] md:text-[18px] leading-[1.6] font-[500] max-w-[500px]">
                {t('cta.desc')}
              </p>
            </div>

            {/* Right Column: Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] w-full max-w-[550px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="font-body text-white/90 text-[13px] ml-[4px]">{t('cta.form.name')}</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('cta.form.name.ph')} 
                    className="bg-white rounded-xl px-[16px] py-[14px] w-full font-body text-brown border-none outline-none shadow-sm focus:ring-2 focus:ring-white/50" 
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="font-body text-white/90 text-[13px] ml-[4px]">{t('cta.form.surname')}</label>
                  <input 
                    type="text" 
                    name="surname"
                    required
                    value={formData.surname}
                    onChange={handleChange}
                    placeholder={t('cta.form.surname.ph')} 
                    className="bg-white rounded-xl px-[16px] py-[14px] w-full font-body text-brown border-none outline-none shadow-sm focus:ring-2 focus:ring-white/50" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="font-body text-white/90 text-[13px] ml-[4px]">{t('cta.form.phone')}</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__" 
                  className="bg-white rounded-xl px-[16px] py-[14px] w-full font-body text-brown border-none outline-none shadow-sm focus:ring-2 focus:ring-white/50" 
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="font-body text-white/90 text-[13px] ml-[4px]">{t('cta.form.email')}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com" 
                  className="bg-white rounded-xl px-[16px] py-[14px] w-full font-body text-brown border-none outline-none shadow-sm focus:ring-2 focus:ring-white/50" 
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="font-body text-white/90 text-[13px] ml-[4px]">{t('cta.form.about')}</label>
                <textarea 
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  placeholder={t('cta.form.about.ph')} 
                  rows={3} 
                  className="bg-white rounded-xl px-[16px] py-[14px] w-full font-body text-brown border-none outline-none resize-none shadow-sm focus:ring-2 focus:ring-white/50"
                ></textarea>
              </div>

              <div className="mt-[12px]">
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-white text-orange font-body font-[700] text-[16px] rounded-full px-[48px] py-[16px] transition-all hover:scale-105 hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Отправка...' : t('cta.form.btn')}
                </button>
                
                {status === 'success' && (
                  <p className="text-white font-body text-sm mt-4 animate-fade-in">
                    ✅ Ваша заявка успешно отправлена!
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-100 font-body text-sm mt-4 animate-fade-in">
                    ❌ Произошла ошибка. Пожалуйста, попробуйте еще раз.
                  </p>
                )}
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

