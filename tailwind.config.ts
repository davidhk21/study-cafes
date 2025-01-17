import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'content-title': "var(--contentTitle)"
      },
      fontFamily: {
        libre: ['var(--font-libre-baskerville)'],
        sans: ['var(--font-source-sans)']
      },
      animation: {
        'fade-in': 'fadeIn 2s ease'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '.6'
          }
        }
      },
      aspectRatio: {
        '3 / 4': '3 / 4',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
