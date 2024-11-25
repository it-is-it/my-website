/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6B21A8',
        secondary: '#9333EA',
        accent: '#8B5CF6',
      },
    },
  },
  plugins: [],
};
