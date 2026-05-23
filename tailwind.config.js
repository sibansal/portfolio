/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#061316',
        primary: '#538e97',
        accent: {
          100: '#DCEBED',
          200: '#BDD7DB',
          300: '#9CC2C8',
          400: '#79AAB2',
          500: '#4F8C96',
          600: '#437882',
          700: '#37666D',
          800: '#294C52',
        },
      },
      backgroundImage: {
        'grid-faint': "linear-gradient(to right,#ffffff08 1px,transparent 1px),linear-gradient(to bottom,#ffffff08 1px,transparent 1px)",
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        typing: 'typing 3s steps(40, end) forwards',
        cursor: 'blink 1s infinite 3s',
      },
    },
  },
  plugins: [],
}