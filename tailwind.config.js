/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1C1E53',
        'secondary': '#FCD980',
        'sada': '#fff',
        'black': '#000000',
        'pera': '#f4f6fcce',
        'blue': '#2405F2',
        'accent':'#EEF4FA',
        'dark-blue': '#282938',
        'dark-blue-lite': '#2829389e',
        'yellow': '#FCD980',
        'green': '#97DAAD',
        

      },
      spacing: {
        'container': '1280px',
        'section_padding' : '128px',
        'section_margin' : '128px',
      },
      fontFamily: {
        'poppins': '"Poppins", sans-serif',
      },
    },
  },
  plugins: [],
}

