/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //this is required to enable the darkmode using tailwind
  // important
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}

