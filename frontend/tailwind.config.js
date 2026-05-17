/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        proempresa: {
          green: "#00843D",
          darkgreen: "#005C2B",
          lightgreen: "#E8F5EE",
          gold: "#F5A623",
        }
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Source Sans 3'", "sans-serif"],
      }
    }
  },
  plugins: []
}
