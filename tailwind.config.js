/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF7652',
        purple: '#6C5ECF',
        'light-blue': '#32A8E2',
      },
    },
    keyframes: {
      fade: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      scaleIn: {
        '0%': {
          opacity: 0,
          transform: 'scale(0.9)',
        },
        '50%': {
          opacity: 0.3,
        },
        '100%': {
          opacity: 1,
          transform: 'scale(1)',
        },
      },
    },
    animation: {
      fade: 'fade 0.4s ease-in-out',
      scaleIn: 'scaleIn .35s ease-in-out',
    },
  },
}
