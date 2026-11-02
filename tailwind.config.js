/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#fffdf8',
          200: '#faf5ee',
          300: '#f4ede1',
          400: '#e8dcce',
        },
        brand: {
          dark: '#1e1610',
          heading: '#2c221a',
          body: '#4a3f35',
          muted: '#7a6e63',
          warm: '#b87c4c',
          accent: '#d97736',
          sand: '#f6f1ea',
          border: '#e8dfd5'
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Figtree', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        hand: ['"Shantell Sans"', 'cursive', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(74, 52, 34, 0.06)',
        'lift': '0 16px 36px rgba(74, 52, 34, 0.10)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
