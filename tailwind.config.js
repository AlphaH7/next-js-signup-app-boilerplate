/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          100: '#e6f1ef',
          200: '#e0eeeb',
          300: '#d9eae7',
          400: '#cde3df',
          500: '#c1ddd8',
          600: '#adc6c2',
          700: '#222426',
          800: '#606e6c',
          900: '#4d5856',
        },
      },
    },
  },
  plugins: [],
};
