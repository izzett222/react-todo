/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        small: "-1px -1px 37px -8px rgba(0,0,0,0.45)"
      }
    },
  },
  plugins: [],
}
