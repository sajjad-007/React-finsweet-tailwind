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
        'white': '#FFF'
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

