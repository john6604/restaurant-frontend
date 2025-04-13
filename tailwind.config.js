/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vino: "#8B0000",
        crema: "#FFF8DC",
        marron: "#4B2E2E",
      },
    },
  },
  plugins: [],
};
