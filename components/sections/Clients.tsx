import React from 'react';

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default function Clients() {
  const clients = [
    {
      name: 'Барыс Арена',
      sub: 'Островок и основная точка',
      address: 'Проспект Туран, 57, Астана',
      image: '/images/image 13.svg'
    },
    {
      name: 'Mercedes Benz Astana',
      sub: 'Поставили 1 микромаркет',
      address: 'Проспект Туран, 61',
      image: '/images/image 14.svg'
    },
    {
      name: 'KPMG Astana',
      sub: 'Поставили 2 микромаркета',
      address: 'улица Гейдара Алиева, 16',
      image: '/images/image 15.svg'
    },
    {
      name: 'Sergek Group Astana',
      sub: 'Поставили 1 микромаркет',
      address: 'проспект Туран, 9Б',
      image: '/images/image 13.svg'
    },
    // Adding duplicates or placeholders to maintain the scroll effect as in original code
    {
      name: 'BARYS',
      sub: 'Островок и основная точка',
      address: 'Проспект Туран, 57, Астана',
      image: '/images/image 13.svg'
    },
    {
      name: 'BARYS',
      sub: 'Островок и основная точка',
      address: 'Проспект Туран, 57, Астана',
      image: '/images/image 13.svg'
    }
  ];

  return (
    <section className="py-[96px] md:py-[128px] bg-cream overflow-hidden">
      <div className="max-w-[1514px] mx-auto px-4 sm:px-8 md:px-[34px]">
        {/* Header */}
        <div className="flex flex-col mb-[48px]">
          <div className="flex items-center gap-[16px] mb-[24px]">
            <span className="w-[32px] h-[2px] bg-orange"></span>
            <span className="text-orange font-body font-[600] text-[14px] leading-[1.4] uppercase tracking-wider">Наши пользователи</span>
          </div>

          <h2 className="font-display font-[700] text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-brown mb-[16px]">
            Нам доверяют
          </h2>

          <p className="font-body text-[16px] md:text-[18px] leading-[1.6] text-brownLight font-[400] max-w-[600px]">
            Ведущие компании Казахстана выбирают vbox для комфорта своих сотрудников.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="pl-4 sm:pl-8 md:pl-[max(34px,calc((100vw-1514px)/2+34px))] overflow-x-auto pb-[48px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-[24px] w-max pr-4 sm:pr-8 md:pr-[34px]">
          {clients.map((client, i) => (
            <div key={i} className="bg-white rounded-[32px] p-[32px] w-[300px] min-h-[460px] flex flex-col items-center shrink-0 border border-beigeStrong/50 shadow-sm transition-transform hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              {/* Logo Box */}
              <div className="h-[140px] w-full flex items-center justify-center mb-[32px]">
                <img src={client.image} alt={client.name} className="max-h-full max-w-full object-contain" />
              </div>
              
              <div className="flex flex-col items-center text-center gap-[12px] flex-grow justify-center">
                <p className="font-body font-[800] text-brown text-[20px] leading-tight">{client.name}</p>
                <p className="font-body text-brownLight text-[15px] font-[500]">{client.sub}</p>
                <p className="font-body text-brownLight/70 text-[14px] mt-[16px] flex items-center gap-[6px]">
                  <PinIcon className="w-[14px] h-[14px] shrink-0" /> адрес: {client.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
