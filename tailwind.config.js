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
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(ellipse farthest-corner at 45px 45px, rgba(255, 255, 255, 0.9) 0%, rgba(80, 80, 80, 0.3) )',
        'landing-gradient':
          'radial-gradient(ellipse farthest-corner at 45px 45px, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.9) )',
      },
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
        blue: {
          100: '#e1eded',
          200: '#c4dbdc',
          300: '#bbd5d6',
          400: '#b1cfd0',
          500: '#9ec4c5',
          600: '#8eb0b1',
          700: '#6e8989',
          800: '#5e7576',
          900: '#3f4e4e',
        },
        peach: {
          100: '#fbf4f1',
          200: '#faf1ed',
          300: '#f8ece6',
          400: '#f7e9e3',
          500: '#f5e4dc',
          600: '#c4b6b0',
          700: '#ab9f9a',
          800: '#7a726e',
          900: '#494442',
        },
        pink: {
          100: '#f8e0e0',
          200: '#f7dada',
          300: '#f5d4d4',
          400: '#f4cece',
          500: '#f2c2c2',
          600: '#d9aeae',
          700: '#c19b9b',
          800: '#a98787',
          900: '#917474',
        },
      },
    },
  },
  plugins: [],
};
