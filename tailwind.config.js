/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/layouts/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      colors: {
        brand: {
          dark: "#0a1f38",
          primary: "#003366",
          light: "#f4f5f4",
          secondary: "#b6873c",
          gray: "#5c6672",
        },
      },
    },
  },
  plugins: [],
};
