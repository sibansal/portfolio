/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg:      '#020617',
        primary: '#3b82f6',
      },
      backgroundImage: {
        'grid-faint': "linear-gradient(to right,#ffffff08 1px,transparent 1px),linear-gradient(to bottom,#ffffff08 1px,transparent 1px)",
      },
    },
  },
  plugins: [],
}