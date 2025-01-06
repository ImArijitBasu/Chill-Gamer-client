/** @type {import('tailwindcss').Config} */
export default {
   darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins" : "Poppins",
        "error" :  "Edu AU VIC WA NT Arrows",
      },
      animation: {
        spinSlow: 'spin 10s linear infinite', 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

