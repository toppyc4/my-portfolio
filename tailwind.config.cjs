/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      Crimson_Text: "'Crimson Text', serif",
      Fira_Code: "'Fira_Code', monospace",
    },
    extend: {
      spacing: {
        1500: "1500px",
        1300: "1300px",
      },
    },
  },
  plugins: [],
}
