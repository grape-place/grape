/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3ED',
        grape: '#7B103B',
        pink: '#F9BDF0',
        orange: '#FF9F3C',
        green: '#075B4B',
        ink: '#1C1B1A',
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(74, 15, 42, .10)',
      },
    },
  },
  plugins: [],
}
