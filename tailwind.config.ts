import { heroui } from "@heroui/react";
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-out': 'fade-in-out 1.5s infinite',
      },
      keyframes: {
        'fade-in-out': {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      addCommonColors: true,
      prefix: 'itc',
      themes: {
        light: {
          colors: {
            background: '#f9fcf7',
          },
        },
        dark: {
          colors: {
            background: '#000800',
          },
        },
      },
    }),
  ],
};
export default config;
