/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        cardo: ["Cardo", "serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
