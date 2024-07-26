/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      md: '900px',
      lg: '1100px'
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'grey': {
          100: '#F0F0F0',
          200: '#CFCFCF',
        },
        'electric-blue': '#006EEB',
        'fluidic-blue': '#003278',
      },
      fontFamily: {
        'sans': ['NeueHaasGrotesk', 'sans-serif'],
      }, 
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      }
    },
  },
  plugins: [],
}

