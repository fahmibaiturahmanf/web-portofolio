/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#1E1E1E',
      },
    },
  },
  plugins: [],
}