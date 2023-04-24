/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary: '#064e3b',
        primary: '#064e3b',
        danger: '#e11d48',
      },
      strokeWidth: {
        1.5: '1.5',
      },
    },
  },
  plugins: [],
};
