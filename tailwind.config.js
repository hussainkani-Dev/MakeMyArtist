/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: "#CF2475",
          purple: "#350C4E",
        },
        secondary: {
          magenta: "#E05E7A",
          purple: "#64216D",
          rose: "#A01B5D",
        },
        accent: {
          gold: "#D4A85A",
        },
        softPink: "#F7DBEC",
        charcoal: "#231C22",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
