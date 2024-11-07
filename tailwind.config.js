/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js,ts,jsx,tsx}", // Looks for files in the root directory
  ],
  theme: {
    extend: {
      fontFamily: {
        fontcustom: ["Anton SC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
