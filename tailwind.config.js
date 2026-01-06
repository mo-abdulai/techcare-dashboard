/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: "#D9F7F3",      // active patient bg
        muted: "#7A7A7A",
        bg: "#F6F7F9",
      },
      borderRadius: {
        xl: "16px",
      },
    },
  },
  plugins: [],
};
