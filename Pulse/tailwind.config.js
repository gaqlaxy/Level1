/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pulsegreen: "#00ad6a",
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
