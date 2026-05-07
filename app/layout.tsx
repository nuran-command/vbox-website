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

export const metadata: Metadata = {
  title: "vbox - Social Project",
  description: "Мы расширяем возможности людей с особыми потребностями через технологии и значимую занятость.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${unbounded.variable} ${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
