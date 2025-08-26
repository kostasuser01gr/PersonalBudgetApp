/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",        // αν έχεις /pages directory
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",          // αν έχεις /src (modern Next.js)
  ],
  theme: {
    extend: {
      colors: {
        'luxury-green': '#17643A',
        emerald: {
          950: "#022c22",
        },
        // luxury-gradient δεν γίνεται να οριστεί σαν χρώμα (για gradients χρησιμοποίησε utility classes ή bg-gradient)
      },
      fontFamily: {
        sans: ['Geist Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        "3xl": "2rem",
        "2xl": "1.5rem",
      },
      // Μπορείς να βάλεις κι άλλες παραμετροποιήσεις εδώ (shadows, spacing, κλπ)
    },
  },
  plugins: [],
}
