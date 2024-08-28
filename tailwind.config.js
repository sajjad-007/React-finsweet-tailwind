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
        // 'pera': '#F4F6FC',
        'pera': '#f4f6fcce',
      },
      spacing: {
        'container': '1280px',
      },
      fontFamily: {
        'poppins': '"Poppins", sans-serif',
      },
    },
  },
  plugins: [],
}

