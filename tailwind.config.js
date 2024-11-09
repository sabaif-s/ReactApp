/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        'slide-down': 'slideDown 2.3s ease-in-out forwards',
        'fade-in': 'fadeIn 1.5s ease-in forwards',
        'fade-in-always':"fadeInA 2s ease-in-out infinite",
        'fade-out': 'fadeOut 2s ease-in-out forwards',
        'shake': 'shake 1.5s ease-in-out',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInA: {
          '0%': { opacity: 0.95 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        shake: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-10px) translateY(-10px)' },
          '50%': { transform: 'translateX(10px) translateY(10px)' },
          '75%': { transform: 'translateX(-10px) translateY(-10px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
      },
    },

  },
  plugins: [],
}