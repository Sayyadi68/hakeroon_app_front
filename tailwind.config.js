/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Estedad-Regular'],
      },
      fontWeight: {
        thin: {
          fontFamily: 'Estedad-Thin',
          fontWeight: '100',
        },
        extralight: {
          fontFamily: 'Estedad-ExtraLight',
          fontWeight: '200',
        },
        light: {
          fontFamily: 'Estedad-Light',
          fontWeight: '300',
        },
        normal: {
          fontFamily: 'Estedad-Regular',
          fontWeight: '400',
        },
        medium: {
          fontFamily: 'Estedad-Medium',
          fontWeight: '500',
        },
        semibold: {
          fontFamily: 'Estedad-SemiBold',
          fontWeight: '600',
        },
        bold: {
          fontFamily: 'Estedad-Bold',
          fontWeight: '700',
        },
        extrabold: {
          fontFamily: 'Estedad-ExtraBold',
          fontWeight: '800',
        },
        black: {
          fontFamily: 'Estedad-Black',
          fontWeight: '900',
        },
      }
    }
  },
  plugins: [],
  nativewind: {
    rtl: true, // Enable RTL for NativeWind
  },
}
