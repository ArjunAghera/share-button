/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandDark: "#111827",
        brandLightGray: "#F9FAFB",
        brandDarkGray: "#6B7280",
      },
      fontFamily: {
        bransDeafult: ["Inter"],
      },
    },
  },
  plugins: [],
};
