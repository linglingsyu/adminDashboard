/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#064e3b',
        danger: '#e11d48',
        secondary: 'e2e8f0',
        success: '#059669',
        warning: '#f8ca15',
        pedding: '#ec980b',
        dark: '#343e4e',
      },
      strokeWidth: {
        1.5: '1.5',
      },
      zIndex: {
        full: '999999',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
