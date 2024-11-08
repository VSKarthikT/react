/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Looks for files in all subdirectories within src
    "./*.{html,js,ts,jsx,tsx}", // Also checks root files if any remain
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
