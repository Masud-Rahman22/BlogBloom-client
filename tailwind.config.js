/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        merienda: "'Merienda', cursive",
        libreFranklin: "Libre Franklin, sans-serif;"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

