import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#E6F7FF',
          100: '#BDEBFF',
          200: '#85D9FF',
          300: '#4CC6FF',
          400: '#1FB6FF',
          500: '#0097FF',
          600: '#0078CC',
          700: '#005A99',
          800: '#003D66',
          900: '#001F33'
        }
      }
    }
  },
  plugins: []
} satisfies Config
