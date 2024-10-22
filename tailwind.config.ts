import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#27272a',
          background2: '#18181B',
          text: '#e5ded6',
          buttons: '#f2cdcd',
          highlight: '#33A652'
        },
        light: {
          background: '#eff1f5',
          text: '#2b2926',
          buttons: '#dd7878',
          highlight: '#f0f0f0'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
};

export default config;