/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#111827',

        'secondary': '#3166ae',
        'secondary-complement': '#1B3861',

        'tertiary': '#5d58a5',
        'tertiary-complement': '#322F59',

        'quaternary': '#b253a2',
        'quaternary-complement': '#66305D',

        'fifth': '#e09f2b',
        'fifth-complement': '#94681C',

        'sixth': '#03c4c4',
        'sixth-complement': '#027878',

        'text': '#2ff2e0',
        'seven': "#1f2937",
        // 'description-color': '#'
      },
      fontFamily: {
        'Montserrat':['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

