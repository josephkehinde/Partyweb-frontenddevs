/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue':'rgb(14, 14, 36)'
      },
      fontFamily: {
        Playfair: ["Playfair Display", "serif"],
        Inter: ["Inter", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },
      screens: {
        'below-sm': {'max': '640px'},
        'mobile': {'max': '480px'},

      },
    },
  },
  plugins: [],
}