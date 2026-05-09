import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#0F0F0F] text-white py-12 md:py-16">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Top Row: Logo, Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Link href="/" className="flex items-center">
              <img src="/images/vbox_logo.png" alt="vbox logo" className="h-10 w-auto object-contain" />
            </Link>
            <span className="text-white/40 text-[14px] font-body mt-1 md:mt-0">
              {t('footer.copy')}
            </span>
          </div>
        </div>

        {/* Bottom Row: Description and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-[500px]">
            <p className="text-white/70 text-[14px] md:text-[16px] font-body leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://2gis.kz/astana" target="_blank" rel="noopener noreferrer" className="w-10 h-10 transition-transform hover:scale-110">
              <img src="https://logo-teka.com/wp-content/uploads/2025/06/2gis-icon-logo.png" alt="2GIS" className="w-full h-full object-contain" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-[#229ED9] flex items-center justify-center transition-transform hover:scale-110">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.96-.75 3.78-1.65 6.31-2.74 7.58-3.27 3.61-1.51 4.35-1.77 4.84-1.78.11 0 .35.03.5.16.13.11.17.26.18.37 0 .04.01.12 0 .19z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FFB347] via-[#FF3D77] to-[#833AB4] flex items-center justify-center transition-transform hover:scale-110">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"></line>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
