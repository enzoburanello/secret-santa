/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Chemins pour tes fichiers React (JSX, TSX)
      "./public/index.html",        // Pour ton fichier HTML principal
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E3A8A",
          secondary: "#F59E0B",
        },
      },
    },
    plugins: [],
  };