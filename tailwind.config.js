/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oleo: ['"Oleo Script Swash Caps"', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'footer-gradient': 'radial-gradient(154.2% 154.2% at 50% 154.2%, rgba(47, 102, 246, 0.20) 0%, rgba(47, 102, 246, 0.00) 100%), #0A0F29',
      },
    },
  },
  plugins: [],
}