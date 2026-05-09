"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = 'ru' | 'en' | 'kz';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Navbar
    'nav.about': 'О нас',
    'nav.achievements': 'Достижения',
    'nav.micromarket': 'Микромаркет',
    'nav.join': 'Присоединиться',
    'nav.contact': 'Связаться с нами',
    
    // Hero
    'hero.title.1': 'Social',
    'hero.title.2': 'Project',
    'hero.description': 'Мы расширяем возможности людей с особыми потребностями, выпускников детских домов и детей из малообеспеченных семей через технологии и значимую занятость.',
    'hero.button': 'Присоединиться',

    // Mission
    'mission.tag': 'Наша цель',
    'mission.title': 'Мы создаём',
    'mission.title.2': 'смысл через труд',
    'mission.desc': 'Мы предоставляем значимые возможности трудоустройства для людей с особыми потребностями, выпускников детских домов и молодёжи из малообеспеченных семей. Наша мастерская создаёт поддерживающую среду, где каждый может развить навыки и построить карьеру.',
    'mission.badge.1': 'Технологии',
    'mission.badge.2': 'Адаптация',
    'mission.badge.3': 'Масштабируемый импакт',
    'mission.badge.4': 'Социальный лифт',

    // WhyItMatters
    'why.title': 'Почему это важно?',
    'why.subtitle': 'Каждый 5-й казахстанец',
    'why.subtitle.2': 'в уязвимой ситуации не может найти работу',
    'why.desc': 'В Казахстане около 700 000 человек с инвалидностью, из которых только 30% трудоустроены. Выпускники детских домов сталкиваются с безработицей в 2 раза чаще среднего. vbox меняет это — через технологии и реальную занятость.',
    'why.stat1.val': '700к',
    'why.stat1.text': 'человек с инвалидностью в Казахстане',
    'why.stat2.val': '70%',
    'why.stat2.text': 'из них не имеют стабильной работы',
    'why.stat3.val': '2×',
    'why.stat3.text': 'выше безработица среди выпускников детдомов',
    'why.button': 'Присоединиться к проекту',

    // Achievements
    'achievements.tag': 'Наши достижения',
    'achievements.title': 'Результаты, которые говорят сами',
    'achievements.desc': 'Достижения которых мы достигли',
    'achievements.btn.hide': 'Скрыть',
    'achievements.btn.show': 'Смотреть все',
    'achievements.quote': '“Место для цитаты _______”',
    'achievements.item.0': 'Финалисты BI SYNERGY SPRINT 2024 от BI Group — вошли в топ-10 из 200 проектов.',
    'achievements.item.1': 'Финалисты Quick Start XV 2024.',
    'achievements.item.2': 'Победа в программе MIRAI Министерства иностранных дел Японии.',
    'achievements.item.3': 'Победа в конкурсе Social Startup Camp 2025, организованном NU Impact Foundation для лучших социальных стартапов.',
    'achievements.item.4': 'Победа в номинации Heart of Impact на People & Projects Awards 2025.',
    'achievements.item.5': 'Победа в ProductBee Awards 2025 (креативный бизнес).',
    'achievements.item.6': 'Победа в номинации Startup of the Year 2025 (Vbox Social).',
    'achievements.item.7': 'Победа в MNU Alumni Awards 2025 как лучший предпринимательский проект.',
    'achievements.item.8': 'Вхождение в Short-list STEPPE Awards 2025.',
    'achievements.item.9': 'Приглашение и презентация на World Nomad Games.',
    'achievements.item.10': 'Участие в международном форуме молодежи в России, получены предложения о сотрудничестве и выходе на рынок РФ.',
    'achievements.item.11': 'Международные презентации проекта в Индии, России и Италии.',
    'achievements.item.12': 'Коллаборации: ComicCon Astana 2025, Team Spirit PGL Astana 2025, международный хоккейный турнир KHL.',
    'achievements.item.13': 'Благодарственное письмо для нас ТОО “Sheksiz Orta” от (NU).',

    // Micromarket
    'micro.tag': 'Микромаркет',
    'micro.title': 'Что такое vbox?',
    'micro.desc': 'Умный вендинговый автомат — где можно купить готовую еду, снеки, воду и напитки за 30 секунд, не выходя из офиса. Работает 24/7.',
    'micro.cat1': 'СНЭКИ',
    'micro.cat2': 'ГОТОВАЯ ЕДА',
    'micro.cat3': 'ФРУКТЫ',
    'micro.cat4': 'ВЫПЕЧКА',

    // Clients
    'clients.tag': 'Наши пользователи',
    'clients.title': 'Нам доверяют',
    'clients.desc': 'Ведущие компании Казахстана выбирают vbox для комфорта своих сотрудников.',
    'clients.sub1': 'Островок и основная точка',
    'clients.sub2': 'Поставили 1 микромаркет',
    'clients.sub3': 'Поставили 2 микромаркета',

    // Team
    'team.tag': 'Наша команда',
    'team.title': 'Хочешь стать частью',
    'team.title.2': 'нашей команды?',
    'team.desc': 'Возьми все в свои руки, меняй будущее вместе с нами!',

    // CTAForm
    'cta.tag': 'Присоединиться',
    'cta.title': 'Позволим же',
    'cta.title.2': 'этому случиться!',
    'cta.desc': 'Вы выпускник детского дома, человек с особыми потребностями или из малообеспеченной семьи? Мы предлагаем значимые возможности трудоустройства и профессионального развития. Оставьте контактные данные — мы свяжемся с вами.',
    'cta.form.name': 'Имя',
    'cta.form.name.ph': 'Ваше имя',
    'cta.form.surname': 'Фамилия',
    'cta.form.surname.ph': 'Фамилия',
    'cta.form.phone': 'Телефон',
    'cta.form.email': 'Email',
    'cta.form.about': 'Немного о себе',
    'cta.form.about.ph': 'Расскажите о своей ситуации и пожеланиях...',
    'cta.form.btn': 'Отправить заявку',

    // Contacts
    'contacts.tag': 'Контакты',
    'contacts.title': 'Обращайтесь',
    'contacts.label': 'Контакты:',
    'contacts.address.1': 'Нура район, Астана,',
    'contacts.address.2': 'Кабанбай батыр проспект,',
    'contacts.address.3': '53 блок 28, 1 этаж',

    // Footer
    'footer.copy': '© 2024 VBOX social. Все права защищены.',
    'footer.desc': 'Социальный стартап, объединяющий людей и технологии для создания инклюзивных рабочих мест в Казахстане.',
  },
  en: {
    // Navbar
    'nav.about': 'About Us',
    'nav.achievements': 'Achievements',
    'nav.micromarket': 'Micromarket',
    'nav.join': 'Join Us',
    'nav.contact': 'Contact Us',

    // Hero
    'hero.title.1': 'Social',
    'hero.title.2': 'Project',
    'hero.description': 'We empower people with special needs, orphanage graduates, and children from low-income families through technology and meaningful employment.',
    'hero.button': 'Join Us',

    // Mission
    'mission.tag': 'Our Goal',
    'mission.title': 'We create',
    'mission.title.2': 'meaning through work',
    'mission.desc': 'We provide meaningful employment opportunities for people with special needs, orphanage graduates, and youth from low-income families. Our workshop creates a supportive environment where everyone can develop skills and build a career.',
    'mission.badge.1': 'Technology',
    'mission.badge.2': 'Adaptation',
    'mission.badge.3': 'Scalable Impact',
    'mission.badge.4': 'Social Mobility',

    // WhyItMatters
    'why.title': 'Why it matters?',
    'why.subtitle': 'Every 5th Kazakhstani',
    'why.subtitle.2': 'in a vulnerable situation cannot find a job',
    'why.desc': 'There are about 700,000 people with disabilities in Kazakhstan, of which only 30% are employed. Orphanage graduates face unemployment twice as often as the average. vbox changes this — through technology and real employment.',
    'why.stat1.val': '700k',
    'why.stat1.text': 'people with disabilities in Kazakhstan',
    'why.stat2.val': '70%',
    'why.stat2.text': 'of them do not have a stable job',
    'why.stat3.val': '2×',
    'why.stat3.text': 'higher unemployment among orphanage graduates',
    'why.button': 'Join the project',

    // Achievements
    'achievements.tag': 'Our Achievements',
    'achievements.title': 'Results that speak for themselves',
    'achievements.desc': 'Achievements we have reached',
    'achievements.btn.hide': 'Hide',
    'achievements.btn.show': 'See all',
    'achievements.quote': '“Place for a quote _______”',
    'achievements.item.0': 'Finalists of BI SYNERGY SPRINT 2024 by BI Group — entered top-10 out of 200 projects.',
    'achievements.item.1': 'Finalists of Quick Start XV 2024.',
    'achievements.item.2': 'Victory in the MIRAI program by the Ministry of Foreign Affairs of Japan.',
    'achievements.item.3': 'Victory in the Social Startup Camp 2025 competition, organized by NU Impact Foundation for the best social startups.',
    'achievements.item.4': 'Victory in the Heart of Impact nomination at People & Projects Awards 2025.',
    'achievements.item.5': 'Victory in ProductBee Awards 2025 (creative business).',
    'achievements.item.6': 'Victory in the Startup of the Year 2025 nomination (Vbox Social).',
    'achievements.item.7': 'Victory in MNU Alumni Awards 2025 as the best entrepreneurial project.',
    'achievements.item.8': 'Shortlisted for STEPPE Awards 2025.',
    'achievements.item.9': 'Invitation and presentation at World Nomad Games.',
    'achievements.item.10': 'Participation in the international youth forum in Russia, received proposals for cooperation and entering the Russian market.',
    'achievements.item.11': 'International presentations of the project in India, Russia, and Italy.',
    'achievements.item.12': 'Collaborations: ComicCon Astana 2025, Team Spirit PGL Astana 2025, international hockey tournament KHL.',
    'achievements.item.13': 'Letter of gratitude for "Sheksiz Orta" LLP from (NU).',

    // Micromarket
    'micro.tag': 'Micromarket',
    'micro.title': 'What is vbox?',
    'micro.desc': 'A smart vending machine — where you can buy ready meals, snacks, water, and drinks in 30 seconds without leaving the office. Works 24/7.',
    'micro.cat1': 'SNACKS',
    'micro.cat2': 'READY MEALS',
    'micro.cat3': 'FRUITS',
    'micro.cat4': 'BAKERY',

    // Clients
    'clients.tag': 'Our Users',
    'clients.title': 'They trust us',
    'clients.desc': 'Leading companies in Kazakhstan choose vbox for their employees\' comfort.',
    'clients.sub1': 'Island and main point',
    'clients.sub2': 'Installed 1 micromarket',
    'clients.sub3': 'Installed 2 micromarkets',

    // Team
    'team.tag': 'Our Team',
    'team.title': 'Want to become part',
    'team.title.2': 'of our team?',
    'team.desc': 'Take everything into your hands, change the future with us!',

    // CTAForm
    'cta.tag': 'Join Us',
    'cta.title': 'Let\'s make it',
    'cta.title.2': 'happen!',
    'cta.desc': 'Are you an orphanage graduate, a person with special needs, or from a low-income family? We offer meaningful employment and professional development opportunities. Leave your contact details — we will contact you.',
    'cta.form.name': 'Name',
    'cta.form.name.ph': 'Your name',
    'cta.form.surname': 'Surname',
    'cta.form.surname.ph': 'Surname',
    'cta.form.phone': 'Phone',
    'cta.form.email': 'Email',
    'cta.form.about': 'A bit about yourself',
    'cta.form.about.ph': 'Tell us about your situation and wishes...',
    'cta.form.btn': 'Submit application',

    // Contacts
    'contacts.tag': 'Contacts',
    'contacts.title': 'Get in touch',
    'contacts.label': 'Contacts:',
    'contacts.address.1': 'Nura district, Astana,',
    'contacts.address.2': 'Kabanbay batyr avenue,',
    'contacts.address.3': '53 block 28, 1st floor',

    // Footer
    'footer.copy': '© 2024 VBOX social. All rights reserved.',
    'footer.desc': 'A social startup bringing together people and technology to create inclusive workplaces in Kazakhstan.',
  },
  kz: {
    // You can add Kazakh translations here later
    // Navbar
    'nav.about': 'Біз туралы',
    'nav.achievements': 'Жетістіктер',
    'nav.micromarket': 'Микромаркет',
    'nav.join': 'Қосылу',
    'nav.contact': 'Бізбен байланысу',

    // Hero
    'hero.title.1': 'Social',
    'hero.title.2': 'Project',
    'hero.description': 'Мы расширяем возможности людей с особыми потребностями, выпускников детских домов и детей из малообеспеченных семей через технологии и значимую занятость.',
    'hero.button': 'Присоединиться',

    // Mission
    'mission.tag': 'Наша цель',
    'mission.title': 'Мы создаём',
    'mission.title.2': 'смысл через труд',
    'mission.desc': 'Мы предоставляем значимые возможности трудоустройства для людей с особыми потребностями, выпускников детских домов и молодёжи из малообеспеченных семей. Наша мастерская создаёт поддерживающую среду, где каждый может развить навыки и построить карьеру.',
    'mission.badge.1': 'Технологии',
    'mission.badge.2': 'Адаптация',
    'mission.badge.3': 'Масштабируемый импакт',
    'mission.badge.4': 'Социальный лифт',

    // WhyItMatters
    'why.title': 'Почему это важно?',
    'why.subtitle': 'Каждый 5-й казахстанец',
    'why.subtitle.2': 'в уязвимой ситуации не может найти работу',
    'why.desc': 'В Казахстане около 700 000 человек с инвалидностью, из которых только 30% трудоустроены. Выпускники детских домов сталкиваются с безработицей в 2 раза чаще среднего. vbox меняет это — через технологии и реальную занятость.',
    'why.stat1.val': '700к',
    'why.stat1.text': 'человек с инвалидностью в Казахстане',
    'why.stat2.val': '70%',
    'why.stat2.text': 'из них не имеют стабильной работы',
    'why.stat3.val': '2×',
    'why.stat3.text': 'выше безработица среди выпускников детдомов',
    'why.button': 'Присоединиться к проекту',

    // Achievements
    'achievements.tag': 'Наши достижения',
    'achievements.title': 'Результаты, которые говорят сами',
    'achievements.desc': 'Достижения которых мы достигли',
    'achievements.btn.hide': 'Скрыть',
    'achievements.btn.show': 'Смотреть все',
    'achievements.quote': '“Место для цитаты _______”',
    'achievements.item.0': 'Финалисты BI SYNERGY SPRINT 2024 от BI Group — вошли в топ-10 из 200 проектов.',
    'achievements.item.1': 'Финалисты Quick Start XV 2024.',
    'achievements.item.2': 'Победа в программе MIRAI Министерства иностранных дел Японии.',
    'achievements.item.3': 'Победа в конкурсе Social Startup Camp 2025, организованном NU Impact Foundation для лучших социальных стартапов.',
    'achievements.item.4': 'Победа в номинации Heart of Impact на People & Projects Awards 2025.',
    'achievements.item.5': 'Победа в ProductBee Awards 2025 (креативный бизнес).',
    'achievements.item.6': 'Победа в номинации Startup of the Year 2025 (Vbox Social).',
    'achievements.item.7': 'Победа в MNU Alumni Awards 2025 как лучший предпринимательский проект.',
    'achievements.item.8': 'Вхождение в Short-list STEPPE Awards 2025.',
    'achievements.item.9': 'Приглашение и презентация на World Nomad Games.',
    'achievements.item.10': 'Участие в международном форуме молодежи в России, получены предложения о сотрудничестве и выходе на рынок РФ.',
    'achievements.item.11': 'Международные презентации проекта в Индии, России и Италии.',
    'achievements.item.12': 'Коллаборации: ComicCon Astana 2025, Team Spirit PGL Astana 2025, международный хоккейный турнир KHL.',
    'achievements.item.13': 'Благодарственное письмо для нас ТОО “Sheksiz Orta” от (NU).',

    // Micromarket
    'micro.tag': 'Микромаркет',
    'micro.title': 'Что такое vbox?',
    'micro.desc': 'Умный вендинговый автомат — где можно купить готовую еду, снеки, воду и напитки за 30 секунд, не выходя из офиса. Работает 24/7.',
    'micro.cat1': 'СНЭКИ',
    'micro.cat2': 'ГОТОВАЯ ЕДА',
    'micro.cat3': 'ФРУКТЫ',
    'micro.cat4': 'ВЫПЕЧКА',

    // Clients
    'clients.tag': 'Наши пользователи',
    'clients.title': 'Нам доверяют',
    'clients.desc': 'Ведущие компании Казахстана выбирают vbox для комфорта своих сотрудников.',
    'clients.sub1': 'Островок и основная точка',
    'clients.sub2': 'Поставили 1 микромаркет',
    'clients.sub3': 'Поставили 2 микромаркета',

    // Team
    'team.tag': 'Наша команда',
    'team.title': 'Хочешь стать частью',
    'team.title.2': 'нашей команды?',
    'team.desc': 'Возьми все в свои руки, меняй будущее вместе с нами!',

    // CTAForm
    'cta.tag': 'Присоединиться',
    'cta.title': 'Позволим же',
    'cta.title.2': 'этому случиться!',
    'cta.desc': 'Вы выпускник детского дома, человек с особыми потребностями или из малообеспеченной семьи? Мы предлагаем значимые возможности трудоустройства и профессионального развития. Оставьте контактные данные — мы свяжемся с вами.',
    'cta.form.name': 'Имя',
    'cta.form.name.ph': 'Ваше имя',
    'cta.form.surname': 'Фамилия',
    'cta.form.surname.ph': 'Фамилия',
    'cta.form.phone': 'Телефон',
    'cta.form.email': 'Email',
    'cta.form.about': 'Немного о себе',
    'cta.form.about.ph': 'Расскажите о своей ситуации и пожеланиях...',
    'cta.form.btn': 'Отправить заявку',

    // Contacts
    'contacts.tag': 'Контакты',
    'contacts.title': 'Обращайтесь',
    'contacts.label': 'Контакты:',
    'contacts.address.1': 'Нура район, Астана,',
    'contacts.address.2': 'Кабанбай батыр проспект,',
    'contacts.address.3': '53 блок 28, 1 этаж',

    // Footer
    'footer.copy': '© 2024 VBOX social. Все права защищены.',
    'footer.desc': 'Социальный стартап, объединяющий людей и технологии для создания инклюзивных рабочих мест в Казахстане.',
  }
};

const LanguageContext = createContext<LanguageContextType>({} as any);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('ru');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('vbox_lang') as Language;
    if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
      setLang(savedLang);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('vbox_lang', newLang);
    document.documentElement.lang = newLang;
  };

  const t = (key: string) => {
    // Prevent hydration mismatch by using a default fallback until mounted
    if (!mounted) return translations['ru'][key as keyof typeof translations['ru']] || key;
    return translations[lang][key as keyof typeof translations['ru']] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
