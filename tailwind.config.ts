import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import { createThemes } from 'tw-colors';

const pxToRem = (px: number, baseFontSize: number = 16): string => `${px / baseFontSize}rem`;

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    fontSize: {
      h1: [pxToRem(64), { lineHeight: pxToRem(76.8), fontWeight: '700' }],
      h2: [pxToRem(54), { lineHeight: pxToRem(64.8), fontWeight: '700' }],
      h3: [pxToRem(36), { lineHeight: pxToRem(43.2), fontWeight: '700' }],
      h4: [pxToRem(32), { lineHeight: pxToRem(38.4), fontWeight: '700' }],
      h5: [pxToRem(28), { lineHeight: pxToRem(33.6), fontWeight: '700' }],
      h6: [pxToRem(24), { lineHeight: pxToRem(36), fontWeight: '700' }],
      h7: [pxToRem(22), { lineHeight: pxToRem(33), fontWeight: '700' }],
      h8: [pxToRem(20), { lineHeight: pxToRem(30), fontWeight: '700' }],

      b18: [pxToRem(18), { lineHeight: pxToRem(27), fontWeight: '500' }],
      b16: [pxToRem(16), { lineHeight: pxToRem(24), fontWeight: '500' }],
      b14: [pxToRem(14), { lineHeight: pxToRem(21), fontWeight: '500' }],
      b12: [pxToRem(12), { lineHeight: pxToRem(18), fontWeight: '500' }],
      b10: [pxToRem(10), { lineHeight: pxToRem(15), fontWeight: '500' }],
      b8: [pxToRem(8), { lineHeight: pxToRem(12), fontWeight: '500' }],

      p16: [pxToRem(16), { lineHeight: pxToRem(24), fontWeight: '400' }],
      p14: [pxToRem(14), { lineHeight: pxToRem(21), fontWeight: '400' }],
      p12: [pxToRem(12), { lineHeight: pxToRem(18), fontWeight: '400' }],
      p10: [pxToRem(10), { lineHeight: pxToRem(15), fontWeight: '400' }],
      p8: [pxToRem(8), { lineHeight: pxToRem(12), fontWeight: '400' }],

      l16: [pxToRem(16), { lineHeight: pxToRem(24), fontWeight: '700' }],
      l14: [pxToRem(14), { lineHeight: pxToRem(21), fontWeight: '700' }],
      l12: [pxToRem(12), { lineHeight: pxToRem(18), fontWeight: '700' }],
      l10: [pxToRem(10), { lineHeight: pxToRem(15), fontWeight: '700' }],
      l8: [pxToRem(8), { lineHeight: pxToRem(12), fontWeight: '700' }],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      neutral: {
        white: '#FFFFFF',
        black: '#1E2002',
        gray: '#B2B9C3',
        semantic: '#F7F8FA',
        light: '#D8DADD',
        DEFAULT: '#8C98A4',
        main: '#8C98A4',
        dark: '#677788',
        darker: '#5D6A7C',
      },
      success: {
        semantic: '#E8F8F1',
        light: '#B8EAD3',
        DEFAULT: '#12B76A',
        main: '#12B76A',
        dark: '#0E9255',
        darker: '#0B6E40',
      },
      warning: {
        semantic: '#FEFBF3',
        light: '#FDEDCD',
        DEFAULT: '#F6C158',
        main: '#F6C158',
        dark: '#C59A46',
        darker: '#947435',
      },
      danger: {
        semantic: '#FDEDEB',
        light: '#F6BAB3',
        DEFAULT: '#E11900',
        main: '#E11900',
        dark: '#B41400',
        darker: '#870F00',
      },
      info: {
        semantic: '#EEF4FE',
        light: '#BFD4FB',
        DEFAULT: '#276EF1',
        main: '#276EF1',
        dark: '#1F58C1',
        darker: '#174291',
      },
    },
    extend: {
      screens: {
        xs: '475px',
      },
      fontWeight: {
        regular: '300',
      },
      boxShadow: {
        DEFAULT: '0 .375rem 1.5rem 0 rgba(140, 152, 164, .125)',
        sm: '0 .375rem .75rem rgba(140, 152, 164, .075)',
        lg: '0 .6125rem 2.5rem .6125rem rgba(140, 152, 164, .175)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    animate,
    createThemes(
      {
        light: {
          primary: {
            semantic: '#E6FFFA',
            light: '#B1F5EA',
            DEFAULT: '#319795',
            main: '#319795',
            dark: '#285E61',
            darker: '#234E52',
          },
        },
        dark: {
          primary: {
            semantic: '#E6FFFA',
            light: '#B1F5EA',
            DEFAULT: '#319795',
            main: '#319795',
            dark: '#285E61',
            darker: '#234E52',
          },
        },
        snow: {
          primary: {
            semantic: '#E6FFFA',
            light: '#B1F5EA',
            DEFAULT: '#319795',
            main: '#319795',
            dark: '#285E61',
            darker: '#234E52',
          },
        },
      },
      {
        defaultTheme: 'light',
      }
    ),
  ],
} satisfies Config;

export default config;
