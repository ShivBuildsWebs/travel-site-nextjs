/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // ✅ THIS SECTION IS UPDATED FOR OPTIMIZED FONTS
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Sets Inter as the default body font
        serif: ['var(--font-playfair)', 'serif'], // Makes Playfair available via `font-serif`
      },
      
      // Your custom animations are preserved
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        floatGlow1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: 0.15 },
          '33%': { transform: 'translate(20%, 30%) scale(1.05)', opacity: 0.2 },
          '66%': { transform: 'translate(-10%, -20%) scale(0.95)', opacity: 0.1 },
        },
        floatGlow2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: 0.1 },
          '33%': { transform: 'translate(-20%, -30%) scale(1.1)', opacity: 0.15 },
          '66%': { transform: 'translate(10%, 20%) scale(0.9)', opacity: 0.08 },
        },
      },
      animation: {
        'gradient-shift': 'gradientShift 15s ease infinite',
        'fade-in': 'fadeIn 2s ease-out forwards',
        'float-glow-1': 'floatGlow1 20s ease-in-out infinite',
        'float-glow-2': 'floatGlow2 25s ease-in-out infinite reverse',
      },
    },
  },
  plugins: [],
};