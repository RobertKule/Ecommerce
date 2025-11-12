/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",   // tes fichiers HTML/JS dans pages/
    "./css/**/*.{html,js}",     // si tu as du JS ou HTML dans css/
  ],
  theme: {
    extend: {
      fontFamily: {
        perso: ['MaPolicePerso', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
