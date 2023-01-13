module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    fontFamily: {
      sans: 'Roboto',
    },
    fontWeight: {
      black: 900,
      semibold: 600,
      medium: 500,
      normal: 400,
    },
    fontSize: {
      xs: '14px',
      sm: '15px',
      base: '16px',
      xl: '20px',
      '2xl': '24px',
      '5xl': '48px',
    },
    lineHeight: {
      'leading-3': '16px',
      'leading-4': '18px',
      'leading-5': '19px',
      'leading-6': '23px',
      'leading-7': '28px',
      'leading-8': '56px',
    },
    dropShadow: {
      '1xl': '0px 2px 4px rgba(0,0,0,0.25)',
    },
    extend: {
      colors: {
        primary: {
          blue: '#1B4DB1',
          yellow: '#F3F243',
          pink: '#FF64BC',
          black: '#000000',
          blackLight: '#1A1E2E',
          grayDark: '#6E6A6C',
          gray: '#A7A6A7',
          grayLight: '#D9D9D9',
          grayLighter: '#F8F7FA',
        },
        secondary: {
          red: '#EF3F47',
        },
      },
    },
  },
  plugins: [],
};
