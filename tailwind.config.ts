import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        orange:       '#E8721A',  // primary accent, CTAs, headings
        amber:        '#F5C518',  // secondary accent (stats button, CTA section)
        yellow:       '#FEBB01',  // form section bg, footer logo
        
        // Dark / Text
        espresso:     '#1A1208',  // footer bg
        brown:        '#2C2210',  // primary dark text, headings
        brownMid:     '#6B5B3E',  // secondary text, muted labels
        brownLight:   '#A0927A',  // placeholder, caption text
        
        // Backgrounds
        cream:        '#FFFCF7',  // main page bg
        creamLight:   '#FCF8ED',  // section bg variant
        creamWarm:    '#EDE6D8',  // cards bg, subtle sections
        creamCard:    '#F5F0E8',  // client cards bg
        peach:        '#FCE8D4',  // contact card bg (soft orange tint)
        beigeStrong:  '#EAE7DF',  // dividers, borders
        
        // Neutrals
        white:        '#FFFFFF',
        black:        '#000000',
        gray:         '#757575',  // input placeholder text
        grayLight:    '#E0D5C0',  // input borders
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],  // все крупные заголовки
        body:    ['Nunito', 'sans-serif'],     // весь body text, кнопки, labels
      },
    },
  },
  plugins: [],
}
export default config
