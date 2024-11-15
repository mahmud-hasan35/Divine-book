/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-background': '#121212',
        'dark-text': '#e0e0e0',
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
}
