/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // TS support too
  darkMode: 'class', // Enables dark mode toggle (manual class-based)
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#FFB800',
          dark: '#0a0a0a',
          light: '#fffaf0',
        },
      },
      backgroundImage: {
        'ipl-radial': "radial-gradient(circle at center, #FFB800 0%, transparent 70%)",
      },
      boxShadow: {
        yellowGlow: '0 0 10px #FFB800',
      },
    },
  },
  plugins: [],
};
