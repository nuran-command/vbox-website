import React, { useState } from 'react';

const ALL_ACHIEVEMENTS = [
  "Финалисты BI SYNERGY SPRINT 2024 от BI Group — вошли в топ-10 из 200 проектов.",
  "Финалисты Quick Start XV 2024.",
  "Победа в программе MIRAI Министерства иностранных дел Японии.",
  "Победа в конкурсе Social Startup Camp 2025, организованном NU Impact Foundation для лучших социальных стартапов.",
  "Победа в номинации Heart of Impact на People & Projects Awards 2025.",
  "Победа в ProductBee Awards 2025 (креативный бизнес).",
  "Победа в номинации Startup of the Year 2025 (Vbox Social).",
  "Победа в MNU Alumni Awards 2025 как лучший предпринимательский проект.",
  "Вхождение в Short-list STEPPE Awards 2025.",
  "Приглашение и презентация на World Nomad Games.",
  "Участие в международном форуме молодежи в России, получены предложения о сотрудничестве и выходе на рынок РФ.",
  "Международные презентации проекта в Индии, России и Италии.",
  "Коллаборации: ComicCon Astana 2025, Team Spirit PGL Astana 2025, международный хоккейный турнир KHL.",
  "Благодарственное письмо для нас ТОО “Sheksiz Orta” от (NU)."
];

export default function Achievements() {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedItems = isExpanded ? ALL_ACHIEVEMENTS : ALL_ACHIEVEMENTS.slice(0, 5);

  return (
    <section id="achievements" className="py-[96px] md:py-[128px] bg-white relative overflow-hidden">
      <div className="max-w-[1514px] mx-auto px-4 sm:px-8 md:px-[34px]">
        <div className="w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[40px] lg:gap-[80px] items-start">

            {/* Left Column: Text & List */}
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-[16px] mb-[24px]">
                <span className="w-[32px] h-[2px] bg-orange"></span>
                <span className="text-orange font-body font-bold text-sm uppercase tracking-wider">Наши достижения</span>
              </div>

              <h2
                className="font-display font-[700] text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-brown mb-[16px]"
              >
                Результаты, которые говорят сами
              </h2>
              <p className="font-body text-brownLight text-base md:text-lg mb-[48px]">
                Достижения которых мы достигли
              </p>

              {/* Achievements List */}
              <div className="flex flex-col mb-[40px] w-full">
                {displayedItems.map((item, idx) => {
                  const isBlurred = !isExpanded && idx === 4;
                  return (
                    <div
                      key={idx}
                      className={`relative border-t-[0.8px] ${isBlurred ? '' : 'border-b-[0.8px]'} border-beigeStrong flex items-center gap-[16px] md:gap-[24px] overflow-hidden transition-all duration-500 py-4 min-h-[88px]`}
                    >
                      <div className={`flex items-start gap-[16px] md:gap-[24px] w-full ${isBlurred ? 'blur-[4px] opacity-40 pointer-events-none' : ''}`}>
                        <span className="font-display font-bold text-[24px] md:text-[32px] text-orange w-[24px] md:w-[32px] leading-none flex-shrink-0">{idx + 1}</span>
                        <p className="font-body text-brown text-[14px] md:text-[18px] font-bold leading-snug pr-4">
                          {item}
                        </p>
                      </div>

                      {/* Gradient fade overlay for the 5th item when collapsed */}
                      {isBlurred && (
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60 z-10"></div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center lg:justify-start w-full">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="px-[48px] py-[16px] bg-amber text-espresso font-body font-bold rounded-full transition-all hover:brightness-110 hover:-translate-y-1 hover:shadow-lg shadow-md w-full md:w-auto"
                >
                  {isExpanded ? "Скрыть" : "Смотреть все"}
                </button>
              </div>
            </div>

            {/* Right Column: Image and Quote */}
            <div className="relative flex flex-col items-center lg:items-start lg:mt-[345px] w-full lg:pl-[20px]">
              <div
                className="relative rounded-[30px] overflow-hidden shadow-xl w-full max-w-[452px] aspect-[452/422]"
              >
                <img src="/images/image 22.png" alt="Achievement" className="w-full h-full object-cover" />
              </div>

              {/* Overlapping Quote Box */}
              <div
                className="absolute -bottom-[24px] lg:-bottom-[40px] lg:right-[20px] bg-amber rounded-[20px] px-[24px] py-[20px] shadow-lg z-20 flex items-center justify-center text-center w-[90%] max-w-[417px] min-h-[79px]"
              >
                <p className="font-display font-[700] text-[16px] md:text-[20px] text-espresso">
                  “Место для цитаты _______”
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
