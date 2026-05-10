import type { Metadata } from "next";
import { Unbounded, Nunito } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  weight: ["700", "800"],
});

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "700"],
});

import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "vbox - Social Project",
  description: "Мы расширяем возможности людей с особыми потребностями через технологии и значимую занятость.",
  icons: {
    icon: '/images/Group 206.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${unbounded.variable} ${nunito.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
