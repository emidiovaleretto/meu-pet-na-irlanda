/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'serif': ['"Spectral"', 'Georgia'],
      },
      boxShadow: {
        'custom': '0 0 0 3px #fea, 0 0 0 4px #fb1',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

