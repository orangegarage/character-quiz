/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        omega: {
          'pink': '#CB1069',
          'white': '#FDFDFD',
        }
      },
      spacing: {
        '112': '28rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
