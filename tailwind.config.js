/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ["Playfair Display", "serif"],
        Inter: ["Inter", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}

